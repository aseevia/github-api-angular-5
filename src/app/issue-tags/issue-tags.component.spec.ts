import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTagsComponent } from './issue-tags.component';

describe('IssueTagsComponent', () => {
  let component: IssueTagsComponent;
  let fixture: ComponentFixture<IssueTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
