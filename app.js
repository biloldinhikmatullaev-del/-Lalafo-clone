// Default Mock Ads Database
const DEFAULT_ADS = [
    {
        id: "ad-1",
        title: "iPhone 15 Pro Max 256GB, идеальное состояние",
        price: 95000,
        category: "electronics",
        city: "Бишкек",
        description: "Продаю iPhone 15 Pro Max на 256 ГБ. Цвет Natural Titanium. Телефон в идеальном состоянии, без царапин и сколов. Батарея 98%. Полный комплект: коробка, оригинальный кабель. Использовался бережно в чехле и с защитным стеклом. Любые проверки на месте.",
        images: ["https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop"],
        date: "2026-07-08",
        seller: {
            name: "Алексей",
            phone: "+996 700 123-456",
            rating: 4.8,
            verified: true
        },
        vip: true
    },
    {
        id: "ad-2",
        title: "BMW M4 Competition, 2021 год",
        price: 5200000,
        category: "cars",
        city: "Ош",
        description: "BMW M4 Competition. Пробег 25,000 км. Объем 3.0 л (510 л.с.). Машина в идеальном техническом и эстетическом состоянии. Полностью в бронепленке. Салон чистый, не прокуренный. Своевременное обслуживание в официальном дилерском центре. Полная комплектация.",
        images: ["https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop"],
        date: "2026-07-07",
        seller: {
            name: "Мирлан",
            phone: "+996 555 987-654",
            rating: 4.9,
            verified: true
        },
        vip: true
    },
    {
        id: "ad-3",
        title: "Двухкомнатная квартира, 64м², индивидуальная планировка",
        price: 6300000,
        category: "realestate",
        city: "Бишкек",
        description: "Продается просторная 2-комнатная квартира в южной части города. Застройщик Elite House. Этаж 7 из 12. Дизайнерский ремонт, теплые полы, качественная сантехника. Частично остается мебель и встроенная бытовая техника. Развитая инфраструктура, охраняемая территория.",
        images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop"],
        date: "2026-07-06",
        seller: {
            name: "Айсулуу",
            phone: "+996 777 445-566",
            rating: 4.7,
            verified: true
        },
        vip: true
    },
    {
        id: "ad-4",
        title: "PlayStation 5 + 2 геймпада и 3 игры",
        price: 42000,
        category: "electronics",
        city: "Джалал-Абад",
        description: "Продаю PS5 (версия с дисководом). Состояние новой консоли, не шумит, не греется. В комплекте два оригинальных геймпада DualSense, все провода и диски: Spider-Man 2, GTA V, FC 24. Коробка имеется.",
        images: ["https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop"],
        date: "2026-07-08",
        seller: {
            name: "Нурбек",
            phone: "+996 500 112-233",
            rating: 4.5,
            verified: false
        },
        vip: false
    },
    {
        id: "ad-5",
        title: "Современный диван в гостиную, новый",
        price: 28000,
        category: "homegarden",
        city: "Бишкек",
        description: "Новый раскладной диван высокого качества. Каркас из прочного дерева, обивка — премиальный велюр (легко чистится). Размеры: 220х95 см. Механизм раскладывания — клик-кляк. Есть ящик для белья. Доставка по городу бесплатная.",
        images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop"],
        date: "2026-07-05",
        seller: {
            name: "МебельМаркет",
            phone: "+996 550 550-123",
            rating: 4.6,
            verified: true
        },
        vip: false
    },
    {
        id: "ad-6",
        title: "Разработка сайтов и мобильных приложений под ключ",
        price: 15000,
        category: "services",
        city: "Каракол",
        description: "Профессиональная команда разработчиков предлагает услуги по созданию сайтов (лендинги, интернет-магазины, корпоративные порталы) и мобильных приложений (iOS, Android). Современный дизайн, оптимизация, техническая поддержка. Гарантия качества.",
        images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"],
        date: "2026-07-08",
        seller: {
            name: "DevStudio",
            phone: "+996 705 998-877",
            rating: 5.0,
            verified: true
        },
        vip: false
    },
    {
        id: "ad-7",
        title: "Кожаная куртка Zara, размер M",
        price: 4500,
        category: "fashion",
        city: "Бишкек",
        description: "Продаю куртку косуху Zara из натуральной кожи. Размер M (46-48). Надевал пару раз, состояние абсолютно новой вещи. Стильный фасон, качественная фурнитура. Продаю в связи с тем, что не подошел размер.",
        images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop"],
        date: "2026-07-04",
        seller: {
            name: "Эрлан",
            phone: "+996 770 456-789",
            rating: 4.3,
            verified: false
        },
        vip: false
    },
    {
        id: "ad-8",
        title: "Горный велосипед Giant Talon 2",
        price: 35000,
        category: "homegarden", // categorized as home/sport
        city: "Ош",
        description: "Продаю горный велосипед Giant Talon 2. Рама L, колеса 29 дюймов. Гидравлические дисковые тормоза Shimano. 18 скоростей. Состояние отличное, все переключатели работают четко, вилка с блокировкой. В подарок отдам замок и фонарь.",
        images: ["https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&auto=format&fit=crop"],
        date: "2026-07-03",
        seller: {
            name: "Руслан",
            phone: "+996 552 111-222",
            rating: 4.7,
            verified: false
        },
        vip: false
    }
];

// App State
let ads = [];
let favorites = [];
let activeFilters = {
    search: '',
    category: '',
    city: '',
    minPrice: '',
    maxPrice: '',
    sortBy: 'newest'
};
let activeAdDetail = null;
let uploadedImages = [];

// DOM Elements
const adsGrid = document.getElementById('ads-grid');
const vipCarousel = document.getElementById('vip-carousel');
const favoritesBadge = document.getElementById('favorites-badge');
const themeToggleBtn = document.getElementById('theme-toggle');
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const citySelect = document.getElementById('city-select');
const categoriesContainer = document.getElementById('categories-container');
const resetFiltersBtn = document.getElementById('reset-filters');
const postAdBtn = document.getElementById('post-ad-btn');

// Sidebar Filters
const sidebarSearch = document.getElementById('filter-search');
const sidebarCategory = document.getElementById('filter-category');
const sidebarCity = document.getElementById('filter-city');
const filterMinPrice = document.getElementById('filter-min-price');
const filterMaxPrice = document.getElementById('filter-max-price');
const filterSortBy = document.getElementById('filter-sort-by');

// Modals
const postAdModal = document.getElementById('post-ad-modal');
const adDetailModal = document.getElementById('ad-detail-modal');

// Ad Form
const postAdForm = document.getElementById('post-ad-form');
const imageUploadInput = document.getElementById('image-upload');
const imagePreviewsContainer = document.getElementById('image-previews');

// Chat Widget
const chatWidget = document.getElementById('chat-widget');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const btnSendMsg = document.getElementById('btn-send-msg');

// Initialize App
function init() {
    // Load Ads
    const storedAds = localStorage.getItem('lalafo_ads');
    if (storedAds) {
        ads = JSON.parse(storedAds);
    } else {
        ads = [...DEFAULT_ADS];
        localStorage.setItem('lalafo_ads', JSON.stringify(ads));
    }

    // Load Favorites
    const storedFavorites = localStorage.getItem('lalafo_favorites');
    if (storedFavorites) {
        favorites = JSON.parse(storedFavorites);
    } else {
        favorites = [];
        localStorage.setItem('lalafo_favorites', JSON.stringify(favorites));
    }

    // Setup Theme
    const storedTheme = localStorage.getItem('lalafo_theme') || 'light';
    document.documentElement.setAttribute('data-theme', storedTheme);
    updateThemeIcon(storedTheme);

    // Initial Renders
    updateFavoritesBadge();
    updateVerificationHeader();
    renderVIPAds();
    renderAds();
    setupEscrowAndChatUpgrades();

    // Event Listeners
    setupEventListeners();
}

