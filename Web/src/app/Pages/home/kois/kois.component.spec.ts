import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoisComponent } from './kois.component';

describe('KoisComponent', () => {
  let component: KoisComponent;
  let fixture: ComponentFixture<KoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
