import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '@app/config';
import { ServiceHTTP } from '@app/servicehttp';
import { ResponseMessage } from '@shared/util/responsemessage.model';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends ServiceHTTP<Contact> {
  responseHTTP?: ResponseMessage;

  constructor(http: HttpClient) {
    super(Contact, http, 'contact');
  }

  sendMessage(message: Contact): void {
    const response = this.http.post<string>(`${Config.baseUrlApi}/contact/sendmessage`, message);
    response.subscribe((value)=>{
      JSON.parse(value);
    });
  }
}
