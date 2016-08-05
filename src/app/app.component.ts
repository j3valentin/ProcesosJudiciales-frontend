import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {Cus234Component} from './cus234/cus234.component';
import {Cus5Component} from './cus5/cus5.component';
import {Cus6Component} from './cus6/cus6.component';
import {Cus7Component} from './cus7/cus7.component';
import {Cus8Component} from './cus8/cus8.component';
import {Cus9Component} from './cus9/cus9.component';
import {Cus10Component} from './cus10/cus10.component';
import {Cus11Component} from './cus11/cus11.component';
import {Cus12Component} from './cus12/cus12.component';
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
  { path: '/cus234', name: 'Cus234', component: Cus234Component },
  { path: '/cus5', name: 'Cus5', component: Cus5Component },
  { path: '/cus6', name: 'Cus6', component: Cus6Component },
  { path: '/cus7', name: 'Cus7', component: Cus7Component },
  { path: '/cus8', name: 'Cus8', component: Cus8Component },
  { path: '/cus9', name: 'Cus9', component: Cus9Component },
  { path: '/cus10', name: 'Cus10', component: Cus10Component },
  { path: '/cus11', name: 'Cus11', component: Cus11Component },
  { path: '/cus12', name: 'Cus12', component: Cus12Component }
])
export class AppComponent {}
