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