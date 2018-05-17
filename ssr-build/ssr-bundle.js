module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/QC5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribers", function() { return subscribers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUrl", function() { return getCurrentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);


var EMPTY$1 = {};

function assign(obj, props) {
	// eslint-disable-next-line guard-for-in
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}

function exec(url, route, opts) {
	var reg = /(?:\?([^#]*))?(#.*)?$/,
	    c = url.match(reg),
	    matches = {},
	    ret;
	if (c && c[1]) {
		var p = c[1].split('&');
		for (var i = 0; i < p.length; i++) {
			var r = p[i].split('=');
			matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
		}
	}
	url = segmentize(url.replace(reg, ''));
	route = segmentize(route || '');
	var max = Math.max(url.length, route.length);
	for (var i$1 = 0; i$1 < max; i$1++) {
		if (route[i$1] && route[i$1].charAt(0) === ':') {
			var param = route[i$1].replace(/(^\:|[+*?]+$)/g, ''),
			    flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
			    plus = ~flags.indexOf('+'),
			    star = ~flags.indexOf('*'),
			    val = url[i$1] || '';
			if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
				ret = false;
				break;
			}
			matches[param] = decodeURIComponent(val);
			if (plus || star) {
				matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
				break;
			}
		} else if (route[i$1] !== url[i$1]) {
			ret = false;
			break;
		}
	}
	if (opts.default !== true && ret === false) {
		return false;
	}
	return matches;
}

function pathRankSort(a, b) {
	return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
	vnode.index = index;
	vnode.rank = rankChild(vnode);
	return vnode.attributes;
}

function segmentize(url) {
	return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
	return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
	return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
	return vnode.attributes.default ? 0 : rank(vnode.attributes.path);
}

var customHistory = null;

var ROUTERS = [];

var subscribers = [];

var EMPTY = {};

function isPreactElement(node) {
	return node.__preactattr_ != null || typeof Symbol !== 'undefined' && node[Symbol.for('preactattr')] != null;
}

function setUrl(url, type) {
	if (type === void 0) type = 'push';

	if (customHistory && customHistory[type]) {
		customHistory[type](url);
	} else if (typeof history !== 'undefined' && history[type + 'State']) {
		history[type + 'State'](null, null, url);
	}
}

function getCurrentUrl() {
	var url;
	if (customHistory && customHistory.location) {
		url = customHistory.location;
	} else if (customHistory && customHistory.getCurrentLocation) {
		url = customHistory.getCurrentLocation();
	} else {
		url = typeof location !== 'undefined' ? location : EMPTY;
	}
	return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
	if (replace === void 0) replace = false;

	if (typeof url !== 'string' && url.url) {
		replace = url.replace;
		url = url.url;
	}

	// only push URL into history if we can handle it
	if (canRoute(url)) {
		setUrl(url, replace ? 'replace' : 'push');
	}

	return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
	for (var i = ROUTERS.length; i--;) {
		if (ROUTERS[i].canRoute(url)) {
			return true;
		}
	}
	return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
	var didRoute = false;
	for (var i = 0; i < ROUTERS.length; i++) {
		if (ROUTERS[i].routeTo(url) === true) {
			didRoute = true;
		}
	}
	for (var i$1 = subscribers.length; i$1--;) {
		subscribers[i$1](url);
	}
	return didRoute;
}

function routeFromLink(node) {
	// only valid elements
	if (!node || !node.getAttribute) {
		return;
	}

	var href = node.getAttribute('href'),
	    target = node.getAttribute('target');

	// ignore links with targets and non-path URLs
	if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
		return;
	}

	// attempt to route, if no match simply cede control to browser
	return route(href);
}

function handleLinkClick(e) {
	if (e.button == 0) {
		routeFromLink(e.currentTarget || e.target || this);
		return prevent(e);
	}
}

function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		e.preventDefault();
	}
	return false;
}

function delegateLinkHandler(e) {
	// ignore events the browser takes care of already:
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}

	var t = e.target;
	do {
		if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href') && isPreactElement(t)) {
			if (t.hasAttribute('native')) {
				return;
			}
			// if link is handled by the router, prevent browser defaults
			if (routeFromLink(t)) {
				return prevent(e);
			}
		}
	} while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
	if (eventListenersInitialized) {
		return;
	}

	if (typeof addEventListener === 'function') {
		if (!customHistory) {
			addEventListener('popstate', function () {
				routeTo(getCurrentUrl());
			});
		}
		addEventListener('click', delegateLinkHandler);
	}
	eventListenersInitialized = true;
}

var Router = function (Component$$1) {
	function Router(props) {
		Component$$1.call(this, props);
		if (props.history) {
			customHistory = props.history;
		}

		this.state = {
			url: props.url || getCurrentUrl()
		};

		initEventListeners();
	}

	if (Component$$1) Router.__proto__ = Component$$1;
	Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	Router.prototype.constructor = Router;

	Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
		if (props.static !== true) {
			return true;
		}
		return props.url !== this.props.url || props.onChange !== this.props.onChange;
	};

	/** Check if the given URL can be matched against any children */
	Router.prototype.canRoute = function canRoute(url) {
		return this.getMatchingChildren(this.props.children, url, false).length > 0;
	};

	/** Re-render children with a new URL to match against. */
	Router.prototype.routeTo = function routeTo(url) {
		this._didRoute = false;
		this.setState({ url: url });

		// if we're in the middle of an update, don't synchronously re-route.
		if (this.updating) {
			return this.canRoute(url);
		}

		this.forceUpdate();
		return this._didRoute;
	};

	Router.prototype.componentWillMount = function componentWillMount() {
		ROUTERS.push(this);
		this.updating = true;
	};

	Router.prototype.componentDidMount = function componentDidMount() {
		var this$1 = this;

		if (customHistory) {
			this.unlisten = customHistory.listen(function (location) {
				this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
			});
		}
		this.updating = false;
	};

	Router.prototype.componentWillUnmount = function componentWillUnmount() {
		if (typeof this.unlisten === 'function') {
			this.unlisten();
		}
		ROUTERS.splice(ROUTERS.indexOf(this), 1);
	};

	Router.prototype.componentWillUpdate = function componentWillUpdate() {
		this.updating = true;
	};

	Router.prototype.componentDidUpdate = function componentDidUpdate() {
		this.updating = false;
	};

	Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
		return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
			var matches = exec(url, vnode.attributes.path, vnode.attributes);
			if (matches) {
				if (invoke !== false) {
					var newProps = { url: url, matches: matches };
					assign(newProps, matches);
					delete newProps.ref;
					delete newProps.key;
					return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["cloneElement"])(vnode, newProps);
				}
				return vnode;
			}
		}).filter(Boolean);
	};

	Router.prototype.render = function render(ref, ref$1) {
		var children = ref.children;
		var onChange = ref.onChange;
		var url = ref$1.url;

		var active = this.getMatchingChildren(children, url, true);

		var current = active[0] || null;
		this._didRoute = !!current;

		var previous = this.previousUrl;
		if (url !== previous) {
			this.previousUrl = url;
			if (typeof onChange === 'function') {
				onChange({
					router: this,
					url: url,
					previous: previous,
					active: active,
					current: current
				});
			}
		}

		return current;
	};

	return Router;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

