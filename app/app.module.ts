import { NgModule } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { NavigationService} from '../services'

import { CovalentCoreModule, TD_LOADING_ENTRY_COMPONENTS } from '@covalent/core';
//import { CovalentExpansionPanelModule } from '@covalent/core';
import { CovalentChipsModule } from '@covalent/chips';
import { CovalentFileModule } from '@covalent/file-upload';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentJsonFormatterModule } from '@covalent/json-formatter';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentChartsModule } from '@covalent/charts';
import { CovalentDataTableModule } from '@covalent/data-table';
import { CovalentPagingModule } from '@covalent/paging';
import { CovalentSearchModule } from '@covalent/search';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users/+form/form.component';
import { LogsComponent } from './logs/logs.component';
import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';
import { ProductOverviewComponent } from './dashboard-product/overview/overview.component';
import {customerSentiment } from './dashboard-product/customerSentiment/customerSentiment.Component';
import { ProductStatsComponent } from './dashboard-product/stats/stats.component';
import { ProductFeaturesComponent } from './dashboard-product/features/features.component';
import { FeaturesFormComponent } from './dashboard-product/features/+form/form.component';
import { appRoutes, appRoutingProviders } from './app.routes';
import { CustomerCentimentOverview } from './dashboard-product/CustomerCentiment/customer.centiment';
import { CustomerPath } from './dashboard-product/customerToPath/customer.to.path';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { InsightOverviewComponent } from './dashboard-product/Insight/insight.component';
import { ChartComponent } from '../components/chart/chart.component';
import { ButtonDisableFix } from '../directives/button-disable-fix.directive';
import { RequestInterceptor } from '../config/interceptors/request.interceptor';
import {userSessions} from './dashboard-product/user-sessions/userSessions.component';
import {eventsComponent} from './dashboard-product/events/events.component';

import { AnalysisComponent } from './dashboard-product/analysis/analysis.component';
import { CustomerSentimentInnerComponent } from './dashboard-product/customer-sentiment-inner/customer-sentiment-inner.component';


@NgModule({
  declarations: [
    AppComponent,
    AnalysisComponent,
    CustomerSentimentInnerComponent,
    MainComponent,
  
    DashboardProductComponent,
    ProductOverviewComponent,
    ProductStatsComponent,
    ProductFeaturesComponent,
    FeaturesFormComponent,
    eventsComponent,
    UsersComponent,
    InsightOverviewComponent,
    UsersFormComponent,
    LogsComponent,
    FormComponent,
    DetailComponent,
    LoginComponent,
    ChartComponent,
    customerSentiment,
    CustomerPath,
    CustomerCentimentOverview,
    userSessions,
    
    
    // Bugfix for disabled anchor button in material.alpha-10 (remove in alpha-11)
    ButtonDisableFix,
    
    
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    CovalentCoreModule.forRoot(),
    CovalentChartsModule.forRoot(),
    CovalentChipsModule.forRoot(),
    CovalentDataTableModule.forRoot(),
    CovalentFileModule.forRoot(),
    CovalentHttpModule.forRoot([RequestInterceptor]),
    CovalentHighlightModule.forRoot(),
    CovalentJsonFormatterModule.forRoot(),
    CovalentMarkdownModule.forRoot(),
    CovalentPagingModule.forRoot(),
    CovalentSearchModule.forRoot(),
    //CovalentExpansionPanelModule.forRoot(),
    appRoutes,
    ChartsModule,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    NavigationService,
    Title,
  ], // additional providers needed for this module
  entryComponents: [ TD_LOADING_ENTRY_COMPONENTS ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
