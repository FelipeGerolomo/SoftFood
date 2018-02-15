import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grid-itens',
  templateUrl: './grid-itens.component.html',
  styleUrls: ['./grid-itens.component.css']
})
export class GridItensComponent implements OnInit {
  itens: any;

  constructor(private http: HttpClient, private cartService: CartService) {
    this.http.get('http://localhost:4200/assets/json/items.json')
      .subscribe(
      (data: any[]) => {
        this.itens = data;
      }
      )
  }


  ngOnInit() {
  }

}
