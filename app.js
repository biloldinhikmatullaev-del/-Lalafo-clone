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
    },
    {
        id: "ad-9",
        title: "Honda Fit 1.5, 2005 год",
        price: 650000,
        category: "cars",
        city: "Ош",
        description: "Продаю экономичный и надежный городской хэтчбек Honda Fit. Объем 1.5 л. Вариатор. Состояние хорошее, мотор шепчет, коробка работает плавно. Ходовая часть обслужена, новые зимние шины. Салон чистый, кондиционер заправлен.",
        images: ["https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&auto=format&fit=crop"],
        date: "2026-07-08",
        seller: {
            name: "Аскар",
            phone: "+996 558 777-888",
            rating: 4.6,
            verified: false
        },
        vip: false
    },
    {
        id: "ad-10",
        title: "Посуточная аренда 1-комнатной квартиры в центре",
        price: 3000,
        category: "realestate",
        city: "Бишкек",
        description: "Сдаю посуточно уютную 1-комнатную квартиру с евроремонтом в самом центре Бишкека (Киевская / Тоголок Молдо). В квартире есть всё необходимое для комфортного проживания: Wi-Fi, кондиционер, смарт ТВ, чистая постель, вся посуда. Рядом ТРЦ Бишкек Парк.",
        images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop"],
        date: "2026-07-09",
        seller: {
            name: "Каныкей",
            phone: "+996 701 555-444",
            rating: 4.9,
            verified: true
        },
        vip: true
    },
    {
        id: "ad-11",
        title: "Требуется администратор в чайхану «Нават»",
        price: 25000,
        category: "jobs",
        city: "Ош",
        description: "Ищем активного и ответственного администратора в ресторан национальной кухни чайхана «Нават» в г. Ош. Опыт работы в сфере общепита приветствуется. Обязанности: встреча гостей, контроль персонала, ведение кассы. График 2/2, бесплатное питание, развозка.",
        images: ["https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&auto=format&fit=crop"],
        date: "2026-07-07",
        seller: {
            name: "Нават Ош",
            phone: "+996 559 123-987",
            rating: 4.8,
            verified: true
        },
        vip: false
    },
    {
        id: "ad-12",
        title: "Услуги профессионального сантехника круглосуточно",
        price: 800,
        category: "services",
        city: "Бишкек",
        description: "Все виды сантехнических работ любой сложности в Бишкеке и пригороде. Установка унитазов, раковин, смесителей, ванн, душевых кабин. Устранение любых засоров, замена труб водоснабжения и отопления. Выезд в течение 30 минут. Качественно и недорого.",
        images: ["https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop"],
        date: "2026-07-08",
        seller: {
            name: "Бакыт Мастер",
            phone: "+996 772 888-111",
            rating: 5.0,
            verified: true
        },
        vip: false
    },
    {
        id: "ad-13",
        title: "Кроссовки Nike Air Max 90, оригиналы",
        price: 5500,
        category: "fashion",
        city: "Ош",
        description: "Продаю оригинальные кроссовки Nike Air Max 90. Заказывали с официального сайта, не подошел размер. Размер 42 (стелька 27 см). Состояние абсолютно новое, в коробке. Легендарная амортизация, очень удобные для ходьбы и бега.",
        images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop"],
        date: "2026-07-09",
        seller: {
            name: "Султан",
            phone: "+996 708 333-222",
            rating: 4.4,
            verified: false
        },
        vip: false
    },
    {
        id: "ad-14",
        title: "Macbook Air M1, 8GB/256GB Space Gray",
        price: 68000,
        category: "electronics",
        city: "Каракол",
        description: "Продаю MacBook Air на чипе Apple M1 в цвете Space Gray. Память 8 ГБ оперативной, 256 ГБ SSD. Ноутбук в отличном состоянии, бережное домашнее использование. Батарея держит отлично, всего 120 циклов перезарядки. В комплекте оригинальная зарядка.",
        images: ["https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop"],
        date: "2026-07-08",
        seller: {
            name: "Данияр",
            phone: "+996 550 444-555",
            rating: 4.7,
            verified: true
        },
        vip: true
    },
    {
        id: "ad-15",
        title: "Набор садовых инструментов (10 предметов)",
        price: 3200,
        category: "homegarden",
        city: "Нарын",
        description: "Полный комплект инструментов для работы в саду и огороде. В наборе: лопатка, грабли, секатор, опрыскиватель, перчатки и удобный кейс для хранения. Все инструменты изготовлены из качественной нержавеющей стали с удобными ручками.",
        images: ["https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop"],
        date: "2026-07-06",
        seller: {
            name: "Садовод.кг",
            phone: "+996 779 123-456",
            rating: 4.5,
            verified: false
        },
        vip: false
    },
    {
        id: "ad-16",
        title: "Honda Civic Coupe, 2012 год",
        price: 950000,
        category: "cars",
        city: "Бишкек",
        description: "Продаю стильное городское купе Honda Civic. Объем 1.8 л, автомат. Очень резвый и экономичный автомобиль. Состояние отличное, все расходники заменены, вложений не требует. Черный кожаный салон, мультируль, камера заднего вида.",
        images: ["https://images.unsplash.com/photo-1605558202076-130a86033bc6?w=800&auto=format&fit=crop"],
        date: "2026-07-09",
        seller: {
            name: "Тимур",
            phone: "+996 700 888-999",
            rating: 4.8,
            verified: true
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
        // Merge default ads that are missing
        DEFAULT_ADS.forEach(defAd => {
            if (!ads.some(a => a.id === defAd.id)) {
                ads.push(defAd);
            }
        });
    } else {
        ads = [...DEFAULT_ADS];
    }

    // Ensure all ads have coordinates
    const defaultCoords = {
        'ad-1': [42.876, 74.600],
        'ad-2': [40.525, 72.795],
        'ad-3': [42.845, 74.585],
        'ad-4': [40.933, 72.981],
        'ad-5': [42.868, 74.550],
        'ad-6': [42.491, 78.389],
        'ad-7': [42.880, 74.615],
        'ad-8': [40.505, 72.825],
        'ad-9': [40.518, 72.805],
        'ad-10': [42.871, 74.572],
        'ad-11': [40.531, 72.821],
        'ad-12': [42.860, 74.610],
        'ad-13': [40.509, 72.788],
        'ad-14': [42.495, 78.401],
        'ad-15': [41.428, 75.972],
        'ad-16': [42.882, 74.590]
    };
    
    ads.forEach(ad => {
        if (!ad.coords) {
            if (defaultCoords[ad.id]) {
                ad.coords = defaultCoords[ad.id];
            } else {
                const center = ad.city === "Ош" ? [40.514, 72.816] : [42.8746, 74.5698];
                ad.coords = [
                    center[0] + (Math.random() - 0.5) * 0.04,
                    center[1] + (Math.random() - 0.5) * 0.04
                ];
            }
        }

        // Set auction status for specific items (ad-1 and ad-5) if not already initialized
        if ((ad.id === 'ad-1' || ad.id === 'ad-5') && !ad.auction) {
            ad.auction = true;
            ad.currentBid = ad.price - 15000; // Start bid below original price
            ad.auctionTimerEnd = Date.now() + 3 * 3600 * 1000 + 45 * 60 * 1000; // 3h 45m from now
            ad.bids = [
                { name: "Эмиль", amount: ad.price - 17000 },
                { name: "Белек", amount: ad.price - 20000 },
                { name: "Самат", amount: ad.price - 22000 }
            ];
        }

        // Ensure price history exists
        if (!ad.priceHistory || ad.priceHistory.length === 0) {
            const price = ad.price;
            ad.priceHistory = [
                { date: "02 Июл", price: Math.round(price * 1.08) },
                { date: "05 Июл", price: Math.round(price * 1.04) },
                { date: "08 Июл", price: price }
            ];
        }
    });

    localStorage.setItem('lalafo_ads', JSON.stringify(ads));

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

    // Restore customized settings
    const storedAccentPrimary = localStorage.getItem('lalafo_accent_primary');
    const storedAccentColor = localStorage.getItem('lalafo_accent_color');
    if (storedAccentPrimary && storedAccentColor) {
        document.documentElement.style.setProperty('--primary', storedAccentPrimary);
        document.documentElement.style.setProperty('--accent', storedAccentColor);
    }

    const storedFontSize = localStorage.getItem('lalafo_font_size') || 'medium';
    const fontScale = storedFontSize === 'small' ? 0.9 : (storedFontSize === 'large' ? 1.15 : 1.0);
    document.documentElement.style.setProperty('--font-scale', fontScale);

    const storedRadius = localStorage.getItem('lalafo_border_radius') || '16px';
    const smVal = storedRadius === '0px' ? '0px' : (storedRadius === '28px' ? '16px' : '8px');
    const lgVal = storedRadius === '0px' ? '0px' : (storedRadius === '28px' ? '40px' : '24px');
    document.documentElement.style.setProperty('--border-radius-sm', smVal);
    document.documentElement.style.setProperty('--border-radius-md', storedRadius);
    document.documentElement.style.setProperty('--border-radius-lg', lgVal);

    // Initial Renders
    updateFavoritesBadge();
    updateVerificationHeader();
    renderVIPAds();
    renderAds();
    setupEscrowAndChatUpgrades();

    // Load Buyer Rating stats
    buyerRating = parseFloat(localStorage.getItem('lalafo_buyer_rating') || '4.9');
    buyerReviewsCount = parseInt(localStorage.getItem('lalafo_buyer_reviews_count') || '12', 10);
    if (typeof updateBuyerRatingUI === 'function') {
        updateBuyerRatingUI();
    }

    // Event Listeners
    setupEventListeners();

    // Deep Link check
    const urlParams = new URLSearchParams(window.location.search);
    const adIdParam = urlParams.get('adId');
    if (adIdParam) {
        const deepAd = ads.find(a => a.id === adIdParam);
        if (deepAd) {
            setTimeout(() => {
                openAdDetails(deepAd);
            }, 300);
        }
    }
}

