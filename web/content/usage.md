---
title: "Usage — @sebastienrousseau/go-config"
description: "How to use and configure @sebastienrousseau/go-config."
layout: "doc"
---

# Usage

`@sebastienrousseau/go-config` can be consumed across all standard module formats.

## CommonJS

```javascript
const config = require("@sebastienrousseau/go-config");
console.log(config.presets);
```

## ES Modules

```javascript
import config from "@sebastienrousseau/go-config";
console.log(config.defaultPreset);
```