// Event Listeners Setup
function setupEventListeners() {
    // Theme Toggle
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Search and Header Filters
    searchBtn.addEventListener('click', handleHeaderSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleHeaderSearch();
    });

    // Sidebar Filters
    sidebarSearch.addEventListener('input', (e) => {
        activeFilters.search = e.target.value;
        searchInput.value = e.target.value; // Sync with header
        renderAds();
    });
    sidebarCategory.addEventListener('change', (e) => {
        activeFilters.category = e.target.value;
        updateCategoryPills(e.target.value);
        renderAds();
    });
    sidebarCity.addEventListener('change', (e) => {
        activeFilters.city = e.target.value;
        citySelect.value = e.target.value; // Sync with header
        renderAds();
    });
    filterMinPrice.addEventListener('input', (e) => {
        activeFilters.minPrice = e.target.value;
        renderAds();
    });
    filterMaxPrice.addEventListener('input', (e) => {
        activeFilters.maxPrice = e.target.value;
        renderAds();
    });
    filterSortBy.addEventListener('change', (e) => {
        activeFilters.sortBy = e.target.value;
        renderAds();
    });
    resetFiltersBtn.addEventListener('click', resetFilters);

    // Header City Dropdown Sync
    citySelect.addEventListener('change', (e) => {
        activeFilters.city = e.target.value;
        sidebarCity.value = e.target.value; // Sync with sidebar
        renderAds();
    });

    // Category pills click handlers
    categoriesContainer.addEventListener('click', (e) => {
        const pill = e.target.closest('.category-pill');
        if (!pill) return;

        const category = pill.dataset.category;
        
        // Toggle category
        if (activeFilters.category === category) {
            activeFilters.category = '';
        } else {
            activeFilters.category = category;
        }

        sidebarCategory.value = activeFilters.category;
        updateCategoryPills(activeFilters.category);
        renderAds();
    });

    // Modals
    postAdBtn.addEventListener('click', () => openModal(postAdModal));
    document.querySelectorAll('.modal-close, .modal-overlay').forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target === el || el.classList.contains('modal-close')) {
                closeActiveModals();
            }
        });
    });

    // Image Upload Handler
    imageUploadInput.addEventListener('change', handleImageUpload);

    // Post Ad Form Submission
    postAdForm.addEventListener('submit', handlePostAdSubmit);

    // Chat Actions
    btnSendMsg.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendChatMessage();
    });
    document.getElementById('chat-close').addEventListener('click', () => {
        chatWidget.classList.remove('active');
    });

    // AI Assistant Event Listeners
    const btnAiAssist = document.getElementById('btn-ai-assist-trigger');
    if (btnAiAssist) {
        btnAiAssist.addEventListener('click', runAIAssistant);
    }
    const aiModalClose = document.getElementById('ai-modal-close');
    if (aiModalClose) {
        aiModalClose.addEventListener('click', () => {
            document.getElementById('ai-assistant-modal').classList.remove('active');
        });
    }
    const aiResCancel = document.getElementById('ai-res-cancel-btn');
    if (aiResCancel) {
        aiResCancel.addEventListener('click', () => {
            document.getElementById('ai-assistant-modal').classList.remove('active');
        });
    }
    const aiResApply = document.getElementById('ai-res-apply-btn');
    if (aiResApply) {
        aiResApply.addEventListener('click', applyAIGeneratedData);
    }

    // Verification Event Listeners
    const verifyProfileBtn = document.getElementById('verify-profile-btn');
    if (verifyProfileBtn) {
        verifyProfileBtn.addEventListener('click', openVerificationModal);
    }
    const verifyModalClose = document.getElementById('verify-modal-close');
    if (verifyModalClose) {
        verifyModalClose.addEventListener('click', () => {
            document.getElementById('verification-modal').classList.remove('active');
            stopBioVideo();
        });
    }
    const verifyPrevBtn = document.getElementById('verify-prev-btn');
    if (verifyPrevBtn) {
        verifyPrevBtn.addEventListener('click', handleVerifyPrevStep);
    }
    const verifyNextBtn = document.getElementById('verify-next-btn');
    if (verifyNextBtn) {
        verifyNextBtn.addEventListener('click', handleVerifyNextStep);
    }
    const btnStartBio = document.getElementById('btn-start-biometrics');
    if (btnStartBio) {
        btnStartBio.addEventListener('click', startBiometricScan);
    }
    const docUploadTrigger = document.getElementById('document-upload-trigger');
    const docInput = document.getElementById('verify-doc-input');
    if (docUploadTrigger && docInput) {
        docUploadTrigger.addEventListener('click', () => docInput.click());
        docInput.addEventListener('change', handleVerifyDocUpload);
    }
    const docRemove = document.getElementById('verify-doc-remove');
    if (docRemove) {
        docRemove.addEventListener('click', removeVerifyDoc);
    }
}

// Theme Handlers
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('lalafo_theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeToggleBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
            </svg>`;
    } else {
        themeToggleBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>`;
    }
}

// Search synchronization
function handleHeaderSearch() {
    activeFilters.search = searchInput.value;
    sidebarSearch.value = searchInput.value;
    renderAds();
}

// Category selection highlight helper
function updateCategoryPills(activeCategory) {
    document.querySelectorAll('.category-pill').forEach(pill => {
        if (pill.dataset.category === activeCategory) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });
}

// Filter and Sort Data
function getFilteredAds(vipOnly = false) {
    let result = ads.filter(ad => {
        // VIP condition
        if (vipOnly && !ad.vip) return false;

        // Search text match (Title and Description)
        if (activeFilters.search) {
            const query = activeFilters.search.toLowerCase();
            const inTitle = ad.title.toLowerCase().includes(query);
            const inDesc = ad.description.toLowerCase().includes(query);
            if (!inTitle && !inDesc) return false;
        }

        // Category match
        if (activeFilters.category && ad.category !== activeFilters.category) return false;

        // City match
        if (activeFilters.city && ad.city !== activeFilters.city) return false;

        // Price Min match
        if (activeFilters.minPrice && ad.price < parseFloat(activeFilters.minPrice)) return false;

        // Price Max match
        if (activeFilters.maxPrice && ad.price > parseFloat(activeFilters.maxPrice)) return false;

        return true;
    });

    // Sorting
    if (activeFilters.sortBy === 'cheapest') {
        result.sort((a, b) => a.price - b.price);
    } else if (activeFilters.sortBy === 'expensive') {
        result.sort((a, b) => b.price - a.price);
    } else {
        // Newest (Default)
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return result;
}

// Reset Filters
function resetFilters() {
    activeFilters = {
        search: '',
        category: '',
        city: '',
        minPrice: '',
        maxPrice: '',
        sortBy: 'newest'
    };

    // Update UI elements
    searchInput.value = '';
    citySelect.value = '';
    sidebarSearch.value = '';
    sidebarCategory.value = '';
    sidebarCity.value = '';
    filterMinPrice.value = '';
    filterMaxPrice.value = '';
    filterSortBy.value = 'newest';

    updateCategoryPills('');
    renderAds();
}

// Render VIP Cards
function renderVIPAds() {
    const vipAds = getFilteredAds(true);
    vipCarousel.innerHTML = '';

    if (vipAds.length === 0) {
        vipCarousel.innerHTML = `
            <div class="empty-state" style="padding: 30px; width: 100%;">
                <h3>Нет активных VIP-объявлений</h3>
                <p>Попробуйте сбросить фильтры, чтобы увидеть все предложения.</p>
            </div>`;
        return;
    }

    vipAds.forEach(ad => {
        vipCarousel.appendChild(createAdCard(ad));
    });
}

// Render Listings Grid
function renderAds() {
    const filteredAds = getFilteredAds(false);
    adsGrid.innerHTML = '';

    if (filteredAds.length === 0) {
        adsGrid.innerHTML = `
            <div class="empty-state">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3>Объявления не найдены</h3>
                <p>Ничего не найдено по вашему запросу. Попробуйте изменить параметры поиска.</p>
            </div>`;
        return;
    }

    filteredAds.forEach(ad => {
        adsGrid.appendChild(createAdCard(ad));
    });
}

// Create Ad Card Element
function createAdCard(ad) {
    const card = document.createElement('div');
    card.className = `ad-card ${ad.vip ? 'vip' : ''}`;
    
    // Check if favorited
    const isFav = favorites.includes(ad.id);

    const priceFormatted = new Intl.NumberFormat('ru-RU').format(ad.price);

    card.innerHTML = `
        <div class="card-img-wrapper">
            ${ad.vip ? `
            <div class="vip-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                VIP
            </div>` : ''}
            ${ad.seller.verified ? `
            <div class="verified-seller-badge-on-card" style="position: absolute; bottom: 12px; left: 12px; background: rgba(59, 130, 246, 0.95); color: white; padding: 4px 8px; border-radius: 6px; font-size: 10px; font-weight: 600; display: flex; align-items: center; gap: 4px; z-index: 2; box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Проверен
            </div>` : ''}
            <button class="btn-favorite ${isFav ? 'active' : ''}" data-id="${ad.id}" onclick="event.stopPropagation(); toggleFavorite('${ad.id}')">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>
            <img src="${ad.images[0]}" class="card-img" alt="${ad.title}" onerror="this.src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600'">
        </div>
        <div class="card-content">
            <div class="card-price">${priceFormatted} KGS</div>
            <h3 class="card-title">${ad.title}</h3>
            <div class="card-footer">
                <div class="card-location">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    ${ad.city}
                </div>
                <div class="card-date">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    ${formatDate(ad.date)}
                </div>
            </div>
        </div>
    `;

    // Click handler to open details
    card.addEventListener('click', () => openAdDetails(ad));

    return card;
}

// Favorite Management
function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(id);
    }
    
    localStorage.setItem('lalafo_favorites', JSON.stringify(favorites));
    updateFavoritesBadge();
    
    // Re-render to reflect changes
    renderAds();
    renderVIPAds();

    // If detail modal is open and has the same ID, update its favorite status if needed
    // (though in detail view, we don't have a direct heart, we can add one if desired)
}