// Event Listeners Setup
function setupEventListeners() {
    // Theme Toggle
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Interface Settings Cog Toggle
    const settingsBtn = document.getElementById('interface-settings-btn');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            const modal = document.getElementById('interface-settings-modal');
            if (modal) {
                // Pre-highlight active choices based on storage
                const activeTheme = localStorage.getItem('lalafo_theme') || 'light';
                const activeFont = localStorage.getItem('lalafo_font_size') || 'medium';
                const activeRadius = localStorage.getItem('lalafo_border_radius') || '16px';
                
                // Toggle active classes in settings panel
                document.querySelectorAll('.btn-book').forEach(btn => btn.classList.remove('active'));
                
                const themeBtn = document.getElementById(`theme-btn-${activeTheme}`);
                if (themeBtn) themeBtn.classList.add('active');
                
                const fontBtnId = activeFont === 'small' ? 'font-btn-sm' : (activeFont === 'large' ? 'font-btn-lg' : 'font-btn-md');
                const fontBtn = document.getElementById(fontBtnId);
                if (fontBtn) fontBtn.classList.add('active');

                const radiusBtnId = activeRadius === '0px' ? 'radius-btn-sharp' : (activeRadius === '28px' ? 'radius-btn-round' : 'radius-btn-standard');
                const radiusBtn = document.getElementById(radiusBtnId);
                if (radiusBtn) radiusBtn.classList.add('active');

                modal.classList.add('active');
            }
        });
    }

    const settingsCloseBtn = document.getElementById('settings-modal-close');
    if (settingsCloseBtn) {
        settingsCloseBtn.addEventListener('click', () => {
            const modal = document.getElementById('interface-settings-modal');
            if (modal) modal.classList.remove('active');
        });
    }

    const saveSettingsBtn = document.getElementById('btn-save-settings');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', () => {
            const modal = document.getElementById('interface-settings-modal');
            if (modal) modal.classList.remove('active');
        });
    }

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
        // Exclude blocked ads
        if (ad.blocked) return false;

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
    } else {
        filteredAds.forEach(ad => {
            adsGrid.appendChild(createAdCard(ad));
        });
    }

    // Sync map markers
    if (typeof updateMapMarkers === 'function') {
        updateMapMarkers(filteredAds);
    }
}

// Create Ad Card Element
function createAdCard(ad) {
    const card = document.createElement('div');
    card.className = `ad-card ${ad.vip ? 'vip' : ''}`;
    
    // Check if favorited
    const isFav = favorites.includes(ad.id);

    const isBooked = ad.booking && ad.booking.expiresAt > Date.now();

    const priceFormatted = ad.auction 
        ? `Ставка: ${new Intl.NumberFormat('ru-RU').format(ad.currentBid)}` 
        : new Intl.NumberFormat('ru-RU').format(ad.price);

    card.innerHTML = `
        <div class="card-img-wrapper ${isBooked ? 'booked' : ''}">
            ${ad.vip ? `
            <div class="vip-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                VIP
            </div>` : ''}
            ${ad.auction ? `
            <div class="auction-badge">
                📢 Аукцион
            </div>` : ''}
            ${isBooked ? `
            <div class="booked-badge">
                🔒 Забронировано
            </div>
            <div class="booked-countdown-overlay" data-expiry="${ad.booking.expiresAt}">
                ⏳ 00:00
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
            <div class="card-price" style="${ad.auction ? 'color: #ec4899;' : ''}">${priceFormatted} KGS</div>
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

    // Check search subscriptions
    if (typeof checkNewAdSubscriptions === 'function') {
        checkNewAdSubscriptions(newAd);
    }

    // Reset Form & Close Modal
    postAdForm.reset();
    closeActiveModals();

    // Re-render
    renderAds();
    
    // Notify
    alert("Объявление успешно опубликовано!");
}

let detailModalInterval = null;
let buyerRating = 4.9;
let buyerReviewsCount = 12;

