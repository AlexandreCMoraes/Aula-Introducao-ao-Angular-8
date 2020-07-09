import { CoreModule } from './core/core.module';
import { CourseModule } from './courses/course.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar'

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    MatSnackBarModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
    ]),
    BrowserAnimationsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }