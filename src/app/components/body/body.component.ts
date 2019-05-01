import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { startWith, switchMap } from 'rxjs/operators';
import { CURRENCY } from '../../utils/constants';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  private currency = CURRENCY;
  private formExchange = new FormGroup({
    inputToConvert: new FormControl(null, Validators.required),
    inputConverted: new FormControl({ value: null, disabled: true }),
    currencyToConvert: new FormControl('USD'),
    currencyConverted: new FormControl('EUR')
  });
  private subscription: Subscription;
  private rate;

  constructor(private currencyService: CurrencyService) {}

  async calculateExchange() {
    const { inputToConvert, currencyToConvert, currencyConverted } = this.formExchange.value;
    if (!this.rate) {
      const observable = this.currencyService.getConversion(currencyToConvert, currencyConverted);
      const responseGetConversion = await observable.toPromise();
      this.rate = responseGetConversion.rates[currencyConverted];
    }
    let _inputConverted = inputToConvert ? (currencyToConvert === currencyConverted ? inputToConvert : inputToConvert * this.rate) : null;
    this.formExchange.patchValue({ inputConverted: _inputConverted });
  }

  ngOnInit() {
    const { currencyToConvert, currencyConverted } = this.formExchange.value;
    this.subscription = interval(600000)
    .pipe(
      startWith(0),
      switchMap(() => this.currencyService.getConversion(currencyToConvert, currencyConverted))
    )
    .subscribe(response => {
      console.log(response)
      const { currencyConverted } = this.formExchange.value;
      this.rate = response.rates[currencyConverted];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
