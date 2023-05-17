/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 316:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    const circle = document.querySelector(
      ".intro404__decoration-circle-with-lines"
    );
    const calibrationTitle = document.querySelector(".intro404__title");

    try {
      const calibrationTitleTop = calibrationTitle.offsetTop;
      // const calibrationTitleLeft = calibrationTitle.getBoundingClientRect().width / 2
      const calibrationTitleParentLeft =
        calibrationTitle.offsetParent.offsetWidth / 2;

      const circleWidth = circle.getBoundingClientRect().width / 2;

      circle.style.top = calibrationTitleTop - 40 + "px";
      circle.style.left = calibrationTitleParentLeft - circleWidth - 120 + "px";
    } catch (error) {}

    window.addEventListener("resize", () => {
      try {
        const calibrationTitleTop = calibrationTitle.offsetTop;
        const calibrationTitleParentLeft =
          calibrationTitle.offsetParent.offsetWidth / 2;

        const circleWidth = circle.getBoundingClientRect().width / 2;

        circle.style.top = calibrationTitleTop - 40 + "px";
        circle.style.left =
          calibrationTitleParentLeft - circleWidth - 120 + "px";
      } catch (error) {}
    });
  });
} catch (error) {}


/***/ }),

/***/ 963:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    setDecorativeLines();

    window.addEventListener("resize", () => {
      setDecorativeLines();
    });
  });

  function setDecorativeLines() {
    const margin = 130;
    // current footer
    const footer = document.querySelector(".footer");
    // current footer sizes
    const footerTop = footer.offsetTop;
    const footerHeight = footer.getBoundingClientRect().height;
    // current header container
    const headerContainer = document.querySelector(".container--header");
    // current header container sizes
    const headerContainerWidth = headerContainer.getBoundingClientRect().width;
    const headerContainerLeft = headerContainer.getBoundingClientRect().left;
    const headerContainerWidthComputedForLines =
      headerContainerWidth - margin * 2;
    // lines instances
    const linesWrapper = document.querySelector(".decoration-lines-404");
    const lines = document.querySelectorAll(".decoration-line-404");
    try {
      // set linesWrapper width
      linesWrapper.style.width = `${headerContainerWidthComputedForLines}px`;
      // set linesWrapper height
      linesWrapper.style.height = `${footerTop + footerHeight}px`;
      linesWrapper.style.left = `${headerContainerLeft + margin}px`;
      // set lines height
      lines.forEach((line) => {
        line.style.height = `${footerTop + footerHeight}px`;
      });
    } catch (error) {}
  }
} catch (error) {}


/***/ }),

/***/ 793:
/***/ (function() {

try {
  const accordions = document.querySelectorAll(
    ".answers__contentBottomLeftAccordion"
  );

  document.addEventListener("DOMContentLoaded", () => {
    accordions.forEach((accordion) => {
      accordion.addEventListener("click", (e) => {
        const self = e.currentTarget;
        const control = self.querySelector(
          ".answers__contentBottomLeftAccordionTop"
        );
        const content = self.querySelector(
          ".answers__contentBottomLeftAccordionBottom"
        );

        self.classList.toggle("open");

        if (self.classList.contains("open")) {
          control.setAttribute("aria-expanded", true);
          content.setAttribute("aria-hidden", false);
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          control.setAttribute("aria-expanded", false);
          content.setAttribute("aria-hidden", true);
          content.style.maxHeight = null;
        }
      });
    });
  });
} catch (error) {}


/***/ }),

/***/ 483:
/***/ (function() {

try {
  if (window.innerWidth > 550) {
    window.addEventListener("load", () => {
      const items = document.querySelectorAll(".galleryItem-attraction");
      items.forEach((item) => {
        item.addEventListener("click", () => {
          const image = item.querySelector(".reviews__list-itemBgImage");
          const imageSource = image.getAttribute("src");
          const closeButtonGallery = item.querySelector(".galleryCrossButton");
          const closeButtonSrc = closeButtonGallery.src;

          const wrapper = document.createElement("div");
          wrapper.classList.add("wrapper");
          wrapper.innerHTML = `
                <div class="galleryContainer">
                    <div class="galleryCrossWrapper">
                        <img class="galleryCross" src="${closeButtonSrc}">
                    </div>
                    <img class="galleryItem" src=${imageSource} alt="Отзыв">
                </div>
            `;
          const body = document.querySelector("body");
          document.body.append(wrapper);
          body.classList.add("hidden");

          const customImage = wrapper.querySelector(".galleryItem");
          if (window.innerWidth > 650) {
            customImage.style.width = window.innerWidth / 3 + "px";
          } else if (window.innerWidth > 650) {
            customImage.style.width = window.innerWidth / 1.4 + "px";
          }

          const cross = wrapper.querySelector(".galleryCross");
          if (window.innerWidth > 650) {
            cross.style.width = window.innerWidth / 99 + "px";
          } else {
            cross.style.width = window.innerWidth / 40 + "px";
          }

          const crossWrapper = wrapper.querySelector(".galleryCrossWrapper");
          crossWrapper.style.marginLeft = window.innerWidth / 99 + 60 + "px";

          setTimeout(() => {
            wrapper.classList.add("wrapper--visible", "wrapper--gallery");
          }, 150);

          const container = wrapper.querySelector(".galleryContainer");
          setTimeout(() => {
            if (container.offsetTop < 0) {
              container.style.marginTop =
                Math.abs(container.offsetTop) + 300 + "px";
            }
          }, 150);

          const closeButton = wrapper.querySelector(".galleryCross");

          closeButton.addEventListener("click", () => {
            wrapper.classList.remove("wrapper--visible");
            // modal.classList.remove("modal--visible");

            const body = document.querySelector("body");
            body.classList.remove("hidden");
          });

          wrapper.addEventListener("click", (e) => {
            if (e.target === wrapper) {
              wrapper.classList.remove("wrapper--visible");
              const body = document.querySelector("body");
              body.classList.remove("hidden");
            }
          });
        });
      });
    });
  }
} catch (error) {}


/***/ }),

/***/ 207:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    try {
      const reviews = document.querySelector(".reviews");
      // reviews section splide
      const splide = document.querySelector(".reviews__splide-attraction");
      const splideTop = splide.offsetTop;
      // container
      const splideContainer = reviews.querySelector(".container");
      const splideContainerWidth =
        splideContainer.getBoundingClientRect().width;
      const splideContainerLeft = splideContainer.getBoundingClientRect().left;
      // reviews section splide
      const splideArrows = document.querySelectorAll(
        ".reviews__splide-attraction .splide__arrow"
      );
      const splideArrowsArray = Array.from(splideArrows);
      // title for calibration
      const titleForCalibrationArrows = document.querySelector(
        ".section__titles--reviews"
      );
      const titleForCalibrationArrowsHeight =
        titleForCalibrationArrows.getBoundingClientRect().height;
      const titleForCalibrationArrowsTop =
        titleForCalibrationArrows.offsetTop / 2;

      splideArrowsArray.forEach((splideArrow) => {
        splideArrow.style.left = `${
          splideContainerLeft + splideContainerWidth - 90
        }px`;

        if (splideArrow.classList.contains("splide__arrow--prev")) {
          splideArrow.style.left = `${
            splideContainerLeft + splideContainerWidth - 90 - 59
          }px`;
        }

        splideArrow.style.top =
          titleForCalibrationArrowsHeight +
          titleForCalibrationArrowsTop -
          splideTop +
          15 +
          "px";

        if (window.innerWidth <= 620) {
          splideArrow.style.top =
            titleForCalibrationArrowsHeight +
            titleForCalibrationArrowsTop -
            splideTop +
            "px";
        }

        if (window.innerWidth <= 530) {
          splideArrow.style.top =
            titleForCalibrationArrowsHeight +
            titleForCalibrationArrowsTop -
            splideTop +
            95 +
            "px";
        }
      });
    } catch (error) {}
  });
  window.addEventListener("resize", () => {
    try {
      // reviews section splide
      const splide = document.querySelector(".reviews__splide-attraction");
      const splideArrows = document.querySelectorAll(
        ".reviews__splide-attraction .splide__arrow"
      );
      const splideArrowsArray = Array.from(splideArrows);
      const splideTop = splide.offsetTop;

      // title for calibration
      const titleForCalibrationArrows = document.querySelector(
        ".section__titles--reviews"
      );
      const titleForCalibrationArrowsHeight =
        titleForCalibrationArrows.getBoundingClientRect().height;
      const titleForCalibrationArrowsTop =
        titleForCalibrationArrows.offsetTop / 2;

      splideArrowsArray.forEach((splideArrow) => {
        splideArrow.style.top =
          titleForCalibrationArrowsHeight +
          titleForCalibrationArrowsTop -
          splideTop +
          15 +
          "px";

        if (window.innerWidth <= 620) {
          splideArrow.style.top =
            titleForCalibrationArrowsHeight +
            titleForCalibrationArrowsTop -
            splideTop +
            "px";
        }

        if (window.innerWidth <= 530) {
          splideArrow.style.top =
            titleForCalibrationArrowsHeight +
            titleForCalibrationArrowsTop -
            splideTop +
            95 +
            "px";
        }
      });
    } catch (error) {}
  });
} catch (error) {}


/***/ }),

/***/ 302:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    try {
      const splide4 = new Splide(".reviews__splide-attraction", {
        arrows: true,
        perMove: 1,
        pagination: false,
        focus: "center",
        autoWidth: true,

        breakpoints: {
          5000: {
            perPage: 3,
            gap: 55,
          },
          920: {
            perPage: 2,
          },
          675: {
            perPage: 1,
            gap: 40,
          },
          450: {
            perPage: 1,
          },
        },
      }).mount();
    } catch (error) {}
  });
} catch (error) {}


/***/ }),

/***/ 246:
/***/ (function() {

try {
  const section = document.querySelector(".stages-attraction");
  const list = document.querySelector(
    ".stages__contentBottomWrapper-attraction"
  );

  window.addEventListener("load", () => {
    try {
      const listHeight = list.getBoundingClientRect().height;
      section.style.maxHeight = listHeight + 30 + "px";
    } catch (error) {}
  });

  window.addEventListener("resize", () => {
    try {
      const listHeight = list.getBoundingClientRect().height;
      section.style.maxHeight = listHeight + 30 + "px";
    } catch (error) {}
  });
} catch (error) {}


/***/ }),

/***/ 224:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    try {
      const titleForCalibrationArrows = document.querySelector(
        ".section__titles--reviews"
      );
      const splide = document.querySelector(
        ".intro__related-publications-slider"
      );
      const splideArrows = document.querySelectorAll(
        ".intro__related-publications-slider .splide__arrow"
      );

      const titleForCalibrationArrowsHeight =
        titleForCalibrationArrows.getBoundingClientRect().height / 2;
      const titleForCalibrationArrowsTop = titleForCalibrationArrows.offsetTop;

      const splideTop = splide.offsetTop;

      Array.from(splideArrows).forEach((splideArrow) => {
        splideArrow.style.top =
          titleForCalibrationArrowsHeight +
          titleForCalibrationArrowsTop -
          splideTop +
          "px";

        if (window.innerWidth <= 560) {
          splideArrow.style.top =
            titleForCalibrationArrowsHeight +
            titleForCalibrationArrowsTop -
            splideTop +
            70 +
            "px";
        }

        // if (window.innerWidth <= 450) {
        //   splideArrow.style.top = titleForCalibrationArrowsHeight + titleForCalibrationArrowsTop - splideTop + "px"
        // }
      });
    } catch (error) {}

    window.addEventListener("resize", () => {
      try {
        const titleForCalibrationArrows = document.querySelector(
          ".section__titles--reviews"
        );
        const splide = document.querySelector(
          ".intro__related-publications-slider"
        );
        const splideArrows = document.querySelectorAll(
          ".intro__related-publications-slider .splide__arrow"
        );

        const titleForCalibrationArrowsHeight =
          titleForCalibrationArrows.getBoundingClientRect().height / 2;
        const titleForCalibrationArrowsTop =
          titleForCalibrationArrows.offsetTop;

        const splideTop = splide.offsetTop;

        Array.from(splideArrows).forEach((splideArrow) => {
          splideArrow.style.top =
            titleForCalibrationArrowsHeight +
            titleForCalibrationArrowsTop -
            splideTop +
            "px";

          if (window.innerWidth <= 560) {
            splideArrow.style.top =
              titleForCalibrationArrowsHeight +
              titleForCalibrationArrowsTop -
              splideTop +
              70 +
              "px";
          }

          // if (window.innerWidth <= 450) {
          //   splideArrow.style.top = titleForCalibrationArrowsHeight + titleForCalibrationArrowsTop - splideTop + "px"
          // }
        });
      } catch (error) {}
    });
  });
} catch (error) {}


/***/ }),

/***/ 911:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    try {
      const splide = new Splide(".intro__related-publications-slider", {
        arrows: true,
        perMove: 1,
        // perPage: 4,
        // gap: 10,
        pagination: false,
        arrowPath:
          "M26.7071 7.29289C27.0976 7.68342 27.0976 8.31658 26.7071 8.70711L20.3431 15.0711C19.9526 15.4616 19.3195 15.4616 18.9289 15.0711C18.5384 14.6805 18.5384 14.0474 18.9289 13.6569L24.5858 8L18.9289 2.34315C18.5384 1.95262 18.5384 1.31946 18.9289 0.928932C19.3195 0.538407 19.9526 0.538407 20.3431 0.928932L26.7071 7.29289ZM1 9C0.447716 9 -4.82823e-08 8.55228 0 8C4.82823e-08 7.44771 0.447716 7 1 7L1 9ZM26 9L1 9L1 7L26 7L26 9Z",
        focus: "center",

        breakpoints: {
          5000: {
            perPage: 4,
            gap: 90,
          },
          1440: {
            perPage: 4,
            gap: 15,
          },
          1090: {
            perPage: 3,
            gap: 15,
          },
          980: {
            perPage: 2,
            gap: 15,
          },
          555: {
            fixedWidth: "320px",
            perPage: 1,
            focus: "center",
            gap: 15,
          },
          380: {
            fixedWidth: null,
            perPage: 1,
            gap: 15,
          },
        },
      }).mount();
    } catch (error) {}
  });
} catch (error) {}


/***/ }),

/***/ 772:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    const checkboxes = document.querySelectorAll(
      ".forms__form-radio-block-brief"
    );
    const checkboxesArray = Array.from(checkboxes);

    document.addEventListener("DOMContentLoaded", () => {
      checkboxesArray.forEach((checkbox) => {
        let input = checkbox.querySelector("input");

        if (input.checked) {
          checkbox.classList.add("forms__form-radio-block-brief--active");
        }
      });
    });

    checkboxesArray.forEach((checkbox) => {
      checkbox.addEventListener("click", () => {
        let input = checkbox.querySelector("input");

        if (!input.checked) {
          checkboxesArray.forEach((checkboxForReset) => {
            let inputReset = checkboxForReset.querySelector("input");
            inputReset.checked = false;
            checkboxForReset.classList.remove(
              "forms__form-radio-block-brief--active"
            );
          });

          input.checked = true;
          checkbox.classList.add("forms__form-radio-block-brief--active");
        }
      });
    });
  });
} catch (error) {}


/***/ }),

/***/ 88:
/***/ (function() {

try {
  const body = document.querySelector("body");

  const WordToRight = document.querySelector(
    ".burgerMenu__animatedWords_wordToRight"
  );
  const WordToLeft = document.querySelector(
    ".burgerMenu__animatedWords_wordToLeft"
  );

  const burger = document.querySelector(".header__burger");

  const burgerMenu = document.querySelector(".burgerMenu");
  const itemsForHover = document.querySelectorAll(
    ".burgerMenu__contentNavigation-leftSideItem"
  );
  const rightSide = document.querySelector(
    ".burgerMenu__contentNavigation-rightSide"
  );
  const itemsForShow = document.querySelectorAll(
    ".burgerMenu__contentNavigation-rightSideList"
  );
  const closeButton = document.querySelector(".header__closeBurgerMenuBtn");

  burger.addEventListener("click", () => {
    body.classList.add("hidden");

    WordToRight.classList.add(
      "burgerMenu__animatedWords_wordToRight--animated"
    );
    WordToLeft.classList.add("burgerMenu__animatedWords_wordToLeft--animated");
    burgerMenu.classList.remove("burgerMenu--closed");
    burgerMenu.classList.add("burgerMenu--visible");
  });

  document.addEventListener("keyup", (e) => {
    const isVisible = burgerMenu.classList.contains("burgerMenu--visible");

    if (e.key === "Escape" && isVisible) {
      body.classList.remove("hidden");

      WordToRight.classList.remove(
        "burgerMenu__animatedWords_wordToRight--animated"
      );
      WordToLeft.classList.remove(
        "burgerMenu__animatedWords_wordToLeft--animated"
      );
      burgerMenu.classList.remove("burgerMenu--visible");
      burgerMenu.classList.add("burgerMenu--closed");
    }
  });

  closeButton.addEventListener("click", (e) => {
    const isVisible = burgerMenu.classList.contains("burgerMenu--visible");

    if (isVisible) {
      body.classList.remove("hidden");

      WordToRight.classList.remove(
        "burgerMenu__animatedWords_wordToRight--animated"
      );
      WordToLeft.classList.remove(
        "burgerMenu__animatedWords_wordToLeft--animated"
      );
      burgerMenu.classList.remove("burgerMenu--visible");
      burgerMenu.classList.add("burgerMenu--closed");
    }
  });

  itemsForHover.forEach((itemForHover) => {
    const imageArrow = itemForHover.querySelector(
      ".burgerMenu__contentNavigation-leftSideItemImage"
    );

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      itemForHover.addEventListener("click", () => {
        const imageArrows = document.querySelectorAll(
          ".burgerMenu__contentNavigation-leftSideItemImage"
        );

        imageArrows.forEach((imageArrowForResetClass) => {
          deleteAnimationClass(
            imageArrowForResetClass,
            "burgerMenu__contentNavigation-leftSideItemImage--visible"
          );
        });

        imageArrow.classList.add(
          "burgerMenu__contentNavigation-leftSideItemImage--visible"
        );
      });
    } else {
      itemForHover.addEventListener("mouseenter", () => {
        const imageArrows = document.querySelectorAll(
          ".burgerMenu__contentNavigation-leftSideItemImage"
        );

        imageArrows.forEach((imageArrowForResetClass) => {
          deleteAnimationClass(
            imageArrowForResetClass,
            "burgerMenu__contentNavigation-leftSideItemImage--visible"
          );
        });

        imageArrow.classList.add(
          "burgerMenu__contentNavigation-leftSideItemImage--visible"
        );
      });
    }
  });

  setDataAttributes();

  // add lister for mouseenter
  itemsForHover.forEach((itemForHover) => {
    itemsForShow.forEach((itemForShow) => {
      const showData = itemForShow.dataset.burgerMenuLink;

      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        itemForHover.addEventListener("click", (e) => {
          const hoverData = e.currentTarget.dataset.burgerMenuLink;

          rightSide.classList.add(
            "burgerMenu__contentNavigation-rightSide--visible"
          );
          // reset animation class on all itemForShow
          deleteAnimationClass(
            itemForShow,
            "burgerMenu__contentNavigation-rightSideList--animated"
          );
          // show dependent list
          if (hoverData === showData) {
            itemForShow.classList.add(
              "burgerMenu__contentNavigation-rightSideList--animated"
            );
          }
        });
      } else {
        itemForHover.addEventListener("mouseenter", (e) => {
          const hoverData = e.target.dataset.burgerMenuLink;

          rightSide.classList.add(
            "burgerMenu__contentNavigation-rightSide--visible"
          );
          // reset animation class on all itemForShow
          deleteAnimationClass(
            itemForShow,
            "burgerMenu__contentNavigation-rightSideList--animated"
          );
          // show dependent list
          if (hoverData === showData) {
            itemForShow.classList.add(
              "burgerMenu__contentNavigation-rightSideList--animated"
            );
          }
        });
      }
    });
  });
  // utils
  function deleteAnimationClass(itemForCheck, className) {
    const isVisible = itemForCheck.classList.contains(className);

    if (isVisible) {
      itemForCheck.classList.remove(className);
    }
  }

  function setDataAttributes() {
    itemsForHover.forEach((itemForHover, index) => {
      itemForHover.dataset.burgerMenuLink = index;
    });

    itemsForShow.forEach((itemForShow, index) => {
      itemForShow.dataset.burgerMenuLink = index;
    });
  }
} catch (error) {}


/***/ }),

/***/ 915:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    let myMap;
    let myPlacemark;

    try {
      ymaps.ready(init);
    } catch (error) {}

    function init() {
      myMap = new ymaps.Map("map", {
        center: [55.82493514012901, 49.14675582085202],
        zoom: 17,
      });
      // myMap.setType('yandex#map');
      // myMap.setCenter([55.82384567557404,49.14547363672293], 17);

      if (window.innerWidth <= 1250) {
        myMap.setCenter([55.82578488199605, 49.14604753428242], 17);
      }

      if (window.innerWidth <= 740) {
        myMap.setCenter([55.82552101113472, 49.148595002451664], 17);
      }

      if (window.innerWidth <= 420) {
        myMap.setCenter([55.82552252097534, 49.14931651667667], 17);
      }

      if (window.innerWidth <= 350) {
        myMap.setCenter([55.82551346760382, 49.1494990076702], 17);
      }

      myPlacemark = new ymaps.Placemark(
        [55.82647694866468, 49.139917029444426],
        {
          // hintContent: 'Москва!',
          // balloonContent: 'Столица России'
        },
        {
          iconImageHref: "./assets/images/contacts/yandex-map-marker.svg",
          iconImageSize: [220, 220],
          // iconImageOffset: [-3, -42]
        }
      );

      myMap.geoObjects.add(myPlacemark);
    }

    // ++++++++++++++++++++++++
    let calibrationList;
    let calibrationListTop;
    let map;
    let leftSide;
    let mapHeight;

    // list
    // list sizes
    try {
      calibrationList = document.querySelector(".contacts__left-contacts-list");
      calibrationListTop = calibrationList.offsetTop;

      // map
      map = document.querySelector("#map");
      // left side
      leftSide = document.querySelector(".contacts__left");
      // map height

      mapHeight = map.getBoundingClientRect().height;

      // set top for map

      map.style.top = `${calibrationListTop - 60}px`;
    } catch (error) {}

    if (window.innerWidth <= 1250) {
      try {
        // reset top for map
        map.style.top = "unset";
        // set top for map
        leftSide.style.marginTop = `${mapHeight + 50}px`;
      } catch (error) {}
    }
  });
} catch (error) {}


