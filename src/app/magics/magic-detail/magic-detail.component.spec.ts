import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicDetailComponent } from './magic-detail.component';

describe('MagicDetailComponent', () => {
  let component: MagicDetailComponent;
  let fixture: ComponentFixture<MagicDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagicDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MagicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
