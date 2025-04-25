import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Uf } from './components/cadastro/uf';

@Injectable({
  providedIn: 'root'
})
export class BrasilApiService {

  constructor(private http: HttpClient) { }

  getCep(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
  getCidades(uf: string) {
    return this.http.get(`https://servicodados.ibge.gov.br/api/v2/malhas/${uf}`);
  }
  getEstados() :Observable<Uf[]> {
    return this.http.get<Uf[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados');    
  }
  getBairros(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
  getLogradouros(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
  getPaises() {
    return this.http.get('https://restcountries.com/v3.1/all');
  }
  getPaisesByName(name: string) {
    return this.http.get(`https://restcountries.com/v3.1/name/${name}`);
  }
  getPaisesByCode(code: string) {
    return this.http.get(`https://restcountries.com/v3.1/alpha/${code}`);
  }
  getPaisesByRegion(region: string) { 
    return this.http.get(`https://restcountries.com/v3.1/region/${region}`);
  }
  getPaisesBySubregion(subregion: string) {
    return this.http.get(`https://restcountries.com/v3.1/subregion/${subregion}`);
  }
  getPaisesByCurrency(currency: string) {
    return this.http.get(`https://restcountries.com/v3.1/currency/${currency}`);
  }
  getPaisesByLanguage(language: string) {
    return this.http.get(`https://restcountries.com/v3.1/language/${language}`);
  }
  getPaisesByDemonym(demonym: string) {
    return this.http.get(`https://restcountries.com/v3.1/demonym/${demonym}`);
  }
  getPaisesByTimeZone(timezone: string) {
    return this.http.get(`https://restcountries.com/v3.1/timezone/${timezone}`);
  }
  getPaisesByCapital(capital: string) {
    return this.http.get(`https://restcountries.com/v3.1/capital/${capital}`);
  }
  getPaisesByRegionAndSubregion(region: string, subregion: string) {
    return this.http.get(`https://restcountries.com/v3.1/region/${region}/subregion/${subregion}`);
  }
  getPaisesByRegionAndCurrency(region: string, currency: string) {
    return this.http.get(`https://restcountries.com/v3.1/region/${region}/currency/${currency}`);
  }
  getPaisesByRegionAndLanguage(region: string, language: string) {
    return this.http.get(`https://restcountries.com/v3.1/region/${region}/language/${language}`);
  }
  getPaisesByRegionAndDemonym(region: string, demonym: string) {
    return this.http.get(`https://restcountries.com/v3.1/region/${region}/demonym/${demonym}`);
  }
  getPaisesByRegionAndTimeZone(region: string, timezone: string) {
    return this.http.get(`https://restcountries.com/v3.1/region/${region}/timezone/${timezone}`);
  }
  getPaisesByRegionAndCapital(region: string, capital: string) {
    return this.http.get(`https://restcountries.com/v3.1/region/${region}/capital/${capital}`);
  }
  getPaisesBySubregionAndCurrency(subregion: string, currency: string) {
    return this.http.get(`https://restcountries.com/v3.1/subregion/${subregion}/currency/${currency}`);
  }
  getPaisesBySubregionAndLanguage(subregion: string, language: string) {
    return this.http.get(`https://restcountries.com/v3.1/subregion/${subregion}/language/${language}`);
  }
  getPaisesBySubregionAndDemonym(subregion: string, demonym: string) {
    return this.http.get(`https://restcountries.com/v3.1/subregion/${subregion}/demonym/${demonym}`);
  }
  getPaisesBySubregionAndTimeZone(subregion: string, timezone: string) {
    return this.http.get(`https://restcountries.com/v3.1/subregion/${subregion}/timezone/${timezone}`);
  }
}