/***/ }),

/***/ 497:
/***/ (function() {

try {
  window.addEventListener("load", () => {
    addMarginsBetweenFooterItems();
  });

  function addMarginsBetweenFooterItems() {
    // to add margins between items
    const itemsParent = document.querySelector(".footer__blocks");

    if (window.innerWidth > 1920) {
      itemsParent.classList.add("footer__blocks--between");
    }
    if (window.innerWidth <= 2340) {
      itemsParent.classList.remove("footer__blocks--between");
    }
    // the same as above on resize
    window.addEventListener("resize", () => {
      const itemsParent = document.querySelector(".footer__blocks");

      if (window.innerWidth > 1920) {
        itemsParent.classList.add("footer__blocks--between");
      }
      if (window.innerWidth <= 2340) {
        itemsParent.classList.remove("footer__blocks--between");
      }
    });
  }

  //  set width
  if (window.innerWidth >= 1537) {
    document.addEventListener("DOMContentLoaded", () => {
      let counter = 0;

      const footer = document.querySelector(".footer");

      const containerFooter = document.querySelector(".container--footer");

      const container = document.querySelector(".container");
      const containerLeftMargin = container.getBoundingClientRect().left;
      const containerLeftWidth = container.getBoundingClientRect().width;

      if (counter < 1) {
        counter++;

        if (containerFooter) {
          containerFooter.style.marginLeft = `${containerLeftMargin}px`;
          footer.style.maxWidth = `${
            containerLeftWidth + containerLeftMargin + 140
          }px`;
        }
      }

      if (window.innerWidth >= 1537) {
        if (containerFooter) {
          containerFooter.style.marginLeft = `${containerLeftMargin}px`;
          footer.style.maxWidth = `${
            containerLeftWidth + containerLeftMargin + 140
          }px`;
        }
      }

      if (window.innerWidth <= 1536) {
        footer.style.width = 100 + "%";

        if (containerFooter) {
          containerFooter.classList.add("container");
          containerFooter.classList.add("container--footerSecond");
          footer
            .querySelector(".container")
            .classList.remove("container--footer");
        }
      }
    });

    window.addEventListener("resize", () => {
      const footer = document.querySelector(".footer");

      const containerFooter = document.querySelector(".container--footer");

      const container = document.querySelector(".container");
      const containerLeftMargin = container.getBoundingClientRect().left;
      const containerLeftWidth = container.getBoundingClientRect().width;

      if (window.innerWidth >= 1537) {
        try {
          containerFooter.style.marginLeft = `${containerLeftMargin}px`;
          footer.style.maxWidth = `${
            containerLeftWidth + containerLeftMargin + 140
          }px`;
        } catch (error) {}
      }

      if (window.innerWidth <= 1536) {
        footer.style.maxWidth = 100 + "%";

        if (containerFooter) {
          containerFooter.classList.add("container");
          containerFooter.classList.add("container--footerSecond");
          containerFooter.classList.remove("container--footer");
        }
      }
    });
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1537) {
      document.addEventListener("DOMContentLoaded", () => {
        let counter = 0;

        const footer = document.querySelector(".footer");

        const containerFooter = document.querySelector(".container--footer");

        let containerFooterSecond;
        try {
          containerFooterSecond = document.querySelector(
            ".container--footerSecond"
          );
        } catch (e) {}

        const container = document.querySelector(".container");
        const containerLeftMargin = container.getBoundingClientRect().left;
        const containerLeftWidth = container.getBoundingClientRect().width;

        if (counter < 1) {
          counter++;

          containerFooter.style.marginLeft = `${containerLeftMargin}px`;
          footer.style.maxWidth = `${
            containerLeftWidth + containerLeftMargin + 140
          }px`;
        }

        if (window.innerWidth >= 1537) {
          containerFooter.style.marginLeft = `${containerLeftMargin}px`;
          footer.style.maxWidth = `${
            containerLeftWidth + containerLeftMargin + 140
          }px`;

          if (containerFooterSecond) {
            containerFooterSecond.replace(
              "container--footerSecond",
              "container--footer"
            );
          }
        }

        if (window.innerWidth <= 1536) {
          footer.style.width = 100 + "%";

          containerFooter.classList.add("container");
          containerFooter.classList.add("container--footerSecond");
          footer
            .querySelector(".container")
            .classList.remove("container--footer");
        }
      });

      window.addEventListener("resize", () => {
        const footer = document.querySelector(".footer");

        const containerFooter = document.querySelector(".container--footer");

        let containerFooterSecond;
        try {
          containerFooterSecond = document.querySelector(
            ".container--footerSecond"
          );
        } catch (e) {}

        const container = document.querySelector(".container");
        const containerLeftMargin = container.getBoundingClientRect().left;
        const containerLeftWidth = container.getBoundingClientRect().width;

        if (window.innerWidth >= 1537) {
          containerFooter.style.marginLeft = `${containerLeftMargin}px`;
          footer.style.maxWidth = `${
            containerLeftWidth + containerLeftMargin + 140
          }px`;

          if (containerFooterSecond) {
            containerFooterSecond.replace(
              "container--footerSecond",
              "container--footer"
            );
          }
        }

        if (window.innerWidth <= 1536) {
          footer.style.maxWidth = 100 + "%";

          if (containerFooter) {
            containerFooter.classList.add("container");
            containerFooter.classList.add("container--footerSecond");
            containerFooter.classList.remove("container--footer");
          }
        }

        if (window.innerWidth <= 1090) {
          footer.style.maxWidth = 100 + "%";
          if (containerFooter) {
            containerFooter.style.marginLeft = null;
          }

          if (containerFooter) {
            containerFooter.classList.add("container");
            containerFooter.classList.add("container--footerSecond");
            containerFooter.classList.remove("container--footer");
          }
        }
      });
    }
  });
  // ==============

  const container = document.querySelector(".container");
  const containerLeftMargin = container.getBoundingClientRect().left;
  const containerLeftPadding = getComputedStyle(container).paddingLeft;

  const containerFooter = document.querySelector(".container--footer");

  if (window.innerWidth >= 1091) {
    if (containerFooter) {
      containerFooter.style.marginLeft = `${
        containerLeftMargin + Number(containerLeftPadding.substring(0, 2))
      }px`;
    }
  }
  if (window.innerWidth <= 1090) {
    if (containerFooter) {
      containerFooter.style.marginLeft = null;
    }
    if (containerFooter) {
      containerFooter.classList.add("container");
      containerFooter.classList.add("container--footerSecond");
      containerFooter.classList.remove("container--footer");
    }
  }

  window.addEventListener("resize", () => {
    const container = document.querySelector(".container");
    const containerLeftMargin = container.getBoundingClientRect().left;
    const containerLeftPadding = getComputedStyle(container).paddingLeft;

    const containerFooter = document.querySelector(".container--footer");
    const containerFooterSecond = document.querySelector(
      ".container--footerSecond"
    );

    if (window.innerWidth > 1090) {
      if (containerFooterSecond) {
        containerFooterSecond.classList.remove("container");
        containerFooterSecond.classList.add("container--footer");
        containerFooterSecond.classList.remove("container--footerSecond");
      }
      if (containerFooter) {
        containerFooter.style.marginLeft = `${
          containerLeftMargin + Number(containerLeftPadding.substring(0, 2))
        }px`;
      }
      if (containerFooterSecond) {
        containerFooterSecond.style.marginLeft = `${
          containerLeftMargin + Number(containerLeftPadding.substring(0, 2))
        }px`;
      }
    }
    if (window.innerWidth <= 1090) {
      if (containerFooter) {
        containerFooter.style.marginLeft = null;
      }
      if (containerFooter) {
        containerFooter.classList.add("container");
        containerFooter.classList.add("container--footerSecond");
        containerFooter.classList.remove("container--footer");
      }
    }
  });

  // document.addEventListener("DOMContentLoaded", () => {
  //   const footer = document.querySelector(".footer");
  //   const footerWidth = footer.getBoundingClientRect().width;

  //   const containerFooter = document.querySelector(".container--footer");
  //   const containerFooterSecond = document.querySelector(
  //     ".container--footerSecond"
  //   );

  //   const footerForm = document.querySelector(".footer__right-side-form");
  //   const footerFormWidth = footerForm.getBoundingClientRect().width;

  //   const container = document.querySelector(".container");
  //   const containerLeftMargin = container.getBoundingClientRect().left;

  //   if (containerFooterSecond) {
  //     containerFooterSecond.style.maxWidth = `${
  //       footerWidth - containerLeftMargin - footerFormWidth
  //     }px`;
  //   }
  //   if (containerFooter) {
  //     containerFooter.style.maxWidth = `${
  //       footerWidth - containerLeftMargin - footerFormWidth
  //     }px`;
  //   }
  // });

  // window.addEventListener("resize", () => {
  //   const footer = document.querySelector(".footer");
  //   const footerWidth = footer.getBoundingClientRect().width;

  //   const containerFooter = document.querySelector(".container--footer");
  //   const containerFooterSecond = document.querySelector(
  //     ".container--footerSecond"
  //   );

  //   const footerForm = document.querySelector(".footer__right-side-form");
  //   const footerFormWidth = footerForm.getBoundingClientRect().width;

  //   const container = document.querySelector(".container");
  //   const containerLeftMargin = container.getBoundingClientRect().left;

  //   if (containerFooterSecond) {
  //     containerFooterSecond.style.maxWidth = `${
  //       footerWidth - containerLeftMargin - footerFormWidth
  //     }px`;
  //   }
  //   if (containerFooter) {
  //     containerFooter.style.maxWidth = `${
  //       footerWidth - containerLeftMargin - footerFormWidth
  //     }px`;
  //   }
  // });
} catch (error) {}


/***/ }),

/***/ 951:
/***/ (function() {

try {
  window.addEventListener("load", () => {
    changeItemsPositionsInFooter();

    window.addEventListener("resize", () => {
      changeItemsPositionsInFooter();
    });
  });

  // function for change items positions in footer
  function changeItemsPositionsInFooter() {
    // footer
    const footer = document.querySelector(".footer");
    // when width less 620
    if (window.innerWidth <= 600) {
      // get form parent
      const formParent = document.querySelector(".footer__right-side-form");
      // get form
      let form;
      try {
        form = formParent.querySelector(".footer__right-side-form-content");
      } catch {}
      // remove form
      if (form) {
        const deletedForm = formParent.removeChild(form);
        // create new item
        const newFooterItem = document.createElement("li");
        newFooterItem.className =
          "footer__blocks-item footer__blocks-item--new-item-with-form";
        newFooterItem.appendChild(deletedForm);
        // first item from footer items
        const firstItemWithLogo = document.querySelector(
          ".footer__blocks-item--one"
        );
        // append new item after first item
        firstItemWithLogo.after(newFooterItem);
      }
      // remove form parent
      if (formParent) {
        formParent.remove();
      }
    }
    // when width more than 600
    if (window.innerWidth > 600) {
      // items parent
      const footerItemsList = document.querySelector(".footer__blocks");
      // get form
      let formParent;
      let form;
      try {
        formParent = footerItemsList.querySelector(
          ".footer__blocks-item--new-item-with-form"
        );
        form = formParent.querySelector(".footer__right-side-form-content");
      } catch {}
      if (form) {
        // remove form
        const deletedFormElement = formParent.removeChild(form);
        // create form parent element
        const createdFormParentElement = document.createElement("div");
        createdFormParentElement.className = "footer__right-side-form";
        // append restored block to initial position
        footer.append(createdFormParentElement);
        // restore initial block with form
        const restoredFormParentElement = footer.querySelector(
          ".footer__right-side-form"
        );
        // append form to restored parent block
        restoredFormParentElement.appendChild(deletedFormElement);
        // remove created for small screens parent
        formParent.remove();
      }
    }
  }
} catch (error) {}


/***/ }),

/***/ 957:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    const checkbox = document.querySelector(
      ".footer__right-side-form-form-checkbox"
    );
    const checkboxCustomActive = document.querySelector(
      ".footer__right-side-form-form-checkbox-custom--active"
    );

    checkbox.addEventListener("click", () => {
      if (!checkbox.checked) {
        checkboxCustomActive.style.opacity = 0;
      }
      if (checkbox.checked) {
        checkboxCustomActive.style.opacity = 1;
      }
    });
  });
} catch (error) {}


/***/ }),

/***/ 253:
/***/ (function() {

try {
  document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 1024) {
      const headers = document.querySelectorAll(".header--main");

      headers.forEach((header) => {
        addPaddingsToHeader(header);
      });
    }
  });

  window.addEventListener("scroll", () => {
    if (window.innerWidth <= 1024) {
      const headers = document.querySelectorAll(".header--main");

      headers.forEach((header) => {
        addPaddingsToHeader(header);
      });
    }
  });

  function addPaddingsToHeader(hdr) {
    const scrollTop = window.scrollY;

    if (scrollTop >= 1) {
      if (hdr.classList.contains("header--main-transparent")) {
        hdr.classList.add("header--main-white");
      }

      hdr.classList.add("header--main--min-padding");
    }
    if (scrollTop === 0) {
      if (hdr.classList.contains("header--main-transparent")) {
        hdr.classList.remove("header--main-white");
      }
      hdr.classList.remove("header--main--min-padding");
    }
  }
} catch (error) {}


/***/ }),

/***/ 370:
/***/ (function() {

try {
  document.addEventListener("DOMContentLoaded", () => {
    let headerItemText = document.querySelectorAll(".header__nav-item-text");

    headerItemText.forEach((element) => {
      let innerText = element.innerText; // услуги
      element.innerHTML = ""; // ""

      let textContainer = document.createElement("div"); // create div
      textContainer.classList.add("block"); // add div to class

      for (let letter of innerText) {
        // get each letter of innerText (услуги)
        let span = document.createElement("span"); // create span
        span.innerText = letter.trim() === "" ? "\xa0" : letter;
        span.classList.add("letter");
        textContainer.appendChild(span);
      }

      element.appendChild(textContainer);
      element.appendChild(textContainer.cloneNode(true));
    });
  });

  // fix font-weight animation bag when animated text moves siblings elements
  // window.addEventListener("load", () => {
  //   let headerItems = document.querySelectorAll(".header__nav-item");

  //   headerItems.forEach((headerItem, index) => {
  //     const itemText = headerItem.textContent;

  //     const classForAdd = `headerItem-${index}`;
  //     const classForSearch = `.headerItem-${index}`;

  //     const createdElement = document.createElement("p");

  //     createdElement.textContent = itemText;
  //     createdElement.classList.add(classForAdd);

  //     document.body.appendChild(createdElement);

  //     const appendedElement = document.querySelector(classForSearch);
  //     const appendedElementWidth = appendedElement.getBoundingClientRect().width;

  //     console.log(appendedElement);
  //     console.log(appendedElementWidth);

  //     // const headerItemWidth = headerItem.getBoundingClientRect().width;
  //     headerItem.style.width = `${appendedElementWidth + 5}px`;

  //     // appendedElement.remove();
  //   });
  // });

  window.addEventListener("load", () => {
    let headerItems = document.querySelectorAll(".header__nav-item");

    headerItems.forEach((headerItem) => {
      const headerItemWidth = headerItem.getBoundingClientRect().width;
      headerItem.style.width = `${headerItemWidth + 10}px`;
    });
  });
} catch (error) {}


/***/ }),

/***/ 737:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    let aboutUs;
    let decorationImageLeft;
    let decorationImageRight;

    let aboutUsHeight;
    let decorationImageLeftHeight;
    let decorationImageRightHeight;

    try {
      aboutUs = document.querySelector(".about-us-index");
      decorationImageLeft = aboutUs.querySelector(
        ".about-us__decoration-image--left"
      );
      decorationImageRight = aboutUs.querySelector(
        ".about-us__decoration-image--right"
      );
    } catch (error) {}
    try {
      aboutUsHeight = aboutUs.getBoundingClientRect().height;
      decorationImageLeftHeight =
        decorationImageLeft.getBoundingClientRect().height;
      decorationImageRightHeight =
        decorationImageRight.getBoundingClientRect().height;
    } catch (error) {}

    try {
      decorationImageLeft.style.top =
        (aboutUsHeight - decorationImageLeftHeight) / 2 + "px";
      decorationImageRight.style.top =
        (aboutUsHeight - decorationImageRightHeight) / 3.5 + "px";
    } catch (error) {}

    window.addEventListener("resize", () => {
      let aboutUs;
      let decorationImageLeft;
      let decorationImageRight;

      try {
        aboutUsHeight = aboutUs.getBoundingClientRect().height;
        decorationImageLeftHeight =
          decorationImageLeft.getBoundingClientRect().height;

        decorationImageLeft.style.top =
          (aboutUsHeight - decorationImageLeftHeight) / 2 + "px";
      } catch (error) {}
    });

    window.addEventListener("resize", () => {
      let aboutUs;
      let decorationImageLeft;
      let decorationImageRight;

      try {
        aboutUsHeight = aboutUs.getBoundingClientRect().height;
        decorationImageRightHeight =
          decorationImageRight.getBoundingClientRect().height;

        decorationImageRight.style.top =
          (aboutUsHeight - decorationImageRightHeight * 2) / 2 + "px";
      } catch (error) {}
    });
  });
} catch (error) {}


/***/ }),

/***/ 542:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    let whiteLine;
    let saladLine;

    try {
      whiteLine = document.querySelector(
        ".about-us__running-line-list-white-index"
      );
      saladLine = document.querySelector(
        ".about-us__running-line-list-salad-index"
      );
    } catch (error) {}

    const marqueElementsDisplayed = 8;

    try {
      for (let i = 0; i < marqueElementsDisplayed; i++) {
        saladLine.appendChild(saladLine.children[i].cloneNode(true));
      }
    } catch (error) {}

    try {
      for (let i = 0; i < marqueElementsDisplayed; i++) {
        whiteLine.prepend(whiteLine.children[i]);
      }
    } catch (error) {}
  });
} catch (error) {}


/***/ }),

/***/ 18:
/***/ (function() {

try {
  // section
  const blog = document.querySelector(".blog-index");
  const blogContainer = document.querySelector(".blog-index .container");
  // lines
  const linesWrapper = document.querySelector(".blogLines-index");
  const lines = document.querySelectorAll(".blogLine-index");
  // container
  const blogContainerWidth = blogContainer.getBoundingClientRect().width;
  const blogContainerWidthHalf = blogContainerWidth / 2;
  const blogContainerLeft = blogContainer.getBoundingClientRect().left;
  // lines
  const linesWrapperWidth = linesWrapper.getBoundingClientRect().width;
  const linesWrapperWidthHalf = linesWrapperWidth / 2;
  // needs
  const neededLeftMargin =
    blogContainerWidthHalf + blogContainerLeft - linesWrapperWidthHalf;

  linesWrapper.style.left = `${neededLeftMargin}px`;
} catch (error) {}


/***/ }),

/***/ 676:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    changeSliderBulletsPosition();
  });

  window.addEventListener("resize", () => {
    changeSliderBulletsPosition();
  });

  // function for align bullets
  function changeSliderBulletsPosition() {
    let introTitle;
    let digitalTitle;
    let paginationContainer;
    let pagination;

    let paginationWidth;
    let paginationBullets;
    let introTitleLeft;
    let introTitleTop;
    let digitalTitleLeft;
    let digitalTitleTop;
    let digitalTitleWidth;
    let digitalTitleHeight;

    try {
      introTitle = document.querySelector(
        ".intro__content-top-title--for-pagination-calibration"
      );
      digitalTitle = document.querySelector(
        ".intro__content-digital-block--for-pagination-calibration"
      );

      paginationContainer = document.querySelector(
        ".intro__splider--container"
      );
      pagination = paginationContainer.querySelector(".splide__pagination");
      paginationWidth = pagination.getBoundingClientRect().width;
      paginationBullets = pagination.querySelectorAll("li");

      // const paginationLeft = pagination.getBoundingClientRect().left
      introTitleLeft = introTitle.getBoundingClientRect().left;
      introTitleTop = introTitle.getBoundingClientRect().top;

      // digital
      digitalTitleLeft = digitalTitle.getBoundingClientRect().left;
      digitalTitleTop = digitalTitle.getBoundingClientRect().top;
      digitalTitleWidth = digitalTitle.getBoundingClientRect().width;
      digitalTitleHeight = digitalTitle.getBoundingClientRect().height;
    } catch (error) {}

    try {
      paginationBullets.forEach((bullet, index) => {
        bullet.style.left = introTitleLeft - 150 + "px";
        bullet.style.top = introTitleTop - 30 + "px";

        if (window.innerWidth <= 1640) {
          bullet.style.left = introTitleLeft - 50 + "px";
          bullet.style.top = introTitleTop - 30 + "px";
        }

        if (window.innerWidth <= 1366) {
          bullet.style.left = introTitleLeft - 85 + "px";
          bullet.style.top = introTitleTop - 50 + "px";
        }

        if (window.innerWidth <= 1239) {
          bullet.style.left = introTitleLeft - 50 + "px";
          bullet.style.top = introTitleTop - 50 + "px";
        }

        if (window.innerWidth <= 1024) {
          bullet.style.left = introTitleLeft - 35 + "px";
          bullet.style.top = introTitleTop - 50 + "px";
        }

        if (window.innerWidth <= 854) {
          bullet.style.left =
            digitalTitleLeft + digitalTitleWidth - paginationWidth + "px";
          bullet.style.top = digitalTitleTop - 65 - 2 + "px";
          // bullet.style.top = introTitleTop - 150 + "px"
        }

        if (window.innerWidth <= 620) {
          bullet.style.left =
            digitalTitleLeft + digitalTitleWidth - paginationWidth + "px";
          bullet.style.top = digitalTitleTop - 15 + "px";
          // bullet.style.top = introTitleTop - 150 + "px"
        }

        if (window.innerWidth <= 480) {
          bullet.style.left =
            digitalTitleLeft + digitalTitleWidth - paginationWidth + "px";
          bullet.style.top = digitalTitleTop - 13 + "px";
          // bullet.style.top = introTitleTop - 150 + "px"
        }

        if (window.innerWidth <= 390) {
          bullet.style.left =
            digitalTitleLeft + digitalTitleWidth - paginationWidth + "px";
          bullet.style.top = digitalTitleTop - 51 + "px";
          // bullet.style.top = introTitleTop - 150 + "px"
        }
      });
    } catch (error) {}
  }
} catch (error) {}


