import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoisViewComponent } from './kois-view.component';

describe('KoisViewComponent', () => {
  let component: KoisViewComponent;
  let fixture: ComponentFixture<KoisViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoisViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoisViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