var Link = function Link(props) {
	return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('a', assign({ onClick: handleLinkClick }, props));
};

var Route = function Route(props) {
	return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(props.component, props);
};

Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;

/* harmony default export */ __webpack_exports__["default"] = (Router);
//# sourceMappingURL=preact-router.es.js.map

/***/ }),

/***/ "48ks":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f6b83d91ec0851dc7710a66a3d33f2ef.svg";

/***/ }),

/***/ "5D9O":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("wVGV")();
}

/***/ }),

/***/ "8+m8":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"card-descr":"card-descr__2xS4n","rating":"rating__2PkoE","rating-stars":"rating-stars__1vnup","rating-reviews":"rating-reviews__np8mS","rating-hours":"rating-hours__Rybjp","description":"description__2EqVK","review-text":"review-text__NdWgw","card-descr__title":"card-descr__title__3HVpe"};

/***/ }),

/***/ "Asjh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./style/index.css
var style = __webpack_require__("rq4c");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/preact-router/dist/preact-router.es.js
var preact_router_es = __webpack_require__("/QC5");

// EXTERNAL MODULE: ../node_modules/preact-router/match.js
var match = __webpack_require__("sw5u");
var match_default = /*#__PURE__*/__webpack_require__.n(match);

// EXTERNAL MODULE: ./components/header/style.css
var header_style = __webpack_require__("u3et");
var header_style_default = /*#__PURE__*/__webpack_require__.n(header_style);

// CONCATENATED MODULE: ./components/header/index.js





var header_Header = function Header() {
	return Object(preact_min["h"])(
		'header',
		{ 'class': header_style_default.a.header },
		Object(preact_min["h"])(
			'nav',
			null,
			Object(preact_min["h"])(
				match["Link"],
				{ activeClassName: header_style_default.a.active, href: '/' },
				'Home'
			),
			Object(preact_min["h"])(
				match["Link"],
				{ activeClassName: header_style_default.a.active, href: '/list' },
				'Boating activities'
			),
			Object(preact_min["h"])(
				match["Link"],
				{ activeClassName: header_style_default.a.active, href: '/profile' },
				'Me'
			),
			Object(preact_min["h"])(
				match["Link"],
				{ activeClassName: header_style_default.a.active, href: '/profile/john' },
				'John'
			)
		)
	);
};

/* harmony default export */ var header = (header_Header);
// CONCATENATED MODULE: ./helpers/index.js
var generateId = function generateId() {
  return Math.random().toString(36).slice(-10);
};
// EXTERNAL MODULE: ./routes/CardList/Card/CardImages/CardImages.css
var CardImages_CardImages = __webpack_require__("fTxL");
var CardImages_default = /*#__PURE__*/__webpack_require__.n(CardImages_CardImages);

// CONCATENATED MODULE: ./routes/CardList/Card/CardImages/CardImages.jsx




var CardImages_CardImages_CardImages = function CardImages(_ref) {
	var images = _ref.images;
	return Object(preact_min["h"])(
		'div',
		{ 'class': 'card-images' },
		Object(preact_min["h"])('img', { 'class': 'card-img', src: images[0], alt: '' }),
		Object(preact_min["h"])(
			'div',
			{ 'class': 'card-img-small' },
			Object(preact_min["h"])('img', { 'class': 'card-img', src: images[1], alt: '' }),
			Object(preact_min["h"])('img', { 'class': 'card-img', src: images[2], alt: '' })
		)
	);
};

/* harmony default export */ var Card_CardImages_CardImages = (CardImages_CardImages_CardImages);
// CONCATENATED MODULE: ./routes/CardList/Card/CardImages/index.js

/* harmony default export */ var Card_CardImages = (Card_CardImages_CardImages);
// EXTERNAL MODULE: ../node_modules/react-text-truncate/lib/index.js
var lib = __webpack_require__("xAwt");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ../node_modules/preact-compat/dist/preact-compat.es.js
var preact_compat_es = __webpack_require__("eW0v");

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("5D9O");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./assets/star.svg
var star = __webpack_require__("WlMw");
var star_default = /*#__PURE__*/__webpack_require__.n(star);

// EXTERNAL MODULE: ./assets/star_half.svg
var star_half = __webpack_require__("48ks");
var star_half_default = /*#__PURE__*/__webpack_require__.n(star_half);

// EXTERNAL MODULE: ./assets/star_empty.svg
var star_empty = __webpack_require__("UWhF");
var star_empty_default = /*#__PURE__*/__webpack_require__.n(star_empty);

// CONCATENATED MODULE: ./routes/Rating/Rating.jsx







var Rating__ref2 = Object(preact_min["h"])(
  'span',
  { 'class': 'rating-stars' },
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_half_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_empty_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_empty_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_empty_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_empty_default.a, alt: '' })
);

var _ref3 = Object(preact_min["h"])(
  'span',
  { 'class': 'rating-stars' },
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_empty_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_empty_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_empty_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_empty_default.a, alt: '' })
);

var _ref4 = Object(preact_min["h"])(
  'span',
  { 'class': 'rating-stars' },
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_half_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_empty_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_empty_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_empty_default.a, alt: '' })
);

var _ref5 = Object(preact_min["h"])(
  'span',
  { 'class': 'rating-stars' },
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_empty_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_empty_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_empty_default.a, alt: '' })
);

