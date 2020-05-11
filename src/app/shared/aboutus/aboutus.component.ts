import { Component, OnInit } from '@angular/core';
// import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
state: String = '';
  constructor() { }

  ngOnInit(): void {
  }

}