// Open Ad Details View
function openAdDetails(ad) {
    activeAdDetail = ad;
    let activeImgIndex = 0;

    // Clear old intervals
    if (detailModalInterval) {
        clearInterval(detailModalInterval);
        detailModalInterval = null;
    }

    const priceFormatted = new Intl.NumberFormat('ru-RU').format(ad.price);
    
    // Check booking status
    const isBooked = ad.booking && ad.booking.expiresAt > Date.now();
    const bookedByMe = isBooked && ad.booking.buyer === "Вы";
    const bookedByOther = isBooked && ad.booking.buyer !== "Вы";

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
                    <!-- Auction panel if ad is an auction -->
                    ${ad.auction ? `
                    <div class="auction-panel">
                        <div class="auction-timer" id="auc-timer-${ad.id}">
                            ⏳ Загрузка таймера...
                        </div>
                        <div class="auction-bid-row">
                            <div>
                                <div class="auction-bid-label">Текущая ставка</div>
                                <div class="auction-bid-current" id="auc-current-${ad.id}">${new Intl.NumberFormat('ru-RU').format(ad.currentBid)} KGS</div>
                            </div>
                            <div>
                                <div class="auction-bid-label">Минимальный шаг</div>
                                <div style="font-weight: 700; font-size: 13px; color: var(--text-secondary); margin-top: 4px;">+500 KGS</div>
                            </div>
                        </div>
                        <div class="auction-bids-list" id="auc-bids-list-${ad.id}">
                            ${ad.bids.map(b => `
                                <div class="auction-bid-item">
                                    <span class="auction-bidder-name">${b.name}</span>
                                    <span class="auction-bidder-value">${new Intl.NumberFormat('ru-RU').format(b.amount)} KGS</span>
                                </div>
                            `).join('')}
                        </div>
                        <form class="auction-bid-form" id="auc-bid-form-${ad.id}">
                            <input type="number" id="auc-input-${ad.id}" min="${ad.currentBid + 500}" value="${ad.currentBid + 500}" required>
                            <button type="submit" class="btn-bid">Ставка</button>
                        </form>
                    </div>
                    ` : ''}

                    <!-- Booking Countdown block if booked -->
                    ${isBooked ? `
                    <div class="booking-countdown-box">
                        <span>🔒 <strong>Забронировано ${bookedByMe ? 'вами' : ad.booking.buyer}</strong></span>
                        <span id="booking-timer-display" style="font-weight: 700; font-family: monospace;">00:00:00</span>
                    </div>
                    ` : ''}

                    <div class="detail-header">
                        <div class="detail-meta-tags" style="display: flex; width: 100%; align-items: center;">
                            <span class="meta-tag">${getCategoryNameRu(ad.category)}</span>
                            <span class="meta-tag">${ad.city}</span>
                            ${ad.vip ? '<span class="meta-tag vip-tag">VIP</span>' : ''}
                            <button class="btn-msg-translate" id="btn-share-qr" style="margin-left: auto; color: var(--accent); border: none; background: none; cursor: pointer; display: flex; align-items: center; gap: 4px; font-size: 11px; font-weight: 700;">
                                🔗 Поделиться
                            </button>
                            <button class="btn-msg-translate" id="btn-report-ad" style="margin-left: 12px; color: var(--danger); border: none; background: none; cursor: pointer; display: flex; align-items: center; gap: 4px; font-size: 11px;">
                                ⚠️ Пожаловаться
                            </button>
                        </div>
                        <div class="detail-price">${priceFormatted} KGS</div>
                        <h1 class="detail-title">${ad.title}</h1>
                    </div>
                    
                    <div class="detail-section">
                        <div class="detail-section-title">Описание</div>
                        <p class="detail-desc">${ad.description}</p>
                    </div>

                    <!-- Price History Tracker -->
                    <div class="price-history-section">
                        <div class="price-history-header">
                            <span class="price-history-title">📉 Динамика цены</span>
                            <span class="price-history-title" style="color: var(--accent); font-size: 11px;">Гарантия лучшей цены</span>
                        </div>
                        <div class="price-history-chart-wrapper" id="price-history-chart-container">
                            <!-- SVG Chart will be injected here -->
                        </div>
                        <div class="price-history-list" id="price-history-list-items">
                            <!-- History items will be injected here -->
                        </div>
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
                            <div style="display: flex; gap: 12px; width: 100%;">
                                <button class="btn-show-contact" id="btn-show-contact" data-phone="${ad.seller.phone}" style="flex: 1;">Показать телефон</button>
                                ${ad.seller.name !== "Вы" ? `
                                <button class="btn-book ${bookedByMe ? 'booked' : ''}" id="btn-book-ad" style="flex: 1;" ${bookedByOther ? 'disabled style="opacity: 0.5;"' : ''}>
                                    ${bookedByMe ? '🔓 Снять бронь' : '🔒 Забронировать'}
                                </button>
                                ` : ''}
                            </div>
                            <div style="display: flex; gap: 12px; width: 100%;">
                                <button class="btn-chat-seller" id="btn-chat-seller" style="flex: 1;" ${bookedByOther ? 'disabled style="opacity: 0.5;"' : ''}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                    Написать
                                </button>
                                ${ad.seller.name !== "Вы" ? `
                                <button class="btn-show-contact" id="btn-video-call-show" style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 6px; background: linear-gradient(135deg, var(--primary), var(--accent)); color: white; border: none;" ${bookedByOther ? 'disabled style="opacity: 0.5;"' : ''}>
                                    🎥 Видеопоказ
                                </button>
                                ` : ''}
                            </div>
                            ${ad.seller.name !== "Вы" && !ad.auction ? `
                            <div style="display: flex; gap: 12px; width: 100%;">
                                <button class="btn-msg-offer" id="btn-offer-price" style="flex: 0.8; height: 42px; border-radius: 6px; padding: 0 12px; justify-content: center; font-size: 12px;" ${isBooked ? 'disabled style="opacity: 0.5;"' : ''}>
                                    🤝 Торговаться
                                </button>
                                <button class="btn-buy-safe" id="btn-buy-safe-deal" style="flex: 1.2;" ${isBooked ? 'disabled style="opacity: 0.5;"' : ''}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                                    </svg>
                                    Купить по Безопасной сделке
                                </button>
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Similar Ads Carousel -->
            <div class="detail-similar-section">
                <h3 style="font-size: 15px; font-weight: 700; margin-bottom: 12px;">Похожие товары</h3>
                <div class="similar-ads-carousel" id="similar-ads-carousel">
                    <!-- Similar items rendered dynamically in JS -->
                </div>
            </div>
        </div>
    `;

    openModal(adDetailModal);
    
    if (typeof renderPriceHistoryUI === 'function') {
        renderPriceHistoryUI(ad);
    }

    // Track category viewed for user interest mapping
    trackUserInterest(ad.category);

    // Render similar ads in this modal
    renderSimilarAds(ad);

    // Start intervals for countdowns
    if (isBooked || ad.auction) {
        detailModalInterval = setInterval(() => {
            // Update booking countdown
            if (isBooked) {
                const timeLeft = ad.booking.expiresAt - Date.now();
                const timerEl = document.getElementById('booking-timer-display');
                if (timeLeft <= 0) {
                    ad.booking = null;
                    localStorage.setItem('lalafo_ads', JSON.stringify(ads));
                    clearInterval(detailModalInterval);
                    openAdDetails(ad); // Reload details
                    renderAds();
                } else if (timerEl) {
                    timerEl.textContent = formatTimeDuration(timeLeft);
                }
            }
            // Update auction countdown
            if (ad.auction) {
                const timeLeft = ad.auctionTimerEnd - Date.now();
                const timerEl = document.getElementById(`auc-timer-${ad.id}`);
                if (timeLeft <= 0) {
                    if (timerEl) timerEl.textContent = "⏳ Аукцион завершен!";
                    const bidForm = document.getElementById(`auc-bid-form-${ad.id}`);
                    if (bidForm) bidForm.style.display = 'none';
                } else if (timerEl) {
                    timerEl.textContent = `⏳ До конца: ${formatTimeDuration(timeLeft)}`;
                }
            }
        }, 1000);
    }

    // Bind inside-modal events
    const closeBtn = adDetailModal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        if (detailModalInterval) clearInterval(detailModalInterval);
        closeActiveModals();
    });

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

    // Booking Action
    const bookBtn = adDetailModal.querySelector('#btn-book-ad');
    if (bookBtn) {
        bookBtn.addEventListener('click', () => {
            if (bookedByMe) {
                // Cancel booking
                ad.booking = null;
                alert("Бронирование успешно отменено.");
            } else {
                // Set booking
                ad.booking = {
                    buyer: "Вы",
                    expiresAt: Date.now() + 2 * 3600 * 1000 // 2 hours
                };
                alert("Товар успешно забронирован за вами на 2 часа!");
            }
            localStorage.setItem('lalafo_ads', JSON.stringify(ads));
            renderAds();
            openAdDetails(ad); // Re-render details
        });
    }

    // Share QR Action
    const shareQrBtn = adDetailModal.querySelector('#btn-share-qr');
    if (shareQrBtn) {
        shareQrBtn.addEventListener('click', () => {
            if (typeof openShareQrModal === 'function') {
                openShareQrModal(ad);
            }
        });
    }

    // Report Action
    const reportBtn = adDetailModal.querySelector('#btn-report-ad');
    reportBtn.addEventListener('click', () => {
        const reason = prompt(`Пожалуйста, выберите причину жалобы:\n1 - Мошенничество\n2 - Недостоверные данные\n3 - Запрещенный товар\n\nВведите цифру причины:`, "1");
        if (reason === null) return;
        
        let reasonText = "Мошенничество";
        if (reason === "2") reasonText = "Недостоверные данные";
        else if (reason === "3") reasonText = "Запрещенный товар";

        closeActiveModals();
        openFraudScanner(ad, reasonText);
    });

    // Video Call Action
    const videoCallBtn = adDetailModal.querySelector('#btn-video-call-show');
    if (videoCallBtn) {
        videoCallBtn.addEventListener('click', () => {
            closeActiveModals();
            if (typeof openVideoCall === 'function') {
                openVideoCall(ad);
            }
        });
    }

    // Chat Action
    const chatSellerBtn = adDetailModal.querySelector('#btn-chat-seller');
    if (chatSellerBtn) {
        chatSellerBtn.addEventListener('click', () => {
            closeActiveModals();
            openChatWithSeller(ad);
        });
    }

    // Buy Safe Action
    const buySafeBtn = adDetailModal.querySelector('#btn-buy-safe-deal');
    if (buySafeBtn) {
        buySafeBtn.addEventListener('click', () => {
            closeActiveModals();
            openSafeDealCheckout(ad);
        });
    }

    // Offer Price Action
    const offerPriceBtn = adDetailModal.querySelector('#btn-offer-price');
    if (offerPriceBtn) {
        offerPriceBtn.addEventListener('click', () => {
            const suggested = Math.round(ad.price * 0.9);
            const offerStr = prompt(`Предложить цену для "${ad.title}" (Текущая цена: ${ad.price} KGS):\n(ИИ рекомендует предложить от ${Math.round(ad.price * 0.8)} KGS)`, suggested);
            if (offerStr === null) return;
            const offerAmount = parseInt(offerStr.replace(/\s+/g, '').replace(/[^0-9]/gi, ''), 10);
            if (isNaN(offerAmount) || offerAmount <= 0) {
                alert("Пожалуйста, введите корректную сумму.");
                return;
            }
            closeActiveModals();
            openChatWithSeller(ad);
            sendBargainOffer(ad, offerAmount);
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
        
        if (msg.isOffer) {
            div.className = `msg sent`;
            div.innerHTML = `
                <div class="msg-offer-bubble">
                    <div class="msg-offer-header">🤝 Предложение цены</div>
                    <div class="msg-offer-body">
                        <span class="msg-offer-amount">${new Intl.NumberFormat('ru-RU').format(msg.offerAmount)} KGS</span>
                        <span class="msg-offer-status pending">Ожидает ответа</span>
                    </div>
                </div>
                <div style="font-size: 9px; opacity: 0.6; text-align: right; margin-top: 4px;">${msg.time}</div>
            `;
        } else if (msg.isInteractiveBargain) {
            div.className = `msg received`;
            div.innerHTML = `
                <div class="msg-offer-bubble">
                    <div class="msg-offer-header" style="color: #10b981;">🤝 Решение по цене</div>
                    <div class="msg-offer-body">
                        <span class="msg-offer-amount">${new Intl.NumberFormat('ru-RU').format(msg.finalPrice)} KGS</span>
                        <span class="msg-offer-status accepted">${msg.statusText}</span>
                        <button type="button" class="btn-buy-discounted" onclick="buyDiscountedAd('${adId}', ${msg.finalPrice})">Купить со скидкой</button>
                    </div>
                </div>
                <div style="font-size: 9px; opacity: 0.6; text-align: right; margin-top: 4px;">${msg.time}</div>
            `;
        } else {
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
        }
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

    // Load Notifications & Subscriptions
    const storedNotifs = localStorage.getItem('lalafo_notifications');
    if (storedNotifs) {
        notifications = JSON.parse(storedNotifs);
    } else {
        notifications = [];
        localStorage.setItem('lalafo_notifications', JSON.stringify(notifications));
    }
    updateNotificationBadge();
    renderNotificationsList();

    const storedSubs = localStorage.getItem('lalafo_subscriptions');
    if (storedSubs) {
        subscriptions = JSON.parse(storedSubs);
    } else {
        subscriptions = [];
        localStorage.setItem('lalafo_subscriptions', JSON.stringify(subscriptions));
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

    // View toggles: Grid vs Map
    const toggleGridView = document.getElementById('toggle-grid-view');
    const toggleMapView = document.getElementById('toggle-map-view');
    
    if (toggleGridView && toggleMapView) {
        toggleGridView.addEventListener('click', () => {
            toggleGridView.classList.add('active');
            toggleMapView.classList.remove('active');
            document.getElementById('map-view-container').style.display = 'none';
            document.getElementById('ads-grid').style.display = 'grid';
        });

        toggleMapView.addEventListener('click', () => {
            toggleMapView.classList.add('active');
            toggleGridView.classList.remove('active');
            document.getElementById('ads-grid').style.display = 'none';
            document.getElementById('map-view-container').style.display = 'block';
            initMapView();
        });
    }

    // Notification dropdown toggler
    const bellBtn = document.getElementById('notif-bell-btn');
    const notifDropdown = document.getElementById('notif-dropdown');
    
    if (bellBtn && notifDropdown) {
        bellBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            notifDropdown.classList.toggle('active');
        });
        
        document.addEventListener('click', (e) => {
            if (!notifDropdown.contains(e.target) && e.target !== bellBtn) {
                notifDropdown.classList.remove('active');
            }
        });
    }

    // Clear notifications button
    const clearNotifBtn = document.getElementById('notif-clear-all');
    if (clearNotifBtn) {
        clearNotifBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            notifications = [];
            localStorage.setItem('lalafo_notifications', JSON.stringify(notifications));
            updateNotificationBadge();
            renderNotificationsList();
        });
    }

    // Search subscription button click
    const subSearchBtn = document.getElementById('subscribe-search-btn');
    if (subSearchBtn) {
        subSearchBtn.addEventListener('click', () => {
            const query = document.getElementById('filter-search').value.trim();
            const category = document.getElementById('filter-category').value;
            const city = document.getElementById('filter-city').value;
            const minPrice = document.getElementById('filter-min-price').value;
            const maxPrice = document.getElementById('filter-max-price').value;

            // Check if already subscribed to same filters
            const existingSubIdx = subscriptions.findIndex(s => 
                s.query === query && 
                s.category === category && 
                s.city === city && 
                s.minPrice === minPrice && 
                s.maxPrice === maxPrice
            );

            if (existingSubIdx > -1) {
                // Unsubscribe
                subscriptions.splice(existingSubIdx, 1);
                subSearchBtn.classList.remove('subscribed');
                subSearchBtn.querySelector('span').textContent = "Подписаться на поиск";
                localStorage.setItem('lalafo_subscriptions', JSON.stringify(subscriptions));
                alert("Вы отписались от этого поиска.");
            } else {
                // Subscribe
                const newSub = {
                    id: `sub-${Date.now()}`,
                    query,
                    category,
                    city,
                    minPrice,
                    maxPrice
                };
                subscriptions.push(newSub);
                subSearchBtn.classList.add('subscribed');
                subSearchBtn.querySelector('span').textContent = "Вы подписаны 🔔";
                localStorage.setItem('lalafo_subscriptions', JSON.stringify(subscriptions));
                alert("Вы успешно подписались на этот поиск! При появлении подходящих товаров вы получите уведомление в шапке сайта.");
            }
        });
    }

    // Render Home Recommendations on page load
    renderHomeRecommendations();
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
    
    // Open Mutual Rating Modal
    closeActiveModals();
    if (typeof openMutualRatingModal === 'function') {
        openMutualRatingModal(deal);
    }
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

