// Shared Navigation Component
function createNavigation() {
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';

    // Use the same navigation structure for all pages
    const navigationHTML = `
        <div class="brand">
            <a href="index.html" style="text-decoration:none;color:inherit">
                <div class="logo-text">PROSPECTOR</div>
            </a>
        </div>
        <div class="nav">
            <a href="index.html#products">Our Work</a>
            <a href="index.html#gallery">Gallery</a>
            <a href="index.html#about">The Story</a>
            <a class="cta" href="index.html#contact">Get in Touch</a>
        </div>
        ${isHomePage ? '<div class="enquire-sticky"><a class="btn" href="#contact">Enquire to order</a></div>' : ''}
        ${isHomePage ? '<div class="sidebar-footer">Dunedin, Aotearoa NZ<br/>Built in small batches</div>' : ''}
    `;

    const sidebarInner = document.querySelector('.sidebar-inner');
    if (sidebarInner) {
        sidebarInner.innerHTML = navigationHTML;
    }
}

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', createNavigation);

const yearEl = document.getElementById('y');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const mcta = document.querySelector('.mobile-cta');
    if (mcta) {
        const mq = window.matchMedia('(max-width: 980px)');
        function toggleCTA(e){ mcta.style.display = e.matches ? 'inline-flex' : 'none'; }
        toggleCTA(mq); mq.addEventListener('change', toggleCTA);
    }

    // Enhanced scroll animations
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');
    const sidebar = document.querySelector('nav.sidebar');

    if (sidebar && navLinks.length > 0 && sections.length > 0) {
        // Smooth scroll with offset for sticky navbar
        navLinks.forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
              const navbarHeight = sidebar.offsetHeight;
              const targetPosition = targetSection.offsetTop - navbarHeight - 20;
              
              window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
              });
              
              // Update active state
              navLinks.forEach(l => l.removeAttribute('aria-current'));
              link.setAttribute('aria-current', 'page');
            }
          });
        });

        // Update active nav on scroll
        function updateActiveNav() {
          const navbarHeight = sidebar.offsetHeight;
          const scrollPos = window.scrollY + navbarHeight + 100;
          
          sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
              navLinks.forEach(link => link.removeAttribute('aria-current'));
              const activeLink = document.querySelector(`.nav a[href="#${sectionId}"]`);
              if (activeLink) {
                activeLink.setAttribute('aria-current', 'page');
              }
            }
          });
        }

        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav(); // Set initial active state
    }

    // No scroll position memory - pages load at top
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }