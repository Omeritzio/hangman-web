import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDispalyComponent } from './game-dispaly.component';

describe('GameDispalyComponent', () => {
  let component: GameDispalyComponent;
  let fixture: ComponentFixture<GameDispalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDispalyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameDispalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
