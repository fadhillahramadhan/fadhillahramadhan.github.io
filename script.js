// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
	// Get all navigation links
	const navLinks = document.querySelectorAll('.nav-link');
	const sections = document.querySelectorAll('section[id]');

	// Add click event listeners to navigation links (only for internal anchors)
	navLinks.forEach((link) => {
		link.addEventListener('click', function (e) {
			const href = this.getAttribute('href');

			// Only prevent default for internal anchor links (starting with #)
			if (href.startsWith('#')) {
				e.preventDefault();

				const targetId = href.substring(1);
				const targetSection = document.getElementById(targetId);

				if (targetSection) {
					const headerHeight =
						document.querySelector('.header').offsetHeight;
					const targetPosition =
						targetSection.offsetTop - headerHeight - 20;

					window.scrollTo({
						top: targetPosition,
						behavior: 'smooth',
					});
				}
			}
			// For external links (like about.html, projects.html), let the browser handle normally
		});
	});

	// Update active navigation link based on current page and scroll position
	function updateActiveNavLink() {
		const currentPage =
			window.location.pathname.split('/').pop() || 'index.html';
		const scrollPosition = window.scrollY + 100;

		// First, set active link based on current page
		navLinks.forEach((link) => {
			link.classList.remove('active');
			const href = link.getAttribute('href');

			// Check if this link matches the current page
			if (
				href.includes(currentPage) ||
				(currentPage === 'index.html' && href === 'index.html') ||
				(currentPage === '' && href === 'index.html') ||
				(currentPage === 'about.html' && href === 'about.html') ||
				(currentPage === 'projects.html' && href === 'projects.html')
			) {
				link.classList.add('active');
			}
		});

		// For index.html, also update based on scroll position
		if (currentPage === 'index.html' || currentPage === '') {
			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.offsetHeight;
				const sectionId = section.getAttribute('id');

				if (
					scrollPosition >= sectionTop &&
					scrollPosition < sectionTop + sectionHeight
				) {
					navLinks.forEach((link) => {
						const href = link.getAttribute('href');
						if (
							href === `#${sectionId}` ||
							href === `index.html#${sectionId}`
						) {
							navLinks.forEach((l) =>
								l.classList.remove('active')
							);
							link.classList.add('active');
						}
					});
				}
			});
		}
	}

	// Listen for scroll events
	window.addEventListener('scroll', updateActiveNavLink);

	// Initialize active navigation state on page load
	updateActiveNavLink();

	// Mobile floating navigation - no toggle needed
	// Navigation is always visible as floating menu on mobile

	// Create dots pattern dynamically
	function createDotsPattern(container, rows = 5, cols = 5) {
		container.innerHTML = '';
		for (let i = 0; i < rows * cols; i++) {
			const dot = document.createElement('div');
			dot.className = 'dot';
			dot.style.cssText = `
                width: 4px;
                height: 4px;
                background: #ABB2BF;
                opacity: ${Math.random() * 0.5 + 0.3};
            `;
			container.appendChild(dot);
		}
	}

	// Initialize dots patterns
	const dotsPatterns = document.querySelectorAll(
		'.dots-pattern, .dots-decoration'
	);
	dotsPatterns.forEach((pattern) => {
		createDotsPattern(pattern);
	});

	// Add hover effects to project cards
	const projectCards = document.querySelectorAll('.project-card');
	projectCards.forEach((card) => {
		card.addEventListener('mouseenter', function () {
			this.style.transform = 'translateY(-5px)';
			this.style.transition = 'transform 0.3s ease';
		});

		card.addEventListener('mouseleave', function () {
			this.style.transform = 'translateY(0)';
		});
	});

	// Add hover effects to skill blocks
	const skillBlocks = document.querySelectorAll('.skill-block');
	skillBlocks.forEach((block) => {
		block.addEventListener('mouseenter', function () {
			this.style.transform = 'scale(1.02)';
			this.style.transition = 'transform 0.3s ease';
		});

		block.addEventListener('mouseleave', function () {
			this.style.transform = 'scale(1)';
		});
	});

	// Typing animation for hero title
	function typeWriter(element, text, speed = 100) {
		let i = 0;
		element.innerHTML = '';

		function type() {
			if (i < text.length) {
				if (text.charAt(i) === '<') {
					// Handle HTML tags
					let tagEnd = text.indexOf('>', i);
					element.innerHTML += text.substring(i, tagEnd + 1);
					i = tagEnd + 1;
				} else {
					element.innerHTML += text.charAt(i);
					i++;
				}
				setTimeout(type, speed);
			}
		}
		type();
	}

	// Initialize typing animation for hero title
	const heroTitle = document.querySelector('.hero-title');
	if (heroTitle) {
		const originalText = heroTitle.innerHTML;
		// Start typing animation after a short delay
		setTimeout(() => {
			typeWriter(heroTitle, originalText, 50);
		}, 500);
	}

	// Typing animation for quote text
	function typeWriterQuote(element, text, speed = 80) {
		let i = 0;
		element.innerHTML = '';
		element.style.borderRight = '2px solid #C778DD';
		element.style.animation = 'blink 1s infinite';

		function type() {
			if (i < text.length) {
				element.innerHTML += text.charAt(i);
				i++;
				setTimeout(type, speed);
			}
			// Keep cursor blinking after typing is complete - no removal
		}
		type();
	}

	// Initialize typing animation for quote when it comes into view
	const quoteText = document.querySelector('.quote-text');
	if (quoteText) {
		const originalQuoteText = quoteText.textContent;

		// Create intersection observer for quote
		const quoteObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Start typing animation when quote comes into view
						setTimeout(() => {
							typeWriterQuote(quoteText, originalQuoteText, 80);
						}, 300);
						quoteObserver.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.5,
				rootMargin: '0px 0px -100px 0px',
			}
		);

		quoteObserver.observe(quoteText);
	}

	// Add parallax effect to background elements
	function parallaxEffect() {
		const scrolled = window.pageYOffset;
		const parallaxElements = document.querySelectorAll(
			'.background-dots, .dots-decoration'
		);

		parallaxElements.forEach((element, index) => {
			const speed = 0.5 + index * 0.1;
			element.style.transform = `translateY(${scrolled * speed}px)`;
		});
	}

	// Listen for scroll events for parallax
	window.addEventListener('scroll', parallaxEffect);

	// Add intersection observer for fade-in animations
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px',
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = '1';
				entry.target.style.transform = 'translateY(0)';
			}
		});
	}, observerOptions);

	// Observe sections for fade-in animation
	const sectionsToAnimate = document.querySelectorAll('section');
	sectionsToAnimate.forEach((section) => {
		section.style.opacity = '0';
		section.style.transform = 'translateY(30px)';
		section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
		observer.observe(section);
	});

	// Add click handlers for contact methods
	const contactMethods = document.querySelectorAll('.contact-method');
	contactMethods.forEach((method) => {
		method.addEventListener('click', function () {
			const text = this.querySelector('span').textContent;

			// Copy to clipboard
			if (navigator.clipboard) {
				navigator.clipboard.writeText(text).then(() => {
					// Show feedback
					const feedback = document.createElement('div');
					feedback.textContent = 'Copied to clipboard!';
					feedback.style.cssText = `
                        position: fixed;
                        top: 20px;
                        right: 20px;
                        background: #C778DD;
                        color: #282C33;
                        padding: 10px 20px;
                        border-radius: 4px;
                        z-index: 10000;
                        font-family: 'Fira Code', monospace;
                        font-size: 14px;
                    `;
					document.body.appendChild(feedback);

					setTimeout(() => {
						feedback.remove();
					}, 2000);
				});
			}
		});

		// Add cursor pointer
		method.style.cursor = 'pointer';
	});

	// Language switcher functionality
	const languageSwitcher = document.querySelector('.language-switcher');
	if (languageSwitcher) {
		languageSwitcher.addEventListener('click', function () {
			// Toggle between languages (placeholder functionality)
			const currentLang = this.querySelector('span').textContent;
			const newLang =
				currentLang === 'EN'
					? 'RU'
					: currentLang === 'RU'
					? 'UA'
					: 'EN';
			this.querySelector('span').textContent = newLang;
		});

		languageSwitcher.style.cursor = 'pointer';
	}

	// Add loading animation
	function showLoadingAnimation() {
		const loader = document.createElement('div');
		loader.id = 'loader';
		loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #282C33;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            transition: opacity 0.5s ease;
        `;

		const loaderContent = document.createElement('div');
		loaderContent.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px; color: #FFFFFF; font-family: 'Fira Code', monospace;">
                <div style="width: 20px; height: 20px; border: 2px solid #C778DD; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                Loading...
            </div>
        `;

		// Add spin animation
		const style = document.createElement('style');
		style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
		document.head.appendChild(style);

		loader.appendChild(loaderContent);
		document.body.appendChild(loader);

		// Hide loader after content is loaded
		setTimeout(() => {
			loader.style.opacity = '0';
			setTimeout(() => {
				loader.remove();
			}, 500);
		}, 1000);
	}

	// Show loading animation on page load
	showLoadingAnimation();

	// Add smooth reveal animation for elements
	function revealElements() {
		const elements = document.querySelectorAll(
			'.project-card, .skill-block, .contact-card'
		);
		elements.forEach((element, index) => {
			element.style.opacity = '0';
			element.style.transform = 'translateY(20px)';
			element.style.transition = `opacity 0.6s ease ${
				index * 0.1
			}s, transform 0.6s ease ${index * 0.1}s`;

			setTimeout(() => {
				element.style.opacity = '1';
				element.style.transform = 'translateY(0)';
			}, 1200 + index * 100);
		});
	}

	// Initialize reveal animations
	revealElements();

	// Add keyboard navigation
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			// Close any open modals or dropdowns
			const activeElements = document.querySelectorAll('.active');
			activeElements.forEach((element) => {
				if (!element.classList.contains('nav-link')) {
					element.classList.remove('active');
				}
			});
		}
	});

	// Add focus management for accessibility
	const focusableElements = document.querySelectorAll(
		'a, button, input, textarea, select'
	);
	focusableElements.forEach((element) => {
		element.addEventListener('focus', function () {
			this.style.outline = '2px solid #C778DD';
			this.style.outlineOffset = '2px';
		});

		element.addEventListener('blur', function () {
			this.style.outline = 'none';
		});
	});

	console.log('Portfolio loaded successfully! 🚀');
});
