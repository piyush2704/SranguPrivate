import { Component, AfterViewInit, Injectable } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { TdLoadingService } from '@covalent/core';
import { TdDialogService } from '@covalent/core';
import {NavigationService} from '../../../services';
import {Router} from '@angular/router' ;
import { FeaturesService, IFeature } from '../../../services';

@Injectable()
@Component({
  selector: 'product-features',
  templateUrl: 'features.component.html',
  styleUrls: ['features.component.scss'],
  viewProviders: [ FeaturesService ],
  providers:[],
})
export class ProductFeaturesComponent implements AfterViewInit {

  // ngAfterViewInit(): void {
  //   this._titleService.setTitle( 'Customer Paths' );
  //   this.title = this._titleService.getTitle();
    
  // }
  
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
  routes: Object[] = [
    {
      title: "Home", route: "/", icon: "home"
    }, {
      title: "Documentation", route: "/docs", icon: "library_books"
    }, {
      title: "Style Guide", route: "/style-guide", icon: "color_lens"
    }, {
      title: "Layouts", route: "/layouts", icon: "view_quilt"
    }, {
      title: "Teradata Components", route: "/components", icon: "picture_in_picture"
    }
  ];
 

  features: IFeature[];
  filteredFeatures: IFeature[];
  title:"Features";
  constructor(private _titleService: Title,
              private _dialogService: TdDialogService,
              private _featuresService: FeaturesService,
              private _loadingService: TdLoadingService,
              private _navigationService:NavigationService,
              private _router:Router) {
                this._navigationService.storePath(this.title,this._router.url);

  }
  openConfirm(id: string): void {
    this._dialogService.openConfirm({
      message: 'Are you sure you want to delete this feature? It\'s being used!',
      title: 'Confirm',
      cancelButton: 'No, Cancel',
      acceptButton: 'Yes, Delete',
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this.deleteFeature(id);
      } else {
        // DO SOMETHING ELSE
      }
    });
  }
  ngAfterViewInit(): void {
    this._titleService.setTitle( 'Product Features' );
    this.loadFeatures();
  }
  filterFeatures(filterTitle: string = ''): void {
    this.filteredFeatures = this.features.filter((feature: IFeature) => {
      return feature.title.toLowerCase().indexOf(filterTitle.toLowerCase()) > -1;
    });
  }

  loadFeatures(): void {
    this._loadingService.register('features.list');
    this._featuresService.query().subscribe((features: IFeature[]) => {
      this.features = features;
      this.filteredFeatures = features;
      this._loadingService.resolve('features.list');
    }, (error: Error) => {
      this._featuresService.staticQuery().subscribe((features: IFeature[]) => {
        this.features = features;
        this.filteredFeatures = features;
        this._loadingService.resolve('features.list');
      });
    });
  }
  deleteFeature(id): void {
    this._loadingService.register('features.list');
    this._featuresService.delete(id).subscribe(() => {
      this.features = this.features.filter((feature: IFeature) => {
        return feature.id !== id;
      });
      this.filteredFeatures = this.filteredFeatures.filter((feature: IFeature) => {
        return feature.id !== id;
      });
      this._loadingService.resolve('features.list');
    }, (error: Error) => {
      this._loadingService.resolve('features.list');
    });
  }
  
}
