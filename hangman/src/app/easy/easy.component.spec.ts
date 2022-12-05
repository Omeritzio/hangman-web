import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyComponent } from './easy.component';

describe('EasyComponent', () => {
  let component: EasyComponent;
  let fixture: ComponentFixture<EasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
