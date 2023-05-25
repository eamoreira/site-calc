import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteCalcComponent } from './site-calc.component';

describe('SiteCalcComponent', () => {
  let component: SiteCalcComponent;
  let fixture: ComponentFixture<SiteCalcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteCalcComponent]
    });
    fixture = TestBed.createComponent(SiteCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
