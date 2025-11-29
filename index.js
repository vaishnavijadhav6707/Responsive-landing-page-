  
        document.addEventListener('DOMContentLoaded', () => {
            const navbar = document.getElementById('navbar');
            const mobileBtn = document.getElementById('mobile-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            // 1. SCROLL LOGIC
            // We listen for the scroll event to toggle styles
            window.addEventListener('scroll', () => {
                if (window.scrollY > 10) {
                    // Scrolled State
                    navbar.classList.remove('bg-transparent', 'text-white', 'py-4');
                    navbar.classList.add('bg-white', 'text-gray-900', 'shadow-md', 'py-2');
                } else {
                    // Top (Initial) State
                    navbar.classList.add('bg-transparent', 'text-white', 'py-4');
                    navbar.classList.remove('bg-white', 'text-gray-900', 'shadow-md', 'py-2');
                    
                    // Close mobile menu if we scroll to top to avoid visual bugs with transparent text
                    if(mobileMenu.classList.contains('open')) {
                       toggleMobileMenu();
                    }
                }
            });

            // 2. MOBILE MENU TOGGLE
            function toggleMobileMenu() {
                mobileMenu.classList.toggle('open');
                
                // Switch icon from hamburger (list) to X (x)
                if (mobileMenu.classList.contains('open')) {
                    menuIcon.classList.remove('ph-list');
                    menuIcon.classList.add('ph-x');
                    
                    // Force navbar background to white if opening menu while at top
                    // so links are visible
                    if (window.scrollY <= 10) {
                        navbar.classList.remove('bg-transparent', 'text-white');
                        navbar.classList.add('bg-white', 'text-gray-900');
                    }
                } else {
                    menuIcon.classList.remove('ph-x');
                    menuIcon.classList.add('ph-list');

                    // Revert navbar if at top
                    if (window.scrollY <= 10) {
                        navbar.classList.add('bg-transparent', 'text-white');
                        navbar.classList.remove('bg-white', 'text-gray-900');
                    }
                }
            }

            mobileBtn.addEventListener('click', toggleMobileMenu);

            // 3. CLOSE MOBILE MENU ON LINK CLICK
            // Improves UX by closing the drawer after selection
            mobileLinks.forEach(link => {
                link.addEventListener('click', toggleMobileMenu);
            });
        });
    