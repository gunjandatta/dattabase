import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-b675a82d.js';

class Breadcrumb {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            el: this.el
        });
        GD.Components.Breadcrumb(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-breadcrumb"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        }
    }; }
}

export { Breadcrumb as a };
