import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AssignmentsComponent } from "./assignments/assignments";
import { Rendu } from './rendu';
import { Nonsoumis } from './nonsoumis';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatDividerModule, MatIconModule, Rendu, Nonsoumis, FormsModule, AssignmentsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('td1HarounRiahi');
}
