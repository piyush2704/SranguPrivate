import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';
import { ProductOverviewComponent } from './dashboard-product/overview/overview.component';
import { ProductStatsComponent } from './dashboard-product/stats/stats.component';
import { ProductFeaturesComponent } from './dashboard-product/features/features.component';
import { FeaturesFormComponent } from './dashboard-product/features/+form/form.component';
import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users/+form/form.component';
import { LogsComponent } from './logs/logs.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import {userSessions} from './dashboard-product/user-sessions/userSessions.component';
import {CustomerPath} from'./dashboard-product/customerToPath/customer.to.path';
import {eventsComponent} from './dashboard-product/events/events.component';
import {customerSentiment } from './dashboard-product/customerSentiment/customerSentiment.Component';
import {CustomerSentimentInnerComponent} from './dashboard-product/customer-sentiment-inner/customer-sentiment-inner.component';




const routes: Routes = [
  { path: '*', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  
  
  {
    path: 'main', component: MainComponent, children: [{
      
     
      path: '', component: DashboardProductComponent, children: [
        { path: '', component: ProductOverviewComponent },
        { path: 'stats', component: ProductStatsComponent },
        {path : 'CustomerPath', component: CustomerPath,},
        {path: 'userSessions', component:userSessions},
        {path: 'eventsComponent', component: eventsComponent},
         {path: 'customerSentiment', component: customerSentiment, children:[
      
         { path:'customercentimentdetails',component:CustomerSentimentInnerComponent},
         {path : 'CustomerPath', component: CustomerPath},
      ]},
        {
          path: 'features', children: [
            {path : 'CustomerPath', component: CustomerPath,},
            { path: '', component: ProductFeaturesComponent },
            { path: 'add', component: FeaturesFormComponent },
            { path: ':id/delete', component: FeaturesFormComponent },
            { path: ':id/edit', component: FeaturesFormComponent },
          ]
        },
      ]
    },
    { path: 'item/:id', component: DetailComponent },
    { path: 'logs', component: LogsComponent },
    { path: 'form', component: FormComponent },
    {
      path: 'users', children: [
        { path: '', component: UsersComponent },
        { path: 'add', component: UsersFormComponent },
        { path: ':id/delete', component: UsersFormComponent },
        { path: ':id/edit', component: UsersFormComponent },
      ]
    },
    ]
  },
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