function updateFavoritesBadge() {
    favoritesBadge.textContent = favorites.length;
    if (favorites.length > 0) {
        favoritesBadge.style.display = 'block';
    } else {
        favoritesBadge.style.display = 'none';
    }
}

// Date Formatter Helper
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
        return "Сегодня";
    } else if (date.toDateString() === yesterday.toDateString()) {
        return "Вчера";
    } else {
        return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
    }
}

// Modals Management
function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeActiveModals() {
    document.querySelectorAll('.modal-overlay, .ai-modal-overlay').forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = '';
    // Clear post ad state
    uploadedImages = [];
    imagePreviewsContainer.innerHTML = '';
    const btn = document.getElementById('btn-ai-assist-trigger');
    if (btn) btn.disabled = true;
}

// Image File Upload and Base64 Conversion
function handleImageUpload(e) {
    const files = Array.from(e.target.files);
    
    let processedCount = 0;
    files.forEach(file => {
        if (!file.type.startsWith('image/')) return;
        
        const reader = new FileReader();
        reader.onload = function(event) {
            const base64Url = event.target.result;
            uploadedImages.push(base64Url);
            
            // Render preview
            const preview = document.createElement('div');
            preview.className = 'img-preview';
            preview.innerHTML = `
                <img src="${base64Url}">
                <button type="button" class="img-preview-remove" onclick="removeUploadedImage(event, '${base64Url}')">&times;</button>
            `;
            imagePreviewsContainer.appendChild(preview);
            
            processedCount++;
            if (processedCount > 0) {
                const btn = document.getElementById('btn-ai-assist-trigger');
                if (btn) btn.disabled = false;
            }
        };
        reader.readAsDataURL(file);
    });
}

function removeUploadedImage(e, url) {
    e.stopPropagation();
    const index = uploadedImages.indexOf(url);
    if (index > -1) {
        uploadedImages.splice(index, 1);
    }
    // Re-render previews
    imagePreviewsContainer.innerHTML = '';
    uploadedImages.forEach(base64Url => {
        const preview = document.createElement('div');
        preview.className = 'img-preview';
        preview.innerHTML = `
            <img src="${base64Url}">
            <button type="button" class="img-preview-remove" onclick="removeUploadedImage(event, '${base64Url}')">&times;</button>
        `;
        imagePreviewsContainer.appendChild(preview);
    });
    
    const btn = document.getElementById('btn-ai-assist-trigger');
    if (btn) btn.disabled = (uploadedImages.length === 0);
}

// Handle posting a new ad
function handlePostAdSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('ad-title').value;
    const price = parseFloat(document.getElementById('ad-price').value);
    const category = document.getElementById('ad-category').value;
    const city = document.getElementById('ad-city').value;
    const description = document.getElementById('ad-desc').value;
    const phone = document.getElementById('ad-phone').value;

    // Use uploaded images or fallback to a placeholder
    const images = uploadedImages.length > 0 
        ? [...uploadedImages] 
        : ["https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800"]; // gradient placeholder

    const newAd = {
        id: `ad-${Date.now()}`,
        title,
        price,
        category,
        city,
        description,
        images,
        date: new Date().toISOString().split('T')[0],
        seller: {
            name: "Вы",
            phone,
            rating: 5.0,
            verified: localStorage.getItem('lalafo_user_verified') === 'true'
        },
        vip: false
    };

    // Save to beginning of ads list
    ads.unshift(newAd);
    localStorage.setItem('lalafo_ads', JSON.stringify(ads));

    // Reset Form & Close Modal
    postAdForm.reset();
    closeActiveModals();

    // Re-render
    renderAds();
    
    // Notify
    alert("Объявление успешно опубликовано!");
}

// Open Ad Details View
function openAdDetails(ad) {
    activeAdDetail = ad;
    let activeImgIndex = 0;

    const priceFormatted = new Intl.NumberFormat('ru-RU').format(ad.price);

    adDetailModal.innerHTML = `
        <div class="modal-container detail-modal-container">
            <button class="modal-close">&times;</button>
            <div class="detail-layout">
                <div class="detail-gallery">
                    <img src="${ad.images[activeImgIndex]}" class="detail-main-img" id="detail-main-img" alt="${ad.title}">
                    ${ad.images.length > 1 ? `
                        <button class="gallery-nav gallery-prev" id="gallery-prev">&#10094;</button>
                        <button class="gallery-nav gallery-next" id="gallery-next">&#10095;</button>
                    ` : ''}
                </div>
                <div class="detail-info">
                    <div class="detail-header">
                        <div class="detail-meta-tags">
                            <span class="meta-tag">${getCategoryNameRu(ad.category)}</span>
                            <span class="meta-tag">${ad.city}</span>
                            ${ad.vip ? '<span class="meta-tag vip-tag">VIP</span>' : ''}
                        </div>
                        <div class="detail-price">${priceFormatted} KGS</div>
                        <h1 class="detail-title">${ad.title}</h1>
                    </div>
                    
                    <div class="detail-section">
                        <div class="detail-section-title">Описание</div>
                        <p class="detail-desc">${ad.description}</p>
                    </div>

                    <div class="detail-section">
                        <div class="detail-section-title">Продавец</div>
                        <div class="seller-card">
                            <div class="seller-avatar">${ad.seller.name.charAt(0).toUpperCase()}</div>
                            <div class="seller-details">
                                <h4 style="display: flex; align-items: center; gap: 4px;">
                                    ${ad.seller.name}
                                    ${ad.seller.verified ? `
                                    <span class="verified-badge-icon" title="Проверенный продавец">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                        </svg>
                                    </span>` : ''}
                                </h4>
                                <div class="seller-rating">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                    <span>${ad.seller.rating}</span>
                                </div>
                            </div>
                        </div>

                        <div class="detail-action-buttons" style="display: flex; flex-direction: column; gap: 10px; width: 100%;">
                            <button class="btn-show-contact" id="btn-show-contact" data-phone="${ad.seller.phone}">Показать номер телефона</button>
                            <div style="display: flex; gap: 12px; width: 100%;">
                                <button class="btn-chat-seller" id="btn-chat-seller" style="flex: 1;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                    Написать продавцу
                                </button>
                                ${ad.seller.name !== "Вы" ? `
                                <button class="btn-buy-safe" id="btn-buy-safe-deal" style="flex: 1.2;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                                    </svg>
                                    Купить через Безопасную сделку
                                </button>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    openModal(adDetailModal);

    // Bind inside-modal events
    const closeBtn = adDetailModal.querySelector('.modal-close');
    closeBtn.addEventListener('click', closeActiveModals);

    // Show Contact Number
    const showContactBtn = adDetailModal.querySelector('#btn-show-contact');
    showContactBtn.addEventListener('click', () => {
        showContactBtn.textContent = showContactBtn.dataset.phone;
        showContactBtn.style.border = '1px solid var(--border-color)';
        showContactBtn.style.color = 'var(--text-primary)';
        showContactBtn.style.background = 'var(--bg-tertiary)';
    });

    // Gallery navigation
    if (ad.images.length > 1) {
        const mainImg = adDetailModal.querySelector('#detail-main-img');
        const prevBtn = adDetailModal.querySelector('#gallery-prev');
        const nextBtn = adDetailModal.querySelector('#gallery-next');

        prevBtn.addEventListener('click', () => {
            activeImgIndex = (activeImgIndex - 1 + ad.images.length) % ad.images.length;
            mainImg.src = ad.images[activeImgIndex];
        });

        nextBtn.addEventListener('click', () => {
            activeImgIndex = (activeImgIndex + 1) % ad.images.length;
            mainImg.src = ad.images[activeImgIndex];
        });
    }

    // Chat Action
    const chatSellerBtn = adDetailModal.querySelector('#btn-chat-seller');
    chatSellerBtn.addEventListener('click', () => {
        closeActiveModals();
        openChatWithSeller(ad);
    });

    // Buy Safe Action
    const buySafeBtn = adDetailModal.querySelector('#btn-buy-safe-deal');
    if (buySafeBtn) {
        buySafeBtn.addEventListener('click', () => {
            closeActiveModals();
            openSafeDealCheckout(ad);
        });
    }
}

function getCategoryNameRu(cat) {
    const mapping = {
        'realestate': 'Недвижимость',
        'cars': 'Авто',
        'electronics': 'Электроника',
        'jobs': 'Работа',
        'services': 'Услуги',
        'fashion': 'Одежда',
        'homegarden': 'Дом и Сад'
    };
    return mapping[cat] || cat;
}

