import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subscription } from 'rxjs/Subscription';

export class DealWithIt {
    top: number;
    left: number;
}

@Injectable()
export class DealWithItService {

    private dealWithItSubject = new ReplaySubject<DealWithIt>(1);

    constructor() {}

    dealWithIt(top: number, left: number) {
        this.dealWithItSubject.next({top, left});
    }
    
    subscribe(next?: (value: DealWithIt) => void, error?: (error: any) => void, complete?: () => void): Subscription {
        return this.dealWithItSubject.subscribe(next, error, complete);
    }
}
