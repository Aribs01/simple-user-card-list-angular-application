import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from './components/shared/shared.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UsersService } from './core/services/users.service';
import { UsersFacade } from './core/stores/facade/users.facade';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    SharedModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
  ],
  providers: [UsersService, UsersFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
