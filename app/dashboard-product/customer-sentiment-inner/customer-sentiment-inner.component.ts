import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' ;
import { TdLoadingService } from '@covalent/core';



@Component({
  selector: 'app-customer-sentiment-inner',
  templateUrl: './customer-sentiment-inner.component.html',
  styleUrls: ['./customer-sentiment-inner.component.scss']
})
export class CustomerSentimentInnerComponent implements OnInit {
  
  jsonData: any = [
    {'x': 'Nov 11', 'y': 69},
    {'x': 'Dec 11', 'y': 47},
    {'x': 'Jan 12', 'y': 63},
    {'x': 'Feb 12', 'y': 82},
    {'x': 'Mar 12 ', 'y': 52},
    {'x': 'April 12', 'y': 89},
    {'x': 'May 12', 'y': 69},
    {'x': 'Jun 12', 'y': 47},
    {'x': 'Jul 12', 'y': 63},
    {'x': 'Aug 12', 'y': 82},
    {'x': 'Sep 12 ', 'y': 52},
    {'x': 'Oct 12', 'y': 89},
    {'x': 'Nov 12 ', 'y': 52},
    {'x': 'Dec 12', 'y': 89},
    {'x': 'Jan 13', 'y': 63},
    {'x': 'Feb 13', 'y': 82},
    {'x': 'Mar 13 ', 'y': 52},
    {'x': 'April 13', 'y': 89}
    ];

    constructor (private _router: Router, private _TdloadingService : TdLoadingService){

    }

 

  ngOnInit() {
  }

}
