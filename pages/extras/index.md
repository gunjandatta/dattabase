---
title: "Framework Docs"
category: extras
permalink: /extras/
sidebar-auto: true
---
The [Office Fluent-UI](https://developer.microsoft.com/en-us/fluentui) is the offical front-end framework for building experiences in SharePoint and Office 365. To handle the various development frameworks, the [Office Fabric Core](https://developer.microsoft.com/en-us/fluentui#/styles) is the base library which is extended to

#### [React](react)

The Office Fluent-UI React framework provides the components used in the O365 user experience. Unfortunately, the components still need to be connected to SharePoint. The [gd-sprest-react](react) library extends the Office Fabric-UI React framework to include components like the People Picker or List Form.

#### [Bootstrap](bs)

The Office Fabric-UI JavaScript framework is unfortunately no longer being maintained by Microsoft. It was also extended to include SharePoint components ([Documentation Link](js)). Since it's no longer being updated, I've extended the Bootstrap framework to create SharePoint components.

##### [VueJS](bs)

The [gd-sprest-bs-vue](https://github.com/gunjandatta/sprest-bs-vue) library can be used for VueJS projects.