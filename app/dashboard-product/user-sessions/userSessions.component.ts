import { Component, AfterViewInit } from '@angular/core';

import { Title }     from '@angular/platform-browser';

import { TdDataTableSortingOrder, TdDataTableService, ITdDataTableSortChangeEvent  } from '@covalent/data-table';
import { IPageChangeEvent } from '@covalent/paging';
import {Router} from '@angular/router';
import { TdLoadingService } from '@covalent/core';
import {NavigationService} from '../../../services';

const NUMBER_FORMAT: any = (v: {value: number}) => v.value;
const DECIMAL_FORMAT: any = (v: {value: number}) => v.value.toFixed(2);


@Component({
  selector: 'user-sessions',
  templateUrl: 'userSessions.component.html',
  styleUrls: ['usersessions.component.scss'],

})
export class userSessions implements AfterViewInit  {
 title="User Session";
 columns: any[] = [
    { name: 'name',  label: 'ID' },
    { name: 'type', label: 'Start Time' },
    { name: 'usage', label: 'Events' },
    { name: 'users', label: 'Good Events'},
    { name: 'load', label: 'Bad Events'},
    { name: 'time', label: 'Duration'},
    
  ];

  data: any[] = [
      {
        'name': 'ryan_garretz2gmail.com',
        'type': '09/01/2017  9:30 AM',
        'usage': 24,
        'users': 20,
        'load': 4,
        'time': '06:45:07',
        
       }, {
        'name': 'ryan_garretz2gmail.com',
        'type': '09/01/2017  9:30 AM',
        'usage': 24,
        'users': 20,
        'load': 4,
        'time': '06:45:07',
      
      }, {
        'name': 'ryan_garretz2gmail.com',
        'type': '09/01/2017  9:30 AM',
        'usage': 24,
        'users': 20,
        'load': 4,
        'time': '06:45:07',
        }, {
        'name': 'ryan_garretz2gmail.com',
        'type': '09/01/2017  9:30 AM',
        'usage': 24,
        'users': 20,
        'load': 4,
        'time': '06:45:07',
       }, {
        'name': 'ryan_garretz2gmail.com',
        'type': '09/01/2017  9:30 AM',
        'usage': 24,
        'users': 20,
        'load': 4,
        'time': '06:45:07',
      }, {
        'name': 'ryan_garretz2gmail.com',
        'type': '09/01/2017  9:30 AM',
        'usage': 24,
        'users': 20,
        'load': 4,
        'time': '06:45:07',
      }, {
        'name': 'ryan_garretz2gmail.com',
        'type': '09/01/2017  9:30 AM',
        'usage': 24,
        'users': 20,
        'load': 4,
        'time': '06:45:07',
      }, {
        'name': 'ryan_garretz2gmail.com',
        'type': '09/01/2017  9:30 AM',
        'usage': 24,
        'users': 20,
        'load': 4,
        'time': '06:45:07',
      }, {
        'name': 'ryan_garretz2gmail.com',
        'type': '09/01/2017  9:30 AM',
        'usage': 24,
        'users': 20,
        'load': 4,
        'time': '06:45:07',
      },
    ];

  filteredData: any[] = this.data;
  filteredTotal: number = this.data.length;
  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 5;
  sortBy: string = 'name';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;
//  rowSelect: ITdDataTableSelectEvent = ITdDataTableSelectEvent;

ngAfterViewInit(): void {
    this._titleService.setTitle( 'usersessions' );
    
  }
   sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    //this.filter();
  }

 
      constructor(private _router: Router, private _loadingService:TdLoadingService,  private _titleService: Title,
              private _dataTableService: TdDataTableService, private _navigationService:NavigationService, private _route:Router) {
                this._navigationService.storePath(this.title,this._route.url);
               }
}

 