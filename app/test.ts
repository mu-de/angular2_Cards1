import {Component} from 'angular2/core';
import {Cards, Card} from './cards';

@Component({
  selector: 'test',
  templateUrl: 'app/test.html',
  directives: [Cards, Card]
})
export class Test{
  constructor(){
    console.log('Test created.');
  }
}