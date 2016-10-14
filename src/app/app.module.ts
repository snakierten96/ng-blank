import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';
import { MaterialModule }   from '@angular/material';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
