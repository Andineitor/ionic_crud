import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComputerListPage } from './computer-list.page';

describe('ComputerListPage', () => {
  let component: ComputerListPage;
  let fixture: ComponentFixture<ComputerListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComputerListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
