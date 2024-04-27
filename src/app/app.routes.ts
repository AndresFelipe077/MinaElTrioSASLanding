import { ResolveFn, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { PolicyPrivacyComponent } from './components/policy-privacy/policy-privacy.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { RegisterComponent } from './components/auth/register/register.component';

var titleName: string = 'Mina El Trio S.A.S - ';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: titleName + 'Home',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: titleName + 'Login',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: titleName + 'Registro',
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
    title: titleName + 'Sobre mí',
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