/* --- Maps, Bargaining, Search Subscriptions & Recommendations Logic --- */

let mapObj = null;
let mapMarkers = [];
let subscriptions = [];
let notifications = [];

// Interactive Map View initialization
function initMapView() {
    // Wait until Leaflet library is loaded
    if (typeof L === 'undefined') {
        setTimeout(initMapView, 100);
        return;
    }

    if (!mapObj) {
        // Center of Bishkek initially
        mapObj = L.map('map-view-container').setView([42.8746, 74.5698], 12);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapObj);
        
        // Re-invalidate map size when showing it so Leaflet displays tiles correctly
        setTimeout(() => {
            mapObj.invalidateSize();
        }, 100);
    } else {
        // Trigger resize invalidate
        mapObj.invalidateSize();
    }
    
    // Fit map to markers
    updateMapMarkers(getFilteredAds(false));
}

// Update markers on Leaflet map
function updateMapMarkers(filteredAds) {
    if (!mapObj) return;

    // Clear existing markers
    mapMarkers.forEach(m => mapObj.removeLayer(m));
    mapMarkers = [];

    if (filteredAds.length === 0) return;

    const group = [];
    filteredAds.forEach(ad => {
        if (ad.coords) {
            // Create Leaflet marker
            const marker = L.marker(ad.coords).addTo(mapObj);
            
            const popupHtml = `
                <div class="map-popup-card">
                    <img src="${ad.images[0]}" class="map-popup-img" onerror="this.src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300'">
                    <div class="map-popup-info">
                        <div class="map-popup-title">${ad.title}</div>
                        <div class="map-popup-price">${new Intl.NumberFormat('ru-RU').format(ad.price)} KGS</div>
                        <button class="map-popup-btn" onclick="openAdFromMap('${ad.id}')">Посмотреть</button>
                    </div>
                </div>
            `;
            marker.bindPopup(popupHtml);
            mapMarkers.push(marker);
            group.push(ad.coords);
        }
    });

    // Zoom out or auto-fit bounds
    if (group.length > 0) {
        mapObj.fitBounds(group, { padding: [40, 40], maxZoom: 14 });
    }
}

// Open detailed modal from map marker click
function openAdFromMap(adId) {
    const ad = ads.find(a => a.id === adId);
    if (!ad) return;
    openAdDetails(ad);
}

