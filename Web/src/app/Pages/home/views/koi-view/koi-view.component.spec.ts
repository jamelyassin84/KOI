import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoiViewComponent } from './koi-view.component';

describe('KoiViewComponent', () => {
  let component: KoiViewComponent;
  let fixture: ComponentFixture<KoiViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoiViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
