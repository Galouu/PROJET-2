import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalRoutingModule } from './rental-routing.module';
import { ListComponent } from './components/list/list.component';
import { UpdateComponent } from './components/update/update.component';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
registerLocaleData(localeFr);

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [
    ListComponent,
    UpdateComponent,
    CreateComponent,
    DetailComponent,
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RentalRoutingModule,
    ...materialModules
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    },
  ]
})
export class RentalsModule { }
