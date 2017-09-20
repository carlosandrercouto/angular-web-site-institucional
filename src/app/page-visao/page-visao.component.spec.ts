import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVisaoComponent } from './page-visao.component';

describe('PageVisaoComponent', () => {
  let component: PageVisaoComponent;
  let fixture: ComponentFixture<PageVisaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageVisaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