/***/ }),

/***/ 355:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    // const toBottomArrow = document.querySelector(
    //   ".intro__arrow-to-bottom-arrow-block"
    // );
    // const aboutUsTop = document.querySelector(".about-us").offsetTop;
    // const aboutUs = document.querySelector(".about-us");
    // // console.log(aboutUsTop);
    // toBottomArrow.addEventListener("click", () => {
    //   scroll.scrollTo(aboutUs), { offset: 200 };
    //   // scrollTo(0, aboutUsTop);
    // });
  });

  function scrollTo(left, top) {
    let headerHeight;

    if (window.innerWidth > 1280) {
      headerHeight = 83;
    }
    if (window.innerWidth <= 1280) {
      headerHeight = 65;
    }
    if (window.innerWidth <= 680) {
      headerHeight = 60;
    }

    const to = top - headerHeight;

    window.scroll({
      left: left,
      top: to,
      behavior: "smooth",
    });
  }
} catch (error) {}


/***/ }),

/***/ 255:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    try {
      const splideItem1 = new Splide(".intro__splide-string1", {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 3,

        autoScroll: {
          speed: 1,
        },

        gap: 15,

        pagination: false,
        arrows: false,
        direction: "ttb",

        autoWidth: true,

        breakpoints: {
          50000000: {
            height: 950,
          },
          1300: {
            perPage: 4,
          },
          960: {
            perPage: 5,
          },
          620: {
            direction: "ltr",
            perPage: 2,
            gap: 10,
            height: 200,
          },
          440: {
            perPage: 2,
          },
          428: {
            height: 180,
          },
        },
      });
      splideItem1.mount(window.splide.Extensions);
    } catch (error) {}

    try {
      const splideItem2 = new Splide(".intro__splide-string2", {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 3,

        autoScroll: {
          speed: 1,
        },

        gap: 15,

        pagination: false,
        arrows: false,
        direction: "ttb",

        autoWidth: true,

        breakpoints: {
          50000000: {
            height: 950,
          },
          1300: {
            perPage: 4,
          },
          960: {
            perPage: 5,
          },
          620: {
            direction: "ltr",
            perPage: 2,
            gap: 10,
            height: 200,
          },
          440: {
            perPage: 2,
          },
          428: {
            height: 180,
          },
        },
      });
      splideItem2.mount(window.splide.Extensions);
    } catch (error) {}

    try {
      const splideItem3 = new Splide(".intro__splide-string3", {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 3,

        autoScroll: {
          speed: 1,
        },

        gap: 15,

        pagination: false,
        arrows: false,
        direction: "ttb",

        autoWidth: true,

        breakpoints: {
          50000000: {
            height: 950,
          },
          1300: {
            perPage: 4,
          },
          960: {
            perPage: 5,
          },
          620: {
            direction: "ltr",
            perPage: 2,
            gap: 10,
            height: 200,
          },
          440: {
            perPage: 2,
          },
          428: {
            height: 180,
          },
        },
      });
      splideItem3.mount(window.splide.Extensions);
    } catch (error) {}
  });
} catch (error) {}


/***/ }),

/***/ 163:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    try {
      const splideMain = new Splide(".intro__splider--container", {
        perPage: 1,

        type: "loop",
        focus: "center",
        arrows: false,

        pagination: true,

        speed: 1000,

        interval: 6000,

        pauseOnHover: false,
        pauseOnFocus: false,

        breakpoints: {
          1000000: {
            direction: "ttb",
            paginationDirection: "ttb",
            height: 1000,
          },
          1070: {
            direction: "ltr",
            focus: "center",
          },
          854: {
            paginationDirection: "ltr",
          },
          620: {
            height: null,
            autoHeight: true,
          },
        },
      }).mount();
    } catch (error) {}
  });
} catch (error) {}


/***/ }),

/***/ 453:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    let reviews;
    let decorationImage;
    let decorationImageLinesInReviews;
    let decorationImageLinesInProducts;
    let reviewsHeight;
    let decorationImageHeight;

    try {
      reviews = document.querySelector(".reviews");
      decorationImage = document.querySelector(
        ".reviews__decoration-text-index"
      );
      decorationImageLinesInReviews = document.querySelector(
        ".reviews__decoration-lines-index"
      );
      decorationImageLinesInProducts = document.querySelector(
        ".products__decoration-lines-index"
      );
    } catch (error) {}

    try {
      reviewsHeight = reviews.getBoundingClientRect().height;
      decorationImageHeight = decorationImage.getBoundingClientRect().height;

      decorationImage.style.top =
        (reviewsHeight - decorationImageHeight) / 2 + "px";
    } catch (error) {}

    window.addEventListener("resize", () => {
      try {
        reviewsHeight = reviews.getBoundingClientRect().height;
        decorationImageHeight = decorationImage.getBoundingClientRect().height;

        decorationImage.style.top =
          (reviewsHeight - decorationImageHeight) / 2 + "px";
      } catch (error) {}
    });

    document.addEventListener("DOMContentLoaded", () => {
      try {
        decorationImageLinesInProducts.style.left =
          decorationImageLinesInReviews.getBoundingClientRect().left +
          decorationImageLinesInReviews.getBoundingClientRect().width -
          decorationImageLinesInProducts.getBoundingClientRect().width +
          "px";
      } catch (error) {}
    });
  });
} catch (error) {}


/***/ }),

/***/ 484:
/***/ (function() {

try {
  if (window.innerWidth > 550) {
    window.addEventListener("load", () => {
      const items = document.querySelectorAll(".galleryItem");
      items.forEach((item) => {
        item.addEventListener("click", () => {
          const image = item.querySelector("img");
          const imageSource = image.getAttribute("src");
          const closeButtonGallery = item.querySelector(".galleryCrossButton");
          const closeButtonSrc = closeButtonGallery.src;

          const wrapper = document.createElement("div");
          wrapper.classList.add("wrapper");
          wrapper.innerHTML = `
                <div class="galleryContainer">
                    <div class="galleryCrossWrapper">
                        <img class="galleryCross" src="${closeButtonSrc}">
                    </div>
                    <img class="galleryItem" src=${imageSource} alt="Отзыв">
                </div>
            `;

          const body = document.querySelector("body");
          document.body.append(wrapper);
          body.classList.add("hidden");

          const customImage = wrapper.querySelector(".galleryItem");
          if (window.innerWidth > 650) {
            customImage.style.width = window.innerWidth / 3 + "px";
          } else if (window.innerWidth > 650) {
            customImage.style.width = window.innerWidth / 1.4 + "px";
          }

          const cross = wrapper.querySelector(".galleryCross");
          if (window.innerWidth > 650) {
            cross.style.width = window.innerWidth / 99 + "px";
          } else {
            cross.style.width = window.innerWidth / 40 + "px";
          }

          const crossWrapper = wrapper.querySelector(".galleryCrossWrapper");
          crossWrapper.style.marginLeft = window.innerWidth / 99 + 60 + "px";

          setTimeout(() => {
            wrapper.classList.add("wrapper--visible", "wrapper--gallery");
          }, 150);

          const container = wrapper.querySelector(".galleryContainer");
          setTimeout(() => {
            if (container.offsetTop < 0) {
              container.style.marginTop =
                Math.abs(container.offsetTop) + 300 + "px";
            }
          }, 150);

          const closeButton = wrapper.querySelector(".galleryCross");

          closeButton.addEventListener("click", () => {
            wrapper.classList.remove("wrapper--visible");
            // modal.classList.remove("modal--visible");

            const body = document.querySelector("body");
            body.classList.remove("hidden");
          });

          wrapper.addEventListener("click", (e) => {
            if (e.target === wrapper) {
              wrapper.classList.remove("wrapper--visible");
              const body = document.querySelector("body");
              body.classList.remove("hidden");
            }
          });
        });
      });
    });
  }
} catch (error) {}


/***/ }),

/***/ 159:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    try {
      // reviews section splide
      const splide = document.querySelector(".reviews__splide-index");
      const splideArrows = document.querySelectorAll(
        ".reviews__splide-index .splide__arrow"
      );
      const splideArrowsArray = Array.from(splideArrows);
      const splideTop = splide.offsetTop;
      // title for calibration
      const titleForCalibrationArrows = document.querySelector(
        ".section__titles--reviews-index"
      );
      const titleForCalibrationArrowsHeight =
        titleForCalibrationArrows.getBoundingClientRect().height;
      const titleForCalibrationArrowsTop =
        titleForCalibrationArrows.offsetTop / 2;

      splideArrowsArray.forEach((splideArrow) => {
        splideArrow.style.top =
          titleForCalibrationArrowsHeight +
          titleForCalibrationArrowsTop -
          splideTop +
          30 +
          "px";

        if (window.innerWidth <= 620) {
          splideArrow.style.top =
            titleForCalibrationArrowsHeight +
            titleForCalibrationArrowsTop -
            splideTop +
            "px";
        }

        if (window.innerWidth <= 530) {
          splideArrow.style.top =
            titleForCalibrationArrowsHeight +
            titleForCalibrationArrowsTop -
            splideTop +
            115 +
            "px";
        }
      });
    } catch (error) {}
  });

  window.addEventListener("resize", () => {
    try {
      // reviews section splide
      const splide = document.querySelector(".reviews__splide-index");
      const splideArrows = document.querySelectorAll(
        ".reviews__splide-index .splide__arrow"
      );
      const splideArrowsArray = Array.from(splideArrows);
      const splideTop = splide.offsetTop;

      // title for calibration
      const titleForCalibrationArrows = document.querySelector(
        ".section__titles--reviews-index"
      );
      const titleForCalibrationArrowsHeight =
        titleForCalibrationArrows.getBoundingClientRect().height;
      const titleForCalibrationArrowsTop =
        titleForCalibrationArrows.offsetTop / 2;

      splideArrowsArray.forEach((splideArrow) => {
        splideArrow.style.top =
          titleForCalibrationArrowsHeight +
          titleForCalibrationArrowsTop -
          splideTop +
          30 +
          "px";

        if (window.innerWidth <= 620) {
          splideArrow.style.top =
            titleForCalibrationArrowsHeight +
            titleForCalibrationArrowsTop -
            splideTop +
            "px";
        }

        if (window.innerWidth <= 530) {
          splideArrow.style.top =
            titleForCalibrationArrowsHeight +
            titleForCalibrationArrowsTop -
            splideTop +
            115 +
            "px";
        }
      });
    } catch (error) {}
  });
} catch (error) {}


/***/ }),

/***/ 556:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    let splide;
    let splideArrows;
    let splideArrowsPrev;
    let splideArrowsNext;
    let reviews;
    let splideArrowsSlidePrev;
    let splideArrowsSlidesNext;
    let splideArrowsSlidePrevRemoved;
    let splideArrowsSlidesNextRemoved;

    try {
      // reviews section splide
      splide = document.querySelector(".reviews__splide-index");
      splideArrows = document.querySelectorAll(
        ".reviews__splide-index .splide__arrow"
      );
      // arrows prev and next
      splideArrowsPrev = document.querySelector(
        ".reviews__splide-index .splide__arrow--prev"
      );
      splideArrowsNext = document.querySelector(
        ".reviews__splide-index .splide__arrow--next"
      );
      // reviews section
      reviews = document.querySelector(".reviews");
      // get arrows for embed in for arrows block
      splideArrowsSlidePrev = reviews.querySelector(
        ".reviews__splide-index-arrow-prev"
      );
      splideArrowsSlidesNext = reviews.querySelector(
        ".reviews__splide-index-arrow-next"
      );
    } catch (error) {}
    try {
      // removed from html arrows
      splideArrowsSlidePrevRemoved = reviews.removeChild(splideArrowsSlidePrev);
      splideArrowsSlidesNextRemoved = reviews.removeChild(
        splideArrowsSlidesNext
      );
      // add custom arrows for slides
      splideArrowsPrev.appendChild(splideArrowsSlidePrevRemoved);
      splideArrowsNext.appendChild(splideArrowsSlidesNextRemoved);
      // remove not custom arrows for slides
      splideArrowsPrev.firstChild.remove();
      splideArrowsNext.firstChild.remove();
    } catch (error) {}
  });
} catch (error) {}


/***/ }),

/***/ 280:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    try {
      const splide4 = new Splide(".reviews__splide-index", {
        arrows: true,
        perMove: 1,
        pagination: false,
        focus: "center",
        // autoWidth: true,
        perPage: 4,
        gap: 16,

        breakpoints: {
          1460: {
            gap: 16,
            perPage: 4,
            // gap: 50,
          },
          1350: {
            // gap: 20,
          },
          1200: {
            perPage: 4,
            // gap: 20,
          },
          1180: {
            perPage: 3,
            // gap: 60,
          },
          1060: {
            perPage: 2,
            gap: 30,
          },
          920: {
            perPage: 2,
            // gap: 160,
          },
          840: {
            // perPage: 2,
            // gap: 100,
          },
          765: {
            // perPage: 2,
            // gap: 30,
          },
          675: {
            perPage: 1,
            // gap: 30,
          },
          450: {
            perPage: 1,
            // gap: 15,
          },
        },
      }).mount();
    } catch (error) {}
  });
} catch (error) {}


/***/ }),

/***/ 5:
/***/ (function() {

try {
  window.addEventListener("load", () => {
    const items = document.querySelectorAll(".servisec-list__item");

    if (items) {
      items.forEach((item) => {
        const spanAnimationBgWrapper = item.querySelector(
          ".servisec-list__item-title-span-wrapper"
        );
        const titleWithSpan = item.querySelector(
          ".servisec-list__item-title span"
        );
        const span = item.querySelector(".servisec-list__item-title span");

        if (
          spanAnimationBgWrapper.classList.contains(
            "servisec-list__item-title-span-wrapper--higher"
          )
        ) {
          spanAnimationBgWrapper.style.left =
            titleWithSpan.offsetLeft +
            titleWithSpan.offsetParent.offsetLeft -
            2 +
            "px";
          spanAnimationBgWrapper.style.top =
            titleWithSpan.offsetTop +
            titleWithSpan.offsetParent.offsetTop +
            "px";
          spanAnimationBgWrapper.style.width =
            span.getBoundingClientRect().width + "px";
          spanAnimationBgWrapper.style.height =
            span.getBoundingClientRect().height + 7 + "px";
        } else if (
          spanAnimationBgWrapper.classList.contains(
            "servisec-list__item-title-span-wrapper--wide"
          )
        ) {
          spanAnimationBgWrapper.style.left =
            titleWithSpan.offsetLeft +
            titleWithSpan.offsetParent.offsetLeft -
            2 +
            "px";
          spanAnimationBgWrapper.style.top =
            titleWithSpan.offsetTop +
            titleWithSpan.offsetParent.offsetTop +
            "px";
          spanAnimationBgWrapper.style.width =
            span.getBoundingClientRect().width + 1 + "px";
          spanAnimationBgWrapper.style.height =
            span.getBoundingClientRect().height / 1 + "px";
        } else {
          spanAnimationBgWrapper.style.left =
            titleWithSpan.offsetLeft +
            titleWithSpan.offsetParent.offsetLeft -
            2 +
            "px";
          spanAnimationBgWrapper.style.top =
            titleWithSpan.offsetTop +
            titleWithSpan.offsetParent.offsetTop +
            "px";
          spanAnimationBgWrapper.style.width =
            span.getBoundingClientRect().width + "px";
          spanAnimationBgWrapper.style.height =
            span.getBoundingClientRect().height / 1 + "px";
        }
      });
    }
  });

  window.addEventListener("resize", () => {
    const items = document.querySelectorAll(".servisec-list__item");

    items.forEach((item) => {
      const spanAnimationBgWrapper = item.querySelector(
        ".servisec-list__item-title-span-wrapper"
      );
      const titleWithSpan = item.querySelector(
        ".servisec-list__item-title span"
      );
      const span = item.querySelector(".servisec-list__item-title span");

      spanAnimationBgWrapper.style.left =
        titleWithSpan.offsetLeft +
        titleWithSpan.offsetParent.offsetLeft -
        2 +
        "px";
      spanAnimationBgWrapper.style.top =
        titleWithSpan.offsetTop + titleWithSpan.offsetParent.offsetTop + "px";
      spanAnimationBgWrapper.style.width =
        span.getBoundingClientRect().width + "px";
      spanAnimationBgWrapper.style.height =
        span.getBoundingClientRect().height / 1 + "px";
    });
  });
} catch (error) {}


/***/ }),

/***/ 38:
/***/ (function() {

document.addEventListener("DOMContentLoaded", () => {
  let modalTriggers;
  let wrappers;
  let button;
  let form;
  let inputs;
  let isModalTrigger;
  let isWrapper;
  let body;

  try {
    modalTriggers = document.querySelectorAll(".modalTrigger");
    wrappers = document.querySelectorAll(".wrapper");
    // add form submisson with validation
    wrappers.forEach((wrapper) => {
      button = wrapper.querySelector(".fillingButton");
      form = wrapper.querySelector("form");
      inputs = form.querySelectorAll("input");
    });
    //
    modalTriggers.forEach((modalTrigger) => {
      modalTrigger.addEventListener("click", () => {
        //   modals.forEach((modal) => {
        wrappers.forEach((wrapper) => {
          isModalTrigger = modalTrigger.dataset.modal;
          isWrapper = wrapper.dataset.modal;

          if (isModalTrigger && isWrapper && isModalTrigger === isWrapper) {
            wrapper.classList.add("wrapper--visible");

            body = document.querySelector("body");
            body.classList.add("hidden");
          }
        });
      });
    });
  } catch (error) {}
});

document.addEventListener("keyup", (e) => {
  let wrappers;
  let visibleWrapper;
  let body;

  try {
    wrappers = document.querySelectorAll(".wrapper");

    wrappers.forEach((wrapper) => {
      visibleWrapper = wrapper.classList.contains("wrapper--visible");

      if (e.key === "Escape" && visibleWrapper) {
        wrapper.classList.remove("wrapper--visible");

        body = document.querySelector("body");
        body.classList.remove("hidden");
      }
    });
  } catch (error) {}
});

window.addEventListener("load", () => {
  let wrappers;
  let body;
  let closeButton;

  try {
    wrappers = document.querySelectorAll(".wrapper");

    wrappers.forEach((wrapper) => {
      wrapper.addEventListener("click", (e) => {
        if (e.target === wrapper) {
          wrappers.forEach((wrapper) => {
            wrapper.classList.remove("wrapper--visible");

            body = document.querySelector("body");
            body.classList.remove("hidden");
          });
        }
      });

      closeButton = wrapper.querySelector(".modal__contentCross");

      closeButton.addEventListener("click", () => {
        wrapper.classList.remove("wrapper--visible");

        body = document.querySelector("body");
        body.classList.remove("hidden");
      });
    });
  } catch (error) {}
});


/***/ }),

/***/ 604:
/***/ (function() {

try {
  let header;
  let intro;

  try {
    header = document.querySelector(".header--main");
    intro = document.querySelector(".intro--productsOncePage");
  } catch (error) {}

  window.addEventListener("load", () => {
    try {
      intro.style.marginTop = header.getBoundingClientRect().height + "px";
    } catch (error) {}
  });
} catch (error) {}


/***/ }),

/***/ 461:
/***/ (function() {

try {
  window.addEventListener("load", () => {
    const items = document.querySelectorAll(".cycles__contentBottomItem");

    items.forEach((item) => {
      const itemHeight = item.getBoundingClientRect().height;

      const itemsLeftSide = item.querySelector(
        ".cycles__contentBottomItemLeft"
      );

      itemsLeftSide.style.width = `${itemHeight}px`;
    });
  });

  window.addEventListener("resize", () => {
    const items = document.querySelectorAll(".cycles__contentBottomItem");

    items.forEach((item) => {
      const itemHeight = item.getBoundingClientRect().height;

      const itemsLeftSide = item.querySelector(
        ".cycles__contentBottomItemLeft"
      );

      itemsLeftSide.style.width = `${itemHeight}px`;
    });
  });
} catch (error) {}


/***/ }),

