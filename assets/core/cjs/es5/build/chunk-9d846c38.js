"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_3f966420_js_1 = require("./chunk-3f966420.js");
var Nav = function () { function e() { } return e.prototype.render = function () { if (!this.el.hasAttribute("data-init")) {
    var e = chunk_3f966420_js_1.a(this.el, { className: this.className, el: this.el, enableFade: this.enableFade, enableFill: this.enableFill, id: this.id, isJustified: this.isJustified, isPills: this.isPills, isTabs: this.isTabs, isVertical: this.isVertical });
    this.el.removeAttribute("id"), GD.Components.Nav(e), this.el.setAttribute("data-init", "true");
} }, Object.defineProperty(e, "is", { get: function () { return "bs-nav"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, enableFade: { type: Boolean, attr: "enable-fade" }, enableFill: { type: Boolean, attr: "enable-fill" }, id: { type: String, attr: "id" }, isJustified: { type: Boolean, attr: "is-justified" }, isPills: { type: Boolean, attr: "is-pills" }, isTabs: { type: Boolean, attr: "is-tabs" }, isVertical: { type: Boolean, attr: "is-vertical" } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.a = Nav;
