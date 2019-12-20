import { Component, OnInit } from '@angular/core';
import { Config } from '../config/config';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {
  config = Config;
  constructor() { }

  ngOnInit() {
  }

}
