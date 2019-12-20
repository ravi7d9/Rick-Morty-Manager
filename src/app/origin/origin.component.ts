import { Component, OnInit } from '@angular/core';
import { Config } from '../config/config';

@Component({
  selector: 'app-origin',
  templateUrl: './origin.component.html',
  styleUrls: ['./origin.component.scss']
})
export class OriginComponent implements OnInit {
  config = Config;
  constructor() { }

  ngOnInit() {
  }

}
