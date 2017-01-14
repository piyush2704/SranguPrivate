import { Component } from '@angular/core';

@Component({
  selector: 'insight-overview',
  templateUrl: 'insight.component.html',
  styleUrls: ['insight.component.scss'],

})
export class InsightOverviewComponent  {
Insights =[{image:"../assets/icons/u269.png",imageTag:"Mobile",content:"Hispanic females 25 – 34 respond most positively to Mobile."},
           {image:"../assets/icons/user.png",imageTag:"Social",content:"Teens in the southwestern United States overwhelmingly prefer social promotions, followed by Mobile."},
          {image:"../assets/icons/u273.png",imageTag:"Referrals",content:"Males 55 and greater prefer referrals."},
          {image:"../assets/icons/u267.png",imageTag:"Email",content:"Email campaigns to males over 45 years of age with income greater than $100,000 are converting at 5.6% while the emails are converting overall at 1.7%."}
          ]
}
