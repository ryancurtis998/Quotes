import { Component, OnInit } from '@angular/core';
import {Quote} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
    quotes = [
        new Quote(1,'Watch Finding Nemo','Find an online version and watch merlin find his son', new Date(2018,3,14)),
        new Quote(2,'Buy Cookies','I have to buy cookies for the parrot', new Date(2018,4,14)),
        new Quote(3, 'Get new Phone Case','Diana has her birthday coming up soon', new Date(2018,5,14)),
        new Quote(4, 'Get Dog Food','Pupper likes expensive sancks', new Date(2018,6,14)),
        new Quote(5, 'Solve math homework','Damn Math', new Date(2018,7,14)),
        new Quote(6, 'Plot my world domination plan','Cause I am an evil overlord', new Date(2018,8,14)),

    ]
Quote(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription ;
}
    deleteQuote(isComplete,index){
       if (isComplete){
           let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

           if(toDelete){
               this.quotes.splice(index,1)
           }
       }
   }
   addNewQuote(quote){
    let QuoteLength = this.Quote.length;
    quote.id=QuoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

}
  constructor() { }
  ngOnInit() {
  }
}
