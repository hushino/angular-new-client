import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeByIdComponent } from './anime-by-id.component';

describe('AnimeByIdComponent', () => {
  let component: AnimeByIdComponent;
  let fixture: ComponentFixture<AnimeByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
