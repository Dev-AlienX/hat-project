import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
    declarations: [NavbarComponent],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        NavbarComponent
    ]
})
export class SharedModule {}