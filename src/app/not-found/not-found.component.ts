import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

 @Input() visible:boolean = false;
 @Input() notFound:String = "Nothing Found!!"
 @Input() resetLinkText:String = "Reset";
 @Input() resetLinkRoute: string = "/";

}
