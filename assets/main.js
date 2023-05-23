const briefMains = document.querySelectorAll('.brief-main-content');
const pricingItems = document.querySelectorAll('.pricing-item');
const blogItems = document.querySelectorAll('.blog-item');
const getStartedBtn = document.querySelector('.get-started-btn');
const contactFormItems = document.querySelectorAll('.contact-form .col-half');

window.onscroll = () => {
    console.log(window.pageYOffset)
    if (window.scrollY > 134) {
        briefMains[0].classList.add('fade-in-left');
        briefMains[1].classList.add('fade-in-right');
    }
    if (window.scrollY > 1900) {
        pricingItems[0].classList.add('fade-in-up');
        pricingItems[1].classList.add('fade-in-down');
        pricingItems[2].classList.add('fade-in-up');
    }
    if (window.scrollY > 3332) {
        blogItems[0].classList.add('fade-in-left');
        blogItems[1].classList.add('fade-in-up');
        blogItems[2].classList.add('fade-in-right');
    }
    if (window.scrollY > 3800) {
        document.querySelector('.get-started h4').classList.add('bounce-in-left');
        document.querySelector('.get-started h3').classList.add('bounce-in-right');
        getStartedBtn.classList.add('bounce-in');
    }
    if (window.scrollY > 4300) {
        contactFormItems[0].classList.add('fade-in-left');
        contactFormItems[1].classList.add('fade-in-right');
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
