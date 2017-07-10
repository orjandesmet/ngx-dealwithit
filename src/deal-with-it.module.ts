import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealWithItComponent } from './deal-with-it.component';
import { DealWithItService } from './deal-with-it.service';

@NgModule({
    imports: [CommonModule],
    declarations: [DealWithItComponent],
    providers: [DealWithItService],
    exports: [DealWithItComponent],
})
export class DealWithItModule {};
