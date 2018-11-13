import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { LatestJobsComponent } from './components/latestJobs/latestJobs.component';
import { FeaturedjobsComponent } from './components/featuredjobs/featuredjobs.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EmployerLoginComponent } from './components/employer-login/employer-login.component';
import { EmployerRegistrationComponent } from './components/employer-registration/employer-registration.component';
import { EmployeSearchComponent } from './components/employe-search/employe-search.component';
import { JobDescriptionComponent } from './components/job-description/job-description.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: LandingpageComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'company', component: CompaniesComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'latestjobs', component: LatestJobsComponent },
  { path: 'featuredjobs', component: FeaturedjobsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'employerLogin', component: EmployerLoginComponent },
  { path: 'employerReg', component: EmployerRegistrationComponent },
  { path: 'employSearch', component: EmployeSearchComponent },
  { path: 'JobDescription', component: JobDescriptionComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
