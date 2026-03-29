import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router'; // для использовани с routing
import { Home } from './home/home';
import { GeitsComponent } from './geits/geits';

@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [RouterOutlet, Home, GeitsComponent], // для использовани с routing
  imports: [Home, GeitsComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'project1';
}

/*
export class App {
  quotes = [
  "Patience is a key element of success",
  "If you think your teacher is tough, wait till you get a boss",
  "Life is not fair — get used to it!",
  "Success is a lousy teacher. It seduces smart people into thinking they can’t lose",
  "Be nice to nerds. Chances are you’ll end up working for one"
];
  protected readonly title = signal('project1');
}

*/
