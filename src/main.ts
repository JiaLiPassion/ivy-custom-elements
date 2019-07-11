import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import { AppFormElement } from './app/app-form/app-form-element';

if (environment.production) {
  enableProdMode();
}

customElements.define('app-form', AppFormElement);
