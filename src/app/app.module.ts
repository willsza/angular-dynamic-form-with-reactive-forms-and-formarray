import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';

import { AppComponent }                 from './app.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormArrayComponent }         from './dynamic-form-array.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule ],
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormArrayComponent,
    DynamicFormQuestionComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
