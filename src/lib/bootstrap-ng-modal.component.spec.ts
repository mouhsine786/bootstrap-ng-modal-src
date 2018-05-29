import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapNgModalComponent } from './bootstrap-ng-modal.component';

describe('BootstrapNgModalComponent', () => {
  let component: BootstrapNgModalComponent;
  let fixture: ComponentFixture<BootstrapNgModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapNgModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapNgModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