// Notifications badge updates
function updateNotificationBadge() {
    const badge = document.getElementById('notif-badge-count');
    if (!badge) return;
    
    const count = notifications.length;
    if (count > 0) {
        badge.textContent = count;
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

// Render Notifications inside Dropdown
function renderNotificationsList() {
    const listContainer = document.getElementById('notif-list-container');
    if (!listContainer) return;

    listContainer.innerHTML = "";

    if (notifications.length === 0) {
        listContainer.innerHTML = `<div class="notif-empty">Нет новых уведомлений</div>`;
        return;
    }

    notifications.forEach(notif => {
        const item = document.createElement('div');
        item.className = 'notif-item';
        item.onclick = (e) => {
            e.stopPropagation();
            openAdFromNotification(notif.adId, notif.id);
        };

        item.innerHTML = `
            <img src="${notif.image}" class="notif-img" onerror="this.src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=100'">
            <div class="notif-details">
                <p style="font-weight: 700; font-size: 11px; margin-bottom: 2px; color: var(--accent);">${notif.title}</p>
                <p style="color: var(--text-primary); font-size: 11px; font-weight: 600;">${notif.message}</p>
                <div class="notif-time">${notif.time}</div>
            </div>
        `;
        listContainer.appendChild(item);
    });
}

// Check if new ad matches search subscriptions
function checkNewAdSubscriptions(ad) {
    let triggered = false;
    
    subscriptions.forEach(sub => {
        // Match Search Query
        if (sub.query && !ad.title.toLowerCase().includes(sub.query.toLowerCase())) return;
        
        // Match Category
        if (sub.category && ad.category !== sub.category) return;
        
        // Match City
        if (sub.city && ad.city !== sub.city) return;
        
        // Match Min Price
        if (sub.minPrice && ad.price < parseInt(sub.minPrice, 10)) return;
        
        // Match Max Price
        if (sub.maxPrice && ad.price > parseInt(sub.maxPrice, 10)) return;

        // Matches! Create notification
        const newNotif = {
            id: `notif-${Date.now()}-${Math.random()}`,
            adId: ad.id,
            title: `Новое объявление по подписке!`,
            message: `"${ad.title}" за ${new Intl.NumberFormat('ru-RU').format(ad.price)} KGS в г. ${ad.city}`,
            image: ad.images[0],
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        notifications.unshift(newNotif);
        triggered = true;
    });

    if (triggered) {
        localStorage.setItem('lalafo_notifications', JSON.stringify(notifications));
        updateNotificationBadge();
        renderNotificationsList();
        
        // Animate Bell
        const bellBtn = document.getElementById('notif-bell-btn');
        if (bellBtn) {
            bellBtn.style.animation = 'none';
            setTimeout(() => {
                bellBtn.style.animation = 'pulseGlow 1.5s 3';
            }, 10);
        }
    }
}

// Click on Notification item
function openAdFromNotification(adId, notifId) {
    // Find ad
    const ad = ads.find(a => a.id === adId);
    if (ad) {
        openAdDetails(ad);
    }
    
    // Remove notification from list on read
    notifications = notifications.filter(n => n.id !== notifId);
    localStorage.setItem('lalafo_notifications', JSON.stringify(notifications));
    updateNotificationBadge();
    renderNotificationsList();

    // Close Dropdown
    document.getElementById('notif-dropdown').classList.remove('active');
}

// Track category viewed for user interests
function trackUserInterest(category) {
    if (!category) return;
    
    let interests = [];
    const storedInterests = localStorage.getItem('lalafo_viewed_interests');
    if (storedInterests) {
        interests = JSON.parse(storedInterests);
    }

    // Move category to first index, remove duplication
    interests = interests.filter(c => c !== category);
    interests.unshift(category);

    // Keep last 5 interests
    if (interests.length > 5) {
        interests = interests.slice(0, 5);
    }

    localStorage.setItem('lalafo_viewed_interests', JSON.stringify(interests));
    
    // Render home recommendations list to reflect the new interest
    renderHomeRecommendations();
}

// Render homepage recommendations based on viewed categories
function renderHomeRecommendations() {
    const container = document.getElementById('recommendations-container');
    const carousel = document.getElementById('recommendations-carousel');
    if (!container || !carousel) return;

    let interests = [];
    const storedInterests = localStorage.getItem('lalafo_viewed_interests');
    if (storedInterests) {
        interests = JSON.parse(storedInterests);
    }

    if (interests.length === 0) {
        container.style.display = 'none';
        return;
    }

    // Filter ads matching user interests (excluding user's own ads if possible)
    let recommendedAds = ads.filter(ad => interests.includes(ad.category) && ad.seller.name !== "Вы");
    
    // If not enough ads, fallback to any ads excluding own
    if (recommendedAds.length === 0) {
        recommendedAds = ads.filter(ad => ad.seller.name !== "Вы");
    }

    // Limit to 8 items
    recommendedAds = recommendedAds.slice(0, 8);

    if (recommendedAds.length === 0) {
        container.style.display = 'none';
        return;
    }

    carousel.innerHTML = "";
    recommendedAds.forEach(ad => {
        const card = document.createElement('div');
        card.className = 'carousel-card';
        card.onclick = () => openAdDetails(ad);

        card.innerHTML = `
            <img src="${ad.images[0]}" class="carousel-card-img" onerror="this.src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300'">
            <div class="carousel-card-info">
                <div class="carousel-card-title">${ad.title}</div>
                <div class="carousel-card-price">${new Intl.NumberFormat('ru-RU').format(ad.price)} KGS</div>
            </div>
        `;
        carousel.appendChild(card);
    });

    container.style.display = 'block';
}

// Render Similar Ads inside detailed modal
function renderSimilarAds(activeAd) {
    const carousel = document.getElementById('similar-ads-carousel');
    if (!carousel) return;

    // Filter ads matching same category, excluding active ad
    let similar = ads.filter(ad => ad.category === activeAd.category && ad.id !== activeAd.id);

    if (similar.length === 0) {
        carousel.innerHTML = `<div style="color: var(--text-muted); font-size: 12px; font-style: italic;">Похожих товаров не найдено.</div>`;
        return;
    }

    // Limit to 5 items
    similar = similar.slice(0, 5);

    carousel.innerHTML = "";
    similar.forEach(ad => {
        const card = document.createElement('div');
        card.className = 'carousel-card';
        card.onclick = () => {
            // Close and reopen with the new similar item details!
            openAdDetails(ad);
        };

        card.innerHTML = `
            <img src="${ad.images[0]}" class="carousel-card-img" onerror="this.src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300'">
            <div class="carousel-card-info">
                <div class="carousel-card-title">${ad.title}</div>
                <div class="carousel-card-price">${new Intl.NumberFormat('ru-RU').format(ad.price)} KGS</div>
            </div>
        `;
        carousel.appendChild(card);
    });
}

// Send bargain offer in Chat
function sendBargainOffer(ad, offerAmount) {
    const adId = ad.id;
    
    // Load or Init History
    if (!chatHistory[adId]) {
        chatHistory[adId] = [
            {
                sender: 'seller',
                text: `Здравствуйте! Вы интересуетесь объявлением "${ad.title}" за ${new Intl.NumberFormat('ru-RU').format(ad.price)} KGS?`,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
        ];
    }

    // User sends offer message
    const offerMsg = {
        sender: 'user',
        text: `Предложение цены: ${new Intl.NumberFormat('ru-RU').format(offerAmount)} KGS. Согласны?`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOffer: true,
        offerAmount: offerAmount
    };

    chatHistory[adId].push(offerMsg);
    
    // Render immediately
    renderChatMessages(adId);

    // Simulate Seller response
    setTimeout(() => {
        // Calculate discount percent
        let responseText = "";
        let offerStatus = ""; // 'accepted' or 'rejected'
        let counterAmount = 0;

        if (offerAmount < ad.price * 0.75) {
            // Under 75% - outright rejection
            responseText = `Ой, нет, это слишком дешево! Я не могу отдать за такую сумму. Моя крайняя цена — ${new Intl.NumberFormat('ru-RU').format(Math.round(ad.price * 0.95))} KGS.`;
            offerStatus = "rejected";
        } else if (offerAmount >= ad.price * 0.75 && offerAmount < ad.price * 0.90) {
            // Between 75% and 90% - counter offer
            counterAmount = Math.round((ad.price + offerAmount) / 2);
            responseText = `Хм, это маловато. Давайте сойдемся посередине на ${new Intl.NumberFormat('ru-RU').format(counterAmount)} KGS? Если согласны, вы можете оплатить по Безопасной сделке ниже.`;
            offerStatus = "counter";
        } else {
            // Reasonable discount (90% or more) - acceptance!
            responseText = `Договорились! Я согласен продать за ${new Intl.NumberFormat('ru-RU').format(offerAmount)} KGS. Вы можете оформить покупку ниже.`;
            offerStatus = "accepted";
        }

        // Add seller text reply
        const sellerMsg = {
            sender: 'seller',
            text: responseText,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        chatHistory[adId].push(sellerMsg);

        // Append interactive offer response bubble if accepted or countered
        if (offerStatus === "accepted" || offerStatus === "counter") {
            const finalPrice = offerStatus === "accepted" ? offerAmount : counterAmount;
            
            const interactiveBubble = {
                sender: 'seller',
                text: `Согласованная цена: **${new Intl.NumberFormat('ru-RU').format(finalPrice)} KGS**`,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                isInteractiveBargain: true,
                finalPrice: finalPrice,
                statusText: offerStatus === "accepted" ? 'Принято' : 'Встречное предложение'
            };
            chatHistory[adId].push(interactiveBubble);
        }

        renderChatMessages(adId);
    }, 1500);
}

function buyDiscountedAd(adId, price) {
    const ad = ads.find(a => a.id === adId);
    if (!ad) return;
    
    // Add to price history
    if (!ad.priceHistory) ad.priceHistory = [];
    const months = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
    const now = new Date();
    const dateStr = `${String(now.getDate()).padStart(2, '0')} ${months[now.getMonth()]}`;
    
    const lastHistory = ad.priceHistory[ad.priceHistory.length - 1];
    if (!lastHistory || lastHistory.price !== price) {
        ad.priceHistory.push({ date: dateStr, price: price });
        localStorage.setItem('lalafo_ads', JSON.stringify(ads));
    }
    
    // Create copy with modified price
    const modifiedAd = { ...ad, price: price };
    
    // Close chat
    chatWidget.classList.remove('active');
    
    // Open checkout!
    openSafeDealCheckout(modifiedAd);
}

/* --- Auctions, Bookings, Ratings & Fraud System Logic --- */

// Helper to format ms duration into hh:mm:ss
function formatTimeDuration(ms) {
    if (ms <= 0) return "00:00:00";
    const totalSeconds = Math.floor(ms / 1000);
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    
    const pad = (num) => String(num).padStart(2, '0');
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

// Background Outbid Simulation
function simulateBackgroundBidding() {
    // Find all active auctions that are not expired and not blocked
    const activeAuctions = ads.filter(ad => ad.auction && ad.auctionTimerEnd > Date.now() && !ad.blocked);
    if (activeAuctions.length === 0) return;

    activeAuctions.forEach(ad => {
        // 30% chance another user bids
        if (Math.random() < 0.3) {
            const outbidStep = 500 + Math.floor(Math.random() * 3) * 500; // 500, 1000, or 1500 KGS
            const previousHighestBidder = ad.bids.length > 0 ? ad.bids[0].name : "";
            
            const randomNames = ["Медер", 'Азиз', 'Нурбек', 'Карина', 'Дастан', 'Эрмек', 'Айжана'];
            const bidderName = randomNames[Math.floor(Math.random() * randomNames.length)];
            
            ad.currentBid += outbidStep;
            ad.bids.unshift({
                name: bidderName,
                amount: ad.currentBid
            });

            // Save
            localStorage.setItem('lalafo_ads', JSON.stringify(ads));

            // If this ad's detail modal is currently open, update DOM values
            if (activeAdDetail && activeAdDetail.id === ad.id) {
                const currentBidEl = document.getElementById(`auc-current-${ad.id}`);
                const bidsListEl = document.getElementById(`auc-bids-list-${ad.id}`);
                const bidInput = document.getElementById(`auc-input-${ad.id}`);
                
                if (currentBidEl) {
                    currentBidEl.textContent = `${new Intl.NumberFormat('ru-RU').format(ad.currentBid)} KGS`;
                }
                if (bidInput) {
                    bidInput.min = ad.currentBid + 500;
                    bidInput.value = ad.currentBid + 500;
                }
                if (bidsListEl) {
                    bidsListEl.innerHTML = ad.bids.map(b => `
                        <div class="auction-bid-item">
                            <span class="auction-bidder-name">${b.name}</span>
                            <span class="auction-bidder-value">${new Intl.NumberFormat('ru-RU').format(b.amount)} KGS</span>
                        </div>
                    `).join('');
                }
            }

            // Sync main feed cards
            renderAds();

            // Send push toast notification if the user was outbid
            if (previousHighestBidder === "Вы") {
                alert(`⚠️ Внимание! Ваша ставка на "${ad.title}" была перебита пользователем ${bidderName}. Новая ставка: ${new Intl.NumberFormat('ru-RU').format(ad.currentBid)} KGS.`);
            }
        }
    });
}

// Start outbid simulation every 25 seconds
setInterval(simulateBackgroundBidding, 25000);

// Periodic updater for booked cards countdown in feed
setInterval(() => {
    const activeTimerOverlays = document.querySelectorAll('.booked-countdown-overlay');
    activeTimerOverlays.forEach(overlay => {
        const expiry = parseInt(overlay.dataset.expiry, 10);
        const timeLeft = expiry - Date.now();
        if (timeLeft <= 0) {
            // Expired! Trigger ads re-render to clear locked state
            renderAds();
        } else {
            overlay.textContent = `⏳ ${formatTimeDuration(timeLeft).substring(3)}`; // display mm:ss
        }
    });
}, 1000);

// Open Mutual Review rating modal
function openMutualRatingModal(deal) {
    const modal = document.getElementById('mutual-rating-modal');
    if (!modal) return;

    // Reset fields
    document.getElementById('rating-seller-title').textContent = `Оцените продавца ${deal.sellerName}`;
    document.getElementById('rating-comment').value = '';
    
    const stars = modal.querySelectorAll('.rating-star-btn');
    stars.forEach(s => s.classList.remove('selected'));
    
    // Store current deal context
    modal.dataset.dealId = deal.id;
    modal.dataset.sellerName = deal.sellerName;
    modal.dataset.score = "0";

    // Star Selection Bindings
    stars.forEach(star => {
        star.onclick = () => {
            const val = parseInt(star.dataset.value, 10);
            modal.dataset.score = String(val);
            stars.forEach((s, idx) => {
                if (idx < val) s.classList.add('selected');
                else s.classList.remove('selected');
            });
        };
    });

    // Close button
    const closeBtn = document.getElementById('rating-modal-close');
    closeBtn.onclick = () => modal.classList.remove('active');

    // Submit rating
    const submitBtn = document.getElementById('btn-submit-rating');
    submitBtn.onclick = () => {
        const score = parseInt(modal.dataset.score, 10);
        if (score === 0) {
            alert("Пожалуйста, поставьте оценку звездами.");
            return;
        }

        modal.classList.remove('active');
        alert("Спасибо! Ваша оценка отправлена продавцу.");

        // Simulate Seller rating the buyer back!
        setTimeout(() => {
            alert(`💬 Продавец ${deal.sellerName} оставил ответный отзыв о вас:\n⭐ 5.0! "Отличный покупатель, быстрая оплата, вежливое общение. Рекомендую!"`);
            
            // Increment buyer ratings count
            buyerReviewsCount++;
            buyerRating = parseFloat(((buyerRating * (buyerReviewsCount - 1) + 5.0) / buyerReviewsCount).toFixed(2));
            
            localStorage.setItem('lalafo_buyer_rating', String(buyerRating));
            localStorage.setItem('lalafo_buyer_reviews_count', String(buyerReviewsCount));
            
            updateBuyerRatingUI();
        }, 2500);
    };

    modal.classList.add('active');
}

// Update Buyer Rating UI counters
function updateBuyerRatingUI() {
    const scoreEl = document.getElementById('buyer-rating-score');
    const countEl = document.getElementById('buyer-rating-count');
    
    if (scoreEl) scoreEl.textContent = buyerRating.toFixed(1);
    if (countEl) countEl.textContent = `на основе ${buyerReviewsCount} отзывов`;
}

// AI Fraud Scanner execution
function openFraudScanner(ad, reasonText) {
    const modal = document.getElementById('fraud-scanner-modal');
    const loader = document.getElementById('fraud-scan-loader');
    const results = document.getElementById('fraud-scan-results');
    if (!modal || !loader || !results) return;

    // Reset modals layout
    loader.style.display = 'block';
    results.style.display = 'none';
    modal.classList.add('active');

    document.getElementById('fraud-scanner-status-text').textContent = "ИИ сканирует объявление...";

    // Bind close actions
    const closeBtn = document.getElementById('fraud-modal-close');
    closeBtn.onclick = () => modal.classList.remove('active');
    
    const closeResultBtn = document.getElementById('btn-close-fraud');
    closeResultBtn.onclick = () => modal.classList.remove('active');

    // Run AI checks pipeline
    setTimeout(() => {
        // Step 1: Price Check
        document.getElementById('fraud-scanner-status-text').textContent = "Проверка цены...";
        
        // Calculate median category price
        const catAds = ads.filter(a => a.category === ad.category && a.id !== ad.id);
        let categoryMedian = ad.price;
        if (catAds.length > 0) {
            const sortedPrices = catAds.map(a => a.price).sort((a,b) => a - b);
            categoryMedian = sortedPrices[Math.floor(sortedPrices.length / 2)];
        }

        let priceRisk = 0; // out of 40
        let priceStatusHtml = "";
        
        if (ad.price < categoryMedian * 0.35) {
            priceRisk = 40;
            priceStatusHtml = `<span class="fraud-checkpoint-status danger">ОПАСНО: занижена на ${Math.round((1 - ad.price / categoryMedian) * 100)}%</span>`;
        } else if (ad.price < categoryMedian * 0.6) {
            priceRisk = 20;
            priceStatusHtml = `<span class="fraud-checkpoint-status warning">ПОДОЗРИТЕЛЬНО: цена занижена</span>`;
        } else {
            priceRisk = 0;
            priceStatusHtml = `<span class="fraud-checkpoint-status ok">В норме (ОК)</span>`;
        }

        setTimeout(() => {
            // Step 2: Keywords Check
            document.getElementById('fraud-scanner-status-text').textContent = "Поиск подозрительных слов...";
            const stopWords = ['предоплата', 'киви', 'qiwi', 'вышлите код', 'без встречи', 'предоплату', 'карта', 'перевод до'];
            const descLower = ad.description.toLowerCase();
            const titleLower = ad.title.toLowerCase();
            
            let keywordRisk = 0; // out of 40
            let keywordStatusHtml = "";
            let matchedWords = [];
            
            stopWords.forEach(word => {
                if (descLower.includes(word) || titleLower.includes(word)) {
                    matchedWords.push(word);
                }
            });

            if (matchedWords.length > 0) {
                keywordRisk = 40;
                keywordStatusHtml = `<span class="fraud-checkpoint-status danger">ОПАСНО: стоп-слово "${matchedWords[0]}"</span>`;
            } else {
                keywordRisk = 0;
                keywordStatusHtml = `<span class="fraud-checkpoint-status ok">В норме (ОК)</span>`;
            }

            setTimeout(() => {
                // Step 3: Seller verification check
                document.getElementById('fraud-scanner-status-text').textContent = "Статус продавца...";
                let sellerRisk = 0; // out of 20
                let sellerStatusHtml = "";

                if (ad.seller.verified) {
                    sellerRisk = 0;
                    sellerStatusHtml = `<span class="fraud-checkpoint-status ok">Проверенный продавец (ОК)</span>`;
                } else {
                    sellerRisk = 20;
                    sellerStatusHtml = `<span class="fraud-checkpoint-status warning">Не проверен</span>`;
                }

                setTimeout(() => {
                    // Final Calculation
                    const totalRisk = priceRisk + keywordRisk + sellerRisk;
                    
                    // Render status bars
                    document.getElementById('fraud-risk-score').textContent = `${totalRisk}%`;
                    
                    const riskBar = document.getElementById('fraud-risk-bar');
                    riskBar.style.width = `${totalRisk}%`;
                    
                    if (totalRisk > 60) {
                        riskBar.style.background = '#ef4444'; // Red danger
                        document.getElementById('fraud-verdict-desc').innerHTML = `
                            <strong>Вердикт ИИ:</strong> Риск критический (${totalRisk}%). Превышен лимит безопасности (60%). 
                            Объявление автоматически заблокировано модератором за подозрение в мошенничестве.
                        `;
                        
                        // Block ad!
                        ad.blocked = true;
                        localStorage.setItem('lalafo_ads', JSON.stringify(ads));
                        renderAds();
                    } else if (totalRisk >= 30) {
                        riskBar.style.background = '#f59e0b'; // Amber warning
                        document.getElementById('fraud-verdict-desc').innerHTML = `
                            <strong>Вердикт ИИ:</strong> Риск средний (${totalRisk}%). Жалоба направлена живым модераторам для ручной сверки. 
                            Объявление пока остается в поиске.
                        `;
                    } else {
                        riskBar.style.background = '#10b981'; // Green OK
                        document.getElementById('fraud-verdict-desc').innerHTML = `
                            <strong>Вердикт ИИ:</strong> Риск минимальный (${totalRisk}%). Подозрительной активности не обнаружено. 
                            Жалоба отклонена.
                        `;
                    }

                    // Render checkpoints
                    document.getElementById('chk-price').outerHTML = priceStatusHtml;
                    document.getElementById('chk-text').outerHTML = keywordStatusHtml;
                    document.getElementById('chk-seller').outerHTML = sellerStatusHtml;

                    // Switch panels
                    loader.style.display = 'none';
                    results.style.display = 'block';
                }, 800);
            }, 800);
        }, 800);
    }, 800);
}

// Open QR Share modal
function openShareQrModal(ad) {
    const modal = document.getElementById('qr-share-modal');
    const qrImg = document.getElementById('qr-code-img');
    const linkInput = document.getElementById('share-link-input');
    const copyBtn = document.getElementById('btn-copy-link');
    
    if (!modal || !qrImg || !linkInput || !copyBtn) return;

    // Generate Share URL pointing directly to this ad
    const shareUrl = `${window.location.origin}${window.location.pathname}?adId=${ad.id}`;
    linkInput.value = shareUrl;

    // Use free public QR Server API to generate QR Code image client-side
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(shareUrl)}`;

    // Reset copy button styling
    copyBtn.textContent = "Копировать ссылку";
    copyBtn.style.background = "var(--accent)";

    // Bind Copy Link Click
    copyBtn.onclick = () => {
        linkInput.select();
        navigator.clipboard.writeText(shareUrl)
            .then(() => {
                copyBtn.textContent = "Ссылка скопирована! ✓";
                copyBtn.style.background = "#10b981"; // Success green
                setTimeout(() => {
                    copyBtn.textContent = "Копировать ссылку";
                    copyBtn.style.background = "var(--accent)";
                }, 2000);
            })
            .catch(err => {
                alert("Ошибка копирования в буфер обмена.");
            });
    };

    // Close handler
    const closeBtn = document.getElementById('qr-modal-close');
    closeBtn.onclick = () => modal.classList.remove('active');

    modal.classList.add('active');
}

// Customization Theme changer
function setCustomTheme(theme) {
    localStorage.setItem('lalafo_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
    
    // Toggle active highlights in modal
    document.querySelectorAll('[id^="theme-btn-"]').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`theme-btn-${theme}`);
    if (activeBtn) activeBtn.classList.add('active');
}

// Customization Accent color changer
function setCustomAccent(primaryColor, accentColor) {
    localStorage.setItem('lalafo_accent_primary', primaryColor);
    localStorage.setItem('lalafo_accent_color', accentColor);
    
    document.documentElement.style.setProperty('--primary', primaryColor);
    document.documentElement.style.setProperty('--accent', accentColor);
    
    // Toggle active highlights on color circles
    document.querySelectorAll('.color-dot').forEach(dot => {
        if (dot.dataset.color === primaryColor) dot.classList.add('active');
        else dot.classList.remove('active');
    });
}

// Customization Font Size scaler
function setCustomFontSize(size) {
    localStorage.setItem('lalafo_font_size', size);
    
    const fontScale = size === 'small' ? 0.9 : (size === 'large' ? 1.15 : 1.0);
    document.documentElement.style.setProperty('--font-scale', fontScale);
    
    // Toggle active highlights in modal
    document.querySelectorAll('[id^="font-btn-"]').forEach(btn => btn.classList.remove('active'));
    const btnId = size === 'small' ? 'font-btn-sm' : (size === 'large' ? 'font-btn-lg' : 'font-btn-md');
    const activeBtn = document.getElementById(btnId);
    if (activeBtn) activeBtn.classList.add('active');
}

// Customization Border Radius changer
function setCustomRadius(radius) {
    localStorage.setItem('lalafo_border_radius', radius);
    
    const smVal = radius === '0px' ? '0px' : (radius === '28px' ? '16px' : '8px');
    const lgVal = radius === '0px' ? '0px' : (radius === '28px' ? '40px' : '24px');
    
    document.documentElement.style.setProperty('--border-radius-sm', smVal);
    document.documentElement.style.setProperty('--border-radius-md', radius);
    document.documentElement.style.setProperty('--border-radius-lg', lgVal);

    // Toggle active highlights in modal
    document.querySelectorAll('[id^="radius-btn-"]').forEach(btn => btn.classList.remove('active'));
    const btnId = radius === '0px' ? 'radius-btn-sharp' : (radius === '28px' ? 'radius-btn-round' : 'radius-btn-standard');
    const activeBtn = document.getElementById(btnId);
    if (activeBtn) activeBtn.classList.add('active');
}

// Customization Border Radius changer
function setCustomRadius(radius) {
    localStorage.setItem('lalafo_border_radius', radius);
    
    const smVal = radius === '0px' ? '0px' : (radius === '28px' ? '16px' : '8px');
    const lgVal = radius === '0px' ? '0px' : (radius === '28px' ? '40px' : '24px');
    
    document.documentElement.style.setProperty('--border-radius-sm', smVal);
    document.documentElement.style.setProperty('--border-radius-md', radius);
    document.documentElement.style.setProperty('--border-radius-lg', lgVal);

    // Toggle active highlights in modal
    document.querySelectorAll('[id^="radius-btn-"]').forEach(btn => btn.classList.remove('active'));
    const btnId = radius === '0px' ? 'radius-btn-sharp' : (radius === '28px' ? 'radius-btn-round' : 'radius-btn-standard');
    const activeBtn = document.getElementById(btnId);
    if (activeBtn) activeBtn.classList.add('active');
}

// Render dynamic SVG price sparkline chart
function renderPriceHistoryUI(ad) {
    const chartContainer = document.getElementById('price-history-chart-container');
    const listContainer = document.getElementById('price-history-list-items');
    if (!chartContainer || !listContainer) return;

    const history = ad.priceHistory || [];
    if (history.length === 0) {
        chartContainer.innerHTML = `<span style="font-size: 12px; color: var(--text-muted);">История цен пуста</span>`;
        listContainer.innerHTML = '';
        return;
    }

    // Draw SVG Sparkline
    const prices = history.map(h => h.price);
    const minP = Math.min(...prices);
    const maxP = Math.max(...prices);
    const deltaP = maxP - minP || 1;

    const paddingX = 40;
    const paddingY = 15;
    const width = 360;
    const height = 80;
    const stepX = (width - paddingX * 2) / (history.length - 1 || 1);

    const points = history.map((item, index) => {
        const x = paddingX + index * stepX;
        const y = height - paddingY - ((item.price - minP) / deltaP) * (height - paddingY * 2);
        return { x, y, price: item.price, date: item.date };
    });

    let svgHtml = `<svg width="100%" height="100%" viewBox="0 0 ${width} ${height}" style="overflow: visible;">`;
    // Horizontal grid dashed lines
    svgHtml += `<line x1="${paddingX}" y1="${paddingY}" x2="${width - paddingX}" y2="${paddingY}" stroke="var(--border-color)" stroke-dasharray="3,3" />`;
    svgHtml += `<line x1="${paddingX}" y1="${height - paddingY}" x2="${width - paddingX}" y2="${height - paddingY}" stroke="var(--border-color)" stroke-dasharray="3,3" />`;

    // Path Line
    const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
    svgHtml += `<path d="${pathD}" fill="none" stroke="var(--primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />`;

    // Dots and text
    points.forEach((p) => {
        svgHtml += `
            <circle cx="${p.x}" cy="${p.y}" r="5" fill="var(--bg-secondary)" stroke="var(--primary)" stroke-width="3" />
            <text x="${p.x}" y="${p.y - 10}" text-anchor="middle" font-size="9" font-weight="700" fill="var(--text-primary)">${p.price.toLocaleString()} KGS</text>
            <text x="${p.x}" y="${height - 2}" text-anchor="middle" font-size="8" fill="var(--text-muted)">${p.date}</text>
        `;
    });
    svgHtml += `</svg>`;
    chartContainer.innerHTML = svgHtml;

    // Populate List
    let listHtml = '';
    for (let i = history.length - 1; i >= 0; i--) {
        const item = history[i];
        let diffHtml = '';
        if (i > 0) {
            const prevPrice = history[i - 1].price;
            const drop = prevPrice - item.price;
            if (drop > 0) {
                const percent = Math.round((drop / prevPrice) * 100);
                diffHtml = `<span class="price-drop-badge">-${percent}% (Снижено)</span>`;
            } else if (drop < 0) {
                const percent = Math.round((Math.abs(drop) / prevPrice) * 100);
                diffHtml = `<span class="price-drop-badge" style="background: var(--primary-light); color: var(--primary);">+${percent}% (Повышено)</span>`;
            }
        } else {
            diffHtml = `<span class="price-drop-badge" style="background: var(--bg-tertiary); color: var(--text-secondary);">Первоначальная цена</span>`;
        }

        listHtml += `
            <div class="price-history-item">
                <span class="price-history-date">${item.date}</span>
                <span class="price-history-change-desc">${diffHtml}</span>
                <span class="price-history-value">${item.price.toLocaleString()} KGS</span>
            </div>
        `;
    }
    listContainer.innerHTML = listHtml;
}

let videoCallTimer = null;
let callDurationInterval = null;
let ringerInterval = null;
let audioCtx = null;

// Ring beep generator using Web Audio
function playRingerBeep() {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(425, audioCtx.currentTime);
        
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + 0.05);
        gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime + 1.0);
        gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1.1);
        
        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 1.2);
    } catch(e) {
        console.log("Audio ringer blocked:", e);
    }
}

