---
layout: archive
title: "Breadcrumb"
category: bs-wc
permalink: /extras/bs/webcomponents/breadcrumb/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/breadcrumbs)

<div id="breadcrumbDemo"></div>

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the breadcrumb
var el = document.querySelector("#breadcrumb");
var breadcrumb = Components.Breadcrumb({
    el: el,
    items: [
        { text: "Root", href: "/" },
        { text: "Web 1", href: "/web" },
        { text: "Web 1-1", href: "/web/1" }
    ]
});
```
#### TypeScript
```ts
import { Components } from "gd-sprest-bs";

// Create the breadcrumb
let el = document.querySelector("#breadcrumb");
let breadcrumb = Components.Breadcrumb({
    el: el,
    items: [
        { text: "Root", href: "/" },
        { text: "Web 1", href: "/web" },
        { text: "Web 1-1", href: "/web/1" }
    ]
});
```

### Web Component

<bs-breadcrumb>
    // Return the breadcrumb properties
    return {
        items: [
            { "text": "Root", "href": "/" }, 
            { "text": "Web 1", "href": "/web" }, 
            { "text": "Web 1-1", "href": "/web/1"}
        ]
    }
</bs-breadcrumb>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
<bs-breadcrumb>
    // Return the breadcrumb properties
    return {
        items: [
            { "text": "Root", "href": "/" }, 
            { "text": "Web 1", "href": "/web" }, 
            { "text": "Web 1-1", "href": "/web/1"}
        ]
    }
</bs-breadcrumb>
```

### References

```
Breadcrumb(props:IBreadcrumbProps):IBreadcrumb
```

#### IBreadcrumb

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |

#### IBreadcrumbProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to breadcrumb. |
| el | _HTMLElement_ | The element to render the breadcrumb to. |
| items | _Array&lt;IBreadcrumbItem&gt;_ | An array of breadcrumb items._ |

#### IBreadcrumbItem

| Name | Type | Description |
| --- | --- | --- |
| href | _string_ | The breadcrumb item url. |
| text | _string_ | The breadcrumb item text. |

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a breadcrumb exists
        var breadcrumb = document.querySelector("#breadcrumbDemo");
        if(breadcrumb) {
            // Render the breadcrumb
            $REST.Components.Breadcrumb({
                el: breadcrumb,
                items: [
                    { text: "Root", href: "/" },
                    { text: "Web 1", href: "/web" },
                    { text: "Web 1-1", href: "/web/1" }
                ]
            });
        }
    });
</script>