/***/ 308:
/***/ (function() {

try {
  // bullets wrapper
  const bulletsWrapper = document.querySelector(
    ".formats__contentBottomRightItemsBullets"
  );
  // images
  const reviewsImages = document.querySelectorAll(
    ".formats__contentBottomRightItem"
  );
  const reviewsImage = document.querySelector(
    ".formats__contentBottomRightItem"
  );
  const reviewsImagesWrapper = document.querySelector(
    ".formats__contentBottomRightItems"
  );
  // elements
  const itemsForHover = document.querySelectorAll(
    ".formats__contentBottomLeftItem"
  );
  // const bullet = document.querySelector(
  //   ".formats__contentBottomRightItemsBullet"
  // );

  document.addEventListener("DOMContentLoaded", () => {
    try {
      reviewsImagesWrapper.style.height =
        reviewsImage.getBoundingClientRect().height + "px";
    } catch (error) {}
  });

  // set data attributes and create and append bullets for items
  itemsForHover.forEach((item, index) => {
    let currentIndex = index + 1;

    item.dataset.itemNumber = currentIndex;

    if (currentIndex === 1) {
      item.classList.add("formats__contentBottomLeftItem--active");
    }
  });

  reviewsImages.forEach((reviewsImage, index) => {
    let currentIndex = index + 1;

    reviewsImage.dataset.itemNumber = currentIndex;

    if (currentIndex === 1) {
      reviewsImage.classList.add("formats__contentBottomRightItem--active");
    }

    if (reviewsImage) {
      const bullet = document.createElement("div");
      bullet.dataset.itemNumber = currentIndex;
      bullet.classList.add("formats__contentBottomRightItemsBullet");

      bulletsWrapper.appendChild(bullet);
    }
  });

  const bullets = document.querySelectorAll(
    ".formats__contentBottomRightItemsBullet"
  );

  bullets.forEach((bullet, index) => {
    if (index < 1) {
      bullet.classList.add("formats__contentBottomRightItemsBullet--active");
    }
  });

  itemsForHover.forEach((item) => {
    reviewsImages.forEach((reviewsImage) => {
      item.addEventListener("mouseleave", (e) => {
        // reset active class from all images
        // itemsForHover.forEach((itemForResetActiveClass) => {
        //   itemForResetActiveClass.classList.remove(
        //     "formats__contentBottomLeftItem--active"
        //   );
        // });
      });
      item.addEventListener("mouseenter", (e) => {
        const itemDataset = e.currentTarget.dataset.itemNumber;
        const imageDataset = reviewsImage.dataset.itemNumber;
        // add active class
        // reset active class from all images
        itemsForHover.forEach((itemForResetActiveClass) => {
          itemForResetActiveClass.classList.remove(
            "formats__contentBottomLeftItem--active"
          );
        });

        e.currentTarget.classList.add("formats__contentBottomLeftItem--active");
        // bullets
        bullets.forEach((bullet) => {
          const bulletDataset = bullet.dataset.itemNumber;

          if (itemDataset === bulletDataset) {
            bullets.forEach((bulletForDeleteActiveClass) => {
              // reset active class from all images
              bulletForDeleteActiveClass.classList.remove(
                "formats__contentBottomRightItemsBullet--active"
              );
              // add class to active image
              bullet.classList.add(
                "formats__contentBottomRightItemsBullet--active"
              );
            });
          }
        });
        // images
        if (itemDataset === imageDataset) {
          reviewsImages.forEach((reviewsImageForDeleteActiveClass) => {
            // reset active class from all images
            reviewsImageForDeleteActiveClass.classList.remove(
              "formats__contentBottomRightItem--active"
            );
            // add class to active image
            reviewsImage.classList.add(
              "formats__contentBottomRightItem--active"
            );
          });
        }
      });
    });
  });
} catch (error) {}


/***/ }),

/***/ 411:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    try {
      const reviews = document.querySelector(".reviews");
      // reviews section splide
      const splide = document.querySelector(".reviews__splide-serviceDetail");
      const splideTop = splide.offsetTop;
      // container
      const splideContainer = reviews.querySelector(".container");
      const splideContainerWidth =
        splideContainer.getBoundingClientRect().width;
      const splideContainerLeft = splideContainer.getBoundingClientRect().left;
      // arrows
      const splideArrows = document.querySelectorAll(
        ".reviews__splide-serviceDetail .splide__arrow"
      );
      const splideArrowsArray = Array.from(splideArrows);
      // title for calibration
      const titleForCalibrationArrows = document.querySelector(
        ".section__titles--reviews"
      );
      const titleForCalibrationArrowsHeight =
        titleForCalibrationArrows.getBoundingClientRect().height;
      const titleForCalibrationArrowsTop =
        titleForCalibrationArrows.offsetTop / 2;

      splideArrowsArray.forEach((splideArrow) => {
        splideArrow.style.left = `${
          splideContainerLeft + splideContainerWidth - 90
        }px`;

        if (splideArrow.classList.contains("splide__arrow--prev")) {
          splideArrow.style.left = `${
            splideContainerLeft + splideContainerWidth - 90 - 59
          }px`;
        }

        splideArrow.style.top =
          titleForCalibrationArrowsHeight +
          titleForCalibrationArrowsTop -
          splideTop +
          "px";
      });
    } catch (error) {}
  });

  window.addEventListener("resize", () => {
    try {
      const reviews = document.querySelector(".reviews");
      // reviews section splide
      const splide = document.querySelector(".reviews__splide-serviceDetail");
      const splideTop = splide.offsetTop;
      // container
      const splideContainer = reviews.querySelector(".container");
      const splideContainerWidth =
        splideContainer.getBoundingClientRect().width;
      const splideContainerLeft = splideContainer.getBoundingClientRect().left;
      // arrows
      const splideArrows = document.querySelectorAll(
        ".reviews__splide-serviceDetail .splide__arrow"
      );
      const splideArrowsArray = Array.from(splideArrows);
      // title for calibration
      const titleForCalibrationArrows = document.querySelector(
        ".section__titles--reviews"
      );
      const titleForCalibrationArrowsHeight =
        titleForCalibrationArrows.getBoundingClientRect().height;
      const titleForCalibrationArrowsTop =
        titleForCalibrationArrows.offsetTop / 2;

      splideArrowsArray.forEach((splideArrow) => {
        splideArrow.style.left = `${
          splideContainerLeft + splideContainerWidth - 90
        }px`;

        if (splideArrow.classList.contains("splide__arrow--prev")) {
          splideArrow.style.left = `${
            splideContainerLeft + splideContainerWidth - 90 - 59
          }px`;
        }

        splideArrow.style.top =
          titleForCalibrationArrowsHeight +
          titleForCalibrationArrowsTop -
          splideTop +
          "px";
      });
    } catch (error) {}
  });
} catch (error) {}


/***/ }),

/***/ 721:
/***/ (function() {

window.addEventListener("load", function () {
  try {
    // reviews section splide
    const splide = document.querySelector(".reviews__splide-serviceDetail");
    const splideArrows = document.querySelectorAll(
      ".reviews__splide-serviceDetail .splide__arrow"
    );
    // arrows prev and next
    const splideArrowsPrev = document.querySelector(
      ".reviews__splide-serviceDetail .splide__arrow--prev"
    );
    const splideArrowsNext = document.querySelector(
      ".reviews__splide-serviceDetail .splide__arrow--next"
    );
    // reviews section
    const reviews = document.querySelector(".reviews");
    // get arrows for embed in for arrows block
    const splideArrowsSlidePrev = reviews.querySelector(
      ".reviews__splide-serviceDetail-arrow-prev"
    );
    const splideArrowsSlidesNext = reviews.querySelector(
      ".reviews__splide-serviceDetail-arrow-next"
    );
    // removed from html arrows
    const splideArrowsSlidePrevRemoved = reviews.removeChild(
      splideArrowsSlidePrev
    );
    const splideArrowsSlidesNextRemoved = reviews.removeChild(
      splideArrowsSlidesNext
    );
    // add custom arrows for slides
    splideArrowsPrev.appendChild(splideArrowsSlidePrevRemoved);
    splideArrowsNext.appendChild(splideArrowsSlidesNextRemoved);
    // remove not custom arrows for slides
    splideArrowsPrev.firstChild.remove();
    splideArrowsNext.firstChild.remove();
  } catch (error) {}
});


/***/ }),

/***/ 922:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    try {
      const splide4 = new Splide(".reviews__splide-serviceDetail", {
        arrows: true,
        perMove: 1,
        pagination: false,
        focus: "center",

        breakpoints: {
          5000: {
            perPage: 4,
            gap: 16,
          },
          1460: {
            perPage: 4,
            gap: 50,
          },
          1350: {
            gap: 20,
          },
          1200: {
            perPage: 4,
            gap: 20,
          },
          1180: {
            perPage: 3,
            gap: 60,
            // gap: 200
          },
          1060: {
            // perPage: 2,
            gap: 20,
          },
          920: {
            perPage: 2,
            gap: 160,
          },
          840: {
            // perPage: 2,
            gap: 100,
          },
          765: {
            // perPage: 2,
            gap: 30,
          },
          675: {
            perPage: 1,
            gap: 30,
          },
          450: {
            perPage: 1,
            gap: 15,
          },
        },
      }).mount();
    } catch (error) {}
  });
} catch (error) {}


/***/ }),

/***/ 898:
/***/ (function() {

try {
  const items = document.querySelectorAll(".types__contentBottomItem-sds");

  document.addEventListener("DOMContentLoaded", () => {
    items.forEach((item) => {
      let text;
      let image;
      let textLeftMargin;
      let textWidth;

      try {
        text = item.querySelector(".decorationsWrapperBlackText-sds");
        image = item.querySelector(".decorationsWrapperBlackImage");

        textLeftMargin = text.offsetLeft;
        textWidth = text.getBoundingClientRect().width;

        image.style.left = `${textLeftMargin + textWidth + 10}px`;
      } catch (error) {}

      if (window.innerWidth <= 900) {
        try {
          image.style.left = `${textLeftMargin + textWidth + 20}px`;
        } catch (error) {}
      }

      if (window.innerWidth <= 350) {
        try {
          image.style.left = `${textLeftMargin + textWidth + 30}px`;
        } catch (error) {}
      }
    });
  });
} catch (error) {}


/***/ }),

/***/ 904:
/***/ (function() {

try {
  // section
  const blog = document.querySelector(".listAfterIntro");
  const blogContainer = document.querySelector(".listAfterIntro .container");
  // lines
  const linesWrapper = document.querySelector(".blogLines");
  const lines = document.querySelectorAll(".blogLine");
  // container
  const blogContainerWidth = blogContainer.getBoundingClientRect().width;
  const blogContainerWidthHalf = blogContainerWidth / 2;
  const blogContainerLeft = blogContainer.getBoundingClientRect().left;
  // lines
  const linesWrapperWidth = linesWrapper.getBoundingClientRect().width;
  const linesWrapperWidthHalf = linesWrapperWidth / 2;
  // needs
  const neededLeftMargin =
    blogContainerWidthHalf + blogContainerLeft - linesWrapperWidthHalf;

  linesWrapper.style.left = `${neededLeftMargin}px`;
} catch (error) {}


/***/ }),

/***/ 312:
/***/ (function() {

try {
  ("use strict");
  // parent
  const parent = document.querySelector(".quizComponent");
  // slider
  const slidesWrapper = document.querySelector(".quizComponentQuestions");
  const slides = document.querySelectorAll(".quizComponentQuestion");
  // controls
  const controls = document.querySelector(".quizComponentControls");
  // buttons
  const leftSideButton = document.querySelector(
    ".quizComponentControlsLeftButton"
  );

  const leftSideButtonSvg = document.querySelector(
    ".quizComponentControlsLeftButtonImage"
  );
  const rightSideButton = document.querySelector(
    ".quizComponentControlsRightButton"
  );
  // stages
  const currentStage = document.querySelector(
    ".quizComponentControlsStagesCurrentStage"
  );
  const stagesAtAll = document.querySelector(
    ".quizComponentControlsStagesAtAll"
  );

  //
  let currentLeftButtonFontSize = 0;

  window.addEventListener("load", () => {
    try {
      currentLeftButtonFontSize = getComputedStyle(leftSideButton).fontSize;
      let currentSlide = 1;
      let atAllSlides;
      //
      let currentTransformPosition = 0;
      // get width for scroll
      const parentWidth = parent.getBoundingClientRect().width;
      // set slides width
      slides.forEach((slide, index) => {
        const parentLeftPadding = getComputedStyle(parent).paddingLeft;
        const reg = /\d*/;
        slide.style.width = `${
          parentWidth - Number(parentLeftPadding.match(reg) * 2)
        }px`;
        slide.style.marginRight = `${Number(
          parentLeftPadding.match(reg) * 2
        )}px`;
        slide.dataset.slideNumber = index + 1;
        atAllSlides = slide.dataset.slideNumber = index + 1;
      });
      // set at all stages
      stagesAtAll.textContent = atAllSlides;
      // set buttons type for change animation and interaction
      leftSideButton.dataset.type = "next";
      // right side button
      rightSideButton.addEventListener("click", () => {
        const isActive = rightSideButton.dataset.type === "active";

        const notLastSlideNow = currentSlide !== atAllSlides;
        const lastSlideNow = currentSlide === atAllSlides;

        if (isActive && notLastSlideNow && atAllSlides - currentSlide !== 1) {
          switch (currentSlide) {
            case 2:
              slides.forEach((slide, index) => {
                if (currentSlide === 2 && index + 1 === 2) {
                  const inputs = slide.querySelectorAll("input");
                  inputs.forEach((input) => {
                    if (input.value !== "" || input.value.length > 3) {
                      currentTransformPosition -= parentWidth;
                      slidesWrapper.style.transform = `translateX(${currentTransformPosition}px)`;
                      // set current slide
                      currentSlide++;
                      console.log(currentSlide);
                      console.log(input.value);
                      currentStage.innerText = currentSlide;
                    }
                  });
                }
              });

            case 3:
              slides.forEach((slide, index) => {
                if (currentSlide === 3 && index + 1 === 3) {
                  const inputs = slide.querySelectorAll("input");
                  inputs.forEach((input) => {
                    if (input.checked) {
                      currentTransformPosition -= parentWidth;
                      slidesWrapper.style.transform = `translateX(${currentTransformPosition}px)`;
                      // set current slide
                      currentSlide++;
                      console.log(currentSlide);
                      console.log(input.value);
                      currentStage.innerText = currentSlide;
                    }
                  });
                }
              });
          }

          // currentTransformPosition -= parentWidth;
          // slidesWrapper.style.transform = `translateX(${currentTransformPosition}px)`;
          // // set current slide
          // currentSlide++;
          // currentStage.innerText = currentSlide;
        } else if (isActive && atAllSlides - currentSlide === 1) {
          if (currentSlide === 4) {
            slides.forEach((slide, index) => {
              if (currentSlide === 4 && index + 1 === 4) {
                console.log(currentSlide);
                const inputs = slide.querySelectorAll("input");
                inputs.forEach((input) => {
                  console.log(input);
                  if (input.value !== "" || input.value.length > 3) {
                    // set current slide
                    const submitButton = document.querySelector(
                      ".quizComponentControlsRightButtonSubmit"
                    );

                    let counter = 0;

                    rightSideButton.style.display = "none";
                    submitButton.style.display = "flex";
                    submitButton.removeAttribute("disabled");

                    currentTransformPosition -= parentWidth;
                    slidesWrapper.style.transform = `translateX(${currentTransformPosition}px)`;
                    // set current slide
                    if (counter < 1) {
                      currentSlide++;
                      counter++;
                    }
                    currentStage.innerText = atAllSlides;
                  }
                });
              }
            });
          }
        }
        if (lastSlideNow) {
          if (currentSlide === 5) {
            slides.forEach((slide, index) => {
              if (currentSlide === 5 && index + 1 === 5) {
                console.log(currentSlide);
                const inputs = slide.querySelectorAll("input");
                inputs.forEach((input) => {
                  if (input.value !== "" || input.value.length > 3) {
                    parent.submit();
                  }
                });
              }
            });
          }
        }
      });
      // left side buttom
      leftSideButton.addEventListener("click", () => {
        const isNext = leftSideButton.dataset.type === "next";
        const isPrev = leftSideButton.dataset.type === "prev";

        const notLastSlideNow = currentSlide !== atAllSlides;
        const notLessThanOne = currentSlide !== 1;

        if (isNext && notLastSlideNow) {
          if (currentSlide === 1) {
            slides.forEach((slide, index) => {
              if (currentSlide === 1 && index + 1 === 1) {
                const inputs = slide.querySelectorAll("input");
                inputs.forEach((input) => {
                  if (input.checked) {
                    currentTransformPosition -= parentWidth;
                    slidesWrapper.style.transform = `translateX(${currentTransformPosition}px)`;
                    // set current slide
                    currentSlide++;
                    currentStage.innerText = currentSlide;
                  }
                });
              }
            });
          }
          // currentTransformPosition -= parentWidth;
          // slidesWrapper.style.transform = `translateX(${currentTransformPosition}px)`;
          // // set current slide
          // currentSlide++;
          // currentStage.innerText = currentSlide;
        }

        if (isPrev && notLessThanOne) {
          currentTransformPosition += parentWidth;
          slidesWrapper.style.transform = `translateX(${currentTransformPosition}px)`;
          // set current slide
          currentSlide--;
          currentStage.innerText = currentSlide;
        }

        if (currentSlide > 1) {
          leftSideButton.dataset.type = "prev";
          // add active type to right button
          rightSideButton.dataset.type = "active";
          //
          rightSideButton.classList.remove(
            "quizComponentControlsRightButton--notActive"
          );
          //
          leftSideButton.classList.add("quizComponentControlsLeftButton--prev");
          leftSideButtonSvg.classList.add(
            "quizComponentControlsLeftButtonImage--prev"
          );
          //
          leftSideButton.style.fontSize = 0;
        }

        if (currentSlide === 1) {
          leftSideButton.style.fontSize = `${currentLeftButtonFontSize}`;
          //
          leftSideButton.dataset.type = "next";
          // reset active data type from right button
          rightSideButton.dataset.type = "";
          rightSideButton.classList.add(
            "quizComponentControlsRightButton--notActive"
          );
          //
          leftSideButtonSvg.classList.remove(
            "quizComponentControlsLeftButtonImage--prev"
          );
          leftSideButton.classList.remove(
            "quizComponentControlsLeftButton--prev"
          );
        }

        if (currentSlide < atAllSlides) {
          rightSideButton.textContent = "Далее";
        }
      });
    } catch (error) {}
  });
} catch (error) {}


/***/ }),

/***/ 954:
/***/ (function() {

try {
  const itemsForAnimation = document.querySelectorAll(
    ".statistics__itemNumber"
  );

  itemsForAnimation.forEach((itemForAnimation) => {
    itemForAnimation.addEventListener(
      "animationStarted",
      () => {
        animateNumbers(itemForAnimation);
      },
      {
        once: true,
      }
    );
  });

  window.addEventListener("scroll", () => {
    const animationStarted = new Event("animationStarted");

    const itemsForAnimation = document.querySelectorAll(
      ".statistics__itemNumber.animated"
    );

    if (itemsForAnimation) {
      itemsForAnimation.forEach((itemForAnimation) => {
        itemForAnimation.dispatchEvent(animationStarted);
      });
    }
  });

  function animateNumbers(itemForAnimation) {
    const animeationDuration = 4;
    let counter = 1;
    // if dataset present
    if (itemForAnimation.dataset.neededAmount) {
      // how many numbers need to change
      const neededAmount = itemForAnimation.dataset.neededAmount;
      // step of time for interval
      const timeStep = (1000 * animeationDuration) / neededAmount;
      // change numbers
      const animate = setInterval(() => {
        if (counter <= neededAmount) {
          // continue
          if (itemForAnimation.dataset.withSign === undefined) {
            itemForAnimation.textContent = counter;
          } else {
            itemForAnimation.textContent = `${
              counter + itemForAnimation.dataset.withSign
            }`;
          }
        } else {
          // stop
          clearInterval(animate);
        }

        counter++;
      }, timeStep);
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect();

    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
    };
  }
} catch (error) {}


/***/ }),

/***/ 718:
/***/ (function() {

try {
  document.addEventListener("DOMContentLoaded", () => {
    let aboutSection;
    let videoWrapper;
    let wrapperHeight;

    try {
      aboutSection = document.querySelector(".about-studio");
      videoWrapper = document.querySelector(
        ".intro__videoBlockVideoWrapper-studio"
      );
      wrapperHeight = videoWrapper.getBoundingClientRect().height;
    } catch (error) {}

    if (window.innerWidth > 800) {
      try {
        aboutSection.style.marginTop = `${wrapperHeight / 2}px`;
      } catch (error) {}
    } else {
      try {
        aboutSection.style.marginTop = `${0}px`;
      } catch (error) {}
    }
  });

  window.addEventListener("resize", () => {
    try {
      aboutSection = document.querySelector(".about");
      videoWrapper = document.querySelector(
        ".intro__videoBlockVideoWrapper-studio"
      );
      wrapperHeight = videoWrapper.getBoundingClientRect().height;
    } catch (error) {}

    if (window.innerWidth > 800) {
      try {
        aboutSection.style.marginTop = `${wrapperHeight / 2}px`;
      } catch (error) {}
    } else {
      try {
        aboutSection.style.marginTop = `${0}px`;
      } catch (error) {}
    }
  });
} catch (error) {}


/***/ }),

/***/ 314:
/***/ (function() {

try {
  window.addEventListener("load", function () {
    const allButtons = document.querySelectorAll(".fillingButton");

    allButtons.forEach((button) => {
      // get span
      const buttonSpan = button.querySelector("span");
      const buttonSpanWidth = buttonSpan.getBoundingClientRect().width;
      // get content block
      const buttonContent = button.querySelector(".fillingButton__content");

      if (
        buttonSpan &&
        buttonSpan.classList.contains("fillingButton__span--smallMargin")
      ) {
        if (buttonContent) {
          buttonContent.style.marginLeft = `-${buttonSpanWidth / 2}px`;
          buttonSpan.style.marginRight = `${6}px`;
        }
      } else if (
        buttonSpan &&
        buttonSpan.classList.contains(
          "fillingButton__span--smallMargin-and-partial"
        )
      ) {
        if (buttonContent) {
          buttonContent.style.marginLeft = `-${buttonSpanWidth}px`;
        }
      } else if (
        buttonSpan &&
        !buttonSpan.closest(".fillingButton__content--big")
      ) {
        if (buttonContent) {
          buttonContent.style.marginLeft = `-${buttonSpanWidth + 3}px`;
          buttonSpan.style.marginRight = `${6}px`;
        }
      }
    });
  });
} catch (error) {}


/***/ }),

/***/ 575:
/***/ (function() {

try {
  const animationItems = document.querySelectorAll(".animationItem");

  document.addEventListener("DOMContentLoaded", () => {
    animationOnScroll();
  });

  window.addEventListener("scroll", () => {
    animationOnScroll(".animationItem");
  });

  function animationOnScroll(itemsSelectorForAnimation) {
    try {
      const animationItems = document.querySelectorAll(
        itemsSelectorForAnimation
      );

      animationItems.forEach((animationItem) => {
        // item height
        const animationItemHeight = animationItem.offsetHeight;
        // item distanse to top
        const animationItemTop = offset(animationItem).top;
        //
        const animationStart = 11;
        // window height
        const windowHeight = window.innerHeight;
        // when start animation
        let animationPoint =
          windowHeight - animationItemHeight / animationStart;

        // when start animation if item height grater than window height
        if (animationItemHeight > windowHeight) {
          animationPoint = windowHeight - windowHeight / animationStart;
        }

        if (
          pageYOffset > animationItemTop - animationPoint &&
          pageYOffset < animationItemTop + animationItemHeight
        ) {
          animationItem.classList.add("animated");
        } else {
          if (!animationItem.classList.contains("animationNoRepeat")) {
            animationItem.classList.remove("animated");
          }
        }
      });
    } catch (error) {
      console.log(`ERROR in animationOnScroll function ${error}`);
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect();

    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
    };
  }
} catch (error) {}


/***/ }),

