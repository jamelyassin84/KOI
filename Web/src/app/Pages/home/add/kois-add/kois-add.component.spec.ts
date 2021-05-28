import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoisAddComponent } from './kois-add.component';

describe('KoisAddComponent', () => {
  let component: KoisAddComponent;
  let fixture: ComponentFixture<KoisAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoisAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoisAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
