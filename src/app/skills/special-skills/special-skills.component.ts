import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill, SpecialSkill } from '../skillTypes';

@Component({
  selector: 'app-special-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './special-skills.component.html',
  styleUrl: './special-skills.component.scss',
})
export class SpecialSkillsComponent {
  skill: SpecialSkill = {
    name: "Faveur d'ina",
    score: 10,
    scoreSystem: 'Première rencontre',
    description:
      'La déesse de la compassion vous a en sa sainte garde Pour les 10 prochains affrontements vous ignorez la première blessure qui vous est ingligé et ne subisse pas la perte de points de vie correspondante.',
  };
}
