import {Component, Directive, ContentChildren, QueryList, 
  ViewContainerRef, TemplateRef, Input} from 'angular2/core';

@Directive({
  selector: '[card]'
})
export class Card {
  @Input() title: string;
  
  constructor(public viewContainer: ViewContainerRef, public templateRef: TemplateRef){
    console.log('Card created.');
    
    var randomNumber = Math.round(Math.random());
    if(randomNumber == 1){
      this.viewContainer.createEmbeddedView(this.templateRef);
      console.log(templateRef);
    }
  }
}

@Component({
  selector: 'cards',
  templateUrl: 'app/cards.html'
})
export class Cards{
  @ContentChildren(Card) cards : QueryList<Card>;
  constructor(){
    console.log('Cards created');
  }
}
