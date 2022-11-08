(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var custom_event_polyfill_polyfill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! custom-event-polyfill/polyfill.js */ "./node_modules/custom-event-polyfill/polyfill.js");
/* harmony import */ var custom_event_polyfill_polyfill_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(custom_event_polyfill_polyfill_js__WEBPACK_IMPORTED_MODULE_2__);
// Import Scss DO NOT DELETE
 // Import external dependencies


 // Bundle module files on build
// https://medium.com/@svinkle/getting-started-with-webpack-and-es6-modules-c465d053d988
// Issue with below is order of load is set by alphabetical naming of files...?

const requiredModules = __webpack_require__("./src/js/modules sync recursive \\.(js)$/");

requiredModules.keys().map(key => {
  requiredModules(key).default();
});

/***/ }),

/***/ "./src/js/modules sync recursive \\.(js)$/":
/*!**************************************!*\
  !*** ./src/js/modules sync \.(js)$/ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./activate.js": "./src/js/modules/activate.js",
	"./chat.js": "./src/js/modules/chat.js",
	"./controls.js": "./src/js/modules/controls.js",
	"./draggable.js": "./src/js/modules/draggable.js",
	"./eye.js": "./src/js/modules/eye.js",
	"./helloWorld.js": "./src/js/modules/helloWorld.js",
	"./scrollTo.js": "./src/js/modules/scrollTo.js",
	"./swiperArticles.js": "./src/js/modules/swiperArticles.js",
	"./timeline.js": "./src/js/modules/timeline.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/js/modules sync recursive \\.(js)$/";

/***/ }),

/***/ "./src/js/modules/activate.js":
/*!************************************!*\
  !*** ./src/js/modules/activate.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat */ "./src/js/modules/chat.js");


const activate = () => {
  loadingBar();
  setTimeout(function () {
    showPopups();
  }, 9000); // setTimeout(function() { timedPopups() }, 14) // 14000
};

const loadingBar = () => {
  let loading_bar = document.getElementsByClassName('loading')[0];
  if (!loading_bar) return false;
  loading_bar.classList.add('begin');
  setTimeout(function () {
    loading_bar.setAttribute('data-message', 1);
  }, 0);
  setTimeout(function () {
    loading_bar.setAttribute('data-message', 2);
  }, 3000);
  setTimeout(function () {
    loading_bar.setAttribute('data-message', 3);
  }, 6000);
  setTimeout(function () {
    loading_bar.classList.add('complete');
  }, 9000);
};

const showPopups = () => {
  let static_popups = document.querySelectorAll('.pop-up.static'),
      multistep_popups = document.querySelectorAll('.pop-up.multi-step'),
      chat_popup = document.querySelectorAll('.pop-up.chat');
  if (static_popups.length < 1 || multistep_popups.length < 1) return false; // Selects 1 or 2 at random to randomly show an interactive popup or 3 static popups.

  const selector = Math.floor(Math.random() * 2) + 1;

  if (selector == 1) {
    // Activate one randomly selected multistep pop-up
    const random_multistep_popup = multistep_popups[Math.floor(Math.random() * multistep_popups.length)];
    random_multistep_popup.setAttribute('data-status', 'active');
    random_multistep_popup.setAttribute('data-current', 1);
  } else if (selector == 2) {
    // Activate three randomly selected static pop-ups
    let random_keys = [];

    if (static_popups) {
      while (random_keys.length < 3) {
        var r = Math.floor(Math.random() * static_popups.length + 1);
        if (random_keys.indexOf(r - 1) === -1) random_keys.push(r - 1);
      }
    }

    for (var i = 2; i >= 0; i--) {
      var delay = (i + 1) * 1500,
          random_key = random_keys[i];
      setTimeout(function (i, random_key) {
        return function () {
          static_popups[random_key].setAttribute('data-status', 'active');
          static_popups[random_key].setAttribute('data-current', 1);
        };
      }(i, random_key), delay);
    }
  } // Activate chat pop-up


  setTimeout(function () {
    chat_popup[0].setAttribute('data-status', 'active');
    chat_popup[0].setAttribute('data-current', 1);
    Object(_chat__WEBPACK_IMPORTED_MODULE_0__["chat"])();
  }, 4000);
};

const timedPopups = () => {
  let closed_items = document.querySelectorAll('[data-status="inactive"]');
  if (!closed_items) return false;
  setInterval(function () {
    if (closed_items.length >= 1) {
      let random_closed_item = closed_items[Math.floor(Math.random() * closed_items.length)];
      random_closed_item.setAttribute('data-status', 'active');
      random_closed_item.setAttribute('data-current', 1);
      random_closed_item.style = '';
    }
  }, 200); //20000
};

/* harmony default export */ __webpack_exports__["default"] = (activate);

/***/ }),

/***/ "./src/js/modules/chat.js":
/*!********************************!*\
  !*** ./src/js/modules/chat.js ***!
  \********************************/
/*! exports provided: chat, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chat", function() { return chat; });
const chat = () => {
  let chat_list = document.getElementsByClassName('chat-list')[0];
  if (!chat_list) return false;
  setTimeout(function () {
    chat_list.setAttribute('data-message', 1);
  }, 300);
  setTimeout(function () {
    chat_list.setAttribute('data-message', 2);
  }, 600);
  setTimeout(function () {
    chat_list.setAttribute('data-message', 3);
  }, 2400);
  setTimeout(function () {
    chat_list.setAttribute('data-message', 4);
  }, 5500);
  setTimeout(function () {
    chat_list.setAttribute('data-message', 5);
  }, 9500);
  setTimeout(function () {
    chat_list.setAttribute('data-message', 6);
  }, 10500);
  setTimeout(function () {
    chat_list.setAttribute('data-message', 7);
  }, 16000);
  setTimeout(function () {
    chat_list.setAttribute('data-message', 8);
  }, 18000);
  setTimeout(function () {
    chat_list.setAttribute('data-message', 9);
  }, 20000);
};

const none = () => {};

/* harmony default export */ __webpack_exports__["default"] = (none);

