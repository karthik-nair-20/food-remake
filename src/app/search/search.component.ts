import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchTerm:string = "";

  constructor(private route:ActivatedRoute , private router:Router ){}

  ngOnInit():void{

    this.route.params.subscribe( (val) =>{
      if(val[this.searchTerm])
        this.searchTerm = val[this.searchTerm];
      
    })
  }

  search(){
    if(this.searchTerm)
    {
      this.router.navigateByUrl("/search/" + this.searchTerm);
    }
  }
  
  

}
