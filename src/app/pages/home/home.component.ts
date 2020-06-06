import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit
} from '@angular/core';

import {
  interval,
} from 'rxjs';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  index;
  startUpName = ["User Research", "User Experience", "Brand strategy + identity", "Web/App Development"];
  showClass = true;

  @ViewChild("dataChange") data: ElementRef;

  constructor(private renderer: Renderer2) {}

  scrollValue = 0;

  ngOnInit(): void {


  }

  ngAfterViewInit() {
    interval(2000).subscribe((n) => {
      console.log(this.data);
      this.index = n % this.startUpName.length
      this.addElement();
    })
  }

  addElement() {
    const p: HTMLParagraphElement = this.renderer.createElement('span');
    p.innerHTML = this.startUpName[this.index];
    const childElements = this.data.nativeElement.children;
    if (childElements.length != 0) {
      for (let child of childElements) {
        this.renderer.removeChild(this.data.nativeElement, child);
      }
    }
    this.renderer.appendChild(this.data.nativeElement, p);
  }

}
