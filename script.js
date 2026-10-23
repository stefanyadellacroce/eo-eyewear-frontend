const menuToggle=document.querySelector('.menu-toggle');const navPanel=document.querySelector('.nav-panel');menuToggle.addEventListener('click',()=>{const isOpen=navPanel.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(isOpen));menuToggle.setAttribute('aria-label',isOpen?'Close navigation menu':'Open navigation menu')});document.querySelectorAll('.nav-panel a').forEach(link=>link.addEventListener('click',()=>{navPanel.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));
const productGroups={new:[['Studio Clear','OPTICAL • NEW','₱1,080','images/discovery-clear.jpg','Clear optical frame from the new arrivals collection'],['Metro Black','SUNWEAR • NEW','₱980','images/discovery-black.jpg','Black modern sunglasses from the new arrivals collection'],['Soft Round','OPTICAL • NEW','₱1,280','images/discovery-round.jpg','Thin round optical frame from the new arrivals collection'],['Warm Tortoise','OPTICAL • NEW','₱1,580','images/discovery-tortoise.jpg','Tortoiseshell optical frame from the new arrivals collection']],best:[['Everyday Classic','OPTICAL • BESTSELLER','₱899','images/best-classic.jpg','Classic rectangular optical frame from the bestseller collection'],['Weekend Shade','SUNWEAR • BESTSELLER','₱980','images/best-sun.jpg','Dark sunglasses from the bestseller collection'],['Daily Clear Lens','CONTACT • BESTSELLER','₱490','images/best-contact.jpg','Clear contact lens product from the bestseller collection'],['Reading Essential','READING • BESTSELLER','₱799','images/best-reading.jpg','Reading glasses from the bestseller collection']]};
const grid=document.querySelector('#discoveryGrid');const filters=document.querySelectorAll('.filter-btn');function renderProducts(key){grid.innerHTML=productGroups[key].map(p=>`<article class="discovery-item"><img src="${p[3]}" alt="${p[4]}"><div class="discovery-info"><small>${p[1]}</small><h3>${p[0]}</h3><div><strong>${p[2]}</strong><a href="#appointment">View Product</a></div></div></article>`).join('')}filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>{b.classList.remove('active');b.setAttribute('aria-selected','false')});btn.classList.add('active');btn.setAttribute('aria-selected','true');renderProducts(btn.dataset.filter)}));renderProducts('new');const copyright=document.querySelector('#copyright');if(copyright)copyright.textContent=`© ${new Date().getFullYear()} EO Eyewear. All rights reserved.`;


// ---------------------------------------------------------
// REPEATING SCROLL REVEAL ANIMATIONS
// ---------------------------------------------------------
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the class whenever the element enters the viewport.
                entry.target.classList.add("show");
            } else {
                // Remove it after the element leaves so the animation
                // can play again when the user scrolls back to it.
                entry.target.classList.remove("show");
            }
        });
    },
    {
        threshold: 0.14,
        rootMargin: "0px 0px -35px 0px"
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

// ---------------------------------------------------------
// NAVBAR SCROLL EFFECT
// ---------------------------------------------------------
const siteHeader = document.querySelector(".site-header");

function updateHeaderOnScroll() {
    if (!siteHeader) return;

    if (window.scrollY > 20) {
        siteHeader.classList.add("scrolled");
    } else {
        siteHeader.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll();
