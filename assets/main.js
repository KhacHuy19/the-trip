const briefMains = document.querySelectorAll('.brief-main-content');
const pricingItems = document.querySelectorAll('.pricing-item');
const blogItems = document.querySelectorAll('.blog-item');
const getStartedBtn = document.querySelector('.get-started-btn');
const contactFormItems = document.querySelectorAll('.contact-form .form-list-item');

const bannerElem = document.querySelector('.banner');
const briefE = document.querySelector('#brief');
const tourE = document.querySelector('#tour');
const pricingE = document.querySelector('#pricing');
const galleryE = document.querySelector('#gallery');
const blogE = document.querySelector('#blog');
const getStartedE = document.querySelector('.get-started');
const contactE = document.querySelector('#contact');


window.onscroll = () => {
    if(window.innerWidth >= 480) {
        if (window.scrollY > (bannerElem.offsetTop + 20)) {
            briefMains[0].classList.add('fade-in-left');
            briefMains[1].classList.add('fade-in-right');
        }
        if (window.scrollY > (tourE.offsetTop + 20)) {
            pricingItems[0].classList.add('fade-in-up');
            pricingItems[1].classList.add('fade-in-down');
            pricingItems[2].classList.add('fade-in-up');
        }
        if (window.scrollY > galleryE.offsetTop) {
            blogItems[0].classList.add('fade-in-left');
            blogItems[1].classList.add('fade-in-up');
            blogItems[2].classList.add('fade-in-right');
        }
        if (window.scrollY > blogE.offsetTop) {
            document.querySelector('.get-started h4').classList.add('bounce-in-left');
            document.querySelector('.get-started h3').classList.add('bounce-in-right');
            getStartedBtn.classList.add('bounce-in');
        }
        if (window.scrollY > getStartedE.offsetTop) {
            contactFormItems[0].classList.add('fade-in-left');
            contactFormItems[1].classList.add('fade-in-right');
        }
    } else {
        console.log('helo word')
    }
};

toTop.onclick = function() {
  window.scrollTo(scrollX, 0);
  // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
};

window.addEventListener('scroll', function() {
    console.log( document.documentElement.clientWidth)
    toTop.hidden = (this.scrollY < document.documentElement.clientHeight);
  });