/***/ 857:
/***/ (function() {

try {
  const buttonForCallQuiz = document.querySelector(".buttonTriggerForQuiz");

  buttonForCallQuiz.addEventListener("click", () => {});
} catch (e) {}


/***/ }),

/***/ 802:
/***/ (function() {

try {
  const body = document.querySelector("body");
  const loaderBg = document.querySelector(".loader");
  const loaderFirst = document.querySelector(".loader-first");
  const loaderSecond = document.querySelector(".loader-second");

  window.addEventListener("load", () => {
    if (window.innerWidth <= 1024) {
      body.classList.remove("hidden");
    }

    loaderBg.classList.add("loader--hide");
    loaderFirst.classList.add("loader-first--active");
    loaderSecond.classList.add("loader-second--active");

    loaderBg.addEventListener(
      "animationstart",
      () => {
        setTimeout(() => {
          loaderBg.classList.add("loader--none");
        }, 1100);
      },
      {
        once: true,
        useCapture: false,
      }
    );
  });
} catch (error) {}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./source/js/utils/preloader.js
var preloader = __webpack_require__(802);
// EXTERNAL MODULE: ./source/js/burgerMenu/burgerMenu.js
var burgerMenu = __webpack_require__(88);
;// CONCATENATED MODULE: ./source/js/utils/addInteractivityToButton.js
function addInteractivityToButton(
  parentSelector,
  circleSvgSelector,
  circleSelector,
  left,
  top,
  additionalLeft,
  additionalTop,
  addArrow,
  typeOfDecorativeImageOrSrc = null,
  withTextInversion,
  [...decorativeImageSizes] = [],
  mode,
  addedSelectors
) {
  // mode present ?
  const isMode = mode;
  // type of modes
  const modes = {
    // modeType:
    //   mode === 'bigWhite' ? "big" : null
    //   || mode === 'bigBlack' ? "big" : null,
    bigWhiteFirst: "bigWhiteFirst",
    // bigBlackFirst: 'bigBlackFirst',
  };
  // type of images
  const imagesTypes = {
    blackArrow: "blackArrow",
    whiteArrow: "whiteArrow",
  };

  let matrixFrom;
  let matrixTo;
  let matrixValue = 0;

  let parent, circleSvg, circle;

  if (addedSelectors !== true) {
    // get paren block
    parent = document.querySelector(parentSelector);
    // get circle svg for :hover interactions
    circleSvg = document.querySelector(circleSvgSelector);
    // get circle for add coordinates to fill-circle  interactions
    circle = document.querySelector(circleSelector);
  } else {
    // get paren block
    parent = parentSelector;
    // get circle svg for :hover interactions
    circleSvg = circleSvgSelector;
    // get circle for add coordinates to fill-circle  interactions
    circle = circleSelector;
  }

  // create coordinates for circle
  let x;
  let y;
  // get coordinates to do margin from left
  // depend on position of whole button block (parent)
  // by given number
  switch (left) {
    case 0:
      x = (event, addedLeft) => event.pageX + addedLeft;
      break;
    case 1:
      x = (event, addedLeft) => event.pageX - parent.offsetLeft + addedLeft;
      break;
    case 2:
      x = (event, addedLeft) =>
        event.pageX -
        parent.offsetLeft -
        parent.offsetParent.offsetLeft +
        addedLeft;
      break;
    case 3:
      x = (event, addedLeft) =>
        event.pageX -
        parent.offsetLeft -
        parent.offsetParent.offsetLeft -
        parent.offsetParent.offsetParent.offsetLeft +
        addedLeft;
      break;
    case "servicesPage-infoSection":
      x = (event, addedLeft) => event.pageX - parent.offsetLeft - w;
      parent.offsetParent.offsetLeft -
        parent.offsetParent.offsetParent.offsetLeft -
        parent.offsetParent.offsetParent.offsetParent.offsetLeft +
        addedLeft;
      break;
  }
  // get coordinates to do margin from top
  // depend on position of whole button block (parent)
  // by given number
  switch (top) {
    case 0:
      y = (event, addedTop) => event.pageY + addedTop + matrixValue;
      break;
    case 1:
      y = (event, addedTop) =>
        event.pageY - parent.offsetTop + addedTop + matrixValue;
      break;
    case 2:
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetTop +
        matrixValue +
        addedTop;
      break;
    case 22:
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetParent.offsetTop +
        matrixValue +
        addedTop;
      break;
    case 3:
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetTop -
        parent.offsetParent.offsetParent.offsetTop +
        matrixValue +
        addedTop;
      break;
    case 33:
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetTop -
        parent.offsetParent.offsetParent.offsetTop -
        window.scrollY +
        matrixValue +
        addedTop;
      break;
    case 4:
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetTop -
        parent.offsetParent.offsetParent.offsetTop -
        parent.offsetParent.offsetParent.offsetParent.offsetTop +
        matrixValue +
        addedTop;
      break;
    case "servicesPage-infoSection":
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetParent.offsetParent.offsetTop -
        parent.offsetParent.offsetParent.offsetParent.offsetParent.offsetTop +
        matrixValue +
        addedTop;
      break;
  }
  // get span for color inversion
  let buttonContentBlockSpan;

  if (withTextInversion) {
    buttonContentBlockSpan = parent.querySelector(
      ".fillingButton__content span"
    );
  }
  // for images
  let blackImage;
  let whiteImage;

  if (mode === modes.bigWhiteFirst) {
    let width;
    let height;

    if (decorativeImageSizes.length !== 0) {
      [width, height] = [...decorativeImageSizes];
      // create black
      blackImage = new Image(width, height);
      let tagWithSrcBlack = parent.querySelector(
        ".fillingButton__imageSrcInDataTagBlack"
      );
      blackImage.src = tagWithSrcBlack.dataset.src;
      // create white
      whiteImage = new Image(width, height);
      let tagWithSrcWhite = parent.querySelector(
        ".fillingButton__imageSrcInDataTagWhite"
      );
      whiteImage.src = tagWithSrcWhite.dataset.src;
    } else {
      // create black
      blackImage = new Image(20, 20);
      let tagWithSrcBlack = parent.querySelector(
        ".fillingButton__imageSrcInDataTagBlack"
      );
      blackImage.src = tagWithSrcBlack.dataset.src;
      // create white
      whiteImage = new Image(20, 20);
      let tagWithSrcWhite = parent.querySelector(
        ".fillingButton__imageSrcInDataTagWhite"
      );
      whiteImage.src = tagWithSrcWhite.dataset.src;
    }
    // big mode and white first
    if (mode === modes.bigWhiteFirst) {
      bigWhiteFirstInitialization(whiteImage, blackImage);
    }
    // +++++++++++++++++++
    // big mode and black first
    // if (mode === modes.bigBlackFirst) {
    //   bigBlackFirstInitialization(whiteImage, blackImage)
    // }
    // +++++++++++++++++++
    // add styles
    whiteImage.classList.add(
      "fillingButton__image--big",
      "fillingButton__image"
    );
    blackImage.classList.add(
      "fillingButton__image--big",
      "fillingButton__image"
    );
    // add styles to p tag
    const buttonSpanParent = parent.querySelector(".fillingButton__p");
    buttonSpanParent.classList.add("fillingButton__p--big");
    // get images parent block
    const buttonImagesBlock = parent.querySelector(
      ".fillingButton__imagesWrapper"
    );
    if (width && height) {
      buttonImagesBlock.style.width = `${width}px`;
      buttonImagesBlock.style.height = `${height}px`;
    } else {
      buttonImagesBlock.style.width = `20px`;
      buttonImagesBlock.style.height = `20px`;
    }
    // append images
    buttonImagesBlock.appendChild(blackImage);
    buttonImagesBlock.appendChild(whiteImage);
  }

  if (typeOfDecorativeImageOrSrc === true) {
    // create image
    let decorativeImage;
    // create white arrow
    // if (typeOfDecorativeImageOrSrc === imagesTypes.whiteArrow) {
    //   decorativeImage = new Image(15, 15);
    //   decorativeImage.src =
    //     tagWithSrcWhite.dataset.src;
    // }
    if (typeOfDecorativeImageOrSrc === true) {
      decorativeImage = new Image(15, 15);
      let tagWithSrc = parent.querySelector(
        ".fillingButton__imageSrcInDataTag"
      );
      decorativeImage.src = tagWithSrc.dataset.src;
    }
    // // create black arrow
    // if (typeOfDecorativeImageOrSrc === imagesTypes.blackArrow) {
    //   decorativeImage = new Image(15, 15);
    //   decorativeImage.src =
    //     tagWithSrcBlack.dataset.src;
    // }
    // if (
    //   typeOfDecorativeImageOrSrc !== imagesTypes.blackArrow &&
    //   typeOfDecorativeImageOrSrc !== imagesTypes.whiteArrow &&
    //   typeOfDecorativeImageOrSrc !== null
    // ) {
    //   // destructure custom sizes
    //   const [width, height] = [...decorativeImageSizes];

    //   decorativeImage = new Image(width, height);
    //   decorativeImage.src = typeOfDecorativeImageOrSrc;
    // }
    // add custom class for created image with correct sizes
    decorativeImage.classList.add("fillingButton__image");
    // append created image
    const buttonContentBlock = parent.querySelector(".fillingButton__content");
    buttonContentBlock.appendChild(decorativeImage);
  }
  // add listeners
  circleSvg.addEventListener("mousemove", (event) => {
    matrixFrom = +getComputedStyle(
      document.querySelector("main")
    ).transform.lastIndexOf("-");
    matrixTo = +getComputedStyle(
      document.querySelector("main")
    ).transform.lastIndexOf(")");
    matrixValue = Math.abs(
      +getComputedStyle(document.querySelector("main")).transform.slice(
        matrixFrom,
        matrixTo
      )
    );

    // big mode white first
    if (mode === modes.bigWhiteFirst) {
      bigWhiteFirstInversion(whiteImage, blackImage);
    }
    // // big mode black first
    // if (mode === modes.bigBlackFirst) {
    //   bigBlackFirstInversion(whiteImage, blackImage)
    // }
    // add coordinates to circle for it's ::before pseudo-element
    circle.style.setProperty("--x", `${x(event, additionalLeft)}px`);
    circle.style.setProperty("--y", `${y(event, additionalTop)}px`);
    // add class for give size to filling
    circle.classList.add("fillingButton__circle--active");
    // add for color inversion class (if needed)
    if (withTextInversion) {
      buttonContentBlockSpan.classList.add("fillingButton__p--black");
    }
  });
  // remove class for reset size to filling
  circleSvg.addEventListener("mouseleave", () => {
    // big mode white first
    if (mode === modes.bigWhiteFirst) {
      bigWhiteFirstReversion(whiteImage, blackImage);
    }
    // // big mode black first
    // if (mode === modes.bigBlackFirst) {
    //   bigBlackFirstReversion(whiteImage, blackImage)
    // }
    circle.classList.remove("fillingButton__circle--active");
    // remove for color inversion class (if needed)
    if (withTextInversion) {
      buttonContentBlockSpan.classList.remove("fillingButton__p--black");
    }
  });
}

// big white first utils
function bigWhiteFirstInitialization(white, black) {
  white.classList.add("fillingButton__image--white-visible");
  black.classList.add("fillingButton__image--black-hidden");
}
function bigWhiteFirstInversion(white, black) {
  white.classList.remove("fillingButton__image--white-visible");
  black.classList.remove("fillingButton__image--black-hidden");
  // colors inversions
  white.classList.add("fillingButton__image--white-hidden");
  black.classList.add("fillingButton__image--black-visible");
}
function bigWhiteFirstReversion(white, black) {
  white.classList.remove("fillingButton__image--white-hidden");
  black.classList.remove("fillingButton__image--black-visible");
  // colors inversions
  white.classList.add("fillingButton__image--white-visible");
  black.classList.add("fillingButton__image--black-hidden");
}
// // big black first utils
// function bigBlackFirstInitialization(white, black) {
//   white.classList.add('fillingButton__image--white-hidden')
//   black.classList.add('fillingButton__image--black-visible')
// }
// function bigBlackFirstInversion(white, black) {
//   white.classList.remove('fillingButton__image--white-hidden')
//   black.classList.remove('fillingButton__image--black-visible')
//   // colors inversions
//   white.classList.add('fillingButton__image--white-visible')
//   black.classList.add('fillingButton__image--black-hidden')
// }
// function bigBlackFirstReversion(white, black) {
//   white.classList.remove('fillingButton__image--white-visible')
//   black.classList.remove('fillingButton__image--black-hidden')
//   // colors inversions
//   white.classList.add('fillingButton__image--white-hidden')
//   black.classList.add('fillingButton__image--black-visible')
// }

;// CONCATENATED MODULE: ./source/js/burgerMenu/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  let isServicesPage;

  try {
    isServicesPage = document.querySelector(
      ".fillingButton--burgerMenuAddresses--services"
    );
  } catch (error) {}

  if (isServicesPage) {
    try {
      addInteractivityToButton(
        ".fillingButton--burgerMenuAddresses",
        ".fillingButton__svg-circle--burgerMenuAddresses",
        ".fillingButton__circle--burgerMenuAddresses",
        2,
        3,
        0,
        0,
        true,
        true,
        true
      );
    } catch (error) {}
  } else {
    try {
      addInteractivityToButton(
        ".fillingButton--burgerMenuAddresses",
        ".fillingButton__svg-circle--burgerMenuAddresses",
        ".fillingButton__circle--burgerMenuAddresses",
        1,
        1,
        0,
        0,
        true,
        true,
        true
      );
    } catch (error) {}
  }
});

// EXTERNAL MODULE: ./source/js/header/text.js
var header_text = __webpack_require__(370);
// EXTERNAL MODULE: ./source/js/header/animationWithScroll.js
var animationWithScroll = __webpack_require__(253);
// EXTERNAL MODULE: ./source/js/attraction/stagesSectionHeight.js
var stagesSectionHeight = __webpack_require__(246);
// EXTERNAL MODULE: ./source/js/attraction/answersAccordion.js
var answersAccordion = __webpack_require__(793);
;// CONCATENATED MODULE: ./source/js/attraction/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  try {
    // intro bottom
    addInteractivityToButton(
      ".fillingButton--introBottom",
      ".fillingButton__svg-circle--introBottom",
      ".fillingButton__circle--introBottom",
      3,
      3,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}
  try {
    // servicesTop
    addInteractivityToButton(
      ".fillingButton--servicesTop",
      ".fillingButton__svg-circle--servicesTop",
      ".fillingButton__circle--servicesTop",
      2,
      2,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}
  // try {
  //   // answersQuestions
  //   addInteractivityToButton(
  //     ".fillingButton--answersQuestions",
  //     ".fillingButton__svg-circle--answersQuestions",
  //     ".fillingButton__circle--answersQuestions",
  //     2,
  //     2,
  //     0,
  //     0,
  //     true,
  //     true,
  //   );
  // } catch (error) {}
  try {
    // introBottomOffer
    addInteractivityToButton(
      ".fillingButton--introBottomOffer",
      ".fillingButton__svg-circle--introBottomOffer",
      ".fillingButton__circle--introBottomOffer",
      3,
      4,
      0,
      0,
      true,
      true
    );
  } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    // intro bottom
    addInteractivityToButton(
      ".fillingButton--introBottom",
      ".fillingButton__svg-circle--introBottom",
      ".fillingButton__circle--introBottom",
      3,
      3,
      0,
      0,
      false
    );
  } catch (error) {}
  try {
    // servicesTop
    addInteractivityToButton(
      ".fillingButton--servicesTop",
      ".fillingButton__svg-circle--servicesTop",
      ".fillingButton__circle--servicesTop",
      2,
      2,
      0,
      0,
      false
    );
  } catch (error) {}
  // try {
  //   // answersQuestions
  //   addInteractivityToButton(
  //     ".fillingButton--answersQuestions",
  //     ".fillingButton__svg-circle--answersQuestions",
  //     ".fillingButton__circle--answersQuestions",
  //     2,
  //     2,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
  try {
    // introBottomOffer
    addInteractivityToButton(
      ".fillingButton--introBottomOffer",
      ".fillingButton__svg-circle--introBottomOffer",
      ".fillingButton__circle--introBottomOffer",
      3,
      3,
      0,
      0,
      false
    );
  } catch (error) {}
});

// EXTERNAL MODULE: ./source/js/footer/checkbox.js
var footer_checkbox = __webpack_require__(957);
// EXTERNAL MODULE: ./source/js/footer/add-space-between-items.js
var add_space_between_items = __webpack_require__(497);
// EXTERNAL MODULE: ./source/js/footer/changeFooterColumnsOrder.js
var changeFooterColumnsOrder = __webpack_require__(951);
// EXTERNAL MODULE: ./source/js/utils/allignButtonsSpan.js
var allignButtonsSpan = __webpack_require__(314);
// EXTERNAL MODULE: ./source/js/attraction/splide.js
var splide = __webpack_require__(302);
// EXTERNAL MODULE: ./source/js/serviceDetail/splide-arrows-embed.js
var splide_arrows_embed = __webpack_require__(721);
// EXTERNAL MODULE: ./source/js/attraction/splide-arrows-align.js
var splide_arrows_align = __webpack_require__(207);
// EXTERNAL MODULE: ./source/js/404/cirlce-with-lines.js
var cirlce_with_lines = __webpack_require__(316);
// EXTERNAL MODULE: ./source/js/404/decoration-lines.js
var decoration_lines = __webpack_require__(963);
;// CONCATENATED MODULE: ./source/js/404/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--404",
      ".fillingButton__svg-circle--404",
      ".fillingButton__circle--404",
      2,
      22,
      0,
      0,
      true,
      true,
      false
    );
  } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--404",
      ".fillingButton__svg-circle--404",
      ".fillingButton__circle--404",
      2,
      22,
      0,
      0,
      false
    );
  } catch (error) {}
});

;// CONCATENATED MODULE: ./source/js/blog-once-page/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--blog-once-page",
      ".fillingButton__svg-circle--blog-once-page",
      ".fillingButton__circle--blog-once-page",
      2,
      22,
      0,
      0,
      true,
      true,
      false
    );
  } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--blog-once-page",
      ".fillingButton__svg-circle--blog-once-page",
      ".fillingButton__circle--blog-once-page",
      2,
      22,
      0,
      0,
      false
    );
  } catch (error) {}
});

// EXTERNAL MODULE: ./source/js/blog-once-page/splide.js
var blog_once_page_splide = __webpack_require__(911);
// EXTERNAL MODULE: ./source/js/blog-once-page/splide-arrows.js
var splide_arrows = __webpack_require__(224);
;// CONCATENATED MODULE: ./source/js/brief/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--brief-intro",
      ".fillingButton__svg-circle--brief-intro",
      ".fillingButton__circle--brief-intro",
      2,
      22,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}
  try {
    addInteractivityToButton(
      ".fillingButton--brief-bottom",
      ".fillingButton__svg-circle--brief-bottom",
      ".fillingButton__circle--brief-bottom",
      2,
      2,
      0,
      0,
      false,
      null,
      true,
      [20, 20],
      "bigWhiteFirst"
    );
  } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--brief-intro",
      ".fillingButton__svg-circle--brief-intro",
      ".fillingButton__circle--brief-intro",
      2,
      22,
      0,
      0,
      false
    );
  } catch (error) {}
});

// EXTERNAL MODULE: ./source/js/brief/checkboxes.js
var checkboxes = __webpack_require__(772);
// EXTERNAL MODULE: ./source/js/contacts/yandex-map.js
var yandex_map = __webpack_require__(915);
;// CONCATENATED MODULE: ./source/js/contacts/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--contacts",
      ".fillingButton__svg-circle--contacts",
      ".fillingButton__circle--contacts",
      2,
      22,
      0,
      0,
      true,
      true,
      false
    );
  } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--contacts",
      ".fillingButton__svg-circle--contacts",
      ".fillingButton__circle--contacts",
      2,
      22,
      0,
      0,
      false
    );
  } catch (error) {}
});

// EXTERNAL MODULE: ./source/js/index/intro/splideItems.js
var splideItems = __webpack_require__(255);
// EXTERNAL MODULE: ./source/js/index/intro/splideMain.js
var splideMain = __webpack_require__(163);
;// CONCATENATED MODULE: ./source/js/index/intro/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 1070 || window.innerWidth >= 1070) {
    try {
      // costsItem
      const costsItems = document.querySelectorAll(".intro__content-index");
      costsItems.forEach((item) => {
        const one = item.querySelector(".fillingButton--intro-index");
        const two = item.querySelector(
          ".fillingButton__svg-circle--intro-index"
        );
        const three = item.querySelector(".fillingButton__circle--intro-index");

        addInteractivityToButton(
          one,
          two,
          three,
          3,
          2,
          0,
          -65,
          true,
          true,
          true,
          [],
          null,
          true
        );
      });
    } catch (error) {}
  } else if (window.innerWidth <= 620) {
    try {
      // costsItem
      const costsItems = document.querySelectorAll(".intro__content-index");
      costsItems.forEach((item) => {
        const one = item.querySelector(".fillingButton--intro-index");
        const two = item.querySelector(
          ".fillingButton__svg-circle--intro-index"
        );
        const three = item.querySelector(".fillingButton__circle--intro-index");

        addInteractivityToButton(
          one,
          two,
          three,
          3,
          2,
          0,
          -10,
          true,
          true,
          true,
          [],
          null,
          true
        );
      });
    } catch (error) {}
  } else if (window.innerWidth <= 380) {
    try {
      // costsItem
      const costsItems = document.querySelectorAll(".intro__content-index");
      costsItems.forEach((item) => {
        const one = item.querySelector(".fillingButton--intro-index");
        const two = item.querySelector(
          ".fillingButton__svg-circle--intro-index"
        );
        const three = item.querySelector(".fillingButton__circle--intro-index");

        addInteractivityToButton(
          one,
          two,
          three,
          3,
          2,
          0,
          -50,
          true,
          true,
          true,
          [],
          null,
          true
        );
      });
    } catch (error) {}
  }
});