var _ref6 = Object(preact_min["h"])(
  'span',
  { 'class': 'rating-stars' },
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_half_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_empty_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_empty_default.a, alt: '' })
);

var _ref7 = Object(preact_min["h"])(
  'span',
  { 'class': 'rating-stars' },
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_empty_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_empty_default.a, alt: '' })
);

var _ref8 = Object(preact_min["h"])(
  'span',
  { 'class': 'rating-stars' },
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_half_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_empty_default.a, alt: '' })
);

var _ref9 = Object(preact_min["h"])(
  'span',
  { 'class': 'rating-stars' },
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_empty_default.a, alt: '' })
);

var _ref10 = Object(preact_min["h"])(
  'span',
  { 'class': 'rating-stars' },
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_half_default.a, alt: '' })
);

var _ref11 = Object(preact_min["h"])(
  'span',
  { 'class': 'rating-stars' },
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' }),
  Object(preact_min["h"])('img', { 'class': 'rating-star', src: star_default.a, alt: '' })
);

var Rating = function Rating(_ref) {
  var rating = _ref.rating;

  switch (rating) {
    case 1:
      return Rating__ref2;
    case 2:
      return _ref3;
    case 3:
      return _ref4;
    case 4:
      return _ref5;
    case 5:
      return _ref6;
    case 6:
      return _ref7;
    case 7:
      return _ref8;
    case 8:
      return _ref9;
    case 9:
      return _ref10;
    default:
      return _ref11;
  }
};

/* harmony default export */ var Rating_Rating = (Rating);
// CONCATENATED MODULE: ./routes/Rating/index.js

/* harmony default export */ var routes_Rating = (Rating_Rating);
// EXTERNAL MODULE: ./routes/CardList/Card/CardDescription/CardDescription.css
var CardDescription_CardDescription = __webpack_require__("8+m8");
var CardDescription_default = /*#__PURE__*/__webpack_require__.n(CardDescription_CardDescription);

// CONCATENATED MODULE: ./routes/CardList/Card/CardDescription/CardDescription.jsx







var CardDescription_CardDescription_CardDescription = function CardDescription(_ref) {
	var title = _ref.title,
	    description = _ref.description,
	    rating = _ref.rating,
	    reviewsNumber = _ref.reviewsNumber,
	    reviews = _ref.reviews,
	    hours = _ref.hours;
	return Object(preact_min["h"])(
		'div',
		{ 'class': 'card-descr' },
		Object(preact_min["h"])(
			'h4',
			{ 'class': 'card-descr__title' },
			title
		),
		Object(preact_min["h"])(
			'div',
			{ 'class': 'rating' },
			Object(preact_min["h"])(routes_Rating, { rating: rating }),
			Object(preact_min["h"])(
				'span',
				{ 'class': 'rating-reviews' },
				reviewsNumber,
				' reviews'
			),
			Object(preact_min["h"])(
				'span',
				{ 'class': 'rating-hours' },
				hours,
				' hours'
			)
		),
		Object(preact_min["h"])(
			'div',
			{ 'class': 'description' },
			Object(preact_min["h"])(lib_default.a, {
				line: 3,
				truncateText: '...',
				text: description
			})
		),
		Object(preact_min["h"])(
			'div',
			{ 'class': 'reviews' },
			reviews.map(function (review) {
				return Object(preact_min["h"])(
					'div',
					{ 'class': 'review-text', key: generateId() },
					Object(preact_min["h"])(lib_default.a, {
						line: 1,
						truncateText: '...',
						text: review
					})
				);
			})
		)
	);
};

/* harmony default export */ var Card_CardDescription_CardDescription = (CardDescription_CardDescription_CardDescription);
// CONCATENATED MODULE: ./routes/CardList/Card/CardDescription/index.js

/* harmony default export */ var Card_CardDescription = (Card_CardDescription_CardDescription);
// EXTERNAL MODULE: ./routes/CardList/Card/CardInfo/CardInfo.css
var CardInfo_CardInfo = __webpack_require__("c7bD");
var CardInfo_default = /*#__PURE__*/__webpack_require__.n(CardInfo_CardInfo);

// EXTERNAL MODULE: ./routes/CardList/Card/CardInfo/CardPermissions/CardPermission/CardPermission.css
var CardPermission_CardPermission = __webpack_require__("s971");
var CardPermission_default = /*#__PURE__*/__webpack_require__.n(CardPermission_CardPermission);

// CONCATENATED MODULE: ./routes/CardList/Card/CardInfo/CardPermissions/CardPermission/CardPermission.jsx




var CardPermission_CardPermission_CardPermission = function CardPermission(_ref) {
	var permission = _ref.permission;
	return Object(preact_min["h"])(
		'div',
		{ 'class': 'card-permission' },
		Object(preact_min["h"])('span', { 'class': 'card-permission__icon ' + permission }),
		Object(preact_min["h"])(
			'span',
			{ 'class': 'card-permission__text' },
			permission,
			' Frendly'
		)
	);
};

/* harmony default export */ var CardPermissions_CardPermission_CardPermission = (CardPermission_CardPermission_CardPermission);
// CONCATENATED MODULE: ./routes/CardList/Card/CardInfo/CardPermissions/CardPermission/index.js

/* harmony default export */ var CardPermissions_CardPermission = (CardPermissions_CardPermission_CardPermission);
// CONCATENATED MODULE: ./routes/CardList/Card/CardInfo/CardPermissions/CardPermissions.jsx





var CardPermissions_CardPermissions = function CardPermissions(_ref) {
	var permissions = _ref.permissions;
	return Object(preact_min["h"])(
		'div',
		null,
		permissions.map(function (permission) {
			return Object(preact_min["h"])(CardPermissions_CardPermission, { key: generateId(), permission: permission });
		})
	);
};

/* harmony default export */ var CardInfo_CardPermissions_CardPermissions = (CardPermissions_CardPermissions);
// CONCATENATED MODULE: ./routes/CardList/Card/CardInfo/CardPermissions/index.js

/* harmony default export */ var CardInfo_CardPermissions = (CardInfo_CardPermissions_CardPermissions);
// CONCATENATED MODULE: ./routes/CardList/Card/CardInfo/CardInfo.jsx



// import './CardInfo.css';

