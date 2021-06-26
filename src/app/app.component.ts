import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`   .tabs-selection {background-color: #ddd; padding-left: 15px; cursor: pointer;} `]
})
export class AppComponent {
  title = 'my-project';
  exists = true;
  tab = 2;

  toggleExists(){
    this.exists = !this.exists;
  }

  topMovies = [
    {title: 'The Shawshank Redemption', director: 'Frank Darabont'},
    {title: 'The Godfather', director: 'Francis Ford Coppola'},
    {title: 'The Godfather: Part II', director: 'Francis Ford Coppola'},
    {title: 'The Dark Knight', director: 'Christopher Nolan'},
    {title: '12 Angry Man', director: 'Sidney Lumet'}
  ];


  setTab(num: number) {
    this.tab = num;
  }
  isSelected(num: number){
    return this.tab ===num;
  }
}
