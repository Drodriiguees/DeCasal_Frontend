import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesasCreateComponent } from './despesas-create.component';

describe('DespesasCreateComponent', () => {
  let component: DespesasCreateComponent;
  let fixture: ComponentFixture<DespesasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DespesasCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DespesasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
