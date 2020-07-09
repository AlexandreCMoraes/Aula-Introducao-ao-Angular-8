import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = "Ale"
  title = 'aula-dio-angular';

  console() {
    console.log(this.name)
  }
}
