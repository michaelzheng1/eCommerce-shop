import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ItemService } from './services/item.service';
import { ItemListComponent } from './components/item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
