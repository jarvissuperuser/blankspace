import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input()src: string;
  @Input()text: string;
  @Input()listenTo;
  @Output() listenNow = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  listenClicked(): void {
    this.listenNow.emit({res: !!this.listenTo ? this.listenTo : 'default'});
  }

}
