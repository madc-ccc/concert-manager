/* i18n — French strings are the keys; en/es/it are the translations. */
const LANGS={en:'English',fr:'Français',es:'Español',it:'Italiano'};
const LOCALES={en:'en-GB',fr:'fr-FR',es:'es-ES',it:'it-IT'};
let LANG='en';try{const l=localStorage.getItem('lang');if(LANGS[l])LANG=l}catch(e){}
document.documentElement.lang=LANG;
const DICT={
"...vous aide à gérer vos concerts !": ["...helps you manage your concerts!", "...te ayuda a gestionar tus conciertos!", "...ti aiuta a gestire i tuoi concerti!"],
"Première connexion ? Cliquez sur « Mot de passe oublié ? » pour définir votre mot de passe pour la toute première fois.": ["First time signing in? Click “Forgot your password?” to set your password for the very first time.", "¿Primer inicio de sesión? Haz clic en «¿Olvidaste tu contraseña?» para definir tu contraseña por primera vez.", "Primo accesso? Clicca su «Password dimenticata?» per impostare la password per la primissima volta."],
"Chargement…": [
"Loading…",
"Cargando…",
"Caricamento…"
],
"Connectez-vous pour accéder à vos concerts.": [
"Sign in to access your concerts.",
"Inicia sesión para acceder a tus conciertos.",
"Accedi per vedere i tuoi concerti."
],
"E-mail": [
"Email",
"Correo electrónico",
"E-mail"
],
"Mot de passe": [
"Password",
"Contraseña",
"Password"
],
"Se connecter": [
"Sign in",
"Iniciar sesión",
"Accedi"
],
"Mot de passe oublié ?": [
"Forgot your password?",
"¿Olvidaste tu contraseña?",
"Password dimenticata?"
],
"Bienvenue ! Choisissez votre mot de passe pour accéder à l’application.": [
"Welcome! Choose your password to access the app.",
"¡Bienvenido! Elige tu contraseña para acceder a la aplicación.",
"Benvenuto! Scegli la tua password per accedere all’app."
],
"Nouveau mot de passe (8 caractères minimum)": [
"New password (8 characters minimum)",
"Nueva contraseña (mínimo 8 caracteres)",
"Nuova password (minimo 8 caratteri)"
],
"Confirmer le mot de passe": [
"Confirm password",
"Confirmar contraseña",
"Conferma password"
],
"Enregistrer et entrer": [
"Save and enter",
"Guardar y entrar",
"Salva ed entra"
],
"Ajouter un concert": [
"Add a concert",
"Añadir un concierto",
"Aggiungi un concerto"
],
"Artiste, salle, ville…": [
"Artist, venue, city…",
"Artista, sala, ciudad…",
"Artista, locale, città…"
],
"Enregistrer la liste en image": [
"Save the list as an image",
"Guardar la lista como imagen",
"Salva l’elenco come immagine"
],
"Inclure les premières parties": [
"Include opening acts",
"Incluir teloneros",
"Includi i gruppi di supporto"
],
"Afficher les concerts « Pas vu »": [
"Show “Not seen” concerts",
"Mostrar conciertos «No visto»",
"Mostra i concerti «Non visto»"
],
"Futur": [
"Upcoming",
"Próximos",
"Futuri"
],
"Passé": [
"Past",
"Pasados",
"Passati"
],
"Tous": [
"All",
"Todos",
"Tutti"
],
"Statistiques": [
"Statistics",
"Estadísticas",
"Statistiche"
],
"Concerts vus par an": [
"Concerts seen per year",
"Conciertos vistos por año",
"Concerti visti per anno"
],
"Touchez une barre": [
"Tap a bar",
"Toca una barra",
"Tocca una barra"
],
"Répartition dans l’année": [
"Distribution through the year",
"Distribución a lo largo del año",
"Distribuzione nell’anno"
],
"Par semaines": [
"By weeks",
"Por semanas",
"Per settimane"
],
"Par mois": [
"By months",
"Por meses",
"Per mesi"
],
"Artistes les plus vus": [
"Most-seen artists",
"Artistas más vistos",
"Artisti più visti"
],
"Salles les plus fréquentées": [
"Most-visited venues",
"Salas más frecuentadas",
"Locali più frequentati"
],
"Options": [
"Options",
"Opciones",
"Opzioni"
],
"Langue": [
"Language",
"Idioma",
"Lingua"
],
"Photos des groupes": [
"Band photos",
"Fotos de los grupos",
"Foto dei gruppi"
],
"Tapez le nom d’un groupe…": [
"Type a band name…",
"Escribe el nombre de un grupo…",
"Digita il nome di un gruppo…"
],
"La photo apparaît en fond des cartes du groupe. Elle est réduite automatiquement à quelques Ko.": [
"The photo appears in the background of the band’s cards. It is automatically shrunk to a few KB.",
"La foto aparece de fondo en las tarjetas del grupo. Se reduce automáticamente a unos pocos KB.",
"La foto appare sullo sfondo delle schede del gruppo. Viene ridotta automaticamente a pochi KB."
],
"Notifications": [
"Notifications",
"Notificaciones",
"Notifiche"
],
"Rappels envoyés à 18 h avant vos concerts à venir.": [
"Reminders sent at 6 PM before your upcoming concerts.",
"Recordatorios enviados a las 18:00 antes de tus próximos conciertos.",
"Promemoria inviati alle 18:00 prima dei tuoi prossimi concerti."
],
"Une semaine avant": [
"One week before",
"Una semana antes",
"Una settimana prima"
],
"La veille": [
"The day before",
"El día anterior",
"Il giorno prima"
],
"Le jour même": [
"The same day",
"El mismo día",
"Lo stesso giorno"
],
"Activer sur cet appareil": [
"Enable on this device",
"Activar en este dispositivo",
"Attiva su questo dispositivo"
],
"Désactiver sur cet appareil": [
"Disable on this device",
"Desactivar en este dispositivo",
"Disattiva su questo dispositivo"
],
"Envoyer un test": [
"Send a test",
"Enviar una prueba",
"Invia un test"
],
"Fond d’écran": [
"Wallpaper",
"Fondo de pantalla",
"Sfondo"
],
"Choisir une image": [
"Choose an image",
"Elegir una imagen",
"Scegli un’immagine"
],
"Rétablir le fond par défaut": [
"Restore default wallpaper",
"Restablecer el fondo predeterminado",
"Ripristina lo sfondo predefinito"
],
"Mon nom affiché": [
"My display name",
"Mi nombre visible",
"Il mio nome visualizzato"
],
"Enregistrer": [
"Save",
"Guardar",
"Salva"
],
"C’est le nom que verront les personnes qui consultent vos concerts.": [
"This is the name people viewing your concerts will see.",
"Es el nombre que verán las personas que consulten tus conciertos.",
"È il nome che vedranno le persone che consultano i tuoi concerti."
],
"Partager mes concerts (lecture seule)": [
"Share my concerts (read-only)",
"Compartir mis conciertos (solo lectura)",
"Condividi i miei concerti (sola lettura)"
],
"E-mail de la personne": [
"Person’s email",
"Correo de la persona",
"E-mail della persona"
],
"Partager": [
"Share",
"Compartir",
"Condividi"
],
"La personne doit déjà avoir un compte. Elle pourra consulter vos concerts, sans les modifier ni ouvrir vos billets.": [
"The person must already have an account. They will be able to view your concerts, without editing them or opening your tickets.",
"La persona ya debe tener una cuenta. Podrá consultar tus conciertos, sin modificarlos ni abrir tus entradas.",
"La persona deve avere già un account. Potrà consultare i tuoi concerti, senza modificarli né aprire i tuoi biglietti."
],
"Compte": [
"Account",
"Cuenta",
"Account"
],
"Se déconnecter": [
"Sign out",
"Cerrar sesión",
"Esci"
],
"Application": [
"App",
"Aplicación",
"App"
],
"Vider le cache et recharger": [
"Clear cache and reload",
"Vaciar la caché y recargar",
"Svuota la cache e ricarica"
],
"Utile si l’affichage semble figé après une mise à jour du site.": [
"Useful if the display seems frozen after a site update.",
"Útil si la pantalla parece bloqueada tras una actualización del sitio.",
"Utile se la visualizzazione sembra bloccata dopo un aggiornamento del sito."
],
"Historique des modifications": [
"Change history",
"Historial de cambios",
"Cronologia delle modifiche"
],
"Afficher l’historique": [
"Show history",
"Mostrar el historial",
"Mostra la cronologia"
],
"Masquer l’historique": [
"Hide history",
"Ocultar el historial",
"Nascondi la cronologia"
],
"‹ Concerts": [
"‹ Concerts",
"‹ Conciertos",
"‹ Concerti"
],
"Type": [
"Type",
"Tipo",
"Tipo"
],
"Concert": [
"Concert",
"Concierto",
"Concerto"
],
"Évènement privé": [
"Private event",
"Evento privado",
"Evento privato"
],
"Artiste / Groupe *": [
"Artist / Band *",
"Artista / Grupo *",
"Artista / Gruppo *"
],
"ex. Archive, Noir Désir…": [
"e.g. Archive, Noir Désir…",
"p. ej. Archive, Noir Désir…",
"es. Archive, Noir Désir…"
],
"Date du concert": [
"Concert date",
"Fecha del concierto",
"Data del concerto"
],
"Description *": [
"Description *",
"Descripción *",
"Descrizione *"
],
"Date *": [
"Date *",
"Fecha *",
"Data *"
],
"ex. Dîner chez Cécile, anniversaire…": [
"e.g. Dinner at Cécile’s, birthday…",
"p. ej. Cena en casa de Cécile, cumpleaños…",
"es. Cena da Cécile, compleanno…"
],
"Assisté ?": [
"Attended?",
"¿Asistido?",
"Partecipato?"
],
"Projet / À voir": [
"Planned / To see",
"Proyecto / Por ver",
"Progetto / Da vedere"
],
"Oui": [
"Yes",
"Sí",
"Sì"
],
"Non": [
"No",
"No",
"No"
],
"Première partie ?": [
"Opening act?",
"¿Telonero?",
"Gruppo di supporto?"
],
"Place achetée ?": [
"Ticket bought?",
"¿Entrada comprada?",
"Biglietto acquistato?"
],
"(gratuit)": [
"(free)",
"(gratis)",
"(gratuito)"
],
"(pas de résa)": [
"(no booking)",
"(sin reserva)",
"(senza prenotazione)"
],
"(prix libre)": [
"(pay what you want)",
"(precio libre)",
"(prezzo libero)"
],
"Billet (PDF)": [
"Ticket (PDF)",
"Entrada (PDF)",
"Biglietto (PDF)"
],
"Salle": [
"Venue",
"Sala",
"Locale"
],
"ex. Le Transbordeur": [
"e.g. Le Transbordeur",
"p. ej. Le Transbordeur",
"es. Le Transbordeur"
],
"Ville": [
"City",
"Ciudad",
"Città"
],
"ex. Villeurbanne": [
"e.g. Villeurbanne",
"p. ej. Villeurbanne",
"es. Villeurbanne"
],
"Pays": [
"Country",
"País",
"Paese"
],
"Événement / Tournée": [
"Event / Tour",
"Evento / Gira",
"Evento / Tour"
],
"ex. Call To Arms Tour": [
"e.g. Call To Arms Tour",
"p. ej. Call To Arms Tour",
"es. Call To Arms Tour"
],
"Rechercher": [
"Search",
"Buscar",
"Cerca"
],
"En compagnie de": [
"With",
"En compañía de",
"In compagnia di"
],
"ex. Stéphane, Cécile…": [
"e.g. Stéphane, Cécile…",
"p. ej. Stéphane, Cécile…",
"es. Stéphane, Cécile…"
],
"Prix (€)": [
"Price (€)",
"Precio (€)",
"Prezzo (€)"
],
"ex. 35": [
"e.g. 35",
"p. ej. 35",
"es. 35"
],
"Notes": [
"Notes",
"Notas",
"Note"
],
"Impressions, anecdotes…": [
"Impressions, anecdotes…",
"Impresiones, anécdotas…",
"Impressioni, aneddoti…"
],
"Annuler": [
"Cancel",
"Cancelar",
"Annulla"
],
"Dupliquer": [
"Duplicate",
"Duplicar",
"Duplica"
],
"Supprimer cette entrée": [
"Delete this entry",
"Eliminar esta entrada",
"Elimina questa voce"
],
"Stats": [
"Stats",
"Stats",
"Stats"
],
"Quel billet ouvrir ?": [
"Which ticket to open?",
"¿Qué entrada abrir?",
"Quale biglietto aprire?"
],
"Fermer": [
"Close",
"Cerrar",
"Chiudi"
],
"Erreur au démarrage : ": [
"Startup error: ",
"Error al iniciar: ",
"Errore all’avvio: "
],
"inconnue": [
"unknown",
"desconocido",
"sconosciuto"
],
"Impossible de charger {0}. Vérifiez la connexion Internet.": [
"Unable to load {0}. Check your Internet connection.",
"No se puede cargar {0}. Comprueba la conexión a Internet.",
"Impossibile caricare {0}. Controlla la connessione a Internet."
],
"Le chargement est trop long. Vérifiez la connexion Internet.": [
"Loading is taking too long. Check your Internet connection.",
"La carga tarda demasiado. Comprueba la conexión a Internet.",
"Il caricamento è troppo lungo. Controlla la connessione a Internet."
],
"Cette semaine !": [
"This week!",
"¡Esta semana!",
"Questa settimana!"
],
"La semaine prochaine !": [
"Next week!",
"¡La próxima semana!",
"La prossima settimana!"
],
"Plus tard…": [
"Later…",
"Más adelante…",
"Più avanti…"
],
"Aucun concert ne correspond à ces filtres.": [
"No concerts match these filters.",
"Ningún concierto coincide con estos filtros.",
"Nessun concerto corrisponde a questi filtri."
],
"Total concerts": [
"Total concerts",
"Total de conciertos",
"Concerti totali"
],
"depuis {0}": [
"since {0}",
"desde {0}",
"dal {0}"
],
"Vus en live": [
"Seen live",
"Vistos en directo",
"Visti dal vivo"
],
"du total": [
"of total",
"del total",
"del totale"
],
"En projet": [
"Planned",
"En proyecto",
"In programma"
],
"Pays visités": [
"Countries visited",
"Países visitados",
"Paesi visitati"
],
"pour des concerts": [
"for concerts",
"por conciertos",
"per concerti"
],
"{0} : {1} concert": [
"{0}: {1} concert",
"{0}: {1} concierto",
"{0}: {1} concerto"
],
"{0} : {1} concerts": [
"{0}: {1} concerts",
"{0}: {1} conciertos",
"{0}: {1} concerti"
],
"Semaine {0}": [
"Week {0}",
"Semana {0}",
"Settimana {0}"
],
"Aucun concert à enregistrer.": [
"No concerts to save.",
"No hay conciertos que guardar.",
"Nessun concerto da salvare."
],
"{0} – recherche « {1} »": [
"{0} – search “{1}”",
"{0} – búsqueda «{1}»",
"{0} – ricerca «{1}»"
],
"{0} premiers concerts sur {1}": [
"first {0} concerts out of {1}",
"primeros {0} conciertos de {1}",
"primi {0} concerti su {1}"
],
"{0} concert": [
"{0} concert",
"{0} concierto",
"{0} concerto"
],
"{0} concerts": [
"{0} concerts",
"{0} conciertos",
"{0} concerti"
],
"Création de l’image…": [
"Creating the image…",
"Creando la imagen…",
"Creazione dell’immagine…"
],
"Image JPEG": [
"JPEG image",
"Imagen JPEG",
"Immagine JPEG"
],
"Impossible de créer l’image : {0}": [
"Unable to create the image: {0}",
"No se puede crear la imagen: {0}",
"Impossibile creare l’immagine: {0}"
],
"Connexion impossible : {0}": [
"Unable to sign in: {0}",
"No se puede iniciar sesión: {0}",
"Impossibile accedere: {0}"
],
"Envoi en cours…": [
"Uploading…",
"Enviando…",
"Invio in corso…"
],
"Fond d’écran enregistré.": [
"Wallpaper saved.",
"Fondo de pantalla guardado.",
"Sfondo salvato."
],
"Échec : {0}": [
"Failed: {0}",
"Error: {0}",
"Errore: {0}"
],
"Fond par défaut rétabli.": [
"Default wallpaper restored.",
"Fondo predeterminado restablecido.",
"Sfondo predefinito ripristinato."
],
"Modifier l’évènement privé": [
"Edit private event",
"Editar el evento privado",
"Modifica l’evento privato"
],
"Modifier l’entrée": [
"Edit entry",
"Editar la entrada",
"Modifica la voce"
],
"Ajouter un évènement privé": [
"Add a private event",
"Añadir un evento privado",
"Aggiungi un evento privato"
],
"Ajouter": [
"Add",
"Añadir",
"Aggiungi"
],
"Fichier actuel : {0}": [
"Current file: {0}",
"Archivo actual: {0}",
"File attuale: {0}"
],
"Aucun fichier": [
"No file",
"Ningún archivo",
"Nessun file"
],
"PDF introuvable : {0}\nAjoutez-le dans le stockage « billets ».": [
"PDF not found: {0}\nAdd it to the “billets” storage.",
"PDF no encontrado: {0}\nAñádelo al almacenamiento «billets».",
"PDF non trovato: {0}\nAggiungilo allo storage «billets»."
],
"Aucun PDF enregistré pour ce billet. Ajoutez-le depuis la fiche du groupe.": [
"No PDF saved for this ticket. Add it from the band’s entry.",
"No hay ningún PDF guardado para esta entrada. Añádelo desde la ficha del grupo.",
"Nessun PDF salvato per questo biglietto. Aggiungilo dalla scheda del gruppo."
],
"Indiquez la description de l’évènement.": [
"Enter the event description.",
"Indica la descripción del evento.",
"Indica la descrizione dell’evento."
],
"Indiquez le nom de l’artiste ou du groupe.": [
"Enter the artist or band name.",
"Indica el nombre del artista o del grupo.",
"Indica il nome dell’artista o del gruppo."
],
"Indiquez la date de l’évènement.": [
"Enter the event date.",
"Indica la fecha del evento.",
"Indica la data dell’evento."
],
"Envoi du PDF impossible : {0}": [
"Unable to upload the PDF: {0}",
"No se puede enviar el PDF: {0}",
"Impossibile inviare il PDF: {0}"
],
"Duplicat de {0}": [
"Copy of {0}",
"Copia de {0}",
"Copia di {0}"
],
"Supprimer cette entrée ?": [
"Delete this entry?",
"¿Eliminar esta entrada?",
"Eliminare questa voce?"
],
"Renseignez au moins l’artiste ou la salle.": [
"Fill in at least the artist or the venue.",
"Indica al menos el artista o la sala.",
"Compila almeno l’artista o il locale."
],
"Recherche en cours…": [
"Searching…",
"Buscando…",
"Ricerca in corso…"
],
"Même soirée, même salle (votre base)": [
"Same night, same venue (your data)",
"Misma noche, misma sala (tus datos)",
"Stessa serata, stesso locale (i tuoi dati)"
],
"avec {0}": [
"with {0}",
"con {0}",
"con {0}"
],
"Même artiste, dates proches (votre base)": [
"Same artist, nearby dates (your data)",
"Mismo artista, fechas cercanas (tus datos)",
"Stesso artista, date vicine (i tuoi dati)"
],
"Wikipédia – tournée": [
"Wikipedia – tour",
"Wikipedia – gira",
"Wikipedia – tour"
],
"Wikipédia – festival": [
"Wikipedia – festival",
"Wikipedia – festival",
"Wikipedia – festival"
],
"Chercher la tournée sur le web": [
"Search the tour on the web",
"Buscar la gira en la web",
"Cerca il tour sul web"
],
"Chercher le festival sur le web": [
"Search the festival on the web",
"Buscar el festival en la web",
"Cerca il festival sul web"
],
"Aucune suggestion trouvée automatiquement.": [
"No suggestions found automatically.",
"No se encontró ninguna sugerencia automáticamente.",
"Nessun suggerimento trovato automaticamente."
],
"Pas trouvé ?": [
"Not found?",
"¿No lo encuentras?",
"Non l’hai trovato?"
],
"un autre utilisateur": [
"another user",
"otro usuario",
"un altro utente"
],
"Mes concerts": [
"My concerts",
"Mis conciertos",
"I miei concerti"
],
"Les concerts de {0}": [
"{0}’s concerts",
"Los conciertos de {0}",
"I concerti di {0}"
],
"Ont accès à mes concerts": [
"Have access to my concerts",
"Tienen acceso a mis conciertos",
"Hanno accesso ai miei concerti"
],
"Retirer": [
"Remove",
"Quitar",
"Rimuovi"
],
"Saisissez l’e-mail de la personne.": [
"Enter the person’s email.",
"Introduce el correo de la persona.",
"Inserisci l’e-mail della persona."
],
"Accès donné à {0}.": [
"Access granted to {0}.",
"Acceso concedido a {0}.",
"Accesso concesso a {0}."
],
"Aucun compte avec cet e-mail. Créez-lui d’abord un compte.": [
"No account with this email. Create one for them first.",
"No hay ninguna cuenta con este correo. Crea una primero.",
"Nessun account con questa e-mail. Crea prima un account."
],
"C’est votre propre adresse.": [
"That is your own address.",
"Es tu propia dirección.",
"È il tuo stesso indirizzo."
],
"Échec du partage.": [
"Sharing failed.",
"Error al compartir.",
"Condivisione non riuscita."
],
"Le nom ne peut pas être vide.": [
"The name cannot be empty.",
"El nombre no puede estar vacío.",
"Il nome non può essere vuoto."
],
"Nom enregistré.": [
"Name saved.",
"Nombre guardado.",
"Nome salvato."
],
"Le mot de passe doit contenir au moins 8 caractères.": [
"The password must be at least 8 characters long.",
"La contraseña debe tener al menos 8 caracteres.",
"La password deve contenere almeno 8 caratteri."
],
"Les deux mots de passe sont différents.": [
"The two passwords do not match.",
"Las dos contraseñas no coinciden.",
"Le due password non coincidono."
],
"Saisissez d’abord votre e-mail ci-dessus.": [
"First enter your email above.",
"Primero introduce tu correo arriba.",
"Inserisci prima la tua e-mail qui sopra."
],
"Un e-mail vous a été envoyé pour choisir un nouveau mot de passe.": [
"An email has been sent to you to choose a new password.",
"Te hemos enviado un correo para elegir una nueva contraseña.",
"Ti è stata inviata un’e-mail per scegliere una nuova password."
],
"Lien invalide ou expiré ({0}). Demandez un nouvel e-mail avec « Mot de passe oublié ? » ou faites-vous créer un compte.": [
"Invalid or expired link ({0}). Request a new email with “Forgot your password?” or ask for an account to be created.",
"Enlace no válido o caducado ({0}). Solicita un nuevo correo con «¿Olvidaste tu contraseña?» o pide que te creen una cuenta.",
"Link non valido o scaduto ({0}). Richiedi una nuova e-mail con «Password dimenticata?» o fatti creare un account."
],
"Vos photos servent aussi de photo par défaut pour les autres utilisateurs, tant qu’ils n’ont pas ajouté la leur.": [
"Your photos also serve as the default photo for other users, until they add their own.",
"Tus fotos sirven también como foto predeterminada para los demás usuarios, mientras no añadan la suya.",
"Le tue foto servono anche da foto predefinita per gli altri utenti, finché non aggiungono la loro."
],
"Les photos par défaut sont proposées tant que vous n’avez pas ajouté la vôtre.": [
"Default photos are used until you add your own.",
"Se usan fotos predeterminadas mientras no añadas la tuya.",
"Vengono usate le foto predefinite finché non aggiungi la tua."
],
"Votre photo (par défaut pour les autres)": [
"Your photo (default for others)",
"Tu foto (predeterminada para los demás)",
"La tua foto (predefinita per gli altri)"
],
"Votre photo": [
"Your photo",
"Tu foto",
"La tua foto"
],
"Photo par défaut": [
"Default photo",
"Foto predeterminada",
"Foto predefinita"
],
"Aucune photo": [
"No photo",
"Sin foto",
"Nessuna foto"
],
"Photo": [
"Photo",
"Foto",
"Foto"
],
"Coller": [
"Paste",
"Pegar",
"Incolla"
],
"{0} autres groupes : affinez la recherche.": [
"{0} more bands: refine your search.",
"{0} grupos más: afina la búsqueda.",
"Altri {0} gruppi: affina la ricerca."
],
"Aucun groupe.": [
"No bands.",
"Ningún grupo.",
"Nessun gruppo."
],
"collage non pris en charge par ce navigateur, utilisez « Photo »": [
"pasting is not supported by this browser, use “Photo”",
"este navegador no admite pegar, usa «Foto»",
"incolla non supportato da questo browser, usa «Foto»"
],
"aucune image dans le presse-papier": [
"no image in the clipboard",
"no hay ninguna imagen en el portapapeles",
"nessuna immagine negli appunti"
],
"Photo enregistrée ({0} Ko).": [
"Photo saved ({0} KB).",
"Foto guardada ({0} KB).",
"Foto salvata ({0} KB)."
],
"les notifications ne sont pas prises en charge sur cet appareil": [
"notifications are not supported on this device",
"las notificaciones no son compatibles con este dispositivo",
"le notifiche non sono supportate su questo dispositivo"
],
"autorisation refusée. Autorisez les notifications pour In The Pit dans les paramètres du téléphone": [
"permission denied. Allow notifications for In The Pit in your phone settings",
"permiso denegado. Permite las notificaciones de In The Pit en los ajustes del teléfono",
"autorizzazione negata. Consenti le notifiche per In The Pit nelle impostazioni del telefono"
],
"Les notifications ne sont pas prises en charge par ce navigateur.": [
"Notifications are not supported by this browser.",
"Este navegador no admite notificaciones.",
"Questo browser non supporta le notifiche."
],
"Préférences enregistrées.": [
"Preferences saved.",
"Preferencias guardadas.",
"Preferenze salvate."
],
"Notifications désactivées sur cet appareil.": [
"Notifications disabled on this device.",
"Notificaciones desactivadas en este dispositivo.",
"Notifiche disattivate su questo dispositivo."
],
"Notifications activées sur cet appareil.": [
"Notifications enabled on this device.",
"Notificaciones activadas en este dispositivo.",
"Notifiche attivate su questo dispositivo."
],
"Envoi du test…": [
"Sending the test…",
"Enviando la prueba…",
"Invio del test…"
],
"Test envoyé : la notification doit arriver dans quelques secondes.": [
"Test sent: the notification should arrive within a few seconds.",
"Prueba enviada: la notificación debería llegar en unos segundos.",
"Test inviato: la notifica dovrebbe arrivare tra pochi secondi."
],
"Échec du test ({0}). Désactivez puis réactivez les notifications.": [
"Test failed ({0}). Disable then re-enable notifications.",
"La prueba falló ({0}). Desactiva y vuelve a activar las notificaciones.",
"Test non riuscito ({0}). Disattiva e riattiva le notifiche."
],
"aucun appareil enregistré": [
"no registered device",
"ningún dispositivo registrado",
"nessun dispositivo registrato"
],
"Jusqu’au {0}": [
"Up to {0}",
"Hasta el {0}",
"Fino al {0}"
],
"Historique indisponible ({0}).": [
"History unavailable ({0}).",
"Historial no disponible ({0}).",
"Cronologia non disponibile ({0})."
],
"In The Pit": [
"In The Pit",
"In The Pit",
"In The Pit"
],
"Concerts": [
"Concerts",
"Conciertos",
"Concerti"
]
};
function tt(k){const a=[].slice.call(arguments,1);let s=k;if(LANG!=='fr'){const d=DICT[k];if(d)s=d[{en:0,es:1,it:2}[LANG]]}return s.replace(/\{(\d+)\}/g,(m,i)=>a[i]===undefined?m:a[i])}
function applyStatic(){
  const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),L=[];let n;while(n=w.nextNode())L.push(n);
  L.forEach(n=>{
    const p=n.parentNode;if(!p||/^(SCRIPT|STYLE)$/.test(p.nodeName))return;
    if(!n.__fr){const m=n.nodeValue.match(/^(\s*)([\s\S]*?)(\s*)$/);if(!m[2]||!DICT[m[2]])return;n.__fr={pre:m[1],k:m[2],suf:m[3]}}
    n.nodeValue=n.__fr.pre+tt(n.__fr.k)+n.__fr.suf;
  });
  document.querySelectorAll('[placeholder],[aria-label]').forEach(el=>{
    ['placeholder','aria-label'].forEach(a=>{
      if(!el.hasAttribute(a))return;
      el.__fa=el.__fa||{};
      if(el.__fa[a]===undefined){const v=el.getAttribute(a);if(!DICT[v])return;el.__fa[a]=v}
      el.setAttribute(a,tt(el.__fa[a]));
    });
  });
}
