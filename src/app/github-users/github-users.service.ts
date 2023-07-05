import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class GithubUsersApi {
  private apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {

  }

  getGithubUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}