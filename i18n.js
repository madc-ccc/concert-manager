/* i18n — French strings are the keys; en/es/it are the translations. */
const LANGS={en:'English',fr:'Français',es:'Español',it:'Italiano',de:'Deutsch'};
const LOCALES={en:'en-GB',fr:'fr-FR',es:'es-ES',it:'it-IT',de:'de-DE'};
let LANG='en';try{const l=localStorage.getItem('lang');if(LANGS[l])LANG=l}catch(e){}
document.documentElement.lang=LANG;
const DICT={
"...t'aide à gérer tes concerts !": [
"...helps you manage your concerts!",
"...te ayuda a gestionar tus conciertos!",
"...ti aiuta a gestire i tuoi concerti!",
"...hilft dir, deine Konzerte zu verwalten!"
],
"Chargement…": [
"Loading…",
"Cargando…",
"Caricamento…",
"Wird geladen …"
],
"E-mail": [
"Email",
"Correo electrónico",
"E-mail",
"E-Mail"
],
"Mot de passe": [
"Password",
"Contraseña",
"Password",
"Passwort"
],
"Se connecter": [
"Sign in",
"Iniciar sesión",
"Accedi",
"Anmelden"
],
"Mot de passe oublié ?": [
"Forgot your password?",
"¿Olvidaste tu contraseña?",
"Password dimenticata?",
"Passwort vergessen?"
],
"Bienvenue ! Choisissez votre mot de passe pour accéder à l’application.": [
"Welcome! Choose your password to access the app.",
"¡Bienvenido! Elige tu contraseña para acceder a la aplicación.",
"Benvenuto! Scegli la tua password per accedere all’app.",
"Willkommen! Wähle dein Passwort, um auf die App zuzugreifen."
],
"Nouveau mot de passe (8 caractères minimum)": [
"New password (8 characters minimum)",
"Nueva contraseña (mínimo 8 caracteres)",
"Nuova password (minimo 8 caratteri)",
"Neues Passwort (mindestens 8 Zeichen)"
],
"Confirmer le mot de passe": [
"Confirm password",
"Confirmar contraseña",
"Conferma password",
"Passwort bestätigen"
],
"Enregistrer et entrer": [
"Save and enter",
"Guardar y entrar",
"Salva ed entra",
"Speichern und eintreten"
],
"Ajouter un concert": [
"Add a concert",
"Añadir un concierto",
"Aggiungi un concerto",
"Konzert hinzufügen"
],
"Filtre sur artiste, salle, ville…": ["Filter by artist, venue, city…", "Filtrar por artista, sala, ciudad…", "Filtra per artista, locale, città…", "Filter nach Künstler, Location, Stadt …"],
"Capturer la liste": ["Capture the list", "Capturar la lista", "Cattura l’elenco", "Liste erfassen"],
"Inclure les premières parties": [
"Include opening acts",
"Incluir teloneros",
"Includi i gruppi di supporto",
"Vorgruppen einbeziehen"
],
"Afficher les concerts « Pas vu »": [
"Show “Not seen” concerts",
"Mostrar conciertos «No visto»",
"Mostra i concerti «Non visto»",
"Konzerte „Nicht gesehen“ anzeigen"
],
"Futur": [
"Upcoming",
"Próximos",
"Futuri",
"Kommende"
],
"Passé": [
"Past",
"Pasados",
"Passati",
"Vergangene"
],
"Tous": [
"All",
"Todos",
"Tutti",
"Alle"
],
"Statistiques": [
"Statistics",
"Estadísticas",
"Statistiche",
"Statistiken"
],
"Concerts vus par an": [
"Concerts seen per year",
"Conciertos vistos por año",
"Concerti visti per anno",
"Gesehene Konzerte pro Jahr"
],
"Touchez une barre": [
"Tap a bar",
"Toca una barra",
"Tocca una barra",
"Tippe auf einen Balken"
],
"Répartition dans l’année": [
"Distribution through the year",
"Distribución a lo largo del año",
"Distribuzione nell’anno",
"Verteilung im Jahr"
],
"Par semaines": [
"By weeks",
"Por semanas",
"Per settimane",
"Nach Wochen"
],
"Par mois": [
"By months",
"Por meses",
"Per mesi",
"Nach Monaten"
],
"Artistes les plus vus": [
"Most-seen artists",
"Artistas más vistos",
"Artisti più visti",
"Meistgesehene Künstler"
],
"Salles les plus fréquentées": [
"Most-visited venues",
"Salas más frecuentadas",
"Locali più frequentati",
"Meistbesuchte Locations"
],
"Options": [
"Options",
"Opciones",
"Opzioni",
"Optionen"
],
"Langue": [
"Language",
"Idioma",
"Lingua",
"Sprache"
],
"Photos des groupes": [
"Band photos",
"Fotos de los grupos",
"Foto dei gruppi",
"Bandfotos"
],
"Tapez le nom d’un groupe…": [
"Type a band name…",
"Escribe el nombre de un grupo…",
"Digita il nome di un gruppo…",
"Name einer Band eingeben …"
],
"La photo apparaît en fond des cartes du groupe. Elle est réduite automatiquement à quelques Ko.": [
"The photo appears in the background of the band’s cards. It is automatically shrunk to a few KB.",
"La foto aparece de fondo en las tarjetas del grupo. Se reduce automáticamente a unos pocos KB.",
"La foto appare sullo sfondo delle schede del gruppo. Viene ridotta automaticamente a pochi KB.",
"Das Foto erscheint im Hintergrund der Karten der Band. Es wird automatisch auf wenige KB verkleinert."
],
"Notifications": [
"Notifications",
"Notificaciones",
"Notifiche",
"Benachrichtigungen"
],
"Rappels envoyés à 18 h avant vos concerts à venir.": [
"Reminders sent at 6 PM before your upcoming concerts.",
"Recordatorios enviados a las 18:00 antes de tus próximos conciertos.",
"Promemoria inviati alle 18:00 prima dei tuoi prossimi concerti.",
"Erinnerungen werden um 18 Uhr vor deinen kommenden Konzerten gesendet."
],
"Une semaine avant": [
"One week before",
"Una semana antes",
"Una settimana prima",
"Eine Woche vorher"
],
"La veille": [
"The day before",
"El día anterior",
"Il giorno prima",
"Am Tag vorher"
],
"Le jour même": [
"The same day",
"El mismo día",
"Lo stesso giorno",
"Am selben Tag"
],
"Activer sur cet appareil": [
"Enable on this device",
"Activar en este dispositivo",
"Attiva su questo dispositivo",
"Auf diesem Gerät aktivieren"
],
"Désactiver sur cet appareil": [
"Disable on this device",
"Desactivar en este dispositivo",
"Disattiva su questo dispositivo",
"Auf diesem Gerät deaktivieren"
],
"Fond d’écran": [
"Wallpaper",
"Fondo de pantalla",
"Sfondo",
"Hintergrundbild"
],
"Choisir une image": [
"Choose an image",
"Elegir una imagen",
"Scegli un’immagine",
"Bild auswählen"
],
"Rétablir le fond par défaut": [
"Restore default wallpaper",
"Restablecer el fondo predeterminado",
"Ripristina lo sfondo predefinito",
"Standardhintergrund wiederherstellen"
],
"Mon nom affiché": [
"My display name",
"Mi nombre visible",
"Il mio nome visualizzato",
"Mein Anzeigename"
],
"Enregistrer": [
"Save",
"Guardar",
"Salva",
"Speichern"
],
"C’est le nom que verront les personnes qui consultent vos concerts.": [
"This is the name people viewing your concerts will see.",
"Es el nombre que verán las personas que consulten tus conciertos.",
"È il nome che vedranno le persone che consultano i tuoi concerti.",
"Diesen Namen sehen Personen, die deine Konzerte ansehen."
],
"Partager mes concerts (lecture seule)": [
"Share my concerts (read-only)",
"Compartir mis conciertos (solo lectura)",
"Condividi i miei concerti (sola lettura)",
"Meine Konzerte teilen (nur Lesezugriff)"
],
"E-mail de la personne": [
"Person’s email",
"Correo de la persona",
"E-mail della persona",
"E-Mail der Person"
],
"Partager": [
"Share",
"Compartir",
"Condividi",
"Teilen"
],
"La personne doit déjà avoir un compte. Elle pourra consulter vos concerts, sans les modifier ni ouvrir vos billets.": [
"The person must already have an account. They will be able to view your concerts, without editing them or opening your tickets.",
"La persona ya debe tener una cuenta. Podrá consultar tus conciertos, sin modificarlos ni abrir tus entradas.",
"La persona deve avere già un account. Potrà consultare i tuoi concerti, senza modificarli né aprire i tuoi biglietti.",
"Die Person muss bereits ein Konto haben. Sie kann deine Konzerte ansehen, aber weder ändern noch deine Tickets öffnen."
],
"Compte": [
"Account",
"Cuenta",
"Account",
"Konto"
],
"Se déconnecter": [
"Sign out",
"Cerrar sesión",
"Esci",
"Abmelden"
],
"Application": [
"App",
"Aplicación",
"App",
"App"
],
"Vider le cache et recharger": [
"Clear cache and reload",
"Vaciar la caché y recargar",
"Svuota la cache e ricarica",
"Cache leeren und neu laden"
],
"Utile si l’affichage semble figé après une mise à jour du site.": [
"Useful if the display seems frozen after a site update.",
"Útil si la pantalla parece bloqueada tras una actualización del sitio.",
"Utile se la visualizzazione sembra bloccata dopo un aggiornamento del sito.",
"Nützlich, wenn die Anzeige nach einem Update der Seite eingefroren wirkt."
],
"Historique des modifications": [
"Change history",
"Historial de cambios",
"Cronologia delle modifiche",
"Änderungsverlauf"
],
"Afficher l’historique": [
"Show history",
"Mostrar el historial",
"Mostra la cronologia",
"Verlauf anzeigen"
],
"Masquer l’historique": [
"Hide history",
"Ocultar el historial",
"Nascondi la cronologia",
"Verlauf ausblenden"
],
"‹ Concerts": [
"‹ Concerts",
"‹ Conciertos",
"‹ Concerti",
"‹ Konzerte"
],
"Type": [
"Type",
"Tipo",
"Tipo",
"Typ"
],
"Concert": [
"Concert",
"Concierto",
"Concerto",
"Konzert"
],
"Évènement privé": [
"Private event",
"Evento privado",
"Evento privato",
"Privater Termin"
],
"Artiste / Groupe *": [
"Artist / Band *",
"Artista / Grupo *",
"Artista / Gruppo *",
"Künstler / Band *"
],
"ex. Archive, Noir Désir…": [
"e.g. Archive, Noir Désir…",
"p. ej. Archive, Noir Désir…",
"es. Archive, Noir Désir…",
"z. B. Archive, Noir Désir …"
],
"Date du concert": [
"Concert date",
"Fecha del concierto",
"Data del concerto",
"Konzertdatum"
],
"Description *": [
"Description *",
"Descripción *",
"Descrizione *",
"Beschreibung *"
],
"Date *": [
"Date *",
"Fecha *",
"Data *",
"Datum *"
],
"ex. Dîner chez Cécile, anniversaire…": [
"e.g. Dinner at Cécile’s, birthday…",
"p. ej. Cena en casa de Cécile, cumpleaños…",
"es. Cena da Cécile, compleanno…",
"z. B. Abendessen bei Cécile, Geburtstag …"
],
"Assisté ?": [
"Attended?",
"¿Asistido?",
"Partecipato?",
"Besucht?"
],
"Projet / À voir": [
"Planned / To see",
"Proyecto / Por ver",
"Progetto / Da vedere",
"Geplant / Noch zu sehen"
],
"Oui": [
"Yes",
"Sí",
"Sì",
"Ja"
],
"Non": [
"No",
"No",
"No",
"Nein"
],
"Première partie ?": [
"Opening act?",
"¿Telonero?",
"Gruppo di supporto?",
"Vorgruppe?"
],
"Place achetée ?": [
"Ticket bought?",
"¿Entrada comprada?",
"Biglietto acquistato?",
"Ticket gekauft?"
],
"(gratuit)": [
"(free)",
"(gratis)",
"(gratuito)",
"(kostenlos)"
],
"(pas de résa)": [
"(no booking)",
"(sin reserva)",
"(senza prenotazione)",
"(keine Reservierung)"
],
"(prix libre)": [
"(pay what you want)",
"(precio libre)",
"(prezzo libero)",
"(Preis frei wählbar)"
],
"Billet (PDF)": [
"Ticket (PDF)",
"Entrada (PDF)",
"Biglietto (PDF)",
"Ticket (PDF)"
],
"Salle": [
"Venue",
"Sala",
"Locale",
"Location"
],
"ex. Le Transbordeur": [
"e.g. Le Transbordeur",
"p. ej. Le Transbordeur",
"es. Le Transbordeur",
"z. B. Le Transbordeur"
],
"Ville": [
"City",
"Ciudad",
"Città",
"Stadt"
],
"ex. Villeurbanne": [
"e.g. Villeurbanne",
"p. ej. Villeurbanne",
"es. Villeurbanne",
"z. B. Villeurbanne"
],
"Pays": [
"Country",
"País",
"Paese",
"Land"
],
"Événement / Tournée": [
"Event / Tour",
"Evento / Gira",
"Evento / Tour",
"Veranstaltung / Tour"
],
"ex. Call To Arms Tour": [
"e.g. Call To Arms Tour",
"p. ej. Call To Arms Tour",
"es. Call To Arms Tour",
"z. B. Call To Arms Tour"
],
"Rechercher": [
"Search",
"Buscar",
"Cerca",
"Suchen"
],
"En compagnie de": [
"With",
"En compañía de",
"In compagnia di",
"In Begleitung von"
],
"ex. Stéphane, Cécile…": [
"e.g. Stéphane, Cécile…",
"p. ej. Stéphane, Cécile…",
"es. Stéphane, Cécile…",
"z. B. Stéphane, Cécile …"
],
"Prix (€)": [
"Price (€)",
"Precio (€)",
"Prezzo (€)",
"Preis (€)"
],
"ex. 35": [
"e.g. 35",
"p. ej. 35",
"es. 35",
"z. B. 35"
],
"Notes": [
"Notes",
"Notas",
"Note",
"Notizen"
],
"Impressions, anecdotes…": [
"Impressions, anecdotes…",
"Impresiones, anécdotas…",
"Impressioni, aneddoti…",
"Eindrücke, Anekdoten …"
],
"Annuler": [
"Cancel",
"Cancelar",
"Annulla",
"Abbrechen"
],
"Dupliquer": [
"Duplicate",
"Duplicar",
"Duplica",
"Duplizieren"
],
"Supprimer cette entrée": [
"Delete this entry",
"Eliminar esta entrada",
"Elimina questa voce",
"Diesen Eintrag löschen"
],
"Stats": [
"Stats",
"Stats",
"Stats",
"Stats"
],
"Quel billet ouvrir ?": [
"Which ticket to open?",
"¿Qué entrada abrir?",
"Quale biglietto aprire?",
"Welches Ticket öffnen?"
],
"Fermer": [
"Close",
"Cerrar",
"Chiudi",
"Schließen"
],
"Erreur au démarrage : ": [
"Startup error: ",
"Error al iniciar: ",
"Errore all’avvio: ",
"Fehler beim Start: "
],
"inconnue": [
"unknown",
"desconocido",
"sconosciuto",
"unbekannt"
],
"Impossible de charger {0}. Vérifiez la connexion Internet.": [
"Unable to load {0}. Check your Internet connection.",
"No se puede cargar {0}. Comprueba la conexión a Internet.",
"Impossibile caricare {0}. Controlla la connessione a Internet.",
"{0} kann nicht geladen werden. Überprüfe deine Internetverbindung."
],
"Le chargement est trop long. Vérifiez la connexion Internet.": [
"Loading is taking too long. Check your Internet connection.",
"La carga tarda demasiado. Comprueba la conexión a Internet.",
"Il caricamento è troppo lungo. Controlla la connessione a Internet.",
"Das Laden dauert zu lange. Überprüfe deine Internetverbindung."
],
"Cette semaine !": [
"This week!",
"¡Esta semana!",
"Questa settimana!",
"Diese Woche!"
],
"La semaine prochaine !": [
"Next week!",
"¡La próxima semana!",
"La prossima settimana!",
"Nächste Woche!"
],
"Plus tard…": [
"Later…",
"Más adelante…",
"Più avanti…",
"Später …"
],
"Aucun concert ne correspond à ces filtres.": [
"No concerts match these filters.",
"Ningún concierto coincide con estos filtros.",
"Nessun concerto corrisponde a questi filtri.",
"Kein Konzert entspricht diesen Filtern."
],
"Total concerts": [
"Total concerts",
"Total de conciertos",
"Concerti totali",
"Konzerte gesamt"
],
"depuis {0}": [
"since {0}",
"desde {0}",
"dal {0}",
"seit {0}"
],
"Vus en live": [
"Seen live",
"Vistos en directo",
"Visti dal vivo",
"Live gesehen"
],
"du total": [
"of total",
"del total",
"del totale",
"vom Gesamt"
],
"En projet": [
"Planned",
"En proyecto",
"In programma",
"Geplant"
],
"Pays visités": [
"Countries visited",
"Países visitados",
"Paesi visitati",
"Besuchte Länder"
],
"pour des concerts": [
"for concerts",
"por conciertos",
"per concerti",
"für Konzerte"
],
"{0} : {1} concert": [
"{0}: {1} concert",
"{0}: {1} concierto",
"{0}: {1} concerto",
"{0}: {1} Konzert"
],
"{0} : {1} concerts": [
"{0}: {1} concerts",
"{0}: {1} conciertos",
"{0}: {1} concerti",
"{0}: {1} Konzerte"
],
"Semaine {0}": [
"Week {0}",
"Semana {0}",
"Settimana {0}",
"Woche {0}"
],
"Aucun concert à enregistrer.": [
"No concerts to save.",
"No hay conciertos que guardar.",
"Nessun concerto da salvare.",
"Keine Konzerte zum Speichern."
],
"{0} – recherche « {1} »": [
"{0} – search “{1}”",
"{0} – búsqueda «{1}»",
"{0} – ricerca «{1}»",
"{0} – Suche „{1}“"
],
"{0} premiers concerts sur {1}": [
"first {0} concerts out of {1}",
"primeros {0} conciertos de {1}",
"primi {0} concerti su {1}",
"erste {0} Konzerte von {1}"
],
"{0} concert": [
"{0} concert",
"{0} concierto",
"{0} concerto",
"{0} Konzert"
],
"{0} concerts": [
"{0} concerts",
"{0} conciertos",
"{0} concerti",
"{0} Konzerte"
],
"Création de l’image…": [
"Creating the image…",
"Creando la imagen…",
"Creazione dell’immagine…",
"Bild wird erstellt …"
],
"Image JPEG": [
"JPEG image",
"Imagen JPEG",
"Immagine JPEG",
"JPEG-Bild"
],
"Impossible de créer l’image : {0}": [
"Unable to create the image: {0}",
"No se puede crear la imagen: {0}",
"Impossibile creare l’immagine: {0}",
"Das Bild kann nicht erstellt werden: {0}"
],
"Connexion impossible : {0}": [
"Unable to sign in: {0}",
"No se puede iniciar sesión: {0}",
"Impossibile accedere: {0}",
"Anmeldung nicht möglich: {0}"
],
"Envoi en cours…": [
"Uploading…",
"Enviando…",
"Invio in corso…",
"Wird hochgeladen …"
],
"Fond d’écran enregistré.": [
"Wallpaper saved.",
"Fondo de pantalla guardado.",
"Sfondo salvato.",
"Hintergrundbild gespeichert."
],
"Échec : {0}": [
"Failed: {0}",
"Error: {0}",
"Errore: {0}",
"Fehlgeschlagen: {0}"
],
"Fond par défaut rétabli.": [
"Default wallpaper restored.",
"Fondo predeterminado restablecido.",
"Sfondo predefinito ripristinato.",
"Standardhintergrund wiederhergestellt."
],
"Modifier l’évènement privé": [
"Edit private event",
"Editar el evento privado",
"Modifica l’evento privato",
"Privaten Termin bearbeiten"
],
"Modifier l’entrée": [
"Edit entry",
"Editar la entrada",
"Modifica la voce",
"Eintrag bearbeiten"
],
"Ajouter un évènement privé": [
"Add a private event",
"Añadir un evento privado",
"Aggiungi un evento privato",
"Privaten Termin hinzufügen"
],
"Ajouter": [
"Add",
"Añadir",
"Aggiungi",
"Hinzufügen"
],
"Fichier actuel : {0}": [
"Current file: {0}",
"Archivo actual: {0}",
"File attuale: {0}",
"Aktuelle Datei: {0}"
],
"Aucun fichier": [
"No file",
"Ningún archivo",
"Nessun file",
"Keine Datei"
],
"PDF introuvable : {0}\nAjoutez-le dans le stockage « billets ».": [
"PDF not found: {0}\nAdd it to the “billets” storage.",
"PDF no encontrado: {0}\nAñádelo al almacenamiento «billets».",
"PDF non trovato: {0}\nAggiungilo allo storage «billets».",
"PDF nicht gefunden: {0}\nFüge es dem Speicher „billets“ hinzu."
],
"Aucun PDF enregistré pour ce billet. Ajoutez-le depuis la fiche du groupe.": [
"No PDF saved for this ticket. Add it from the band’s entry.",
"No hay ningún PDF guardado para esta entrada. Añádelo desde la ficha del grupo.",
"Nessun PDF salvato per questo biglietto. Aggiungilo dalla scheda del gruppo.",
"Für dieses Ticket ist kein PDF gespeichert. Füge es über den Eintrag der Band hinzu."
],
"Indiquez la description de l’évènement.": [
"Enter the event description.",
"Indica la descripción del evento.",
"Indica la descrizione dell’evento.",
"Gib die Beschreibung des Termins an."
],
"Indiquez le nom de l’artiste ou du groupe.": [
"Enter the artist or band name.",
"Indica el nombre del artista o del grupo.",
"Indica il nome dell’artista o del gruppo.",
"Gib den Namen des Künstlers oder der Band an."
],
"Indiquez la date de l’évènement.": [
"Enter the event date.",
"Indica la fecha del evento.",
"Indica la data dell’evento.",
"Gib das Datum des Termins an."
],
"Envoi du PDF impossible : {0}": [
"Unable to upload the PDF: {0}",
"No se puede enviar el PDF: {0}",
"Impossibile inviare il PDF: {0}",
"Das PDF kann nicht hochgeladen werden: {0}"
],
"Duplicat de {0}": [
"Copy of {0}",
"Copia de {0}",
"Copia di {0}",
"Kopie von {0}"
],
"Supprimer cette entrée ?": [
"Delete this entry?",
"¿Eliminar esta entrada?",
"Eliminare questa voce?",
"Diesen Eintrag löschen?"
],
"Renseignez au moins l’artiste ou la salle.": [
"Fill in at least the artist or the venue.",
"Indica al menos el artista o la sala.",
"Compila almeno l’artista o il locale.",
"Gib mindestens den Künstler oder die Location an."
],
"Recherche en cours…": [
"Searching…",
"Buscando…",
"Ricerca in corso…",
"Suche läuft …"
],
"Même soirée, même salle (votre base)": [
"Same night, same venue (your data)",
"Misma noche, misma sala (tus datos)",
"Stessa serata, stesso locale (i tuoi dati)",
"Gleicher Abend, gleiche Location (deine Daten)"
],
"avec {0}": [
"with {0}",
"con {0}",
"con {0}",
"mit {0}"
],
"Même artiste, dates proches (votre base)": [
"Same artist, nearby dates (your data)",
"Mismo artista, fechas cercanas (tus datos)",
"Stesso artista, date vicine (i tuoi dati)",
"Gleicher Künstler, nahe Termine (deine Daten)"
],
"Wikipédia – tournée": [
"Wikipedia – tour",
"Wikipedia – gira",
"Wikipedia – tour",
"Wikipedia – Tour"
],
"Wikipédia – festival": [
"Wikipedia – festival",
"Wikipedia – festival",
"Wikipedia – festival",
"Wikipedia – Festival"
],
"Chercher la tournée sur le web": [
"Search the tour on the web",
"Buscar la gira en la web",
"Cerca il tour sul web",
"Tour im Web suchen"
],
"Chercher le festival sur le web": [
"Search the festival on the web",
"Buscar el festival en la web",
"Cerca il festival sul web",
"Festival im Web suchen"
],
"Aucune suggestion trouvée automatiquement.": [
"No suggestions found automatically.",
"No se encontró ninguna sugerencia automáticamente.",
"Nessun suggerimento trovato automaticamente.",
"Keine Vorschläge automatisch gefunden."
],
"Pas trouvé ?": [
"Not found?",
"¿No lo encuentras?",
"Non l’hai trovato?",
"Nicht gefunden?"
],
"un autre utilisateur": [
"another user",
"otro usuario",
"un altro utente",
"ein anderer Nutzer"
],
"Mes concerts": [
"My concerts",
"Mis conciertos",
"I miei concerti",
"Meine Konzerte"
],
"Les concerts de {0}": [
"{0}’s concerts",
"Los conciertos de {0}",
"I concerti di {0}",
"Die Konzerte von {0}"
],
"Ont accès à mes concerts": [
"Have access to my concerts",
"Tienen acceso a mis conciertos",
"Hanno accesso ai miei concerti",
"Haben Zugriff auf meine Konzerte"
],
"Retirer": [
"Remove",
"Quitar",
"Rimuovi",
"Entfernen"
],
"Saisissez l’e-mail de la personne.": [
"Enter the person’s email.",
"Introduce el correo de la persona.",
"Inserisci l’e-mail della persona.",
"Gib die E-Mail-Adresse der Person ein."
],
"Accès donné à {0}.": [
"Access granted to {0}.",
"Acceso concedido a {0}.",
"Accesso concesso a {0}.",
"Zugriff für {0} erteilt."
],
"Aucun compte avec cet e-mail. Créez-lui d’abord un compte.": [
"No account with this email. Create one for them first.",
"No hay ninguna cuenta con este correo. Crea una primero.",
"Nessun account con questa e-mail. Crea prima un account.",
"Kein Konto mit dieser E-Mail-Adresse. Lege zuerst ein Konto für die Person an."
],
"C’est votre propre adresse.": [
"That is your own address.",
"Es tu propia dirección.",
"È il tuo stesso indirizzo.",
"Das ist deine eigene Adresse."
],
"Échec du partage.": [
"Sharing failed.",
"Error al compartir.",
"Condivisione non riuscita.",
"Teilen fehlgeschlagen."
],
"Le nom ne peut pas être vide.": [
"The name cannot be empty.",
"El nombre no puede estar vacío.",
"Il nome non può essere vuoto.",
"Der Name darf nicht leer sein."
],
"Nom enregistré.": [
"Name saved.",
"Nombre guardado.",
"Nome salvato.",
"Name gespeichert."
],
"Le mot de passe doit contenir au moins 8 caractères.": [
"The password must be at least 8 characters long.",
"La contraseña debe tener al menos 8 caracteres.",
"La password deve contenere almeno 8 caratteri.",
"Das Passwort muss mindestens 8 Zeichen lang sein."
],
"Les deux mots de passe sont différents.": [
"The two passwords do not match.",
"Las dos contraseñas no coinciden.",
"Le due password non coincidono.",
"Die beiden Passwörter stimmen nicht überein."
],
"Saisissez d’abord votre e-mail ci-dessus.": [
"First enter your email above.",
"Primero introduce tu correo arriba.",
"Inserisci prima la tua e-mail qui sopra.",
"Gib oben zuerst deine E-Mail-Adresse ein."
],
"Un e-mail vous a été envoyé pour choisir un nouveau mot de passe.": [
"An email has been sent to you to choose a new password.",
"Te hemos enviado un correo para elegir una nueva contraseña.",
"Ti è stata inviata un’e-mail per scegliere una nuova password.",
"Dir wurde eine E-Mail gesendet, um ein neues Passwort zu wählen."
],
"Lien invalide ou expiré ({0}). Demandez un nouvel e-mail avec « Mot de passe oublié ? » ou faites-vous créer un compte.": [
"Invalid or expired link ({0}). Request a new email with “Forgot your password?” or ask for an account to be created.",
"Enlace no válido o caducado ({0}). Solicita un nuevo correo con «¿Olvidaste tu contraseña?» o pide que te creen una cuenta.",
"Link non valido o scaduto ({0}). Richiedi una nuova e-mail con «Password dimenticata?» o fatti creare un account.",
"Ungültiger oder abgelaufener Link ({0}). Fordere über „Passwort vergessen?“ eine neue E-Mail an oder lass dir ein Konto anlegen."
],
"Vos photos servent aussi de photo par défaut pour les autres utilisateurs, tant qu’ils n’ont pas ajouté la leur.": [
"Your photos also serve as the default photo for other users, until they add their own.",
"Tus fotos sirven también como foto predeterminada para los demás usuarios, mientras no añadan la suya.",
"Le tue foto servono anche da foto predefinita per gli altri utenti, finché non aggiungono la loro.",
"Deine Fotos dienen auch als Standardfoto für andere Nutzer, bis sie ein eigenes hinzufügen."
],
"Les photos par défaut sont proposées tant que vous n’avez pas ajouté la vôtre.": [
"Default photos are used until you add your own.",
"Se usan fotos predeterminadas mientras no añadas la tuya.",
"Vengono usate le foto predefinite finché non aggiungi la tua.",
"Standardfotos werden verwendet, bis du ein eigenes hinzufügst."
],
"Votre photo (par défaut pour les autres)": [
"Your photo (default for others)",
"Tu foto (predeterminada para los demás)",
"La tua foto (predefinita per gli altri)",
"Dein Foto (Standard für andere)"
],
"Votre photo": [
"Your photo",
"Tu foto",
"La tua foto",
"Dein Foto"
],
"Photo par défaut": [
"Default photo",
"Foto predeterminada",
"Foto predefinita",
"Standardfoto"
],
"Aucune photo": [
"No photo",
"Sin foto",
"Nessuna foto",
"Kein Foto"
],
"Photo": [
"Photo",
"Foto",
"Foto",
"Foto"
],
"Coller": [
"Paste",
"Pegar",
"Incolla",
"Einfügen"
],
"{0} autres groupes : affinez la recherche.": [
"{0} more bands: refine your search.",
"{0} grupos más: afina la búsqueda.",
"Altri {0} gruppi: affina la ricerca.",
"{0} weitere Bands: Suche verfeinern."
],
"Aucun groupe.": [
"No bands.",
"Ningún grupo.",
"Nessun gruppo.",
"Keine Band."
],
"collage non pris en charge par ce navigateur, utilisez « Photo »": [
"pasting is not supported by this browser, use “Photo”",
"este navegador no admite pegar, usa «Foto»",
"incolla non supportato da questo browser, usa «Foto»",
"Einfügen wird von diesem Browser nicht unterstützt, verwende „Foto“"
],
"aucune image dans le presse-papier": [
"no image in the clipboard",
"no hay ninguna imagen en el portapapeles",
"nessuna immagine negli appunti",
"kein Bild in der Zwischenablage"
],
"Photo enregistrée ({0} Ko).": [
"Photo saved ({0} KB).",
"Foto guardada ({0} KB).",
"Foto salvata ({0} KB).",
"Foto gespeichert ({0} KB)."
],
"les notifications ne sont pas prises en charge sur cet appareil": [
"notifications are not supported on this device",
"las notificaciones no son compatibles con este dispositivo",
"le notifiche non sono supportate su questo dispositivo",
"Benachrichtigungen werden auf diesem Gerät nicht unterstützt"
],
"autorisation refusée. Autorisez les notifications pour In The Pit dans les paramètres du téléphone": [
"permission denied. Allow notifications for In The Pit in your phone settings",
"permiso denegado. Permite las notificaciones de In The Pit en los ajustes del teléfono",
"autorizzazione negata. Consenti le notifiche per In The Pit nelle impostazioni del telefono",
"Berechtigung verweigert. Erlaube Benachrichtigungen für In The Pit in den Telefoneinstellungen"
],
"Les notifications ne sont pas prises en charge par ce navigateur.": [
"Notifications are not supported by this browser.",
"Este navegador no admite notificaciones.",
"Questo browser non supporta le notifiche.",
"Benachrichtigungen werden von diesem Browser nicht unterstützt."
],
"Préférences enregistrées.": [
"Preferences saved.",
"Preferencias guardadas.",
"Preferenze salvate.",
"Einstellungen gespeichert."
],
"Notifications désactivées sur cet appareil.": [
"Notifications disabled on this device.",
"Notificaciones desactivadas en este dispositivo.",
"Notifiche disattivate su questo dispositivo.",
"Benachrichtigungen auf diesem Gerät deaktiviert."
],
"Notifications activées sur cet appareil.": [
"Notifications enabled on this device.",
"Notificaciones activadas en este dispositivo.",
"Notifiche attivate su questo dispositivo.",
"Benachrichtigungen auf diesem Gerät aktiviert."
],
"Jusqu’au {0}": [
"Up to {0}",
"Hasta el {0}",
"Fino al {0}",
"Bis {0}"
],
"Historique indisponible ({0}).": [
"History unavailable ({0}).",
"Historial no disponible ({0}).",
"Cronologia non disponibile ({0}).",
"Verlauf nicht verfügbar ({0})."
],
"In The Pit": [
"In The Pit",
"In The Pit",
"In The Pit",
"In The Pit"
],
"Concerts": [
"Concerts",
"Conciertos",
"Concerti",
"Konzerte"
],
"Créer un compte": [
"Create an account",
"Crear una cuenta",
"Crea un account",
"Konto erstellen"
],
"Créez votre compte. Un e-mail de confirmation vous sera envoyé, puis votre demande sera examinée.": [
"Create your account. We will email you a confirmation link, then your request will be reviewed.",
"Crea tu cuenta. Te enviaremos un correo de confirmación y, después, se revisará tu solicitud.",
"Crea il tuo account. Ti invieremo un’e-mail di conferma, poi la tua richiesta verrà esaminata.",
"Erstelle dein Konto. Wir senden dir eine Bestätigungs-E-Mail, danach wird deine Anfrage geprüft."
],
"Créer mon compte": [
"Create my account",
"Crear mi cuenta",
"Crea il mio account",
"Mein Konto erstellen"
],
"Retour à la connexion": [
"Back to sign in",
"Volver al inicio de sesión",
"Torna all’accesso",
"Zurück zur Anmeldung"
],
"Saisissez une adresse e-mail valide.": [
"Enter a valid email address.",
"Introduce un correo electrónico válido.",
"Inserisci un indirizzo e-mail valido.",
"Gib eine gültige E-Mail-Adresse ein."
],
"Veuillez valider la vérification anti-robot.": [
"Please complete the anti-bot check.",
"Completa la verificación anti-robot.",
"Completa la verifica anti-robot.",
"Bitte schließe die Anti-Roboter-Prüfung ab."
],
"Un e-mail de confirmation vient de vous être envoyé. Cliquez sur le lien qu’il contient pour confirmer votre adresse ; votre demande sera ensuite examinée.": [
"A confirmation email has just been sent. Click the link in it to confirm your address; your request will then be reviewed.",
"Acabamos de enviarte un correo de confirmación. Haz clic en el enlace para confirmar tu dirección; después se revisará tu solicitud.",
"Ti abbiamo appena inviato un’e-mail di conferma. Clicca sul link per confermare il tuo indirizzo; la tua richiesta verrà poi esaminata.",
"Wir haben dir gerade eine Bestätigungs-E-Mail geschickt. Klicke auf den Link darin, um deine Adresse zu bestätigen; danach wird deine Anfrage geprüft."
],
"Votre compte est en attente d’approbation. Vous recevrez un e-mail dès que votre accès sera activé.": [
"Your account is awaiting approval. You will receive an email as soon as your access is activated.",
"Tu cuenta está pendiente de aprobación. Recibirás un correo en cuanto se active tu acceso.",
"Il tuo account è in attesa di approvazione. Riceverai un’e-mail non appena l’accesso sarà attivato.",
"Dein Konto wartet auf Freigabe. Du erhältst eine E-Mail, sobald dein Zugang aktiviert ist."
],
"Vérifier à nouveau": [
"Check again",
"Comprobar de nuevo",
"Controlla di nuovo",
"Erneut prüfen"
],
"Vérification impossible, réessayez dans un instant.": [
"Could not check, please try again in a moment.",
"No se pudo comprobar, inténtalo de nuevo en un momento.",
"Verifica non riuscita, riprova tra un attimo.",
"Prüfung nicht möglich, bitte gleich erneut versuchen."
],
"Demandes d’accès": [
"Access requests",
"Solicitudes de acceso",
"Richieste di accesso",
"Zugangsanfragen"
],
"Aucune demande en attente.": [
"No pending requests.",
"No hay solicitudes pendientes.",
"Nessuna richiesta in sospeso.",
"Keine offenen Anfragen."
],
"Approuver": [
"Approve",
"Aprobar",
"Approva",
"Genehmigen"
],
"Refuser": [
"Reject",
"Rechazar",
"Rifiuta",
"Ablehnen"
],
"Refuser et supprimer cette demande ?": [
"Reject and delete this request?",
"¿Rechazar y eliminar esta solicitud?",
"Rifiutare ed eliminare questa richiesta?",
"Diese Anfrage ablehnen und löschen?"
],
"Demande approuvée.": [
"Request approved.",
"Solicitud aprobada.",
"Richiesta approvata.",
"Anfrage genehmigt."
],
"Demande refusée.": [
"Request rejected.",
"Solicitud rechazada.",
"Richiesta rifiutata.",
"Anfrage abgelehnt."
],
"E-mail non envoyé.": [
"Email not sent.",
"Correo no enviado.",
"E-mail non inviata.",
"E-Mail nicht gesendet."
],
"Confirmé le {0}": [
"Confirmed on {0}",
"Confirmado el {0}",
"Confermato il {0}",
"Bestätigt am {0}"
],
"Quand un ami ajoute un concert": [
"When a friend adds a concert",
"Cuando un amigo añade un concierto",
"Quando un amico aggiunge un concerto",
"Wenn ein Freund ein Konzert hinzufügt"
],
"Afficher le mot de passe": [
"Show password",
"Mostrar contraseña",
"Mostra password",
"Passwort anzeigen"
],
"Soutenir In The Pit": [
"Support In The Pit",
"Apoyar In The Pit",
"Sostieni In The Pit",
"In The Pit unterstützen"
],
"♥ Je fais un don pour que In The Pit reste entièrement gratuit": [
"♥ I donate to keep In The Pit completely free",
"♥ Dono para que In The Pit siga siendo totalmente gratis",
"♥ Dono perché In The Pit resti completamente gratuita",
"♥ Ich spende, damit In The Pit komplett kostenlos bleibt"
],
"Je fais un don pour que In The Pit reste entièrement gratuit": [
"I donate to keep In The Pit completely free",
"Dono para que In The Pit siga siendo totalmente gratis",
"Dono perché In The Pit resti completamente gratuita",
"Ich spende, damit In The Pit komplett kostenlos bleibt"
],
"♥ Faire un don": [
"♥ Donate",
"♥ Donar",
"♥ Dona",
"♥ Spenden"
],
"L’application est gratuite. Un don aide à la faire vivre, sans aucune obligation.": [
"The app is free. A donation helps keep it going, with no obligation.",
"La aplicación es gratuita. Una donación ayuda a mantenerla, sin ninguna obligación.",
"L’app è gratuita. Una donazione aiuta a mantenerla, senza alcun obbligo.",
"Die App ist kostenlos. Eine Spende hilft, sie am Leben zu halten, ganz ohne Verpflichtung."
],
"Mes amis": [
"My friends",
"Mis amigos",
"I miei amici",
"Meine Freunde"
],
"E-mail de votre ami": [
"Your friend’s email",
"Correo de tu amigo",
"E-mail del tuo amico",
"E-Mail deines Freundes"
],
"Vos amis peuvent consulter vos concerts, sans les modifier ni ouvrir vos billets. Si votre ami n’a pas encore de compte, il reçoit une invitation par e-mail.": [
"Your friends can view your concerts, without editing them or opening your tickets. If your friend has no account yet, they receive an invitation by email.",
"Tus amigos pueden consultar tus conciertos, sin modificarlos ni abrir tus entradas. Si tu amigo aún no tiene cuenta, recibe una invitación por correo.",
"I tuoi amici possono consultare i tuoi concerti, senza modificarli né aprire i tuoi biglietti. Se il tuo amico non ha ancora un account, riceve un invito via e-mail.",
"Deine Freunde können deine Konzerte ansehen, ohne sie zu ändern oder deine Tickets zu öffnen. Hat dein Freund noch kein Konto, erhält er eine Einladung per E-Mail."
],
"(invité)": [
"(invited)",
"(invitado)",
"(invitato)",
"(eingeladen)"
],
"Envoi de l’invitation…": [
"Sending the invitation…",
"Enviando la invitación…",
"Invio dell’invito…",
"Einladung wird gesendet…"
],
"Invitation envoyée à {0}. Il aura accès à vos concerts dès son inscription.": [
"Invitation sent to {0}. They will see your concerts as soon as they sign up.",
"Invitación enviada a {0}. Verá tus conciertos en cuanto se registre.",
"Invito inviato a {0}. Vedrà i tuoi concerti non appena si iscrive.",
"Einladung an {0} gesendet. Die Person sieht deine Konzerte, sobald sie sich registriert."
],
"Invitation enregistrée, mais l’e-mail n’a pas pu partir. Retirez puis ajoutez à nouveau cet ami pour réessayer.": [
"Invitation saved, but the email could not be sent. Remove and add this friend again to retry.",
"Invitación guardada, pero no se pudo enviar el correo. Quita y vuelve a añadir a este amigo para reintentar.",
"Invito salvato, ma l’e-mail non è partita. Rimuovi e aggiungi di nuovo questo amico per riprovare.",
"Einladung gespeichert, aber die E-Mail konnte nicht gesendet werden. Entferne diesen Freund und füge ihn erneut hinzu."
],
"Cet ami est déjà invité.": [
"This friend is already invited.",
"Este amigo ya está invitado.",
"Questo amico è già stato invitato.",
"Dieser Freund ist bereits eingeladen."
],
"Trop d’invitations aujourd’hui. Réessayez demain.": [
"Too many invitations today. Try again tomorrow.",
"Demasiadas invitaciones hoy. Inténtalo mañana.",
"Troppi inviti oggi. Riprova domani.",
"Zu viele Einladungen heute. Versuche es morgen erneut."
],
"Les photos de groupes sont partagées entre tous les utilisateurs : ajoutez celle d’un groupe pour que tout le monde en profite.": [
"Group photos are shared between all users: add one for a group so everyone can enjoy it.",
"Las fotos de grupos se comparten entre todos los usuarios: añade la de un grupo para que todos la disfruten.",
"Le foto dei gruppi sono condivise tra tutti gli utenti: aggiungi quella di un gruppo così tutti possono usarla.",
"Gruppenfotos werden unter allen Nutzern geteilt: Füge eines für eine Band hinzu, damit alle es nutzen können."
],
"Votre photo (partagée avec tous)": [
"Your photo (shared with everyone)",
"Tu foto (compartida con todos)",
"La tua foto (condivisa con tutti)",
"Dein Foto (mit allen geteilt)"
],
"Photo partagée": [
"Shared photo",
"Foto compartida",
"Foto condivisa",
"Geteiltes Foto"
],
"Voir la liste": [
"View list",
"Ver la lista",
"Vedi l’elenco",
"Liste anzeigen"
],
"Aucun ami pour l’instant.": [
"No friends yet.",
"Aún no hay amigos.",
"Ancora nessun amico.",
"Noch keine Freunde."
],
"Informations": [
"Information",
"Información",
"Informazioni",
"Informationen"
],
"Vos amis peuvent consulter vos concerts, sans les modifier ni ouvrir vos billets.": [
"Your friends can view your concerts, without editing them or opening your tickets.",
"Tus amigos pueden consultar tus conciertos, sin modificarlos ni abrir tus entradas.",
"I tuoi amici possono consultare i tuoi concerti, senza modificarli né aprire i tuoi biglietti.",
"Deine Freunde können deine Konzerte ansehen, ohne sie zu ändern oder deine Tickets zu öffnen."
],
"Si votre ami n’a pas encore de compte, il reçoit une invitation par e-mail.": [
"If your friend has no account yet, they receive an invitation by email.",
"Si tu amigo aún no tiene cuenta, recibe una invitación por correo.",
"Se il tuo amico non ha ancora un account, riceve un invito via e-mail.",
"Hat dein Freund noch kein Konto, erhält er eine Einladung per E-Mail."
],
"Les dons permettent de participer aux coûts fixes mensuels (nom de domaine, hébergement, base de données...). C’est une alternative intéressante à une approche « Freemium »...": [
"Donations help cover the fixed monthly costs (domain name, hosting, database...). It is an interesting alternative to a “Freemium” approach...",
"Las donaciones ayudan a cubrir los costes fijos mensuales (nombre de dominio, alojamiento, base de datos...). Es una alternativa interesante a un enfoque « Freemium »...",
"Le donazioni contribuiscono ai costi fissi mensili (nome di dominio, hosting, database...). È un’alternativa interessante a un approccio « Freemium »...",
"Spenden helfen, die monatlichen Fixkosten zu decken (Domainname, Hosting, Datenbank...). Das ist eine interessante Alternative zu einem „Freemium“-Ansatz..."
],
"J’ai l’intention d’y assister": [
"I intend to go",
"Tengo la intención de ir",
"Ho intenzione di andarci",
"Ich habe vor hinzugehen"
],
"N’irai pas / N’y suis pas allé": [
"Won’t go / Did not go",
"No iré / No fui",
"Non andrò / Non ci sono andato",
"Gehe nicht hin / War nicht dort"
],
"Étiez-vous à ce concert ?": [
"Were you at this concert?",
"¿Estuviste en este concierto?",
"Eri a questo concerto?",
"Warst du bei diesem Konzert?"
],
"Oui, j’y étais": [
"Yes, I was there",
"Sí, estuve allí",
"Sì, c’ero",
"Ja, ich war dort"
],
"Non, je n’y suis pas allé": [
"No, I did not go",
"No, no fui",
"No, non ci sono andato",
"Nein, ich war nicht dort"
],
"Plus tard": [
"Later",
"Más tarde",
"Più tardi",
"Später"
],
"Lieu de la soirée": [
"Venue for the night",
"Lugar de la noche",
"Luogo della serata",
"Ort des Abends"
],
"Même soirée : {0}": [
"Same night: {0}",
"Misma noche: {0}",
"Stessa serata: {0}",
"Gleicher Abend: {0}"
],
"Autre lieu": [
"Another venue",
"Otro lugar",
"Altro luogo",
"Anderer Ort"
],
"Variantes proches": [
"Close variants",
"Variantes cercanas",
"Varianti simili",
"Ähnliche Schreibweisen"
],
"Les graphies proches d’un même nom (majuscules, accents, ponctuation, article) sont regroupées ici. Choisissez celle qui fait foi : les autres sont remplacées dans les concerts de tous les utilisateurs.": [
"Close spellings of the same name (case, accents, punctuation, article) are grouped here. Choose the authoritative one: the others are replaced in all users’ concerts.",
"Las grafías parecidas de un mismo nombre (mayúsculas, acentos, puntuación, artículo) se agrupan aquí. Elige la que prevalece: las demás se sustituyen en los conciertos de todos los usuarios.",
"Le grafie simili dello stesso nome (maiuscole, accenti, punteggiatura, articolo) sono raggruppate qui. Scegli quella valida: le altre vengono sostituite nei concerti di tutti gli utenti.",
"Ähnliche Schreibweisen desselben Namens (Groß-/Kleinschreibung, Akzente, Satzzeichen, Artikel) werden hier gruppiert. Wähle die maßgebliche: Die anderen werden in den Konzerten aller Nutzer ersetzt."
],
"Voir": [
"View",
"Ver",
"Vedi",
"Anzeigen"
],
"Artiste": [
"Artist",
"Artista",
"Artista",
"Künstler"
],
"Évènement": [
"Event",
"Evento",
"Evento",
"Event"
],
"Fusionner": [
"Merge",
"Fusionar",
"Unisci",
"Zusammenführen"
],
"Valeurs différentes": [
"Different values",
"Valores distintos",
"Valori diversi",
"Verschiedene Werte"
],
"Aucune variante proche.": [
"No close variants.",
"Ninguna variante cercana.",
"Nessuna variante simile.",
"Keine ähnlichen Schreibweisen."
],
"Confirmer : remplacer {0} variante(s) par « {1} »": [
"Confirm: replace {0} variant(s) with “{1}”",
"Confirmar: sustituir {0} variante(s) por « {1} »",
"Conferma: sostituire {0} variante/i con « {1} »",
"Bestätigen: {0} Variante(n) durch „{1}“ ersetzen"
],
"{0} concert(s) mis à jour.": [
"{0} concert(s) updated.",
"{0} concierto(s) actualizado(s).",
"{0} concerto/i aggiornato/i.",
"{0} Konzert(e) aktualisiert."
],
"Chercher une photo": [
"Search for a photo",
"Buscar una foto",
"Cerca una foto",
"Foto suchen"
],
"Chercher": [
"Search",
"Buscar",
"Cerca",
"Suchen"
],
"Recherche impossible : {0}": [
"Search failed: {0}",
"Búsqueda imposible: {0}",
"Ricerca impossibile: {0}",
"Suche nicht möglich: {0}"
],
"Aucune photo trouvée pour {0}.": [
"No photo found for {0}.",
"No se encontró ninguna foto de {0}.",
"Nessuna foto trovata per {0}.",
"Kein Foto für {0} gefunden."
],
"Choisissez une photo pour {0}. Vous pourrez la recadrer.": [
"Pick a photo for {0}. You will be able to crop it.",
"Elige una foto para {0}. Podrás recortarla.",
"Scegli una foto per {0}. Potrai ritagliarla.",
"Wähle ein Foto für {0}. Du kannst es zuschneiden."
],
"Chargement de l’image…": [
"Loading the image…",
"Cargando la imagen…",
"Caricamento dell’immagine…",
"Bild wird geladen…"
],
"Recadrer la photo": [
"Crop the photo",
"Recortar la foto",
"Ritaglia la foto",
"Foto zuschneiden"
],
"Déplacez le cadre ou tirez sur ses bords pour recadrer librement.": [
"Move the frame or drag its edges to crop freely.",
"Mueve el marco o arrastra sus bordes para recortar libremente.",
"Sposta il riquadro o trascina i bordi per ritagliare liberamente.",
"Verschiebe den Rahmen oder ziehe an seinen Rändern, um frei zuzuschneiden."
],
"Lecture du billet…": [
"Reading the ticket…",
"Leyendo la entrada…",
"Lettura del biglietto…",
"Ticket wird gelesen…"
],
"Infos reprises du billet. Vérifiez-les avant d’enregistrer.": [
"Details taken from the ticket. Check them before saving.",
"Datos tomados de la entrada. Revísalos antes de guardar.",
"Dati ripresi dal biglietto. Controllali prima di salvare.",
"Angaben aus dem Ticket übernommen. Bitte vor dem Speichern prüfen."
],
"Lecture automatique impossible : {0}": [
"Automatic reading failed: {0}",
"Lectura automática imposible: {0}",
"Lettura automatica impossibile: {0}",
"Automatisches Lesen fehlgeschlagen: {0}"
],
"Quota quotidien atteint, réessayez demain.": [
"Daily limit reached, try again tomorrow.",
"Límite diario alcanzado, vuelve mañana.",
"Limite giornaliero raggiunto, riprova domani.",
"Tageslimit erreicht, versuche es morgen erneut."
],
"Fichier trop volumineux (3 Mo maximum).": [
"File too large (3 MB maximum).",
"Archivo demasiado grande (máximo 3 MB).",
"File troppo grande (massimo 3 MB).",
"Datei zu groß (maximal 3 MB)."
],
"Accès réservé aux comptes approuvés.": [
"Reserved for approved accounts.",
"Reservado a cuentas aprobadas.",
"Riservato agli account approvati.",
"Nur für freigegebene Konten."
],
"Valeurs alignées sur la base : {0}": [
"Values aligned with the database: {0}",
"Valores alineados con la base: {0}",
"Valori allineati con il database: {0}",
"Werte an die Datenbank angepasst: {0}"
],
"Importer un billet PDF": [
"Import a ticket PDF",
"Importar una entrada en PDF",
"Importa un biglietto PDF",
"Ticket-PDF importieren"
],
"Plus de détails": [
"More details",
"Más detalles",
"Altri dettagli",
"Weitere Details"
],
"Fichier choisi : {0}": [
"Selected file: {0}",
"Archivo elegido: {0}",
"File scelto: {0}",
"Gewählte Datei: {0}"
],
"Les champs surlignés ont été lus sur le billet. Vérifiez-les avant d’enregistrer.": [
"The highlighted fields were read from the ticket. Check them before saving.",
"Los campos resaltados se han leído de la entrada. Revísalos antes de guardar.",
"I campi evidenziati sono stati letti dal biglietto. Controllali prima di salvare.",
"Die hervorgehobenen Felder wurden aus dem Ticket gelesen. Bitte vor dem Speichern prüfen."
],
"Choisir une date": [
"Pick a date",
"Elegir una fecha",
"Scegli una data",
"Datum wählen"
],
"In The Pit lira les données du PDF": [
"In The Pit will read the data from the PDF",
"In The Pit leerá los datos del PDF",
"In The Pit leggerà i dati del PDF",
"In The Pit liest die Daten aus dem PDF"
],
"Mes abonnements": [
"My memberships",
"Mis abonos",
"I miei abbonamenti",
"Meine Abos"
],
"Rangez ici vos cartes d’abonnement aux salles (PDF). Une icône apparaît sur vos concerts à venir dans ces salles pour ouvrir la carte.": [
"Keep your venue membership cards (PDF) here. An icon appears on your upcoming concerts at these venues to open the card.",
"Guarda aquí tus carnés de abono de las salas (PDF). Aparece un icono en tus próximos conciertos en esas salas para abrir el carné.",
"Conserva qui le tessere di abbonamento alle sale (PDF). Un’icona appare sui tuoi prossimi concerti in quelle sale per aprire la tessera.",
"Bewahre hier deine Abo-Karten der Spielstätten (PDF) auf. Bei kommenden Konzerten in diesen Spielstätten öffnet ein Symbol die Karte."
],
"Vos amis ne voient pas vos abonnements.": [
"Your friends cannot see your memberships.",
"Tus amigos no ven tus abonos.",
"I tuoi amici non vedono i tuoi abbonamenti.",
"Deine Freunde sehen deine Abos nicht."
],
"Ajouter un abonnement": [
"Add a membership",
"Añadir un abono",
"Aggiungi un abbonamento",
"Abo hinzufügen"
],
"Importer la carte PDF": [
"Import the card PDF",
"Importar el carné en PDF",
"Importa la tessera PDF",
"Karten-PDF importieren"
],
"Salle *": [
"Venue *",
"Sala *",
"Sala *",
"Spielstätte *"
],
"Valable du": [
"Valid from",
"Válido desde",
"Valido dal",
"Gültig ab"
],
"Valable jusqu’au": [
"Valid until",
"Válido hasta",
"Valido fino al",
"Gültig bis"
],
"Numéro d’abonné": [
"Membership number",
"Número de abonado",
"Numero di abbonato",
"Abo-Nummer"
],
"Nouvel abonnement": [
"New membership",
"Nuevo abono",
"Nuovo abbonamento",
"Neues Abo"
],
"Modifier l’abonnement": [
"Edit the membership",
"Editar el abono",
"Modifica l’abbonamento",
"Abo bearbeiten"
],
"Aucun abonnement.": [
"No membership.",
"Ningún abono.",
"Nessun abbonamento.",
"Kein Abo."
],
"Expiré le {0}": [
"Expired on {0}",
"Caducó el {0}",
"Scaduto il {0}",
"Abgelaufen am {0}"
],
"Valable jusqu’au {0}": [
"Valid until {0}",
"Válido hasta el {0}",
"Valido fino al {0}",
"Gültig bis {0}"
],
"Ouvrir": [
"Open",
"Abrir",
"Apri",
"Öffnen"
],
"Modifier": [
"Edit",
"Editar",
"Modifica",
"Bearbeiten"
],
"Carte d’abonnement": [
"Membership card",
"Carné de abono",
"Tessera di abbonamento",
"Abo-Karte"
],
"Lecture de la carte…": [
"Reading the card…",
"Leyendo el carné…",
"Lettura della tessera…",
"Karte wird gelesen…"
],
"Les champs surlignés ont été lus sur la carte. Vérifiez-les avant d’enregistrer.": [
"The highlighted fields were read from the card. Check them before saving.",
"Los campos resaltados se han leído del carné. Revísalos antes de guardar.",
"I campi evidenziati sono stati letti dalla tessera. Controllali prima di salvare.",
"Die hervorgehobenen Felder wurden aus der Karte gelesen. Bitte vor dem Speichern prüfen."
],
"Indiquez la salle.": [
"Enter the venue.",
"Indica la sala.",
"Indica la sala.",
"Bitte die Spielstätte angeben."
],
"Supprimer cet abonnement ?": [
"Delete this membership?",
"¿Eliminar este abono?",
"Eliminare questo abbonamento?",
"Dieses Abo löschen?"
],
"Supprimer": [
"Delete",
"Eliminar",
"Elimina",
"Löschen"
],
"La recette d’In The Pit": [
"The In The Pit recipe",
"La receta de In The Pit",
"La ricetta di In The Pit",
"Das Rezept von In The Pit"
],
"Les technologies et services tiers qui font tourner l’app.": [
"The technologies and third-party services that run the app.",
"Las tecnologías y servicios de terceros que hacen funcionar la app.",
"Le tecnologie e i servizi di terze parti che fanno funzionare l’app.",
"Die Technologien und Drittdienste, mit denen die App läuft."
],
"Comptes, base de données, stockage des fichiers et fonctions serveur.": [
"Accounts, database, file storage and server functions.",
"Cuentas, base de datos, almacenamiento de archivos y funciones de servidor.",
"Account, database, archiviazione dei file e funzioni server.",
"Konten, Datenbank, Dateispeicher und Serverfunktionen."
],
"Hébergement de l’app, déploiement automatique et certificat HTTPS.": [
"App hosting, automatic deployment and HTTPS certificate.",
"Alojamiento de la app, despliegue automático y certificado HTTPS.",
"Hosting dell’app, distribuzione automatica e certificato HTTPS.",
"Hosting der App, automatische Bereitstellung und HTTPS-Zertifikat."
],
"Dépôt du code source ; chaque modification déclenche un déploiement.": [
"Source code repository; every change triggers a deployment.",
"Repositorio del código fuente; cada cambio lanza un despliegue.",
"Repository del codice sorgente; ogni modifica avvia una distribuzione.",
"Quellcode-Repository; jede Änderung löst eine Bereitstellung aus."
],
"Nom de domaine he-p.it et boîtes e-mail.": [
"Domain name he-p.it and mailboxes.",
"Nombre de dominio he-p.it y buzones de correo.",
"Nome di dominio he-p.it e caselle e-mail.",
"Domainname he-p.it und E-Mail-Postfächer."
],
"Envoi des e-mails : confirmation, mot de passe, invitations, approbations.": [
"Sending emails: confirmation, password, invitations, approvals.",
"Envío de correos: confirmación, contraseña, invitaciones, aprobaciones.",
"Invio delle e-mail: conferma, password, inviti, approvazioni.",
"E-Mail-Versand: Bestätigung, Passwort, Einladungen, Freigaben."
],
"Protection anti-robots à la connexion et à l’inscription.": [
"Bot protection at sign-in and sign-up.",
"Protección contra robots al iniciar sesión y al registrarse.",
"Protezione dai bot all’accesso e alla registrazione.",
"Bot-Schutz bei Anmeldung und Registrierung."
],
"Lecture automatique des billets et des cartes d’abonnement en PDF.": [
"Automatic reading of ticket and membership card PDFs.",
"Lectura automática de entradas y carnés de abono en PDF.",
"Lettura automatica dei PDF di biglietti e tessere di abbonamento.",
"Automatisches Lesen von Ticket- und Abo-Karten-PDFs."
],
"Propositions de photos pour les groupes.": [
"Photo suggestions for bands.",
"Propuestas de fotos para los grupos.",
"Proposte di foto per i gruppi.",
"Fotovorschläge für Bands."
],
"Acheminement des notifications vers vos appareils.": [
"Delivery of notifications to your devices.",
"Entrega de las notificaciones a tus dispositivos.",
"Recapito delle notifiche ai tuoi dispositivi.",
"Zustellung der Benachrichtigungen an deine Geräte."
],
"Dons pour participer aux coûts fixes.": [
"Donations to help cover the fixed costs.",
"Donaciones para ayudar con los costes fijos.",
"Donazioni per contribuire ai costi fissi.",
"Spenden zur Deckung der Fixkosten."
],
"Bibliothèque Supabase et police Roboto.": [
"Supabase library and Roboto font.",
"Biblioteca de Supabase y fuente Roboto.",
"Libreria Supabase e font Roboto.",
"Supabase-Bibliothek und Schriftart Roboto."
],
"Écriture et maintenance du code de l’app.": [
"Writing and maintaining the app’s code.",
"Escritura y mantenimiento del código de la app.",
"Scrittura e manutenzione del codice dell’app.",
"Schreiben und Pflegen des App-Codes."
],
"Wikipedia et Deezer": [
"Wikipedia and Deezer",
"Wikipedia y Deezer",
"Wikipedia e Deezer",
"Wikipedia und Deezer"
],
"jsDelivr et Google Fonts": [
"jsDelivr and Google Fonts",
"jsDelivr y Google Fonts",
"jsDelivr e Google Fonts",
"jsDelivr und Google Fonts"
],
"Ajouter des amis": [
"Add friends",
"Añadir amigos",
"Aggiungi amici",
"Freunde hinzufügen"
],
"Saisissez une ou plusieurs adresses e-mail, séparées par une virgule ou un retour à la ligne.": [
"Enter one or more email addresses, separated by a comma or a line break.",
"Introduce una o varias direcciones de correo, separadas por una coma o un salto de línea.",
"Inserisci uno o più indirizzi e-mail, separati da una virgola o da un a capo.",
"Gib eine oder mehrere E-Mail-Adressen ein, getrennt durch Komma oder Zeilenumbruch."
],
"ami@exemple.com": [
"friend@example.com",
"amigo@ejemplo.com",
"amico@esempio.com",
"freund@beispiel.de"
],
"Valider": [
"Confirm",
"Validar",
"Conferma",
"Bestätigen"
],
"Photo du groupe": [
"Band photo",
"Foto del grupo",
"Foto del gruppo",
"Bandfoto"
],
"Depuis mon appareil": [
"From my device",
"Desde mi dispositivo",
"Dal mio dispositivo",
"Von meinem Gerät"
],
"Retirer ma photo": [
"Remove my photo",
"Quitar mi foto",
"Rimuovi la mia foto",
"Mein Foto entfernen"
],
"collage non pris en charge par ce navigateur, utilisez « Depuis mon appareil »": [
"pasting is not supported by this browser, use “From my device”",
"este navegador no admite pegar, usa «Desde mi dispositivo»",
"incolla non supportato da questo browser, usa «Dal mio dispositivo»",
"Einfügen wird von diesem Browser nicht unterstützt, nutze „Von meinem Gerät“"
],
"Expiré le {0}. Suppression automatique le {1}.": [
"Expired on {0}. Will be deleted automatically on {1}.",
"Caducó el {0}. Se eliminará automáticamente el {1}.",
"Scaduto il {0}. Eliminazione automatica il {1}.",
"Abgelaufen am {0}. Wird am {1} automatisch gelöscht."
],
"Installez In The Pit": [
"Install In The Pit",
"Instala In The Pit",
"Installa In The Pit",
"Installiere In The Pit"
],
"Installer": [
"Install",
"Instalar",
"Installa",
"Installieren"
],
"Accès direct, plein écran et rappels de concerts.": [
"Quick access, full screen and concert reminders.",
"Acceso directo, pantalla completa y recordatorios de conciertos.",
"Accesso diretto, schermo intero e promemoria dei concerti.",
"Direktzugriff, Vollbild und Konzerterinnerungen."
],
"Touchez Partager, puis « Sur l’écran d’accueil » pour installer l’app et recevoir les rappels.": [
"Tap Share, then “Add to Home Screen” to install the app and get reminders.",
"Toca Compartir y luego «Añadir a pantalla de inicio» para instalar la app y recibir los recordatorios.",
"Tocca Condividi, poi «Aggiungi alla schermata Home» per installare l’app e ricevere i promemoria.",
"Tippe auf Teilen und dann auf „Zum Home-Bildschirm“, um die App zu installieren und Erinnerungen zu erhalten."
],
"Installer l’application": [
"Install the app",
"Instalar la aplicación",
"Installa l’applicazione",
"App installieren"
],
"Installer sur cet appareil": [
"Install on this device",
"Instalar en este dispositivo",
"Installa su questo dispositivo",
"Auf diesem Gerät installieren"
],
"Ouvrez le menu de votre navigateur, puis choisissez « Installer l’application » ou « Ajouter à l’écran d’accueil ».": [
"Open your browser menu, then choose “Install app” or “Add to Home Screen”.",
"Abre el menú del navegador y elige «Instalar aplicación» o «Añadir a pantalla de inicio».",
"Apri il menu del browser, poi scegli «Installa app» o «Aggiungi alla schermata Home».",
"Öffne das Browsermenü und wähle „App installieren“ oder „Zum Startbildschirm hinzufügen“."
],
"Aperçu de la communauté": [
"Community overview",
"Resumen de la comunidad",
"Panoramica della community",
"Community-Überblick"
],
"Statistiques anonymes cumulées des concerts vus par les membres d’In The Pit. Aucun nom d’utilisateur ni donnée personnelle n’est affiché.": [
"Anonymous combined statistics of the concerts seen by In The Pit members. No usernames or personal data are shown.",
"Estadísticas anónimas acumuladas de los conciertos vistos por los miembros de In The Pit. No se muestra ningún nombre de usuario ni dato personal.",
"Statistiche anonime cumulative dei concerti visti dai membri di In The Pit. Non viene mostrato alcun nome utente né dato personale.",
"Anonyme, zusammengefasste Statistiken der Konzerte, die In-The-Pit-Mitglieder gesehen haben. Es werden keine Benutzernamen oder persönlichen Daten angezeigt."
],
"Membres actifs": [
"Active members",
"Miembros activos",
"Membri attivi",
"Aktive Mitglieder"
],
"Pays les plus visités": [
"Most visited countries",
"Países más visitados",
"Paesi più visitati",
"Meistbesuchte Länder"
],
"Les concerts de la communauté": [
"The community’s concerts",
"Los conciertos de la comunidad",
"I concerti della community",
"Die Konzerte der Community"
],
"Tous les concerts des membres d’In The Pit, sans doublons. Créez un compte pour gérer vos propres concerts.": [
"All concerts of In The Pit members, without duplicates. Create an account to manage your own concerts.",
"Todos los conciertos de los miembros de In The Pit, sin duplicados. Crea una cuenta para gestionar tus propios conciertos.",
"Tutti i concerti dei membri di In The Pit, senza duplicati. Crea un account per gestire i tuoi concerti.",
"Alle Konzerte der In-The-Pit-Mitglieder, ohne Duplikate. Erstelle ein Konto, um deine eigenen Konzerte zu verwalten."
],
"Rechercher (artiste, salle, ville)": [
"Search (artist, venue, city)",
"Buscar (artista, sala, ciudad)",
"Cerca (artista, locale, città)",
"Suchen (Künstler, Location, Stadt)"
],
"Afficher plus": [
"Show more",
"Mostrar más",
"Mostra altro",
"Mehr anzeigen"
],
"Aucun résultat": [
"No results",
"Sin resultados",
"Nessun risultato",
"Keine Ergebnisse"
],
"Afficher mes concerts, anonymement, dans la liste publique des invités": [
"Show my concerts, anonymously, in the public guest list",
"Mostrar mis conciertos, de forma anónima, en la lista pública de invitados",
"Mostra i miei concerti, in forma anonima, nell’elenco pubblico degli ospiti",
"Meine Konzerte anonym in der öffentlichen Gästeliste anzeigen"
],
"Sans votre nom ni vos notes, prix ou billets. Les concerts passés et à venir sont visibles, hors évènements privés.": [
"Without your name, notes, prices or tickets. Past and upcoming concerts are visible, except private events.",
"Sin tu nombre, notas, precios ni entradas. Los conciertos pasados y futuros son visibles, salvo los eventos privados.",
"Senza il tuo nome, note, prezzi o biglietti. I concerti passati e futuri sono visibili, tranne gli eventi privati.",
"Ohne deinen Namen, Notizen, Preise oder Tickets. Vergangene und kommende Konzerte sind sichtbar, außer privaten Terminen."
],
"Vos concerts apparaissent dans la liste publique, sans votre nom.": [
"Your concerts now appear in the public list, without your name.",
"Tus conciertos aparecen ahora en la lista pública, sin tu nombre.",
"I tuoi concerti compaiono ora nell’elenco pubblico, senza il tuo nome.",
"Deine Konzerte erscheinen jetzt in der öffentlichen Liste, ohne deinen Namen."
],
"Vos concerts n’apparaissent plus dans la liste publique.": [
"Your concerts no longer appear in the public list.",
"Tus conciertos ya no aparecen en la lista pública.",
"I tuoi concerti non compaiono più nell’elenco pubblico.",
"Deine Konzerte erscheinen nicht mehr in der öffentlichen Liste."
],
"Aucun concert partagé pour l’instant.": [
"No shared concerts yet.",
"Aún no hay conciertos compartidos.",
"Nessun concerto condiviso per ora.",
"Noch keine geteilten Konzerte."
],
"Connectez-vous pour accéder à vos concerts ou {0}.": [
"Sign in to access your concerts or {0}.",
"Inicia sesión para acceder a tus conciertos o {0}.",
"Accedi per vedere i tuoi concerti oppure {0}.",
"Melde dich an, um auf deine Konzerte zuzugreifen, oder {0}."
],
"découvrez In The Pit en tant qu’invité": [
"discover In The Pit as a guest",
"descubre In The Pit como invitado",
"scopri In The Pit come ospite",
"entdecke In The Pit als Gast"
],
"Créez un compte": [
"Create an account",
"Crea una cuenta",
"Crea un account",
"Erstelle ein Konto"
],
"Nouveau ici ? {0}.": [
"New here? {0}.",
"¿Eres nuevo? {0}.",
"Sei nuovo? {0}.",
"Neu hier? {0}."
],
"C’est aujourd’hui !": [
"It’s today!",
"¡Es hoy!",
"È oggi!",
"Heute ist es soweit!"
],
"Une nouvelle version est disponible.": [
"A new version is available.",
"Hay una nueva versión disponible.",
"È disponibile una nuova versione.",
"Eine neue Version ist verfügbar."
],
"Actualiser": [
"Refresh",
"Actualizar",
"Aggiorna",
"Aktualisieren"
],
"Inclure les modifications mineures": [
"Include minor changes",
"Incluir los cambios menores",
"Includi le modifiche minori",
"Kleinere Änderungen einbeziehen"
],
"Place papier": ["Paper ticket", "Entrada en papel", "Biglietto cartaceo", "Papierticket"],
"Photographiez votre place papier : elle sera redressée et recadrée automatiquement.": ["Photograph your paper ticket: it will be straightened and cropped automatically.", "Fotografía tu entrada en papel: se enderezará y recortará automáticamente.", "Fotografa il tuo biglietto cartaceo: verrà raddrizzato e ritagliato automaticamente.", "Fotografiere dein Papierticket: Es wird automatisch begradigt und zugeschnitten."],
"Prendre en photo": ["Take a photo", "Hacer una foto", "Scatta una foto", "Foto aufnehmen"],
"Refaire la photo": ["Retake photo", "Repetir la foto", "Rifai la foto", "Foto wiederholen"],
"Galerie": ["Gallery", "Galería", "Galleria", "Galerie"],
"Supprimer la photo": ["Delete photo", "Eliminar la foto", "Elimina la foto", "Foto löschen"],
"Ajustez les 4 coins sur les angles de la place.": ["Adjust the 4 corners onto the corners of the ticket.", "Ajusta las 4 esquinas sobre las esquinas de la entrada.", "Regola i 4 angoli sugli angoli del biglietto.", "Passe die 4 Ecken an die Ecken des Tickets an."],
"Détection des bords de la place…": ["Detecting ticket edges…", "Detectando los bordes de la entrada…", "Rilevamento dei bordi del biglietto…", "Ticketränder werden erkannt…"],
"Détection impossible : {0}": ["Detection failed: {0}", "Detección imposible: {0}", "Rilevamento impossibile: {0}", "Erkennung nicht möglich: {0}"],
"Bords non détectés : placez les 4 coins à la main.": ["Edges not detected: place the 4 corners by hand.", "Bordes no detectados: coloca las 4 esquinas a mano.", "Bordi non rilevati: posiziona i 4 angoli a mano.", "Ränder nicht erkannt: Setze die 4 Ecken von Hand."],
"Image illisible : {0}": ["Unreadable image: {0}", "Imagen ilegible: {0}", "Immagine illeggibile: {0}", "Bild nicht lesbar: {0}"],
"Redressement et enregistrement…": ["Straightening and saving…", "Enderezando y guardando…", "Raddrizzamento e salvataggio…", "Begradigen und Speichern…"],
"Enregistrement impossible : {0}": ["Saving failed: {0}", "No se pudo guardar: {0}", "Salvataggio impossibile: {0}", "Speichern nicht möglich: {0}"],
"Supprimer la photo de cette place ?": ["Delete the photo of this ticket?", "¿Eliminar la foto de esta entrada?", "Eliminare la foto di questo biglietto?", "Foto dieses Tickets löschen?"],
"Pivoter à gauche": ["Rotate left", "Girar a la izquierda", "Ruota a sinistra", "Nach links drehen"],
"Pivoter à droite": ["Rotate right", "Girar a la derecha", "Ruota a destra", "Nach rechts drehen"],
"Note pour vos amis (traduite automatiquement)": ["Note for your friends (automatically translated)", "Nota para tus amigos (traducida automáticamente)", "Nota per i tuoi amici (tradotta automaticamente)", "Notiz für deine Freunde (automatisch übersetzt)"],
"Ex. : mon tout premier concert…": ["E.g. my very first concert…", "P. ej.: mi primer concierto…", "Es.: il mio primo concerto…", "Z. B.: mein allererstes Konzert…"],
"Enregistrer la note": ["Save note", "Guardar la nota", "Salva la nota", "Notiz speichern"],
"Traduction et enregistrement de la note…": ["Translating and saving the note…", "Traduciendo y guardando la nota…", "Traduzione e salvataggio della nota…", "Notiz wird übersetzt und gespeichert…"],
"Note enregistrée.": ["Note saved.", "Nota guardada.", "Nota salvata.", "Notiz gespeichert."],
"Note enregistrée sans traduction : {0}": ["Note saved without translation: {0}", "Nota guardada sin traducción: {0}", "Nota salvata senza traduzione: {0}", "Notiz ohne Übersetzung gespeichert: {0}"],
"Traduit automatiquement": ["Automatically translated", "Traducido automáticamente", "Tradotto automaticamente", "Automatisch übersetzt"],
"Présentez ce QR code à l’entrée et augmentez la luminosité de votre écran.": ["Show this QR code at the entrance and turn your screen brightness up.", "Presenta este código QR en la entrada y sube el brillo de la pantalla.", "Mostra questo codice QR all'ingresso e aumenta la luminosità dello schermo.", "Zeige diesen QR-Code am Eingang und erhöhe die Bildschirmhelligkeit."],
"Ouvrir le PDF": ["Open the PDF", "Abrir el PDF", "Apri il PDF", "PDF öffnen"],
"Impossible de préparer le QR code : {0}": ["Could not prepare the QR code: {0}", "No se pudo preparar el código QR: {0}", "Impossibile preparare il codice QR: {0}", "QR-Code konnte nicht vorbereitet werden: {0}"],
"Aucun QR code lisible dans ce PDF : ouverture du billet.": ["No readable QR code in this PDF: opening the ticket.", "No hay ningún código QR legible en este PDF: se abre la entrada.", "Nessun codice QR leggibile in questo PDF: apertura del biglietto.", "Kein lesbarer QR-Code in diesem PDF: Ticket wird geöffnet."],
"Nouveautés de cette version": ["What’s new in this version", "Novedades de esta versión", "Novità di questa versione", "Neu in dieser Version"],
"Afficher les nouveautés après une mise à jour": ["Show what’s new after an update", "Mostrar las novedades después de una actualización", "Mostra le novità dopo un aggiornamento", "Neuerungen nach einem Update anzeigen"],
"À venir": ["Upcoming", "Próximos", "In arrivo", "Kommend"],
"Passés": ["Past", "Pasados", "Passati", "Vergangen"],
"Premières parties": ["Opening acts", "Teloneros", "Band di supporto", "Vorbands"],
"Pas vus": ["Not seen", "No vistos", "Non visti", "Nicht gesehen"],
"Chronologique": ["Chronological", "Cronológico", "Cronologico", "Chronologisch"],
"Anti-chronologique": ["Reverse chronological", "Cronológico inverso", "Cronologico inverso", "Umgekehrt chronologisch"],
"Filtre sur artiste, salle, ville, nom d’ami…": ["Filter by artist, venue, city, friend’s name…", "Filtrar por artista, sala, ciudad, nombre de amigo…", "Filtra per artista, locale, città, nome dell'amico…", "Filtern nach Künstler, Ort, Stadt, Name eines Freundes…"],
"Filtre 1": ["Filter 1", "Filtro 1", "Filtro 1", "Filter 1"],
"Filtre 2": ["Filter 2", "Filtro 2", "Filtro 2", "Filter 2"],
"Opérateur logique": ["Logical operator", "Operador lógico", "Operatore logico", "Logischer Operator"],
"et": ["and", "y", "e", "und"],
"ou": ["or", "o", "o", "oder"],
"Réinitialiser les filtres": ["Reset filters", "Restablecer los filtros", "Reimposta i filtri", "Filter zurücksetzen"],
"Filtres": ["Filters", "Filtros", "Filtri", "Filter"],
"Appui long pour avoir de l’aide": ["Long-press for help", "Mantén pulsado para obtener ayuda", "Tieni premuto per l'aiuto", "Lange drücken für Hilfe"],
"Remet tous les filtres à leur valeur par défaut.": ["Resets all filters to their default values.", "Restablece todos los filtros a sus valores por defecto.", "Riporta tutti i filtri ai valori predefiniti.", "Setzt alle Filter auf die Standardwerte zurück."],
"Crée une image de la liste affichée, à enregistrer ou à partager.": ["Creates an image of the displayed list, to save or share.", "Crea una imagen de la lista mostrada, para guardar o compartir.", "Crea un'immagine dell'elenco visualizzato, da salvare o condividere.", "Erstellt ein Bild der angezeigten Liste zum Speichern oder Teilen."],
"Ajoute un concert à votre liste.": ["Adds a concert to your list.", "Añade un concierto a tu lista.", "Aggiunge un concerto alla tua lista.", "Fügt deiner Liste ein Konzert hinzu."],
"Ouvre les statistiques de vos concerts.": ["Opens your concert statistics.", "Abre las estadísticas de tus conciertos.", "Apre le statistiche dei tuoi concerti.", "Öffnet die Statistiken deiner Konzerte."],
"Ouvre les options : compte, amis, notifications, historique…": ["Opens the options: account, friends, notifications, history…", "Abre las opciones: cuenta, amigos, notificaciones, historial…", "Apre le opzioni: account, amici, notifiche, cronologia…", "Öffnet die Optionen: Konto, Freunde, Benachrichtigungen, Verlauf…"],
"Boîte à idées": ["Idea box", "Buzón de ideas", "Casella delle idee", "Ideenbox"],
"Idées reçues": ["Ideas received", "Ideas recibidas", "Idee ricevute", "Eingegangene Ideen"],
"Une idée, une suggestion pour améliorer In The Pit ? Écrivez-la ici.": ["An idea, a suggestion to improve In The Pit? Write it here.", "¿Una idea, una sugerencia para mejorar In The Pit? Escríbela aquí.", "Un'idea, un suggerimento per migliorare In The Pit? Scrivilo qui.", "Eine Idee, ein Vorschlag, um In The Pit zu verbessern? Schreib ihn hier auf."],
"Votre idée…": ["Your idea…", "Tu idea…", "La tua idea…", "Deine Idee…"],
"Envoyer": ["Send", "Enviar", "Invia", "Senden"],
"Écrivez votre idée avant de l’envoyer.": ["Write your idea before sending it.", "Escribe tu idea antes de enviarla.", "Scrivi la tua idea prima di inviarla.", "Schreibe deine Idee, bevor du sie sendest."],
"Merci ! Votre idée a bien été prise en compte.": ["Thank you! Your idea has been received.", "¡Gracias! Tu idea se ha recibido correctamente.", "Grazie! La tua idea è stata presa in considerazione.", "Danke! Deine Idee ist angekommen."],
"Vous avez déjà envoyé beaucoup d’idées aujourd’hui : réessayez demain.": ["You have already sent many ideas today: try again tomorrow.", "Ya has enviado muchas ideas hoy: inténtalo de nuevo mañana.", "Hai già inviato molte idee oggi: riprova domani.", "Du hast heute schon viele Ideen gesendet: versuche es morgen erneut."],
"Supprimer cette idée ?": ["Delete this idea?", "¿Eliminar esta idea?", "Eliminare questa idea?", "Diese Idee löschen?"],
"Aucune idée pour le moment.": ["No ideas yet.", "Aún no hay ideas.", "Nessuna idea per ora.", "Noch keine Ideen."],
"Original": ["Original", "Original", "Originale", "Original"],
"Renommer": ["Rename", "Renombrar", "Rinomina", "Umbenennen"],
"Ils partagent leurs concerts avec vous": ["They share their concerts with you", "Comparten sus conciertos contigo", "Condividono i loro concerti con te", "Sie teilen ihre Konzerte mit dir"],
"Nom que vous donnez à cet ami (vide = nom d’origine)": ["Name you give this friend (empty = original name)", "Nombre que le das a este amigo (vacío = nombre original)", "Nome che dai a questo amico (vuoto = nome originale)", "Name, den du diesem Freund gibst (leer = Originalname)"],
"Mon domicile": ["My home", "Mi domicilio", "La mia casa", "Mein Zuhause"],
"Ville, pays (ex. Lyon, France)": ["City, country (e.g. Lyon, France)", "Ciudad, país (p. ej. Lyon, Francia)", "Città, paese (es. Lione, Francia)", "Stadt, Land (z. B. Lyon, Frankreich)"],
"Utiliser ma position": ["Use my location", "Usar mi ubicación", "Usa la mia posizione", "Meinen Standort verwenden"],
"Effacer": ["Clear", "Borrar", "Cancella", "Löschen"],
"Sert uniquement au filtre de distance. Position arrondie à environ 1 km, visible de vous seul.": ["Only used for the distance filter. Position rounded to about 1 km, visible to you only.", "Solo sirve para el filtro de distancia. Posición redondeada a aproximadamente 1 km, visible solo para ti.", "Serve solo per il filtro di distanza. Posizione arrotondata a circa 1 km, visibile solo a te.", "Dient nur dem Entfernungsfilter. Position auf etwa 1 km gerundet, nur für dich sichtbar."],
"Domicile : {0}": ["Home: {0}", "Domicilio: {0}", "Casa: {0}", "Zuhause: {0}"],
"Ma position": ["My location", "Mi ubicación", "La mia posizione", "Mein Standort"],
"Aucun domicile défini : le filtre de distance est inactif.": ["No home set: the distance filter is inactive.", "Ningún domicilio definido: el filtro de distancia está inactivo.", "Nessuna casa impostata: il filtro di distanza è inattivo.", "Kein Zuhause festgelegt: der Entfernungsfilter ist inaktiv."],
"Recherche…": ["Searching…", "Buscando…", "Ricerca in corso…", "Suche läuft…"],
"Lieu introuvable.": ["Place not found.", "Lugar no encontrado.", "Luogo non trovato.", "Ort nicht gefunden."],
"Position indisponible.": ["Location unavailable.", "Ubicación no disponible.", "Posizione non disponibile.", "Standort nicht verfügbar."],
"Distance du domicile": ["Distance from home", "Distancia del domicilio", "Distanza da casa", "Entfernung vom Zuhause"],
"illimitée": ["unlimited", "ilimitada", "illimitata", "unbegrenzt"],
"définir mon domicile": ["set my home", "definir mi domicilio", "imposta la mia casa", "mein Zuhause festlegen"],
"À propos d’In The Pit": ["About In The Pit", "Acerca de In The Pit", "Informazioni su In The Pit", "Über In The Pit"],
"Le QR code ou le code-barres n’a pas pu être préparé": ["The QR code or barcode could not be prepared", "No se pudo preparar el código QR o el código de barras", "Non è stato possibile preparare il codice QR o il codice a barre", "QR-Code oder Barcode konnte nicht vorbereitet werden"],
"Pas de QR code ni de code-barres sur ce billet": ["No QR code or barcode on this ticket", "Esta entrada no tiene código QR ni código de barras", "Nessun codice QR né codice a barre su questo biglietto", "Weder QR-Code noch Barcode auf diesem Ticket"],
"Pas de souci : le billet PDF reste disponible.": ["No worries: the PDF ticket is still available.", "No te preocupes: la entrada en PDF sigue disponible.", "Nessun problema: il biglietto PDF resta disponibile.", "Kein Problem: das PDF-Ticket bleibt verfügbar."],
"Ce PDF ne contient ni QR code ni code-barres que l’appli sache lire. Ouvrez le billet : c’est lui que vous présenterez à l’entrée.": ["This PDF has no QR code or barcode the app can read. Open the ticket: that is what you will show at the entrance.", "Este PDF no contiene ningún código QR ni código de barras que la app sepa leer. Abre la entrada: es la que presentarás en la puerta.", "Questo PDF non contiene alcun codice QR né codice a barre che l’app sappia leggere. Apri il biglietto: è quello che mostrerai all’ingresso.", "Dieses PDF enthält keinen QR-Code und keinen Barcode, den die App lesen kann. Öffne das Ticket: Das zeigst du am Eingang vor."],
"Ouvrir le billet (PDF)": ["Open the ticket (PDF)", "Abrir la entrada (PDF)", "Apri il biglietto (PDF)", "Ticket öffnen (PDF)"],
"Hors ligne : seuls vos prochains concerts sont affichés.": ["Offline: only your upcoming concerts are shown.", "Sin conexión: solo se muestran tus próximos conciertos.", "Offline: sono mostrati solo i tuoi prossimi concerti.", "Offline: nur deine kommenden Konzerte werden angezeigt."],
"Réessayer": ["Try again", "Reintentar", "Riprova", "Erneut versuchen"],
"Billet non disponible hors ligne": ["Ticket not available offline", "Entrada no disponible sin conexión", "Biglietto non disponibile offline", "Ticket offline nicht verfügbar"],
"Ce billet n’a pas encore été préparé sur ce téléphone. Ouvrez l’app une fois avec du réseau : il restera ensuite disponible sans connexion.": ["This ticket has not been prepared on this phone yet. Open the app once with a connection: it will then stay available offline.", "Esta entrada aún no se ha preparado en este teléfono. Abre la app una vez con conexión: después seguirá disponible sin conexión.", "Questo biglietto non è ancora stato preparato su questo telefono. Apri l’app una volta con la rete: poi resterà disponibile offline.", "Dieses Ticket wurde auf diesem Handy noch nicht vorbereitet. Öffne die App einmal mit Verbindung: Danach bleibt es offline verfügbar."],
"Billet du concert": ["Concert ticket", "Entrada del concierto", "Biglietto del concerto", "Konzertticket"],
"Place de concert": ["Concert ticket", "Entrada de concierto", "Biglietto concerto", "Konzertkarte"],
"Abonnement / Adhésion": ["Subscription / Membership", "Abono / Membresía", "Abbonamento / Tessera", "Abo / Mitgliedschaft"],
"N° d’abonné : {0}": ["Member no.: {0}", "N.º de socio: {0}", "N. tessera: {0}", "Mitgliedsnr.: {0}"],
"Concerts publics": ["Public concerts", "Conciertos públicos", "Concerti pubblici", "Öffentliche Konzerte"],
"Plus il y a de concerts partagés, plus In The Pit est utile à tous : listes publiques plus riches, découvertes de concerts, entrées partagées automatiquement. C’est grâce aux contributions de chacun que l’appli peut apporter de la valeur. Merci de jouer le jeu !": ["The more concerts are shared, the more useful In The Pit is to everyone: richer public lists, concert discoveries, entries shared automatically. It is thanks to everyone’s contributions that the app can bring value. Thanks for playing along!", "Cuantos más conciertos se comparten, más útil es In The Pit para todos: listas públicas más ricas, descubrimiento de conciertos, entradas compartidas automáticamente. Es gracias a las contribuciones de todos que la app puede aportar valor. ¡Gracias por participar!", "Più concerti vengono condivisi, più In The Pit è utile a tutti: elenchi pubblici più ricchi, scoperta di concerti, voci condivise automaticamente. È grazie ai contributi di tutti che l’app può offrire valore. Grazie per la partecipazione!", "Je mehr Konzerte geteilt werden, desto nützlicher ist In The Pit für alle: reichhaltigere öffentliche Listen, Konzertentdeckungen, automatisch geteilte Einträge. Nur durch die Beiträge aller kann die App Mehrwert bieten. Danke fürs Mitmachen!"],
"Présentez ce code-barres à l’entrée et augmentez la luminosité de votre écran.": ["Show this barcode at the entrance and turn your screen brightness up.", "Presenta este código de barras en la entrada y sube el brillo de la pantalla.", "Mostra questo codice a barre all'ingresso e aumenta la luminosità dello schermo.", "Zeige diesen Barcode am Eingang und erhöhe die Bildschirmhelligkeit."],
"Signaler la photo partagée": ["Report the shared photo", "Denunciar la foto compartida", "Segnala la foto condivisa", "Geteiltes Foto melden"],
"Merci, le signalement a été transmis à l’administrateur.": ["Thanks, the report has been sent to the administrator.", "Gracias, el aviso se ha enviado al administrador.", "Grazie, la segnalazione è stata inviata all’amministratore.", "Danke, die Meldung wurde an den Administrator weitergeleitet."],
"Rechercher un groupe…": ["Search for a band…", "Buscar un grupo…", "Cerca un gruppo…", "Band suchen …"],
"Signalée {0} fois": ["Reported {0} times", "Denunciada {0} veces", "Segnalata {0} volte", "{0}-mal gemeldet"],
"Supprimer cette photo ?": ["Delete this photo?", "¿Eliminar esta foto?", "Eliminare questa foto?", "Dieses Foto löschen?"],
"Aucune photo.": ["No photos.", "Ninguna foto.", "Nessuna foto.", "Keine Fotos."],
"Exporter mes données": ["Export my data", "Exportar mis datos", "Esporta i miei dati", "Meine Daten exportieren"],
"Politique de confidentialité": ["Privacy policy", "Política de privacidad", "Informativa sulla privacy", "Datenschutzerklärung"],
"Statistiques d’utilisation": ["Usage statistics", "Estadísticas de uso", "Statistiche di utilizzo", "Nutzungsstatistiken"],
"Comptes": ["Accounts", "Cuentas", "Account", "Konten"],
"Nouveaux comptes (7 jours)": ["New accounts (7 days)", "Cuentas nuevas (7 días)", "Nuovi account (7 giorni)", "Neue Konten (7 Tage)"],
"Comptes actifs (7 jours)": ["Active accounts (7 days)", "Cuentas activas (7 días)", "Account attivi (7 giorni)", "Aktive Konten (7 Tage)"],
"Comptes actifs (30 jours)": ["Active accounts (30 days)", "Cuentas activas (30 días)", "Account attivi (30 giorni)", "Aktive Konten (30 Tage)"],
"Abonnements": ["Memberships", "Abonos", "Abbonamenti", "Mitgliedschaften"],
"Billets analysés par l’IA (aujourd’hui)": ["Tickets analysed by AI (today)", "Entradas analizadas por la IA (hoy)", "Biglietti analizzati dall’IA (oggi)", "Von der KI analysierte Tickets (heute)"],
"Billets analysés par l’IA (7 jours)": ["Tickets analysed by AI (7 days)", "Entradas analizadas por la IA (7 días)", "Biglietti analizzati dall’IA (7 giorni)", "Von der KI analysierte Tickets (7 Tage)"],
"Recherches de villes (aujourd’hui)": ["City lookups (today)", "Búsquedas de ciudades (hoy)", "Ricerche di città (oggi)", "Ortssuchen (heute)"],
"Stockage": ["Storage", "Almacenamiento", "Archiviazione", "Speicher"],
"Coffre à billets (chiffrement)": ["Ticket vault (encryption)", "Caja fuerte de entradas (cifrado)", "Cassaforte dei biglietti (crittografia)", "Ticket-Tresor (Verschlüsselung)"],
"Coffre à billets": ["Ticket vault", "Caja fuerte de entradas", "Cassaforte dei biglietti", "Ticket-Tresor"],
"Activer le coffre à billets": ["Turn on the ticket vault", "Activar la caja fuerte de entradas", "Attiva la cassaforte dei biglietti", "Ticket-Tresor aktivieren"],
"activé": ["on", "activada", "attiva", "aktiv"],
"en pause": ["paused", "en pausa", "in pausa", "pausiert"],
"Protégez vos billets PDF par une phrase secrète. Ils sont chiffrés sur votre téléphone avant l’envoi : personne d’autre, pas même le service, ne peut les lire. La lecture automatique du billet par l’IA est alors désactivée.": ["Protect your PDF tickets with a passphrase. They are encrypted on your phone before upload: nobody else, not even the service, can read them. Automatic ticket reading by AI is then turned off.", "Protege tus entradas PDF con una frase secreta. Se cifran en tu teléfono antes de enviarse: nadie más, ni siquiera el servicio, puede leerlas. La lectura automática de la entrada por IA se desactiva.", "Proteggi i tuoi biglietti PDF con una frase segreta. Vengono crittografati sul tuo telefono prima dell’invio: nessun altro, nemmeno il servizio, può leggerli. La lettura automatica del biglietto tramite IA viene disattivata.", "Schütze deine PDF-Tickets mit einer geheimen Passphrase. Sie werden vor dem Hochladen auf deinem Handy verschlüsselt: Niemand sonst, nicht einmal der Dienst, kann sie lesen. Das automatische Auslesen per KI ist dann deaktiviert."],
"Entrez votre phrase secrète pour ouvrir ce billet.": ["Enter your passphrase to open this ticket.", "Introduce tu frase secreta para abrir esta entrada.", "Inserisci la tua frase segreta per aprire questo biglietto.", "Gib deine geheime Passphrase ein, um dieses Ticket zu öffnen."],
"Phrase secrète (8 caractères minimum)": ["Passphrase (8 characters minimum)", "Frase secreta (mínimo 8 caracteres)", "Frase segreta (minimo 8 caratteri)", "Geheime Passphrase (mindestens 8 Zeichen)"],
"Confirmez la phrase secrète": ["Confirm the passphrase", "Confirma la frase secreta", "Conferma la frase segreta", "Passphrase bestätigen"],
"J’ai compris : si j’oublie cette phrase secrète, mes billets chiffrés seront définitivement illisibles.": ["I understand: if I forget this passphrase, my encrypted tickets will be permanently unreadable.", "Entiendo: si olvido esta frase secreta, mis entradas cifradas serán ilegibles para siempre.", "Ho capito: se dimentico questa frase segreta, i miei biglietti crittografati saranno illeggibili per sempre.", "Ich habe verstanden: Wenn ich diese Passphrase vergesse, sind meine verschlüsselten Tickets für immer unlesbar."],
"Activer le coffre": ["Turn on the vault", "Activar la caja fuerte", "Attiva la cassaforte", "Tresor aktivieren"],
"Déverrouiller": ["Unlock", "Desbloquear", "Sblocca", "Entsperren"],
"La phrase secrète doit faire au moins 8 caractères.": ["The passphrase must be at least 8 characters.", "La frase secreta debe tener al menos 8 caracteres.", "La frase segreta deve avere almeno 8 caratteri.", "Die Passphrase muss mindestens 8 Zeichen lang sein."],
"Les deux phrases secrètes ne correspondent pas.": ["The two passphrases don’t match.", "Las dos frases secretas no coinciden.", "Le due frasi segrete non corrispondono.", "Die beiden Passphrasen stimmen nicht überein."],
"Cochez la case pour confirmer.": ["Tick the box to confirm.", "Marca la casilla para confirmar.", "Spunta la casella per confermare.", "Setze zur Bestätigung das Häkchen."],
"Vérification…": ["Checking…", "Comprobando…", "Verifica…", "Prüfung…"],
"Protéger ce billet par sa propre phrase secrète": ["Protect this ticket with its own passphrase", "Proteger esta entrada con su propia frase secreta", "Proteggi questo biglietto con una frase segreta propria", "Dieses Ticket mit eigener Passphrase schützen"],
"Une phrase secrète réservée à ce billet, demandée à chaque ouverture. Le PDF est chiffré sur votre téléphone et n’est pas lu par l’IA.": ["A passphrase just for this ticket, asked each time it is opened. The PDF is encrypted on your phone and is not read by the AI.", "Una frase secreta solo para esta entrada, que se pide cada vez que se abre. El PDF se cifra en tu teléfono y la IA no lo lee.", "Una frase segreta riservata a questo biglietto, richiesta a ogni apertura. Il PDF è cifrato sul telefono e non viene letto dall’IA.", "Eine Passphrase nur für dieses Ticket, die bei jedem Öffnen abgefragt wird. Das PDF wird auf deinem Handy verschlüsselt und nicht von der KI gelesen."],
"Phrase secrète du billet": ["Ticket passphrase", "Frase secreta de la entrada", "Frase segreta del biglietto", "Passphrase des Tickets"],
"Choisissez une phrase secrète réservée à ce billet, distincte de celle du coffre. Elle sera demandée à chaque ouverture du billet.": ["Choose a passphrase just for this ticket, different from your vault’s. It will be asked each time the ticket is opened.", "Elige una frase secreta solo para esta entrada, distinta de la de la caja fuerte. Se pedirá cada vez que se abra la entrada.", "Scegli una frase segreta riservata a questo biglietto, diversa da quella della cassaforte. Verrà richiesta a ogni apertura del biglietto.", "Wähle eine Passphrase nur für dieses Ticket, getrennt von der deines Tresors. Sie wird bei jedem Öffnen des Tickets abgefragt."],
"Ce billet a sa propre phrase secrète. Entrez-la pour l’ouvrir.": ["This ticket has its own passphrase. Enter it to open the ticket.", "Esta entrada tiene su propia frase secreta. Introdúcela para abrirla.", "Questo biglietto ha una frase segreta propria. Inseriscila per aprirlo.", "Dieses Ticket hat eine eigene Passphrase. Gib sie ein, um es zu öffnen."],
"J’ai compris : si j’oublie cette phrase secrète, ce billet sera définitivement illisible.": ["I understand: if I forget this passphrase, this ticket will be unreadable forever.", "Entendido: si olvido esta frase secreta, esta entrada quedará ilegible para siempre.", "Ho capito: se dimentico questa frase segreta, questo biglietto sarà illeggibile per sempre.", "Verstanden: Wenn ich diese Passphrase vergesse, ist dieses Ticket für immer unlesbar."],
"Protéger le billet": ["Protect the ticket", "Proteger la entrada", "Proteggi il biglietto", "Ticket schützen"],
"Phrase secrète incorrecte.": ["Wrong passphrase.", "Frase secreta incorrecta.", "Frase segreta errata.", "Falsche Passphrase."],
"Phrase secrète requise pour chiffrer ce billet.": ["Your passphrase is needed to encrypt this ticket.", "Se necesita tu frase secreta para cifrar esta entrada.", "Serve la tua frase segreta per crittografare questo biglietto.", "Zum Verschlüsseln dieses Tickets wird deine Passphrase benötigt."],
"Phrase secrète requise.": ["Passphrase required.", "Frase secreta necesaria.", "Frase segreta richiesta.", "Passphrase erforderlich."],
"Coffre déverrouillé pour cette session.": ["Vault unlocked for this session.", "Caja fuerte desbloqueada para esta sesión.", "Cassaforte sbloccata per questa sessione.", "Tresor für diese Sitzung entsperrt."],
"Coffre verrouillé.": ["Vault locked.", "Caja fuerte bloqueada.", "Cassaforte bloccata.", "Tresor gesperrt."],
"Verrouiller maintenant": ["Lock now", "Bloquear ahora", "Blocca ora", "Jetzt sperren"],
"Chiffrer mes nouveaux billets": ["Encrypt my new tickets", "Cifrar mis entradas nuevas", "Crittografa i miei nuovi biglietti", "Meine neuen Tickets verschlüsseln"],
"Les billets déjà chiffrés restent chiffrés : gardez votre phrase secrète, elle ne peut pas être récupérée.": ["Tickets that are already encrypted stay encrypted: keep your passphrase, it cannot be recovered.", "Las entradas ya cifradas siguen cifradas: guarda tu frase secreta, no se puede recuperar.", "I biglietti già crittografati restano crittografati: conserva la tua frase segreta, non può essere recuperata.", "Bereits verschlüsselte Tickets bleiben verschlüsselt: Bewahre deine Passphrase auf, sie lässt sich nicht wiederherstellen."],
"Ce PDF sera chiffré avec votre phrase secrète.": ["This PDF will be encrypted with your passphrase.", "Este PDF se cifrará con tu frase secreta.", "Questo PDF verrà crittografato con la tua frase segreta.", "Dieses PDF wird mit deiner Passphrase verschlüsselt."],
"Lecture automatique désactivée : ce billet sera chiffré.": ["Automatic reading is off: this ticket will be encrypted.", "Lectura automática desactivada: esta entrada se cifrará.", "Lettura automatica disattivata: questo biglietto verrà crittografato.", "Automatisches Auslesen ist aus: Dieses Ticket wird verschlüsselt."],
"Lire quand même avec l’IA (le PDF est envoyé en clair à l’analyse)": ["Read with AI anyway (the PDF is sent unencrypted for analysis)", "Leer con la IA de todos modos (el PDF se envía sin cifrar para el análisis)", "Leggi comunque con l’IA (il PDF viene inviato in chiaro per l’analisi)", "Trotzdem mit KI auslesen (das PDF wird unverschlüsselt zur Analyse gesendet)"],
"Billet protégé": ["Protected ticket", "Entrada protegida", "Biglietto protetto", "Geschütztes Ticket"],
"Ce billet est chiffré. Entrez votre phrase secrète pour l’afficher.": ["This ticket is encrypted. Enter your passphrase to show it.", "Esta entrada está cifrada. Introduce tu frase secreta para mostrarla.", "Questo biglietto è crittografato. Inserisci la tua frase segreta per mostrarlo.", "Dieses Ticket ist verschlüsselt. Gib deine Passphrase ein, um es anzuzeigen."],
"Phrase secrète (8+ caractères)": ["Passphrase (8+ characters)", "Frase secreta (8+ caracteres)", "Frase segreta (8+ caratteri)", "Passphrase (8+ Zeichen)"],
"politique de confidentialité": ["privacy policy", "política de privacidad", "informativa sulla privacy", "Datenschutzerklärung"],
"En créant un compte, vous confirmez avoir 15 ans ou plus et avoir lu la {0}.": ["By creating an account, you confirm that you are 15 or older and have read the {0}.", "Al crear una cuenta, confirmas que tienes 15 años o más y que has leído la {0}.", "Creando un account confermi di avere almeno 15 anni e di aver letto l’{0}.", "Mit dem Erstellen eines Kontos bestätigst du, dass du mindestens 15 Jahre alt bist und die {0} gelesen hast."],
"Réservé à l’administrateur": ["Admin only", "Solo para el administrador", "Riservato all’amministratore", "Nur für den Administrator"],
"Admin uniquement": ["Admin only", "Solo admin", "Solo admin", "Nur Admin"],
"De nouveaux concerts sont arrivés !": ["New concerts have arrived!", "¡Han llegado nuevos conciertos!", "Sono arrivati nuovi concerti!", "Neue Konzerte sind da!"],
"{0} concerts ajoutés par vos amis depuis votre dernière visite.": ["{0} concerts added by your friends since your last visit.", "{0} conciertos añadidos por tus amigos desde tu última visita.", "{0} concerti aggiunti dai tuoi amici dalla tua ultima visita.", "{0} Konzerte, die deine Freunde seit deinem letzten Besuch hinzugefügt haben."],
"1 concert ajouté par vos amis depuis votre dernière visite.": ["1 concert added by your friends since your last visit.", "1 concierto añadido por tus amigos desde tu última visita.", "1 concerto aggiunto dai tuoi amici dalla tua ultima visita.", "1 Konzert, das deine Freunde seit deinem letzten Besuch hinzugefügt haben."],
"À propos": ["About", "Acerca de", "Informazioni", "Über"],
"Proposé par :": ["Brought to you by:", "Presentado por:", "Offerto da:", "Präsentiert von:"],
"La recette": ["The recipe", "La receta", "La ricetta", "Das Rezept"],
"Historique": ["History", "Historial", "Cronologia", "Verlauf"],
"Billet DICE (dans l’appli DICE, sans PDF)": ["DICE ticket (in the DICE app, no PDF)", "Entrada DICE (en la app DICE, sin PDF)", "Biglietto DICE (nell’app DICE, senza PDF)", "DICE-Ticket (in der DICE-App, ohne PDF)"],
"Le bouton Billet de la tuile ouvrira l’appli DICE.": ["The tile’s Ticket button will open the DICE app.", "El botón Entrada de la tarjeta abrirá la app DICE.", "Il pulsante Biglietto della scheda aprirà l’app DICE.", "Die Ticket-Schaltfläche der Kachel öffnet die DICE-App."],
"Enregistrement…": ["Saving…", "Guardando…", "Salvataggio…", "Speichern…"],
"({0} sans prix)": ["({0} without a price)", "({0} sin precio)", "({0} senza prezzo)", "({0} ohne Preis)"],
"Ajoutez un PDF pour les billets DICE ({0}).": ["Add a PDF for the DICE tickets ({0}).", "Añade un PDF para las entradas DICE ({0}).", "Aggiungi un PDF per i biglietti DICE ({0}).", "Füge ein PDF für die DICE-Tickets hinzu ({0})."],
"Ajoutez un fichier pour : {0}": ["Add a file for: {0}", "Añade un archivo para: {0}", "Aggiungi un file per: {0}", "Füge eine Datei hinzu für: {0}"],
"Au": ["To", "Hasta", "Al", "Bis"],
"Aucun concert vu sur cette période.": ["No concert attended in this period.", "Ningún concierto asistido en este periodo.", "Nessun concerto visto in questo periodo.", "Kein besuchtes Konzert in diesem Zeitraum."],
"Billet DICE : ajoutez le PDF ou une capture du billet.": ["DICE ticket: add the PDF or a screenshot of the ticket.", "Entrada DICE: añade el PDF o una captura de la entrada.", "Biglietto DICE: aggiungi il PDF o uno screenshot del biglietto.", "DICE-Ticket: Füge das PDF oder einen Screenshot des Tickets hinzu."],
"Billet PDF": ["PDF ticket", "Entrada PDF", "Biglietto PDF", "PDF-Ticket"],
"Billet {0} sur {1}…": ["Ticket {0} of {1}…", "Entrada {0} de {1}…", "Biglietto {0} di {1}…", "Ticket {0} von {1}…"],
"Choisissez une date de début antérieure à la date de fin.": ["Choose a start date before the end date.", "Elige una fecha de inicio anterior a la fecha de fin.", "Scegli una data di inizio precedente alla data di fine.", "Wähle ein Startdatum vor dem Enddatum."],
"Choisissez une période : In The Pit rassemble dans un seul PDF les billets des concerts auxquels vous avez assisté, précédés d’une page récapitulative.": ["Choose a period: In The Pit gathers the tickets of the concerts you attended into a single PDF, starting with a summary page.", "Elige un periodo: In The Pit reúne en un solo PDF las entradas de los conciertos a los que asististe, precedidas de una página de resumen.", "Scegli un periodo: In The Pit raccoglie in un unico PDF i biglietti dei concerti a cui hai assistito, preceduti da una pagina di riepilogo.", "Wähle einen Zeitraum: In The Pit fasst die Tickets der besuchten Konzerte in einem einzigen PDF zusammen, mit einer Übersichtsseite vorweg."],
"Cochez au moins un concert.": ["Tick at least one concert.", "Marca al menos un concierto.", "Seleziona almeno un concerto.", "Wähle mindestens ein Konzert aus."],
"Concerts du {0} au {1}": ["Concerts from {0} to {1}", "Conciertos del {0} al {1}", "Concerti dal {0} al {1}", "Konzerte vom {0} bis {1}"],
"Créer le PDF": ["Create the PDF", "Crear el PDF", "Crea il PDF", "PDF erstellen"],
"Date": ["Date", "Fecha", "Data", "Datum"],
"Du": ["From", "Desde", "Dal", "Von"],
"Enregistrer le PDF": ["Save the PDF", "Guardar el PDF", "Salva il PDF", "PDF speichern"],
"Les prix lus sur les billets ont été enregistrés.": ["The prices read from the tickets have been saved.", "Los precios leídos en las entradas se han guardado.", "I prezzi letti sui biglietti sono stati salvati.", "Die von den Tickets gelesenen Preise wurden gespeichert."],
"PDF enregistré.": ["PDF saved.", "PDF guardado.", "PDF salvato.", "PDF gespeichert."],
"PDF prêt : {0} concerts, {1} pages, total {2}.": ["PDF ready: {0} concerts, {1} pages, total {2}.", "PDF listo: {0} conciertos, {1} páginas, total {2}.", "PDF pronto: {0} concerti, {1} pagine, totale {2}.", "PDF fertig: {0} Konzerte, {1} Seiten, Summe {2}."],
"PDF téléchargé : {0}": ["PDF downloaded: {0}", "PDF descargado: {0}", "PDF scaricato: {0}", "PDF heruntergeladen: {0}"],
"Pages": ["Pages", "Páginas", "Pagine", "Seiten"],
"Partager le PDF": ["Share the PDF", "Compartir el PDF", "Condividi il PDF", "PDF teilen"],
"Pas de billet enregistré.": ["No ticket saved.", "Ninguna entrada guardada.", "Nessun biglietto salvato.", "Kein Ticket gespeichert."],
"Prix": ["Price", "Precio", "Prezzo", "Preis"],
"Préparation…": ["Preparing…", "Preparando…", "Preparazione…", "Vorbereitung…"],
"Rechercher les concerts": ["Find the concerts", "Buscar los conciertos", "Cerca i concerti", "Konzerte suchen"],
"Remboursement Comité d’Entreprise": ["Works council refund", "Reembolso del comité de empresa", "Rimborso CRAL aziendale", "Erstattung Betriebsrat"],
"Remplacement : {0}": ["Replacement: {0}", "Sustitución: {0}", "Sostituzione: {0}", "Ersatz: {0}"],
"Total : {0}": ["Total: {0}", "Total: {0}", "Totale: {0}", "Summe: {0}"],
"chiffré": ["encrypted", "cifrado", "crittografato", "verschlüsselt"],
"lu sur le billet": ["read from the ticket", "leído en la entrada", "letto sul biglietto", "vom Ticket gelesen"],
"remboursement-CE": ["works-council-refund", "reembolso-comite", "rimborso-cral", "erstattung-betriebsrat"],
"{0} billets PDF": ["{0} PDF tickets", "{0} entradas PDF", "{0} biglietti PDF", "{0} PDF-Tickets"],
"{0} concerts — document créé avec In The Pit le {1}": ["{0} concerts — document created with In The Pit on {1}", "{0} conciertos — documento creado con In The Pit el {1}", "{0} concerti — documento creato con In The Pit il {1}", "{0} Konzerte — Dokument erstellt mit In The Pit am {1}"],
"{0} sans billet : ajoutez-en un si besoin.": ["{0} without a ticket: add one if needed.", "{0} sin entrada: añade una si hace falta.", "{0} senza biglietto: aggiungine uno se serve.", "{0} ohne Ticket: füge bei Bedarf eins hinzu."],
"à lire": ["to read", "por leer", "da leggere", "auszulesen"],
"Ajouter un PDF ou une image": ["Add a PDF or an image", "Añadir un PDF o una imagen", "Aggiungi un PDF o un’immagine", "PDF oder Bild hinzufügen"],
"Changer le fichier": ["Change the file", "Cambiar el archivo", "Cambia il file", "Datei ändern"],
"{0} concerts vus sur cette période.": ["{0} concerts attended in this period.", "{0} conciertos asistidos en este periodo.", "{0} concerti visti in questo periodo.", "{0} besuchte Konzerte in diesem Zeitraum."],
"1 concert vu sur cette période.": ["1 concert attended in this period.", "1 concierto asistido en este periodo.", "1 concerto visto in questo periodo.", "1 besuchtes Konzert in diesem Zeitraum."],
"Remplir depuis une page web": ["Fill in from a web page", "Rellenar desde una página web", "Compila da una pagina web", "Von einer Webseite ausfüllen"],
"Adresse de la page du concert": ["Address of the concert page", "Dirección de la página del concierto", "Indirizzo della pagina del concerto", "Adresse der Konzertseite"],
"Lire la page": ["Read the page", "Leer la página", "Leggi la pagina", "Seite lesen"],
"Adresse invalide.": ["Invalid address.", "Dirección no válida.", "Indirizzo non valido.", "Ungültige Adresse."],
"Lecture de la page…": ["Reading the page…", "Leyendo la página…", "Lettura della pagina…", "Seite wird gelesen…"],
"La page ne contient pas de texte lisible.": ["The page has no readable text.", "La página no contiene texto legible.", "La pagina non contiene testo leggibile.", "Die Seite enthält keinen lesbaren Text."],
"Cette adresse n’est pas une page web.": ["This address is not a web page.", "Esta dirección no es una página web.", "Questo indirizzo non è una pagina web.", "Diese Adresse ist keine Webseite."],
"Impossible d’ouvrir cette page ({0}).": ["Couldn’t open this page ({0}).", "No se puede abrir esta página ({0}).", "Impossibile aprire questa pagina ({0}).", "Diese Seite lässt sich nicht öffnen ({0})."],
"Aucun concert trouvé sur cette page.": ["No concert found on this page.", "No se encontró ningún concierto en esta página.", "Nessun concerto trovato in questa pagina.", "Auf dieser Seite wurde kein Konzert gefunden."],
"Les champs surlignés ont été lus sur la page. Vérifiez-les avant d’enregistrer.": ["The highlighted fields were read from the page. Check them before saving.", "Los campos resaltados se han leído de la página. Revísalos antes de guardar.", "I campi evidenziati sono stati letti dalla pagina. Controllali prima di salvare.", "Die markierten Felder wurden von der Seite gelesen. Prüfen Sie sie vor dem Speichern."],
"Aussi à l’affiche : {0}": ["Also on the bill: {0}", "También en el cartel: {0}", "Anche in cartellone: {0}", "Ebenfalls auf dem Programm: {0}"],
"Premières parties : {0}": ["Opening acts: {0}", "Teloneros: {0}", "Gruppi d’apertura: {0}", "Vorbands: {0}"],
"Tarifs : {0}": ["Prices: {0}", "Precios: {0}", "Prezzi: {0}", "Preise: {0}"],
"1 nouveau retour de concert depuis votre dernière visite.": ["1 new concert story since your last visit.", "1 nuevo relato de concierto desde tu última visita.", "1 nuovo racconto di concerto dalla tua ultima visita.", "1 neuer Konzertbericht seit deinem letzten Besuch."],
"{0} nouveaux retours de concert depuis votre dernière visite.": ["{0} new concert stories since your last visit.", "{0} nuevos relatos de conciertos desde tu última visita.", "{0} nuovi racconti di concerti dalla tua ultima visita.", "{0} neue Konzertberichte seit deinem letzten Besuch."],
"1 photo": ["1 photo", "1 foto", "1 foto", "1 Foto"],
"{0} photos": ["{0} photos", "{0} fotos", "{0} foto", "{0} Fotos"],
"1 vidéo": ["1 video", "1 vídeo", "1 video", "1 Video"],
"{0} vidéos": ["{0} videos", "{0} vídeos", "{0} video", "{0} Videos"],
"Ajouter des photos ou des vidéos": ["Add photos or videos", "Añadir fotos o vídeos", "Aggiungi foto o video", "Fotos oder Videos hinzufügen"],
"Ce retour n’est plus disponible.": ["This story is no longer available.", "Este relato ya no está disponible.", "Questo racconto non è più disponibile.", "Dieser Bericht ist nicht mehr verfügbar."],
"Cette vidéo dépasse 100 Mo et ce téléphone ne sait pas la compresser.": ["This video is over 100 MB and this phone can’t compress it.", "Este vídeo supera los 100 MB y este teléfono no puede comprimirlo.", "Questo video supera i 100 MB e questo telefono non riesce a comprimerlo.", "Dieses Video ist größer als 100 MB und dieses Handy kann es nicht komprimieren."],
"Chargement… {0} %": ["Loading… {0}%", "Cargando… {0} %", "Caricamento… {0}%", "Wird geladen … {0} %"],
"Comment était la soirée ? L’ambiance, les morceaux, la salle…": ["How was the night? The atmosphere, the songs, the venue…", "¿Qué tal la noche? El ambiente, las canciones, la sala…", "Com’è stata la serata? L’atmosfera, i brani, il locale…", "Wie war der Abend? Die Stimmung, die Songs, die Halle …"],
"Enregistrer les modifications": ["Save changes", "Guardar los cambios", "Salva le modifiche", "Änderungen speichern"],
"Jusqu’à 20 photos ou vidéos. Les vidéos sont compressées sur votre téléphone (100 Mo au plus, 10 minutes au plus) : gardez l’appli ouverte pendant la préparation.": ["Up to 20 photos or videos. Videos are compressed on your phone (100 MB and 10 minutes at most): keep the app open while they are prepared.", "Hasta 20 fotos o vídeos. Los vídeos se comprimen en tu teléfono (100 MB y 10 minutos como máximo): mantén la app abierta mientras se preparan.", "Fino a 20 foto o video. I video vengono compressi sul telefono (al massimo 100 MB e 10 minuti): tieni l’app aperta durante la preparazione.", "Bis zu 20 Fotos oder Videos. Videos werden auf deinem Handy komprimiert (höchstens 100 MB und 10 Minuten): Lass die App während der Vorbereitung geöffnet."],
"Le retour de {0}": ["{0}’s story", "El relato de {0}", "Il racconto di {0}", "Bericht von {0}"],
"Lire la vidéo ({0} Mo)": ["Play the video ({0} MB)", "Ver el vídeo ({0} MB)", "Guarda il video ({0} MB)", "Video abspielen ({0} MB)"],
"Modifications enregistrées.": ["Changes saved.", "Cambios guardados.", "Modifiche salvate.", "Änderungen gespeichert."],
"Modifier mon retour": ["Edit my story", "Editar mi relato", "Modifica il mio racconto", "Meinen Bericht bearbeiten"],
"Mon retour de concert": ["My concert story", "Mi relato del concierto", "Il mio racconto del concerto", "Mein Konzertbericht"],
"Photos et vidéos": ["Photos and videos", "Fotos y vídeos", "Foto e video", "Fotos und Videos"],
"Publication…": ["Publishing…", "Publicando…", "Pubblicazione…", "Wird veröffentlicht …"],
"Publier pour mes amis": ["Share with my friends", "Compartir con mis amigos", "Condividi con i miei amici", "Mit meinen Freunden teilen"],
"Retour de concert": ["Concert story", "Relato del concierto", "Racconto del concerto", "Konzertbericht"],
"Retour publié : vos amis sont prévenus.": ["Story shared: your friends have been notified.", "Relato compartido: tus amigos han sido avisados.", "Racconto condiviso: i tuoi amici sono stati avvisati.", "Bericht geteilt: Deine Freunde wurden benachrichtigt."],
"Retour publié.": ["Story shared.", "Relato compartido.", "Racconto condiviso.", "Bericht geteilt."],
"Suppression…": ["Deleting…", "Eliminando…", "Eliminazione…", "Wird gelöscht …"],
"Supprimer ce retour": ["Delete this story", "Eliminar este relato", "Elimina questo racconto", "Diesen Bericht löschen"],
"Supprimer ce retour, ses photos et ses vidéos ?": ["Delete this story with its photos and videos?", "¿Eliminar este relato con sus fotos y vídeos?", "Eliminare questo racconto con le sue foto e i suoi video?", "Diesen Bericht mit seinen Fotos und Videos löschen?"],
"Vidéo illisible : {0}": ["Unreadable video: {0}", "Vídeo ilegible: {0}", "Video illeggibile: {0}", "Video nicht lesbar: {0}"],
"Vidéo trop longue : {0} minutes au plus.": ["Video too long: {0} minutes at most.", "Vídeo demasiado largo: {0} minutos como máximo.", "Video troppo lungo: al massimo {0} minuti.", "Video zu lang: höchstens {0} Minuten."],
"Vidéo trop lourde : plus de 100 Mo après compression.": ["Video too large: over 100 MB after compression.", "Vídeo demasiado pesado: más de 100 MB tras la compresión.", "Video troppo pesante: oltre 100 MB dopo la compressione.", "Video zu groß: über 100 MB nach der Komprimierung."],
"Visible par les {0} amis avec qui vous partagez votre liste.": ["Visible to the {0} friends you share your list with.", "Visible para los {0} amigos con los que compartes tu lista.", "Visibile ai {0} amici con cui condividi la tua lista.", "Sichtbar für die {0} Freunde, mit denen du deine Liste teilst."],
"Visible par l’ami avec qui vous partagez votre liste.": ["Visible to the friend you share your list with.", "Visible para el amigo con el que compartes tu lista.", "Visibile all’amico con cui condividi la tua lista.", "Sichtbar für den Freund, mit dem du deine Liste teilst."],
"Vos amis racontent leurs concerts": ["Your friends tell their concerts", "Tus amigos cuentan sus conciertos", "I tuoi amici raccontano i loro concerti", "Deine Freunde erzählen von ihren Konzerten"],
"Votre récit": ["Your story", "Tu relato", "Il tuo racconto", "Dein Bericht"],
"Vous ne partagez votre liste avec personne : invitez des amis dans Options pour qu’ils voient vos retours.": ["You don’t share your list with anyone: invite friends in Options so they can see your stories.", "No compartes tu lista con nadie: invita a amigos en Opciones para que vean tus relatos.", "Non condividi la tua lista con nessuno: invita degli amici in Opzioni perché vedano i tuoi racconti.", "Du teilst deine Liste mit niemandem: Lade in den Optionen Freunde ein, damit sie deine Berichte sehen."],
"compression de la vidéo… {0} %": ["compressing the video… {0}%", "comprimiendo el vídeo… {0} %", "compressione del video… {0}%", "Video wird komprimiert … {0} %"],
"envoi…": ["uploading…", "enviando…", "invio…", "wird hochgeladen …"],
"envoi… partie {0} sur {1}": ["uploading… part {0} of {1}", "enviando… parte {0} de {1}", "invio… parte {0} di {1}", "wird hochgeladen … Teil {0} von {1}"],
"envoi… {0} Mo": ["uploading… {0} MB", "enviando… {0} MB", "invio… {0} MB", "wird hochgeladen … {0} MB"],
"préparation de la vidéo… gardez l’appli ouverte.": ["preparing the video… keep the app open.", "preparando el vídeo… mantén la app abierta.", "preparazione del video… tieni l’app aperta.", "Video wird vorbereitet … lass die App geöffnet."],
"préparation…": ["preparing…", "preparando…", "preparazione…", "wird vorbereitet …"],
"un ami": ["a friend", "un amigo", "un amico", "ein Freund"],
"{0} photos ou vidéos au plus par retour.": ["{0} photos or videos at most per story.", "{0} fotos o vídeos como máximo por relato.", "Al massimo {0} foto o video per racconto.", "Höchstens {0} Fotos oder Videos pro Bericht."],
"Écrivez quelques mots ou ajoutez une photo.": ["Write a few words or add a photo.", "Escribe unas palabras o añade una foto.", "Scrivi qualche parola o aggiungi una foto.", "Schreib ein paar Worte oder füge ein Foto hinzu."],
"Élément {0} sur {1} : {2}": ["Item {0} of {1}: {2}", "Elemento {0} de {1}: {2}", "Elemento {0} di {1}: {2}", "Element {0} von {1}: {2}"],
"Menu": ["Menu", "Menú", "Menu", "Menü"],
"Connectez-vous pour gérer vos propres concerts, vos billets et vos amis.": ["Sign in to manage your own concerts, tickets and friends.", "Inicia sesión para gestionar tus conciertos, tus entradas y tus amigos.", "Accedi per gestire i tuoi concerti, i tuoi biglietti e i tuoi amici.", "Melde dich an, um deine Konzerte, Tickets und Freunde zu verwalten."],
"Réinitialiser": ["Reset", "Restablecer", "Reimposta", "Zurücksetzen"],
"Le site d’In The Pit": ["The In The Pit website", "La web de In The Pit", "Il sito di In The Pit", "Die Website von In The Pit"],
"Retour": ["Back", "Volver", "Indietro", "Zurück"],
"Remplir automatiquement": ["Fill in automatically", "Rellenar automáticamente", "Compila automaticamente", "Automatisch ausfüllen"],
"Coller un lien": ["Paste a link", "Pegar un enlace", "Incolla un link", "Link einfügen"],
"Lire un billet PDF": ["Read a PDF ticket", "Leer una entrada PDF", "Leggi un biglietto PDF", "PDF-Ticket lesen"],
"Première partie": ["Opening act", "Telonero", "Gruppo d’apertura", "Vorband"],
"+ Ajouter un artiste à cette soirée": ["+ Add an artist to this night", "+ Añadir un artista a esta noche", "+ Aggiungi un artista a questa serata", "+ Weiteren Act zu diesem Abend hinzufügen"],
"Ce soir": ["Tonight", "Esta noche", "Stasera", "Heute Abend"],
"Demain": ["Tomorrow", "Mañana", "Domani", "Morgen"],
"Samedi": ["Saturday", "Sábado", "Sabato", "Samstag"],
"Ma présence": ["Am I going?", "¿Voy?", "Ci vado?", "Bin ich dabei?"],
"Mon billet": ["My ticket", "Mi entrada", "Il mio biglietto", "Mein Ticket"],
"Pas encore": ["Not yet", "Todavía no", "Non ancora", "Noch nicht"],
"Acheté": ["Bought", "Comprada", "Acquistato", "Gekauft"],
"Gratuit": ["Free", "Gratis", "Gratuito", "Kostenlos"],
"Prix libre": ["Pay what you want", "Precio libre", "Offerta libera", "Preis nach Wahl"],
"Sans résa": ["No booking", "Sin reserva", "Senza prenotazione", "Ohne Reservierung"],
"Aucun": ["None", "Ninguna", "Nessuno", "Keins"],
"Tournée ou festival": ["Tour or festival", "Gira o festival", "Tour o festival", "Tour oder Festival"],
"Avec qui": ["With whom", "Con quién", "Con chi", "Mit wem"],
"Type d’entrée": ["Entry type", "Tipo de entrada", "Tipo di voce", "Art des Eintrags"],
"Je ne sais plus": ["I don’t remember", "No me acuerdo", "Non ricordo", "Weiß ich nicht mehr"],
"J’y vais": ["I’m going", "Voy", "Ci vado", "Ich gehe hin"],
"J’y étais": ["I was there", "Estuve", "C’ero", "Ich war da"],
"Je n’y étais pas": ["I wasn’t there", "No estuve", "Non c’ero", "Ich war nicht da"],
"Je n’irai pas": ["I won’t go", "No iré", "Non ci andrò", "Ich gehe nicht hin"],
"Ajouter les {0} concerts": ["Add the {0} concerts", "Añadir los {0} conciertos", "Aggiungi i {0} concerti", "Die {0} Konzerte hinzufügen"],
"Autre artiste": ["Another artist", "Otro artista", "Altro artista", "Weiterer Act"],
"Administration": ["Administration", "Administración", "Amministrazione", "Administration"],
"Mode invité": ["Guest mode","Modo invitado","Modalità ospite","Gastmodus"],
"Lire la vidéo": ["Play the video", "Ver el vídeo", "Guarda il video", "Video abspielen"],
"Vidéo indisponible.": ["Video unavailable.", "Vídeo no disponible.", "Video non disponibile.", "Video nicht verfügbar."],
"Vidéo": ["Video", "Vídeo", "Video", "Video"],
"Supprimer mon compte": ["Delete my account", "Eliminar mi cuenta", "Elimina il mio account", "Mein Konto löschen"],
"Cette action est définitive. Tous vos concerts, abonnements, billets PDF, photos, réglages et partages seront effacés, ainsi que votre compte. Pensez à exporter vos données avant.": ["This cannot be undone. All your concerts, memberships, PDF tickets, photos, settings and shares will be erased, along with your account. Remember to export your data first.", "Esta acción es definitiva. Se borrarán todos tus conciertos, abonos, entradas en PDF, fotos, ajustes y comparticiones, así como tu cuenta. Recuerda exportar tus datos antes.", "Questa azione è definitiva. Tutti i tuoi concerti, abbonamenti, biglietti PDF, foto, impostazioni e condivisioni verranno cancellati, insieme al tuo account. Ricorda di esportare prima i tuoi dati.", "Diese Aktion ist endgültig. Alle deine Konzerte, Abos, PDF-Tickets, Fotos, Einstellungen und Freigaben werden gelöscht, ebenso dein Konto. Exportiere vorher deine Daten."],
"Saisissez votre adresse e-mail pour confirmer": ["Enter your email address to confirm", "Escribe tu correo electrónico para confirmar", "Inserisci il tuo indirizzo e-mail per confermare", "Gib zur Bestätigung deine E-Mail-Adresse ein"],
"Supprimer définitivement mon compte": ["Permanently delete my account", "Eliminar mi cuenta definitivamente", "Elimina definitivamente il mio account", "Mein Konto endgültig löschen"],
"Préparation de l’export…": ["Preparing the export…", "Preparando la exportación…", "Preparazione dell’esportazione…", "Export wird vorbereitet …"],
"Export téléchargé.": ["Export downloaded.", "Exportación descargada.", "Esportazione scaricata.", "Export heruntergeladen."],
"L’adresse saisie ne correspond pas à votre compte.": ["The address you entered does not match your account.", "La dirección introducida no coincide con tu cuenta.", "L’indirizzo inserito non corrisponde al tuo account.", "Die eingegebene Adresse passt nicht zu deinem Konto."],
"Supprimer définitivement votre compte et toutes vos données ?": ["Permanently delete your account and all your data?", "¿Eliminar definitivamente tu cuenta y todos tus datos?", "Eliminare definitivamente il tuo account e tutti i tuoi dati?", "Dein Konto und alle deine Daten endgültig löschen?"],
"Suppression en cours…": ["Deleting…", "Eliminando…", "Eliminazione in corso…", "Wird gelöscht …"],
"Le compte administrateur ne peut pas être supprimé ici.": ["The administrator account cannot be deleted here.", "La cuenta de administrador no se puede eliminar aquí.", "L’account amministratore non può essere eliminato da qui.", "Das Administratorkonto kann hier nicht gelöscht werden."],
"Votre compte et vos données ont été supprimés.": ["Your account and data have been deleted.", "Tu cuenta y tus datos han sido eliminados.", "Il tuo account e i tuoi dati sono stati eliminati.", "Dein Konto und deine Daten wurden gelöscht."],
"Nouveau": [
"New",
"Nuevo",
"Nuovo",
"Neu"
],
"Touchez un concert pour l’importer dans votre liste.": [
"Tap a concert to import it into your list.",
"Toca un concierto para importarlo a tu lista.",
"Tocca un concerto per importarlo nella tua lista.",
"Tippe auf ein Konzert, um es in deine Liste zu importieren."
],
"Importer dans ma liste": [
"Import into my list",
"Importar a mi lista",
"Importa nella mia lista",
"In meine Liste importieren"
],
"Importer": [
"Import",
"Importar",
"Importa",
"Importieren"
],
"Voir mes concerts": [
"View my concerts",
"Ver mis conciertos",
"Vedi i miei concerti",
"Meine Konzerte ansehen"
],
"telonero": [
"opening act",
"telonero",
"gruppo di supporto",
"Vorgruppe"
],
"déjà dans votre liste": [
"already in your list",
"ya está en tu lista",
"già nella tua lista",
"schon in deiner Liste"
],
"Cochez au moins un artiste.": [
"Select at least one artist.",
"Selecciona al menos un artista.",
"Seleziona almeno un artista.",
"Wähle mindestens einen Künstler aus."
],
"Concert ajouté à votre liste.": [
"Concert added to your list.",
"Concierto añadido a tu lista.",
"Concerto aggiunto alla tua lista.",
"Konzert zu deiner Liste hinzugefügt."
],
"{0} concerts ajoutés à votre liste.": [
"{0} concerts added to your list.",
"{0} conciertos añadidos a tu lista.",
"{0} concerti aggiunti alla tua lista.",
"{0} Konzerte zu deiner Liste hinzugefügt."
]
};
function tt(k){const a=[].slice.call(arguments,1);let s=k;if(LANG!=='fr'){const d=DICT[k];if(d)s=d[{en:0,es:1,it:2,de:3}[LANG]]}return s.replace(/\{(\d+)\}/g,(m,i)=>a[i]===undefined?m:a[i])}
function applyStatic(){
  const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),L=[];let n;while(n=w.nextNode())L.push(n);
  L.forEach(n=>{
    const p=n.parentNode;if(!p||/^(SCRIPT|STYLE)$/.test(p.nodeName))return;
    if(!n.__fr){const m=n.nodeValue.match(/^(\s*)([\s\S]*?)(\s*)$/);if(!m[2]||!DICT[m[2]])return;n.__fr={pre:m[1],k:m[2],suf:m[3]}}
    n.nodeValue=n.__fr.pre+tt(n.__fr.k)+n.__fr.suf;
  });
  document.querySelectorAll('[placeholder],[aria-label],[title]').forEach(el=>{
    ['placeholder','aria-label','title'].forEach(a=>{
      if(!el.hasAttribute(a))return;
      el.__fa=el.__fa||{};
      if(el.__fa[a]===undefined){const v=el.getAttribute(a);if(!DICT[v])return;el.__fa[a]=v}
      el.setAttribute(a,tt(el.__fa[a]));
    });
  });
}
