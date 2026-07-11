// ========== ADVANCED INTERACTIONS ==========

// Scroll animations for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Observe all sections for scroll animation
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// ========== PARALLAX SCROLLING ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-parallax') || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========== MOUSE TRACKING FOR INTERACTIVE ELEMENTS ==========
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const glowElements = document.querySelectorAll('.hero-glow');
    glowElements.forEach(element => {
        element.style.left = `${mouseX * 100}%`;
        element.style.top = `${mouseY * 100}%`;
    });
});

// ========== SMOOTH SCROLL BEHAVIOR ==========
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ========== KEYBOARD SHORTCUTS ==========
document.addEventListener('keydown', (e) => {
    // Close modals with ESC
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
    }
    
    // Navigation with arrow keys
    if (e.key === 'ArrowDown') {
        window.scrollBy(0, 100);
    }
    if (e.key === 'ArrowUp') {
        window.scrollBy(0, -100);
    }
});

// ========== TOUCH SUPPORT FOR MOBILE ==========
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        // Swiped left - next page
    }
    if (touchEndX > touchStartX + 50) {
        // Swiped right - previous page
    }
}

// ========== PERFORMANCE OPTIMIZATION ==========
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
            // Perform expensive scroll operations
            scrollTimeout = null;
        }, 100);
    }
});

// ========== DYNAMIC THEME COLORS ==========
const rootStyle = document.documentElement.style;

function setThemeColor(colorName, colorValue) {
    rootStyle.setProperty(`--${colorName}`, colorValue);
}

// Available theme presets
const themePresets = {
    default: {
        accentCyan: '#00d9ff',
        accentGold: '#FFD700',
        accentPurple: '#9933ff'
    },
    fire: {
        accentCyan: '#FF4500',
        accentGold: '#FF6347',
        accentPurple: '#FF1493'
    },
    frost: {
        accentCyan: '#00bfff',
        accentGold: '#87CEEB',
        accentPurple: '#4169E1'
    },
    forest: {
        accentCyan: '#00c000',
        accentGold: '#32CD32',
        accentPurple: '#228B22'
    }
};

function applyTheme(themeName) {
    const theme = themePresets[themeName] || themePresets.default;
    Object.entries(theme).forEach(([key, value]) => {
        setThemeColor(key, value);
    });
    localStorage.setItem('mythoria-theme', themeName);
}

// Load saved theme
const savedTheme = localStorage.getItem('mythoria-theme') || 'default';
applyTheme(savedTheme);

// ========== LOCAL STORAGE HELPERS ==========
function saveToLibrary(item) {
    let library = JSON.parse(localStorage.getItem('mythoria-library')) || [];
    if (!library.find(i => i.name === item.name)) {
        library.push(item);
        localStorage.setItem('mythoria-library', JSON.stringify(library));
        showNotification(`Added "${item.name}" to your library!`);
    }
}

function removeFromLibrary(itemName) {
    let library = JSON.parse(localStorage.getItem('mythoria-library')) || [];
    library = library.filter(i => i.name !== itemName);
    localStorage.setItem('mythoria-library', JSON.stringify(library));
}

function getLibrary() {
    return JSON.parse(localStorage.getItem('mythoria-library')) || [];
}

// ========== NOTIFICATION SYSTEM ==========
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: rgba(0, 217, 255, 0.2);
        border: 1px solid rgba(0, 217, 255, 0.5);
        color: #00d9ff;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        z-index: 9999;
        animation: slideUp 0.3s ease-out;
        backdrop-filter: blur(10px);
    `;
    
    if (type === 'success') {
        notification.style.borderColor = 'rgba(0, 192, 0, 0.5)';
        notification.style.background = 'rgba(0, 192, 0, 0.2)';
        notification.style.color = '#00c000';
    } else if (type === 'error') {
        notification.style.borderColor = 'rgba(255, 0, 0, 0.5)';
        notification.style.background = 'rgba(255, 0, 0, 0.2)';
        notification.style.color = '#ff0000';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========== ACCESSIBILITY FEATURES ==========
function enableHighContrast() {
    document.body.style.filter = 'contrast(1.5)';
    localStorage.setItem('mythoria-high-contrast', 'true');
}

function disableHighContrast() {
    document.body.style.filter = 'none';
    localStorage.setItem('mythoria-high-contrast', 'false');
}

// Load accessibility settings
if (localStorage.getItem('mythoria-high-contrast') === 'true') {
    enableHighContrast();
}

// ========== ANALYTICS TRACKING ==========
function trackEvent(eventName, eventData = {}) {
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
    console.log(`Event: ${eventName}`, eventData);
}

function trackPageView(pageName) {
    trackEvent('page_view', { page_title: pageName });
}

// ========== PERFORMANCE MONITORING ==========
function logPerformanceMetrics() {
    if (window.performance && window.performance.timing) {
        const timing = window.performance.timing;
        const navigationStart = timing.navigationStart;
        
        const metrics = {
            'DNS Lookup': timing.domainLookupEnd - timing.domainLookupStart,
            'TCP Connection': timing.connectEnd - timing.connectStart,
            'DOM Content': timing.domContentLoadedEventEnd - navigationStart,
            'Page Load': timing.loadEventEnd - navigationStart
        };
        
        console.group('Performance Metrics');
        Object.entries(metrics).forEach(([key, value]) => {
            console.log(`${key}: ${value}ms`);
        });
        console.groupEnd();
    }
}

window.addEventListener('load', () => {
    setTimeout(logPerformanceMetrics, 0);
});

// ========== EASTER EGGS ==========
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiPattern.length);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    showNotification('🎮 Secret Mode Activated!', 'success');
    document.body.style.filter = 'invert(1) hue-rotate(180deg)';
    setTimeout(() => {
        document.body.style.filter = 'none';
    }, 3000);
}

// ========== EXPERIMENTAL: PWA SUPPORT ==========
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('SW registered:', registration);
        }).catch(error => {
            console.log('SW registration failed:', error);
        });
    });
}

// ========== NETWORK STATUS INDICATOR ==========
window.addEventListener('online', () => {
    showNotification('✓ Back Online!', 'success');
});

window.addEventListener('offline', () => {
    showNotification('✗ You are offline', 'error');
});

// ========== SCROLL TO TOP BUTTON ==========
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.className = 'btn-icon';
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 999;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.pointerEvents = 'auto';
        } else {
            button.style.opacity = '0';
            button.style.pointerEvents = 'none';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

document.addEventListener('DOMContentLoaded', createScrollToTopButton);

// ========== EXPERIMENTAL: VOICE COMMANDS ==========
function initializeVoiceCommands() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        
        recognition.onresult = (event) => {
            const command = event.results[0][0].transcript.toLowerCase();
            
            if (command.includes('kingdoms')) {
                document.getElementById('kingdoms').scrollIntoView({ behavior: 'smooth' });
            } else if (command.includes('magic')) {
                document.getElementById('magic').scrollIntoView({ behavior: 'smooth' });
            } else if (command.includes('characters')) {
                document.getElementById('characters').scrollIntoView({ behavior: 'smooth' });
            }
        };
    }
}

console.log('✨ Mythoria Interactions Loaded Successfully');