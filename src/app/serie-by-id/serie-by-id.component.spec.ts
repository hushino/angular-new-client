import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieByIdComponent } from './serie-by-id.component';

describe('SerieByIdComponent', () => {
  let component: SerieByIdComponent;
  let fixture: ComponentFixture<SerieByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
