import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  isCollapsed: boolean;

  @Output()
  isCollapsedChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }

  reIsCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedChange.emit(this.isCollapsed);
  }

}
