import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudPlayerComponent } from './aud-player.component';

describe('AudPlayerComponent', () => {
  let component: AudPlayerComponent;
  let fixture: ComponentFixture<AudPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
