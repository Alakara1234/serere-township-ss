 let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }

    function nextSlide() {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }

    // Auto-rotate every 6 seconds
    setInterval(nextSlide, 6000);
    const backToTopBtn = document.getElementById("backToTopBtn");

  // Show button when user scrolls down
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  };

  // Scroll to top on click
  backToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  














































document.addEventListener('DOMContentLoaded', function() {
    
    function runScripts() {
        // --- Mobile Menu Toggle ---
        const mobileMenuButton = document.getElementById('nav-mobile-btn');
        const mobileMenu = document.getElementById('nav-mobile');
        
        if (mobileMenuButton && mobileMenu) {
            const menuIcon = mobileMenuButton.querySelector('i');
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                menuIcon.classList.toggle('fa-bars');
                menuIcon.classList.toggle('fa-times');
            });
        }
        
        // --- Scroll Animations ---
        const animatedElements = document.querySelectorAll('.fade-in-up');
        if ("IntersectionObserver" in window) {
            const scrollObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                rootMargin: '0px',
                threshold: 0.1
            });
            animatedElements.forEach(el => scrollObserver.observe(el));
        }

        // --- About Section Tabs ---
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        if (tabButtons.length > 0) {
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const tabId = button.dataset.tab;

                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    tabContents.forEach(content => {
                        content.classList.toggle('active', content.id === `${tabId}-content`);
                    });
                });
            });
        }

        // --- Team Slider Logic ---
        const teamSlider = document.getElementById('team-slider');
        if (teamSlider) {
            const slides = teamSlider.querySelectorAll('.slider-item');
            const dots = teamSlider.querySelectorAll('.slider-dot');
            const prevButton = teamSlider.querySelector('#team-slider-prev');
            const nextButton = teamSlider.querySelector('#team-slider-next');
            let currentSlide = 0;
            let slideInterval;

            if (slides.length > 0) {
                function showSlide(n) {
                    currentSlide = (n + slides.length) % slides.length;
                    
                    slides.forEach(slide => slide.classList.remove('active'));
                    slides[currentSlide].classList.add('active');

                    if(dots.length > 0) {
                        dots.forEach(dot => dot.classList.remove('active'));
                        dots[currentSlide].classList.add('active');
                    }
                }

                function next() {
                    showSlide(currentSlide + 1);
                }

                function startSlideShow() {
                    stopSlideShow();
                    slideInterval = setInterval(next, 5000);
                }

                function stopSlideShow() {
                    clearInterval(slideInterval);
                }

                if(dots.length > 0) {
                    dots.forEach((dot, index) => {
                        dot.addEventListener('click', () => {
                            stopSlideShow();
                            showSlide(index);
                            startSlideShow();
                        });
                    });
                }
                
                if (prevButton && nextButton) {
                    prevButton.addEventListener('click', () => {
                        stopSlideShow();
                        showSlide(currentSlide - 1);
                        startSlideShow();
                    });

                    nextButton.addEventListener('click', () => {
                        stopSlideShow();
                        next();
                        startSlideShow();
                    });
                }
                
                startSlideShow();
            }
        }

        // --- Navigation Active Link Logic ---
        const navContainer = document.getElementById('nav-desktop');
        if (navContainer) {
            const navLinks = navContainer.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('main section[id]');

            function updateActiveLink(activeId) {
                navLinks.forEach(link => {
                    const linkHref = link.getAttribute('href').substring(1);
                    link.classList.toggle('active', linkHref === activeId);
                });
            }
            
            if ("IntersectionObserver" in window) {
                 const navObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            let sectionId = entry.target.id;
                            updateActiveLink(sectionId);
                        }
                    });
                }, { rootMargin: '-50% 0px -50% 0px', threshold: 0.5 });

                sections.forEach(section => {
                    if(section.id !== 'hero'){
                        navObserver.observe(section);
                    }
                });
            }
        }

        // --- Academics Modal Logic ---
        const modalOverlay = document.getElementById('strand-modal');
        const modalBody = document.getElementById('modal-body');
        const closeModalBtn = document.getElementById('modal-close-btn');

        const strandData = {
            STEM: {
                title: 'PEM: Physics, Economics/Entrepreneurship, Mathematics',
                description: 'Serere Township Secondary School has this cobination/Subject unit inclusive. This track provides a strong foundation for careers in scientific research, healthcare, technology, and engineering.',
                subjects: ['Physics', 'Entrepreneurship/Economics', 'Mathematics', 'ICT', 'General Paper'],
                careers: ['Software Engineer', 'Economist', 'Scientist', 'Architect', 'Programmer', 'Medical Technologist']
            },
            ABM: {
                title: 'PCB: Physics, Chemistry, and Biology',
                description: 'Serere Township Secondary School has this cobination/Subject unit inclusive. So markeatble and valued when it comes to the working industry',
                subjects: ['Physics', 'Chemistry', 'Sub/Mathematics', 'Biology'],
                careers: ['Medical Doctor', 'BioChemical Engineer', 'Astronaut', 'Space Sciientist', 'Deentistt']
            },
            HUMSS: {
                title: 'MEG: Mathematics, EEconoomics|Entreprreneurship and Geography',
                description: 'Serere Township Secondary School has this cobination/Subject unit inclusive. It develops one for most important careers in the world of Science.',
                subjects: ['Mathemattics-', 'Economics|Entrepreneurship', 'Geography'] ,
                careers: ['Tour Guide', 'Astronaut', 'Pilot', 'Flight Captain', 'Cyber Security Expert']
            },
            HE: {
                title: 'BCA: Biology, Chemistry, Art/Agriculture',
                description: 'Serere Township Secondary School has this cobination/Subject unit inclusive. Best for learners who do have dreams in Food Science and other Aspects',
                subjects: ['Biology', 'Chemistry', 'Agriculture'],
                careers: ['Biomedical Scientist ', 'Pharmaceutical Scientist', 'Industrial Chemist', 'Veterinary Doctor', 'Doctor / Nurse / Pharmacist', 'Public Health Officer']
            },
            ICT: {
                title: 'PCM: Physics, Chemistry and Mathematics',
                description: 'Serere Township Secondary School has this cobination/Subject unit inclusive.',
                subjects: ['Physics', 'Chemistry', 'Mathematics', 'ICT','General Paper'],
                careers: ['Electrical & Electronics Engineering', 'Mechatronics / Robotics', 'Petroleum Engineering', 'Nuclear Engineering']
            }
        };

        const programData = {
            Education: {
                title: 'Serere Township Secondary School',
                description: 'Serere Township Secondary School focuses on programmes and Projects that add value and positive impact to their Academic Process. Both Subject Units for our O Level and A Level are well structured to meet the needs of the learners and the community at large.',
                subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'ICT', 'General Paper', 'English Language', 'History', 'Geography', 'Economics', 'Entrepreneurship','History', 'Agriculture', 'Geography', 'Kiswahili', 'Art and Design'],
                careers: ['Marketing Manager', 'Financial Analyst', 'HR Specialist', 'Operations Manager', 'Entrepreneur', 'Business Consultant']

            },
            Business: {
                title: 'Serere Township Secondary School-Scripture Union',
                description: 'Serere Township Secondary School Administration prepares students to become spiritual leaders in their communities and build up their minds in an aspect of Putting God first in all things they do.',
                subjects: ['Financial Management', 'Marketing Management', 'Human Resource Management', 'Strategic Management', 'Business Law', 'Operations Management'],
                //careers: ['Marketing Manager', 'Financial Analyst', 'HR Specialist', 'Operations Manager', 'Entrepreneur', 'Business Consultant']// --- IGNORE ---
            },
            Hospitality: {
                title: 'Serere Township Secondary School-Educate Club',
                description: 'Serere Township Secondary School offers comprehensive training for students aspiring to join the Educate Club. The program emphasizes service excellence, operational efficiency, and ability standards.',
                subjects: ['Entrepreneurship'],
                careers: ['Entrepreneur', 'Advocacy & Outreach Coordinator', 'Talent Development Manager', 'Tour OperatorWorkshop Facilitator', 'Science Communicator / Science Journalist', 'Cruise Line DirectorHome Economist']
            },
            Technology: {
                title: 'Serere Township Secondary School-Technology Club',
                description: 'Serere Township Secondary School equips students with the technical skills and theoretical knowledge to excel in the fast-evolving world of IT. These students explore their minda and make it true that beautiful Projects come out.',
                subjects: ['ICT', 'Mathematics', 'English'],
                careers: ['Software Developer', 'Systems Analyst', 'Network Administrator', 'Database Administrator', 'IT Project Manager', 'Cybersecurity Specialist']
            }
        };

        function openModal(data) {
            if (data) {
                modalBody.innerHTML = `
                    <h3 class="modal-title">${data.title}</h3>
                    <p class="modal-desc">${data.description}</p>
                    <h4 class="modal-subtitle">Key Subjects / Courses</h4>
                    <ul>${data.subjects.map(s => `<li>${s}</li>`).join('')}</ul>
                    <h4 class="modal-subtitle">Potential Career Paths</h4>
                    <ul>${data.careers.map(c => `<li>${c}</li>`).join('')}</ul>
                `;
                modalOverlay.classList.add('active');
            }
        }

        const strandCards = document.querySelectorAll('.strand-card');
        strandCards.forEach(card => {
            card.addEventListener('click', () => {
                const strand = card.dataset.strand;
                openModal(strandData[strand]);
            });
        });

        const programCards = document.querySelectorAll('.program-card');
        programCards.forEach(card => {
            card.addEventListener('click', () => {
                const program = card.dataset.program;
                openModal(programData[program]);
            });
        });

        const closeModal = () => {
            modalOverlay.classList.remove('active');
        }

        closeModalBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });
        

        // --- Copy to Clipboard Logic ---
        const copyTargets = document.querySelectorAll('.copy-target');
        copyTargets.forEach(target => {
            target.addEventListener('click', () => {
                const textToCopy = target.dataset.copyText;
                
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                textArea.style.position = 'fixed';
                textArea.style.left = '-9999px';
                document.body.appendChild(textArea);
                
                textArea.select();
                try {
                    document.execCommand('copy');
                    const feedbackSpan = target.nextElementSibling;
                    if (feedbackSpan && feedbackSpan.classList.contains('copy-message')) {
                        feedbackSpan.textContent = 'Copied!';
                        setTimeout(() => {
                            feedbackSpan.textContent = '';
                        }, 2000);
                    }
                } catch (err) {
                    console.error('Failed to copy text: ', err);
                }
                
                document.body.removeChild(textArea);
            });
        });

        // Close mobile menu on link click
        const allMenuLinks = document.querySelectorAll('#nav-mobile a, #nav-desktop a');
        allMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if(mobileMenu && !mobileMenu.classList.contains('hidden')){
                     mobileMenu.classList.add('hidden');
                     const menuIcon = mobileMenuButton.querySelector('i');
                     menuIcon.classList.remove('fa-times');
                     menuIcon.classList.add('fa-bars');
                }
            });
        });
    }

    // Execute all scripts
    runScripts();
});