/***/ }),

/***/ "./src/js/modules/controls.js":
/*!************************************!*\
  !*** ./src/js/modules/controls.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const controls = () => {
  nextButtons();
  closeButtons();
};

const nextButtons = () => {
  let next_buttons = document.querySelectorAll('[data-next]');
  if (!next_buttons) return false;

  for (const next_button of next_buttons) {
    next_button.addEventListener('click', function (e) {
      let next_step = next_button.getAttribute('data-next');
      setTimeout(function () {
        next_button.parentElement.parentElement.setAttribute('data-current', next_step);
      }, 100);
    });
  }
};

const closeButtons = () => {
  let close_buttons = document.getElementsByClassName('close'),
      machine_logo = document.getElementById('machine-logo'),
      information_page = document.getElementById('information-page'),
      closing_counter = 0;
  if (!close_buttons || !machine_logo) return false;

  for (const close_button of close_buttons) {
    close_button.addEventListener('click', function (e) {
      let closed_items = document.querySelectorAll('[data-status="inactive"]');

      if (close_button.classList.contains('button')) {
        close_button.parentElement.parentElement.setAttribute('data-status', 'inactive');
        close_button.parentElement.parentElement.setAttribute('data-current', 0);
      } else {
        close_button.parentElement.setAttribute('data-status', 'inactive');
        close_button.parentElement.setAttribute('data-current', 0);
      }

      if (close_button.parentElement.hasAttribute('data-message')) close_button.parentElement.removeAttribute('data-message');

      if (closed_items.length >= 9) {
        let random_closed_item = closed_items[Math.floor(Math.random() * closed_items.length)];
        random_closed_item.setAttribute('data-status', 'active');
        random_closed_item.setAttribute('data-current', 1);
        random_closed_item.style = '';
      }

      closing_counter++;
      if (closing_counter == 2) window.open(information_page.getAttribute('href'), '_blank').focus();
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (controls);

/***/ }),

/***/ "./src/js/modules/draggable.js":
/*!*************************************!*\
  !*** ./src/js/modules/draggable.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const draggable = () => {
  let els = document.getElementsByClassName('draggable'),
      orderable = document.getElementsByClassName('orderable'),
      z_order = 10;
  if (!els || !orderable) return false;

  for (const item of orderable) {
    item.addEventListener('click', function (e) {
      item.style.zIndex = z_order;
      z_order++;
    });
  }

  for (const el of els) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    if (document.getElementById(el.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(el.id + "header").onmousedown = dragMouseDown;
    } else {// otherwise, move the DIV from anywhere inside the DIV:
    }

    el.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event; // e.preventDefault();
      // get the mouse cursor position at startup:

      pos3 = e.clientX;
      pos4 = e.clientY;
      el.style.zIndex = z_order;
      z_order++;
      document.onmouseup = closeDragElement; // call a function whenever the cursor moves:

      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event; // e.preventDefault();
      // calculate the new cursor position:

      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY; // set the element's new position:

      el.style.top = el.offsetTop - pos2 + "px";
      el.style.left = el.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (draggable);

/***/ }),

/***/ "./src/js/modules/eye.js":
/*!*******************************!*\
  !*** ./src/js/modules/eye.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const eye = () => {
  let pupil = document.getElementsByClassName('pupil')[0];
  if (!pupil) return false;
  document.addEventListener("mousemove", e => {
    let position = pupil.parentElement.parentElement.getBoundingClientRect(),
        height = pupil.parentElement.parentElement.offsetHeight,
        width = pupil.parentElement.parentElement.offsetWidth;
    let direction = '';

    if (e.clientY > position.top + height) {
      direction += 's';
    } else if (e.clientY < position.top) {
      direction += 'n';
    }

    if (e.clientX > position.left + width) {
      direction += 'e';
    } else if (e.clientX < position.left) {
      direction += 'w';
    }

    pupil.setAttribute('data-coord', direction);
    e.stopPropagation();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (eye);

/***/ }),

/***/ "./src/js/modules/helloWorld.js":
/*!**************************************!*\
  !*** ./src/js/modules/helloWorld.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const helloWorld = () => {// console.log('%cBGN\n' + '%cBuilt by BGN Agency:\n' + '%chttps://www.bgn.agency/', 'font-family: Georgia;font-size: 3em;font-weight: bold;color: #f8bdd7;', 'font-size: 1em;color: #f8bdd7;', 'font-size: 1em;');
};

/* harmony default export */ __webpack_exports__["default"] = (helloWorld);

/***/ }),

/***/ "./src/js/modules/scrollTo.js":
/*!************************************!*\
  !*** ./src/js/modules/scrollTo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrollTo = () => {
  const items = document.querySelectorAll('[data-scroll]');
  if (!items) return false;

  for (const item of items) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      document.querySelector(href).scrollIntoView({
        behavior: "smooth"
      });
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (scrollTo);

/***/ }),

/***/ "./src/js/modules/swiperArticles.js":
/*!******************************************!*\
  !*** ./src/js/modules/swiperArticles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["A11y"]]);

const articlesSwiper = () => {
  const swiper = document.querySelectorAll('[data-articles-swiper]');
  if (!swiper) return false;
  var testimoinal_swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('[data-articles-swiper]', {
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: '.articles-swiper-button-next',
      prevEl: '.articles-swiper-button-prev'
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (articlesSwiper);

/***/ }),

