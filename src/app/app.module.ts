import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { DatepickerDirective } from './directives/datepicker.directive';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { SliderWithTwoInputsComponent } from './components/slider-with-two-inputs/slider-with-two-inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    NavBarComponent,
    LeftBarComponent,
    DatepickerDirective,
    DatepickerComponent,
    SliderWithTwoInputsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
