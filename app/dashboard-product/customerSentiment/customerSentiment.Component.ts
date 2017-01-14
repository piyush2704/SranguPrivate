import { Component } from '@angular/core';
import {Router} from '@angular/router' ;
import { TdLoadingService } from '@covalent/core';

import { ItemsService, UsersService } from '../../../services';


@Component({
    selector: 'customer-centiment',
  templateUrl: 'customerSentiment.component.html',
  styleUrls: ['customerSentiment.component.scss'],
   viewProviders: [ ItemsService, UsersService ],

})



export class customerSentiment {
  check:boolean =true;
  flexvalue=60;
  analysis:boolean=true;
  rules:boolean=false;
AnalysisCheck()
{
  this.check=true;
  this.flexvalue=60;
  this.analysis=true;
  this.rules=false;
}
Rules()
{
  this.check=false;
  this.flexvalue=30;
 this.analysis=false;
  this.rules=true;
}
}