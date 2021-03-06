import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchClientComponent } from './search-client/search-client.component';
import { HttpClientModule } from '@angular/common/http';
import { InvesterDetailComponent } from './invester-detail/invester-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchClientComponent,
    InvesterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
