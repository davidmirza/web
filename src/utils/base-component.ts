import { NotifyService } from "abp-ng2-module";
import { Injector } from '@angular/core';

export abstract class baseComponent{
    notify: NotifyService;

    constructor(injector:Injector){
        this.notify = injector.get(NotifyService);
    }
}