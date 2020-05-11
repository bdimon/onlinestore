import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [moveIn(), fallIn()],
  host:{'[@fallIn]': ''}
})
export class FooterComponent implements OnInit {
state: String = '';
  constructor() { }

  ngOnInit(): void {
  }

}
