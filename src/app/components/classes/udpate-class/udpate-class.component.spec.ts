import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdpateClassComponent } from './udpate-class.component';

describe('UdpateClassComponent', () => {
  let component: UdpateClassComponent;
  let fixture: ComponentFixture<UdpateClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdpateClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdpateClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
