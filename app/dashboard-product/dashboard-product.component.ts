import {Directive, Component, AfterViewInit ,Injectable,EventEmitter,ElementRef} from '@angular/core';

import { Title }     from '@angular/platform-browser';
import {Location} from '@angular/common';
import {Router} from '@angular/router' ;
import {NavigationService} from '../../services';
@Directive({ selector: '[display]' })
@Injectable()
@Component({
  selector: 'dashboard-product',
  templateUrl: 'dashboard-product.component.html',
  styleUrls: ['dashboard-product.component.scss'],
  providers: [],
})
export class DashboardProductComponent implements AfterViewInit {

  title: string = "Customer Journey";
  url="";
  SubscribeData;
  
  constructor(private _titleService: Title , private _location: Location , private _route:Router , private _navigationService:NavigationService,private _el:ElementRef) {
  this._navigationService.pushDat.subscribe(
    (data) => {this.SubscribeData=data 
      this.changeStyle(this.SubscribeData);}
      );
    let temp = this._navigationService.storePath(this.title,this._route.url);
    this.title = temp.title;
   
   }  

  ngAfterViewInit(): void {
    this._titleService.setTitle( ' Dashboard' );
    this.title = this._titleService.getTitle();
    
  }
  changeStyle(data)
  {this.title=data.title;
    this.url = data.url;
    if(this.url =='/main')
    {
      this._el.nativeElement.className ="removeBack";
    }
    else
    {
      this._el.nativeElement.className ="";}

  }
  back()
  {
    let tempPath= this._route;
   if(tempPath.url!="/main")
   {
     let tempArray = this._route.url.split('/');
    tempArray.pop();
    var newPath;
    for(let temp = 0 ; temp < tempArray.length ; temp++)
    {
      newPath= "/"+tempArray[temp];
    
    }
    this._route.navigate([newPath]);
   /* this._route.navigate('../');*/
  
    }
    


    this._navigationService.storePath(this.title,newPath);
   }
   
  }

