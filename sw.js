const V='mc-v27';
const CDN='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./logo.png','./i18n.js'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(V).then(c=>Promise.all([c.addAll(SHELL),c.add(new Request(CDN,{mode:'cors'})).catch(()=>{})])).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V&&x!=='mc-share').map(x=>caches.delete(x)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  // PDF partagé vers l'app (share_target) : on le garde de côté, la page le reprend à l'ouverture
  if(r.method==='POST'&&u.origin===location.origin&&/\/share$/.test(u.pathname)){
    e.respondWith((async()=>{
      try{const fd=await r.formData(),f=fd.get('billet');
        if(f&&typeof f!=='string'){const c=await caches.open('mc-share');await c.put('./shared-billet',new Response(f,{headers:{'Content-Type':'application/pdf','X-Name':encodeURIComponent(f.name||'billet.pdf')}}))}
      }catch(x){}
      return Response.redirect('./?share=1',303);
    })());return;
  }
  if(r.method!=='GET'||u.hostname.endsWith('supabase.co'))return;
  if(u.origin!==location.origin&&u.hostname!=='cdn.jsdelivr.net')return;
  const put=res=>{if(res.ok){const c=res.clone();caches.open(V).then(x=>x.put(r,c))}return res};
  const cached=()=>caches.match(r).then(m=>m||(r.mode==='navigate'?caches.match('./index.html'):undefined));
  // Bibliothèque versionnée : cache d'abord (elle ne change jamais)
  if(u.hostname==='cdn.jsdelivr.net'){e.respondWith(caches.match(r).then(m=>m||fetch(r).then(put)));return}
  // Reste : réseau d'abord, mais sans jamais attendre plus de 4 s si une copie existe en cache
  e.respondWith(new Promise((ok,ko)=>{
    let done=false;const fin=v=>{if(!done){done=true;ok(v)}};
    const net=fetch(r).then(put);
    const t=setTimeout(()=>cached().then(m=>{if(m)fin(m)}),4000);
    net.then(res=>{clearTimeout(t);fin(res)}).catch(()=>{clearTimeout(t);cached().then(m=>m?fin(m):(done||ko(new TypeError('offline'))))});
  }));
});
self.addEventListener('push',e=>{
  let d={};try{d=e.data?e.data.json():{}}catch(x){d={body:e.data?e.data.text():''}}
  e.waitUntil(self.registration.showNotification(d.title||'In The Pit',{body:d.body||'',tag:d.tag||undefined,icon:'./icon-192.png',badge:'./icon-192.png',data:{url:d.url||'./'}}));
});
self.addEventListener('notificationclick',e=>{
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{
    const url=(e.notification.data&&e.notification.data.url)||'./',m=url.match(/[?&]ami=([0-9a-f-]+)/i);
    for(const c of cs){if('focus' in c){if(m)c.postMessage({ami:m[1]});return c.focus()}}
    return self.clients.openWindow(url);
  }));
});
