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
    console.log(item);
    if (this.cart.length == 0) {
      item["count"] = 1;
      this.cart.push(item);
    } else {
      let repeat = false;
      for (let i = 0; i < this.cart.length; i++) {
        if (item["id"] == this.cart[i].id) {
          repeat = true;
          this.cart[i].count += 1;
        }
      }
      if (!repeat) {
        item["count"] = 1;
        this.cart.push(item);
      }
    }





  }

}
