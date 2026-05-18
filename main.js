document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const menuPanel = document.getElementById('menuPanel');

    // Toggle menu
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        menuBtn.classList.toggle('active');
        menuPanel.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuPanel.contains(e.target) && menuPanel.classList.contains('active')) {
            menuBtn.classList.remove('active');
            menuPanel.classList.remove('active');
        }
    });

    // Destination Data with detailed events and placeholder videos
    const destinationsData = {
        albania: {
            title: "Saranda & Ksamil",
            image: "assets/albania.jfif",
            daylife: `<div class="daylife-events-list">
                <!-- Option 1 -->
                <div class="daylife-event-item">
                    <div class="event-header-row">
                        <div class="event-icon-dot"><i class="fa-solid fa-compass"></i></div>
                        <div class="event-details">
                            <span class="event-tag">Riviera Explorer</span>
                            <h4>Gemme Nascoste</h4>
                        </div>
                    </div>
                    <p class="event-description">Esplora le insenature segrete e la natura incontaminata della Riviera Albanese con escursioni esclusive curate per te.</p>
                    <div class="wide-video-preview" data-video-src="assets/albania_day_gemme.mp4" data-title="Gemme Nascoste" data-desc="Esplora le gemme nascoste della Riviera Albanese con le nostre escursioni giornaliere curate nei minimi dettagli." data-badge="Riviera Explorer">
                        <i class="fa-solid fa-circle-play"></i>
                        <span>Guarda il Video dell'escursione</span>
                    </div>
                </div>
                
                <!-- Option 2 -->
                <div class="daylife-event-item">
                    <div class="event-header-row">
                        <div class="event-icon-dot"><i class="fa-solid fa-umbrella-beach"></i></div>
                        <div class="event-details">
                            <span class="event-tag">VIP Vibe</span>
                            <h4>Beach Party Esclusivo</h4>
                        </div>
                    </div>
                    <p class="event-description">Accedi ai club sulla spiaggia più ricercati di Ksamil, tra lettini VIP riservati e drink firmati a bordo mare.</p>
                    <div class="wide-video-preview" data-video-src="assets/albania_day_beach.mp4" data-title="Beach Party Esclusivo" data-desc="Balla sotto il sole e rilassati sui lettini VIP del beach club più esclusivo della Riviera." data-badge="VIP Vibe">
                        <i class="fa-solid fa-circle-play"></i>
                        <span>Guarda il Video del Beach Party</span>
                    </div>
                </div>

                <!-- Option 3 -->
                <div class="daylife-event-item">
                    <div class="event-header-row">
                        <div class="event-icon-dot"><i class="fa-solid fa-ship"></i></div>
                        <div class="event-details">
                            <span class="event-tag">Sunset Club</span>
                            <h4>Epic Boat Party</h4>
                        </div>
                    </div>
                    <p class="event-description">Sali a bordo per un party in barca privato ed elettrizzante al tramonto, cullato da onde di cristallo e dj-set d'élite.</p>
                    <div class="wide-video-preview" data-video-src="assets/albania_day_boat.mp4" data-title="Epic Boat Party" data-desc="Vivi l'adrenalina di un party in barca privato navigando le acque turchesi del mar Ionio." data-badge="Sunset Club">
                        <i class="fa-solid fa-circle-play"></i>
                        <span>Guarda il Video del Boat Party</span>
                    </div>
                </div>
            </div>`,
            nightlife: "Vivi l'energia vibrante del distretto Blloku a Tirana o goditi un beach party esclusivo sotto le stelle a Saranda.",
            apartments: "Dai moderni attici nel cuore di Tirana alle lussuose ville fronte mare lungo la costa ionica.",
            daylifeEventTitle: "Islands Private Yacht Cruise",
            daylifeEventDesc: "Un'escursione in barca privata tra le isole incontaminate di Ksamil. Tuffati nelle acque turchesi e scopri spiagge segrete raggiungibili solo via mare, con pranzo gourmet di pesce fresco e bollicine a bordo.",
            daylifeVideo: "assets/albania_day.mp4",
            nightlifeEventTitle: "Sunset Beach Festival",
            nightlifeEventDesc: "Balla sotto le stelle nel beach club più rinomato di Saranda. Dj set internazionali, scenografie neon spettacolari, cocktail artigianali e un'atmosfera esclusiva sulla sabbia fino all'alba.",
            nightlifeVideo: "assets/albania_night.mp4",
            apartmentsEventTitle: "Luxury Seafront Penthouse",
            apartmentsEventDesc: "Soggiorna in un attico di design a Ksamil con piscina a sfioro riscaldata sul terrazzo privato. Vista panoramica a 180 gradi sulle isole e tramonti mozzafiato ogni sera.",
            apartmentsVideo: "assets/albania_apartments.mp4"
        },
        malta: {
            title: "Malta",
            image: "assets/malta.jfif",
            daylife: "Passeggia tra le storiche vie di Valletta, tuffati nel blu della Laguna Blu di Comino e respira il fascino senza tempo di Mdina.",
            nightlife: "Scatena il divertimento a Paceville, goditi i club open-air del Gianpula Village e cene raffinate a St. Julian's.",
            apartments: "Eleganti residenze storiche a Valletta e moderni appartamenti di lusso a Sliema con vista mozzafiato sul porto.",
            daylifeEventTitle: "Blue Lagoon Luxury Catamaran",
            daylifeEventDesc: "Esplora la celebre Laguna Blu di Comino su un catamarano privato di lusso di 18 metri. Nuota tra grotte marine nascoste ed evita la folla con un itinerario speciale e aperitivo al tramonto.",
            daylifeVideo: "assets/malta_day.mp4",
            nightlifeEventTitle: "Gianpula Open-Air VIP Experience",
            nightlifeEventDesc: "Vivi la notte nel leggendario parco dei club open-air di Malta. Tavolo VIP riservato nel privè superiore, spettacoli laser ed eccezionali DJ internazionali sotto il cielo stellato.",
            nightlifeVideo: "assets/malta_night.mp4",
            apartmentsEventTitle: "Valletta Seafront Heritage Duplex",
            apartmentsEventDesc: "Una magnifica residenza nobiliare del 16° secolo completamente ristrutturata con interni moderni e un balcone tradizionale maltese sporgente sul mare, affacciato sul Porto Grande.",
            apartmentsVideo: "assets/malta_apartments.mp4"
        },
        barcellona: {
            title: "Barcellona",
            image: "assets/barcellona.jfif",
            daylife: "Perditi nel Barrio Gótico, lasciati incantare dalla Sagrada Família e gusta le migliori tapas al mercato della Boqueria.",
            nightlife: "Vivi una movida senza fine, dai beach club della Barceloneta ai cocktail bar ricercati del quartiere El Born.",
            apartments: "Attici modernisti nell'Eixample ed eleganti loft di design con vista sul Mediterraneo.",
            daylifeEventTitle: "Gothic Rooftop Tour & Tapas",
            daylifeEventDesc: "Un tour privato tra i palazzi storici e le guglie del Barrio Gótico guidato da uno storico dell'arte locale, culminante in una degustazione privata di tapas stellate su una terrazza panoramica esclusiva.",
            daylifeVideo: "assets/barcellona_day.mp4",
            nightlifeEventTitle: "Barceloneta VIP Seafront Clubbing",
            nightlifeEventDesc: "Ingresso prioritario salta-fila e tavolo VIP riservato fronte mare all'Opium o al Carpe Diem. Goditi la migliore musica internazionale a pochi metri dalla spiaggia sorseggiando cocktail premium.",
            nightlifeVideo: "assets/barcellona_night.mp4",
            apartmentsEventTitle: "Modernist Eixample Loft with Garden",
            apartmentsEventDesc: "Spettacolare loft di lusso con soffitti decorati a volta catalana ed enormi vetrate in stile Gaudí nel quartiere dell'Eixample, completo di una splendida vasca da bagno di marmo e giardino d'inverno privato.",
            apartmentsVideo: "assets/barcellona_apartments.mp4"
        },
        ibiza: {
            title: "Ibiza",
            image: "assets/ibiza.jfif",
            daylife: "Scopri calette spettacolari come Cala Comte, curiosa tra i mercatini hippy e goditi i tramonti più iconici del Mediterraneo.",
            nightlife: "La capitale mondiale del clubbing. Balla con i DJ set più famosi al Pacha, all'Amnesia o all'Ushuaïa per una notte epica.",
            apartments: "Ville ultra-lusso con piscina a sfioro e tipiche finche immerse nella natura incontaminata dell'isola.",
            daylifeEventTitle: "Formentera Luxury Yacht Charter",
            daylifeEventDesc: "Naviga verso le spiagge paradisiache e incontaminate di Formentera a bordo di uno yacht privato di 16 metri. Attrezzatura da snorkeling professionale guidato e pranzo esclusivo direttamente servito a bordo.",
            daylifeVideo: "assets/ibiza_day.mp4",
            nightlifeEventTitle: "Ushuaïa Main-Stage VIP Terrace",
            nightlifeEventDesc: "Il tempio assoluto del clubbing diurno. Assisti allo show dei DJ più famosi al mondo da una terrazza VIP sopraelevata, con vista panoramica straordinaria sul palco, servizio champagne e scenografie spettacolari.",
            nightlifeVideo: "assets/ibiza_night.mp4",
            apartmentsEventTitle: "Es Vedrà Majestic Cliff Villa",
            apartmentsEventDesc: "Una magnifica villa moderna incastonata nella roccia proprio di fronte al celebre e mistico isolotto di Es Vedrà, dotata di piscina a sfioro riscaldata, braciere esterno ed eleganti salotti lounge.",
            apartmentsVideo: "assets/ibiza_apartments.mp4"
        }
    };

    // DOM Elements
    const modal = document.getElementById('destinationModal');
    const closeBtn = document.getElementById('closeModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDaylife = document.getElementById('modalDaylife');
    const modalNightlife = document.getElementById('modalNightlife');
    const modalApartments = document.getElementById('modalApartments');

    // Tab elements inside modal
    const optionCards = document.querySelectorAll('.routine-option-card');
    const modalSections = document.querySelectorAll('.modal-section');

    const switchSection = (targetSectionKey) => {
        optionCards.forEach(c => {
            if (c.getAttribute('data-target') === targetSectionKey) {
                c.classList.add('active');
            } else {
                c.classList.remove('active');
            }
        });

        modalSections.forEach(sec => {
            if (sec.getAttribute('data-section') === targetSectionKey) {
                sec.classList.add('active');
            } else {
                sec.classList.remove('active');
            }
        });
    };

    optionCards.forEach(card => {
        card.addEventListener('click', () => {
            const target = card.getAttribute('data-target');
            switchSection(target);
        });
    });

    // Sub-Modal Elements
    const eventModal = document.getElementById('eventModal');
    const closeEventModalBtn = document.getElementById('closeEventModal');
    const eventVideo = document.getElementById('eventVideo');
    const eventBadge = document.getElementById('eventBadge');
    const eventTitle = document.getElementById('eventTitle');
    const eventDescription = document.getElementById('eventDescription');

    // Keep track of the currently open destination key
    let activeDestKey = null;

    // Open Modal logic
    document.querySelectorAll('.destination-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent jump to top
            const destKey = card.getAttribute('data-destination');
            const data = destinationsData[destKey];

            if (data) {
                activeDestKey = destKey;
                modalImage.src = data.image;
                modalTitle.textContent = data.title;
                modalDaylife.innerHTML = data.daylife;
                modalNightlife.innerHTML = data.nightlife;
                modalApartments.innerHTML = data.apartments;

                // Reset to Giorno on modal open
                switchSection('daylife');

                // Dynamically hide/show main daylife placeholder based on whether mini-displays are present
                const daylifePlaceholder = document.getElementById('daylifePlaceholder');
                if (daylifePlaceholder) {
                    if (data.daylife && data.daylife.includes('video-play-indicator')) {
                        daylifePlaceholder.style.display = 'none';
                    } else {
                        daylifePlaceholder.style.display = 'flex';
                    }
                }

                modal.classList.add('active');
            }
        });
    });

    // Close Modal logic
    const closeModalFunc = () => {
        modal.classList.remove('active');
        activeDestKey = null;
        closeSubModal();
    };

    closeBtn.addEventListener('click', closeModalFunc);

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunc();
        }
    });

    // Sub-Modal logic for clicking placeholders
    const openSubModal = (type) => {
        if (!activeDestKey) return;
        const data = destinationsData[activeDestKey];
        if (!data) return;

        // Set content dynamically
        eventTitle.textContent = data[type + 'EventTitle'] || "Esperienza Esclusiva";
        eventDescription.textContent = data[type + 'EventDesc'] || "Dettagli in arrivo per questa destinazione d'élite.";
        
        // Handle badge styling and text
        eventBadge.className = "event-badge"; // reset classes
        if (type === 'daylife') {
            eventBadge.textContent = "☀️ Giorno";
            eventBadge.classList.add('daylife-badge');
        } else if (type === 'nightlife') {
            eventBadge.textContent = "🌙 Notte";
            eventBadge.classList.add('nightlife-badge');
        } else if (type === 'apartments') {
            eventBadge.textContent = "🏨 Alloggi";
            eventBadge.classList.add('apartments-badge');
        }

        // Set video source (fallback to existing bg-video if specific video isn't loaded yet)
        const videoSrc = data[type + 'Video'];
        const fallbackVideo = "assets/bg-video.mp4"; // Known working video
        
        // To prevent network errors, try loading the video path, fall back gracefully
        eventVideo.src = videoSrc || fallbackVideo;
        eventVideo.load();
        
        // Activate overlay
        eventModal.classList.add('active');

        // Play the video (mobile friendly because it's in a click chain)
        eventVideo.play().catch(err => {
            console.log("Auto-play blocked or video missing, falling back to bg-video...", err);
            eventVideo.src = fallbackVideo;
            eventVideo.load();
            eventVideo.play().catch(e => console.log("Play failed: ", e));
        });
    };

    const closeSubModal = () => {
        eventModal.classList.remove('active');
        eventVideo.pause();
        eventVideo.src = ""; // Clear video stream
    };

    // Add click listeners to landscape placeholders if they exist
    const daylifePlaceholder = document.getElementById('daylifePlaceholder');
    const nightlifePlaceholder = document.getElementById('nightlifePlaceholder');
    const apartmentsPlaceholder = document.getElementById('apartmentsPlaceholder');

    if (daylifePlaceholder) {
        daylifePlaceholder.addEventListener('click', (e) => {
            e.stopPropagation();
            openSubModal('daylife');
        });
    }

    if (nightlifePlaceholder) {
        nightlifePlaceholder.addEventListener('click', (e) => {
            e.stopPropagation();
            openSubModal('nightlife');
        });
    }

    if (apartmentsPlaceholder) {
        apartmentsPlaceholder.addEventListener('click', (e) => {
            e.stopPropagation();
            openSubModal('apartments');
        });
    }

    // Global delegation listener for dynamically rendered event wide video previews
    document.addEventListener('click', (e) => {
        const previewBtn = e.target.closest('.wide-video-preview');
        if (previewBtn) {
            e.stopPropagation();
            
            const videoSrc = previewBtn.getAttribute('data-video-src');
            const title = previewBtn.getAttribute('data-title');
            const desc = previewBtn.getAttribute('data-desc');
            const badge = previewBtn.getAttribute('data-badge');
            
            if (eventTitle && eventDescription && eventBadge && eventVideo && eventModal) {
                // Populate dynamic content
                eventTitle.textContent = title;
                eventDescription.textContent = desc;
                eventBadge.textContent = badge;
                eventBadge.className = "event-badge"; // reset classes
                
                if (badge.includes("Explorer")) {
                    eventBadge.classList.add('daylife-badge');
                } else if (badge.includes("Vibe")) {
                    eventBadge.classList.add('nightlife-badge');
                } else if (badge.includes("Club")) {
                    eventBadge.classList.add('apartments-badge');
                }
                
                const fallbackVideo = "assets/bg-video.mp4";
                eventVideo.src = videoSrc || fallbackVideo;
                eventVideo.load();
                
                eventModal.classList.add('active');
                eventVideo.play().catch(err => {
                    console.log("Play failed, trying fallback...", err);
                    eventVideo.src = fallbackVideo;
                    eventVideo.load();
                    eventVideo.play().catch(e => console.log("Fallback failed:", e));
                });
            }
        }
    });

    // Close Sub-Modal listeners
    if (closeEventModalBtn) {
        closeEventModalBtn.addEventListener('click', closeSubModal);
    }
    if (eventModal) {
        eventModal.addEventListener('click', (e) => {
            if (e.target === eventModal) {
                closeSubModal();
            }
        });
    }

    // Escape key handling for both modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (eventModal && eventModal.classList.contains('active')) {
                closeSubModal();
            } else if (modal && modal.classList.contains('active')) {
                closeModalFunc();
            }
        }
    });
});
