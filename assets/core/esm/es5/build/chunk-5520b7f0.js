import{a as getProps}from"./chunk-3f966420.js";var Popover=function(){function e(){}return e.prototype.render=function(){if(!this.el.hasAttribute("data-init")){var e=getProps(this.el,{className:this.className,el:this.el,isDismissible:this.isDismissible,type:this.type});GD.Components.Popover(e),this.el.setAttribute("data-init","true")}},Object.defineProperty(e,"is",{get:function(){return"bs-popover"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{className:{type:String,attr:"class-name"},el:{elementRef:!0},isDismissible:{type:Boolean,attr:"is-dismissible"},type:{type:Number,attr:"type"}}},enumerable:!0,configurable:!0}),e}();export{Popover as a};