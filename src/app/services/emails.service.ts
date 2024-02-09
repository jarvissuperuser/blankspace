import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Email} from '../models/email.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  constructor(private https: HttpClient) { }

  sendEmail(email: Email): void {
    this.https.post('https://us-central1-e-t-minerals.cloudfunctions.net/bookArtist', email,
      {headers: {'Content-Type': 'application/json'}}).subscribe(o => console.log(o));
  }
}
