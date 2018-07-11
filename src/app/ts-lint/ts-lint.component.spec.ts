import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsLintComponent } from './ts-lint.component';

describe('TsLintComponent', () => {
  let component: TsLintComponent;
  let fixture: ComponentFixture<TsLintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsLintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsLintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
