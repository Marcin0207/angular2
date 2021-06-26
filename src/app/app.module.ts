import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyComp2Component } from './my-comp2/my-comp2.component';
import { AppTabComponentComponent } from './app-tab-component/app-tab-component.component';
import { AppTabComponent } from './app-tab/app-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyComp2Component,
    AppTabComponentComponent,
    AppTabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
