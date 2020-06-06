import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls:['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor(private router: Router) {}
    ngOnInit(): void {
        console.log("footer");
    }

    enquiryClick() {
    this.router.navigate(['https://docs.google.com/forms/d/e/1FAIpQLSfaIC476Bw3guuaA4S89uZxbs06F6HhE2NocDaffoCw5e73ug/viewform?vc=0&c=0&w=1']);        
    }
}