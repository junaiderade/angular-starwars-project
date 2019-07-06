import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { StarWarsService } from './star-wars.service';
import { LogService } from './log.service';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';







@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, // you can only use this once in ur whole app
    HttpModule,
    AppRoutingModule
  ],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
