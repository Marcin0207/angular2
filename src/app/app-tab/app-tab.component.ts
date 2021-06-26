import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-tab',
  templateUrl: './app-tab.component.html',
  styleUrls: ['./app-tab.component.css']
})
export class AppTabComponent implements OnInit {

  @Input()
  active: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
