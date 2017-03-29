"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main entry point
//allows the content to load dynamically
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
//where the loader can find our root module
var app_module_1 = require("./app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map