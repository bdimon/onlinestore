import { Component, OnInit,Input } from '@angular/core';
// import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() pageTitle: string;
  constructor() { }

  ngOnInit(): void {
  }

}
