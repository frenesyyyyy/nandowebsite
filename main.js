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

    // Destination Data
    const destinationsData = {
        tropical: {
            title: "Tropical Escapes",
            image: "assets/tropical.png",
            daylife: "Relax on pristine white-sand beaches, enjoy snorkeling in crystal-clear waters, and sip fresh coconuts under the palm trees.",
            nightlife: "Experience vibrant beach clubs with fire dancers, sunset cruises, and open-air upscale dining under the stars.",
            apartments: "Luxury overwater bungalows and beachfront exclusive villas equipped with private infinity pools."
        },
        arctic: {
            title: "Arctic Wonders",
            image: "assets/winter.png",
            daylife: "Experience dog sledding across frozen tundras, snowmobiling through pine forests, and relaxing in thermal hot springs.",
            nightlife: "Chase the majestic Northern Lights from the comfort of a glass igloo and enjoy fireside acoustic sessions.",
            apartments: "Cozy luxury log cabins featuring massive panoramic glass roofs and private saunas."
        },
        tokyo: {
            title: "Urban Pulse",
            image: "assets/tokyo.png",
            daylife: "Explore ancient temples nestled between skyscrapers, shop in high-end districts, and taste world-class street food.",
            nightlife: "Dive into glowing neon-lit streets, discover hidden underground speakeasies, and enjoy high-energy karaoke rooms.",
            apartments: "Ultra-modern sky-high penthouses with smart-home tech, minimalist design, and endless skyline views."
        },
        desert: {
            title: "Desert Oasis",
            image: "assets/desert.png",
            daylife: "Embark on thrilling dune bashing adventures, camel treks across boundless sands, and sandboarding at golden hour.",
            nightlife: "Enjoy private Bedouin-style campfires, stargazing under zero light pollution, and traditional belly dance shows.",
            apartments: "Luxurious glamping tents fully equipped with air conditioning, plush king beds, and open-air baths."
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
