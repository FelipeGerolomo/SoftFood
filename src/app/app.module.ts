import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PosComponent } from './pages/pos/pos.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FiltroCardItensComponent } from './components/filtro-card-itens/filtro-card-itens.component';
import { GridItensComponent } from './components/grid-itens/grid-itens.component';


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
    GridItensComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
