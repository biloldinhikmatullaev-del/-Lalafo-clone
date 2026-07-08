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
            rating: 4.8
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
            rating: 4.9
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
            rating: 4.7
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
            rating: 4.5
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
            rating: 4.6
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
            rating: 5.0
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
            rating: 4.3
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
            rating: 4.7
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
    renderVIPAds();
    renderAds();

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
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = '';
    // Clear post ad state
    uploadedImages = [];
    imagePreviewsContainer.innerHTML = '';
}

// Image File Upload and Base64 Conversion
function handleImageUpload(e) {
    const files = Array.from(e.target.files);
    
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
            rating: 5.0
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
                                <h4>${ad.seller.name}</h4>
                                <div class="seller-rating">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                    <span>${ad.seller.rating}</span>
                                </div>
                            </div>
                        </div>

                        <div class="detail-action-buttons">
                            <button class="btn-show-contact" id="btn-show-contact" data-phone="${ad.seller.phone}">Показать номер телефона</button>
                            <button class="btn-chat-seller" id="btn-chat-seller">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                                Написать продавцу
                            </button>
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
    document.getElementById('chat-seller-name').textContent = seller.name;
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

    messages.forEach(msg => {
        const div = document.createElement('div');
        div.className = `msg ${msg.sender === 'seller' ? 'received' : 'sent'}`;
        div.innerHTML = `
            <div class="msg-text">${msg.text}</div>
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

// Global scope bindings for inline HTML clicks (e.g. toggleFavorite)
window.toggleFavorite = toggleFavorite;
window.removeUploadedImage = removeUploadedImage;

// Run App on Load
window.addEventListener('DOMContentLoaded', init);