var CardInfo__ref2 = Object(preact_min["h"])(
	'div',
	{ 'class': 'card-price__text-line' },
	'from'
);

var CardInfo__ref3 = Object(preact_min["h"])(
	'span',
	{ 'class': 'card-price__currency-sign' },
	'$'
);

var CardInfo__ref4 = Object(preact_min["h"])(
	'div',
	{ 'class': 'card-price__tax' },
	'+ tax'
);

var CardInfo_CardInfo_CardInfo = function CardInfo(_ref) {
	var price = _ref.price,
	    permissions = _ref.permissions;
	return Object(preact_min["h"])(
		'div',
		{ 'class': 'card-info' },
		Object(preact_min["h"])(
			'div',
			{ 'class': 'card-price' },
			CardInfo__ref2,
			Object(preact_min["h"])(
				'div',
				{ 'class': 'card-price__currency' },
				CardInfo__ref3,
				Object(preact_min["h"])(
					'span',
					null,
					price
				)
			),
			CardInfo__ref4
		),
		Object(preact_min["h"])(CardInfo_CardPermissions, { permissions: permissions })
	);
};

/* harmony default export */ var Card_CardInfo_CardInfo = (CardInfo_CardInfo_CardInfo);
// CONCATENATED MODULE: ./routes/CardList/Card/CardInfo/index.js


/* harmony default export */ var Card_CardInfo = (Card_CardInfo_CardInfo);
// EXTERNAL MODULE: ./routes/CardList/Card/Card.css
var Card_Card = __webpack_require__("VRWg");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_Card);

// CONCATENATED MODULE: ./routes/CardList/Card/Card.jsx







var Card_Card_Card = function Card(_ref) {
	var card = _ref.card;
	return Object(preact_min["h"])(
		'div',
		{ 'class': 'card' },
		Object(preact_min["h"])(
			'div',
			{ 'class': 'container' },
			Object(preact_min["h"])(
				'div',
				{ 'class': 'row' },
				Object(preact_min["h"])(
					'div',
					{ 'class': 'col-sm card-images__wrap' },
					Object(preact_min["h"])(Card_CardImages, { images: card.images })
				),
				Object(preact_min["h"])(
					'div',
					{ 'class': 'col-sm' },
					Object(preact_min["h"])(Card_CardDescription, {
						title: card.title,
						description: card.description,
						rating: card.rating,
						reviewsNumber: card.reviewsNumber,
						reviews: card.reviews,
						hours: card.hours
					})
				),
				Object(preact_min["h"])(
					'div',
					{ 'class': 'col-sm card-info__wrap' },
					Object(preact_min["h"])(Card_CardInfo, {
						price: card.price,
						permissions: card.permissions
					})
				)
			)
		)
	);
};

/* harmony default export */ var CardList_Card_Card = (Card_Card_Card);
// CONCATENATED MODULE: ./routes/CardList/Card/index.js

/* harmony default export */ var CardList_Card = (CardList_Card_Card);
// CONCATENATED MODULE: ./routes/CardList/CardList.jsx





var CardList_CardList = function CardList(_ref) {
	var cards = _ref.cards;
	return Object(preact_min["h"])(
		'div',
		{ 'class': 'cards' },
		cards.map(function (card) {
			return Object(preact_min["h"])(CardList_Card, { card: card, key: generateId() });
		})
	);
};

/* harmony default export */ var routes_CardList_CardList = (CardList_CardList);
// CONCATENATED MODULE: ./routes/CardList/index.js

/* harmony default export */ var routes_CardList = (routes_CardList_CardList);
// EXTERNAL MODULE: ./routes/Container/Container.css
var Container_Container = __webpack_require__("dBL5");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_Container);

// CONCATENATED MODULE: ./routes/Container/Container.jsx





var Container__ref2 = Object(preact_min["h"])(
	'h3',
	{ 'class': 'page-title' },
	'Destin boating activities'
);

var Container_Container_Container = function Container(_ref) {
	var data = _ref.data;
	return Object(preact_min["h"])(
		'div',
		{ 'class': 'container' },
		Object(preact_min["h"])(
			'div',
			{ 'class': 'row' },
			Object(preact_min["h"])(
				'div',
				{ 'class': 'col-sm' },
				Container__ref2,
				Object(preact_min["h"])(routes_CardList, {
					cards: data.cards
				})
			)
		)
	);
};

/* harmony default export */ var routes_Container_Container = (Container_Container_Container);
// CONCATENATED MODULE: ../node_modules/preact-cli/lib/lib/webpack/dummy-loader.js!./routes/Container/index.js

/* harmony default export */ var dummy_loader_js_routes_Container = (routes_Container_Container);
// EXTERNAL MODULE: ./routes/profile/style.css
var profile_style = __webpack_require__("Tv6c");
var profile_style_default = /*#__PURE__*/__webpack_require__.n(profile_style);

// CONCATENATED MODULE: ../node_modules/preact-cli/lib/lib/webpack/dummy-loader.js!./routes/profile/index.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var profile_Profile = function (_Component) {
	_inherits(Profile, _Component);

	function Profile() {
		var _temp, _this, _ret;

		_classCallCheck(this, Profile);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
			time: Date.now(),
			count: 10
		}, _this.updateTime = function () {
			_this.setState({ time: Date.now() });
		}, _this.increment = function () {
			_this.setState({ count: _this.state.count + 1 });
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	// gets called when this route is navigated to
	Profile.prototype.componentDidMount = function componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	};

	// gets called just before navigating away from the route


	Profile.prototype.componentWillUnmount = function componentWillUnmount() {
		clearInterval(this.timer);
	};

	// update the current time


	// Note: `user` comes from the URL, courtesy of our router
	Profile.prototype.render = function render(_ref, _ref2) {
		var user = _ref.user;
		var time = _ref2.time,
		    count = _ref2.count;

		return Object(preact_min["h"])(
			'div',
			{ 'class': profile_style_default.a.profile },
			Object(preact_min["h"])(
				'h1',
				null,
				'Profile: ',
				user
			),
			Object(preact_min["h"])(
				'p',
				null,
				'This is the user profile for a user named ',
				user,
				'.'
			),
			Object(preact_min["h"])(
				'div',
				null,
				'Current time: ',
				new Date(time).toLocaleString()
			),
			Object(preact_min["h"])(
				'p',
				null,
				Object(preact_min["h"])(
					'button',
					{ onClick: this.increment },
					'Click Me'
				),
				' ',
				'Clicked ',
				count,
				' times.'
			)
		);
	};

	return Profile;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./routes/home/style.css
