import{a as getProps}from"./chunk-b675a82d.js";var Carousel=function(){function e(){}return e.prototype.render=function(){if(!this.el.hasAttribute("data-init")){var e=getProps(this.el,{className:this.className,el:this.el,enableControls:this.enableControls,enableCrossfade:this.enableCrossfade,enableIndicators:this.enableIndicators,id:this.id});this.el.removeAttribute("id"),GD.Components.Carousel(e),this.el.setAttribute("data-init","true")}},Object.defineProperty(e,"is",{get:function(){return"bs-carousel"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{className:{type:String,attr:"class-name"},el:{elementRef:!0},enableControls:{type:Boolean,attr:"enable-controls"},enableCrossfade:{type:Boolean,attr:"enable-crossfade"},enableIndicators:{type:Boolean,attr:"enable-indicators"},id:{type:String,attr:"id"}}},enumerable:!0,configurable:!0}),e}();export{Carousel as a};