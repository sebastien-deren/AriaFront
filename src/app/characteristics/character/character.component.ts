import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstToUpperCasePipe } from '../../first-to-upper-case.pipe';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule, FirstToUpperCasePipe],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
})
export class CharacterComponent {
  name = 'Toto';
  lastname = 'truc';
  profession = 'Charpentier';
}
