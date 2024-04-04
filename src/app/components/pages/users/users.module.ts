import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import * as fromApp from 'src/app/core/stores/reducers';
import { UsersEffects } from 'src/app/core/stores/effects/users.effects';

import { UsersListComponent } from './users-list/users-list.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserCardComponent } from './users-list/user-card/user-card.component';

@NgModule({
  declarations: [UsersListComponent, UserViewComponent, UserCardComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatIconModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatButtonModule,

    EffectsModule.forFeature([UsersEffects]),
    StoreModule.forFeature(fromApp.appFeatureKey, fromApp.reducers),
  ],
})
export class UsersModule {}