// window.addEventListener("resize", () => {
//   if (window.innerWidth > 1070) {
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-1",
//         ".fillingButton__svg-circle--intro-1",
//         ".fillingButton__circle--intro-1",
//         2,
//         1,
//         0,
//         -65,
//         false
//       );
//     } catch (error) {}
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-2",
//         ".fillingButton__svg-circle--intro-2",
//         ".fillingButton__circle--intro-2",
//         2,
//         1,
//         0,
//         -65,
//         false
//       );
//     } catch (error) {}
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-3",
//         ".fillingButton__svg-circle--intro-3",
//         ".fillingButton__circle--intro-3",
//         2,
//         1,
//         0,
//         -65,
//         false
//       );
//     } catch (error) {}
//   }

//   if (window.innerWidth <= 1070) {
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-1",
//         ".fillingButton__svg-circle--intro-1",
//         ".fillingButton__circle--intro-1",
//         1,
//         1,
//         0,
//         -65,
//         false
//       );
//     } catch (error) {}
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-2",
//         ".fillingButton__svg-circle--intro-2",
//         ".fillingButton__circle--intro-2",
//         1,
//         1,
//         0,
//         -65,
//         false
//       );
//     } catch (error) {}
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-3",
//         ".fillingButton__svg-circle--intro-3",
//         ".fillingButton__circle--intro-3",
//         1,
//         1,
//         0,
//         -65,
//         false
//       );
//     } catch (error) {}
//   }

//   if (window.innerWidth <= 620) {
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-1",
//         ".fillingButton__svg-circle--intro-1",
//         ".fillingButton__circle--intro-1",
//         1,
//         1,
//         0,
//         -10,
//         false
//       );
//     } catch (error) {}
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-2",
//         ".fillingButton__svg-circle--intro-2",
//         ".fillingButton__circle--intro-2",
//         1,
//         1,
//         0,
//         -10,
//         false
//       );
//     } catch (error) {}
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-3",
//         ".fillingButton__svg-circle--intro-3",
//         ".fillingButton__circle--intro-3",
//         1,
//         1,
//         0,
//         -10,
//         false
//       );
//     } catch (error) {}
//   }

//   if (window.innerWidth <= 380) {
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-1",
//         ".fillingButton__svg-circle--intro-1",
//         ".fillingButton__circle--intro-1",
//         1,
//         1,
//         0,
//         -50,
//         false
//       );
//     } catch (error) {}
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-2",
//         ".fillingButton__svg-circle--intro-2",
//         ".fillingButton__circle--intro-2",
//         1,
//         1,
//         0,
//         -50,
//         false
//       );
//     } catch (error) {}
//     try {
//       addInteractivityToButton(
//         ".fillingButton--intro-3",
//         ".fillingButton__svg-circle--intro-3",
//         ".fillingButton__circle--intro-3",
//         1,
//         1,
//         0,
//         -50,
//         false
//       );
//     } catch (error) {}
//   }
// });

// EXTERNAL MODULE: ./source/js/index/intro/alignSliderPaginationsBullets.js
var alignSliderPaginationsBullets = __webpack_require__(676);
// EXTERNAL MODULE: ./source/js/index/intro/arrowForScrollToNextSection.js
var arrowForScrollToNextSection = __webpack_require__(355);
// EXTERNAL MODULE: ./source/js/index/about-us/decoration-image.js
var decoration_image = __webpack_require__(737);
// EXTERNAL MODULE: ./source/js/index/about-us/running-line.js
var running_line = __webpack_require__(542);
;// CONCATENATED MODULE: ./source/js/index/about-us/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--about-us",
      ".fillingButton__svg-circle--about-us",
      ".fillingButton__circle--about-us",
      2,
      22,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--about-us",
      ".fillingButton__svg-circle--about-us",
      ".fillingButton__circle--about-us",
      2,
      22,
      0,
      0,
      false
    );
  } catch (error) {}
});

// EXTERNAL MODULE: ./source/js/index/services/spanBg.js
var spanBg = __webpack_require__(5);
;// CONCATENATED MODULE: ./source/js/index/services/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  // try {
  //   addInteractivityToButton(
  //     ".fillingButton--services-item-1",
  //     ".fillingButton__svg-circle--services-item-1",
  //     ".fillingButton__circle--services-item-1",
  //     2,
  //     3,
  //     0,
  //     0,
  //     true,
  //     "whiteArrow",
  //     true
  //   );
  // } catch (error) {}
  try {
    // costsItem
    const costsItems = document.querySelectorAll(".servisec-list__item-index");
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--services-item");
      const two = item.querySelector(
        ".fillingButton__svg-circle--services-item"
      );
      const three = item.querySelector(".fillingButton__circle--services-item");

      addInteractivityToButton(
        one,
        two,
        three,
        2,
        3,
        0,
        0,
        true,
        true,
        true,
        [],
        null,
        true
      );
    });
  } catch (error) {}
});

;// CONCATENATED MODULE: ./source/js/index/products/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--products",
      ".fillingButton__svg-circle--products",
      ".fillingButton__circle--products",
      2,
      4,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--products",
      ".fillingButton__svg-circle--products",
      ".fillingButton__circle--products",
      2,
      2,
      0,
      0,
      false
    );
  } catch (error) {}
});

// EXTERNAL MODULE: ./source/js/index/reviews/decoration-image.js
var reviews_decoration_image = __webpack_require__(453);
// EXTERNAL MODULE: ./source/js/index/reviews/splide.js
var reviews_splide = __webpack_require__(280);
// EXTERNAL MODULE: ./source/js/index/reviews/splide-arrows-align.js
var reviews_splide_arrows_align = __webpack_require__(159);
// EXTERNAL MODULE: ./source/js/index/reviews/splide-arrows-embed.js
var reviews_splide_arrows_embed = __webpack_require__(556);
;// CONCATENATED MODULE: ./source/js/index/blog/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--blog-top",
      ".fillingButton__svg-circle--blog-top",
      ".fillingButton__circle--blog-top",
      2,
      2,
      0,
      0,
      true,
      true,
      false
    );
  } catch (error) {}
  try {
    addInteractivityToButton(
      ".fillingButton--blog-telegram",
      ".fillingButton__svg-circle--blog-telegram",
      ".fillingButton__circle--blog-telegram",
      2,
      2,
      0,
      0,
      true,
      true,
      false,
      [31, 25]
    );
  } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--blog-top",
      ".fillingButton__svg-circle--blog-top",
      ".fillingButton__circle--blog-top",
      2,
      2,
      0,
      0,
      false
    );
  } catch (error) {}
  try {
    addInteractivityToButton(
      ".fillingButton--blog-telegram",
      ".fillingButton__svg-circle--blog-telegram",
      ".fillingButton__circle--blog-telegram",
      2,
      2,
      0,
      0,
      false
    );
  } catch (error) {}
});

// EXTERNAL MODULE: ./source/js/index/blog/lines.js
var lines = __webpack_require__(18);
// EXTERNAL MODULE: ./source/js/utils/animationOnScroll.js
var animationOnScroll = __webpack_require__(575);
;// CONCATENATED MODULE: ./source/js/utils/browserDetect.js
const BrowserDetect = {
  init: function () {
    this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
    this.version =
      this.searchVersion(navigator.userAgent) ||
      this.searchVersion(navigator.appVersion) ||
      "an unknown version";
    this.OS = this.searchString(this.dataOS) || "an unknown OS";
  },
  searchString: function (data) {
    for (var i = 0; i < data.length; i++) {
      var dataString = data[i].string;
      var dataProp = data[i].prop;
      this.versionSearchString = data[i].versionSearch || data[i].identity;
      if (dataString) {
        if (dataString.indexOf(data[i].subString) != -1)
          return data[i].identity;
      } else if (dataProp) return data[i].identity;
    }
  },
  searchVersion: function (dataString) {
    var index = dataString.indexOf(this.versionSearchString);
    if (index == -1) return;
    return parseFloat(
      dataString.substring(index + this.versionSearchString.length + 1)
    );
  },
  dataBrowser: [
    {
      string: navigator.userAgent,
      subString: "Chrome",
      identity: "Chrome",
    },
    {
      string: navigator.userAgent,
      subString: "OmniWeb",
      versionSearch: "OmniWeb/",
      identity: "OmniWeb",
    },
    {
      string: navigator.vendor,
      subString: "Apple",
      identity: "Safari",
      versionSearch: "Version",
    },
    {
      prop: window.opera,
      identity: "Opera",
      versionSearch: "Version",
    },
    {
      string: navigator.vendor,
      subString: "iCab",
      identity: "iCab",
    },
    {
      string: navigator.vendor,
      subString: "KDE",
      identity: "Konqueror",
    },
    {
      string: navigator.userAgent,
      subString: "Firefox",
      identity: "Firefox",
    },
    {
      string: navigator.vendor,
      subString: "Camino",
      identity: "Camino",
    },
    {
      /* For Newer Netscapes (6+) */
      string: navigator.userAgent,
      subString: "Netscape",
      identity: "Netscape",
    },
    {
      string: navigator.userAgent,
      subString: "MSIE",
      identity: "Internet Explorer",
      versionSearch: "MSIE",
    },
    {
      string: navigator.userAgent,
      subString: "Gecko",
      identity: "Mozilla",
      versionSearch: "rv",
    },
    {
      /* For Older Netscapes (4-) */
      string: navigator.userAgent,
      subString: "Mozilla",
      identity: "Netscape",
      versionSearch: "Mozilla",
    },
  ],
  dataOS: [
    {
      string: navigator.platform,
      subString: "Win",
      identity: "Windows",
    },
    {
      string: navigator.platform,
      subString: "Mac",
      identity: "Mac",
    },
    {
      string: navigator.userAgent,
      subString: "iPhone",
      identity: "iPhone/iPod",
    },
    {
      string: navigator.platform,
      subString: "Linux",
      identity: "Linux",
    },
  ],
};

;// CONCATENATED MODULE: ./source/js/locomotive/locomotiveMain.js

try {
  BrowserDetect.init();

  let scroll;
  let scrollTop;

  let whiteArrayTopOffsets = [];
  let blackArrayTopOffsets = [];

  let blackSections;
  let whiteSections;

  // window.onresize = () => {
  //   const footer = document.querySelector(".footer");
  //   if (window.innerWidth >= 1700) {
  //     footer.classList.remove("whiteSection");
  //     footer.classList.remove("blackSection");
  //     footer.classList.add("whiteSection");
  //   } else {
  //     footer.classList.remove("whiteSection");
  //     footer.classList.remove("blackSection");
  //     footer.classList.add("blackSection");
  //   }
  // };

  window.onload = () => {
    const footer = document.querySelector(".footer");
    if (window.innerWidth >= 1700 && !footer.classList.contains("blackPage")) {
      footer.classList.add("whiteSection");
    } else {
      footer.classList.add("blackSection");
    }
    // +++++++++++++++
    try {
      blackSections = document.querySelectorAll(".blackSection");
      blackSections.forEach((blackSection) => {
        blackArrayTopOffsets.push(blackSection.offsetTop);
      });

      whiteSections = document.querySelectorAll(".whiteSection");
      whiteSections.forEach((whiteSection) => {
        whiteArrayTopOffsets.push(whiteSection.offsetTop);
      });
    } catch (error) {}
    // +++++++++++++++

    let mult;
    if (BrowserDetect.browser !== "Safari") {
      mult = 1;
    } else {
      mult = 2;
    }
    scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      multiplier: mult,
    });
    // brief croll to next section
    try {
      const toBottomArrowBrief = document.querySelector(
        ".fillingButton--brief-intro"
      );
      const formsTop = document.querySelector(".forms-brief");

      let headerHeight;
      if (window.innerWidth >= 1400) {
        headerHeight = -86;
      } else {
        headerHeight = -66;
      }

      if (toBottomArrowBrief) {
        toBottomArrowBrief.addEventListener("click", () => {
          scroll.scrollTo(formsTop, { offset: headerHeight });
        });
      }
    } catch (error) {}

    try {
      if (window.innerWidth >= 1115) {
        scroll.on("scroll", ({ limit, scroll }) => {
          let itemForSticky;
          let rightSideSection;
          let itemForStickyWrapper;
          let header;
          let initialWidth;
          let headerHeight;
          let rightSideSectionBottom;
          let itemForStickyWrapperTop;

          try {
            // sticky products once page
            itemForSticky = document.querySelector(".info__contentBottomLeft");
            rightSideSection = document.querySelector(
              ".info__contentBottomRight"
            );
            itemForStickyWrapper = document.querySelector(
              ".info__contentBottomLeftWrapper"
            );
            header = document.querySelector(".header--main");
            // get fixed width from width of sticky item
            initialWidth = itemForSticky.getBoundingClientRect().width;
            // set fixed width from width of sticky item
            itemForSticky.style.width = `${initialWidth}px`;
            itemForStickyWrapper.style.width = `${initialWidth}px`;
            // scroll from top in px
            scrollTop = scroll.y;
            // =====================
            // header height
            headerHeight = header.getBoundingClientRect().height;
            // right side section from top with height
            rightSideSectionBottom =
              rightSideSection.offsetTop +
              rightSideSection.offsetParent.offsetTop +
              rightSideSection.offsetParent.offsetParent.offsetTop +
              rightSideSection.getBoundingClientRect().height;
            // left side section from top with margin that is header height and addition
            itemForStickyWrapperTop =
              itemForStickyWrapper.offsetTop +
              itemForStickyWrapper.offsetParent.offsetTop +
              itemForStickyWrapper.offsetParent.offsetParent.offsetTop -
              headerHeight -
              50;
          } catch (error) {}
          //
          let counter = 0;
          // item's for sticky bottom side current postition from top
          let itemForStickyBottomSideInFixed;

          if (scrollTop >= itemForStickyWrapperTop) {
            // set sticky
            if (counter === 0) {
              itemForSticky.style.position = "fixed";
              itemForSticky.style.top = `${+scrollTop + headerHeight + 50}px`;
            }
            // item's for sticky bottom side current postition from top
            itemForStickyBottomSideInFixed =
              itemForSticky.offsetTop +
              itemForSticky.getBoundingClientRect().height;

            // set absolute to press itemForStick to bottom to allign with right side item's bottom side
            if (itemForStickyBottomSideInFixed >= rightSideSectionBottom) {
              itemForSticky.style.position = "unset";
              itemForSticky.style.top = `unset`;

              itemForStickyWrapper.style.display = "flex";
              itemForStickyWrapper.style.alignItems = "flex-end";

              counter++;
            }
          }
        });
      }
    } catch (error) {}
    // attraction sticky
    try {
      scroll.on("scroll", ({ limit, scroll }) => {
        if (window.innerWidth >= 1261) {
          let itemForSticky;
          let rightSideSection;
          let itemForStickyWrapper;
          let header;
          let initialWidth;
          let headerHeight;
          let rightSideSectionTop;
          let itemForStickyWrapperTop;

          try {
            itemForSticky = document.querySelector(
              ".solve__contentLeft-attraction"
            );
            rightSideSection = document.querySelector(
              ".solve__contentRight-attraction"
            );
            itemForStickyWrapper = document.querySelector(
              ".solve__contentLeftWrapper-attraction"
            );
            header = document.querySelector(".header--main");

            initialWidth = itemForSticky.getBoundingClientRect().width;
            itemForSticky.style.width = `${initialWidth}px`;
            itemForStickyWrapper.style.width = `${initialWidth}px`;

            scrollTop = scroll.y;

            // header height
            headerHeight = header.getBoundingClientRect().height;
            // how much was scrolled

            try {
              // right side section from top with height
              rightSideSectionTop =
                rightSideSection.offsetTop +
                rightSideSection.offsetParent.offsetTop +
                rightSideSection.getBoundingClientRect().height;

              // left side section from top with margin that is header height and addition
              itemForStickyWrapperTop =
                itemForStickyWrapper.offsetTop +
                itemForStickyWrapper.offsetParent.offsetTop -
                headerHeight -
                60;
            } catch (error) {}

            let counter = 0;
            // item's for sticky bottom side current postition from top
            let itemForStickyBottomSide;

            try {
              if (scrollTop >= itemForStickyWrapperTop) {
                itemForSticky.style.position = "unset";
              }

              if (scrollTop >= itemForStickyWrapperTop) {
                // set sticky
                if (counter === 0) {
                  itemForSticky.style.position = "fixed";
                  itemForSticky.style.top = `${
                    scrollTop + headerHeight + 60
                  }px`;
                }
                // item's for sticky bottom side current postition from top
                itemForStickyBottomSide =
                  itemForSticky.offsetTop +
                  itemForSticky.getBoundingClientRect().height;

                // set absolute to press itemForStick to bottom to allign with right side item's bottom side
                if (itemForStickyBottomSide >= rightSideSectionTop) {
                  itemForSticky.style.position = "unset";
                  itemForSticky.style.top = `unset`;

                  itemForStickyWrapper.style.display = "flex";
                  itemForStickyWrapper.style.alignItems = "flex-end";

                  counter++;
                }
              }
            } catch (error) {}
            try {
              if (itemForStickyBottomSide < rightSideSectionTop) {
                counter--;

                itemForSticky.style.position = "fixed";
                itemForSticky.style.top = `${scrollTop + headerHeight + 50}px`;
              }
            } catch (error) {}
          } catch (error) {}
        }
      });
    } catch (error) {}
    try {
      scroll.on("scroll", ({ limit, scroll }) => {
        if (window.innerWidth >= 1261) {
          let itemForSticky;
          let rightSideSection;
          let itemForStickyWrapper;
          let header;
          let initialWidth;
          let headerHeight;
          let rightSideSectionTop;
          let itemForStickyWrapperTop;

          try {
            itemForSticky = document.querySelector(".benefits__contentLeft");
            rightSideSection = document.querySelector(
              ".benefits__contentRight"
            );
            itemForStickyWrapper = document.querySelector(
              ".benefits__contentLeftWrapper"
            );
            header = document.querySelector(".header--main");

            initialWidth = itemForSticky.getBoundingClientRect().width;
            itemForSticky.style.width = `${initialWidth}px`;
            itemForStickyWrapper.style.width = `${initialWidth}px`;

            scrollTop = scroll.y;

            // header height
            headerHeight = header.getBoundingClientRect().height;
            // how much was scrolled

            try {
              // right side section from top with height
              rightSideSectionTop =
                rightSideSection.offsetTop +
                rightSideSection.offsetParent.offsetTop +
                rightSideSection.getBoundingClientRect().height;

              // left side section from top with margin that is header height and addition
              itemForStickyWrapperTop =
                itemForStickyWrapper.offsetTop +
                itemForStickyWrapper.offsetParent.offsetTop -
                headerHeight -
                60;
            } catch (error) {}

            let counter = 0;
            // item's for sticky bottom side current postition from top
            let itemForStickyBottomSide;

            try {
              if (scrollTop >= itemForStickyWrapperTop) {
                itemForSticky.style.position = "unset";
              }

              if (scrollTop >= itemForStickyWrapperTop) {
                // set sticky
                if (counter === 0) {
                  itemForSticky.style.position = "fixed";
                  itemForSticky.style.top = `${
                    scrollTop + headerHeight + 60
                  }px`;
                }
                // item's for sticky bottom side current postition from top
                itemForStickyBottomSide =
                  itemForSticky.offsetTop +
                  itemForSticky.getBoundingClientRect().height;

                // set absolute to press itemForStick to bottom to allign with right side item's bottom side
                if (itemForStickyBottomSide >= rightSideSectionTop) {
                  itemForSticky.style.position = "unset";
                  itemForSticky.style.top = `unset`;

                  itemForStickyWrapper.style.display = "flex";
                  itemForStickyWrapper.style.alignItems = "flex-end";

                  counter++;
                }
              }
            } catch (error) {}
            try {
              if (itemForStickyBottomSide < rightSideSectionTop) {
                counter--;

                itemForSticky.style.position = "fixed";
                itemForSticky.style.top = `${scrollTop + headerHeight + 50}px`;
              }
            } catch (error) {}
          } catch (error) {}
        }
      });
    } catch (error) {}
    // header
    scroll.on("scroll", ({ limit, scroll }) => {
      if (window.innerWidth > 1024) {
        scrollTop = scroll.y;

        const headers = document.querySelectorAll(".header--main");

        headers.forEach((header) => {
          addPaddingsToHeader(header, scrollTop);
        });
      }
    });

    if (window.innerWidth <= 1024) {
      const butter = document.querySelector("#butter");

      butter.style.position = "unset";
      butter.style.overflow = "unset";
      butter.style.minHeight = "unset";
    }

    if (window.innerWidth > 1024) {
      scroll.on("call", (func, args, obj) => {
        let animationItems;

        try {
          animationItems = document.querySelectorAll(".animationItem");
        } catch (error) {}

        const reg = /\d*/g;
        try {
          animationItems.forEach((animationItem, index) => {
            if (
              index ===
              Math.abs(
                obj.id
                  .match(reg)
                  .join()
                  .replace(/[\s.,%]/g, "")
              )
            ) {
              animationItem.classList.add("animated");
            }
          });
        } catch (error) {}
      });
    }
    // statistics
    if (window.innerWidth > 1024) {
      let itemsForAnimation;

      try {
        itemsForAnimation = document.querySelectorAll(
          ".statistics__itemNumber"
        );
      } catch (error) {}

      try {
        itemsForAnimation.forEach((itemForAnimation) => {
          itemForAnimation.addEventListener(
            "animationStarted",
            () => {
              animateNumbers(itemForAnimation);
            },
            {
              once: true,
            }
          );
        });
      } catch (error) {}
      // statistics
      scroll.on("scroll", ({ limit, scroll }) => {
        const animationStarted = new Event("animationStarted");

        const itemsForAnimation = document.querySelectorAll(
          ".statistics__itemNumber.animated"
        );

        if (itemsForAnimation) {
          itemsForAnimation.forEach((itemForAnimation) => {
            itemForAnimation.dispatchEvent(animationStarted);
          });
        }
      });

      function animateNumbers(itemForAnimation) {
        const animeationDuration = 4;
        let counter = 1;
        // if dataset present
        if (itemForAnimation.dataset.neededAmount) {
          // how many numbers need to change
          const neededAmount = itemForAnimation.dataset.neededAmount;
          // step of time for interval
          const timeStep = (1000 * animeationDuration) / neededAmount;
          // change numbers
          const animate = setInterval(() => {
            if (counter <= neededAmount) {
              // continue
              if (itemForAnimation.dataset.withSign === undefined) {
                itemForAnimation.textContent = counter;
              } else {
                itemForAnimation.textContent = `${
                  counter + itemForAnimation.dataset.withSign
                }`;
              }
            } else {
              // stop
              clearInterval(animate);
            }

            counter++;
          }, timeStep);
        }
      }
    }
    // index
    const toBottomArrow = document.querySelector(
      ".intro__arrow-to-bottom-arrow-block"
    );
    const aboutUs = document.querySelector(".about-us-index");

    let headerHeight;
    if (window.innerWidth >= 1400) {
      headerHeight = -83;
    } else {
      headerHeight = -63;
    }

    if (toBottomArrow) {
      toBottomArrow.addEventListener("click", () => {
        scroll.scrollTo(aboutUs, { offset: headerHeight });
      });
    }

    //  =====================
    const circle = document.querySelector(".progress-ring__circle");
    const circleParent = document.querySelector(".progress-circle");
    const circleArrowsParent = document.querySelector(
      ".progress-circle-arrows"
    );

    const circleArrows = document.querySelectorAll(".progress-circle-arrow");
    const circleArrowsArray = Array.from(circleArrows);

    const circleArrowSalad = document.querySelector(
      ".progress-circle-arrow--salad"
    );
    const circleArrowBlack = document.querySelector(
      ".progress-circle-arrow--black"
    );

    // to top
    try {
      Array.from(circleArrows).forEach((circleArrow) => {
        circleArrow.addEventListener("click", () => {
          scroll.scrollTo("top");
        });
      });
      circleArrowsParent.addEventListener("click", () => {
        scroll.scrollTo("top");
      });
      circle.addEventListener("click", () => {
        scroll.scrollTo("top");
      });
    } catch (error) {}

    // clear arrow classes
    function clearArrowsClasses() {
      circleArrowsArray.forEach((circleArrow) => {
        if (circleArrow.classList.contains("progress-circle-arrow--active")) {
          circleArrow.classList.remove("progress-circle-arrow--active");
        }
        if (
          circleArrow.classList.contains("progress-circle-arrow--not-active")
        ) {
          circleArrow.classList.remove("progress-circle-arrow--not-active");
        }
      });
    }

    let radius;
    let circumference;

    try {
      radius = circle.r.baseVal.value;
      circumference = 2 * Math.PI * radius;
    } catch (error) {}
    // offset
    const offsetTotal = 100;

    try {
      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = `${circumference} ${circumference}`;
    } catch (error) {}

    // progress
    function setProgress(percent) {
      try {
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
      } catch (error) {}
    }
    // updateProgress
    function updateProgress(fromTop) {
      // const scrollTop = scroll.y;
      const butterHeight = getComputedStyle(
        document.querySelector("#butter")
      ).height;
      const bodyHeight = getComputedStyle(
        document.querySelector("body")
      ).height;
      const pxIndexButter = butterHeight.lastIndexOf("px");
      const pxIndexBody = bodyHeight.lastIndexOf("px");
      const heightButter = Math.abs(butterHeight.slice(0, pxIndexButter));
      const heightBody = Math.abs(bodyHeight.slice(0, pxIndexBody));
      const height = heightButter - heightBody;

      const dashOffset = 0 + (fromTop * 100) / height;

      setProgress(dashOffset);
    }
    updateProgress();

    scroll.on("scroll", ({ limit, scroll }) => {
      updateProgress(scroll.y);
    });

    function isActiveCircle(fromTop) {
      if (fromTop >= offsetTotal) {
        try {
          circleParent.classList.add("progress-circle--active");
        } catch (error) {}
      }
      if (fromTop < offsetTotal) {
        try {
          circleParent.classList.remove("progress-circle--active");
        } catch (error) {}
      }
    }

    try {
      // to top
      Array.from(circleArrows).forEach((circleArrow) => {
        circleArrow.addEventListener("click", () => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        });
      });
      circleArrowsParent.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
      circle.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    } catch (error) {}

    // sections
    scroll.on("scroll", ({ limit, scroll }) => {
      const scrollTop = scroll.y;

      isActiveCircle(scrollTop);

      const viewPortHeight = window.innerHeight;

      const currentPosition = viewPortHeight + scrollTop - 20;

      const sections = document.querySelectorAll(
        ".sectionForProgresCircleColor"
      );
      let sectionsDataWithTypesAndOffsets = [];
      let sectionsDataWithOffsets = [];

      sections.forEach((section) => {
        const sectionDistanceFromTop = section.offsetTop;
        const sectionWhite = section.classList.contains("whiteSection");
        const sectionType = sectionWhite ? "white" : "black";
        // const sectionData = ;
        const sectionDataMArginsFromTop = sectionDistanceFromTop;

        sectionsDataWithTypesAndOffsets.push([
          sectionType,
          sectionDistanceFromTop,
        ]);
        sectionsDataWithOffsets.push(sectionDataMArginsFromTop);
      });

      let clossestOffsets = [];

      sectionsDataWithOffsets.forEach((offsetFromTop) => {
        const clossestOffset = offsetFromTop - currentPosition;
        if (clossestOffset < 0) {
          clossestOffsets.push(offsetFromTop);
        }
      });
      let isClosest = clossestOffsets[clossestOffsets.length - 1];

      sectionsDataWithTypesAndOffsets.forEach(
        (sectionsDataWithTypesAndOffset) => {
          if (isClosest === sectionsDataWithTypesAndOffset[1]) {
            if (sectionsDataWithTypesAndOffset[0] === "white") {
              clearArrowsClasses();
              try {
                circle.style.fill = "#1D1D1D";
                circleArrowSalad.classList.add("progress-circle-arrow--active");
                circleArrowBlack.classList.add(
                  "progress-circle-arrow--not-active"
                );
              } catch (error) {}
            } else {
              clearArrowsClasses();
              try {
                circle.style.fill = "#fff";
                circleArrowSalad.classList.add(
                  "progress-circle-arrow--not-active"
                );
                circleArrowBlack.classList.add("progress-circle-arrow--active");
              } catch (error) {}
            }
          }
        }
      );
    });
  };

  function addPaddingsToHeader(hdr, scrollTop) {
    if (scrollTop >= 1) {
      if (hdr.classList.contains("header--main-transparent")) {
        hdr.classList.add("header--main-white");
      }

      hdr.classList.add("header--main--min-padding");
    }
    if (scrollTop === 0) {
      if (hdr.classList.contains("header--main-transparent")) {
        hdr.classList.remove("header--main-white");
      }
      hdr.classList.remove("header--main--min-padding");
    }
  }
} catch (error) {}

