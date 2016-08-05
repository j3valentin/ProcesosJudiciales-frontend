import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {Cus234Component} from './cus234/cus234.component';
import {Cus5Component} from './cus5/cus5.component';
import {Cus6Component} from './cus6/cus6.component';
import {Cus7Component} from './cus7/cus7.component';
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
  { path: '/cus7', name: 'Cus7', component: Cus7Component }
])
export class AppComponent {}
