"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_3f966420_js_1 = require("./chunk-3f966420.js");
var Card = function () { function t() { } return t.prototype.render = function () { if (!this.el.hasAttribute("data-init")) {
    var t = chunk_3f966420_js_1.a(this.el, { className: this.className, el: this.el, footer: this.footer, header: this.header, imgBottom: this.imgBottom, imgTop: this.imgTop });
    GD.Components.Card(t), this.el.setAttribute("data-init", "true");
} }, Object.defineProperty(t, "is", { get: function () { return "bs-card"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "properties", { get: function () { return { className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, footer: { type: String, attr: "footer" }, header: { type: String, attr: "header" }, imgBottom: { type: "Any", attr: "img-bottom" }, imgTop: { type: "Any", attr: "img-top" } }; }, enumerable: !0, configurable: !0 }), t; }();
exports.a = Card;