var home_style = __webpack_require__("ZAL5");
var home_style_default = /*#__PURE__*/__webpack_require__.n(home_style);

// CONCATENATED MODULE: ../node_modules/preact-cli/lib/lib/webpack/dummy-loader.js!./routes/home/index.js


function home__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function home__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function home__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var home__ref = Object(preact_min["h"])(
	'h1',
	null,
	'Home'
);

var home__ref2 = Object(preact_min["h"])(
	'p',
	null,
	'This is the Home component.'
);

var home_Home = function (_Component) {
	home__inherits(Home, _Component);

	function Home() {
		home__classCallCheck(this, Home);

		return home__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Home.prototype.render = function render() {
		return Object(preact_min["h"])(
			'div',
			{ 'class': home_style_default.a.home },
			home__ref,
			home__ref2
		);
	};

	return Home;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./data.json
var data_0 = __webpack_require__("wAIJ");
var data_default = /*#__PURE__*/__webpack_require__.n(data_0);

// CONCATENATED MODULE: ./components/app.js


function app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










if (false) {
	require('preact/debug');
}

var app__ref = Object(preact_min["h"])(header, null);

var app__ref2 = Object(preact_min["h"])(home_Home, { path: '/' });

var app__ref3 = Object(preact_min["h"])(dummy_loader_js_routes_Container, { path: '/list', data: data_default.a });

var app__ref4 = Object(preact_min["h"])(profile_Profile, { path: '/profile/', user: 'me' });

var app__ref5 = Object(preact_min["h"])(profile_Profile, { path: '/profile/:user' });

var app_App = function (_Component) {
	app__inherits(App, _Component);

	function App() {
		var _temp, _this, _ret;

		app__classCallCheck(this, App);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = app__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleRoute = function (e) {
			_this.currentUrl = e.url;
		}, _temp), app__possibleConstructorReturn(_this, _ret);
	}

	App.prototype.render = function render() {
		return Object(preact_min["h"])(
			'div',
			{ id: 'app' },
			app__ref,
			Object(preact_min["h"])(
				preact_router_es["Router"],
				{ onChange: this.handleRoute },
				app__ref2,
				app__ref3,
				app__ref4,
				app__ref5
			)
		);
	};

	return App;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./index.js



// Your top level component


// Export your top level component as JSX (for static rendering)
/* harmony default export */ var index = __webpack_exports__["default"] = (app_App);

// Render your app
// if (typeof document !== 'undefined') {
// 	render(
// 		<App />,
// 		document.querySelector('body'),
// 		document.getElementById('app')
// 	);
// }

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "Tv6c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"profile":"profile__1f25-"};

/***/ }),

/***/ "UQex":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "UWhF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "31684a19a621ea2be7ee6bc349976ad5.svg";

/***/ }),

/***/ "VRWg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"card":"card__1l80d","card-images__wrap":"card-images__wrap__zpb9Y","card-info__wrap":"card-info__wrap__2AdvB"};

/***/ }),

/***/ "WlMw":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4869fa984fc8c46bbd294bb65144664e.svg";

/***/ }),

/***/ "ZAL5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home":"home__2Q5nZ"};

/***/ }),

/***/ "c7bD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"card-info":"card-info__l5VBy","card-price":"card-price___cmmB","card-price__text-line":"card-price__text-line__1hWS_","card-price__tax":"card-price__tax__2SUJr","card-price__currency":"card-price__currency__Kk8YT","card-price__currency-sign":"card-price__currency-sign__1Nx0F"};

/***/ }),

/***/ "dBL5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"page-title":"page-title__3BAjJ"};

/***/ }),

/***/ "eW0v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return Children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClass", function() { return createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return isValidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return findDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return unmountComponentAtNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return PureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_renderSubtreeIntoContainer", function() { return renderSubtreeIntoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return extend; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("5D9O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a; });



var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = typeof Symbol !== 'undefined' && Symbol.for && Symbol.for('react.element') || 0xeac7;

var COMPONENT_WRAPPER_KEY = typeof Symbol !== 'undefined' && Symbol.for ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};

var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;

var BYPASS_HOOK = {};

/*global process*/
var DEV = typeof process === 'undefined' || !process.env || "production" !== 'production';

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() {
	return null;
}

// make react think we're react.
var VNode = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function get() {
		return this.nodeName;
	},
	set: function set(v) {
		this.nodeName = v;
	},
	configurable: true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function get() {
		return this.attributes;
	},
	set: function set(v) {
		this.attributes = v;
	},
	configurable: true
});

var oldEventHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].event;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].event = function (e) {
	if (oldEventHook) {
		e = oldEventHook(e);
	}
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};

var oldVnodeHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
		    attrs = vnode.attributes = extend({}, vnode.attributes);

		if (typeof tag === 'function') {
			if (tag[COMPONENT_WRAPPER_KEY] === true || tag.prototype && 'isReactComponent' in tag.prototype) {
				if (vnode.children && String(vnode.children) === '') {
					vnode.children = undefined;
				}
				if (vnode.children) {
					attrs.children = vnode.children;
				}

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		} else {
			if (vnode.children && String(vnode.children) === '') {
				vnode.children = undefined;
			}
			if (vnode.children) {
				attrs.children = vnode.children;
			}

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value !== 0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) {
		oldVnodeHook(vnode);
	}
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
	    a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) {
		extend(vnode.attributes, tag.defaultProps);
	}
	if (a) {
		extend(vnode.attributes, a);
	}
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) {
			if (shouldSanitize = CAMEL_PROPS.test(i)) {
				break;
			}
		}
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i] = a[i];
				}
			}
		}
	}
}

