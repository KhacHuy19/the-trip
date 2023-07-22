document.addEventListener('DOMContentLoaded', function () {
  const briefMains = document.querySelectorAll(".brief-main-content");
  const pricingItems = document.querySelectorAll(".pricing-item");
  const blogItems = document.querySelectorAll(".blog-item");
  const getStartedBtn = document.querySelector(".get-started-btn");
  const contactFormItems = document.querySelectorAll(
    ".contact-form .form-list-item"
  );

  const bannerElem = document.querySelector(".banner");
  const briefE = document.querySelector("#brief");
  const tourE = document.querySelector("#tour");
  const pricingE = document.querySelector("#pricing");
  const galleryE = document.querySelector("#gallery");
  const blogE = document.querySelector("#blog");
  const getStartedE = document.querySelector(".get-started");
  const contactE = document.querySelector("#contact");
  const forms = document.forms;
  console.log(forms);

  if (window.innerHeight > window.innerWidth) {
    if (window.innerWidth <= 480) {
      briefMains[0].classList.add("fade-in-left");
    } else {
      briefMains[0].classList.add("fade-in-left");
      briefMains[1].classList.add("fade-in-right");
    }
  }

  window.onscroll = () => {
    if (window.innerWidth >= 480) {
      if (window.scrollY > briefE.offsetTop - window.innerHeight + 100) {
        briefMains[0].classList.add("fade-in-left");
        briefMains[1].classList.add("fade-in-right");
      }
      if (window.scrollY > pricingE.offsetTop - window.innerHeight + 150) {
        pricingItems[0].classList.add("fade-in-up");
        pricingItems[1].classList.add("fade-in-down");
        pricingItems[2].classList.add("fade-in-up");
      }
      if (window.scrollY > blogE.offsetTop - window.innerHeight + 150) {
        blogItems[0].classList.add("fade-in-left");
        blogItems[1].classList.add("fade-in-up");
        blogItems[2].classList.add("fade-in-right");
      }
      if (window.scrollY > getStartedE.offsetTop - window.innerHeight + 150) {
        document
          .querySelector(".get-started h4")
          .classList.add("bounce-in-left");
        document
          .querySelector(".get-started h3")
          .classList.add("bounce-in-right");

        getStartedBtn.classList.add("bounce-in");
      }
      console.log(window.innerWidth);
      if (window.scrollY > contactE.offsetTop - window.innerHeight + 150) {
        contactFormItems[0].classList.add("fade-in-left");
        contactFormItems[1].classList.add("fade-in-right");
      }
    } else {
      if (window.scrollY > briefMains[1].offsetTop - window.innerHeight + 50) {
        briefMains[1].classList.add("fade-in-right");
      }
      if (window.scrollY > pricingE.offsetTop - window.innerHeight + 50) {
        pricingItems[0].classList.add("fade-in-up");
        pricingItems[1].classList.add("fade-in-down");
        pricingItems[2].classList.add("fade-in-up");
      }
      if (window.scrollY > blogE.offsetTop - window.innerHeight + 50) {
        blogItems[0].classList.add("fade-in-left");
        blogItems[1].classList.add("fade-in-up");
        blogItems[2].classList.add("fade-in-right");
      }
      if (window.scrollY > getStartedE.offsetTop - window.innerHeight + 50) {
        document
          .querySelector(".get-started h4")
          .classList.add("bounce-in-left");
        document
          .querySelector(".get-started h3")
          .classList.add("bounce-in-right");

        getStartedBtn.classList.add("bounce-in");
      }
      if (window.scrollY > contactE.offsetTop - window.innerHeight + 160) {
        forms[0][0].classList.add("fade-in-left");
        forms[0][1].classList.add("fade-in-right");
        forms[0][2].classList.add("fade-in-left");
        forms[0][3].classList.add("fade-in-right");
        forms[0][4].classList.add("fade-in-up");
      }
    }
  };

  toTop.onclick = function () {
    window.scrollTo(scrollX, 0);
    // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
  };

  window.addEventListener("scroll", function () {
    console.log(document.documentElement.clientHeight);
    toTop.hidden = this.scrollY < document.documentElement.clientHeight;
  });
});
