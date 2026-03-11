// --- Portfolio Data ---
// In a real application, this might come from a CMS or an API.
const portfolioItems = [
    { id: 1, category: 'illustrations', src: './assets/illustrations/Artboard%202.jpg', title: 'Character Sketch 1' },
    { id: 2, category: 'illustrations', src: './assets/illustrations/Artboard%203.jpg', title: 'Character Sketch 2' },
    { id: 3, category: 'illustrations', src: './assets/illustrations/Screenshot%202026-02-28%20041354.png', title: 'Digital Art' },
    { id: 4, category: 'illustrations', src: './assets/illustrations/background%20for%20drop%20animation.jpg', title: 'Environment Concept' },
    { id: 5, category: 'illustrations', src: './assets/illustrations/practice.jpg', title: 'Study' },
    
    { id: 6, category: 'paintings', src: './assets/paintings/Screenshot%202026-02-28%20050207.png', title: 'Painting Session' },
    { id: 7, category: 'paintings', src: './assets/paintings/WhatsApp%20Image%202026-02-28%20at%204.58.24%20AM.jpeg', title: 'Traditional Media 1' },
    { id: 8, category: 'paintings', src: './assets/paintings/WhatsApp%20Image%202026-02-28%20at%205.00.12%20AM.jpeg', title: 'Traditional Media 2' },
    
    { id: 9, category: 'set-design', src: './assets/set%20design%20and%20charater%20design/Artboard%201.2.jpg', title: 'Set Concept 1' },
    { id: 10, category: 'set-design', src: './assets/set%20design%20and%20charater%20design/Screenshot%202026-02-28%20045524.png', title: 'Prop Design' },
    { id: 11, category: 'set-design', src: './assets/set%20design%20and%20charater%20design/nakli%20poster.jpg', title: 'Poster Layout' },
    
    { id: 12, category: 'projects', src: './assets/projets/aaroha.p/brochure.jpg', title: 'Aaroha Brochure' },
    { id: 13, category: 'projects', src: './assets/projets/avant.p/cover.jpg', title: 'Avant Cover' },
    { id: 14, category: 'projects', src: './assets/tfn.p/tfn3.jpg', title: 'TFN Layout' },
    
    { id: 15, category: 'story-board', src: './assets/story%20board/st1.jpg', title: 'Sequence 1' },
    { id: 16, category: 'story-board', src: './assets/story%20board/st2.jpg', title: 'Sequence 2' }
];

// --- DOM Elements ---
const gallery = document.getElementById('gallery');
const filterBtns = document.querySelectorAll('.filter-btn');
const navbar = document.getElementById('navbar');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Render all items initially
    renderGallery('all');
});

// --- Navigation Scroll Effect ---
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- Gallery Rendering & Filtering ---
function renderGallery(filterCategory) {
    // Clear current gallery
    gallery.innerHTML = '';
    
    // Filter items
    const filteredItems = filterCategory === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === filterCategory);
        
    // Create DOM elements
    filteredItems.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'gallery-item';
        itemEl.dataset.category = item.category;
        
        // Format category name for display
        const displayCat = item.category.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase());
        
        itemEl.innerHTML = `
            <img src="${item.src}" alt="${item.title}" loading="lazy">
            <div class="item-overlay">
                <span class="item-category">${displayCat}</span>
                <h3 class="item-title">${item.title}</h3>
            </div>
        `;
        
        // Add click event for lightbox
        itemEl.addEventListener('click', () => openLightbox(item.src, item.title));
        
        gallery.appendChild(itemEl);
        
        // Staggered animation for loading items
        setTimeout(() => {
            itemEl.classList.add('visible');
        }, index * 100); // 100ms delay per item
    });
}

// Filter button clicks
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter gallery
        const filterValue = btn.getAttribute('data-filter');
        renderGallery(filterValue);
    });
});

// --- Lightbox Functionality ---
function openLightbox(src, title) {
    lightboxImg.src = src;
    lightboxCaption.textContent = title;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
    lightbox.classList.remove('active');
    setTimeout(() => {
        lightboxImg.src = '';
    }, 400); // Wait for transition
    document.body.style.overflow = ''; // Restore scrolling
}

lightboxClose.addEventListener('click', closeLightbox);

// Close on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// --- Smooth Scrolling for Anchor Links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Update active state in nav
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            if(this.classList.contains('nav-links')) {
                this.classList.add('active');
            }
            
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for sticky header
                behavior: 'smooth'
            });
        }
    });
});