// EXTERNAL MODULE: ./source/js/productsOncePage/intro.js
var intro = __webpack_require__(604);
// EXTERNAL MODULE: ./source/js/index/reviews/gallery.js
var gallery = __webpack_require__(484);
// EXTERNAL MODULE: ./source/js/attraction/gallery-attraction.js
var gallery_attraction = __webpack_require__(483);
// EXTERNAL MODULE: ./source/js/modals/modals.js
var modals = __webpack_require__(38);
;// CONCATENATED MODULE: ./source/js/productsOncePage/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--infoOffer",
      ".fillingButton__svg-circle--infoOffer",
      ".fillingButton__circle--infoOffer",
      3,
      3,
      0,
      0,
      true,
      true,
      false
    );
  } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--infoOffer",
      ".fillingButton__svg-circle--infoOffer",
      ".fillingButton__circle--infoOffer",
      3,
      3,
      0,
      0,
      false
    );
  } catch (error) {}
});

// EXTERNAL MODULE: ./source/js/services/animatedStatistics.js
var animatedStatistics = __webpack_require__(954);
;// CONCATENATED MODULE: ./source/js/services/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  // try {
  //   addInteractivityToButton(
  //     ".fillingButton--infoOffer",
  //     ".fillingButton__svg-circle--infoOffer",
  //     ".fillingButton__circle--infoOffer",
  //     3,
  //     4,
  //     0,
  //     0,
  //     true,
  //     "blackArrow",
  //     false
  //   );
  // } catch (error) {}

  try {
    addInteractivityToButton(
      ".fillingButton--infoInfo",
      ".fillingButton__svg-circle--infoInfo",
      ".fillingButton__circle--infoInfo",
      3,
      4,
      0,
      0,
      true,
      true,
      false
    );
  } catch (error) {}
});

window.addEventListener("resize", () => {
  // try {
  //   addInteractivityToButton(
  //     ".fillingButton--infoOffer",
  //     ".fillingButton__svg-circle--infoOffer",
  //     ".fillingButton__circle--infoOffer",
  //     3,
  //     4,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
  // try {
  //   addInteractivityToButton(
  //     ".fillingButton--infoInfo",
  //     ".fillingButton__svg-circle--infoInfo",
  //     ".fillingButton__circle--infoInfo",
  //     3,
  //     4,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
});

;// CONCATENATED MODULE: ./source/js/modification/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  // try {
  //   // intro top
  //   addInteractivityToButton(
  //     ".fillingButton--introTop",
  //     ".fillingButton__svg-circle--introTop",
  //     ".fillingButton__circle--introTop",
  //     3,
  //     3,
  //     0,
  //     0,
  //     true,
  //     "whiteArrow",
  //     true
  //   );
  // } catch (error) {}
  // try {
  //   // intro bottom
  //   addInteractivityToButton(
  //     ".fillingButton--introBottom",
  //     ".fillingButton__svg-circle--introBottom",
  //     ".fillingButton__circle--introBottom",
  //     2,
  //     2,
  //     0,
  //     0,
  //     true,
  //     "whiteArrow",
  //     true
  //   );
  // } catch (error) {}
  // try {
  //   // answersQuestions
  //   addInteractivityToButton(
  //     ".fillingButton--answersQuestions",
  //     ".fillingButton__svg-circle--answersQuestions",
  //     ".fillingButton__circle--answersQuestions",
  //     2,
  //     2,
  //     0,
  //     0,
  //     true,
  //     "blackArrow",
  //     false
  //   );
  // } catch (error) {}
  // try {
  //   // benefitsRight
  //   addInteractivityToButton(
  //     ".fillingButton--benefitsRight",
  //     ".fillingButton__svg-circle--benefitsRight",
  //     ".fillingButton__circle--benefitsRight",
  //     2,
  //     2,
  //     0,
  //     0,
  //     true,
  //     "blackArrow",
  //     true
  //   );
  // } catch (error) {}
});

window.addEventListener("resize", () => {
  // try {
  //   // intro top
  //   addInteractivityToButton(
  //     ".fillingButton--introTop",
  //     ".fillingButton__svg-circle--introTop",
  //     ".fillingButton__circle--introTop",
  //     3,
  //     3,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
  // try {
  //   // intro bottom
  //   addInteractivityToButton(
  //     ".fillingButton--introBottom",
  //     ".fillingButton__svg-circle--introBottom",
  //     ".fillingButton__circle--introBottom",
  //     2,
  //     2,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
  // try {
  //   // answersQuestions
  //   addInteractivityToButton(
  //     ".fillingButton--answersQuestions",
  //     ".fillingButton__svg-circle--answersQuestions",
  //     ".fillingButton__circle--answersQuestions",
  //     2,
  //     2,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
  // try {
  //   // benefitsRight
  //   addInteractivityToButton(
  //     ".fillingButton--benefitsRight",
  //     ".fillingButton__svg-circle--benefitsRight",
  //     ".fillingButton__circle--benefitsRight",
  //     2,
  //     2,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
});

// EXTERNAL MODULE: ./source/js/serviceDetail/splide.js
var serviceDetail_splide = __webpack_require__(922);
// EXTERNAL MODULE: ./source/js/serviceDetail/splide-arrows-align.js
var serviceDetail_splide_arrows_align = __webpack_require__(411);
;// CONCATENATED MODULE: ./source/js/projects/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--projectsOffer",
      ".fillingButton__svg-circle--projectsOffer",
      ".fillingButton__circle--projectsOffer",
      2,
      2,
      0,
      0,
      true,
      true,
      false
    );
  } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--projectsOffer",
      ".fillingButton__svg-circle--projectsOffer",
      ".fillingButton__circle--projectsOffer",
      2,
      2,
      0,
      0,
      false
    );
  } catch (error) {}
});

;// CONCATENATED MODULE: ./source/js/seo/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  // try {
  //   // intro bottom
  //   addInteractivityToButton(
  //     ".fillingButton--introBottom",
  //     ".fillingButton__svg-circle--introBottom",
  //     ".fillingButton__circle--introBottom",
  //     2,
  //     2,
  //     0,
  //     0,
  //     true,
  //     true,
  //     true
  //   );
  // } catch (error) {}
  try {
    // costsFooterItem
    addInteractivityToButton(
      ".fillingButton--costsFooterItem",
      ".fillingButton__svg-circle--costsFooterItem",
      ".fillingButton__circle--costsFooterItem",
      2,
      3,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}
  try {
    // benefitsBottom
    addInteractivityToButton(
      ".fillingButton--benefitsBottom",
      ".fillingButton__svg-circle--benefitsBottom",
      ".fillingButton__circle--benefitsBottom",
      2,
      2,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}
  try {
    // benefitsRight
    addInteractivityToButton(
      ".fillingButton--benefitsRight",
      ".fillingButton__svg-circle--benefitsRight",
      ".fillingButton__circle--benefitsRight",
      2,
      3,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}
  try {
    // answersQuestions
    addInteractivityToButton(
      ".fillingButton--answersQuestions",
      ".fillingButton__svg-circle--answersQuestions",
      ".fillingButton__circle--answersQuestions",
      2,
      2,
      0,
      0,
      true,
      true,
      false
    );
  } catch (error) {}
  try {
    // costsItem
    const costsItems = document.querySelectorAll(
      ".costs__contentBottomItem-seo"
    );
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--costsItem");
      const two = item.querySelector(".fillingButton__svg-circle--costsItem");
      const three = item.querySelector(".fillingButton__circle--costsItem");

      addInteractivityToButton(
        one,
        two,
        three,
        2,
        3,
        0,
        0,
        true,
        true,
        false,
        [],
        null,
        true
      );
    });
  } catch (error) {}
  try {
    // costsItem
    const costsItems = document.querySelectorAll(
      ".costs__contentBottomItem-sup"
    );
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--costsItem");
      const two = item.querySelector(".fillingButton__svg-circle--costsItem");
      const three = item.querySelector(".fillingButton__circle--costsItem");

      addInteractivityToButton(
        one,
        two,
        three,
        2,
        3,
        0,
        0,
        true,
        true,
        false,
        [],
        null,
        true
      );
    });
  } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    // intro bottom
    addInteractivityToButton(
      ".fillingButton--introBottom",
      ".fillingButton__svg-circle--introBottom",
      ".fillingButton__circle--introBottom",
      2,
      2,
      0,
      0,
      false
    );
  } catch (error) {}
  try {
    // costsFooterItem
    addInteractivityToButton(
      ".fillingButton--costsFooterItem",
      ".fillingButton__svg-circle--costsFooterItem",
      ".fillingButton__circle--costsFooterItem",
      2,
      2,
      0,
      0,
      false
    );
  } catch (error) {}
  try {
    // benefitsBottom
    addInteractivityToButton(
      ".fillingButton--benefitsBottom",
      ".fillingButton__svg-circle--benefitsBottom",
      ".fillingButton__circle--benefitsBottom",
      2,
      2,
      0,
      0,
      false
    );
  } catch (error) {}
  try {
    // benefitsRight
    addInteractivityToButton(
      ".fillingButton--benefitsRight",
      ".fillingButton__svg-circle--benefitsRight",
      ".fillingButton__circle--benefitsRight",
      2,
      3,
      0,
      0,
      false
    );
  } catch (error) {}
  try {
    // answersQuestions
    addInteractivityToButton(
      ".fillingButton--answersQuestions",
      ".fillingButton__svg-circle--answersQuestions",
      ".fillingButton__circle--answersQuestions",
      2,
      2,
      0,
      0,
      false
    );
  } catch (error) {}
  try {
    // costsItem
    const costsItems = document.querySelectorAll(
      ".costs__contentBottomItem-seo"
    );
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--costsItem");
      const two = item.querySelector(".fillingButton__svg-circle--costsItem");
      const three = item.querySelector(".fillingButton__circle--costsItem");

      addInteractivityToButton(
        one,
        two,
        three,
        2,
        3,
        0,
        0,
        false,
        null,
        false,
        [],
        null,
        true
      );
    });
  } catch (error) {}
  try {
    // costsItem
    const costsItems = document.querySelectorAll(
      ".costs__contentBottomItem-sup"
    );
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--costsItem");
      const two = item.querySelector(".fillingButton__svg-circle--costsItem");
      const three = item.querySelector(".fillingButton__circle--costsItem");

      addInteractivityToButton(
        one,
        two,
        three,
        2,
        3,
        0,
        0,
        false,
        null,
        false,
        [],
        null,
        true
      );
    });
  } catch (error) {}
});

;// CONCATENATED MODULE: ./source/js/serm/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  // try {
  //   // intro top
  //   addInteractivityToButton(
  //     ".fillingButton--introTop",
  //     ".fillingButton__svg-circle--introTop",
  //     ".fillingButton__circle--introTop",
  //     3,
  //     3,
  //     0,
  //     0,
  //     true,
  //     "whiteArrow",
  //     true
  //   );
  // } catch (error) {}
  // try {
  //   // intro bottom
  //   addInteractivityToButton(
  //     ".fillingButton--introBottom",
  //     ".fillingButton__svg-circle--introBottom",
  //     ".fillingButton__circle--introBottom",
  //     2,
  //     2,
  //     0,
  //     0,
  //     true,
  //     "whiteArrow",
  //     true
  //   );
  // } catch (error) {}
  // try {
  //   // answersQuestions
  //   addInteractivityToButton(
  //     ".fillingButton--answersQuestions",
  //     ".fillingButton__svg-circle--answersQuestions",
  //     ".fillingButton__circle--answersQuestions",
  //     2,
  //     2,
  //     0,
  //     0,
  //     true,
  //     true,
  //     false
  //   );
  // } catch (error) {}
  try {
    // costsItem
    const costsItems = document.querySelectorAll(
      ".costs__contentBottomItem-serm"
    );
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--costsItem");
      const two = item.querySelector(".fillingButton__svg-circle--costsItem");
      const three = item.querySelector(".fillingButton__circle--costsItem");
      addInteractivityToButton(
        one,
        two,
        three,
        2,
        2,
        0,
        0,
        true,
        true,
        false,
        [],
        null,
        true
      );
    });
  } catch (error) {}
});

window.addEventListener("resize", () => {
  // try {
  //   // intro top
  //   addInteractivityToButton(
  //     ".fillingButton--introTop",
  //     ".fillingButton__svg-circle--introTop",
  //     ".fillingButton__circle--introTop",
  //     3,
  //     3,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
  // try {
  //   // intro bottom
  //   addInteractivityToButton(
  //     ".fillingButton--introBottom",
  //     ".fillingButton__svg-circle--introBottom",
  //     ".fillingButton__circle--introBottom",
  //     2,
  //     2,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
  // try {
  //   // answersQuestions
  //   addInteractivityToButton(
  //     ".fillingButton--answersQuestions",
  //     ".fillingButton__svg-circle--answersQuestions",
  //     ".fillingButton__circle--answersQuestions",
  //     2,
  //     2,
  //     0,
  //     0,
  //     true,
  //     true,
  //     false
  //   );
  // } catch (error) {}
  try {
    // costsItem
    const costsItems = document.querySelectorAll(
      ".costs__contentBottomItem-serm"
    );
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--costsItem");
      const two = item.querySelector(".fillingButton__svg-circle--costsItem");
      const three = item.querySelector(".fillingButton__circle--costsItem");
      addInteractivityToButton(
        one,
        two,
        three,
        2,
        2,
        0,
        0,
        false,
        null,
        false,
        [],
        null,
        true
      );
    });
  } catch (error) {}
});

// EXTERNAL MODULE: ./source/js/serm/cyclesItemAutoHeightAddForLeftSideSaladStick.js
var cyclesItemAutoHeightAddForLeftSideSaladStick = __webpack_require__(461);
// EXTERNAL MODULE: ./source/js/serm/reviews.js
var reviews = __webpack_require__(308);
;// CONCATENATED MODULE: ./source/js/serviceDetail/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  try {
    // costs
    addInteractivityToButton(
      ".fillingButton--costs",
      ".fillingButton__svg-circle--costs",
      ".fillingButton__circle--costs",
      2,
      2,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}
  try {
    // stack top
    addInteractivityToButton(
      ".fillingButton--stackTop",
      ".fillingButton__svg-circle--stackTop",
      ".fillingButton__circle--stackTop",
      3,
      4,
      0,
      0,
      true,
      true,
      false
    );
  } catch (error) {}
  // try {
  //   // intro top
  //   addInteractivityToButton(
  //     ".fillingButton--introTop",
  //     ".fillingButton__svg-circle--introTop",
  //     ".fillingButton__circle--introTop",
  //     3,
  //     3,
  //     0,
  //     0,
  //     true,
  //     true,
  //     true
  //   );
  // } catch (error) {}
  // try {
  //   // intro bottom
  //   addInteractivityToButton(
  //     ".fillingButton--introBottom",
  //     ".fillingButton__svg-circle--introBottom",
  //     ".fillingButton__circle--introBottom",
  //     3,
  //     3,
  //     0,
  //     0,
  //     true,
  //     true,
  //     true
  //   );
  // } catch (error) {}
  // try {
  //   // offer
  //   addInteractivityToButton(
  //     ".fillingButton--infoOffer",
  //     ".fillingButton__svg-circle--infoOffer",
  //     ".fillingButton__circle--infoOffer",
  //     3,
  //     3,
  //     0,
  //     0,
  //     true,
  //     true,
  //     false
  //   );
  // } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    // stack top
    addInteractivityToButton(
      ".fillingButton--stackTop",
      ".fillingButton__svg-circle--stackTop",
      ".fillingButton__circle--stackTop",
      3,
      3,
      0,
      0,
      false
    );
  } catch (error) {}
  // try {
  //   // intro top
  //   addInteractivityToButton(
  //     ".fillingButton--introTop",
  //     ".fillingButton__svg-circle--introTop",
  //     ".fillingButton__circle--introTop",
  //     3,
  //     3,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
  // try {
  //   // intro bottom
  //   addInteractivityToButton(
  //     ".fillingButton--introBottom",
  //     ".fillingButton__svg-circle--introBottom",
  //     ".fillingButton__circle--introBottom",
  //     3,
  //     3,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
  try {
    // costs
    addInteractivityToButton(
      ".fillingButton--costs",
      ".fillingButton__svg-circle--costs",
      ".fillingButton__circle--costs",
      3,
      4,
      0,
      0,
      false
    );
  } catch (error) {}
  // try {
  //   // offer
  //   addInteractivityToButton(
  //     ".fillingButton--infoOffer",
  //     ".fillingButton__svg-circle--infoOffer",
  //     ".fillingButton__circle--infoOffer",
  //     3,
  //     3,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
});

