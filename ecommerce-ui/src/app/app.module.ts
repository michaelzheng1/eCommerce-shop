import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ItemService } from './services/item.service';
import { ItemListComponent } from './components/item-list/item-list.component';
import  { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'category/:id', component: ItemListComponent},
  {path: 'category', component: ItemListComponent},
  {path: 'items', component: ItemListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', redirectTo: '/products', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
