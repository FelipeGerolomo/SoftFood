import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Bootstrap Imports
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
// Bootstrap Imports

// Services Imports
import { CartService } from './services/cart.service';
// Services Imports

import { AppComponent } from './app.component';
import { PosComponent } from './pages/pos/pos.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FiltroCardItensComponent } from './components/filtro-card-itens/filtro-card-itens.component';
import { GridItensComponent } from './components/grid-itens/grid-itens.component';
import { CardCartComponent } from './components/card-cart/card-cart.component';
import { CartClienteInformationComponent } from './components/cart-cliente-information/cart-cliente-information.component';
import { CartConclusaoComponent } from './components/cart-conclusao/cart-conclusao.component';



const appRoutes: Routes = [
  // { path: '', redirectTo: 'pos', },
  { path: '', component: PosComponent },
  { path: 'login', component: PosComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    PosComponent,
    LoginComponent,
    NavbarComponent,
    FiltroCardItensComponent,
    GridItensComponent,
    CardCartComponent,
    CartClienteInformationComponent,
    CartConclusaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
