import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Bootstrap Imports
import { AccordionModule } from 'ngx-bootstrap/accordion';
// Bootstrap Imports

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
  { path: 'pos', component: PosComponent },
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
    AccordionModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
