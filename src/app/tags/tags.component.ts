import { Component,OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { tag } from '../shared/model/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tag:tag[] = [];

  constructor(private foodService:FoodService){}


  ngOnInit():void{
    this.tag = this.foodService.getAllTags();

 }
}