// proxy render() since React returns a Component reference.
function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	// ignore impossible previous renders
	if (prev && prev.parentNode !== parent) {
		prev = null;
	}

	// default to first Element child
	if (!prev && parent) {
		prev = parent.firstElementChild;
	}

	// remove unaffected siblings
	for (var i = parent.childNodes.length; i--;) {
		if (parent.childNodes[i] !== prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(vnode, parent, prev);
	if (parent) {
		parent._preactCompatRendered = out && (out._component || { base: out });
	}
	if (typeof callback === 'function') {
		callback();
	}
	return out && out._component || out;
}

var ContextProvider = function ContextProvider() {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(ContextProvider, { context: parentComponent.context }, vnode);
	var renderContainer = render$1(wrap, container);
	var component = renderContainer._component || renderContainer.base;
	if (callback) {
		callback.call(component, renderContainer);
	}
	return component;
}

function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode === container) {
		Object(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}

var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function map(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		return children.map(fn);
	},
	forEach: function forEach(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		children.forEach(fn);
	},
	count: function count(children) {
		return children && children.length || 0;
	},
	only: function only(children) {
		children = Children.toArray(children);
		if (children.length !== 1) {
			throw new Error('Children.only() expects only one child.');
		}
		return children[0];
	},
	toArray: function toArray(children) {
		if (children == null) {
			return [];
		}
		return ARR.concat(children);
	}
};

/** Track current render() component for ref assignment */
var currentComponent;

function createFactory(type) {
	return createElement.bind(null, type);
}

var DOM = {};
for (var i = ELEMENTS.length; i--;) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i = offset || 0; i < arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		} else if (obj && typeof obj === 'object' && !isValidElement(obj) && (obj.props && obj.type || obj.attributes && obj.nodeName || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c === 'function' && !(c.prototype && c.prototype.render);
}

// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function render() {
			return WrappedComponent(this.props, this.context);
		}
	});
}

function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) {
		return Wrapped === true ? Ctor : Wrapped;
	}

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable: true, value: true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable: true, value: Wrapped });

	return Wrapped;
}

function createElement() {
	var args = [],
	    len = arguments.length;
	while (len--) {
		args[len] = arguments[len];
	}upgradeToVNodes(args, 2);
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["h"].apply(void 0, args));
}

function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
	    type = ref && typeof ref;
	if (currentComponent && (type === 'string' || type === 'number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}

function cloneElement$1(element, props) {
	var children = [],
	    len = arguments.length - 2;
	while (len-- > 0) {
		children[len] = arguments[len + 2];
	}if (!isValidElement(element)) {
		return element;
	}
	var elementProps = element.attributes || element.props;
	var node = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(element.nodeName || element.type, extend({}, elementProps), element.children || elementProps && elementProps.children);
	// Only provide the 3rd argument if needed.
	// Arguments 3+ overwrite element.children in preactCloneElement
	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	} else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["cloneElement"].apply(void 0, cloneArgs));
}

function isValidElement(element) {
	return element && (element instanceof VNode || element.$$typeof === REACT_ELEMENT_TYPE);
}

function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved === null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}

function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName !== 'string') {
		return;
	}
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName === 'textarea' || nodeName.toLowerCase() === 'input' && !/^fil|che|rad/i.test(attributes.type))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}

function applyClassName(vnode) {
	var a = vnode.attributes || (vnode.attributes = {});
	classNameDescriptor.enumerable = 'className' in a;
	if (a.className) {
		a.class = a.className;
	}
	Object.defineProperty(a, 'className', classNameDescriptor);
}

var classNameDescriptor = {
	configurable: true,
	get: function get() {
		return this.class;
	},
	set: function set(v) {
		this.class = v;
	}
};

function extend(base, props) {
	var arguments$1 = arguments;

	for (var i = 1, obj = void 0; i < arguments.length; i++) {
		if (obj = arguments$1[i]) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					base[key] = obj[key];
				}
			}
		}
	}
	return base;
}

function shallowDiffers(a, b) {
	for (var i in a) {
		if (!(i in b)) {
			return true;
		}
	}
	for (var i$1 in b) {
		if (a[i$1] !== b[i$1]) {
			return true;
		}
	}
	return false;
}

function findDOMNode(component) {
	return component && component.base || component;
}

function F() {}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps.call(cl);
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}

// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var i = 0; i < mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key] === 'function') {
				(keyed[key] || (keyed[key] = [])).push(mixin[key]);
			}
		}
	}
	return keyed;
}

// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) {
		if (mixins.hasOwnProperty(key)) {
			proto[key] = multihook(mixins[key].concat(proto[key] || ARR), key === 'getDefaultProps' || key === 'getInitialState' || key === 'getChildContext');
		}
	}
}

function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v === 'function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}

function callMethod(ctx, m, args) {
	if (typeof m === 'string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m === 'function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function () {
		var arguments$1 = arguments;
		var this$1 = this;

		var ret;
		for (var i = 0; i < hooks.length; i++) {
			var r = callMethod(this$1, hooks[i], arguments$1);

			if (skipDuplicates && r != null) {
				if (!ret) {
					ret = {};
				}
				for (var key in r) {
					if (r.hasOwnProperty(key)) {
						ret[key] = r[key];
					}
				}
			} else if (typeof r !== 'undefined') {
				ret = r;
			}
		}
		return ret;
	};
}

function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}

function propsHook(props, context) {
	if (!props) {
		return;
	}

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length === 1 && (typeof c[0] === 'string' || typeof c[0] === 'function' || c[0] instanceof VNode)) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children === 'object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this === 'function' ? this : this.constructor,
		    propTypes = this.propTypes || ctor.propTypes;
		var displayName = this.displayName || ctor.name;

		if (propTypes) {
			__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.checkPropTypes(propTypes, props, 'prop', displayName);
		}
	}
}

function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent === this) {
		currentComponent = null;
	}
}

function Component$1(props, context, opts) {
	__WEBPACK_IMPORTED_MODULE_1_preact__["Component"].call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts !== BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new __WEBPACK_IMPORTED_MODULE_1_preact__["Component"](), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function replaceState(state, callback) {
		var this$1 = this;

		this.setState(state, callback);
		for (var i in this$1.state) {
			if (!(i in state)) {
				delete this$1.state[i];
			}
		}
	},

	getDOMNode: function getDOMNode() {
		return this.base;
	},

	isMounted: function isMounted() {
		return !!this.base;
	}
});

function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function (props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};

var index = {
	version: version,
	DOM: DOM,
	PropTypes: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a,
	Children: Children,
	render: render$1,
	createClass: createClass,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer,
	__spread: extend
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=preact-compat.es.js.map

/***/ }),

