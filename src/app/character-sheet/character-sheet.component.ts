import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacteristicsComponent } from '../characteristics/characteristics.component';
import { SkillsComponent } from '../skills/skills.component';
import { Character } from '../personnage-list/types';
import { PlayerCharacterService } from '../services/player-character.service';

@Component({
  selector: 'app-character-sheet',
  standalone: true,
  imports: [CommonModule, CharacteristicsComponent, SkillsComponent],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.scss',
})
export class CharacterSheetComponent {
  @Input() id: number = -1;
  character: Character | undefined;
  constructor(private CharacterService: PlayerCharacterService) {
    this.CharacterService.getOneCharacterById(this.id).then(
      (char: Character) => {
        this.character = char;
        console.log(this.character);
      }
    );
  }
}
