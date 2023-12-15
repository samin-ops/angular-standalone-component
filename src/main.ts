import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_ROUTE } from './app/app.route';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication( AppComponent, {
    providers: [
    provideRouter(APP_ROUTE),
    importProvidersFrom(BrowserAnimationsModule),

  ]

  })//
