// 資料載入工具
class DataLoader {
    static async loadJSON(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to load ${url}: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error loading JSON:', error);
            return null;
        }
    }
}

// 頁面組件類
class PageComponents {
    constructor() {
        this.data = {};
    }

    // 載入所有資料
    async loadAllData() {
        const dataFiles = [
            { key: 'swiper', url: 'assets/data/swiper_data.json' },
            { key: 'features', url: 'assets/data/features.json' },
            { key: 'stats', url: 'assets/data/stats.json' }
        ];

        for (const file of dataFiles) {
            this.data[file.key] = await DataLoader.loadJSON(file.url);
        }
    }

    // 初始化 Swiper 區塊
    async initSwiper() {
        const swiperData = this.data.swiper;
        if (!swiperData) return;

        // 更新標題
        const titleElement = document.querySelector('.enjoy__swiper-section .enjoy__section-title');
        if (titleElement) {
            titleElement.textContent = swiperData.title;
        }

        // 動態產生 Swiper 內容
        const swiperWrapper = document.querySelector('.swiper-wrapper');
        if (swiperWrapper) {
            swiperWrapper.innerHTML = swiperData.slides.map(slide => `
                <div class="swiper-slide">
                    <div class="enjoy__swiper-card">
                        <img src="${slide.image}" alt="${slide.title}" class="enjoy__swiper-img" />
                        <h3 class="enjoy__swiper-title">${slide.title}</h3>
                        <p class="enjoy__swiper-desc">${slide.description}</p>
                    </div>
                </div>
            `).join('');

            // 初始化 Swiper
            new Swiper(".enjoy__swiper", {
                slidesPerView: 1,
                spaceBetween: 24,
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                },
            });
        }
    }

    // 初始化特色區塊
    async initFeatures() {
            const featuresData = this.data.features;
            if (!featuresData) return;

            const container = document.querySelector('.enjoy__features__container');
            if (!container) return;

            container.innerHTML = `
            <div class="enjoy__section-title">${featuresData.title}</div>
            <p class="enjoy__section-subtitle">${featuresData.subtitle}</p>
            
            <div class="enjoy__features__grid">
                ${featuresData.features.map(feature => `
                    <div class="enjoy__features__card">
                        <div class="enjoy__features__icon">
                            <i class="material-icons">${feature.icon}</i>
                        </div>
                        <h3 class="enjoy__features__title">${feature.title}</h3>
                        <p class="enjoy__features__desc">${feature.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // 初始化統計區塊
    async initStats() {
        const statsData = this.data.stats;
        if (!statsData) return;

        const container = document.querySelector('.enjoy__stats__container');
        if (!container) return;

        container.innerHTML = `
            <div class="enjoy__section-title enjoy__section-title--white">${statsData.title}</div>
            <p class="enjoy__section-subtitle enjoy__section-subtitle--white">${statsData.subtitle}</p>
            
            <div class="enjoy__stats__grid">
                ${statsData.stats.map(stat => `
                    <div class="enjoy__stats__item">
                        <div class="enjoy__stats__icon">
                            <i class="material-icons">${stat.icon}</i>
                        </div>
                        <div class="enjoy__stats__number" data-count="${stat.count}" data-suffix="${stat.suffix}">0</div>
                        <div class="enjoy__stats__label">${stat.label}</div>
                        <div class="enjoy__stats__desc">${stat.description}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // 初始化 tsParticles
    initParticles() {
        // 主要 tsParticles（about section）
        tsParticles.load("tsparticles", {
            fullScreen: {
                enable: true,
                zIndex: 0,
            },
            particles: {
                number: {
                    value: 50,
                },
                size: {
                    value: 3,
                },
                move: {
                    enable: true,
                    speed: 1,
                },
                links: {
                    enable: true,
                    opacity: 0.3,
                },
                color: {
                    value: "#ffffff",
                },
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
            },
        });

        // Parallax section 的 tsParticles
        const parallaxContainer = document.getElementById("tsparticles-parallax");
        if (parallaxContainer) {
            tsParticles.load("tsparticles-parallax", {
                fullScreen: {
                    enable: false,
                },
                particles: {
                    number: {
                        value: 30,
                    },
                    size: {
                        value: { min: 1, max: 4 },
                    },
                    move: {
                        enable: true,
                        speed: 0.5,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: {
                            default: "bounce",
                        },
                    },
                    opacity: {
                        value: { min: 0.1, max: 0.6 },
                        animation: {
                            enable: true,
                            speed: 1,
                            minimumValue: 0.1,
                        },
                    },
                    color: {
                        value: ["#ffffff", "#8fa0e8", "#d2dbff"],
                    },
                    shape: {
                        type: ["circle", "triangle"],
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "bubble",
                        },
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        bubble: {
                            distance: 200,
                            size: 6,
                            duration: 0.3,
                            opacity: 0.8,
                        },
                        push: {
                            quantity: 2,
                        },
                    },
                },
            });
        }
    }

    // 數字滾動動畫
    animateStats() {
    const statsNumbers = document.querySelectorAll('.enjoy__stats__number');

    const animateNumber = (element, target, suffix = '') => {
        const duration = 2000; // 2秒
        const startTime = performance.now();
        const startValue = 0;

        const updateNumber = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // 使用緩出動畫曲線
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(startValue + (target - startValue) * easeOut);

            element.textContent = currentValue.toLocaleString() + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent = target.toLocaleString() + suffix;
                element.classList.add('animate');
            }
        };

        requestAnimationFrame(updateNumber);
    };

    // 創建 Intersection Observer 來觸發動畫
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const targetValue = parseInt(element.getAttribute('data-count'));
                const suffix = element.getAttribute('data-suffix') || '';

                // 延遲啟動動畫，讓每個數字有不同的開始時間
                const delay = Array.from(statsNumbers).indexOf(element) * 200;
                setTimeout(() => {
                    animateNumber(element, targetValue, suffix);
                }, delay);

                // 動畫執行後就不再觀察這個元素
                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.5, // 當元素50%可見時觸發
        rootMargin: '0px 0px -100px 0px' // 提前一點觸發
    });

        // 開始觀察所有統計數字
        statsNumbers.forEach(number => {
            observer.observe(number);
        });
    }

    // 初始化所有組件
    async init() {
        await this.loadAllData();
        await this.initSwiper();
        await this.initFeatures();
        await this.initStats();
        this.initParticles();
        
        // 等待一下讓統計區塊渲染完成後再初始化動畫
        setTimeout(() => {
            this.animateStats();
        }, 100);
    }
}

// 回到頂部按鈕功能
class BackToTop {
    constructor() {
        this.button = null;
        this.init();
    }

    init() {
        // 創建按鈕元素
        this.createButton();
        // 綁定事件
        this.bindEvents();
    }

    createButton() {
        // 檢查是否已存在按鈕
        if (document.querySelector('.enjoy__back-to-top')) return;

        // 創建按鈕
        this.button = document.createElement('button');
        this.button.className = 'enjoy__back-to-top';
        this.button.innerHTML = '<i class="material-icons">keyboard_arrow_up</i>';
        this.button.setAttribute('aria-label', '回到頂部');
        
        // 添加到頁面
        document.body.appendChild(this.button);
    }

    bindEvents() {
        if (!this.button) return;

        // 點擊事件
        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // 滾動事件
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                this.button.classList.add('show');
            } else {
                this.button.classList.remove('show');
            }
        });
    }
}

// 頁面載入完成後初始化
document.addEventListener('DOMContentLoaded', () => {
    const pageComponents = new PageComponents();
    pageComponents.init();
    
    // 初始化回到頂部按鈕
    new BackToTop();
});