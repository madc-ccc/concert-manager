const V='mc-v9';
const CDN='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./logo.png','./ban_week.png','./ban_next.png','./ban_later.png'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(V).then(c=>Promise.all([c.addAll(SHELL),c.add(new Request(CDN,{mode:'cors'})).catch(()=>{})])).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
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
    for(const c of cs){if('focus' in c)return c.focus()}
    return self.clients.openWindow((e.notification.data&&e.notification.data.url)||'./');
  }));
});
