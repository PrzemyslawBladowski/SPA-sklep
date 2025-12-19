// Global state
let currentPage = 'home';
let isMenuOpen = false;

// Product data
const recommendations = [
  {
    id: 1,
    name: 'Macallan 12 Double Cask',
    category: 'Single Malt Whisky',
    price: '399 zł',
    image: 'https://images.unsplash.com/photo-1717413662498-35bd8638a347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGlza3klMjBtYWNhbGxhbiUyMGJvdHRsZXxlbnwxfHx8fDE3NjI1MjU2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Wyjątkowa szkocka whisky single malt, dojrzewająca w beczkach po sherry i bourbon. Idealna harmonia smaków owocowych i dębowych.',
    alcohol: '40%',
    volume: '700ml',
    origin: 'Szkocja',
    taste: 'Nuty miodu, wanilii i cytrusów z delikatnym dębowym wykończeniem'
  },
  {
    id: 2,
    name: 'Bourbon Premium Selection',
    category: 'Bourbon Collection',
    price: '289 zł',
    image: 'https://images.unsplash.com/photo-1608471250290-f7d6b569ff46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3VyYm9uJTIwd2hpc2tleSUyMGJvdHRsZXN8ZW58MXx8fHwxNzYyNTI1NjU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Klasyczny amerykański bourbon o bogatym, pełnym smaku. Doskonały wybór dla miłośników mocniejszych doznań.',
    alcohol: '45%',
    volume: '750ml',
    origin: 'Kentucky, USA',
    taste: 'Karmel, dąb, wanilia z nutami przypraw i długim, ciepłym finiszem'
  },
  {
    id: 3,
    name: 'Zestaw Koneserski',
    category: 'Gift Set',
    price: '599 zł',
    image: 'https://images.unsplash.com/photo-1597716967215-0ec467121d14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGlza3klMjBnaWZ0JTIwc2V0fGVufDF8fHx8MTc2MjUyNTY1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Ekskluzywny zestaw zawierający trzy wyselekcjonowane whisky w eleganckim opakowaniu. Idealny prezent dla koneserów.',
    alcohol: 'Mix 40-43%',
    volume: '3x200ml',
    origin: 'Szkocja',
    taste: 'Zestaw trzech różnych profili smakowych - od delikatnych po intensywne'
  }
];

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  // Check age verification
  const verified = sessionStorage.getItem('ageVerified');
  if (verified === 'true') {
    document.getElementById('ageVerificationModal').style.display = 'none';
  }
  
  // Load home page
  navigateTo('home');
});

// Age verification
function verifyAge() {
  sessionStorage.setItem('ageVerified', 'true');
  document.getElementById('ageVerificationModal').style.display = 'none';
}

