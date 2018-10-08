import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreByIdComponent } from './genre-by-id.component';

describe('GenreByIdComponent', () => {
  let component: GenreByIdComponent;
  let fixture: ComponentFixture<GenreByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
