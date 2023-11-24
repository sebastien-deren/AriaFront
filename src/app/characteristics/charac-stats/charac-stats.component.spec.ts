import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacStatsComponent } from './charac-stats.component';

describe('CharacStatsComponent', () => {
  let component: CharacStatsComponent;
  let fixture: ComponentFixture<CharacStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