// Chat System Simulation
let chatHistory = {};

function openChatWithSeller(ad) {
    const seller = ad.seller;
    
    // Set Header
    document.getElementById('chat-seller-name').innerHTML = `
        ${seller.name}
        ${seller.verified ? `
        <span class="verified-badge-icon" style="color: #60a5fa; margin-left: 2px;" title="Проверенный продавец">
            <svg viewBox="0 0 24 24" style="width: 14px; height: 14px;">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
        </span>` : ''}
    `;
    document.getElementById('chat-seller-avatar').textContent = seller.name.charAt(0).toUpperCase();

    // Load or Init History
    if (!chatHistory[ad.id]) {
        chatHistory[ad.id] = [
            {
                sender: 'seller',
                text: `Здравствуйте! Вы интересуетесь объявлением "${ad.title}" за ${new Intl.NumberFormat('ru-RU').format(ad.price)} KGS?`,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
        ];
    }

    renderChatMessages(ad.id);
    chatWidget.dataset.adId = ad.id;
    chatWidget.classList.add('active');

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function renderChatMessages(adId) {
    chatMessages.innerHTML = '';
    const messages = chatHistory[adId] || [];

    messages.forEach((msg, idx) => {
        const div = document.createElement('div');
        div.className = `msg ${msg.sender === 'seller' ? 'received' : 'sent'}`;
        
        const isReceived = msg.sender === 'seller';

        div.innerHTML = `
            <div class="msg-text">${msg.text}</div>
            ${isReceived ? `
            <div class="msg-actions-toolbar">
                <button type="button" class="btn-msg-translate" onclick="translateMessage(this, ${idx}, '${adId}')">
                    🌐 Перевести
                </button>
            </div>` : ''}
            <div style="font-size: 9px; opacity: 0.6; text-align: right; margin-top: 4px;">${msg.time}</div>
        `;
        chatMessages.appendChild(div);
    });

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendChatMessage() {
    const text = chatInput.value.trim();
    const adId = chatWidget.dataset.adId;
    if (!text || !adId) return;

    // User Message
    const userMsg = {
        sender: 'user',
        text: text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    chatHistory[adId].push(userMsg);
    renderChatMessages(adId);
    chatInput.value = '';

    // Simulate Seller typing response
    setTimeout(() => {
        const responses = [
            "Ооба, баары жайында. Качан келип көрөсүз?",
            "Саламатсызбы! Баасы акыркы, түшпөйм.",
            "Да, всё в силе. Когда вам удобно посмотреть?",
            "Товар еще продается. Торг уместен в разумных пределах.",
            "Здравствуйте! Могу скинуть дополнительные фото в WhatsApp.",
            "Да, могу отправить курьером или встретиться лично.",
            "Цена окончательная, уступать больше не буду."
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        const sellerMsg = {
            sender: 'seller',
            text: randomResponse,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        chatHistory[adId].push(sellerMsg);
        renderChatMessages(adId);
    }, 1500);
}

/* --- AI Assistant & Seller Verification Logic --- */

// State variables
let currentVerificationStep = 1;
let verifyDocBase64 = "";
let bioStream = null;
let aiGeneratedAdData = null;

// Template data for AI Generation
const AI_TEMPLATES = {
    iphone: {
        title: "iPhone 15 Pro Max 256GB Natural Titanium, новый",
        price: 89000,
        category: "electronics",
        desc: "Продаю абсолютно новый iPhone 15 Pro Max на 256 ГБ.\nЦвет: Натуральный титан.\nСостояние: 10/10, коробка запечатана, не вскрывался.\nОригинальное качество, привезен из Дубая. Официальная гарантия 1 год от Apple. В подарок отдам защитное стекло и премиум силиконовый чехол."
    },
    bmw: {
        title: "BMW M4 Competition Coupe 3.0, 2022 год",
        price: 5800000,
        category: "cars",
        desc: "Продается заряженная BMW M4 Competition Coupe.\nГод выпуска: 2022.\nПробег: 12,500 км.\nДвигатель: 3.0 л (510 л.с.) Twin-Turbo.\nЦвет: Brooklyn Grey (серый матовый).\nСостояние идеальное, без сколов и царапин. Кузов полностью в бронепленке. Обслуживание проводилось строго каждые 5000 км в официальном дилерском центре. Салон — кожа Merino. Богатая комплектация с карбоновыми ковшами."
    },
    flat: {
        title: "2-комнатная квартира, 60 м², 5/12 этаж, дизайнерский ремонт",
        price: 6500000,
        category: "realestate",
        desc: "Продается просторная и светлая двухкомнатная квартира в элитном жилом комплексе.\nРайон: Южная Магистраль / ул. Баха.\nЭтаж: 5 из 12.\nПлощадь: 60 кв.м.\nВ квартире выполнен качественный дизайнерский ремонт по индивидуальному проекту. Теплые полы во всех комнатах, качественная сантехника Grohe. Полностью меблирована и оснащена встроенной бытовой техникой от Bosch. Отличный вид из окна, охраняемый закрытый двор."
    },
    sofa: {
        title: "Мягкий велюровый диван в гостиную, новый",
        price: 25000,
        category: "homegarden",
        desc: "Продается новый раскладной диван высокого качества.\nОбивка: премиальный износостойкий велюр изумрудного цвета, приятный на ощупь и легкий в уходе.\nКаркас: натуральное дерево (сосна) и прочный металлокаркас.\nРазмеры: в сложенном виде — 215х95 см, спальное место — 190х140 см.\nНаполнитель: ортопедический независимый пружинный блок. Имеется глубокий ящик для постельного белья. Доставка по Бишкеку бесплатная!"
    },
    jacket: {
        title: "Кожаная куртка Zara Man, размер L, идеальное состояние",
        price: 4200,
        category: "fashion",
        desc: "Продаю мужскую куртку Zara.\nКоллекция прошлого сезона.\nМатериал: высококачественная мягкая эко-кожа.\nРазмер: L (48-50).\nСостояние новой вещи, надевалась от силы 3-4 раза. Причина продажи — не подошел размер в плечах после зимы. Качественные молнии и фурнитура, стильный крой косухи."
    },
    bike: {
        title: "Горный велосипед Giant Talon 3, колеса 29\"",
        price: 32000,
        category: "homegarden",
        desc: "Продаю отличный полупрофессиональный горный велосипед Giant Talon 3.\nРазмер рамы: M (на рост 170-182 см).\nКолеса: 29 дюймов с двойными ободами.\nСкорости: 24 (навесное оборудование Shimano Altus).\nТормоза: дисковые гидравлические Tektro (тормозят отлично в любую погоду).\nУстановлена амортизационная вилка SR Suntour XCT с регулировкой жесткости и блокировкой хода. Велосипед полностью настроен, смазан и готов к сезону."
    }
};

// --- Verification functions ---

function updateVerificationHeader() {
    const isVerified = localStorage.getItem('lalafo_user_verified') === 'true';
    const verifyBtn = document.getElementById('verify-profile-btn');
    const verifyText = document.getElementById('verify-btn-text');
    
    if (verifyBtn && verifyText) {
        if (isVerified) {
            verifyBtn.classList.add('verified');
            verifyText.textContent = "Проверен";
            verifyBtn.querySelector('.verification-btn-icon').innerHTML = `
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
            `;
        } else {
            verifyBtn.classList.remove('verified');
            verifyText.textContent = "Верификация";
            verifyBtn.querySelector('.verification-btn-icon').innerHTML = `
                <circle cx="12" cy="8" r="4"></circle>
                <path d="M18 21a6 6 0 0 0-12 0"></path>
            `;
        }
    }
}

function openVerificationModal() {
    const isVerified = localStorage.getItem('lalafo_user_verified') === 'true';
    const modal = document.getElementById('verification-modal');
    
    if (isVerified) {
        // If verified, display verified summary with reset option
        const verifyBody = modal.querySelector('.verify-body');
        const verifyFooter = document.getElementById('verify-footer-actions');
        
        modal.querySelector('.verify-steps').style.display = 'none';
        modal.querySelector('.verify-header p').textContent = "Ваш аккаунт имеет статус подтвержденного.";
        
        verifyBody.innerHTML = `
            <div class="verify-success-box" style="animation: fadeIn 0.4s ease;">
                <div class="verify-success-seal" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8);">
                    <svg viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                </div>
                <h3 style="font-size: 20px; font-weight: 700; color: #3b82f6; margin-bottom: 8px;">Вы проверенный продавец</h3>
                <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.5; max-width: 400px; margin: 0 auto 24px;">
                    Ваш паспорт и биометрические данные успешно подтверждены. Покупатели видят значок верификации у ваших объявлений.
                </p>
                <button type="button" class="btn-ai-cancel" id="btn-reset-verification-test" style="border-color: var(--danger); color: var(--danger); font-size: 13px; padding: 10px 20px;">
                    Сбросить верификацию (для теста)
                </button>
            </div>
        `;
        
        verifyFooter.innerHTML = `
            <button class="btn-ai-apply" style="margin-top: 0; width: 100%;" onclick="document.getElementById('verification-modal').classList.remove('active')">Понятно</button>
        `;
        
        openModal(modal);
        
        // Bind reset button
        document.getElementById('btn-reset-verification-test').addEventListener('click', () => {
            localStorage.removeItem('lalafo_user_verified');
            // Reset all user ads in localStorage
            ads.forEach(ad => {
                if (ad.seller.name === "Вы") {
                    ad.seller.verified = false;
                }
            });
            localStorage.setItem('lalafo_ads', JSON.stringify(ads));
            
            updateVerificationHeader();
            renderAds();
            closeActiveModals();
            alert("Статус верификации сброшен. Вы можете пройти её снова.");
        });
        
    } else {
        // Restore standard wizard layout
        const modalHtml = document.getElementById('verification-modal');
        // Restore steps display
        modalHtml.querySelector('.verify-steps').style.display = 'flex';
        modalHtml.querySelector('.verify-header p').textContent = "Подтвердите личность, чтобы получить бейдж «Проверенный продавец» и повысить доверие покупателей.";
        
        // Reset steps content HTML
        restoreVerificationWizardUI();
        
        currentVerificationStep = 1;
        showVerificationStep(1);
        openModal(modalHtml);
    }
}

function restoreVerificationWizardUI() {
    const modal = document.getElementById('verification-modal');
    const verifyBody = modal.querySelector('.verify-body');
    const verifyFooter = document.getElementById('verify-footer-actions');
    
    verifyBody.innerHTML = `
        <!-- Step 1: Personal Data Form -->
        <div class="verify-step-content active" id="verify-step-1">
            <div class="form-group">
                <label for="verify-name">ФИО полностью *</label>
                <input type="text" id="verify-name" placeholder="Например: Саматов Нурбек Асанович" required>
            </div>
            <div class="form-group">
                <label for="verify-dob">Дата рождения *</label>
                <input type="date" id="verify-dob" required>
            </div>
            <div class="form-group">
                <label for="verify-doc-type">Тип документа *</label>
                <select id="verify-doc-type" required>
                    <option value="id-card">ID-карта (паспорт КР)</option>
                    <option value="passport">Заграничный паспорт</option>
                    <option value="driver">Водительское удостоверение</option>
                </select>
            </div>
        </div>
        
        <!-- Step 2: Document Upload Simulation -->
        <div class="verify-step-content" id="verify-step-2">
            <p style="margin-bottom: 16px; font-size: 14px; color: var(--text-secondary);">
                Загрузите качественное фото лицевой стороны вашего документа. Все данные должны быть четко различимы.
            </p>
            <div class="document-upload-mock" id="document-upload-trigger" onclick="document.getElementById('verify-doc-input').click()">
                <div class="document-icon-box">📂</div>
                <p style="font-size: 14px; font-weight: 500; margin-bottom: 4px;" id="verify-doc-status-title">Выбрать файл документа</p>
                <p style="font-size: 11px; color: var(--text-muted);">Поддерживаются форматы JPG, PNG до 10 МБ</p>
                <input type="file" id="verify-doc-input" accept="image/*" style="display: none;" onchange="handleVerifyDocUpload(this)">
            </div>
            <div id="verify-doc-preview-container" style="display: none; margin-top: 16px; position: relative; border-radius: 8px; overflow: hidden; height: 160px; border: 1px solid var(--border-color);">
                <img id="verify-doc-preview" src="" style="width: 100%; height: 100%; object-fit: cover;">
                <button type="button" id="verify-doc-remove" onclick="removeVerifyDoc()" style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.6); color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">&times;</button>
            </div>
        </div>
        
        <!-- Step 3: Biometrics Simulation -->
        <div class="verify-step-content" id="verify-step-3">
            <p style="margin-bottom: 16px; font-size: 14px; color: var(--text-secondary); text-align: center;">
                Поместите лицо в рамку и посмотрите прямо в камеру для сверки биометрии.
            </p>
            <div class="biometric-scanner">
                <div class="bio-avatar-mock" id="bio-avatar-icon">👤</div>
                <div class="bio-scanning-ring"></div>
                <div class="bio-scan-line" id="bio-scan-line-element" style="display: none;"></div>
                <div class="bio-face-dots"></div>
                <!-- Mock Video Stream -->
                <video id="bio-video-mock" style="display: none; width: 100%; height: 100%; object-fit: cover; transform: scaleX(-1);"></video>
            </div>
            <div style="text-align: center;">
                <button type="button" class="btn-search" id="btn-start-biometrics" onclick="startBiometricScan()" style="padding: 10px 24px; font-size: 14px;">
                    Начать сканирование лица
                </button>
            </div>
        </div>
        
        <!-- Step 4: AI Analysis Loading Screen -->
        <div class="verify-step-content" id="verify-step-4" style="text-align: center; padding: 40px 0;">
            <div class="ai-status-loader"></div>
            <h3 class="ai-status-title" style="margin-top: 16px;" id="verify-progress-title">Нейросеть обрабатывает данные</h3>
            <p class="ai-status-desc" id="verify-progress-desc">Считываем MRZ-зону и проверяем подлинность паспорта...</p>
            <div style="width: 100%; background: var(--bg-tertiary); height: 6px; border-radius: 3px; margin-top: 24px; overflow: hidden;">
                <div id="verify-progress-bar" style="background: var(--primary); height: 100%; width: 0%; transition: width 0.3s ease;"></div>
            </div>
        </div>
        
        <!-- Step 5: Success screen -->
        <div class="verify-step-content" id="verify-step-5">
            <div class="verify-success-box">
                <div class="verify-success-seal">
                    <svg viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                </div>
                <h3 style="font-size: 20px; font-weight: 700; color: var(--accent); margin-bottom: 8px;">Личность успешно подтверждена!</h3>
                <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.5; max-width: 400px; margin: 0 auto 16px;">
                    Поздравляем! Ваш профиль успешно прошел проверку. Теперь рядом с вашим именем будет отображаться бейдж <strong>«Проверенный продавец»</strong>.
                </p>
                <span class="verified-badge-inline" style="font-size: 14px; padding: 6px 16px;">
                    <svg class="verified-badge-icon" style="margin-left: 0; margin-right: 4px; color: #3b82f6; width: 18px; height: 18px;" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Проверенный продавец
                </span>
            </div>
        </div>
    `;
    
    verifyFooter.innerHTML = `
        <button class="btn-ai-cancel" id="verify-prev-btn" style="display: none;" onclick="handleVerifyPrevStep()">Назад</button>
        <button class="btn-ai-apply" id="verify-next-btn" style="margin-top: 0; width: auto; min-width: 140px;" onclick="handleVerifyNextStep()">Далее</button>
    `;
    
    // reset variables
    verifyDocBase64 = "";
    if (bioStream) {
        stopBioVideo();
    }
}

function showVerificationStep(step) {
    // Hide all contents
    document.querySelectorAll('.verify-step-content').forEach(c => c.classList.remove('active'));
    // Show current
    const targetContent = document.getElementById(`verify-step-${step}`);
    if (targetContent) targetContent.classList.add('active');
    
    // Update step markers
    for (let i = 1; i <= 3; i++) {
        const node = document.getElementById(`verify-step-node-${i}`);
        if (!node) continue;
        
        node.classList.remove('active', 'completed');
        if (i === step) {
            node.classList.add('active');
        } else if (i < step) {
            node.classList.add('completed');
        }
    }
    
    // Update footer actions
    const prevBtn = document.getElementById('verify-prev-btn');
    const nextBtn = document.getElementById('verify-next-btn');
    const footer = document.getElementById('verify-footer-actions');
    
    if (step === 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'block';
        nextBtn.textContent = 'Далее';
    } else if (step === 2) {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        nextBtn.textContent = 'Далее';
    } else if (step === 3) {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        nextBtn.textContent = 'Подтвердить биометрию';
        nextBtn.disabled = true; // Disabled until biometric scanning finishes
    } else if (step === 4) {
        // Scanning loader, hide footer buttons
        footer.style.display = 'none';
    } else if (step === 5) {
        // Success screen, show Close button
        footer.style.display = 'flex';
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'block';
        nextBtn.textContent = 'Завершить';
        nextBtn.disabled = false;
        nextBtn.style.width = '100%';
    }
}

function handleVerifyPrevStep() {
    if (currentVerificationStep > 1 && currentVerificationStep <= 3) {
        currentVerificationStep--;
        showVerificationStep(currentVerificationStep);
    }
}

function handleVerifyNextStep() {
    if (currentVerificationStep === 1) {
        // Validate name and date
        const name = document.getElementById('verify-name').value.trim();
        const dob = document.getElementById('verify-dob').value;
        
        if (!name || !dob) {
            alert("Пожалуйста, заполните ФИО и дату рождения.");
            return;
        }
        
        currentVerificationStep = 2;
        showVerificationStep(2);
    } else if (currentVerificationStep === 2) {
        // Validate doc upload
        if (!verifyDocBase64) {
            alert("Пожалуйста, загрузите фотографию документа.");
            return;
        }
        
        currentVerificationStep = 3;
        showVerificationStep(3);
    } else if (currentVerificationStep === 3) {
        // User clicks verify biometric, this goes to AI analysis loader
        currentVerificationStep = 4;
        showVerificationStep(4);
        runVerifyAIAnalysis();
    } else if (currentVerificationStep === 5) {
        // Success step finish
        localStorage.setItem('lalafo_user_verified', 'true');
        
        // Update user submitted ads
        ads.forEach(ad => {
            if (ad.seller.name === "Вы") {
                ad.seller.verified = true;
            }
        });
        localStorage.setItem('lalafo_ads', JSON.stringify(ads));
        
        updateVerificationHeader();
        renderAds();
        closeActiveModals();
    }
}

function handleVerifyDocUpload(inputEl) {
    const file = inputEl.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        verifyDocBase64 = e.target.result;
        
        // Show preview
        document.getElementById('verify-doc-preview').src = verifyDocBase64;
        document.getElementById('verify-doc-preview-container').style.display = 'block';
        document.getElementById('document-upload-trigger').style.display = 'none';
    };
    reader.readAsDataURL(file);
}

function removeVerifyDoc() {
    verifyDocBase64 = "";
    document.getElementById('verify-doc-preview').src = "";
    document.getElementById('verify-doc-preview-container').style.display = 'none';
    document.getElementById('document-upload-trigger').style.display = 'block';
    
    // clear input value
    const input = document.getElementById('verify-doc-input');
    if (input) input.value = "";
}

function startBiometricScan() {
    const video = document.getElementById('bio-video-mock');
    const avatar = document.getElementById('bio-avatar-icon');
    const scanLine = document.getElementById('bio-scan-line-element');
    const btn = document.getElementById('btn-start-biometrics');
    
    btn.disabled = true;
    btn.textContent = "Идет сканирование...";
    scanLine.style.display = 'block';
    
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            bioStream = stream;
            video.srcObject = stream;
            video.play();
            video.style.display = 'block';
            avatar.style.display = 'none';
            
            // Wait 3.5 seconds to scan
            setTimeout(completeBiometricScan, 3500);
        })
        .catch(err => {
            console.log("Camera access not available, using silhouette simulator", err);
            // Fallback: visual effect
            avatar.style.color = '#3b82f6';
            avatar.style.animation = 'pulse 1s infinite alternate';
            
            setTimeout(completeBiometricScan, 3500);
        });
}

function completeBiometricScan() {
    stopBioVideo();
    const btn = document.getElementById('btn-start-biometrics');
    btn.textContent = "Сканирование завершено!";
    btn.style.background = 'var(--accent)';
    btn.style.color = 'white';
    
    // Enable the "Next" button
    const nextBtn = document.getElementById('verify-next-btn');
    if (nextBtn) nextBtn.disabled = false;
}

function stopBioVideo() {
    const video = document.getElementById('bio-video-mock');
    if (video) {
        video.pause();
        video.srcObject = null;
        video.style.display = 'none';
    }
    const avatar = document.getElementById('bio-avatar-icon');
    if (avatar) {
        avatar.style.display = 'flex';
        avatar.style.animation = '';
        avatar.style.color = '';
    }
    const scanLine = document.getElementById('bio-scan-line-element');
    if (scanLine) scanLine.style.display = 'none';
    
    if (bioStream) {
        bioStream.getTracks().forEach(track => track.stop());
        bioStream = null;
    }
}

function runVerifyAIAnalysis() {
    const progressBar = document.getElementById('verify-progress-bar');
    const progressTitle = document.getElementById('verify-progress-title');
    const progressDesc = document.getElementById('verify-progress-desc');
    
    progressBar.style.width = '0%';
    let width = 0;
    
    const interval = setInterval(() => {
        width += 2;
        progressBar.style.width = `${width}%`;
        
        if (width < 30) {
            progressTitle.textContent = "Сканирование паспорта...";
            progressDesc.textContent = "Считываем MRZ-зону документа, извлекаем имя и фотографию...";
        } else if (width < 60) {
            progressTitle.textContent = "Верификация биометрии...";
            progressDesc.textContent = "Производим сопоставление лица с биометрическим сканом камеры...";
        } else if (width < 90) {
            progressTitle.textContent = "Проверка по государственным реестрам...";
            progressDesc.textContent = "Запрос в ЕГРН и базу активных документов МВД КР...";
        } else {
            progressTitle.textContent = "Финальное подтверждение нейросетью...";
            progressDesc.textContent = "Сбор цифровой подписи верификации...";
        }
        
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                currentVerificationStep = 5;
                showVerificationStep(5);
            }, 500);
        }
    }, 80);
}

