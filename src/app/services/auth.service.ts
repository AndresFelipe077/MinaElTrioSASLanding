import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { LOGIN_QUERY, REGISTER_MUTATION } from '../graphql.queries/graphql.auth.queries';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExecutionResult } from 'graphql';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private apollo: Apollo,
    private router: Router
  ) { }

  /**
   * Login of user and get token
   * @param email string
   * @param password string
   * @returns Observable<ApolloQueryResult<unknown>>
   */
  login(email: string, password: string) {
    return this.apollo.watchQuery({
      query: LOGIN_QUERY,
      variables: {
        email,
        password
      }
    }).valueChanges;
  }

   /**
   * Create new user
   * @param user UserModel
   * @returns Observable<UserModel>
   */
  register(userInput: UserModel) {
    return this.apollo.mutate({
      mutation: REGISTER_MUTATION,
      variables: {
        input: userInput // Asegúrate de que el nombre de la variable coincida con la definición en tu mutación
      }
    });
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
