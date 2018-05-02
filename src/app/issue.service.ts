import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class IssueService {

  /**
  * Get all issues available for the base URL.
  * Returns full HTTP response with headers,
  * so we can read Link reader parameter to implement
  * pagination.
  *
  * @param url: string - optional URL to fetch issues from.
  */
  getIssues(url?: string): Observable<any> {
    if (url) {
      return this.http.get(url, { observe: 'response' })
        .pipe(
          catchError(this.handleError('getIssues', []))
        );
    } else {
      return this.http.get('https://api.github.com/repos/angular/angular.js/issues?per_page=10', { observe: 'response' })
        .pipe(
          catchError(this.handleError('getIssues', []))
        );
    }
  }

  /**
  * Get a single issue by issue number.
  *
  * @param num: number - number of the issue to fetch
  */
  getIssue(num: number): Observable<any> {
    const url = `https://api.github.com/repos/angular/angular.js/issues/${num}`;
    return this.http.get(url).pipe(
      catchError(this.handleError('getIssue', []))
    );
  }

  /**
 * Get comments by issue number.
 *
 * @param num: number - number of the issue to fetch comments for
 */
  getComments(num: number): Observable<any> {
    const url = `https://api.github.com/repos/angular/angular.js/issues/${num}/comments`;
    return this.http.get(url).pipe(
      catchError(this.handleError('getComments', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }
}
