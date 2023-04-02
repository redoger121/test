import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SoursesComponent } from './sources/sourses.component'
import { Routes, RouterModule } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import { UserCardComponent } from './user-card/user-card.component';

const routes:Routes=[
  {path: '', component:FirstComponent},
  {path: 'sourses', component:SoursesComponent},
  {path: ':id', component:UserCardComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SoursesComponent,
    UserCardComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
