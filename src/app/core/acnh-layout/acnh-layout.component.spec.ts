import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcnhLayoutComponent } from './acnh-layout.component';

describe('AcnhLayoutComponent', () => {
  let component: AcnhLayoutComponent;
  let fixture: ComponentFixture<AcnhLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcnhLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcnhLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
