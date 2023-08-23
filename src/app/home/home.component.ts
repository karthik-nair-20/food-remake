import { Component,OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/model/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private foodService: FoodService , private route:ActivatedRoute){}

  food:Food[] = [];
  ngOnInit():void{

    // this.food = this.foodService.getAll();
    this.route.params.subscribe( (val) =>{
      if(val["searchTerm"])
      {
        // this.food = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(val["searchTerm"].toLowerCase()));
        this.food = this.foodService.getAllSearch(val["searchTerm"]);
      }
      else if(val["tag"])
      {
        this.food = this.foodService.getAllFoodsByTag(val["tag"]);
      }
      else{
        this.food = this.foodService.getAll();
      }
    })



  }

}
