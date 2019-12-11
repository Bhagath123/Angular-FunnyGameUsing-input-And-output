import { Component,EventEmitter, Output } from '@angular/core';


@Component({
    selector:'app-header',
    templateUrl:'header.component.html',
    styleUrls:['header.component.css']
})
export class HeaderComponent{
    @Output()  featuredList=new EventEmitter<string>();
     changeOf(featured:string){
         this.featuredList.emit(featured);         
    }
}