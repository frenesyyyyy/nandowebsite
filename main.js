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
                    <h2 class="fancy-section-title">Feste in Spiaggia</h2>
                    
                    <div class="sub-event-block" style="width: 100%;">
                        <h4 class="sub-event-title">🏖️ Mulino Beach Club</h4>
                        <p class="event-description">Accedi al club sulla spiaggia più ricercato di Ksamil, tra lettini VIP riservati e drink esclusivi a bordo mare.</p>
                        <div class="wide-video-preview" data-video-src="assets/albania_day_mulino.mp4" data-title="🏖️ Mulino Beach Club" data-desc="Accedi al club sulla spiaggia più ricercato di Ksamil, tra lettini VIP riservati e drink esclusivi a bordo mare." data-badge="Feste in Spiaggia">
                            <div class="play-overlay">
                                <i class="fa-solid fa-circle-play"></i>
                                <span>Guarda il Video</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="sub-event-divider"></div>
                    
                    <div class="sub-event-block" style="width: 100%;">
                        <h4 class="sub-event-title">🌴 African Beach Club</h4>
                        <p class="event-description">Vivi il ritmo tribale e tropicale del club più energetico della baia, tra scenografie incredibili, drink esotici e balli fino al tramonto.</p>
                        <div class="wide-video-preview" data-video-src="assets/albania_day_african.mp4" data-title="🌴 African Beach Club" data-desc="Vivi il ritmo tribale e tropicale del club più energetico della baia, tra scenografie incredibili, drink esotici e balli fino al tramonto." data-badge="Feste in Spiaggia">
                            <div class="play-overlay">
                                <i class="fa-solid fa-circle-play"></i>
                                <span>Guarda il Video</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Option 2 -->
                <div class="daylife-event-item">
                    <h2 class="fancy-section-title">Escursioni</h2>
                    
                    <div class="sub-event-block" style="width: 100%;">
                        <h4 class="sub-event-title">🚢 Gemme Nascoste</h4>
                        <p class="event-description">Esplora le insenature segrete e la natura incontaminata della Riviera Albanese con escursioni esclusive curate per te.</p>
                        <div class="wide-video-preview" data-video-src="assets/albania_day_gemme.mp4" data-title="🚢 Gemme Nascoste" data-desc="Esplora le gemme nascoste della Riviera Albanese con le nostre escursioni giornaliere curate nei minimi dettagli." data-badge="Escursioni">
                            <div class="play-overlay">
                                <i class="fa-solid fa-circle-play"></i>
                                <span>Guarda il Video</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="sub-event-divider"></div>
                    
                    <div class="sub-event-block" style="width: 100%;">
                        <h4 class="sub-event-title">🌊 Escursione Blue-Eye</h4>
                        <p class="event-description">Vivi l'incanto di Syri i Kaltër, una sorgente carsica sotterranea dai colori incredibili, un vero e proprio "occhio blu" immerso nella natura incontaminata.</p>
                        <div class="wide-video-preview" data-video-src="assets/albania_day_blue_eye.mp4" data-title="🌊 Escursione Blue-Eye" data-desc="Vivi l'incanto di Syri i Kaltër, una sorgente carsica sotterranea dai colori incredibili, un vero e proprio 'occhio blu' immerso nella natura incontaminata." data-badge="Escursioni">
                            <div class="play-overlay">
                                <i class="fa-solid fa-circle-play"></i>
                                <span>Guarda il Video</span>
                            </div>
                        </div>
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

    // Temporary override all video sources with the YouTube Shorts link
    const tempYtShort = "https://youtube.com/shorts/VJtgazb2O-w?is=6bz02Aa0pKLxKGuq";
    Object.keys(destinationsData).forEach(key => {
        const dest = destinationsData[key];
        dest.daylifeVideo = tempYtShort;
        dest.nightlifeVideo = tempYtShort;
        dest.apartmentsVideo = tempYtShort;
        
        // Also override data-video-src inside dynamic daylife HTML template strings
        if (dest.daylife && typeof dest.daylife === 'string') {
            dest.daylife = dest.daylife.replace(/data-video-src="[^"]*"/g, `data-video-src="${tempYtShort}"`);
        }
    });

    // DOM Elements
    const modal = document.getElementById('destinationModal');
    const closeBtn = document.getElementById('closeModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDaylife = document.getElementById('modalDaylife');
    const modalNightlife = document.getElementById('modalNightlife');
    const modalApartments = document.getElementById('modalApartments');

    // Promo Code & Booking Agent Engine
    const promoBadge = document.getElementById('promoBadge');
    const clearPromoBtn = document.getElementById('clearPromoBtn');
    const prenotaOraBtn = document.getElementById('prenotaOraBtn');
    const bookingContactCard = document.getElementById('bookingContactCard');

    function getActiveDestinationTitle() {
        if (activeDestKey && destinationsData[activeDestKey]) {
            return destinationsData[activeDestKey].title;
        }
        return '';
    }

    function updateBookingContactCard(destTitle) {
        const activePromo = localStorage.getItem('active_promo');
        const pfp = document.getElementById('contactCardPfp');
        const name = document.getElementById('contactCardName');
        const waBtn = document.getElementById('contactCardWaBtn');
        const igBtn = document.getElementById('contactCardIgBtn');

        const titleText = destTitle ? ` per il viaggio a ${destTitle}` : '';

        if (activePromo === 'ENZO') {
            if (pfp) pfp.src = 'assets/enzo_profile.png';
            if (name) name.textContent = 'Enzo';
            
            const msgEnzo = encodeURIComponent(`Ciao Enzo! Vorrei ricevere maggiori informazioni${titleText} con SUMMER club! ☀️🌴`);
            if (waBtn) waBtn.href = `https://wa.me/393451234567?text=${msgEnzo}`;
            if (igBtn) igBtn.href = 'https://instagram.com/enzo_summerclub';
        } else {
            if (pfp) pfp.src = 'assets/nando_profile.png';
            if (name) name.textContent = 'Nando';
            
            const msgNando = encodeURIComponent(`Ciao Nando! Vorrei ricevere maggiori informazioni${titleText} con SUMMER club! ☀️🌴`);
            if (waBtn) waBtn.href = `https://wa.me/393471234567?text=${msgNando}`;
            if (igBtn) igBtn.href = 'https://instagram.com/summerclub';
        }
    }

    function checkPromoCode() {
        const activePromo = localStorage.getItem('active_promo');
        if (activePromo === 'ENZO') {
            if (promoBadge) promoBadge.style.display = 'flex';
        } else {
            if (promoBadge) promoBadge.style.display = 'none';
        }
        updateBookingContactCard(getActiveDestinationTitle());
    }

    if (clearPromoBtn) {
        clearPromoBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            localStorage.removeItem('active_promo');
            checkPromoCode();
        });
    }

    if (prenotaOraBtn && bookingContactCard) {
        prenotaOraBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            bookingContactCard.classList.toggle('active');
        });
    }

    // Initialize checking on load
    checkPromoCode();

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
    const eventIframe = document.getElementById('eventIframe');
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

                // Dynamically set unblurred destination background image for all wide-video-previews in this modal
                setTimeout(() => {
                    modal.querySelectorAll('.wide-video-preview').forEach(preview => {
                        preview.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('${data.image}')`;
                    });
                }, 0);

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

                // Reset prenota contact card expansion on click
                if (bookingContactCard) {
                    bookingContactCard.classList.remove('active');
                }
                updateBookingContactCard();

                modal.classList.add('active');
            }
        });
    });

    // Close Modal logic
    const closeModalFunc = () => {
        if (modal) modal.classList.remove('active');
        activeDestKey = null;
        closeSubModal();
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModalFunc);
    }

    // Close on outside click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModalFunc();
            }
        });
    }

    // Helper function to extract YouTube ID (including Shorts and share links)
    const getYouTubeId = (url) => {
        if (!url) return null;
        const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
        if (shortsMatch) return shortsMatch[1];
        const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
        if (watchMatch) return watchMatch[1];
        const shareMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
        if (shareMatch) return shareMatch[1];
        return null;
    };

    // Unified player that handles both local mp4 and YouTube streaming elegantly
    const loadAndPlayVideo = (videoSrc) => {
        const ytId = getYouTubeId(videoSrc);
        
        if (ytId) {
            // Hide local video, display YouTube iframe
            if (eventVideo) {
                eventVideo.style.display = 'none';
                eventVideo.pause();
                eventVideo.src = "";
            }
            if (eventIframe) {
                eventIframe.style.display = 'block';
                eventIframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&loop=1&playlist=${ytId}&controls=1&modestbranding=1&rel=0&playsinline=1&enablejsapi=1`;
            }
        } else {
            // Hide YouTube iframe, display local video player
            if (eventIframe) {
                eventIframe.style.display = 'none';
                eventIframe.src = "";
            }
            if (eventVideo) {
                eventVideo.style.display = 'block';
                const fallbackVideo = "assets/bg-video.mp4";
                eventVideo.src = videoSrc || fallbackVideo;
                eventVideo.load();
                eventVideo.play().catch(err => {
                    console.log("Local video blocked, running fallback...", err);
                    eventVideo.src = fallbackVideo;
                    eventVideo.load();
                    eventVideo.play().catch(e => console.log("Fallback failed:", e));
                });
            }
        }
    };

    // Sub-Modal logic for clicking placeholders
    const openSubModal = (type) => {
        if (!activeDestKey) return;
        const data = destinationsData[activeDestKey];
        if (!data) return;

        // Set content dynamically
        if (eventTitle) eventTitle.textContent = data[type + 'EventTitle'] || "Esperienza Esclusiva";
        if (eventDescription) eventDescription.textContent = data[type + 'EventDesc'] || "Dettagli in arrivo per questa destinazione d'élite.";
        
        // Handle badge styling and text
        if (eventBadge) {
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
        }

        // Activate overlay first to layout iframe/video elements correctly
        if (eventModal) eventModal.classList.add('active');

        // Dynamically load the appropriate stream
        const videoSrc = data[type + 'Video'];
        loadAndPlayVideo(videoSrc);
    };

    const closeSubModal = () => {
        if (eventModal) eventModal.classList.remove('active');
        if (eventVideo) {
            eventVideo.pause();
            eventVideo.src = ""; // Clear video stream
        }
        if (eventIframe) eventIframe.src = ""; // Clear iframe stream
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
            
            if (eventModal) {
                // Populate dynamic content safely
                if (eventTitle) eventTitle.textContent = title;
                if (eventDescription) eventDescription.textContent = desc;
                if (eventBadge) {
                    eventBadge.textContent = badge;
                    eventBadge.className = "event-badge"; // reset classes
                    
                    if (badge.includes("Explorer") || badge.includes("Escursioni")) {
                        eventBadge.classList.add('daylife-badge');
                    } else if (badge.includes("Vibe") || badge.includes("Feste")) {
                        eventBadge.classList.add('nightlife-badge');
                    } else if (badge.includes("Club")) {
                        eventBadge.classList.add('apartments-badge');
                    }
                }
                
                eventModal.classList.add('active');
                loadAndPlayVideo(videoSrc);
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

    // Initialize GDPR banner dynamically
    initGDPR();
});

/* ==========================================
   SECURITY AND PROTECTION SUITE
   ========================================== */

// 1. Disable Context Right-Click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
}, false);

