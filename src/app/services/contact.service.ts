import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactModel } from '../models/contact.model';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  createContact(contact: ContactModel) {
    let URL = URL_SERVICIOS + '/contacts';
    return this.http.post<ContactModel>(URL, contact);
  }

}
