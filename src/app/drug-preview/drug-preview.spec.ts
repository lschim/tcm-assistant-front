import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugPreview } from './drug-preview';

describe('DrugPreview', () => {
  let component: DrugPreview;
  let fixture: ComponentFixture<DrugPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrugPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrugPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
