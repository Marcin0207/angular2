import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-tab-component',
  templateUrl: './app-tab-component.component.html',
  styleUrls: ['./app-tab-component.component.css']
})
export class AppTabComponentComponent implements OnInit {

  @Input()
  active: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
