<<<<<<< HEAD
import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {Cus234Component} from './cus234/cus234.component';
import {NameListService} from '../shared/services/name-list.service';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService],
  moduleId: module.id,
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
@RouteConfig([
  { path: '/',      name: 'Home',  component: HomeComponent  },
  { path: '/about', name: 'About', component: AboutComponent },
  { path: '/cus234', name: 'Cus234', component: Cus234Component }
])
export class AppComponent {}
=======
import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {HomeComponent} from './home/home.component';
//import {CU05Component} from './CU05/home.component';
//import {CU07Component} from './CU07/home.component';
//import {CU08Component} from './CU08/home.component';
//import {CU11Component} from './CU11/home.component';
import {AboutComponent} from './about/about.component';
import {NameListService} from '../shared/services/name-list.service';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService],
  moduleId: module.id,
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
@RouteConfig([
  { path: '/',      name: 'Home',  component: HomeComponent  },
  { path: '/about', name: 'About', component: AboutComponent },
//  { path: '/cu05', name: 'cu05', component: CU05Component },
//  { path: '/cu07', name: 'cu07', component: CU07Component },
//  { path: '/cu08', name: 'cu08', component: CU08Component },
//  { path: '/cu11', name: 'cu11', component: CU11Component }
])
export class AppComponent {}
>>>>>>> 14da3d062ad32328f93055af2c9a4b4f3735d187
