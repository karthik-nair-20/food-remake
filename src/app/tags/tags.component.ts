import { Component,Input,OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { tag } from '../shared/model/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input() foodPageTag?:string[] = [];
  tag?:tag[] = [];

  constructor(private foodService:FoodService){}


  ngOnInit():void{
    if(!this.foodPageTag)
    {
      this.tag = this.foodService.getAllTags();
    }

 }
}