;// CONCATENATED MODULE: ./source/js/serviceDetailSecond/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  // try {
  //   // intro bottom
  //   addInteractivityToButton(
  //     ".fillingButton--introBottom",
  //     ".fillingButton__svg-circle--introBottom",
  //     ".fillingButton__circle--introBottom",
  //     3,
  //     3,
  //     0,
  //     0,
  //     true,
  //     "whiteArrow",
  //     true
  //   );
  // } catch (error) {}
  try {
    // types
    addInteractivityToButton(
      ".fillingButton--types",
      ".fillingButton__svg-circle--types",
      ".fillingButton__circle--types",
      3,
      3,
      0,
      0,
      true,
      true,
      false
    );
  } catch (error) {}
});

window.addEventListener("resize", () => {
  // try {
  //   // intro bottom
  //   addInteractivityToButton(
  //     ".fillingButton--introBottom",
  //     ".fillingButton__svg-circle--introBottom",
  //     ".fillingButton__circle--introBottom",
  //     3,
  //     3,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
});

// EXTERNAL MODULE: ./source/js/serviceDetailSecond/allignTypesImage.js
var allignTypesImage = __webpack_require__(898);
// EXTERNAL MODULE: ./source/js/serviceDetailSecond/lines.js
var serviceDetailSecond_lines = __webpack_require__(904);
// EXTERNAL MODULE: ./source/js/serviceDetailSecond/quiz.js
var quiz = __webpack_require__(312);
;// CONCATENATED MODULE: ./source/js/sitesDevelopment/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  // try {
  //   // intro top
  //   addInteractivityToButton(
  //     ".fillingButton--introTop",
  //     ".fillingButton__svg-circle--introTop",
  //     ".fillingButton__circle--introTop",
  //     3,
  //     3,
  //     0,
  //     0,
  //     true,
  //     "whiteArrow",
  //     true
  //   );
  // } catch (error) {}
  // try {
  //   // intro bottom
  //   addInteractivityToButton(
  //     ".fillingButton--introBottom",
  //     ".fillingButton__svg-circle--introBottom",
  //     ".fillingButton__circle--introBottom",
  //     2,
  //     2,
  //     0,
  //     0,
  //     true,
  //     "whiteArrow",
  //     true
  //   );
  // } catch (error) {}
  // try {
  //   // infoOffer
  //   addInteractivityToButton(
  //     ".fillingButton--infoOffer",
  //     ".fillingButton__svg-circle--infoOffer",
  //     ".fillingButton__circle--infoOffer",
  //     2,
  //     2,
  //     0,
  //     0,
  //     true,
  //     "blackArrow",
  //     true
  //   );
  // } catch (error) {}
});

window.addEventListener("resize", () => {
  // try {
  //   // intro top
  //   addInteractivityToButton(
  //     ".fillingButton--introTop",
  //     ".fillingButton__svg-circle--introTop",
  //     ".fillingButton__circle--introTop",
  //     3,
  //     3,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
  // try {
  //   // intro bottom
  //   addInteractivityToButton(
  //     ".fillingButton--introBottom",
  //     ".fillingButton__svg-circle--introBottom",
  //     ".fillingButton__circle--introBottom",
  //     2,
  //     2,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
});

;// CONCATENATED MODULE: ./source/js/studio/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--brief-bottom",
      ".fillingButton__svg-circle--brief-bottom",
      ".fillingButton__circle--brief-bottom",
      3,
      3,
      0,
      0,
      false,
      null,
      true,
      [20, 20],
      "bigWhiteFirst"
    );
  } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    addInteractivityToButton(
      ".fillingButton--brief-bottom",
      ".fillingButton__svg-circle--brief-bottom",
      ".fillingButton__circle--brief-bottom",
      2,
      2,
      0,
      0,
      false
    );
  } catch (error) {}
});

// EXTERNAL MODULE: ./source/js/studio/video.js
var video = __webpack_require__(718);
;// CONCATENATED MODULE: ./source/js/support/buttonsImplementation.js


document.addEventListener("DOMContentLoaded", () => {
  try {
    // intro top
    addInteractivityToButton(
      ".fillingButton--introTop",
      ".fillingButton__svg-circle--introTop",
      ".fillingButton__circle--introTop",
      3,
      3,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}
  // try {
  //   // intro bottom
  //   addInteractivityToButton(
  //     ".fillingButton--introBottom",
  //     ".fillingButton__svg-circle--introBottom",
  //     ".fillingButton__circle--introBottom",
  //     2,
  //     2,
  //     0,
  //     0,
  //     true,
  //     "whiteArrow",
  //     true
  //   );
  // } catch (error) {}
  // try {
  //   // answersQuestions
  //   addInteractivityToButton(
  //     ".fillingButton--answersQuestions",
  //     ".fillingButton__svg-circle--answersQuestions",
  //     ".fillingButton__circle--answersQuestions",
  //     2,
  //     2,
  //     0,
  //     0,
  //     true,
  //     true,
  //     false
  //   );
  // } catch (error) {}
  try {
    // costsTop
    addInteractivityToButton(
      ".fillingButton--costsTop",
      ".fillingButton__svg-circle--costsTop",
      ".fillingButton__circle--costsTop",
      2,
      3,
      0,
      0,
      true,
      true,
      true
    );
  } catch (error) {}
  try {
    // costsItem
    const costsItems = document.querySelectorAll(".costs__contentBottomItem");
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--costsItem");
      const two = item.querySelector(".fillingButton__svg-circle--costsItem");
      const three = item.querySelector(".fillingButton__circle--costsItem");

      addInteractivityToButton(
        one,
        two,
        three,
        3,
        3,
        0,
        0,
        true,
        true,
        false,
        [],
        null,
        true
      );
    });
  } catch (error) {}
});

window.addEventListener("resize", () => {
  try {
    // intro top
    addInteractivityToButton(
      ".fillingButton--introTop",
      ".fillingButton__svg-circle--introTop",
      ".fillingButton__circle--introTop",
      3,
      3,
      0,
      0,
      false
    );
  } catch (error) {}
  // try {
  //   // intro bottom
  //   addInteractivityToButton(
  //     ".fillingButton--introBottom",
  //     ".fillingButton__svg-circle--introBottom",
  //     ".fillingButton__circle--introBottom",
  //     3,
  //     2,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
  // try {
  //   // answersQuestions
  //   addInteractivityToButton(
  //     ".fillingButton--answersQuestions",
  //     ".fillingButton__svg-circle--answersQuestions",
  //     ".fillingButton__circle--answersQuestions",
  //     2,
  //     2,
  //     0,
  //     0,
  //     false
  //   );
  // } catch (error) {}
  try {
    // costsTop
    addInteractivityToButton(
      ".fillingButton--costsTop",
      ".fillingButton__svg-circle--costsTop",
      ".fillingButton__circle--costsTop",
      2,
      3,
      0,
      0,
      false
    );
  } catch (error) {}
  try {
    // // costsItem
    const costsItems = document.querySelectorAll(".costs__contentBottomItem");
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--costsItem");
      const two = item.querySelector(".fillingButton__svg-circle--costsItem");
      const three = item.querySelector(".fillingButton__circle--costsItem");

      addInteractivityToButton(one, two, three, 3, 3, 0, 0, false);
    });
  } catch (error) {}
});

// EXTERNAL MODULE: ./source/js/utils/invokeQuiz.js
var invokeQuiz = __webpack_require__(857);
;// CONCATENATED MODULE: ./source/js/utils/addInteractivityToButton--modals.js
function addInteractivityToButton_modals_addInteractivityToButton(
  parentSelector,
  circleSvgSelector,
  circleSelector,
  left,
  top,
  additionalLeft,
  additionalTop,
  addArrow,
  typeOfDecorativeImageOrSrc = null,
  withTextInversion,
  [...decorativeImageSizes] = [],
  mode,
  addedSelectors
) {
  // mode present ?
  const isMode = mode;
  // type of modes
  const modes = {
    // modeType:
    //   mode === 'bigWhite' ? "big" : null
    //   || mode === 'bigBlack' ? "big" : null,
    bigWhiteFirst: "bigWhiteFirst",
    // bigBlackFirst: 'bigBlackFirst',
  };
  // type of images
  const imagesTypes = {
    blackArrow: "blackArrow",
    whiteArrow: "whiteArrow",
  };

  let matrixFrom;
  let matrixTo;
  let matrixValue = 0;

  let parent, circleSvg, circle;

  if (addedSelectors !== true) {
    // get paren block
    parent = document.querySelector(parentSelector);
    // get circle svg for :hover interactions
    circleSvg = document.querySelector(circleSvgSelector);
    // get circle for add coordinates to fill-circle  interactions
    circle = document.querySelector(circleSelector);
  } else {
    // get paren block
    parent = parentSelector;
    // get circle svg for :hover interactions
    circleSvg = circleSvgSelector;
    // get circle for add coordinates to fill-circle  interactions
    circle = circleSelector;
  }

  // create coordinates for circle
  let x;
  let y;
  // get coordinates to do margin from left
  // depend on position of whole button block (parent)
  // by given number
  switch (left) {
    case 0:
      x = (event, addedLeft) => event.pageX + addedLeft;
      break;
    case 1:
      x = (event, addedLeft) => event.pageX - parent.offsetLeft + addedLeft;
      break;
    case 2:
      x = (event, addedLeft) =>
        event.pageX -
        parent.offsetLeft -
        parent.offsetParent.offsetLeft +
        addedLeft;
      break;
    case 3:
      x = (event, addedLeft) =>
        event.pageX -
        parent.offsetLeft -
        parent.offsetParent.offsetLeft -
        parent.offsetParent.offsetParent.offsetLeft +
        addedLeft;
      break;
    case "servicesPage-infoSection":
      x = (event, addedLeft) => event.pageX - parent.offsetLeft - w;
      parent.offsetParent.offsetLeft -
        parent.offsetParent.offsetParent.offsetLeft -
        parent.offsetParent.offsetParent.offsetParent.offsetLeft +
        addedLeft;
      break;
  }
  // get coordinates to do margin from top
  // depend on position of whole button block (parent)
  // by given number
  switch (top) {
    case 0:
      y = (event, addedTop) => event.pageY + addedTop + matrixValue;
      break;
    case 1:
      y = (event, addedTop) =>
        event.pageY - parent.offsetTop + addedTop + matrixValue;
      break;
    case 2:
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetTop +
        matrixValue +
        addedTop;
      break;
    case 22:
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetParent.offsetTop +
        matrixValue +
        addedTop;
      break;
    case 3:
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetTop -
        parent.offsetParent.offsetParent.offsetTop +
        matrixValue +
        addedTop;
      break;
    case 33:
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetTop -
        parent.offsetParent.offsetParent.offsetTop -
        window.scrollY +
        matrixValue +
        addedTop;
      break;
    case 4:
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetTop -
        parent.offsetParent.offsetParent.offsetTop -
        parent.offsetParent.offsetParent.offsetParent.offsetTop +
        matrixValue +
        addedTop;
      break;
    case "servicesPage-infoSection":
      y = (event, addedTop) =>
        event.pageY -
        parent.offsetTop -
        parent.offsetParent.offsetParent.offsetParent.offsetTop -
        parent.offsetParent.offsetParent.offsetParent.offsetParent.offsetTop +
        matrixValue +
        addedTop;
      break;
  }
  // get span for color inversion
  let buttonContentBlockSpan;

  if (withTextInversion) {
    buttonContentBlockSpan = parent.querySelector(
      ".fillingButton__content span"
    );
  }
  // for images
  let blackImage;
  let whiteImage;

  if (mode === modes.bigWhiteFirst) {
    let width;
    let height;

    if (decorativeImageSizes.length !== 0) {
      [width, height] = [...decorativeImageSizes];
      // create black
      blackImage = new Image(width, height);
      blackImage.src = "assets/images/utils/arrowForFillingButton--black.svg";
      // create white
      whiteImage = new Image(width, height);
      whiteImage.src = "assets/images/utils/arrowForFillingButton--white.svg";
    } else {
      // create black
      blackImage = new Image(20, 20);
      blackImage.src = "assets/images/utils/arrowForFillingButton--black.svg";
      // create white
      whiteImage = new Image(20, 20);
      whiteImage.src = "assets/images/utils/arrowForFillingButton--white.svg";
    }
    // big mode and white first
    if (mode === modes.bigWhiteFirst) {
      addInteractivityToButton_modals_bigWhiteFirstInitialization(whiteImage, blackImage);
    }
    // +++++++++++++++++++
    // big mode and black first
    // if (mode === modes.bigBlackFirst) {
    //   bigBlackFirstInitialization(whiteImage, blackImage)
    // }
    // +++++++++++++++++++
    // add styles
    whiteImage.classList.add(
      "fillingButton__image--big",
      "fillingButton__image"
    );
    blackImage.classList.add(
      "fillingButton__image--big",
      "fillingButton__image"
    );
    // add styles to p tag
    const buttonSpanParent = parent.querySelector(".fillingButton__p");
    buttonSpanParent.classList.add("fillingButton__p--big");
    // get images parent block
    const buttonImagesBlock = parent.querySelector(
      ".fillingButton__imagesWrapper"
    );
    if (width && height) {
      buttonImagesBlock.style.width = `${width}px`;
      buttonImagesBlock.style.height = `${height}px`;
    } else {
      buttonImagesBlock.style.width = `20px`;
      buttonImagesBlock.style.height = `20px`;
    }
    // append images
    buttonImagesBlock.appendChild(blackImage);
    buttonImagesBlock.appendChild(whiteImage);
  }

  if (typeOfDecorativeImageOrSrc === true) {
    // create image
    let decorativeImage;
    // create white arrow
    // if (typeOfDecorativeImageOrSrc === imagesTypes.whiteArrow) {
    //   decorativeImage = new Image(15, 15);
    //   decorativeImage.src =
    //     "assets/images/utils/arrowForFillingButton--white.svg";
    // }
    if (typeOfDecorativeImageOrSrc === true) {
      decorativeImage = new Image(15, 15);
      let tagWithSrc = parent.querySelector(
        ".fillingButton__imageSrcInDataTag"
      );
      decorativeImage.src = tagWithSrc.dataset.src;
    }
    // // create black arrow
    // if (typeOfDecorativeImageOrSrc === imagesTypes.blackArrow) {
    //   decorativeImage = new Image(15, 15);
    //   decorativeImage.src =
    //     "assets/images/utils/arrowForFillingButton--black.svg";
    // }
    // if (
    //   typeOfDecorativeImageOrSrc !== imagesTypes.blackArrow &&
    //   typeOfDecorativeImageOrSrc !== imagesTypes.whiteArrow &&
    //   typeOfDecorativeImageOrSrc !== null
    // ) {
    //   // destructure custom sizes
    //   const [width, height] = [...decorativeImageSizes];

    //   decorativeImage = new Image(width, height);
    //   decorativeImage.src = typeOfDecorativeImageOrSrc;
    // }
    // add custom class for created image with correct sizes
    decorativeImage.classList.add("fillingButton__image");
    // append created image
    const buttonContentBlock = parent.querySelector(".fillingButton__content");
    buttonContentBlock.appendChild(decorativeImage);
  }
  // add listeners
  circleSvg.addEventListener("mousemove", (event) => {
    //   matrixFrom = +getComputedStyle(
    //     document.querySelector("main")
    //   ).transform.lastIndexOf("-");
    //   matrixTo = +getComputedStyle(
    //     document.querySelector("main")
    //   ).transform.lastIndexOf(")");
    //   matrixValue = Math.abs(
    //     +getComputedStyle(document.querySelector("main")).transform.slice(
    //       matrixFrom,
    //       matrixTo
    //     )
    //   );

    // big mode white first
    if (mode === modes.bigWhiteFirst) {
      addInteractivityToButton_modals_bigWhiteFirstInversion(whiteImage, blackImage);
    }
    // // big mode black first
    // if (mode === modes.bigBlackFirst) {
    //   bigBlackFirstInversion(whiteImage, blackImage)
    // }
    // add coordinates to circle for it's ::before pseudo-element
    circle.style.setProperty("--x", `${x(event, additionalLeft)}px`);
    circle.style.setProperty("--y", `${y(event, additionalTop)}px`);
    // add class for give size to filling
    circle.classList.add("fillingButton__circle--active");
    // add for color inversion class (if needed)
    if (withTextInversion) {
      buttonContentBlockSpan.classList.add("fillingButton__p--black");
    }
  });
  // remove class for reset size to filling
  circleSvg.addEventListener("mouseleave", () => {
    // big mode white first
    if (mode === modes.bigWhiteFirst) {
      addInteractivityToButton_modals_bigWhiteFirstReversion(whiteImage, blackImage);
    }
    // // big mode black first
    // if (mode === modes.bigBlackFirst) {
    //   bigBlackFirstReversion(whiteImage, blackImage)
    // }
    circle.classList.remove("fillingButton__circle--active");
    // remove for color inversion class (if needed)
    if (withTextInversion) {
      buttonContentBlockSpan.classList.remove("fillingButton__p--black");
    }
  });
}

// big white first utils
function addInteractivityToButton_modals_bigWhiteFirstInitialization(white, black) {
  white.classList.add("fillingButton__image--white-visible");
  black.classList.add("fillingButton__image--black-hidden");
}
function addInteractivityToButton_modals_bigWhiteFirstInversion(white, black) {
  white.classList.remove("fillingButton__image--white-visible");
  black.classList.remove("fillingButton__image--black-hidden");
  // colors inversions
  white.classList.add("fillingButton__image--white-hidden");
  black.classList.add("fillingButton__image--black-visible");
}
function addInteractivityToButton_modals_bigWhiteFirstReversion(white, black) {
  white.classList.remove("fillingButton__image--white-hidden");
  black.classList.remove("fillingButton__image--black-visible");
  // colors inversions
  white.classList.add("fillingButton__image--white-visible");
  black.classList.add("fillingButton__image--black-hidden");
}
// // big black first utils
// function bigBlackFirstInitialization(white, black) {
//   white.classList.add('fillingButton__image--white-hidden')
//   black.classList.add('fillingButton__image--black-visible')
// }
// function bigBlackFirstInversion(white, black) {
//   white.classList.remove('fillingButton__image--white-hidden')
//   black.classList.remove('fillingButton__image--black-visible')
//   // colors inversions
//   white.classList.add('fillingButton__image--white-visible')
//   black.classList.add('fillingButton__image--black-hidden')
// }
// function bigBlackFirstReversion(white, black) {
//   white.classList.remove('fillingButton__image--white-visible')
//   black.classList.remove('fillingButton__image--black-hidden')
//   // colors inversions
//   white.classList.add('fillingButton__image--white-hidden')
//   black.classList.add('fillingButton__image--black-visible')
// }

;// CONCATENATED MODULE: ./source/js/modals/modalButtons.js


document.addEventListener("DOMContentLoaded", () => {
  try {
    const costsItems = document.querySelectorAll(".modal");
    costsItems.forEach((item) => {
      const one = item.querySelector(".fillingButton--modal");
      const two = item.querySelector(".fillingButton__svg-circle--modal");
      const three = item.querySelector(".fillingButton__circle--modal");

      addInteractivityToButton_modals_addInteractivityToButton(
        one,
        two,
        three,
        3,
        3,
        0,
        0,
        true,
        true,
        true,
        [],
        null,
        true
      );
    });
  } catch (error) {}
});

window.addEventListener("resize", () => {});

;// CONCATENATED MODULE: ./source/js/indexes/main.js
// attraction
// preloader

// burgerMenu


// circle
// header


// local
// import "../attraction/spanBg";




// footer





// utils

// splide




// 404

// header

// burgerMenu

// decoration circle

// decoration lines

// intro


// blog once pag
// button

// splide


// button


// to next section

// checkboxes

// contacts

// button


// index
// intro





// about us



//services


// products

// reviews




// blog


// gallery






// products once page
// intro


// gallery





// indexservices
// burgerMenu


// circle
// header

// intro




// modification

// burgerMenu

// circle
// header

// local

// adds
// import "../serviceDetail/spanBg";



// splide




// projectsindex

// circle
// header

// burgerMenu

// offer

// buttons




// seo

// burgerMenu

// circle
// header

// local

// functional
// import "../attraction/spanBg";


// serm

// burgerMenu

// circle
// header

// local



// functional
// import "../attraction/spanBg";




// servicedetail

// burgerMenu

// circle
// header

// local
// import "../serviceDetail/spanBg";



// splide




// servicedetailsecond

// burgerMenu

// circle
// header

// local




// functional
// import "../attraction/spanBg";


// sitesdevelopment

// burgerMenu

// circle
// header

// local
// import "../attraction/spanBg";



// splide




// studio

// burgerMenu

// circle
// header

// buttons

// video

// stats


// utils

// support

// burgerMenu

// circle
// header

// local

// adds
// import "../serviceDetail/spanBg";



// splide






// modal



}();
/******/ })()
;