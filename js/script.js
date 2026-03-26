// Burger-menu

const burgerBtn = document.getElementById('burgerBtn');
const burgerMenu = document.querySelector('.burger-menu');
const burgerOverlay = document.querySelector('.burger-overlay');

burgerBtn.addEventListener('click', () => {
    const isOpen = burgerMenu.classList.contains('active');
    burgerMenu.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    burgerOverlay.classList.toggle('active');
    document.body.style.overflow = isOpen ? '' : 'hidden';
})

burgerOverlay.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    burgerBtn.classList.remove('active');
    burgerOverlay.classList.remove('active');
    document.body.style.overflow = '';
})

// Hero Tabs

const heroTabs = document.querySelectorAll('.hero-tab');
const heroTexts = document.querySelectorAll('.hero-text');

heroTabs.forEach((heroTab, index) => {
    heroTab.addEventListener('click', () => {
        heroTabs.forEach(t => t.classList.remove('active'));
        heroTexts.forEach(t => t.classList.remove('active'));
        heroTab.classList.add('active');
        heroTexts[index].classList.add('active');
    })
})

// Toggle pricing Montly/Yearly

const pricingCheckbox = document.querySelector('.pricing-toggle-switch-input');
const allPrices = document.querySelectorAll('.pricing-plan-price');

pricingCheckbox.addEventListener('change', () => {
    allPrices.forEach(price => {
        price.classList.toggle('active');
    })
})

// Toggle Basic and Premium plans

const pricingBasicBtn = document.querySelector('.pricing-tab-basic');
const pricingPremiumBtn = document.querySelector('.pricing-tab-premium');
const pricingBasicPlans = document.querySelector('.pricing-plans-basic');
const pricingPremiumPlans = document.querySelector('.pricing-plans-premium');

const togglePlans = (isBasic = true) => {
    if (isBasic) {
        pricingBasicBtn.classList.add('active');
        pricingPremiumBtn.classList.remove('active');
        pricingBasicPlans.classList.add('active');
        pricingPremiumPlans.classList.remove('active');
    } else {
        pricingBasicBtn.classList.remove('active');
        pricingPremiumBtn.classList.add('active');
        pricingBasicPlans.classList.remove('active');
        pricingPremiumPlans.classList.add('active');
    }
}

pricingBasicBtn.addEventListener('click', () => {
    togglePlans(isBasic = true);
})

pricingPremiumBtn.addEventListener('click', () => {
    togglePlans(isBasic = false);
})