// 2. Disable Keyboard Shortcuts (F12, Inspect, View Source)
document.addEventListener('keydown', (e) => {
    if (
        e.keyCode === 123 || // F12 Key
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) || // Ctrl+Shift+I/J/C
        (e.ctrlKey && e.keyCode === 85) // Ctrl+U (View Source)
    ) {
        e.preventDefault();
        return false;
    }
});

// 3. Prevent dragging of images and videos to protect media assets
document.addEventListener('dragstart', (e) => {
    if (e.target.nodeName === 'IMG' || e.target.nodeName === 'VIDEO') {
        e.preventDefault();
    }
});

// 4. DevTools Detection & Source Protection Loop
setInterval(() => {
    (function() {
        const before = new Date().getTime();
        debugger;
        const after = new Date().getTime();
        if (after - before > 100) {
            document.body.innerHTML = `
                <div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100vh; background:#060611; color:#ffffff; font-family:'Outfit', sans-serif; text-align:center; padding:30px; box-sizing:border-box;">
                    <div style="font-size:3rem; margin-bottom:20px; background:linear-gradient(135deg, #a855f7, #ff00e5); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">🔒</div>
                    <h2 style="font-weight:700; text-transform:uppercase; letter-spacing:1px; margin-bottom:10px; font-size:1.5rem;">Accesso Protetto</h2>
                    <p style="color:rgba(255,255,255,0.6); max-width:400px; font-size:0.9rem; line-height:1.5; font-weight:300;">La visualizzazione del codice sorgente e gli strumenti di ispezione dello sviluppatore sono disabilitati per tutelare i diritti d'autore e i contenuti multimediali protetti.</p>
                </div>
            `;
        }
    })();
}, 1000);

