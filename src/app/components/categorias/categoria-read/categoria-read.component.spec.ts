import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaReadComponent } from './categoria-read.component';

describe('CategoriaReadComponent', () => {
  let component: CategoriaReadComponent;
  let fixture: ComponentFixture<CategoriaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaReadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
