import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkdownModule } from 'angular2-markdown';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { IssuesComponent } from '../issues/issues.component';
import { IssueDetailComponent } from './issue-detail.component';
import { IssueService } from '../issue.service';
import { IssueTagsComponent } from '../issue-tags/issue-tags.component';
import { APP_BASE_HREF } from '@angular/common';

describe('IssueDetailComponent', () => {
  let component: IssueDetailComponent;
  let fixture: ComponentFixture<IssueDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssuesComponent, IssueDetailComponent, IssueTagsComponent],
      imports: [
        HttpClientModule,
        MarkdownModule.forRoot(),
        RouterTestingModule.withRoutes([])
      ],
      providers: [IssueService, {provide: APP_BASE_HREF, useValue : '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