/***/ "fTxL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"card-images":"card-images__nbBoU","card-img-small":"card-img-small__2kkCu","card-img":"card-img__3UakO"};

/***/ }),

/***/ "rq4c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "s971":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"card-permission":"card-permission__3XJ4m","card-permission__text":"card-permission__text__2_4bx","card-permission__icon":"card-permission__icon__WxJ2c","pet":"pet__1Kj6z","kid":"kid__1wbOe","senior":"senior__1RnGF","romantic":"romantic__2564J"};

/***/ }),

/***/ "sw5u":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Link = exports.Match = undefined;

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};

var _preact = __webpack_require__("KM04");

var _preactRouter = __webpack_require__("/QC5");

function _objectWithoutProperties(obj, keys) {
	var target = {};for (var i in obj) {
		if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	}return target;
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Match = exports.Match = function (_Component) {
	_inherits(Match, _Component);

	function Match() {
		var _temp, _this, _ret;

		_classCallCheck(this, Match);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function (url) {
			_this.nextUrl = url;
			_this.setState({});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	Match.prototype.componentDidMount = function componentDidMount() {
		_preactRouter.subscribers.push(this.update);
	};

	Match.prototype.componentWillUnmount = function componentWillUnmount() {
		_preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
	};

	Match.prototype.render = function render(props) {
		var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(),
		    path = url.replace(/\?.+$/, '');
		this.nextUrl = null;
		return props.children[0] && props.children[0]({
			url: url,
			path: path,
			matches: path === props.path
		});
	};

	return Match;
}(_preact.Component);

var Link = function Link(_ref) {
	var activeClassName = _ref.activeClassName,
	    path = _ref.path,
	    props = _objectWithoutProperties(_ref, ['activeClassName', 'path']);

	return (0, _preact.h)(Match, { path: path || props.href }, function (_ref2) {
		var matches = _ref2.matches;
		return (0, _preact.h)(_preactRouter.Link, _extends({}, props, { 'class': [props.class || props.className, matches && activeClassName].filter(Boolean).join(' ') }));
	});
};

exports.Link = Link;
exports.default = Match;

Match.Link = Link;

/***/ }),

/***/ "u3et":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"header__2MqSo","active":"active__27Q54"};

/***/ }),

/***/ "wAIJ":
/***/ (function(module, exports) {

module.exports = {"cards":[{"id":1,"title":"Boat Activity 1","description":"Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh.","images":["https://marieclaire.ua/wp-content/uploads/2018/02/1-11-400x320.jpg","https://travelcenter.com.ua/wp-content/uploads/2018/04/viber-image-1-400x320-min.jpg","https://besttour.com.ua/wp-content/uploads/2018/05/90208322-400x320.jpg"],"rating":10,"reviewsNumber":123,"reviews":["Lorem ipsum dolor sit amet, consectetur adipiscing elit eget tincidunt nibh pulvinar","Praesent sapien massa, convallis a pellentesque","These guys rock!"],"hours":6,"price":56,"permissions":["pet","kid"]},{"id":2,"title":"Sail the Black Pearl with Jack Sparrow","description":"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh.","images":["./assets/categories/49_sailing-charters_2x.png","./assets/categories/52_kiteboarding_2x.png","./assets/categories/71_fishing-pole-rentals_2x.png"],"rating":7,"reviewsNumber":123,"reviews":["Lorem ipsum dolor sit amet, consectetur adipiscing elit eget tincidunt nibh pulvinar","Praesent sapien massa, convallis a pellentesque","These guys rock!"],"hours":6,"price":76,"permissions":["kid","senior"]},{"id":3,"title":"Ride Sea Turtles to Cuba","description":"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh.","images":["./assets/categories/71_fishing-pole-rentals_2x.png","./assets/categories/74_bicycle-rentals_2x.png","./assets/categories/78_speed-boat-rentals_2x.png"],"rating":3,"reviewsNumber":123,"reviews":["Lorem ipsum dolor sit amet, consectetur adipiscing elit eget tincidunt nibh pulvinar","Praesent sapien massa, convallis a pellentesque","These guys rock!"],"hours":6,"price":109,"permissions":["pet","romantic"]}]}

/***/ }),

