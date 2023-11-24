import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { HomepageComponent } from './homepage/homepage.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CharacterSheetComponent,
    HomepageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ariaFront';
}
