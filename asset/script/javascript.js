// News Data - Focused on Persipura and Jayapura
const newsData = [
    {
        id: 1,
        title: "Persipura Jayapura Kalahkan Persis Solo 2-1 di Kandang",
        excerpt: "Gol dari Boaz Solossa dan Teky Tiool mengantar Mutiara Hitam meraih tiga poin penuh di Liga 1.",
        category: "persipura",
        image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&q=80",
        author: "Tim Redaksi",
        time: "30 menit lalu",
        trending: 1
    },
    {
        id: 2,
        title: "Boaz Solossa: Kami Ingin Juara Liga 1 Musim Ini",
        excerpt: "Kapten tim Persipura menegaskan target tim untuk meraih gelar juara musim ini.",
        category: "persipura",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&q=80",
        author: "Yoga Huwaa",
        time: "1 jam lalu",
        trending: 2
    },
    {
        id: 3,
        title: "Stadion Mandala Jayapura Akan Direnovasi Total",
        excerpt: "Pemerintah Provinsi Papua mengucurkan dana Rp 150 Miliar untuk renovasi total stadion kebanggaan warga Papua.",
        category: "daerah",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&q=80",
        author: "Martha Wanma",
        time: "2 jam lalu",
        trending: 3
    },
    {
        id: 4,
        title: "Pemkot Jayapura Luncurkan Program Beasiswa Pendidikan",
        excerpt: "Program beasiswa ini ditujukan untuk pelajar berprestasi dari keluarga kurang mampu.",
        category: "daerah",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
        author: "Sartika Tabuni",
        time: "3 jam lalu",
        trending: 4
    },
    {
        id: 5,
        title: "Pasar Sentani Jayapura Terbakar, Kerugian Mencapai Miliaran",
        excerpt: "Kebakaran hebat melalap ratusan kios di pasar Sentani, Jayapura. Belum ada korban jiwa dilaporkan.",
        category: "daerah",
        image: "https://images.unsplash.com/photo-1565636208756-88c6c5c2bb14?w=400&q=80",
        author: "Danny Numberi",
        time: "4 jam lalu",
        trending: 5
    },
    {
        id: 6,
        title: "Pemain Muda Persipura Didaftar ke PSSI untuk Timnas U-23",
        excerpt: "Dua pemain muda Persipura, Yanto dan Dicky, masuk dalam daftar pemanggilan Timnas Indonesia U-23.",
        category: "persipura",
        image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&q=80",
        author: "Tim Redaksi",
        time: "5 jam lalu",
        trending: 0
    },
    {
        id: 7,
        title: "Gubernur Papua Resmikan Jalan Trans Papua Bagian Timur",
        excerpt: "Jalan sepanjang 100 km ini menghubungkan Jayapura dengan beberapa kabupaten di Pegunungan Papua.",
        category: "daerah",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&q=80",
        author: "Rully Saba",
        time: "6 jam lalu",
        trending: 0
    },
    {
        id: 8,
        title: "Harga Cabai di Jayapura Melonjak Rp 20.000 per Kg",
        excerpt: "Kenaikan harga dipicu oleh sulitnya distribusi barang dari luar Papua akibat cuaca buruk.",
        category: "ekonomi",
        image: "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=400&q=80",
        author: "Mince Kogoya",
        time: "7 jam lalu",
        trending: 0
    },
    {
        id: 9,
        title: "Pesawat Sriwijaya Air Terpaksa Mendarat Darurat di Bandara Sentani",
        excerpt: "Insiden terjadi karena indikasi kerusakan mesin tak lama setelah lepas landas.",
        category: "nasional",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80",
        author: "Tim Redaksi",
        time: "8 jam lalu",
        trending: 0
    },
    {
        id: 10,
        title: "Bank Papua Salurkan Kredit UMKM Rp 50 Miliar di Jayapura",
        excerpt: "Penyaluran kredit ini untuk membantu pelaku usaha kecil menengah di Kota Jayapura pulih pasca pandemi.",
        category: "ekonomi",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80",
        author: "Yance Wenda",
        time: "9 jam lalu",
        trending: 0
    }
];

// Initialize variables
let displayedNews = 5;
let currentCategory = 'semua';

// DOM Elements
const newsGrid = document.getElementById('newsGrid');
const trendingList = document.getElementById('trendingList');
const categoryTabs = document.querySelectorAll('.tab-btn');
const mainNavLinks = document.querySelectorAll('#mainNav .nav-link');
const mobileNavLinks = document.querySelectorAll('#mobileNav a');
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchResultsList = document.getElementById('searchResultsList');
const themeToggle = document.getElementById('themeToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');
const newsletterForm = document.getElementById('newsletterForm');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const currentDateEl = document.getElementById('currentDate');
const sectionTitle = document.getElementById('sectionTitle');

// Set current date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
currentDateEl.textContent = new Date().toLocaleDateString('id-ID', options);

// Category colors
const categoryColors = {
    nasional: 'bg-primary',
    persipura: 'bg-red-600',
    daerah: 'bg-green-600',
    ekonomi: 'bg-blue-600',
    teknologi: 'bg-purple-600',
    olahraga: 'bg-orange-600'
};

const categoryNames = {
    'semua': 'Berita Terkini',
    'persipura': 'Berita Persipura',
    'daerah': 'Berita Daerah Jayapura',
    'nasional': 'Berita Nasional',
    'ekonomi': 'Berita Ekonomi',
    'teknologi': 'Berita Teknologi',
    'olahraga': 'Berita Olahraga'
};

