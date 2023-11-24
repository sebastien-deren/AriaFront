import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSkill, Skill } from '../skillTypes';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent {
  @Input() skill: BaseSkill | undefined;
  onMouseOver() {}
}
