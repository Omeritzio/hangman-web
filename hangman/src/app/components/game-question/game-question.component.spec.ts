import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameQuestionComponent } from './game-question.component';

describe('GameQuestionComponent', () => {
  let component: GameQuestionComponent;
  let fixture: ComponentFixture<GameQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
