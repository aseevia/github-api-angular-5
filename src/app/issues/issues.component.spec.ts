import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkdownModule } from 'angular2-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';

import { IssuesComponent } from './issues.component';
import { IssueService } from '../issue.service';
import { IssueTagsComponent } from '../issue-tags/issue-tags.component';
import { IssueDetailComponent } from '../issue-detail/issue-detail.component';



describe('IssuesComponent', () => {
  let component: IssuesComponent;
  let fixture: ComponentFixture<IssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssuesComponent, IssueDetailComponent, IssueTagsComponent],
      imports: [
        HttpClientModule,
        MarkdownModule.forRoot(),
        RouterTestingModule.withRoutes([])],
        providers: [IssueService, {provide: APP_BASE_HREF, useValue : '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
