import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdataComponent } from './odata.component';

describe('OdataComponent', () => {
  let component: OdataComponent;
  let fixture: ComponentFixture<OdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
