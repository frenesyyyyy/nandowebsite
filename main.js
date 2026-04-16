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

        albania: {
            title: "Albania",
            image: "assets/albania.jfif",
            daylife: "Esplora le gemme nascoste della Riviera Albanese, dalle acque cristalline di Ksamil ai suggestivi passi montani di Llogara.",
            nightlife: "Vivi l'energia vibrante del distretto Blloku a Tirana o goditi un beach party esclusivo sotto le stelle a Saranda.",
            apartments: "Dai moderni attici nel cuore di Tirana alle lussuose ville fronte mare lungo la costa ionica."
        },
        malta: {
            title: "Malta",
            image: "assets/malta.jfif",
            daylife: "Passeggia tra le storiche vie di Valletta, tuffati nel blu della Laguna Blu di Comino e respira il fascino senza tempo di Mdina.",
            nightlife: "Scatena il divertimento a Paceville, goditi i club open-air del Gianpula Village e cene raffinate a St. Julian's.",
            apartments: "Eleganti residenze storiche a Valletta e moderni appartamenti di lusso a Sliema con vista mozzafiato sul porto."
        },
        barcellona: {
            title: "Barcellona",
            image: "assets/barcellona.jfif",
            daylife: "Perditi nel Barrio Gótico, lasciati incantare dalla Sagrada Família e gusta le migliori tapas al mercato della Boqueria.",
            nightlife: "Vivi una movida senza fine, dai beach club della Barceloneta ai cocktail bar ricercati del quartiere El Born.",
            apartments: "Attici modernisti nell'Eixample ed eleganti loft di design con vista sul Mediterraneo."
        },
        ibiza: {
            title: "Ibiza",
            image: "assets/ibiza.jfif",
            daylife: "Scopri calette spettacolari come Cala Comte, curiosa tra i mercatini hippy e goditi i tramonti più iconici del Mediterraneo.",
            nightlife: "La capitale mondiale del clubbing. Balla con i DJ set più famosi al Pacha, all'Amnesia o all'Ushuaïa per una notte epica.",
            apartments: "Ville ultra-lusso con piscina a sfioro e tipiche finche immerse nella natura incontaminata dell'isola."
        }
    };

    const modal = document.getElementById('destinationModal');
    const closeBtn = document.getElementById('closeModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDaylife = document.getElementById('modalDaylife');
    const modalNightlife = document.getElementById('modalNightlife');
    const modalApartments = document.getElementById('modalApartments');
    
    // Open Modal logic
    document.querySelectorAll('.destination-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent jump to top
            const destKey = card.getAttribute('data-destination');
            const data = destinationsData[destKey];
            
            if(data) {
                modalImage.src = data.image;
                modalTitle.textContent = data.title;
                modalDaylife.textContent = data.daylife;
                modalNightlife.textContent = data.nightlife;
                modalApartments.textContent = data.apartments;
                
                modal.classList.add('active');
            }
        });
    });

    // Close Modal logic
    const closeModalFunc = () => {
        modal.classList.remove('active');
    };

    closeBtn.addEventListener('click', closeModalFunc);
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            closeModalFunc();
        }
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && modal.classList.contains('active')) {
            closeModalFunc();
        }
    });
});
