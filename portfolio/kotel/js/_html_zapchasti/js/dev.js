(function() {
    var a, b, c, d, e, f, g, h, i;
    window.device = {}, b = window.document.documentElement, i = window.navigator.userAgent.toLowerCase(), device.ios = function() {
        return device.iphone() || device.ipod() || device.ipad()
    }, device.iphone = function() {
        return c("iphone")
    }, device.ipod = function() {
        return c("ipod")
    }, device.ipad = function() {
        return c("ipad")
    }, device.android = function() {
        return c("android")
    }, device.androidPhone = function() {
        return device.android() && c("mobile")
    }, device.androidTablet = function() {
        return device.android()&&!c("mobile")
    }, device.blackberry = function() {
        return c("blackberry") || c("bb10") || c("rim")
    }, device.blackberryPhone = function() {
        return device.blackberry()&&!c("tablet")
    }, device.blackberryTablet = function() {
        return device.blackberry() && c("tablet")
    }, device.windows = function() {
        return c("windows")
    }, device.windowsPhone = function() {
        return device.windows() && c("phone")
    }, device.windowsTablet = function() {
        return device.windows() && c("touch")
    }, device.fxos = function() {
        return c("(mobile; rv:") || c("(tablet; rv:")
    }, device.fxosPhone = function() {
        return device.fxos() && c("mobile")
    }, device.fxosTablet = function() {
        return device.fxos() && c("tablet")
    }, device.mobile = function() {
        return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone()
    }, device.tablet = function() {
        return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet()
    }, device.portrait = function() {
        return 90 !== Math.abs(window.orientation)
    }, device.landscape = function() {
        return 90 === Math.abs(window.orientation)
    }, c = function(a) {
        return - 1 !== i.indexOf(a)
    }, e = function(a) {
        var c;
        return c = new RegExp(a, "i"), b.className.match(c)
    }, a = function(a) {
        return e(a) ? void 0 : b.className += " " + a
    }, g = function(a) {
        return e(a) ? b.className = b.className.replace(a, "") : void 0
    }, device.ios() ? device.ipad() ? a("ios ipad tablet") : device.iphone() ? a("ios iphone mobile") : device.ipod() && a("ios ipod mobile") : device.android() ? device.androidTablet() ? a("android tablet") : a("android mobile") : device.blackberry() ? device.blackberryTablet() ? a("blackberry tablet") : a("blackberry mobile") : device.windows() ? device.windowsTablet() ? a("windows tablet") : device.windowsPhone() ? a("windows mobile") : a("desktop") : device.fxos() ? device.fxosTablet() ? a("fxos tablet") : a("fxos mobile") : a("desktop"), d = function() {
        return device.landscape() ? (g("portrait"), a("landscape")) : (g("landscape"), a("portrait"))
    }, h = "onorientationchange"in window, f = h ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(f, d, !1) : window.attachEvent ? window.attachEvent(f, d) : window[f] = d, d()
}).call(this);
