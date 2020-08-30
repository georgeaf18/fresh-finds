import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCutomerComponent } from './login-customer.component';

describe('LoginCutomerComponent', () => {
  let component: LoginCutomerComponent;
  let fixture: ComponentFixture<LoginCutomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginCutomerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCutomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
