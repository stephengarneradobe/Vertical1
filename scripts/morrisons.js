// Morrisons website JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel
    initCarousel();
    
    // Initialize smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Initialize mobile menu toggle
    initMobileMenu();
    
    // Initialize search functionality
    initSearch();
});

// Carousel functionality
function initCarousel() {
    const carousel = document.querySelector('.carousel-container');
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Show initial slide
    showSlide(currentSlide);
    
    // Auto-advance carousel
    let autoAdvance = setInterval(nextSlide, 5000);
    
    // Event listeners for manual navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            clearInterval(autoAdvance);
            prevSlide();
            autoAdvance = setInterval(nextSlide, 5000);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            clearInterval(autoAdvance);
            nextSlide();
            autoAdvance = setInterval(nextSlide, 5000);
        });
    }
    
    // Pause auto-advance on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoAdvance);
    });
    
    carousel.addEventListener('mouseleave', () => {
        autoAdvance = setInterval(nextSlide, 5000);
    });
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const header = document.querySelector('header');
    const headerTop = document.querySelector('.header-top');
    
    if (!header || !headerTop) return;
    
    // Create mobile menu toggle button
    const mobileToggle = document.createElement('button');
    mobileToggle.className = 'mobile-menu-toggle';
    mobileToggle.innerHTML = '☰';
    mobileToggle.setAttribute('aria-label', 'Toggle mobile menu');
    
    // Insert toggle button before header-top
    header.insertBefore(mobileToggle, headerTop);
    
    // Add mobile menu styles
    const mobileStyles = `
        .mobile-menu-toggle {
            display: none;
            background: none;
            border: none;
            font-size: 24px;
            color: var(--morrisons-primary);
            cursor: pointer;
            padding: 10px;
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 1001;
        }
        
        @media (max-width: 768px) {
            .mobile-menu-toggle {
                display: block;
            }
            
            .header-top {
                display: none;
            }
            
            .header-top.active {
                display: block;
            }
            
            .header-main .container {
                padding-top: 60px;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = mobileStyles;
    document.head.appendChild(styleSheet);
    
    // Toggle mobile menu
    mobileToggle.addEventListener('click', () => {
        headerTop.classList.toggle('active');
        mobileToggle.innerHTML = headerTop.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!header.contains(e.target)) {
            headerTop.classList.remove('active');
            mobileToggle.innerHTML = '☰';
        }
    });
}

// Search functionality
function initSearch() {
    // Create search bar in header
    const headerMain = document.querySelector('.header-main .container');
    if (!headerMain) return;
    
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <div class="search-bar">
            <input type="text" placeholder="Search for products..." class="search-input">
            <button type="button" class="search-btn">🔍</button>
        </div>
    `;
    
    // Insert search bar between logo and header actions
    const logo = headerMain.querySelector('.logo');
    const headerActions = headerMain.querySelector('.header-actions');
    
    if (logo && headerActions) {
        headerMain.insertBefore(searchContainer, headerActions);
    }
    
    // Add search styles
    const searchStyles = `
        .search-container {
            flex: 1;
            max-width: 400px;
            margin: 0 20px;
        }
        
        .search-bar {
            display: flex;
            border: 2px solid var(--morrisons-border);
            border-radius: 25px;
            overflow: hidden;
            background: white;
        }
        
        .search-input {
            flex: 1;
            padding: 12px 20px;
            border: none;
            outline: none;
            font-size: 16px;
        }
        
        .search-btn {
            background: var(--morrisons-primary);
            color: white;
            border: none;
            padding: 12px 20px;
            cursor: pointer;
            font-size: 18px;
            transition: background 0.2s;
        }
        
        .search-btn:hover {
            background: #004080;
        }
        
        @media (max-width: 768px) {
            .search-container {
                order: 3;
                max-width: 100%;
                margin: 20px 0 0 0;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = searchStyles;
    document.head.appendChild(styleSheet);
    
    // Search functionality
    const searchInput = searchContainer.querySelector('.search-input');
    const searchBtn = searchContainer.querySelector('.search-btn');
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            // Here you would typically send the search query to your backend
            console.log('Searching for:', query);
            alert(`Searching for: ${query}`);
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Add loading animation for page elements
function addLoadingAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.aisle-item, .saving-item, .recipe-category');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Add CSS animations
const animationStyles = `
    .aisle-item, .saving-item, .recipe-category {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .aisle-item.animate-in, .saving-item.animate-in, .recipe-category.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .aisle-item:nth-child(1) { transition-delay: 0.1s; }
    .aisle-item:nth-child(2) { transition-delay: 0.2s; }
    .aisle-item:nth-child(3) { transition-delay: 0.3s; }
    .aisle-item:nth-child(4) { transition-delay: 0.4s; }
    .aisle-item:nth-child(5) { transition-delay: 0.5s; }
    .aisle-item:nth-child(6) { transition-delay: 0.6s; }
    .aisle-item:nth-child(7) { transition-delay: 0.7s; }
    .aisle-item:nth-child(8) { transition-delay: 0.8s; }
    .aisle-item:nth-child(9) { transition-delay: 0.9s; }
    .aisle-item:nth-child(10) { transition-delay: 1.0s; }
    .aisle-item:nth-child(11) { transition-delay: 1.1s; }
    .aisle-item:nth-child(12) { transition-delay: 1.2s; }
    .aisle-item:nth-child(13) { transition-delay: 1.3s; }
    .aisle-item:nth-child(14) { transition-delay: 1.4s; }
    .aisle-item:nth-child(15) { transition-delay: 1.5s; }
    .aisle-item:nth-child(16) { transition-delay: 1.6s; }
`;

// Add animation styles to document
const animationStyleSheet = document.createElement('style');
animationStyleSheet.textContent = animationStyles;
document.head.appendChild(animationStyleSheet);

// Initialize loading animations after a short delay
setTimeout(addLoadingAnimations, 100);
