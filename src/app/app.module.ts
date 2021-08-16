import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './main-components/home/home.component';
import { RenoshopComponent } from './main-components/renoshop/renoshop.component';
import { WomenComponent } from './main-components/women/women.component';
import { MenComponent } from './main-components/men/men.component';
import { KidsComponent } from './main-components/kids/kids.component';
import { JewelleryComponent } from './main-components/jewellery/jewellery.component';
import { AccessoriesComponent } from './main-components/accessories/accessories.component';
import { NavbarComponent } from './main-components/navbar/navbar.component';
import { FooterComponent } from './main-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RenoshopComponent,
    WomenComponent,
    MenComponent,
    KidsComponent,
    JewelleryComponent,
    AccessoriesComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