/* ==========================================
   GDPR COOKIE CONSENT ENGINE
   ========================================== */
function initGDPR() {
    // If user already made a choice, don't show the banner
    if (localStorage.getItem('gdpr_accepted')) return;

    // Create the banner container element
    const banner = document.createElement('div');
    banner.id = 'gdpr-cookie-banner';
    banner.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        width: 90%;
        max-width: 500px;
        background: rgba(10, 8, 22, 0.85);
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 20px;
        padding: 20px;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255,255,255,0.1);
        z-index: 999999;
        display: flex;
        flex-direction: column;
        gap: 15px;
        font-family: 'Outfit', sans-serif;
        color: #ffffff;
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        opacity: 0;
    `;

    banner.innerHTML = `
        <div style="display:flex; align-items:flex-start; gap:12px;">
            <div style="font-size:1.5rem; background:linear-gradient(135deg, #c084fc, #ff00e5); -webkit-background-clip:text; -webkit-text-fill-color:transparent; line-height:1.2;">🍪</div>
            <div style="flex:1;">
                <h4 style="margin:0 0 4px 0; font-size:0.95rem; font-weight:700; letter-spacing:0.5px; text-transform:uppercase; color:#ffffff;">Informativa sui Cookie</h4>
                <p style="margin:0; font-size:0.8rem; line-height:1.5; color:rgba(255, 255, 255, 0.65); font-weight:300;">
                    Questo sito utilizza esclusivamente cookie tecnici essenziali per abilitare l'esperienza visiva dei video e le animazioni. Non effettuiamo profilazione, non gestiamo pagamenti né account utente.
                </p>
            </div>
        </div>
        <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:5px;">
            <button id="gdpr-decline" style="background:transparent; border:1px solid rgba(255,255,255,0.15); color:rgba(255,255,255,0.8); padding:8px 16px; border-radius:10px; font-size:0.8rem; font-weight:600; cursor:pointer; transition:all 0.2s; font-family:'Outfit',sans-serif;">Rifiuta</button>
            <button id="gdpr-accept" style="background:linear-gradient(135deg, #a855f7, #ff00e5); border:none; color:#ffffff; padding:8px 20px; border-radius:10px; font-size:0.8rem; font-weight:700; cursor:pointer; box-shadow:0 4px 12px rgba(168, 85, 247, 0.3); transition:all 0.2s; font-family:'Outfit',sans-serif;">Accetta</button>
        </div>
    `;

    document.body.appendChild(banner);

    // Trigger elegant slide-up entrance
    setTimeout(() => {
        banner.style.transform = 'translateX(-50%) translateY(0)';
        banner.style.opacity = '1';
    }, 1000);

    // Buttons actions Setup
    const acceptBtn = banner.querySelector('#gdpr-accept');
    const declineBtn = banner.querySelector('#gdpr-decline');

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('gdpr_accepted', 'true');
            hideBanner(banner);
        });
        acceptBtn.addEventListener('mouseenter', () => {
            acceptBtn.style.transform = 'scale(1.03)';
            acceptBtn.style.boxShadow = '0 6px 16px rgba(168, 85, 247, 0.5)';
        });
        acceptBtn.addEventListener('mouseleave', () => {
            acceptBtn.style.transform = 'scale(1)';
            acceptBtn.style.boxShadow = '0 4px 12px rgba(168, 85, 247, 0.3)';
        });
    }

    if (declineBtn) {
        declineBtn.addEventListener('click', () => {
            localStorage.setItem('gdpr_accepted', 'declined');
            hideBanner(banner);
        });
        declineBtn.addEventListener('mouseenter', () => {
            declineBtn.style.background = 'rgba(255,255,255,0.05)';
        });
        declineBtn.addEventListener('mouseleave', () => {
            declineBtn.style.background = 'transparent';
        });
    }
}

function hideBanner(banner) {
    banner.style.transform = 'translateX(-50%) translateY(100px)';
    banner.style.opacity = '0';
    setTimeout(() => banner.remove(), 600);
}

