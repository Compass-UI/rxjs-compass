import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbleBeadsComponent } from './marble-beads.component';

describe('MarbleBeadsComponent', () => {
  let component: MarbleBeadsComponent;
  let fixture: ComponentFixture<MarbleBeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarbleBeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarbleBeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
