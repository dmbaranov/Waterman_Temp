import { RouterConfig } from '@angular/router';

import { App } from './app.component';
import { HomePage } from './pages/Home/home.page';
import { LoginPage } from './pages/Login/login.page';
import { RegistrationPage } from './pages/Registration/registration.page';
import { StudyPage } from './pages/Study/study.page';
import { AboutStudyPage } from './pages/AboutStudy/aboutstudy.page';
import { FormPage } from './pages/Form/form.page';

import { CreateEntity } from './pages/CreateEntityTemp/createentity.page';


import { HasTokenGuard } from './guards/hasToken.guard';
import { NoTokenGuard } from './guards/noToken.guard';

const routes: RouterConfig = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'login',
    component: LoginPage,
    canActivate: [NoTokenGuard]
  },
  {
    path: 'registration/:type',
    component: RegistrationPage,
  },
  {
    path: 'study',
    component: StudyPage
  },
  {
    path: 'study/:type/:id',
    component: AboutStudyPage
  },
  {
    path: 'form',
    component: FormPage,
    canActivate: [HasTokenGuard]
  },
  {
    path: 'create-entity-temp',
    component: CreateEntity
  }
];

export default routes;