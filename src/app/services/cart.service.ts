import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  cart: Array<any>;
  // produto: Array<any>;

  constructor() {
    this.cart = [];
    // this.produto = [];
  }

  getItem(item: Array<any>) {
    // this.produto.push(item);
    // console.log(item["id"]);
    if (this.cart.length == 0) {
      item.count = 1;
      this.cart.push(item);
      // console.log(this.cart);
    } else {
      let repeat = false;
      for (let i = 0; i < this.cart.length; i++) {
        if (item["id"] == this.cart[i].id) {
          repeat = true;
          this.cart[i].count += 1;
          // console.log("Já Existe");
          // console.log(this.cart);
        }
      }
      if (!repeat) {
        // console.log("Não Existe");
        item.count = 1
        this.cart.push(item);
        // console.log(this.cart);
      }

      // console.log(this.produto[0].id);


    }




    // console.log(tam);
    // console.log(item);
    // console.log(this.cart[0].id);
  }

}
