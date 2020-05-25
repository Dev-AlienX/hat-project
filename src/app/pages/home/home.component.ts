import { Component, OnInit, ViewChild, ElementRef, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { observable, interval, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { WINDOW } from 'src/app/service/window.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  index = of(0);
  dataArray= ["vishal ChuneWala", "vishal milk", "vishal oil", "ganesh", "100+ Startups"];
  showClass = true;
  constructor(private renderer: Renderer2, 
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window) {
   }

   scrollValue = 0;

  ngOnInit(): void {

    this.index = interval(2000).pipe(map(n => {
      this.showClass != this.showClass;
     return n % this.dataArray.length
    }));
  }

}