// --- AI Ad Assistant logic ---

function runAIAssistant() {
    if (uploadedImages.length === 0) {
        alert("Пожалуйста, сначала загрузите хотя бы одну фотографию!");
        return;
    }
    
    const modal = document.getElementById('ai-assistant-modal');
    const previewImg = document.getElementById('ai-scanner-preview-img');
    
    // Set preview image
    previewImg.src = uploadedImages[0];
    
    // Show scanning panel
    document.getElementById('ai-screen-scanning').style.display = 'block';
    document.getElementById('ai-screen-results').style.display = 'none';
    document.getElementById('ai-object-selector').style.display = 'none';
    document.getElementById('ai-scan-status-panel').style.display = 'flex';
    
    openModal(modal);
    
    // Simulate image scanning for 1.8 seconds
    setTimeout(() => {
        document.getElementById('ai-scan-status-panel').style.display = 'none';
        
        // Show selection selector
        const selector = document.getElementById('ai-object-selector');
        selector.style.display = 'block';
        
        // Populate choices
        populateAIChoices();
    }, 1800);
}

function populateAIChoices() {
    const container = document.getElementById('ai-options-container');
    container.innerHTML = '';
    
    // Detect suggested key from filename if possible
    let suggestedKey = "";
    const fileInput = document.getElementById('image-upload');
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
        const name = fileInput.files[0].name.toLowerCase();
        if (name.includes("iphone") || name.includes("phone") || name.includes("apple") || name.includes("mob")) suggestedKey = "iphone";
        else if (name.includes("bmw") || name.includes("car") || name.includes("auto") || name.includes("m4")) suggestedKey = "bmw";
        else if (name.includes("flat") || name.includes("apartment") || name.includes("house") || name.includes("room") || name.includes("kvartira")) suggestedKey = "flat";
        else if (name.includes("sofa") || name.includes("couch") || name.includes("divan") || name.includes("mebel")) suggestedKey = "sofa";
        else if (name.includes("jacket") || name.includes("coat") || name.includes("zara") || name.includes("odezhda")) suggestedKey = "jacket";
        else if (name.includes("bike") || name.includes("bicycle") || name.includes("giant") || name.includes("velosiped")) suggestedKey = "bike";
    }
    
    const options = [
        { label: "📱 iPhone 15 Pro Max", key: "iphone" },
        { label: "🚗 BMW M4 Competition", key: "bmw" },
        { label: "🏠 Двухкомнатная квартира", key: "flat" },
        { label: "🛋️ Велюровый диван", key: "sofa" },
        { label: "🧥 Кожаная куртка Zara", key: "jacket" },
        { label: "🚲 Велосипед Giant Talon", key: "bike" }
    ];
    
    // Reorder options to put suggested first
    if (suggestedKey) {
        const index = options.findIndex(o => o.key === suggestedKey);
        if (index > -1) {
            const item = options.splice(index, 1)[0];
            item.label += " (ИИ рекомендует ✨)";
            options.unshift(item);
        }
    }
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'ai-option-btn';
        if (opt.key === suggestedKey) {
            btn.style.borderColor = '#8b5cf6';
            btn.style.background = 'rgba(139, 92, 246, 0.05)';
            btn.style.fontWeight = '600';
        }
        btn.innerHTML = opt.label;
        btn.addEventListener('click', () => generateAIData(opt.key));
        container.appendChild(btn);
    });
}

