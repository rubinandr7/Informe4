import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentPComponent } from './comment-p.component';

describe('CommentPComponent', () => {
  let component: CommentPComponent;
  let fixture: ComponentFixture<CommentPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
