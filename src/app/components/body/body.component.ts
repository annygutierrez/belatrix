import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CURRENCY } from '../../utils/constants';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  currency = CURRENCY;
  formExchange = new FormGroup({
    inputToConvert: new FormControl(0),
    inputConverted: new FormControl(0),
    currencyToConvert: new FormControl('USD'),
    currencyConverted: new FormControl('EUR'),
  });

  constructor() { }

  ngOnInit() {
  }

}
