import { Component, OnInit } from '@angular/core';
import {Quote} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
    quotes = [
        new Quote(1,'Wesley','My life is a message', new Date(2018,3,14)),
        new Quote(2,'Terry','Broken crayons still colour', new Date(2018,4,14)),
        new Quote(3, 'Nicholas','The wisest mind has something yet to learn', new Date(2018,5,14)),
        new Quote(4, 'Ryan','You matter', new Date(2018,6,14)),
        new Quote(5, 'Johari','Dream big pray bigger', new Date(2018,7,14)),
        new Quote(6, 'Teddy','Fight till the last gasp', new Date(2018,8,14)),

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
