import { ResolveFn, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { PolicyPrivacyComponent } from './components/policy-privacy/policy-privacy.component';

var titleName: string = 'Mina El Trio S.A.S - ';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: titleName + 'Home',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: titleName + 'Contacto',
  },
  {
    path: 'terminos-y-condiciones',
    component: TermsAndConditionsComponent,
    title: titleName + 'Terminos y condiciones',
  },
  {
    path: 'politica-de-privacidad',
    component: PolicyPrivacyComponent,
    title: titleName + 'Política de privacidad',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: titleName + 'Página no encontrada'
  },

];

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('login');
