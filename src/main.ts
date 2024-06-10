import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { urlLocal, urlProduction } from "./app/graphql.config";
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from "@angular/core";
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideToastr({ preventDuplicates: true, positionClass: 'toast-bottom-center' }),
    importProvidersFrom(HttpClientModule),
    provideProtractorTestingSupport(),
    provideRouter(routes),
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          link: httpLink.create({ uri: urlLocal }),
          cache: new InMemoryCache()
        };
      },
      deps: [HttpLink]
    },
    Apollo,
  ],
}).catch((err) => console.error(err));