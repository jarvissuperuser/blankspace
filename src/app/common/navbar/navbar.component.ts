import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isShowing = false;
  constructor() { }

  ngOnInit(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function handler(e): void {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }
  toggleShow(event): boolean {
    if (
      (event.type === 'click' && event.target.tagName.toLowerCase() !== 'button')
    ) {
      this.isShowing = !this.isShowing;
    }
    return this.isShowing;
  }

}
