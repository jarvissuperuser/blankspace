import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailerComponent } from './thumbnailer.component';

describe('ThumbnailerComponent', () => {
  let component: ThumbnailerComponent;
  let fixture: ComponentFixture<ThumbnailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
