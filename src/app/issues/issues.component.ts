import { Component, OnInit } from '@angular/core';

import { IssueService } from '../issue.service';
import { IssueTagsComponent } from '../issue-tags/issue-tags.component';
import { Observable } from 'rxjs/Observable';

/**
 * IssuesComponent
 *
 * Renders list of issues with
 * simple pagination controls.
 */

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})

export class IssuesComponent implements OnInit {
  issues: Observable<any>;
  pageLinks: object;

  constructor(private issueService: IssueService) { }

  /**
   * Get all issues available for the base URL, or for the one provided.
   * Also parses Link reader parameter to implement
   * pagination.
   *
   * @param url: string - optional URL to fetch issues from.
   */
  getIssues(url?: string): void {
    this.issueService.getIssues(url).subscribe((data) => {
      const link = data.headers.get('Link');
      if (link) {
        this.pageLinks = this.parseLinkHeader(link);
        console.log(this.pageLinks);
      }
      this.issues = data.body;
    });
  }

  /**
  * Returns pagination links from "Link" header parameter
  * in form of an object.
  *
  * @param header: string - "Link" header parameter string for parsing.
  */
  parseLinkHeader(header: string) {
    const links = {};

    header.split(',').forEach(element => {
      const m = element.match(/<([^>]*)>; rel="(.*)"/);
      links[m[2]] = m[1];
    });
    return links;
  }

  ngOnInit() {
    this.getIssues();
  }

}