// Navigation
function navigateTo(page) {
  currentPage = page;
  
  // Update active nav links
  document.querySelectorAll('.nav-link, .nav-mobile-link').forEach(link => {
    if (link.getAttribute('data-page') === page) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // Close mobile menu
  if (isMenuOpen) {
    toggleMenu();
  }
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Render page
  renderPage(page);
}

// Toggle mobile menu
function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIconOpen = document.getElementById('menuIconOpen');
  const menuIconClose = document.getElementById('menuIconClose');
  
  if (isMenuOpen) {
    mobileMenu.style.display = 'block';
    menuIconOpen.style.display = 'none';
    menuIconClose.style.display = 'block';
  } else {
    mobileMenu.style.display = 'none';
    menuIconOpen.style.display = 'block';
    menuIconClose.style.display = 'none';
  }
}

// Render page content
function renderPage(page) {
  const mainContent = document.getElementById('mainContent');
  
  switch (page) {
    case 'home':
      mainContent.innerHTML = renderHomePage();
      break;
    case 'about':
      mainContent.innerHTML = renderAboutPage();
      break;
    case 'contact':
      mainContent.innerHTML = renderContactPage();
      setupContactForm();
      break;
    default:
      mainContent.innerHTML = renderHomePage();
  }
}

// Homepage content
function renderHomePage() {
  return `
    <!-- Hero Banner -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-grid">
          <div>
            <div class="hero-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <span class="hero-badge-text">EKSKLUZYWNA OFERTA</span>
            </div>
            <h1 class="hero-title">
              The Macallan
              <br>
              <span class="hero-title-accent">Perfekcja w każdej kropli</span>
            </h1>
            <p class="hero-text">
              Odkryj świat najpopularniejszej szkockiej whisky single malt. The Macallan to 
              synonim wyjątkowej jakości, tradycji i elegancji. Każda butelka to dzieło sztuki 
              destylacyjnej, tworzone z pasją od 1824 roku.
            </p>
          </div>
          <div class="hero-image-wrapper">
            <div class="hero-image-glow"></div>
            <img 
              src="https://images.unsplash.com/photo-1746422029293-43065303dab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGlza3klMjBjb2xsZWN0aW9uJTIwbHV4dXJ5fGVufDF8fHx8MTc2MjUyNTY1OHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Macallan Collection"
              class="hero-image"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="section">
      <div class="container">
        <div class="grid grid-3">
          <div class="feature-card">
            <div class="feature-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <h3 class="feature-title">Szybka dostawa</h3>
            <p class="feature-text">
              Bezpieczna dostawa alkoholu prosto do Twoich drzwi w 24-48h
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 class="feature-title">Sprawdzona jakość</h3>
            <p class="feature-text">
              Tylko oryginalne produkty od zaufanych dostawców
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 12 20 22 4 22 4 12"></polyline>
                <rect x="2" y="7" width="20" height="5"></rect>
                <line x1="12" y1="22" x2="12" y2="7"></line>
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
              </svg>
            </div>
            <h3 class="feature-title">Zestawy prezentowe</h3>
            <p class="feature-text">
              Eleganckie zestawy idealne na każdą okazję
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Recommendations -->
    <section class="section section-gray" id="recommendations">
      <div class="container">
        <div class="text-center mb-8">
          <h2 class="section-title">Nasze rekomendacje</h2>
          <p class="section-subtitle">
            Starannie wyselekcjonowane alkohole premium
          </p>
        </div>

        <div class="grid grid-3">
          ${recommendations.map(product => `
            <div class="product-card">
              <div class="product-image-wrapper">
                <img 
                  src="${product.image}"
                  alt="${product.name}"
                  class="product-image"
                >
              </div>
              <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-footer">
                  <span class="product-price">${product.price}</span>
                  <button 
                    onclick="openProductModal(${product.id})"
                    class="product-link"
                  >
                    Zobacz więcej →
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="section">
      <div class="container">
        <div class="cta-section">
          <h2 class="cta-title">Dołącz do grona koneserów</h2>
          <p class="cta-text">
            Zapisz się do naszego newslettera i otrzymaj ekskluzywne informacje 
            o nowych produktach oraz limitowanych edycjach
          </p>
          <div class="cta-form">
            <input
              type="email"
              placeholder="Twój adres e-mail"
              class="cta-input"
            >
            <button class="cta-button">
              Zapisz się
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}

// About page content
function renderAboutPage() {
  return `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container text-center">
        <h1 class="hero-title">O Spirytus.pl</h1>
        <p class="hero-text max-w-3xl mx-auto">
          Jesteśmy platformą e-commerce specjalizującą się w dostawie wysokiej jakości 
          alkoholi premium. Naszą misją jest dostarczanie wyjątkowych trunków z całego 
          świata prosto do drzwi naszych klientów.
        </p>
      </div>
    </section>

    <!-- Company Info -->
    <section class="section">
      <div class="container">
        <div class="grid grid-2" style="align-items: center;">
          <div>
            <h2 class="mb-4">Nasza firma</h2>
            <p class="feature-text mb-4">
              Spirytus.pl to polska platforma e-commerce działająca z pasją i zaangażowaniem 
              w branży alkoholowej. Oferujemy starannie wyselekcjonowane alkohole premium, 
              w tym whisky, bourbon, wina oraz ekskluzywne zestawy kolekcjonerskie.
            </p>
            <p class="feature-text mb-4">
              Nasza firma mieści się w Gdańsku, skąd kierujemy wszystkie wysyłki, 
              gwarantując szybką i bezpieczną dostawę na terenie całej Polski. Współpracujemy 
              wyłącznie z zaufanymi dostawcami, aby zapewnić autentyczność i najwyższą 
              jakość każdego produktu.
            </p>
            <p class="feature-text">
              Wierzymy, że dobry alkohol to nie tylko napój, ale doświadczenie, które warto 
              dzielić z najbliższymi w wyjątkowych momentach.
            </p>
          </div>
          <div class="stats-grid">
            <div class="stat-card">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stat-icon">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 class="stat-value">5000+</h3>
              <p class="stat-label">Zadowolonych klientów</p>
            </div>
            <div class="stat-card">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stat-icon">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
              <h3 class="stat-value">500+</h3>
              <p class="stat-label">Produktów premium</p>
            </div>
            <div class="stat-card">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stat-icon">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h3 class="stat-value">100%</h3>
              <p class="stat-label">Bezpieczna dostawa</p>
            </div>
            <div class="stat-card">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stat-icon">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <h3 class="stat-value">2020</h3>
              <p class="stat-label">Rok założenia</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission -->
    <section class="section section-gray">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="mb-4">Nasza misja</h2>
          <p class="feature-text mb-4">
            Chcemy demokratyzować dostęp do najlepszych alkoholi świata, umożliwiając 
            wszystkim pasjonatom odkrywanie wyjątkowych smaków bez konieczności 
            podróżowania po specjalistycznych sklepach.
          </p>
          <p class="feature-text">
            Stawiamy na edukację, transparentność i odpowiedzialną konsumpcję alkoholu. 
            Naszym celem jest budowanie długotrwałych relacji z klientami poprzez 
            doskonałą obsługę i najwyższą jakość produktów.
          </p>
        </div>
      </div>
    </section>

    <!-- Legal & Permissions -->
    <section class="section">
      <div class="container">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-center mb-6">Pozwolenia i zgodność prawna</h2>
          
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div class="info-card">
              <div class="info-card-content">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="info-card-icon">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <div>
                  <h3 class="info-card-title">Zezwolenie na sprzedaż alkoholu</h3>
                  <p class="info-card-text">
                    Spirytus.pl posiada wszystkie wymagane prawem zezwolenia na sprzedaż 
                    napojów alkoholowych na terenie Rzeczypospolitej Polskiej. Działamy 
                    zgodnie z ustawą o wychowaniu w trzeźwości i przeciwdziałaniu 
                    alkoholizmowi.
                  </p>
                </div>
              </div>
            </div>

            <div class="info-card">
              <div class="info-card-content">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="info-card-icon">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <div>
                  <h3 class="info-card-title">Odpowiedzialna sprzedaż</h3>
                  <p class="info-card-text">
                    Sprzedajemy alkohol wyłącznie osobom pełnoletnim. Weryfikujemy wiek 
                    klientów zarówno podczas składania zamówienia online, jak i przy 
                    odbiorze przesyłki. Nie wysyłamy alkoholu do osób, które nie ukończyły 
                    18 roku życia.
                  </p>
                </div>
              </div>
            </div>

            <div class="info-card">
              <div class="info-card-content">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="info-card-icon">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
                <div>
                  <h3 class="info-card-title">Certyfikaty i gwarancje</h3>
                  <p class="info-card-text">
                    Wszystkie produkty w naszej ofercie pochodzą z autoryzowanych źródeł 
                    i są objęte gwarancją autentyczności. Współpracujemy bezpośrednio 
                    z producentami i oficjalnymi dystrybutorami.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="alert-box">
            <p class="alert-text">
              <strong>Ostrzeżenie:</strong> Nadmierne spożywanie alkoholu jest szkodliwe dla zdrowia. 
              Sprzedaż alkoholu osobom poniżej 18 roku życia jest zabroniona.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Contact page content
function renderContactPage() {
  return `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container text-center">
        <h1 class="hero-title">Skontaktuj się z nami</h1>
        <p class="hero-text max-w-3xl mx-auto">
          Masz pytania? Chcesz dowiedzieć się więcej o naszej ofercie? 
          Jesteśmy tu, aby pomóc. Skontaktuj się z nami w dogodny dla Ciebie sposób.
        </p>
      </div>
    </section>

    <!-- Contact Info & Form -->
    <section class="section">
      <div class="container">
        <div class="grid grid-2" style="gap: 3rem;">
          <!-- Contact Information -->
          <div>
            <h2 class="mb-6">Informacje kontaktowe</h2>
            
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div class="contact-info">
                <div class="contact-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="contact-icon">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="contact-label">Telefon</h3>
                  <div class="contact-value">
                    <a href="tel:+48771892020">+48 771 892 020</a>
                  </div>
                </div>
              </div>

              <div class="contact-info">
                <div class="contact-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="contact-icon">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 class="contact-label">E-mail</h3>
                  <div class="contact-value">
                    <a href="mailto:kontakt@spirytus.pl">kontakt@spirytus.pl</a>
                  </div>
                </div>
              </div>

              <div class="contact-info">
                <div class="contact-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="contact-icon">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 class="contact-label">Adres</h3>
                  <p class="contact-value">
                    Aleja Grunwaldzka 238A<br>
                    80-266 Gdańsk
                  </p>
                </div>
              </div>

              <div class="contact-info">
                <div class="contact-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="contact-icon">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 class="contact-label">Godziny obsługi klienta</h3>
                  <p class="contact-value">
                    Poniedziałek - Piątek: 8:00 - 16:00<br>
                    Sobota - Niedziela: Zamknięte
                  </p>
                </div>
              </div>
            </div>

            <div class="alert-box" style="margin-top: 2rem;">
              <h3 class="mb-3">Szybkie odpowiedzi</h3>
              <p class="alert-text">
                Odpowiadamy na wszystkie zapytania w ciągu 24 godzin roboczych. 
                W pilnych sprawach prosimy o kontakt telefoniczny.
              </p>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <h2 class="mb-6">Formularz kontaktowy</h2>
            
            <div id="formSuccess" class="form-success" style="display: none;">
              Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.
            </div>

            <form id="contactForm" class="form">
              <div class="form-group">
                <label for="name" class="form-label">
                  Imię i nazwisko *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  class="form-input"
                >
              </div>

              <div class="form-group">
                <label for="email" class="form-label">
                  Adres e-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  class="form-input"
                >
              </div>

              <div class="form-group">
                <label for="subject" class="form-label">
                  Temat *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  class="form-input"
                >
              </div>

              <div class="form-group">
                <label for="message" class="form-label">
                  Wiadomość *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  class="form-textarea"
                ></textarea>
              </div>

              <button type="submit" class="form-submit">
                Wyślij wiadomość
              </button>

              <p class="form-note">
                * Pola wymagane. Twoje dane osobowe będą przetwarzane zgodnie z naszą 
                polityką prywatności.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="section section-gray">
      <div class="container">
        <div class="text-center mb-8">
          <h2 class="section-title">Nasza lokalizacja</h2>
          <p class="section-subtitle">
            Znajdziesz nas w centrum Gdańska przy Alei Grunwaldzkiej
          </p>
        </div>
        
        <div style="background-color: #ffffff; border-radius: 0.5rem; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
          <div class="map-placeholder">
            <div class="map-content">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="map-icon">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <p class="map-text">
                Aleja Grunwaldzka 238A, 80-266 Gdańsk
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Setup contact form
function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show success message
      const successDiv = document.getElementById('formSuccess');
      successDiv.style.display = 'block';
      
      // Reset form
      form.reset();
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        successDiv.style.display = 'none';
      }, 3000);
      
      // Scroll to success message
      successDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
}

