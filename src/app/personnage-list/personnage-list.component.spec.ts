import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnageListComponent } from './personnage-list.component';

describe('PersonnageListComponent', () => {
  let component: PersonnageListComponent;
  let fixture: ComponentFixture<PersonnageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonnageListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonnageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
