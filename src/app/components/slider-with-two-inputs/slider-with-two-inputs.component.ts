import { Component, OnInit, ViewChild } from '@angular/core';
import * as noUiSlider from 'nouislider';

@Component({
  selector: 'app-slider-with-two-inputs',
  templateUrl: './slider-with-two-inputs.component.html',
  styleUrls: ['./slider-with-two-inputs.component.scss']
})
export class SliderWithTwoInputsComponent {
  lowerValue: number = 0;
upperValue: number = 100;
rangeWidth: string = '75%';

updateRange() {
  this.rangeWidth = `${this.upperValue - this.lowerValue}%`;
}





}
