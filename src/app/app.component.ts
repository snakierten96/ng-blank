import { Component }  from '@angular/core';
import { Title }      from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title: string = "My App";

  tables = [1,2,3,4];

  constructor(private titleService: Title) {
    this.titleService.setTitle( this.title )
  }
}
