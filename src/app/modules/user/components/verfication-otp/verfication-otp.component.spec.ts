import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerficationOtpComponent } from './verfication-otp.component';

describe('VerficationOtpComponent', () => {
  let component: VerficationOtpComponent;
  let fixture: ComponentFixture<VerficationOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerficationOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerficationOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
