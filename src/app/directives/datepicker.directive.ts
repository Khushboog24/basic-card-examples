import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import flatpickr from 'flatpickr';

@Directive({
  selector: '[appDatepicker]'
})
export class DatepickerDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    flatpickr(this.el.nativeElement);

    const calendarIcon = document.createElement('span');
    calendarIcon.className = 'calendar-icon fa fa-calendar';
    this.el.nativeElement.parentNode.insertBefore(calendarIcon, this.el.nativeElement.nextSibling);
  }
}
