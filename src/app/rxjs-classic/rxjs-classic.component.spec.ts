import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsClassicComponent } from './rxjs-classic.component';

describe('RxjsClassicComponent', () => {
  let component: RxjsClassicComponent;
  let fixture: ComponentFixture<RxjsClassicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsClassicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
