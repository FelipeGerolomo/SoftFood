import { Injectable } from '@angular/core';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Injectable()
export class CartService {
  item: any;
  cart: Array<any>;
  adicionais: any;
  modalRef: BsModalRef;
  itensAdicionais: any;
  aux_cart: Array<any>;

  constructor(private modalService: BsModalService, private http: HttpClient) {
    this.cart = [];
    this.aux_cart = [];
    this.adicionais = [];
  }

  getItem(item: Array<any>) {
    if (this.cart.length == 0) {
      item["count"] = 1;
      this.aux_cart.push(item);
      console.log("Passo Primeiro IF do GetItem");
    } else {
      let repeat = false;
      for (let i = 0; i < this.cart.length; i++) {
        if (item["id"] == this.cart[i].id) {
          repeat = true;
          this.cart[i].count += 1;
          console.log("Passo Segundo IF do GetItem");
        }
      }
      if (!repeat) {
        item["count"] = 1;
        this.aux_cart.push(item);
        console.log("Passo Terceiro IF do GetItem");
      }

    }
    console.log("Função GetItem");
  }

  addAdicional(adic_item) {
    if (this.adicionais.length == 0) {
      adic_item["count"] = 1;
      this.adicionais.push(adic_item);
    } else {
      let repeat = false;
      for (let i = 0; i < this.adicionais.length; i++) {
        if (adic_item["id"] == this.adicionais[i].id) {
          repeat = true;
          this.adicionais[i].count += 1;
          
        }
      }
      if (!repeat) {
        adic_item["count"] = 1;
        this.adicionais.push(adic_item);
      }

    }
    this.aux_cart[this.aux_cart.length - 1]["ADICIONAIS"] = (this.adicionais);
    console.log(this.aux_cart);
    console.log("Função addAdicional");
  }


  closeModal() {
    this.adicionais = [];
    this.aux_cart = [];
    this.item = [];
    this.modalRef.hide();  
  }


  inserirModal() {
    this.cart.push(this.aux_cart[0]);
    this.adicionais = [];
    this.aux_cart = [];
    this.item = [];
    this.modalRef.hide();  
    console.log(this.cart);
    console.log("Função InserirModal");
  }






  requestAdicionais() {
    this.http.get('http://localhost:4200/assets/json/adicionais.json')
      .subscribe(
        (data: any[]) => {
          this.itensAdicionais = data;
        }
      )
  }


  openModal(template: TemplateRef<any>, item) {
    this.requestAdicionais();
    this.item = item;
    this.getItem(this.item);
    this.modalRef = this.modalService.show(template);

  }


}
