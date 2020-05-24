import { Component, OnInit, ViewChild, ElementRef, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from 'src/app/service/window.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  @ViewChild('scroll') rt: ElementRef;
  constructor(private renderer: Renderer2, 
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window) {
   }

   scrollValue = 0;

  ngOnInit(): void {
    this.renderer.listen('window', 'scroll', (event)=>{
      // debugger
      const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    console.log(offset);
    if(this.scrollValue > offset) {
      console.log("scroll up");
    } else {
      console.log("scroll down");
      
    }
    this.scrollValue = offset;

    } );
  }

}
