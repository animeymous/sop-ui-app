import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  formData$ = new BehaviorSubject(
    [
      {
        key: 'Email',
        value: '',
        type: 'input'
      },
      {
        key: 'Full Name',
        value: '',
        type: 'input'
      },
      {
        key: 'Age',
        value: '',
        type: 'input'
      },
      {
        key: 'Highest Level of Education',
        value: '',
        type: 'dropdown'
      },
      {
        key: 'Institute where you completed your highest level of education',
        value: '',
        type: 'input'
      },
      {
        key: 'What did you study',
        value: '',
        type: 'input'
      },
      {
        key: 'What institute did you get admitted to in Canada?',
        value: '',
        type: 'input'
      },
      {
        key: 'What is your program of study in Canada?',
        value: '',
        type: 'input'
      },
      {
        key: 'Which country are you applying from?',
        value: '',
        type: 'input'
      },
      {
        key: 'What are your future goals?',
        value: '',
        type: 'input'
      },
      {
        key: 'English Scores - Listening?',
        value: '',
        type: 'input'
      },
      {
        key: 'English Scores - Reading?',
        value: '',
        type: 'input'
      },
      {
        key: 'English Scores - Speaking?',
        value: '',
        type: 'input'
      },
      {
        key: 'English Scores - Writings?',
        value: '',
        type: 'input'
      },
      {
        key: 'Did you pay your first year tuition?',
        value: '',
        type: 'radio'
      },
      {
        key: 'How much tuition fee did you pay?',
        value: '',
        type: 'input'
      },
      {
        key: 'Did you do a GIC?',
        value: '',
        type: 'radio'
      },
      {
        key: 'How much did you pay towards GIC?',
        value: '',
        type: 'input'
      }
    ]
  )

  constructor(private httpClient: HttpClient) { }

  getFormData(){
    return this.formData$.asObservable()
  }

  sendFormData(formData){
    return this.httpClient.post('http://localhost:3000', formData)
  }
  
}
