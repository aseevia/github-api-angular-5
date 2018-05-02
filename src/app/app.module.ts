import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'angular2-markdown';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { IssueService } from './issue.service';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { IssueTagsComponent } from './issue-tags/issue-tags.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    IssueDetailComponent,
    IssueTagsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MarkdownModule.forRoot(),
    AppRoutingModule,
    RouterModule
    ],
  providers: [IssueService, RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
