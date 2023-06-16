import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent implements OnInit {
public checks: any = ["Boarding", "DayCare", "House Sitting", "Drop-In-Visit", "Doggy-Day-Care"];
  constructor() { }

  ngOnInit(): void {
  }
}
