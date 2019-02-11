import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-b675a82d.js';
import { a as generateElement } from './chunk-5c60948f.js';

class WPTabs {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            cfgElementId: this.cfgElementId,
            className: this.className,
            elementId: this.elementId,
            type: this.type,
            wpClassName: this.wpClassName
        });
        this.el.removeAttribute("id");
        generateElement(this.el, props.elementId);
        generateElement(this.el, props.cfgElementId, true);
        $REST.WebParts.WPTabs(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-webpart-tabs"; }
    static get properties() { return {
        "cfgElementId": {
            "type": String,
            "attr": "cfg-element-id"
        },
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "elementId": {
            "type": String,
            "attr": "element-id"
        },
        "type": {
            "type": Number,
            "attr": "type"
        },
        "wpClassName": {
            "type": String,
            "attr": "wp-class-name"
        }
    }; }
}

export { WPTabs as a };