// Product modal
function openProductModal(productId) {
  const product = recommendations.find(p => p.id === productId);
  if (!product) return;
  
  const modal = document.getElementById('productModal');
  const modalContent = document.getElementById('modalContent');
  
  modalContent.innerHTML = `
    <div class="modal-image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    
    <div class="modal-details">
      <span class="modal-category">${product.category}</span>
      <h2 class="modal-title">${product.name}</h2>
      <p class="modal-description">${product.description}</p>
      
      <div class="modal-specs">
        <div class="modal-spec-item">
          <span class="modal-spec-label">Pojemność:</span>
          <span class="modal-spec-value">${product.volume}</span>
        </div>
        <div class="modal-spec-item">
          <span class="modal-spec-label">Zawartość alkoholu:</span>
          <span class="modal-spec-value">${product.alcohol}</span>
        </div>
        <div class="modal-spec-item">
          <span class="modal-spec-label">Pochodzenie:</span>
          <span class="modal-spec-value">${product.origin}</span>
        </div>
      </div>
      
      <div class="modal-taste">
        <h3 class="modal-taste-title">Profil smakowy</h3>
        <p class="modal-taste-text">${product.taste}</p>
      </div>
      
      <div class="modal-footer">
        <div class="modal-price-row">
          <span class="modal-price-label">Cena:</span>
          <span class="modal-price-value">${product.price}</span>
        </div>
        <button class="modal-add-button">
          Dodaj do koszyka
        </button>
      </div>
    </div>
  `;
  
  modal.style.display = 'flex';
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  modal.style.display = 'none';
}
