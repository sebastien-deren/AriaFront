import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSkill, Skill, SkillList } from '../skillTypes';
import skillFactory from '../skillFactory';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-base-skills',
  standalone: true,
  imports: [CommonModule, SkillComponent],
  templateUrl: './base-skills.component.html',
  styleUrl: './base-skills.component.scss',
})
export class BaseSkillsComponent {
  skillList: BaseSkill[] | undefined = skillFactory(20);
}