/***/ "./src/js/modules/timeline.js":
/*!************************************!*\
  !*** ./src/js/modules/timeline.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const timeline = () => {
  let parent = document.getElementsByClassName('timeline')[0],
      outer = document.getElementsByClassName('timeline__items')[0],
      items = document.getElementsByClassName('timeline__item'),
      panel = document.getElementsByClassName('timeline__details')[0],
      point = document.getElementsByClassName('timeline__scroll-point')[0],
      close = document.getElementsByClassName('timeline__details__back')[0];
  if (!parent) return false;

  for (const item of items) {
    item.addEventListener('click', function (e) {
      let delay = parent.classList.contains('open-panel') ? 400 : 0;
      if (parent.classList.contains('open-panel')) parent.classList.remove('open-panel');
      setTimeout(() => {
        let timeline_date = this.querySelector('[name="timeline_date"]').innerHTML,
            timeline_year = this.querySelector('[name="timeline_year"]').innerHTML,
            timeline_image = this.querySelector('[name="timeline_image"]') ? this.querySelector('[name="timeline_image"]').value : '',
            timeline_title = this.querySelector('[name="timeline_title"]').innerHTML,
            timeline_text = this.querySelector('[name="timeline_text"]').value;
        if (timeline_date) panel.querySelector('.timeline__date').textContent = timeline_date;
        if (timeline_year) panel.querySelector('.timeline__year').textContent = timeline_year;
        if (timeline_image) panel.querySelector('.timeline__details__image').src = timeline_image;
        if (timeline_title) panel.querySelector('.timeline__details__title').textContent = timeline_title;
        if (timeline_text) panel.querySelector('.timeline__text').innerHTML = timeline_text;
        parent.classList.add('open-panel');
      }, delay);
    });
    outer.addEventListener('scroll', e => {
      let max_scroll = outer.querySelector('.timeline__items-inner').offsetHeight - outer.offsetHeight;
      point.style.top = outer.scrollTop / max_scroll * 100 + '%';
    });
    close.addEventListener('click', function (e) {
      parent.classList.remove('open-panel');
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (timeline);

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/js/index.js","manifest","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMgc3luYyBcXC4oanMpJC8iLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvYWN0aXZhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvY2hhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9kcmFnZ2FibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvZXllLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2hlbGxvV29ybGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvc2Nyb2xsVG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvc3dpcGVyQXJ0aWNsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvdGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzP2NiYjciXSwibmFtZXMiOlsicmVxdWlyZWRNb2R1bGVzIiwicmVxdWlyZSIsImtleXMiLCJtYXAiLCJrZXkiLCJkZWZhdWx0IiwiYWN0aXZhdGUiLCJsb2FkaW5nQmFyIiwic2V0VGltZW91dCIsInNob3dQb3B1cHMiLCJsb2FkaW5nX2JhciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsInN0YXRpY19wb3B1cHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibXVsdGlzdGVwX3BvcHVwcyIsImNoYXRfcG9wdXAiLCJsZW5ndGgiLCJzZWxlY3RvciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbV9tdWx0aXN0ZXBfcG9wdXAiLCJyYW5kb21fa2V5cyIsInIiLCJpbmRleE9mIiwicHVzaCIsImkiLCJkZWxheSIsInJhbmRvbV9rZXkiLCJjaGF0IiwidGltZWRQb3B1cHMiLCJjbG9zZWRfaXRlbXMiLCJzZXRJbnRlcnZhbCIsInJhbmRvbV9jbG9zZWRfaXRlbSIsInN0eWxlIiwiY2hhdF9saXN0Iiwibm9uZSIsImNvbnRyb2xzIiwibmV4dEJ1dHRvbnMiLCJjbG9zZUJ1dHRvbnMiLCJuZXh0X2J1dHRvbnMiLCJuZXh0X2J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwibmV4dF9zdGVwIiwiZ2V0QXR0cmlidXRlIiwicGFyZW50RWxlbWVudCIsImNsb3NlX2J1dHRvbnMiLCJtYWNoaW5lX2xvZ28iLCJnZXRFbGVtZW50QnlJZCIsImluZm9ybWF0aW9uX3BhZ2UiLCJjbG9zaW5nX2NvdW50ZXIiLCJjbG9zZV9idXR0b24iLCJjb250YWlucyIsImhhc0F0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIndpbmRvdyIsIm9wZW4iLCJmb2N1cyIsImRyYWdnYWJsZSIsImVscyIsIm9yZGVyYWJsZSIsInpfb3JkZXIiLCJpdGVtIiwiekluZGV4IiwiZWwiLCJwb3MxIiwicG9zMiIsInBvczMiLCJwb3M0IiwiaWQiLCJvbm1vdXNlZG93biIsImRyYWdNb3VzZURvd24iLCJldmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwib25tb3VzZXVwIiwiY2xvc2VEcmFnRWxlbWVudCIsIm9ubW91c2Vtb3ZlIiwiZWxlbWVudERyYWciLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsImV5ZSIsInB1cGlsIiwicG9zaXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiZGlyZWN0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwiaGVsbG9Xb3JsZCIsInNjcm9sbFRvIiwiaXRlbXMiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIlN3aXBlciIsInVzZSIsIk5hdmlnYXRpb24iLCJBMTF5IiwiYXJ0aWNsZXNTd2lwZXIiLCJzd2lwZXIiLCJ0ZXN0aW1vaW5hbF9zd2lwZXIiLCJzbGlkZXNQZXJWaWV3IiwibG9vcCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJ0aW1lbGluZSIsInBhcmVudCIsIm91dGVyIiwicGFuZWwiLCJwb2ludCIsImNsb3NlIiwicmVtb3ZlIiwidGltZWxpbmVfZGF0ZSIsImlubmVySFRNTCIsInRpbWVsaW5lX3llYXIiLCJ0aW1lbGluZV9pbWFnZSIsInZhbHVlIiwidGltZWxpbmVfdGl0bGUiLCJ0aW1lbGluZV90ZXh0IiwidGV4dENvbnRlbnQiLCJzcmMiLCJtYXhfc2Nyb2xsIiwic2Nyb2xsVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztBQUNBO0NBR0E7QUFDQTtBQUNBOztBQUNBLE1BQU1BLGVBQWUsR0FBR0MsZ0VBQXhCOztBQUNBRCxlQUFlLENBQUNFLElBQWhCLEdBQXVCQyxHQUF2QixDQUEyQkMsR0FBRyxJQUFJO0FBQ2hDSixpQkFBZSxDQUFDSSxHQUFELENBQWYsQ0FBcUJDLE9BQXJCO0FBQ0QsQ0FGRCxFOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRTs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUNyQkMsWUFBVTtBQUNWQyxZQUFVLENBQUMsWUFBVztBQUFFQyxjQUFVO0FBQUksR0FBNUIsRUFBOEIsSUFBOUIsQ0FBVixDQUZxQixDQUdyQjtBQUNELENBSkQ7O0FBTUEsTUFBTUYsVUFBVSxHQUFHLE1BQU07QUFFdkIs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QixZQUFLQyxhQUFMLEVBQXFCVixLQUFLLENBQUNsQixhQUFOLENBQW9CLGlCQUFwQixFQUF1Q3VCLFNBQXZDLEdBQW1ESyxhQUFuRDtBQUVyQlosY0FBTSxDQUFDMUcsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsWUFBckI7QUFFRCxPQWhCUyxFQWdCUGlCLEtBaEJPLENBQVY7QUFrQkQsS0F4QkQ7QUEwQkF5RixTQUFLLENBQUMxRSxnQkFBTixDQUF1QixRQUF2QixFQUFrQ0MsQ0FBRCxJQUFPO0FBQ3RDLFVBQUl1RixVQUFVLEdBQUdkLEtBQUssQ0FBQ2pCLGFBQU4sQ0FBb0Isd0JBQXBCLEVBQThDVixZQUE5QyxHQUE2RDJCLEtBQUssQ0FBQzNCLFlBQXBGO0FBQ0E2QixXQUFLLENBQUNwRixLQUFOLENBQVk4QyxHQUFaLEdBQW9Cb0MsS0FBSyxDQUFDZSxTQUFOLEdBQWtCRCxVQUFsQixHQUErQixHQUFqQyxHQUF5QyxHQUEzRDtBQUNELEtBSEQ7QUFLQVgsU0FBSyxDQUFDN0UsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBU0MsQ0FBVCxFQUFZO0FBQzFDd0UsWUFBTSxDQUFDMUcsU0FBUCxDQUFpQitHLE1BQWpCLENBQXdCLFlBQXhCO0FBQ0QsS0FGRDtBQUlEO0FBRUYsQ0FsREQ7O0FBb0RlTix1RUFBZixFOzs7Ozs7Ozs7OztBQ3REQSx1QyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBTY3NzIERPIE5PVCBERUxFVEVcbmltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnO1xuXG4vLyBJbXBvcnQgZXh0ZXJuYWwgZGVwZW5kZW5jaWVzXG5pbXBvcnQgXCJiYWJlbC1wb2x5ZmlsbFwiO1xuaW1wb3J0ICdjdXN0b20tZXZlbnQtcG9seWZpbGwvcG9seWZpbGwuanMnO1xuXG4vLyBCdW5kbGUgbW9kdWxlIGZpbGVzIG9uIGJ1aWxkXG4vLyBodHRwczovL21lZGl1bS5jb20vQHN2aW5rbGUvZ2V0dGluZy1zdGFydGVkLXdpdGgtd2VicGFjay1hbmQtZXM2LW1vZHVsZXMtYzQ2NWQwNTNkOTg4XG4vLyBJc3N1ZSB3aXRoIGJlbG93IGlzIG9yZGVyIG9mIGxvYWQgaXMgc2V0IGJ5IGFscGhhYmV0aWNhbCBuYW1pbmcgb2YgZmlsZXMuLi4/XG5jb25zdCByZXF1aXJlZE1vZHVsZXMgPSByZXF1aXJlLmNvbnRleHQoXCIuL21vZHVsZXMvXCIsIHRydWUsIC9cXC4oanMpJC9pKTtcbnJlcXVpcmVkTW9kdWxlcy5rZXlzKCkubWFwKGtleSA9PiB7XG4gIHJlcXVpcmVkTW9kdWxlcyhrZXkpLmRlZmF1bHQoKTtcbn0pOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hY3RpdmF0ZS5qc1wiOiBcIi4vc3JjL2pzL21vZHVsZXMvYWN0aXZhdGUuanNcIixcblx0XCIuL2NoYXQuanNcIjogXCIuL3NyYy9qcy9tb2R1bGVzL2NoYXQuanNcIixcblx0XCIuL2NvbnRyb2xzLmpzXCI6IFwiLi9zcmMvanMvbW9kdWxlcy9jb250cm9scy5qc1wiLFxuXHRcIi4vZHJhZ2dhYmxlLmpzXCI6IFwiLi9zcmMvanMvbW9kdWxlcy9kcmFnZ2FibGUuanNcIixcblx0XCIuL2V5ZS5qc1wiOiBcIi4vc3JjL2pzL21vZHVsZXMvZXllLmpzXCIsXG5cdFwiLi9oZWxsb1dvcmxkLmpzXCI6IFwiLi9zcmMvanMvbW9kdWxlcy9oZWxsb1dvcmxkLmpzXCIsXG5cdFwiLi9zY3JvbGxUby5qc1wiOiBcIi4vc3JjL2pzL21vZHVsZXMvc2Nyb2xsVG8uanNcIixcblx0XCIuL3N3aXBlckFydGljbGVzLmpzXCI6IFwiLi9zcmMvanMvbW9kdWxlcy9zd2lwZXJBcnRpY2xlcy5qc1wiLFxuXHRcIi4vdGltZWxpbmUuanNcIjogXCIuL3NyYy9qcy9tb2R1bGVzL3RpbWVsaW5lLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2pzL21vZHVsZXMgc3luYyByZWN1cnNpdmUgXFxcXC4oanMpJC9cIjsiLCJpbXBvcnQgeyBjaGF0IH0gZnJvbSAnLi9jaGF0JztcblxuY29uc3QgYWN0aXZhdGUgPSAoKSA9PiB7XG4gIGxvYWRpbmdCYXIoKTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgc2hvd1BvcHVwcygpIH0sIDkwMDApXG4gIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRpbWVkUG9wdXBzKCkgfSwgMTQpIC8vIDE0MDAwXG59O1xuXG5jb25zdCBsb2FkaW5nQmFyID0gKCkgPT4ge1xuXG4gIGxldCBsb2FkaW5nX2JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvYWRpbmcnKVswXTtcblxuICBpZiAoIWxvYWRpbmdfYmFyKSByZXR1cm4gZmFsc2U7XG5cbiAgbG9hZGluZ19iYXIuY2xhc3NMaXN0LmFkZCgnYmVnaW4nKTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgbG9hZGluZ19iYXIuc2V0QXR0cmlidXRlKCdkYXRhLW1lc3NhZ2UnLCAxKSB9LCAwKTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgbG9hZGluZ19iYXIuc2V0QXR0cmlidXRlKCdkYXRhLW1lc3NhZ2UnLCAyKSB9LCAzMDAwKTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgbG9hZGluZ19iYXIuc2V0QXR0cmlidXRlKCdkYXRhLW1lc3NhZ2UnLCAzKSB9LCA2MDAwKTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgbG9hZGluZ19iYXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKSB9LCA5MDAwKTtcbn1cblxuY29uc3Qgc2hvd1BvcHVwcyA9ICgpID0+IHtcblxuICBsZXQgc3RhdGljX3BvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3AtdXAuc3RhdGljJyksXG4gICAgICBtdWx0aXN0ZXBfcG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcC11cC5tdWx0aS1zdGVwJyksXG4gICAgICBjaGF0X3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcC11cC5jaGF0Jyk7XG5cbiAgaWYgKHN0YXRpY19wb3B1cHMubGVuZ3RoIDwgMSB8fCBtdWx0aXN0ZXBfcG9wdXBzLmxlbmd0aCA8IDEpIHJldHVybiBmYWxzZTtcblxuICAvLyBTZWxlY3RzIDEgb3IgMiBhdCByYW5kb20gdG8gcmFuZG9tbHkgc2hvdyBhbiBpbnRlcmFjdGl2ZSBwb3B1cCBvciAzIHN0YXRpYyBwb3B1cHMuXG4gIGNvbnN0IHNlbGVjdG9yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgKyAxXG5cbiAgaWYgKHNlbGVjdG9yID09IDEpIHtcblxuICAgIC8vIEFjdGl2YXRlIG9uZSByYW5kb21seSBzZWxlY3RlZCBtdWx0aXN0ZXAgcG9wLXVwXG5cbiAgICBjb25zdCByYW5kb21fbXVsdGlzdGVwX3BvcHVwID0gbXVsdGlzdGVwX3BvcHVwc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtdWx0aXN0ZXBfcG9wdXBzLmxlbmd0aCldO1xuXG4gICAgcmFuZG9tX211bHRpc3RlcF9wb3B1cC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdHVzJywgJ2FjdGl2ZScpO1xuICAgIHJhbmRvbV9tdWx0aXN0ZXBfcG9wdXAuc2V0QXR0cmlidXRlKCdkYXRhLWN1cnJlbnQnLCAxKTtcblxuICB9IGVsc2UgaWYgKHNlbGVjdG9yID09IDIpIHtcblxuICAgIC8vIEFjdGl2YXRlIHRocmVlIHJhbmRvbWx5IHNlbGVjdGVkIHN0YXRpYyBwb3AtdXBzXG5cbiAgICBsZXQgcmFuZG9tX2tleXMgPSBbXTtcblxuICAgIGlmICggc3RhdGljX3BvcHVwcyApIHtcbiAgICAgIHdoaWxlICggcmFuZG9tX2tleXMubGVuZ3RoIDwgMyApIHtcbiAgICAgICAgdmFyIHIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoc3RhdGljX3BvcHVwcy5sZW5ndGgpICsgMSlcbiAgICAgICAgaWYocmFuZG9tX2tleXMuaW5kZXhPZihyLTEpID09PSAtMSkgcmFuZG9tX2tleXMucHVzaChyLTEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAyOyBpID49IDA7IGktLSkge1xuXG4gICAgICB2YXIgZGVsYXkgPSAoIGkgKyAxICkgKiAxNTAwLFxuICAgICAgICAgIHJhbmRvbV9rZXkgPSByYW5kb21fa2V5c1tpXTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoaSwgcmFuZG9tX2tleSkgeyByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHN0YXRpY19wb3B1cHNbcmFuZG9tX2tleV0uc2V0QXR0cmlidXRlKCdkYXRhLXN0YXR1cycsICdhY3RpdmUnKTtcbiAgICAgICAgc3RhdGljX3BvcHVwc1tyYW5kb21fa2V5XS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY3VycmVudCcsIDEpO1xuICAgICAgfX0oaSwgcmFuZG9tX2tleSksIGRlbGF5KTtcblxuICAgIH1cbiAgfVxuXG4gIC8vIEFjdGl2YXRlIGNoYXQgcG9wLXVwXG5cbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBjaGF0X3BvcHVwWzBdLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0dXMnLCAnYWN0aXZlJyk7XG4gICAgY2hhdF9wb3B1cFswXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY3VycmVudCcsIDEpO1xuICAgIGNoYXQoKTtcbiAgfSwgNDAwMCk7XG5cbn1cblxuY29uc3QgdGltZWRQb3B1cHMgPSAoKSA9PiB7XG5cbiAgbGV0IGNsb3NlZF9pdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXN0YXR1cz1cImluYWN0aXZlXCJdJyk7XG5cbiAgaWYgKCFjbG9zZWRfaXRlbXMpIHJldHVybiBmYWxzZTtcblxuICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuXG4gICAgaWYgKGNsb3NlZF9pdGVtcy5sZW5ndGggPj0gMSkge1xuXG4gICAgICBsZXQgcmFuZG9tX2Nsb3NlZF9pdGVtID0gY2xvc2VkX2l0ZW1zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNsb3NlZF9pdGVtcy5sZW5ndGgpXTtcblxuICAgICAgcmFuZG9tX2Nsb3NlZF9pdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0dXMnLCAnYWN0aXZlJyk7XG4gICAgICByYW5kb21fY2xvc2VkX2l0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWN1cnJlbnQnLCAxKTtcbiAgICAgIHJhbmRvbV9jbG9zZWRfaXRlbS5zdHlsZSA9ICcnO1xuXG4gICAgfVxuXG4gIH0sIDIwMCk7IC8vMjAwMDBcblxufVxuXG5leHBvcnQgZGVmYXVsdCBhY3RpdmF0ZTsiLCJcbmV4cG9ydCBjb25zdCBjaGF0ID0gKCkgPT4ge1xuXG4gIGxldCBjaGF0X2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaGF0LWxpc3QnKVswXTtcblxuICBpZiAoIWNoYXRfbGlzdCkgcmV0dXJuIGZhbHNlO1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNoYXRfbGlzdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWVzc2FnZScsIDEpOyB9LCAzMDApO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjaGF0X2xpc3Quc2V0QXR0cmlidXRlKCdkYXRhLW1lc3NhZ2UnLCAyKTsgfSwgNjAwKTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2hhdF9saXN0LnNldEF0dHJpYnV0ZSgnZGF0YS1tZXNzYWdlJywgMyk7IH0sIDI0MDApO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjaGF0X2xpc3Quc2V0QXR0cmlidXRlKCdkYXRhLW1lc3NhZ2UnLCA0KTsgfSwgNTUwMCk7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNoYXRfbGlzdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWVzc2FnZScsIDUpOyB9LCA5NTAwKTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2hhdF9saXN0LnNldEF0dHJpYnV0ZSgnZGF0YS1tZXNzYWdlJywgNik7IH0sIDEwNTAwKTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2hhdF9saXN0LnNldEF0dHJpYnV0ZSgnZGF0YS1tZXNzYWdlJywgNyk7IH0sIDE2MDAwKTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2hhdF9saXN0LnNldEF0dHJpYnV0ZSgnZGF0YS1tZXNzYWdlJywgOCk7IH0sIDE4MDAwKTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2hhdF9saXN0LnNldEF0dHJpYnV0ZSgnZGF0YS1tZXNzYWdlJywgOSk7IH0sIDIwMDAwKTtcblxufVxuXG5jb25zdCBub25lID0gKCkgPT4ge31cblxuZXhwb3J0IGRlZmF1bHQgbm9uZTsgIiwiXG5jb25zdCBjb250cm9scyA9ICgpID0+IHtcbiAgbmV4dEJ1dHRvbnMoKTtcbiAgY2xvc2VCdXR0b25zKCk7XG59XG5cbmNvbnN0IG5leHRCdXR0b25zID0gKCkgPT4ge1xuXG4gIGxldCBuZXh0X2J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uZXh0XScpO1xuXG4gIGlmICghbmV4dF9idXR0b25zKSByZXR1cm4gZmFsc2U7XG5cbiAgZm9yIChjb25zdCBuZXh0X2J1dHRvbiBvZiBuZXh0X2J1dHRvbnMpIHtcbiAgICBuZXh0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCBuZXh0X3N0ZXAgPSBuZXh0X2J1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmV4dCcpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgbmV4dF9idXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jdXJyZW50JywgbmV4dF9zdGVwKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGNsb3NlQnV0dG9ucyA9ICgpID0+IHtcblxuICBsZXQgY2xvc2VfYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nsb3NlJyksXG4gICAgICBtYWNoaW5lX2xvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFjaGluZS1sb2dvJyksXG4gICAgICBpbmZvcm1hdGlvbl9wYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm9ybWF0aW9uLXBhZ2UnKSxcbiAgICAgIGNsb3NpbmdfY291bnRlciA9IDA7XG5cbiAgaWYgKCFjbG9zZV9idXR0b25zIHx8ICFtYWNoaW5lX2xvZ28pIHJldHVybiBmYWxzZTtcblxuICBmb3IgKGNvbnN0IGNsb3NlX2J1dHRvbiBvZiBjbG9zZV9idXR0b25zKSB7XG4gICAgY2xvc2VfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkgeyBcblxuICAgICAgbGV0IGNsb3NlZF9pdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXN0YXR1cz1cImluYWN0aXZlXCJdJyk7XG5cbiAgICAgIGlmICggY2xvc2VfYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9uJykgKSB7XG4gICAgICAgIGNsb3NlX2J1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXR1cycsICdpbmFjdGl2ZScpO1xuICAgICAgICBjbG9zZV9idXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jdXJyZW50JywgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9zZV9idXR0b24ucGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdHVzJywgJ2luYWN0aXZlJyk7XG4gICAgICAgIGNsb3NlX2J1dHRvbi5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jdXJyZW50JywgMCk7XG4gICAgICB9XG5cbiAgICAgIGlmICggY2xvc2VfYnV0dG9uLnBhcmVudEVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLW1lc3NhZ2UnKSApIGNsb3NlX2J1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1tZXNzYWdlJyk7XG5cbiAgICAgIGlmICggY2xvc2VkX2l0ZW1zLmxlbmd0aCA+PSA5ICkge1xuXG4gICAgICAgIGxldCByYW5kb21fY2xvc2VkX2l0ZW0gPSBjbG9zZWRfaXRlbXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2xvc2VkX2l0ZW1zLmxlbmd0aCldO1xuXG4gICAgICAgIHJhbmRvbV9jbG9zZWRfaXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdHVzJywgJ2FjdGl2ZScpO1xuICAgICAgICByYW5kb21fY2xvc2VkX2l0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWN1cnJlbnQnLCAxKTtcbiAgICAgICAgcmFuZG9tX2Nsb3NlZF9pdGVtLnN0eWxlID0gJyc7XG5cbiAgICAgIH1cblxuICAgICAgY2xvc2luZ19jb3VudGVyKys7XG5cbiAgICAgIGlmICggY2xvc2luZ19jb3VudGVyID09IDIgKSB3aW5kb3cub3BlbihpbmZvcm1hdGlvbl9wYWdlLmdldEF0dHJpYnV0ZSgnaHJlZicpLCAnX2JsYW5rJykuZm9jdXMoKTtcblxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb250cm9scyIsIlxuY29uc3QgZHJhZ2dhYmxlID0gKCkgPT4ge1xuXG4gIGxldCBlbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcmFnZ2FibGUnKSxcbiAgICAgIG9yZGVyYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29yZGVyYWJsZScpLFxuICAgICAgel9vcmRlciA9IDEwO1xuXG4gIGlmICghZWxzIHx8ICFvcmRlcmFibGUpIHJldHVybiBmYWxzZTtcblxuICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb3JkZXJhYmxlKSB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGl0ZW0uc3R5bGUuekluZGV4ID0gel9vcmRlcjtcbiAgICAgIHpfb3JkZXIrKztcbiAgICB9KTtcbiAgfVxuXG4gIGZvciAoY29uc3QgZWwgb2YgZWxzKSB7XG5cbiAgICB2YXIgcG9zMSA9IDAsXG4gICAgICAgIHBvczIgPSAwLFxuICAgICAgICBwb3MzID0gMCxcbiAgICAgICAgcG9zNCA9IDA7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuaWQgKyBcImhlYWRlclwiKSkge1xuICAgICAgLy8gaWYgcHJlc2VudCwgdGhlIGhlYWRlciBpcyB3aGVyZSB5b3UgbW92ZSB0aGUgRElWIGZyb206XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5pZCArIFwiaGVhZGVyXCIpLm9ubW91c2Vkb3duID0gZHJhZ01vdXNlRG93bjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb3RoZXJ3aXNlLCBtb3ZlIHRoZSBESVYgZnJvbSBhbnl3aGVyZSBpbnNpZGUgdGhlIERJVjpcbiAgICB9XG5cbiAgICBlbC5vbm1vdXNlZG93biA9IGRyYWdNb3VzZURvd247XG5cbiAgICBmdW5jdGlvbiBkcmFnTW91c2VEb3duKGUpIHtcbiAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIGdldCB0aGUgbW91c2UgY3Vyc29yIHBvc2l0aW9uIGF0IHN0YXJ0dXA6XG4gICAgICBwb3MzID0gZS5jbGllbnRYO1xuICAgICAgcG9zNCA9IGUuY2xpZW50WTtcbiAgICAgIGVsLnN0eWxlLnpJbmRleCA9IHpfb3JkZXI7XG4gICAgICB6X29yZGVyKys7XG4gICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBjbG9zZURyYWdFbGVtZW50O1xuICAgICAgLy8gY2FsbCBhIGZ1bmN0aW9uIHdoZW5ldmVyIHRoZSBjdXJzb3IgbW92ZXM6XG4gICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IGVsZW1lbnREcmFnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVsZW1lbnREcmFnKGUpIHtcbiAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbmV3IGN1cnNvciBwb3NpdGlvbjpcbiAgICAgIHBvczEgPSBwb3MzIC0gZS5jbGllbnRYO1xuICAgICAgcG9zMiA9IHBvczQgLSBlLmNsaWVudFk7XG4gICAgICBwb3MzID0gZS5jbGllbnRYO1xuICAgICAgcG9zNCA9IGUuY2xpZW50WTtcbiAgICAgIC8vIHNldCB0aGUgZWxlbWVudCdzIG5ldyBwb3NpdGlvbjpcbiAgICAgIGVsLnN0eWxlLnRvcCA9IChlbC5vZmZzZXRUb3AgLSBwb3MyKSArIFwicHhcIjtcbiAgICAgIGVsLnN0eWxlLmxlZnQgPSAoZWwub2Zmc2V0TGVmdCAtIHBvczEpICsgXCJweFwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlRHJhZ0VsZW1lbnQoKSB7XG4gICAgICAvLyBzdG9wIG1vdmluZyB3aGVuIG1vdXNlIGJ1dHRvbiBpcyByZWxlYXNlZDpcbiAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyYWdnYWJsZSIsIlxuXG5jb25zdCBleWUgPSAoKSA9PiB7XG5cbiAgbGV0IHB1cGlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHVwaWwnKVswXTtcblxuICBpZiAoIXB1cGlsKSByZXR1cm4gZmFsc2U7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xuXG4gICAgbGV0IHBvc2l0aW9uID0gcHVwaWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBoZWlnaHQgPSBwdXBpbC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICB3aWR0aCA9IHB1cGlsLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgIGxldCBkaXJlY3Rpb24gPSAnJztcblxuICAgIGlmIChlLmNsaWVudFkgPiBwb3NpdGlvbi50b3AgKyBoZWlnaHQpIHtcbiAgICAgIGRpcmVjdGlvbiArPSAncyc7XG4gICAgfSBlbHNlIGlmIChlLmNsaWVudFkgPCBwb3NpdGlvbi50b3ApIHtcbiAgICAgIGRpcmVjdGlvbiArPSAnbic7XG4gICAgfVxuXG4gICAgaWYgKGUuY2xpZW50WCA+IHBvc2l0aW9uLmxlZnQgKyB3aWR0aCkge1xuICAgICAgZGlyZWN0aW9uICs9ICdlJztcbiAgICB9IGVsc2UgaWYgKGUuY2xpZW50WCA8IHBvc2l0aW9uLmxlZnQpIHtcbiAgICAgIGRpcmVjdGlvbiArPSAndyc7XG4gICAgfVxuXG4gICAgcHVwaWwuc2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkJywgZGlyZWN0aW9uKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gIH0pO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGV5ZSIsImNvbnN0IGhlbGxvV29ybGQgPSAoKSA9PiB7XG5cbiAgLy8gY29uc29sZS5sb2coJyVjQkdOXFxuJyArICclY0J1aWx0IGJ5IEJHTiBBZ2VuY3k6XFxuJyArICclY2h0dHBzOi8vd3d3LmJnbi5hZ2VuY3kvJywgJ2ZvbnQtZmFtaWx5OiBHZW9yZ2lhO2ZvbnQtc2l6ZTogM2VtO2ZvbnQtd2VpZ2h0OiBib2xkO2NvbG9yOiAjZjhiZGQ3OycsICdmb250LXNpemU6IDFlbTtjb2xvcjogI2Y4YmRkNzsnLCAnZm9udC1zaXplOiAxZW07Jyk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhlbGxvV29ybGQ7IiwiXG5jb25zdCBzY3JvbGxUbyA9ICgpID0+IHtcblxuICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNjcm9sbF0nKTtcblxuICBpZiAoIWl0ZW1zKSByZXR1cm4gZmFsc2U7XG5cbiAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG5cbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IGhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhyZWYpLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICB9KTtcblxuICAgIH0pO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBzY3JvbGxUbzsiLCJpbXBvcnQgU3dpcGVyLCB7TmF2aWdhdGlvbiwgQTExeSB9IGZyb20gJ3N3aXBlcic7XG5Td2lwZXIudXNlKFtOYXZpZ2F0aW9uLCBBMTF5XSk7XG5cbmNvbnN0IGFydGljbGVzU3dpcGVyID0gKCkgPT4ge1xuXG4gIGNvbnN0IHN3aXBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFydGljbGVzLXN3aXBlcl0nKTtcblxuICBpZiAoIXN3aXBlcikgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciB0ZXN0aW1vaW5hbF9zd2lwZXIgPSBuZXcgU3dpcGVyKCdbZGF0YS1hcnRpY2xlcy1zd2lwZXJdJywge1xuICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICBsb29wOiB0cnVlLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5hcnRpY2xlcy1zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgcHJldkVsOiAnLmFydGljbGVzLXN3aXBlci1idXR0b24tcHJldicsXG4gICAgfSxcbiAgfSk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXJ0aWNsZXNTd2lwZXI7XG4iLCJcblxuY29uc3QgdGltZWxpbmUgPSAoKSA9PiB7XG5cbiAgbGV0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpbWVsaW5lJylbMF0sXG4gICAgICBvdXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpbWVsaW5lX19pdGVtcycpWzBdLFxuICAgICAgaXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aW1lbGluZV9faXRlbScpLFxuICAgICAgcGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aW1lbGluZV9fZGV0YWlscycpWzBdLFxuICAgICAgcG9pbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aW1lbGluZV9fc2Nyb2xsLXBvaW50JylbMF0sXG4gICAgICBjbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpbWVsaW5lX19kZXRhaWxzX19iYWNrJylbMF07XG5cbiAgaWYgKCFwYXJlbnQpIHJldHVybiBmYWxzZTtcblxuICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcblxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgIGxldCBkZWxheSA9IHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4tcGFuZWwnKSA/IDQwMCA6IDA7XG5cbiAgICAgIGlmICggcGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnb3Blbi1wYW5lbCcpICkgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4tcGFuZWwnKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgbGV0IHRpbWVsaW5lX2RhdGUgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGltZWxpbmVfZGF0ZVwiXScpLmlubmVySFRNTCxcbiAgICAgICAgICAgIHRpbWVsaW5lX3llYXIgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGltZWxpbmVfeWVhclwiXScpLmlubmVySFRNTCxcbiAgICAgICAgICAgIHRpbWVsaW5lX2ltYWdlID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRpbWVsaW5lX2ltYWdlXCJdJykgPyB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGltZWxpbmVfaW1hZ2VcIl0nKS52YWx1ZSA6ICcnLFxuICAgICAgICAgICAgdGltZWxpbmVfdGl0bGUgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGltZWxpbmVfdGl0bGVcIl0nKS5pbm5lckhUTUwsXG4gICAgICAgICAgICB0aW1lbGluZV90ZXh0ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRpbWVsaW5lX3RleHRcIl0nKS52YWx1ZTtcblxuICAgICAgICBpZiAoIHRpbWVsaW5lX2RhdGUgKSBwYW5lbC5xdWVyeVNlbGVjdG9yKCcudGltZWxpbmVfX2RhdGUnKS50ZXh0Q29udGVudCA9IHRpbWVsaW5lX2RhdGU7XG4gICAgICAgIGlmICggdGltZWxpbmVfeWVhciApIHBhbmVsLnF1ZXJ5U2VsZWN0b3IoJy50aW1lbGluZV9feWVhcicpLnRleHRDb250ZW50ID0gdGltZWxpbmVfeWVhcjtcbiAgICAgICAgaWYgKCB0aW1lbGluZV9pbWFnZSApIHBhbmVsLnF1ZXJ5U2VsZWN0b3IoJy50aW1lbGluZV9fZGV0YWlsc19faW1hZ2UnKS5zcmMgPSB0aW1lbGluZV9pbWFnZTtcbiAgICAgICAgaWYgKCB0aW1lbGluZV90aXRsZSApIHBhbmVsLnF1ZXJ5U2VsZWN0b3IoJy50aW1lbGluZV9fZGV0YWlsc19fdGl0bGUnKS50ZXh0Q29udGVudCA9IHRpbWVsaW5lX3RpdGxlO1xuICAgICAgICBpZiAoIHRpbWVsaW5lX3RleHQgKSBwYW5lbC5xdWVyeVNlbGVjdG9yKCcudGltZWxpbmVfX3RleHQnKS5pbm5lckhUTUwgPSB0aW1lbGluZV90ZXh0O1xuXG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdvcGVuLXBhbmVsJyk7XG5cbiAgICAgIH0sIGRlbGF5KTtcblxuICAgIH0pO1xuXG4gICAgb3V0ZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IHtcbiAgICAgIGxldCBtYXhfc2Nyb2xsID0gb3V0ZXIucXVlcnlTZWxlY3RvcignLnRpbWVsaW5lX19pdGVtcy1pbm5lcicpLm9mZnNldEhlaWdodCAtIG91dGVyLm9mZnNldEhlaWdodDtcbiAgICAgIHBvaW50LnN0eWxlLnRvcCA9ICggb3V0ZXIuc2Nyb2xsVG9wIC8gbWF4X3Njcm9sbCAqIDEwMCApICsgJyUnO1xuICAgIH0pO1xuXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3Blbi1wYW5lbCcpO1xuICAgIH0pO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB0aW1lbGluZSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=