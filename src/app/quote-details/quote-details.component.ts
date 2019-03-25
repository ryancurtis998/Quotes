import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quotes'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  upvote = 0;


upVote (){
  this.upvote = this.upvote +1;
}

downvote = 0;
downVote (){
  this.downvote = this.downvote +1;
}
  constructor() { }

  ngOnInit() {
  }

}
