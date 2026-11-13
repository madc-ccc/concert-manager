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
"Connectez-vous pour accéder à vos concerts.": [
"Sign in to access your concerts.",
"Inicia sesión para acceder a tus conciertos.",
"Accedi per vedere i tuoi concerti.",
"Melde dich an, um auf deine Konzerte zuzugreifen."
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
"Envoyer un test": [
"Send a test",
"Enviar una prueba",
"Invia un test",
"Test senden"
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
"Envoi du test…": [
"Sending the test…",
"Enviando la prueba…",
"Invio del test…",
"Test wird gesendet …"
],
"Test envoyé : la notification doit arriver dans quelques secondes.": [
"Test sent: the notification should arrive within a few seconds.",
"Prueba enviada: la notificación debería llegar en unos segundos.",
"Test inviato: la notifica dovrebbe arrivare tra pochi secondi.",
"Test gesendet: Die Benachrichtigung sollte in wenigen Sekunden ankommen."
],
"Échec du test ({0}). Désactivez puis réactivez les notifications.": [
"Test failed ({0}). Disable then re-enable notifications.",
"La prueba falló ({0}). Desactiva y vuelve a activar las notificaciones.",
"Test non riuscito ({0}). Disattiva e riattiva le notifiche.",
"Test fehlgeschlagen ({0}). Deaktiviere die Benachrichtigungen und aktiviere sie erneut."
],
"aucun appareil enregistré": [
"no registered device",
"ningún dispositivo registrado",
"nessun dispositivo registrato",
"kein Gerät registriert"
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
"Nouveau ici ? Cliquez sur « Créer un compte ». Compte déjà créé pour vous ? Cliquez sur « Mot de passe oublié ? » pour définir votre mot de passe pour la toute première fois.": [
"New here? Click “Create an account”. Account already created for you? Click “Forgot your password?” to set your password for the very first time.",
"¿Eres nuevo? Haz clic en «Crear una cuenta». ¿Ya te crearon una cuenta? Haz clic en «¿Olvidaste tu contraseña?» para definir tu contraseña por primera vez.",
"Sei nuovo? Clicca su «Crea un account». Account già creato per te? Clicca su «Password dimenticata?» per impostare la password per la primissima volta.",
"Neu hier? Klicke auf „Konto erstellen“. Dein Konto wurde schon für dich angelegt? Klicke auf „Passwort vergessen?“, um dein Passwort zum allerersten Mal festzulegen."
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
  document.querySelectorAll('[placeholder],[aria-label]').forEach(el=>{
    ['placeholder','aria-label'].forEach(a=>{
      if(!el.hasAttribute(a))return;
      el.__fa=el.__fa||{};
      if(el.__fa[a]===undefined){const v=el.getAttribute(a);if(!DICT[v])return;el.__fa[a]=v}
      el.setAttribute(a,tt(el.__fa[a]));
    });
  });
}
