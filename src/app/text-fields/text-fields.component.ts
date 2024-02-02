import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'text-fields',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-fields.component.html',
  styleUrl: './text-fields.component.scss'
})
export class TextFieldsComponent implements OnInit {

  constructor (private appService: AppService) {}
  
  formData: any
  ngOnInit(): void {
    this.appService.getFormData().subscribe((data) => {
      this.formData = data
    })
  }

  @Input('heading') heading: string | undefined;
  @Input('type') type: string | undefined;
  @Input('value') value: string | undefined;
  @Input('index') index: number | undefined;
  // @Input('formData') formData: [
  //   {
  //     key: '',
  //     value: '',
  //     type: ''
  //   }
  // ] | undefined;

  formData$: any;
  textField(event: any){
    this.formData?.forEach(element => {
      if(element?.key === event?.target?.name){
        element.value = event?.target?.value;
      }
    })

    console.log(this.formData)
  }


}
