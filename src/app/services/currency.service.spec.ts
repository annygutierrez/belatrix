import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CurrencyService } from './currency.service';
import { environment } from '../../environments/environment';

describe('CurrencyService', () => {
  let injector: TestBed;
  let service: CurrencyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrencyService]
    });
    injector = getTestBed();
    service = injector.get(CurrencyService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: CurrencyService = TestBed.get(CurrencyService);
    expect(service).toBeTruthy();
  });

  describe('#getConversion', () => {
    const dummyResponse = { amount: 1, base: 'EUR', date: '2019-05-02', rates: {USD: 1.1212} };

    it('should return an Observable', () => {
      const params = { from: 'USD', to: 'EUR' };
      service.getConversion(params.from, params.to).subscribe(response => {
        console.log(response)
        expect(response).toEqual(dummyResponse);
      });
  
      const req = httpMock.expectOne(`${environment.HOST}?from=${params.from}&to=${params.to}`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyResponse);
    });
  });

});