// Render news
function renderNews() {
    const filteredNews = currentCategory === 'semua'
        ? newsData
        : newsData.filter(n => n.category === currentCategory);

    const newsToShow = filteredNews.slice(0, displayedNews);

    newsGrid.innerHTML = newsToShow.map((news, index) => `
                <article class="news-card bg-card rounded-lg overflow-hidden shadow-card cursor-pointer group" style="animation-delay: ${index * 0.1}s">
                    <div class="flex flex-col sm:flex-row gap-4 p-4">
                        <div class="relative sm:w-40 md:w-48 flex-shrink-0 overflow-hidden rounded-lg">
                            <div class="aspect-[16/10] sm:aspect-auto sm:h-full">
                                <img src="${news.image}" alt="${news.title}" class="card-image w-full h-full object-cover rounded-lg">
                            </div>
                            <span class="absolute top-2 left-2 ${categoryColors[news.category] || 'bg-gray-600'} text-white text-xs font-bold px-2 py-0.5 rounded uppercase">${news.category}</span>
                        </div>
                        <div class="flex flex-col justify-center">
                            <h3 class="font-serif text-base md:text-lg font-bold text-main leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">${news.title}</h3>
                            <p class="text-secondary text-sm line-clamp-2 mb-3 hidden sm:block">${news.excerpt}</p>
                            <div class="flex items-center gap-3 text-xs text-muted">
                                <span class="font-medium">${news.author}</span>
                                <span>•</span>
                                <span>${news.time}</span>
                            </div>
                        </div>
                    </div>
                </article>
            `).join('');

    loadMoreBtn.style.display = newsToShow.length >= filteredNews.length ? 'none' : 'inline-block';
}

// Render trending
function renderTrending() {
    const trending = newsData.filter(n => n.trending > 0).sort((a, b) => a.trending - b.trending);

    trendingList.innerHTML = trending.map(news => `
                <a href="#" class="flex gap-3 group" onclick="return false;">
                    <span class="text-2xl font-serif font-bold text-secondary/20 group-hover:text-primary transition-colors">${String(news.trending).padStart(2, '0')}</span>
                    <div class="flex-1">
                        <h4 class="font-medium text-main text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">${news.title}</h4>
                        <span class="text-xs text-muted">${news.time}</span>
                    </div>
                </a>
            `).join('');
}

// Central Filter Function
function filterNews(category) {
    currentCategory = category;
    displayedNews = 5;

    // Update Title
    sectionTitle.textContent = categoryNames[category] || 'Berita Terkini';

    // Update Desktop Nav
    mainNavLinks.forEach(link => {
        link.classList.remove('active', 'font-semibold', 'text-main');
        link.classList.add('font-medium', 'text-secondary');
        if (link.dataset.category === category) {
            link.classList.add('active', 'font-semibold', 'text-main');
            link.classList.remove('font-medium', 'text-secondary');
        }
    });

    // Update Mobile Nav
    mobileNavLinks.forEach(link => {
        link.classList.remove('bg-primary', 'text-white');
        link.classList.add('text-main');
        if (link.dataset.category === category) {
            link.classList.add('bg-primary', 'text-white');
            link.classList.remove('text-main');
        }
    });

    // Update Category Tabs
    categoryTabs.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-main', 'text-main');
        if (btn.dataset.category === category) {
            btn.classList.remove('bg-main', 'text-main');
            btn.classList.add('bg-primary', 'text-white');
        }
    });

    renderNews();

    // Scroll to content
    document.getElementById('contentArea').scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Close mobile menu if open
    mobileMenu.classList.remove('active');
}

// Category Tabs Click
categoryTabs.forEach(btn => {
    btn.addEventListener('click', () => {
        filterNews(btn.dataset.category);
    });
});

// Main Nav Click
mainNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        filterNews(link.dataset.category);
    });
});

// Mobile Nav Click
mobileNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        filterNews(link.dataset.category);
    });
});

// Search
searchBtn.addEventListener('click', () => {
    searchModal.classList.add('active');
    setTimeout(() => searchInput.focus(), 100);
});

closeSearch.addEventListener('click', () => {
    searchModal.classList.remove('active');
});

searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        searchModal.classList.remove('active');
    }
});

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (query.length > 2) {
        const results = newsData.filter(n =>
            n.title.toLowerCase().includes(query) ||
            n.excerpt.toLowerCase().includes(query) ||
            n.category.toLowerCase().includes(query)
        );

        if (results.length > 0) {
            searchResults.classList.remove('hidden');
            searchResultsList.innerHTML = results.slice(0, 4).map(news => `
                        <a href="#" class="flex gap-3 p-2 rounded-lg hover:bg-secondary transition-colors" onclick="return false;">
                            <img src="${news.image}" alt="" class="w-16 h-12 object-cover rounded">
                            <div>
                                <h4 class="font-medium text-main text-sm line-clamp-1">${news.title}</h4>
                                <span class="text-xs text-muted">${news.time}</span>
                            </div>
                        </a>
                    `).join('');
        } else {
            searchResults.classList.remove('hidden');
            searchResultsList.innerHTML = '<p class="text-secondary text-sm py-2">Tidak ada hasil ditemukan</p>';
        }
    } else {
        searchResults.classList.add('hidden');
    }
});

// Theme toggle
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
}

// Mobile menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active');
    }
});

// Newsletter
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Terima kasih telah berlangganan!');
    newsletterForm.reset();
});

// Load more
loadMoreBtn.addEventListener('click', () => {
    displayedNews += 3;
    renderNews();
});

// Toast
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

// Scroll reveal
function handleScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
            el.classList.add('active');
        }
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchModal.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// Initialize
renderNews();
renderTrending();
handleScrollReveal();
window.addEventListener('scroll', handleScrollReveal);
