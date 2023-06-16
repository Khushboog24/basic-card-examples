import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent{
  datepickerInput!: ElementRef;

}
