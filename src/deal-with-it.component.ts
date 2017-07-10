import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { DealWithItService } from './deal-with-it.service';

import { Subscription } from 'rxjs/Subscription';

const WIDTH: 260 = 260, HEIGHT: 50 = 50;

@Component({
    selector: 'deal-with-it',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<div [ngClass]="{'deal-with-it': true, 'show': display}" [ngStyle]="{width: width + 'px', height: height + 'px', left: left + 'px', top: top + 'px'}" (click)="hide($event)">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 260 50">
            <g class="shades">
                <rect width="260" height="10" class="black-block"/>
                <g class="left-glass">
                    <rect y="10" width="120" height="10" class="black-block"/>
                    <rect y="20" x="10" width="110" height="10" class="black-block"/>
                    <rect y="30" x="20" width="90" height="10" class="black-block"/>
                    <rect y="40" x="30" width="70" height="10" class="black-block"/>
                    <rect y="10" x="20" width="10" height="10" class="white-block"/>
                    <rect y="10" x="40" width="10" height="10" class="white-block"/>
                    <rect y="20" x="30" width="10" height="10" class="white-block"/>
                    <rect y="20" x="50" width="10" height="10" class="white-block"/>
                    <rect y="30" x="40" width="10" height="10" class="white-block"/>
                    <rect y="30" x="60" width="10" height="10" class="white-block"/>
                </g>

                <g class="right-glass">
                    <rect y="10" x="140" width="120" height="10" class="black-block"/>
                    <rect y="20" x="140" width="110" height="10" class="black-block"/>
                    <rect y="30" x="150" width="90" height="10" class="black-block"/>
                    <rect y="40" x="160" width="70" height="10" class="black-block"/>
                    <rect y="10" x="160" width="10" height="10" class="white-block"/>
                    <rect y="10" x="180" width="10" height="10" class="white-block"/>
                    <rect y="20" x="170" width="10" height="10" class="white-block"/>
                    <rect y="20" x="190" width="10" height="10" class="white-block"/>
                    <rect y="30" x="180" width="10" height="10" class="white-block"/>
                    <rect y="30" x="200" width="10" height="10" class="white-block"/>
                </g>
            </g>
        </svg>
    </div>`,
    styles: [
        `.deal-with-it {
            position: absolute;
            z-index: 9000;
            transition: top 0s;
        }
        .deal-with-it.show {
            transition: top 2s;
        }
        .black-block {
            fill: #000;
        }
        .white-block {
            fill: #FFF;
        }`
    ],
})
export class DealWithItComponent implements OnInit, OnDestroy {

    @Input() sizePercentage: number = 100;

    top: number = 0;
    left: number = 0;
    display: boolean = false;

    width: number;
    height: number;
    private subscription: Subscription;

    constructor(
        private dealWithItService: DealWithItService,
        private changeDetectorRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.width = this.sizePercentage * WIDTH / 100;
        this.height = this.sizePercentage * HEIGHT / 100;
        this.top = -this.height;
        this.subscription = this.dealWithItService.subscribe(next => {
            this.left = next.left;
            this.top = next.top;
            this.display = true;
            this.changeDetectorRef.markForCheck();
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    hide(event: Event) {
        event.stopPropagation();
        this.display = false;
        this.top = -this.height;
    }
}
