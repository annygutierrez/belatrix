import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { startWith, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  private currency = environment.CURRENCY;
  private formExchange = this.fb.group({
    inputToConvert: [null, [Validators.required]],
    inputConverted: [null, { disabled: true }],
    currencyToConvert: ['USD'],
    currencyConverted: ['EUR']
  });
  private subscription: Subscription;
  private rate;
  
  constructor(private currencyService: CurrencyService, private fb: FormBuilder) {}

  async calculateExchange() {
    const { inputToConvert, currencyToConvert, currencyConverted } = this.formExchange.value;
    if (!this.rate) {
      const observable = this.currencyService.getConversion(currencyToConvert, currencyConverted);
      const responseGetConversion = await observable.toPromise();
      this.rate = responseGetConversion.rates[currencyConverted];
    }
    let _inputConverted = inputToConvert ? (currencyToConvert === currencyConverted ? inputToConvert : inputToConvert * this.rate) : null;
    this.formExchange.patchValue({ inputConverted: this.formatValueInput(_inputConverted) });
  }

  formatValueInput(value: Number) {
    const decimal=  /^[-+]?[0-9]+\.[0-9]+$/;
    const valueFormatted = (decimal.test(String(value)) && value.toString().split('.')[1].length > 4) ? Number(value).toFixed(4) : value;
    return valueFormatted;
  }

  validateLengthDecimals(value) {
    this.formExchange.patchValue({ inputToConvert: this.formatValueInput(value) });
  }

  ngOnInit() {
    const { currencyToConvert, currencyConverted } = this.formExchange.value;
    this.subscription = interval(600000)
    .pipe(
      startWith(0),
      switchMap(() => this.currencyService.getConversion(currencyToConvert, currencyConverted))
    )
    .subscribe(response => {
      const { currencyConverted } = this.formExchange.value;
      this.rate = response.rates[currencyConverted];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
