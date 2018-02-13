import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grid-itens',
  templateUrl: './grid-itens.component.html',
  styleUrls: ['./grid-itens.component.css']
})
export class GridItensComponent implements OnInit {
  itens: any;

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:4200/assets/json/items.json')
      .subscribe(
      (data: any[]) => {
        this.itens = data;
        console.log(this.itens);
      }
      )
  }

  getItem(id){
    console.log(id);
  }

  ngOnInit() {
  }

}
