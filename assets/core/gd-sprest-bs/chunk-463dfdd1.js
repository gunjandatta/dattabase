import{a as t}from"./chunk-b675a82d.js";class e{render(){if(this.el.hasAttribute("data-init"))return;let e=t(this.el,{className:this.className,el:this.el,id:this.id});this.el.removeAttribute("id"),GD.Components.Accordion(e),this.el.setAttribute("data-init","true")}static get is(){return"bs-accordion"}static get properties(){return{className:{type:String,attr:"class-name"},el:{elementRef:!0},id:{type:String,attr:"id"}}}}export{e as a};