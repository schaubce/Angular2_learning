// main entry point
//allows the content to load dynamically
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//where the loader can find our root module
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
