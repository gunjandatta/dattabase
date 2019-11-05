---
layout: archive
title: "Framework Docs"
category: extras
permalink: /extras/
---
The [Office Fabric-UI](https://developer.microsoft.com/en-us/fabric) is the offical front-end framework for building experiences in SharePoint and Office 365. To handle the various development frameworks, the [Fabric Core](https://developer.microsoft.com/en-us/fabric#/styles) is the base library which is extended to:

* [React](https://developer.microsoft.com/en-us/fabric#/components) - Offical framework used for O365
* [JavaScript](https://developer.microsoft.com/en-us/fabric-js) - No longer being maintained at this time.
* [Angular](https://developer.microsoft.com/en-us/fabric#/angular-js) - Based on Angular v1.6.x, and maintained by the community.
* [iOS](https://developer.microsoft.com/en-us/fabric#/fabric-ios) - For SharePoint iOS Apps.

### [React](react)

The Office Fabric-UI React framework provides the components used in the O365 user experience. Unfortunately, the components still need to be connected to SharePoint. The [gd-sprest-react](react) library extends the Office Fabric-UI React framework to include components like the People Picker or List Form.

### [Bootstrap](bs)

The Office Fabric-UI JavaScript framework is unfortunately no longer being maintained by Microsoft. It was also extended to include SharePoint components ([Documentation Link](js)). Since it's no longer being updated, this framework has extended Bootstrap to create SharePoint solutions.