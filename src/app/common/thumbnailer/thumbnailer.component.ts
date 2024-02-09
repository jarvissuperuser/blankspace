import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-thumbnailer',
  templateUrl: './thumbnailer.component.html',
  styleUrls: ['./thumbnailer.component.css']
})
export class ThumbnailerComponent implements OnInit, OnDestroy {

  @Input() src: string;
  @Input() setup;
  @Output() launch = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.launch.unsubscribe();
  }
  onClicked(): void {
    this.launch.emit({res: this.setup});
  }

}
