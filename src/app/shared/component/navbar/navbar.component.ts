import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from 'src/app/service/window.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isTop = false;
  scrollValue = 30;

  @ViewChild('scroll') rt: ElementRef;
  constructor(private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window) {
  }

  ngOnInit(): void {
    this.renderer.listen('window', 'scroll', (event) => {
      // debugger
      const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
      console.log(offset);
      if (this.scrollValue > offset) {
        this.isTop = false;
      } else {
        this.isTop = true;
      }
      this.scrollValue = offset;

    });
  }
}
