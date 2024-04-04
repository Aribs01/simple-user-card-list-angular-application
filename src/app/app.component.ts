import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  routerEvents!: Subscription;
  loadingRouteConfig: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.listenToLazyLoadedModules();
  }

  listenToLazyLoadedModules() {
    this.routerEvents = this.router.events.subscribe((event) => {
      window.scrollTo(0, 0);

      if (event instanceof RouteConfigLoadStart) {
        this.loadingRouteConfig = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loadingRouteConfig = false;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerEvents) {
      this.routerEvents.unsubscribe();
    }
  }
}
