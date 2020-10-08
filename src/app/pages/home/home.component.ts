import {Component, OnDestroy, OnInit} from '@angular/core';
import {Artists} from '../../models/artists.model';
import {Paragraph} from '../../models/paragraph.model';
import {gsap} from 'gsap';
import {TweenMax} from 'gsap/gsap-core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  artistList: Artists[];
  visibility = [];
  intervals: any;
  counter = 1;
  slideCount = 0;

  constructor() { }

  ngOnInit(): void {
   this.artistList = this.artistLoader();
   this.animateSlides();
  }
  artistLoader(): Artists[] {
    const artists = [
      {
        name: 'Stephen of Kent',
        profile: 'Stephen of Kent is a South African singer-songwriter, rapper,' +
          'producer and multi-instrumentalist.\n' +
          'He takes influences from contemporaries like Childish ' +
          'Gambino, BonIver, Frank Ocean, Kings Of Leon and The XX ' +
          'while still being able to draw from the music he was raised on ' +
          'such as Outkast, Prince, and Pink Floyd.\n' +
          'He is also, along with Michael Taku and David Weru, the ' +
          'founder of the lifestyle collective and creative firm, “thisisart”.\n' +
          'Kent has often noted Kanye West as one of his greatest ' +
          'musical influences. Kent’s music aims to explore the ' +
          'human condition and express it in its rawest form. He ' +
          'makes uses of un- conventional melodies and cadences ' +
          'and has the rare gift of self-producing elaborate, lush, ' +
          'maximalist beats.',
        bookPath: '/stephenNeoKent',
        image: '/assets/steve-profile.png'
      },
      {
        name: 'Fake Ano',
        profile: 'FakeAno is an upcoming artist who will be releasing his first ' +
          'solo music project on the 20th of March 2020. To date his music ' +
          'catalogue consists of over 200 shows on big stages such as ' +
          'OppiKoppi, Vodacom Durban July, Back to the City (BTTC), Cotton ' +
          'Fest, AKAs Orchestra on the Square, Enter the Woods, and ' +
          'Bacardi Holiday Club to mention a few.\n' +
          'His collaborations include artists such as 2Lee Stark, Stephen of ' +
          'Kent, Jagermeister Brass Cartel, and Dream Team, all done ' +
          'between 2017 and 2019 as a member of the OFFBOYZ. ' +
          'His onstage presence and musical personality have created a ' +
          'demand for him as a solo artist.\n' +
          '24 EP (VOL 1) is part 1 of a debut EP trilogy by FakeAno. The EP ' +
          'consists of 7 songs, including the Intro, Outro and an Interlude. ' +
          'The sound is modern Trap with Rock and has the influence of ' +
          'Museve (Zimbabwean guitars). To add to this mix there are a lot ' +
          'of heavy drums and a bass which creates an overall sound that ' +
          'can best be described as loud.\n' +
          'The project consists of 4 main songs, with a heavy 808 ' +
          'trap sound perfect for partying, wild crowds and most ' +
          'importantly for Generation Y and Millenials.\n' +
          'Regarding the influence of the content of the EP.\n' +
          'FakeAno leads us on a journey through his early ' +
          'Twenties (age 20 – his current age of 24). The songs ' +
          'speak to the influences he has experienced from being a ' +
          'Zimbabwean, who grew up in the Northern Suburbs of ' +
          'Johannesburg, South Africa and how this has shaped his ' +
          'view.',
        bookPath: '/path',
        image: '/assets/ano-profile.png'
      },
      {
        name: 'Jillz',
        profile: 'Jillz is a Malawian Born musician, raised in South Africa & ' +
          'Namibia in the early days of his childhood, where he gained ' +
          'most of his music influences from and this is how he began ' +
          'playing around with live band instruments.\n' +
          'Jillz, however had always been interested in playing drums ' +
          'and played his first ever live performance as an opening ' +
          'drummer act from Malawi’s biggest Reggae Band (The Black ' +
          'Missionaries) in Namibia at the age of 10.\n' +
          'In the Years that followed after, Jillz began to record and ' +
          'compose his own music and later began producing when he ' +
          'was 16.\n' +
          'Producer & DJ:\n' +
          'Since then, Jillz has worked with plenty of award ' +
          'winning-artists and producers in his home country Malawi ' +
          'such as Dominant 1, Dare Devils, Theo Thomson, Toast, Tuno ' +
          'and Home Grown African just to name a few of the local' +
          'based artists.\n' +
          'In his Two Years of being in South Africa, Jillz has ' +
          'worked with countless various local artists and ' +
          'producers such as Dj Sliqe, Mr Kamera, J.R, Cassper ' +
          'Nyovest, Dj PH, Ali Keys, Reason, Rowlene, Sho Madjozi, ' +
          'Lady Zamar and Many More. Mostly around his favourite ' +
          'upcoming artists too.\n' +
          'Jillz’s most recent achievement is producing Cassper ' +
          'Nyovest’s latest single “Move For Me” which is topping ' +
          'the radio charts and yet, this is only a taste of what this' +
          'Young Talented individual will to offer to world.',
        bookPath: '/path',
        image: '/assets/jillz-profile.png'
      },
      {
        name: 'Evoke',
        profile: 'Evoke (real name Robert Ndabezinhle Magwenzi) is a ' +
          'Zimbabwean producer, DJ and bassist.\n' +
          'Coming from a musically inclined family where his mother and' +
          'brother are musicians, Evoke always knew that he would' +
          'pursue a career in music in one form or another at some point ' +
          'in his life. He started producing for fun at the age of 14 on ' +
          'Fruity Loops and fell in love with it.\n' +
          'It was only after studying interior designing and working in the ' +
          'field for four years, that Evoke realized that he wanted to ' +
          'pursue being a producer full time.\n' +
          'His creative process is shaped by his background in interior ' +
          'designing and his love for Africa. This fuels his passion for ' +
          'putting the creativity Africa has to offer on the map. He sees ' +
          'himself as a young man from the south of Africa who has a lot ' +
          'to offer the world – a kid of the diaspora.\n' +
          '2019 has been the ground-breaking year for Evoke and ' +
          'has seen him co-produce and co-write Find Your Way ' +
          'Back with Beyoncé. The single is among the fan ' +
          'favourites alongside Brown Skin Girls and Spirit which ' +
          'are also on Beyoncé’s latest Lion King album, The Gift. ' +
          'Other major productions that he has worked on include ' +
          'Manu WorldStar’s hit single “Rent” - One of the biggest ' +
          'songs to come out of South Africa in 2018. He also ' +
          'worked with artists such as Reason and Lucille Slade. \n' +
          'The future looks bright for this young producer.\n',
        bookPath: '/path',
        image: '/assets/evoke-profile.png'
      },
    ];
    const artistes = [];
    artists.forEach(a => {
      const artist = new Artists();
      artist.name = a.name;
      artist.profile = this.processPara(a.profile);
      artist.bookPath = a.bookPath;
      artist.image = a.image;
      artistes.push(artist);
      this.visibility.push(false);
    });
    return artistes;
  }
  processPara(profile: string): Paragraph[] {
    const paragraphs = profile.split('\n');
    const result: Paragraph[] = [];
    paragraphs.forEach(paragraph => {
      const p = new Paragraph();
      p.value = paragraph;
      result.push(p);
    });
    return result;
  }
  show(i): void {
    for (let a = 0; a < this.visibility.length; a++){
      this.visibility[a] = false;
    }
    this.visibility[i] = true;
  }
  animateSlides(): void {
     this.intervals = setInterval(() => {
       const slides = document.querySelectorAll('app-slider');
       slides.forEach(slide => {
         if (!slide.classList.contains('w3-hide')) {
           slide.classList.add('w3-hide');
           // slide.classList.add('w')
         }
       });
       this.slideCount = slides.length;
       if (this.counter >= this.slideCount){
         this.counter = 0;
       }
       slides[this.counter].classList.add('w3-animate-left');
       slides[this.counter].classList.remove('w3-hide');
       this.counter++;
     }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervals);
  }
}
