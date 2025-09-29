import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { Assignments } from "./assignments/assignments";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatListModule, MatButtonModule, MatToolbarModule, FormsModule, MatSelectModule, MatIconModule, MatDividerModule, Assignments, MatSidenavModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('assignment-app');
  opened = false;

  nomDuProf = 'Michel Buffa';

  ngOnInit(): void {
    console.log('Juste après le constructeur');
    setTimeout(() => {
      this.nomDuProf = 'Buffa Michel MODIFIEE';
    }, 3000);
  }

}
