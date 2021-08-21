import { ComponentFixture, TestBed } from '@angular/core/testing';

import { verificationComponent } from './verification_mail.component';

describe('PopupComponent', () => {
  let component: verificationComponent;
  let fixture: ComponentFixture<verificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ verificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(verificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
