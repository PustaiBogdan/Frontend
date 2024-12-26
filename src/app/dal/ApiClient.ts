import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/enviorment';

@Injectable({
    providedIn: 'root',
  })
  export class ApiClient {
    constructor(private httpClient: HttpClient) {
    }
  
    // Metoda existentă pentru POST
    postRequest(service: string, body: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.httpClient
              .post(environment.apiUrl + 'functions/' + service, {
                headers: new HttpHeaders({
                  'X-Parse-Application-Id': environment.apiKey,
                }),
              })
              .subscribe({
                next: (response) => resolve(response),
                // error: (error) => reject(this.apiErrorHandler.handleException(error?.error))
                error: (error) => console.log('error')
              });
          });
        }

        getRequest(service: string, params?: any): Promise<any> {
          return new Promise((resolve, reject) => {
            this.httpClient.get(environment.apiUrl + service, {
              headers: new HttpHeaders({
                'X-Parse-Application-Id': environment.apiKey,
              }),
              params: params
            }).subscribe({
              next: (response) => resolve(response),
              error: (error) => console.log('error')
            });
          });
        }
    }
  
//   @Injectable({
//     providedIn: 'root',
//   })
//   class ApiErrorHandler {
//     constructor(private store: Store<IAppState>) {
//     }
  
//     public handleException(error): Error {
//       if (error === undefined || error.error === undefined) {
//         return new Error("Unknown reason");
//       }
  
//       try {
//         let serverError;
//         try {
//           serverError = JSON.parse(error.error);
//         } catch (e) {
//           serverError = error.error;
//         }
  
//         switch (serverError.code) {
//           case 498:
//             this.store.dispatch(AccountActions.logout());
//             return new Error("498: Invalid account");
//           case 404:
//             return new Error("404: Object not found");
//         }
  
//         return new Error(serverError);
//       } catch (e) {
//         FosLogger.logError(e);
//         return e;
//       }
//     }
//   }
  