// Trigger simulated product video call
function openVideoCall(ad) {
    const modal = document.getElementById('video-call-modal');
    const ringingScreen = document.getElementById('video-call-ringing');
    const streamScreen = document.getElementById('video-call-stream');
    const avatarIcon = document.getElementById('video-call-avatar-icon');
    const callerName = document.getElementById('video-call-caller-name');
    const statusLabel = document.getElementById('video-call-status-label');
    const durationLabel = document.getElementById('video-call-duration');
    const feedImg = document.getElementById('video-feed-img');
    const sellerNameTag = document.getElementById('video-call-seller-name-tag');
    
    if (!modal || !ringingScreen || !streamScreen) return;

    // Reset views
    ringingScreen.style.display = 'flex';
    streamScreen.style.display = 'none';
    statusLabel.textContent = "Исходящий видеозвонок...";
    durationLabel.textContent = "00:00";
    
    // Set caller details
    callerName.textContent = ad.seller.name;
    avatarIcon.textContent = ad.seller.name.charAt(0).toUpperCase();
    sellerNameTag.innerHTML = `${ad.seller.name} <span class="video-call-badge-live">LIVE</span>`;
    
    // Open modal
    modal.classList.add('active');

    // Start audio ringing tones
    playRingerBeep();
    if (ringerInterval) clearInterval(ringerInterval);
    ringerInterval = setInterval(playRingerBeep, 2500);

    // Call duration timer variables
    let callDurationSeconds = 0;

    // Simulate answer after 2.5 seconds
    if (videoCallTimer) clearTimeout(videoCallTimer);
    videoCallTimer = setTimeout(() => {
        clearInterval(ringerInterval);
        
        // Play connection tone
        try {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.frequency.setValueAtTime(600, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
            osc.start(audioCtx.currentTime);
            osc.stop(audioCtx.currentTime + 0.15);
        } catch(e){}

        // Toggle screens
        ringingScreen.style.display = 'none';
        streamScreen.style.display = 'block';

        // Select live feed representation depending on item
        let feedUrl = 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500'; // Generic camera show
        if (ad.id === 'ad-1') {
            feedUrl = 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500'; // iPhone live view
        } else if (ad.id === 'ad-2') {
            feedUrl = 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500'; // BMW Interior live view
        } else if (ad.id === 'ad-5') {
            feedUrl = 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500'; // PS5 console show
        } else if (ad.category === 'fashion') {
            feedUrl = 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500'; // Clothes racks
        } else if (ad.category === 'homegarden') {
            feedUrl = 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500'; // Garden tools inspection
        } else if (ad.category === 'realestate') {
            feedUrl = 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500'; // Room panning view
        }
        feedImg.src = feedUrl;

        // Run timer ticks
        if (callDurationInterval) clearInterval(callDurationInterval);
        callDurationInterval = setInterval(() => {
            callDurationSeconds++;
            const mm = String(Math.floor(callDurationSeconds / 60)).padStart(2, '0');
            const ss = String(callDurationSeconds % 60).padStart(2, '0');
            durationLabel.textContent = `${mm}:${ss}`;
        }, 1000);
    }, 2800);

    // End call handler helper
    const endCall = () => {
        clearTimeout(videoCallTimer);
        clearInterval(ringerInterval);
        clearInterval(callDurationInterval);
        modal.classList.remove('active');
        
        // Play hangup tone
        try {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.frequency.setValueAtTime(300, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
            osc.start(audioCtx.currentTime);
            osc.stop(audioCtx.currentTime + 0.2);
        } catch(e){}
    };

    // Bind decline button and hangup buttons
    document.getElementById('btn-ringing-decline').onclick = endCall;
    document.getElementById('btn-call-hangup').onclick = endCall;

    // Mic and Camera mock toggles
    const muteBtn = document.getElementById('btn-call-mute');
    muteBtn.onclick = () => {
        muteBtn.classList.toggle('active-off');
        muteBtn.title = muteBtn.classList.contains('active-off') ? "Включить микрофон" : "Выключить микрофон";
        muteBtn.textContent = muteBtn.classList.contains('active-off') ? "🔇" : "🎙️";
    };

    const camBtn = document.getElementById('btn-call-camera');
    camBtn.onclick = () => {
        camBtn.classList.toggle('active-off');
        camBtn.title = camBtn.classList.contains('active-off') ? "Включить ..." : "Выключить ...";
        camBtn.textContent = camBtn.classList.contains('active-off') ? "❌📷" : "📷";
        
        // Renders dummy dark preview if camera is off
        const preview = document.querySelector('.user-video-preview img');
        if (preview) {
            preview.style.filter = camBtn.classList.contains('active-off') ? "brightness(0)" : "none";
        }
    };
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
window.openAdFromMap = openAdFromMap;
window.buyDiscountedAd = buyDiscountedAd;
window.updateMapMarkers = updateMapMarkers;
window.openMutualRatingModal = openMutualRatingModal;
window.updateBuyerRatingUI = updateBuyerRatingUI;
window.openFraudScanner = openFraudScanner;
window.openShareQrModal = openShareQrModal;
window.setCustomTheme = setCustomTheme;
window.setCustomAccent = setCustomAccent;
window.setCustomFontSize = setCustomFontSize;
window.setCustomRadius = setCustomRadius;
window.openVideoCall = openVideoCall;
window.renderPriceHistoryUI = renderPriceHistoryUI;

// Run App on Load
window.addEventListener('DOMContentLoaded', init);
