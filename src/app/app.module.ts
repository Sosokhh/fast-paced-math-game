import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EquationComponent } from './math-page/equation/equation.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AnswerHighlightDirective } from './answer-highlight.directive';
import { StartComponent } from './math-page/start/start.component';
import { MathPageComponent } from './math-page/math-page.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    EquationComponent,
    AnswerHighlightDirective,
    StartComponent,
    MathPageComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
