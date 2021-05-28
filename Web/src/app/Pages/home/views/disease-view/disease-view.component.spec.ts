import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseViewComponent } from './disease-view.component';

describe('DiseaseViewComponent', () => {
  let component: DiseaseViewComponent;
  let fixture: ComponentFixture<DiseaseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseaseViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
