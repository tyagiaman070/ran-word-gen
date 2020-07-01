import { Component } from '@angular/core';
import WordsRandom from '../utils/words';
import Country from '../utils/countryName';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'random-proj';

  words = '';
  limit = 0;

  countrylimit = 0;
  country = '';

  handleSlider(newLimit: number) {
    this.limit = newLimit;
  }

  generateWords = () => {
    this.words = WordsRandom.slice(0, this.limit).join(', ');
  };

  handleSliderCountry = (newCountryLimit: number) => {
    this.countrylimit = newCountryLimit;
  };

  generateCountry = () => {
    this.country = Country.slice(0, this.countrylimit).join(', ');
  };
}
