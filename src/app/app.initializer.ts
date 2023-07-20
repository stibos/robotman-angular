import {Injector} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LOCATION_INITIALIZED} from '@angular/common';

export function appInitializerFactory(translate: TranslateService, injector: Injector) {
  return () => new Promise<any>((resolve: any) => {
    const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
    locationInitialized.then(() => {
      const langToSet = 'de'
      translate.setDefaultLang('de');

      translate.use(langToSet).subscribe({
        next: () => console.info(`Successfully initialized '${langToSet}' language.'`),
        error: () => console.error(`Problem with '${langToSet}' language initialization.'`),
        complete: () => resolve(null)
      })
    });
  });
}
