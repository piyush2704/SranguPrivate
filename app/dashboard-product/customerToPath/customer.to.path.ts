import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TdLoadingService } from '@covalent/core';



@Component({
  selector: 'customer-path',
  templateUrl: 'customer.to.path.html',
  styleUrls: ['customer.to.path.scss'],

})
export class CustomerPath  {
constructor(private _router: Router,
              private _loadingService: TdLoadingService) {}

  Icons=[{
        keys: [{
          value: "email",
          label: "Email",
        },
          {
            value: "tv",
            label: "Web",
          },
          {
            value: "people",
            label: "Social",
          },
          {
            value: "people",
            label: "Social",
          },
          {
            value: "phone_iphone",
            label: "Mobile",
          },
          {
            value: "tv",
            label: "Web",
          },
          {
            value: "shopping_cart",
            label: "Cart",
          },
          {
            value: "attach_money",
            label: "Purchase",
          },]
          ,
        totalRevenue:44.2,
        currency:"USD",
              days:6
              },
        {
              keys: [{
            value: "email",
            label: "Email",
          },
            {
              value: "store",
              label: "Store",
            },
            {
              value: "tv",
              label: "Web",
            },
            {
              value: "attach_money",
              label: "Purchase",
            }],totalRevenue:5.2,
          currency:"USD",
          days:6
        },
    {
        keys:
        [{
        value: "email",
        label: "Search",
      },
        {
          value: "tv",
          label: "Web",
        },
        {
          value: "people",
          label: "Social",
        },
        {
          value: "people",
          label: "Social",
        },
        {
          value: "tv",
          label: "Web",
        },
        {
          value: "attach_money",
          label: "Purchase",
        },],
        totalRevenue:45.2,
        currency:"USD",
        days:6
    }]
    userSessions(): void {
    this._loadingService.register('userSessions');
   // alert('Mock log in as ' + this.username);
    setTimeout(() => {
      this._router.navigate(['/main/userSessions']);
      this._loadingService.resolve('userSessions');
    }, 200);
  }
}
