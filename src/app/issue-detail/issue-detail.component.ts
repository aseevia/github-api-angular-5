import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { IssueService } from '../issue.service';

/**
 * IssueDetailComponent
 *
 * Renders details page with comments for a single issue.
 * Implements markdown rendering and syntax highlighting.
 */

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss']
})

export class IssueDetailComponent implements OnInit {
  @Input() issue: Object;
  @Input() comments: Array<Object>;

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getIssue();
    this.getComments();
  }

  goBack(): void {
    this.location.back();
  }

  /**
  * Get a single issue by issue number.
  */
  getIssue(): void {
    const num = +this.route.snapshot.paramMap.get('number');
    this.issueService.getIssue(num)
      .subscribe(issue => this.issue = issue);
  }

  /**
  * Get comments for the issue by issue number.
  */
  getComments(): void {
    const num = +this.route.snapshot.paramMap.get('number');
    this.issueService.getComments(num)
      .subscribe(comments => this.comments = comments);
  }

}
