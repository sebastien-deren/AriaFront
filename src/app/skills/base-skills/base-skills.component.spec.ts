import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSkillsComponent } from './base-skills.component';
import { SkillComponent } from '../skill/skill.component';

describe('BaseSkillsComponent', () => {
  let component: BaseSkillsComponent;
  let fixture: ComponentFixture<BaseSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseSkillsComponent, SkillComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BaseSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
