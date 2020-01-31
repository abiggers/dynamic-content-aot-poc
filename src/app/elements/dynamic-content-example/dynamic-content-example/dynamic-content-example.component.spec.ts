import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContentExampleComponent } from './dynamic-content-example.component';

describe('DynamicContentExampleComponent', () => {
  let component: DynamicContentExampleComponent;
  let fixture: ComponentFixture<DynamicContentExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicContentExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicContentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
