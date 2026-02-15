import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugView } from './drug-view';

describe('DrugView', () => {
  let component: DrugView;
  let fixture: ComponentFixture<DrugView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrugView],
    }).compileComponents();

    fixture = TestBed.createComponent(DrugView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