/***/ "wRU+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "wVGV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__("UQex");
var invariant = __webpack_require__("wRU+");
var ReactPropTypesSecret = __webpack_require__("Asjh");

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ "xAwt":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("eW0v"), __webpack_require__("5D9O")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('react'), require('prop-types'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.React, global.propTypes);
    global.TextTruncate = mod.exports;
  }
})(this, function (module, exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var TextTruncate = function (_Component) {
    _inherits(TextTruncate, _Component);

    function TextTruncate() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, TextTruncate);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextTruncate.__proto__ || Object.getPrototypeOf(TextTruncate)).call.apply(_ref, [this].concat(args))), _this), _this.onResize = function () {
        if (_this.rafId) {
          window.cancelAnimationFrame(_this.rafId);
        }
        _this.rafId = window.requestAnimationFrame(_this.update.bind(_this));
      }, _this.onTruncated = function () {
        typeof _this.props.onTruncated === 'function' && setTimeout(function () {
          return _this.props.onTruncated();
        }, 0);
      }, _this.onCalculated = function () {
        typeof _this.props.onCalculated === 'function' && setTimeout(function () {
          return _this.props.onCalculated();
        }, 0);
      }, _this.update = function () {
        var style = window.getComputedStyle(_this.scope);
        var font = [style['font-weight'], style['font-style'], style['font-size'], style['font-family'], style['letter-spacing']].join(' ');
        _this.canvas.font = font;
        _this.forceUpdate();
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TextTruncate, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var canvas = document.createElement('canvas');
        var docFragment = document.createDocumentFragment();
        var style = window.getComputedStyle(this.scope);
        var font = [style['font-weight'], style['font-style'], style['font-size'], style['font-family']].join(' ');

        docFragment.appendChild(canvas);
        this.canvas = canvas.getContext('2d');
        this.canvas.font = font;
        this.forceUpdate();
        window.addEventListener('resize', this.onResize);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
        if (this.rafId) {
          window.cancelAnimationFrame(this.rafId);
        }
      }
    }, {
      key: 'measureWidth',
      value: function measureWidth(text) {
        return Math.ceil(this.canvas.measureText(text).width);
      }
    }, {
      key: 'getRenderText',
      value: function getRenderText() {
        var _props = this.props,
            containerClassName = _props.containerClassName,
            element = _props.element,
            line = _props.line,
            onCalculated = _props.onCalculated,
            onTruncated = _props.onTruncated,
            text = _props.text,
            textElement = _props.textElement,
            textTruncateChild = _props.textTruncateChild,
            truncateText = _props.truncateText,
            maxCalculateTimes = _props.maxCalculateTimes,
            props = _objectWithoutProperties(_props, ['containerClassName', 'element', 'line', 'onCalculated', 'onTruncated', 'text', 'textElement', 'textTruncateChild', 'truncateText', 'maxCalculateTimes']);

        var scopeWidth = this.scope.getBoundingClientRect().width;

        // return if display:none
        if (scopeWidth === 0) {
          return null;
        }

        // return if all of text can be displayed
        if (scopeWidth >= this.measureWidth(text)) {
          return (0, _react.createElement)(textElement, props, text);
        }

        var childText = '';
        if (textTruncateChild && typeof textTruncateChild.type === 'string') {
          var type = textTruncateChild.type;
          if (type.indexOf('span') >= 0 || type.indexOf('a') >= 0) {
            childText = textTruncateChild.props.children;
          }
        }

        var currentPos = 1;
        var maxTextLength = text.length;
        var truncatedText = '';
        var splitPos = 0;
        var startPos = 0;
        var displayLine = line;
        var width = 0;
        var lastIsEng = false;
        var isPrevLineWithoutSpace = false;
        var lastPos = 0;
        var lastSpaceIndex = -1;
        var ext = '';
        var loopCnt = 0;

        while (displayLine-- > 0) {
          ext = displayLine ? '' : truncateText + (childText ? ' ' + childText : '');
          while (currentPos <= maxTextLength) {
            truncatedText = text.substr(startPos, currentPos);
            width = this.measureWidth(truncatedText + ext);
            if (width < scopeWidth) {
              splitPos = text.indexOf(' ', currentPos + 1);
              if (splitPos === -1) {
                currentPos += 1;
                lastIsEng = false;
              } else {
                lastIsEng = true;
                currentPos = splitPos;
              }
            } else {
              do {
                if (loopCnt++ >= maxCalculateTimes) {
                  break;
                }
                truncatedText = text.substr(startPos, currentPos);
                if (!displayLine) {
                  currentPos--;
                }
                if (truncatedText[truncatedText.length - 1] === ' ') {
                  truncatedText = text.substr(startPos, currentPos - 1);
                }
                if (lastIsEng) {
                  lastSpaceIndex = truncatedText.lastIndexOf(' ');
                  if (lastSpaceIndex > -1) {
                    currentPos = lastSpaceIndex;
                    if (displayLine) {
                      currentPos++;
                    }
                    truncatedText = text.substr(startPos, currentPos);
                  } else {
                    currentPos--;
                    truncatedText = text.substr(startPos, currentPos);
                  }
                } else {
                  currentPos--;
                  truncatedText = text.substr(startPos, currentPos);
                }
                width = this.measureWidth(truncatedText + ext);
              } while (width >= scopeWidth && truncatedText.length > 0);
              startPos += currentPos;
              break;
            }
          }

          if (currentPos >= maxTextLength) {
            startPos = maxTextLength;
            break;
          }

          if (lastIsEng && !isPrevLineWithoutSpace && text.substr(lastPos, currentPos).indexOf(' ') === -1) {
            isPrevLineWithoutSpace = text.substr(lastPos, currentPos).indexOf(' ') === -1;
            displayLine--;
          }
          lastPos = currentPos + 1;
        }

        if (startPos === maxTextLength) {
          return (0, _react.createElement)(textElement, props, text);
        }

        this.onTruncated();
        return _react2.default.createElement('div', props, (0, _react.createElement)(textElement, props, text.substr(0, startPos) + truncateText + ' '), textTruncateChild);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props2 = this.props,
            element = _props2.element,
            text = _props2.text,
            _props2$style = _props2.style,
            style = _props2$style === undefined ? {} : _props2$style,
            containerClassName = _props2.containerClassName,
            line = _props2.line,
            onCalculated = _props2.onCalculated,
            onTruncated = _props2.onTruncated,
            textElement = _props2.textElement,
            textTruncateChild = _props2.textTruncateChild,
            truncateText = _props2.truncateText,
            maxCalculateTimes = _props2.maxCalculateTimes,
            props = _objectWithoutProperties(_props2, ['element', 'text', 'style', 'containerClassName', 'line', 'onCalculated', 'onTruncated', 'textElement', 'textTruncateChild', 'truncateText', 'maxCalculateTimes']);

        var fontWeight = style.fontWeight,
            fontStyle = style.fontStyle,
            fontSize = style.fontSize,
            fontFamily = style.fontFamily;

        var renderText = this.scope && line ? this.getRenderText() : (0, _react.createElement)(textElement, props, text);;
        var rootProps = {
          ref: function ref(el) {
            _this2.scope = el;
          },
          className: containerClassName,
          style: { overflow: 'hidden', fontWeight: fontWeight, fontStyle: fontStyle, fontSize: fontSize, fontFamily: fontFamily }
        };

        this.scope && this.onCalculated();
        return (0, _react.createElement)(element, rootProps, renderText);
      }
    }]);

    return TextTruncate;
  }(_react.Component);

  TextTruncate.propTypes = {
    containerClassName: _propTypes2.default.string,
    element: _propTypes2.default.string,
    line: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
    onCalculated: _propTypes2.default.func,
    onTruncated: _propTypes2.default.func,
    text: _propTypes2.default.string,
    textElement: _propTypes2.default.node,
    textTruncateChild: _propTypes2.default.node,
    truncateText: _propTypes2.default.string,
    maxCalculateTimes: _propTypes2.default.number
  };
  TextTruncate.defaultProps = {
    element: 'div',
    line: 1,
    text: '',
    textElement: 'span',
    truncateText: '…',
    maxCalculateTimes: 10
  };
  exports.default = TextTruncate;
  ;
  module.exports = exports['default'];
});

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map