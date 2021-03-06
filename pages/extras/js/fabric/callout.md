---
title: "Callout"
category: js
permalink: /extras/js/fabric/callout/
---
## [Documentation](https://dev.office.com/fabric-js/Components/Callout/Callout.html)

### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| actions | _string_ | The callout actions. |
| className | _string_ | The class name to apply to the main element. |
| content | _string_ | The callout content. |
| el | _HTMLElement_ | The element to render the callout to. |
| elTarget | _HTMLElement_ | The target element to apply the callout to. |
| position | _string_ | The callout position. |
| showCloseButton | _boolean_ | True to show the close button. |
| subText | _string_ | The callout sub-text. |
| title | _string_ | The callout title. |
| type | _number_ | The callout type. |

### Fabric Callout Interface

| Name | Type/Description |
| --- | --- |
| \_addTarget | _HTMLDivElement_ |
| \_closeButton | _HTMLButtonElement_ |
| \_container | _HTMLDivElement_ |
| \_contextualHost | _IContextualHost_ |
| \_position | _string_ |

### JavaScript

```js
var $REST = require("gd-sprest-js");

// Create the callout
var el = document.querySelector("#myCallout");
var elTarget = document.querySelector("#myCalloutTarget");
$REST.JS.Fabric.({
    el: el,
    elTarget: elTarget,
    content: "This is the callout content."
});
```

### TypeScript

```ts
import { Fabric } from "gd-sprest-js";

// Create the callout
let el = document.querySelector("#myCallout");
let elTarget = document.querySelector("#myCalloutTarget");
Fabric.({
    el: el,
    elTarget: elTarget,
    content: "This is the callout content."
});
```