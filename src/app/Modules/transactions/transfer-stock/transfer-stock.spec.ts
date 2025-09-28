import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferStock } from './transfer-stock';

describe('TransferStock', () => {
  let component: TransferStock;
  let fixture: ComponentFixture<TransferStock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferStock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferStock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
