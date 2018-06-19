import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipesService } from '../recipes/recipes.service';
import { DataStoreService } from '../shared/dataStore.service';
import { AuthService } from '../auth/auth.service';

@NgModule({

declarations: [
  HomeComponent,
  HeaderComponent
],
imports: [
  SharedModule,
  AppRoutingModule
],
exports: [
AppRoutingModule,
HeaderComponent
],
providers: [ShoppingListService, RecipesService, DataStoreService, AuthService]
})
export class CoreModule {

}
