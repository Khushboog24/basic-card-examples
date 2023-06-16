import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  public icon_path: string = "../../../assets/icons/"
  public data = [
    {
      img: "leslie.png",
      name: 'Leslie Alexander',
      location: 'Cir. Shiloh, Hawaii 810603',
      skills: 'Dog walking, Boarding, House Sitting ',
    },
    {
      img: "guy.png",
      name: 'Guy Hawkins',
      location: 'Cir. Shiloh, Hawaii 810603',
      skills: 'Dog walking, Boarding, House Sitting ',
    },
    {
      img: "leslie.png",
      name: 'Leslie Alexander',
      location: 'Cir. Shiloh, Hawaii 810603',
      skills: 'Dog walking, Boarding, House Sitting ',
    },
    {
      img: "guy.png",
      name: 'Guy Hawkins',
      location: 'Cir. Shiloh, Hawaii 810603',
      skills: 'Dog walking, Boarding, House Sitting ',
    },
    {
      img: "leslie.png",
      name: 'Leslie Alexander',
      location: 'Cir. Shiloh, Hawaii 810603',
      skills: 'Dog walking, Boarding, House Sitting ',
    },
    {
      img: "guy.png",
      name: 'Guy Hawkins',
      location: 'Cir. Shiloh, Hawaii 810603',
      skills: 'Dog walking, Boarding, House Sitting ',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
