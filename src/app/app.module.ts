import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { MaterialModule }       from '@angular/material';

// TODO: this needs to be a module import
import { 
  LayoutDirective,
  LayoutWrapDirective,
  FlexDirective
} from './shared';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutDirective,
    LayoutWrapDirective,
    FlexDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
