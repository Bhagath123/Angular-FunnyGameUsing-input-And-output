import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeatured="recipe"
  onSelect(featured:string){
this.loadedFeatured=featured;
  }
}
