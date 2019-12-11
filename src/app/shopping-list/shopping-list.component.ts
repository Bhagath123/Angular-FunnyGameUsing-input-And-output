import { Ingredients } from './../shared/ingridient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 ingridents:Ingredients[]=[new Ingredients('Apples',5),
new Ingredients('Tomato',10)]
  constructor() { }

  ngOnInit() {
  }

}
