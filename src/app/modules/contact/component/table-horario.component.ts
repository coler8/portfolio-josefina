import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-horario',
  templateUrl: './table-horario.component.html',
})
export class TableHorarioComponent implements OnInit {

  public horario: any;
  constructor() {
    this.horario = [
      {
        nameDay: 'Lunes',
        hours: '09:00 a 21:00'
      },
      {
        nameDay: 'Martes',
        hours: '09:00 a 21:00'
      },
      {
        nameDay: 'Miercoles',
        hours: '09:00 a 21:00'
      },
      {
        nameDay: 'Jueves',
        hours: '09:00 a 21:00'
      },
      {
        nameDay: 'Viernes',
        hours: '09:00 a 21:00'
      }
    ]
  }

  ngOnInit(): void {
  }

}