function generateAIData(key) {
    const data = AI_TEMPLATES[key];
    if (!data) return;
    
    aiGeneratedAdData = data;
    
    // Switch to results screen
    document.getElementById('ai-screen-scanning').style.display = 'none';
    document.getElementById('ai-screen-results').style.display = 'block';
    
    // Clear results UI
    const titleEl = document.getElementById('ai-res-title');
    const priceEl = document.getElementById('ai-res-price');
    const categoryEl = document.getElementById('ai-res-category');
    const descEl = document.getElementById('ai-res-desc');
    
    titleEl.textContent = "";
    priceEl.textContent = "";
    categoryEl.textContent = "";
    descEl.textContent = "";
    
    // Disable apply button until typed
    const applyBtn = document.getElementById('ai-res-apply-btn');
    applyBtn.disabled = true;
    applyBtn.style.opacity = '0.5';
    
    // Typing simulation (multithreaded feel)
    let titleFinished = false;
    let priceFinished = false;
    let descFinished = false;
    
    function checkCompletion() {
        if (titleFinished && priceFinished && descFinished) {
            applyBtn.disabled = false;
            applyBtn.style.opacity = '1';
        }
    }
    
    // Type Title
    typeTextEffect('ai-res-title', data.title, 8, () => {
        titleFinished = true;
        checkCompletion();
    });
    
    // Type Price
    setTimeout(() => {
        typeTextEffect('ai-res-price', `${new Intl.NumberFormat('ru-RU').format(data.price)} KGS`, 15, () => {
            priceFinished = true;
            checkCompletion();
        });
        categoryEl.textContent = getCategoryNameRu(data.category);
    }, 300);
    
    // Type Description
    setTimeout(() => {
        typeTextEffect('ai-res-desc', data.desc, 4, () => {
            descFinished = true;
            checkCompletion();
        });
    }, 600);
}

