import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComputerDetailsPage } from './computer-details.page';

describe('ComputerDetailsPage', () => {
  let component: ComputerDetailsPage;
  let fixture: ComponentFixture<ComputerDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComputerDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
