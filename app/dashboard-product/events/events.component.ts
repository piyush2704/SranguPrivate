import { Component, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {NavigationService} from '../../../services';


@Component({
    selector: 'events-Component',
    templateUrl: 'events.component.html',
    styleUrls: ['events.component.scss'],
})


export class eventsComponent {
    title="Events";     
    items: Object[] = [
        {
            title: "Item Name", route: "/", icon: "layout", description: "Item description"
        },
        {
            title: "Item Name", route: "/", icon: "layout", description: "Item description"
        },
        {
            title: "Item Name", route: "/", icon: "layout", description: "Item description"
        },
        {
            title: "Item Name", route: "/", icon: "layout", description: "Item description"
        }
    ];

    expandedEvent(): void {
   
  }
  collapsedEvent(): void {
     }


    constructor(private _route: Router , private _navigationService:NavigationService) { 
        this._navigationService.storePath(this.title,this._route.url);
    }

}