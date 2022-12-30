import { Component, OnInit } from '@angular/core';
import { QuestionI } from '../models/help.interface';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
})
export class HelpComponent implements OnInit {
  public open: boolean = false;
  public questions: QuestionI[] = [
    {
      question: 'como puedo sacar una cita',
      answer: 'accede a seccion home',
      open: false
    },
    {
      question: 'como puedo sacar una cita',
      answer: 'accede a seccion home',
      open: false
    },
    {
      question: 'como puedo sacarme un diente',
      answer: 'accede a seccion home',
      open: false
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
