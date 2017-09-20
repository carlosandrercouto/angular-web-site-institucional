import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuemSomosComponent } from './page-quem-somos.component';

describe('PageQuemSomosComponent', () => {
  let component: PageQuemSomosComponent;
  let fixture: ComponentFixture<PageQuemSomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageQuemSomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQuemSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
