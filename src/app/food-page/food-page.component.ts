import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/model/food';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute,Router } from '@angular/router';
import { tag } from '../shared/model/tag';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!:Food;
  tag:tag[] =[]; 

  constructor(private foodService:FoodService , private activatedRouter:ActivatedRoute,private cartService:CartService, private router:Router){
    this.activatedRouter.params.subscribe( (val) =>{
      if(val["id"])
      {
        this.food = this.foodService.getAllFoodById(val["id"]);
      }
    })
  }

  ngOnInit(): void {
  
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
