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
            daylife: "Explore the hidden gems of the Albanian Riviera, from the crystal clear waters of Ksamil to the high mountain passes of Llogara.",
            nightlife: "Experience the vibrant energy of Tirana's Blloku district or enjoy a beach party under the stars in Saranda.",
            apartments: "From modern apartments in the heart of Tirana to luxury beachfront villas along the southern coast."
        },
        malta: {
            title: "Malta",
            image: "assets/malta.jfif",
            daylife: "Explore the ancient streets of Valletta, dive into the crystal blue waters of Comino's Blue Lagoon, and visit the silent city of Mdina.",
            nightlife: "Enjoy the bustling nightlife of Paceville, open-air clubbing at Gianpula Village, and sophisticated dining in St. Julian's.",
            apartments: "Historic townhouses in Valletta and luxury waterfront apartments in Sliema with stunning harbor views."
        },
        barcellona: {
            title: "Barcellona",
            image: "assets/barcellona.jfif",
            daylife: "Wander through the Gothic Quarter, marvel at Gaudí's Sagrada Família, and enjoy tapas at the bustling Boqueria market.",
            nightlife: "Experience the diverse nightlife from the beach clubs of Barceloneta to the hidden bars of El Born.",
            apartments: "Modernist penthouses in Eixample and elegant lofts overlooking the Mediterranean."
        },
        ibiza: {
            title: "Ibiza",
            image: "assets/ibiza.jfif",
            daylife: "Discover secluded calas like Cala Comte, browse the hippy markets of Las Dalias, and enjoy stunning Mediterranean sunsets.",
            nightlife: "The world's clubbing capital. Dance to legendary DJs at Pacha, Amnesia, or Ushuaïa for an unforgettable night.",
            apartments: "Ultra-luxury villas with panoramic sea views and stylish fincas nestled in the tranquil countryside."
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
