import { Component, OnInit, Input } from '@angular/core';

/**
 * IssueTagsComponent
 *
 * Renders list of labels
 */

@Component({
  selector: 'app-issue-tags',
  templateUrl: './issue-tags.component.html',
  styleUrls: ['./issue-tags.component.scss']
})

export class IssueTagsComponent implements OnInit {
  @Input() labels: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
