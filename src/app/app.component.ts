import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TextFieldsComponent } from './text-fields/text-fields.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TextFieldsComponent, HttpClientModule],
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  constructor( private appService: AppService) {}

  formData: any = [
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

  submitForm(){
    this.appService.getFormData().subscribe((data)=> {
      console.log(data)

      this.appService.sendFormData(data).subscribe((response) => {
        console.log(response)
      })
    })
  }
  title = 'sop-ui-app';
}