function typeTextEffect(elementId, text, speed, callback) {
    const el = document.getElementById(elementId);
    el.textContent = "";
    let index = 0;
    
    const timer = setInterval(() => {
        if (index < text.length) {
            el.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(timer);
            if (callback) callback();
        }
    }, speed);
}

function applyAIGeneratedData() {
    if (!aiGeneratedAdData) return;
    
    // Set form fields
    document.getElementById('ad-title').value = aiGeneratedAdData.title;
    document.getElementById('ad-price').value = aiGeneratedAdData.price;
    document.getElementById('ad-category').value = aiGeneratedAdData.category;
    document.getElementById('ad-desc').value = aiGeneratedAdData.desc;
    
    // Close AI Modal
    document.getElementById('ai-assistant-modal').classList.remove('active');
    
    // Add success toast
    alert("Данные объявления успешно заполнены искусственным интеллектом!");
}

/* --- Escrow Safe Deals & Advanced Chat Upgrades Logic --- */

// State variables
let safeDeals = [];

// Translation Dictionary for simulated neural translator
const TRANSLATION_DICTIONS = {
    "Ооба, баары жайында. Качан келип көрөсүз?": "Да, все в порядке. Когда приедете посмотреть?",
    "Саламатсызбы! Баасы акыркы, түшпөйм.": "Здравствуйте! Цена окончательная, не снижу.",
    "Да, всё в силе. Когда вам удобно посмотреть?": "Ооба, баары күчүндө. Качан көрүүгө ыңгайлуу болот?",
    "Товар еще продается. Торг уместен в разумных пределах.": "Буюм дагы эле сатылууда. Соодалашуу акылга сыярлык чектен ишке ашат.",
    "Здравствуйте! Могу скинуть дополнительные фото в WhatsApp.": "Саламатсызбы! Мен WhatsApp аркылуу кошумча сүрөттөрдү жөнөтө алам.",
    "Да, могу отправить курьером или встретиться лично.": "Ооба, мен курьер менен жөнөтө алам же жеке жолугуша алам.",
    "Цена окончательная, уступать больше не буду.": "Баасы акыркы, мындан ары түшпөйм."
};

function setupEscrowAndChatUpgrades() {
    // Load Safe Deals
    const storedDeals = localStorage.getItem('lalafo_safe_deals');
    if (storedDeals) {
        safeDeals = JSON.parse(storedDeals);
    } else {
        safeDeals = [];
        localStorage.setItem('lalafo_safe_deals', JSON.stringify(safeDeals));
    }

    // Checkout modal event listeners
    const checkoutClose = document.getElementById('checkout-modal-close');
    if (checkoutClose) {
        checkoutClose.addEventListener('click', () => {
            document.getElementById('safe-deal-checkout-modal').classList.remove('active');
        });
    }

    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckoutSubmit);
    }

    // Auto format credit card number
    const cardNumInput = document.getElementById('card-number');
    if (cardNumInput) {
        cardNumInput.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            let matches = v.match(/\d{4,16}/g);
            let match = matches && matches[0] || '';
            let parts = [];

            for (let i=0, len=match.length; i<len; i+=4) {
                parts.push(match.substring(i, i+4));
            }

            if (parts.length > 0) {
                e.target.value = parts.join(' ');
            } else {
                e.target.value = v;
            }
        });
    }

    // Auto format card expiry date
    const cardExpiryInput = document.getElementById('card-expiry');
    if (cardExpiryInput) {
        cardExpiryInput.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            if (v.length >= 2) {
                e.target.value = v.substring(0, 2) + '/' + v.substring(2, 4);
            } else {
                e.target.value = v;
            }
        });
    }

    // Deals tracker trigger
    const dealsBtn = document.getElementById('deals-tracker-btn');
    if (dealsBtn) {
        dealsBtn.addEventListener('click', openMyDeals);
    }

    const dealsClose = document.getElementById('my-deals-modal-close');
    if (dealsClose) {
        dealsClose.addEventListener('click', () => {
            document.getElementById('my-deals-modal').classList.remove('active');
        });
    }

    // Chat Quick Replies click handler
    const quickRepliesContainer = document.getElementById('chat-quick-replies');
    if (quickRepliesContainer) {
        quickRepliesContainer.addEventListener('click', (e) => {
            const pill = e.target.closest('.quick-reply-pill');
            if (!pill) return;
            
            const text = pill.textContent.trim();
            const adId = chatWidget.dataset.adId;
            if (!text || !adId) return;

            // Send quick message
            chatInput.value = text;
            sendChatMessage();
        });
    }
}

// Open checkout panel
function openSafeDealCheckout(ad) {
    document.getElementById('checkout-product-title').textContent = ad.title;
    document.getElementById('checkout-product-price').textContent = `${new Intl.NumberFormat('ru-RU').format(ad.price)} KGS`;
    
    // Clear inputs
    document.getElementById('card-number').value = "";
    document.getElementById('card-expiry').value = "";
    document.getElementById('card-cvv').value = "";
    document.getElementById('checkout-address').value = "";

    // Save ad context globally to use on form submit
    document.getElementById('checkout-form').dataset.adId = ad.id;

    openModal(document.getElementById('safe-deal-checkout-modal'));
}

// Handle payment form submit
function handleCheckoutSubmit(e) {
    e.preventDefault();
    
    const adId = e.target.dataset.adId;
    const ad = ads.find(a => a.id === adId);
    if (!ad) return;

    const address = document.getElementById('checkout-address').value.trim();

    // Create safe deal record
    const newDeal = {
        id: `deal-${Date.now()}`,
        adId: ad.id,
        title: ad.title,
        price: ad.price,
        image: ad.images[0],
        sellerName: ad.seller.name,
        address: address,
        status: 'reserved', // 'reserved' | 'shipped' | 'delivered' | 'completed' | 'disputed'
        date: new Date().toLocaleDateString('ru-RU')
    };

    safeDeals.unshift(newDeal);
    localStorage.setItem('lalafo_safe_deals', JSON.stringify(safeDeals));

    // Close checkout modal
    document.getElementById('safe-deal-checkout-modal').classList.remove('active');

    // Notify user
    alert("Оплата прошла успешно! Деньги зарезервированы на безопасном счете эскроу. Продавец уведомлен о необходимости отправить товар.");

    // Open active deals view
    openMyDeals();
}

// Open active deals list modal
function openMyDeals() {
    renderDealsList();
    openModal(document.getElementById('my-deals-modal'));
}

