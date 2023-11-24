import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerCharacterService } from '../services/player-character.service';
import { Character } from '../personnage-list/types';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  CharacList: Character[] | undefined;
  constructor(private PlayerCharacter: PlayerCharacterService) {
    this.PlayerCharacter.getAllCharacter().then((characList) => {
      this.CharacList = characList;
      console.log(this.CharacList);
    });
  }
}
