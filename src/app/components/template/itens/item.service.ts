import { Injectable } from '@angular/core';
import { Item } from './Item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itens : Item[]


  constructor() { 
    this.itens = [
      new Item(123,"1",10,40,40),
      new Item(223,"2",2,40,10),
      new Item(342,"3",200,420,20),
      new Item(422,"4",222,140,30),
      new Item(444,"5",222,140,44),
      new Item(415,"6",222,140,2),
      new Item(421,"7",222,140,11),
      new Item(456,"8",222,140,98),
      new Item(254,"9",22,40,11)
    ]
  }


  getItens(){
    return this.itens;
  }





  getItem(i:number){
    return this.itens[i]
  }

  addItem(codigo:number, peca:string, estoque:number, maxEstoque:number,minEstoque:number){
    this.itens.push(new Item(codigo,peca,estoque,maxEstoque,minEstoque))
  }

  editItem(i:number, estoque: number, add: number){
    this.itens[i].estoque = estoque + add
  }
  subItem(i:number, estoque: number, sub: number){
    this.itens[i].estoque = estoque - sub
  }

 

}
