import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on',
  templateUrl: './relay-on.component.html',
  styleUrls: ['./relay-on.component.css']
})
export class RelayOnComponent implements OnInit {

  relayOn = [
    {
      icon: 'sl-icon-envelope-open text-info-gradiant',
      field: 'Mandaci una mail',
      fieldText: 'fabrizio.perticarari@virgilio.it'
    },
    {
      icon: 'sl-icon-call-end text-info-gradiant',
      field: 'Chiamaci',
      fieldText: 'Chiamaci al +39 3663467422'
    },
    {
      icon: 'sl-icon-map text-info-gradiant',
      field: 'Vieni da noi',
      fieldText: 'Vieni a trovarci in loco'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
