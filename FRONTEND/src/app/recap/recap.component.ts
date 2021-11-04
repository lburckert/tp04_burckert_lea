import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() firstname: string = "name";
  @Input() lastname: string = "name";
  @Input() username: string = "name";
  @Input() civility: string = "name";
  @Input() email: string = "name";
  @Input() phone: string = "name";
  @Input() address: string = "name";
  @Input() city: string = "name";
  @Input() state: string = "name";
  @Input() zip: string = "name";
}
