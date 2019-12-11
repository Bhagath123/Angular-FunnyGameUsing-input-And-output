import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/haeder.component';
import { AppComponent } from './app.component';
import {RecipeComponent} from './reipe/reipe.component';
import { RecipeListComponent } from './reipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './reipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './reipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShopingEditComponent } from './shopping-list/shoping-edit/shoping-edit.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShopingEditComponent,
  
  ],
  imports: [
    BrowserModule,  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
