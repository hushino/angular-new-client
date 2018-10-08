import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeByIdComponent } from './episode-by-id.component';

describe('EpisodeByIdComponent', () => {
  let component: EpisodeByIdComponent;
  let fixture: ComponentFixture<EpisodeByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
