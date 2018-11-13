import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { FooterComponent } from './components/footer/footer.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingpageComponent,
    FooterComponent,
    CompaniesComponent,
    ContactusComponent,
    LatestJobsComponent,
    FeaturedjobsComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ProfileComponent,
    EmployerLoginComponent,
    EmployerRegistrationComponent,
    EmployeSearchComponent,
    JobDescriptionComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
