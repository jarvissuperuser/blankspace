import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {Subscription} from 'rxjs';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-vid',
  templateUrl: './vid-player.component.html',
  styleUrls: ['./vid-player.component.css']
})
export class VidPlayerComponent implements OnInit, AfterContentInit, OnDestroy {
  @Input() autoplay = 1;
  @Input() loop = 0;
  @Input() vidId = 'Nh7ySyOCTkI';
  @Input() show = false;
  @Output() isShowing = new EventEmitter();
  muted = 1;
  subscription: Subscription;
  player;
  playOptions = {};
  loaded = false;

  constructor(
    private element: ElementRef,
    private modalS: ModalService,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.playOptions[`playerVars`] = this.playerVars;
    this.subscription = this.modalS.getMessage().subscribe(o => {
      if (o.hasOwnProperty('show')) {
        this.show = o.show;
      }
    });
  }
  ngAfterContentInit(): void {
    this.addScript();
  }
  muteVideo(event): void {
    if (this.show) {
      this.player.unMute();
    } else {
      this.player.mute();
    }
  }

  get playerVars(): YT.PlayerVars {
    return { autoplay: this.autoplay, loop: this.loop,
      controls: 0, modestbranding: 1, origin: this.getOrigin};
  }
  get getOrigin(): string {
    return window.location.origin.toString();
  }
  addScript(): void {
    if (!this.loaded) {
      const scriptElement = document.createElement('script');
      scriptElement.src = this.ytURL;
      this.doc.appendChild(scriptElement);
      this.loaded = true;
    }
  }
  removeScript(): void {
    const { doc } = this;
    console.log('removed');
    window.location.reload();
    if (doc.querySelector('script#www-widgetapi-script')) {
      // doc.shadowRoot.querySelector(`script#www-widgetapi-script`).remove();
      // console.log(doc.querySelector(`script#www-widgetapi-script`));
    }
  }
  get getProtocol(): string {
    return window.location.protocol.replace(':', '');
  }

  get ytURL(): string {
    return `${this.getProtocol}://www.youtube.com/iframe_api`;
  }

  get doc(): Element {
    // return this.element.nativeElement;
    return window.document.body;
  }
  toggleShowing(): void {
    const s = !this.show;
    this.modalS.sendMessage({show: s});
    this.isShowing.emit(s);
    this.show ? this.addScript() : this.removeScript();
    // this.show ? this.player.playVideo() : this.player.stopVideo();
  }

  getPlayer(): void {
    this.player = window[`YT`].Player;
    console.log(this.player);
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
