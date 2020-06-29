import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './base-components/app.module';
import { environment } from './environments/environment';
import { EnvironmentNames } from './environments/environments.name';

if (environment.envName === EnvironmentNames.prod) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