// Render active safe deals list
function renderDealsList() {
    const container = document.getElementById('deals-list-container');
    container.innerHTML = "";

    if (safeDeals.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="padding: 40px 0;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 48px; height: 48px; color: var(--text-muted); margin-bottom: 12px;">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                </svg>
                <h3>У вас пока нет покупок</h3>
                <p>Покупайте товары со знаком «Безопасная сделка» для защиты ваших денег.</p>
            </div>
        `;
        return;
    }

    safeDeals.forEach(deal => {
        const card = document.createElement('div');
        card.className = 'deal-item-card';

        let statusText = "Зарезервировано";
        let badgeClass = "reserved";
        let progressFillWidth = "0%";
        let step1Class = "completed";
        let step2Class = "";
        let step3Class = "";
        let step4Class = "";
        let step4Label = "Завершено";

        if (deal.status === 'reserved') {
            statusText = "Оплачено (резерв)";
            badgeClass = "reserved";
            progressFillWidth = "0%";
            step2Class = "active";
        } else if (deal.status === 'shipped') {
            statusText = "В пути (отправлено)";
            badgeClass = "shipped";
            progressFillWidth = "50%";
            step2Class = "completed";
            step3Class = "active";
        } else if (deal.status === 'delivered') {
            statusText = "Доставлено";
            badgeClass = "delivered";
            progressFillWidth = "100%";
            step2Class = "completed";
            step3Class = "completed";
            step4Class = "active";
        } else if (deal.status === 'completed') {
            statusText = "Выплачено продавцу";
            badgeClass = "completed";
            progressFillWidth = "100%";
            step2Class = "completed";
            step3Class = "completed";
            step4Class = "completed";
        } else if (deal.status === 'disputed') {
            statusText = "Спор открыт";
            badgeClass = "disputed";
            progressFillWidth = "100%";
            step2Class = "completed";
            step3Class = "completed";
            step4Class = "disputed";
            step4Label = "Спор";
        }

        const priceFormatted = new Intl.NumberFormat('ru-RU').format(deal.price);

        card.innerHTML = `
            <div class="deal-card-header">
                <span class="deal-id-tag">ID: ${deal.id}</span>
                <span class="deal-status-badge ${badgeClass}">${statusText}</span>
            </div>
            
            <div class="deal-card-body">
                <img src="${deal.image}" class="deal-prod-img" onerror="this.src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300'">
                <div class="deal-prod-details">
                    <h4>${deal.title}</h4>
                    <p style="font-weight: 700; color: var(--accent); font-size: 14px; margin-top: 4px;">${priceFormatted} KGS</p>
                    <p>Продавец: <strong>${deal.sellerName}</strong></p>
                    <p>Адрес доставки: ${deal.address}</p>
                    <p>Дата заказа: ${deal.date}</p>
                </div>
            </div>

            <!-- Stepper Stepper Tracker -->
            <div class="stepper-container">
                <div class="stepper-progress-line">
                    <div class="stepper-progress-fill" style="width: ${progressFillWidth};"></div>
                </div>
                <div class="stepper-node ${step1Class}">
                    <div class="stepper-circle">1</div>
                    <div class="stepper-label">Оплачено</div>
                </div>
                <div class="stepper-node ${step2Class}">
                    <div class="stepper-circle">2</div>
                    <div class="stepper-label">В пути</div>
                </div>
                <div class="stepper-node ${step3Class}">
                    <div class="stepper-circle">3</div>
                    <div class="stepper-label">Доставлено</div>
                </div>
                <div class="stepper-node ${step4Class}">
                    <div class="stepper-circle">4</div>
                    <div class="stepper-label">${step4Label}</div>
                </div>
            </div>

            <!-- Contextual action buttons -->
            <div class="deal-card-actions-wrapper">
                ${deal.status === 'delivered' ? `
                <div class="deal-card-actions">
                    <button class="btn-post-ad" style="background: var(--accent); box-shadow: none;" onclick="confirmItemReceipt('${deal.id}')">Подтвердить получение</button>
                    <button class="btn-reset-filters" style="margin-top: 0;" onclick="disputeDeal('${deal.id}')">Открыть спор</button>
                </div>
                ` : ''}
                
                ${deal.status === 'completed' ? `
                <p style="color: var(--accent); font-size: 13px; font-weight: 500; text-align: center; background: var(--accent-light); padding: 8px; border-radius: 8px;">
                    🤝 Сделка закрыта. Деньги отправлены на карту продавца.
                </p>
                ` : ''}
                
                ${deal.status === 'disputed' ? `
                <p style="color: var(--danger); font-size: 13px; font-weight: 500; text-align: center; background: var(--danger-light); padding: 8px; border-radius: 8px;">
                    ⚠️ Спор на рассмотрении арбитража. Выплата заблокирована.
                </p>
                ` : ''}
            </div>

            <!-- Simulation Controls (for demo purposes) -->
            ${(deal.status === 'reserved' || deal.status === 'shipped') ? `
            <div class="simulation-panel">
                <h5>Панель симуляции (для тестирования)</h5>
                <p>Поскольку это оффлайн-макет, вы можете переключать шаги доставки самостоятельно:</p>
                <div class="simulation-panel-btns">
                    ${deal.status === 'reserved' ? `
                    <button class="btn-simulate-step" onclick="simulateSellerShipment('${deal.id}')">Симулировать отправку продавцом</button>
                    ` : ''}
                    ${deal.status === 'shipped' ? `
                    <button class="btn-simulate-step" onclick="simulateItemDelivery('${deal.id}')">Симулировать доставку курьером</button>
                    ` : ''}
                </div>
            </div>
            ` : ''}
        `;

        container.appendChild(card);
    });
}

function simulateSellerShipment(dealId) {
    const deal = safeDeals.find(d => d.id === dealId);
    if (!deal) return;

    deal.status = 'shipped';
    localStorage.setItem('lalafo_safe_deals', JSON.stringify(safeDeals));
    renderDealsList();
    alert("Товар передан в курьерскую службу. Статус сделки изменен на «В пути»!");
}

function simulateItemDelivery(dealId) {
    const deal = safeDeals.find(d => d.id === dealId);
    if (!deal) return;

    deal.status = 'delivered';
    localStorage.setItem('lalafo_safe_deals', JSON.stringify(safeDeals));
    renderDealsList();
    alert("Товар успешно доставлен покупателю! Подтвердите получение или откройте спор в случае проблем.");
}

function confirmItemReceipt(dealId) {
    const deal = safeDeals.find(d => d.id === dealId);
    if (!deal) return;

    deal.status = 'completed';
    localStorage.setItem('lalafo_safe_deals', JSON.stringify(safeDeals));
    renderDealsList();
    alert("Сделка подтверждена! Зарезервированная сумма выплачена продавцу. Спасибо за покупку!");
}

function disputeDeal(dealId) {
    const deal = safeDeals.find(d => d.id === dealId);
    if (!deal) return;

    deal.status = 'disputed';
    localStorage.setItem('lalafo_safe_deals', JSON.stringify(safeDeals));
    renderDealsList();
    
    // Auto-create chat window with dispute message
    alert("Спор успешно открыт. Средства заморожены. Служба арбитража lalafo подключена к чату сделки.");
}

// --- Chat Translation System logic ---

function translateMessage(btnEl, msgIdx, adId) {
    const chatContainer = chatHistory[adId];
    if (!chatContainer || !chatContainer[msgIdx]) return;
    
    const message = chatContainer[msgIdx];
    const text = message.text;
    
    // Show AI loading dots
    const actionsToolbar = btnEl.parentElement;
    actionsToolbar.innerHTML = `
        <span class="translating-glow">
            Перевод ИИ <span>.</span><span>.</span><span>.</span>
        </span>
    `;
    
    setTimeout(() => {
        // Resolve translation
        let translatedText = "";
        if (TRANSLATION_DICTIONS[text]) {
            translatedText = TRANSLATION_DICTIONS[text];
        } else {
            // General translation fallback: RU -> EN, otherwise mock generic EN text
            const hasCyrillic = /[а-яё]/i.test(text);
            if (hasCyrillic) {
                translatedText = "[English translation]: Hello, yes, this item is available for viewing at your convenience.";
            } else {
                translatedText = "[Перевод на русский]: Привет! Да, товар доступен, вы можете посмотреть его в любое время.";
            }
        }
        
        // Append translation block
        const msgDiv = actionsToolbar.closest('.msg');
        const textBlock = msgDiv.querySelector('.msg-text');
        
        const transBlock = document.createElement('div');
        transBlock.className = 'translation-block';
        transBlock.textContent = translatedText;
        
        // Insert after message text
        textBlock.appendChild(transBlock);
        
        // Remove translating glow
        actionsToolbar.remove();
    }, 800);
}

// Global scope bindings for inline HTML clicks (e.g. toggleFavorite)
window.toggleFavorite = toggleFavorite;
window.removeUploadedImage = removeUploadedImage;
window.openVerificationModal = openVerificationModal;
window.handleVerifyPrevStep = handleVerifyPrevStep;
window.handleVerifyNextStep = handleVerifyNextStep;
window.handleVerifyDocUpload = handleVerifyDocUpload;
window.removeVerifyDoc = removeVerifyDoc;
window.startBiometricScan = startBiometricScan;
window.updateVerificationHeader = updateVerificationHeader;
window.setupEscrowAndChatUpgrades = setupEscrowAndChatUpgrades;
window.openSafeDealCheckout = openSafeDealCheckout;
window.confirmItemReceipt = confirmItemReceipt;
window.disputeDeal = disputeDeal;
window.simulateSellerShipment = simulateSellerShipment;
window.simulateItemDelivery = simulateItemDelivery;
window.translateMessage = translateMessage;

// Run App on Load
window.addEventListener('DOMContentLoaded', init);
