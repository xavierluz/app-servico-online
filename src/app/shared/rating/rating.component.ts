import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  rating:number[] = [1,2,3,4,5];
  rate:number=0;
  visualizarRating:number;
  constructor() { }

  ngOnInit() {
  }

  setRate(rate:number){
    this.rate = rate;
    this.visualizarRating=undefined;
  }
  setVisualizarRate(rate:number){
    if(this.visualizarRating === undefined){
      this.visualizarRating = this.rate;
    }
    this.rate = rate;
  }
  clearVisualizarRate(){
    if(this.visualizarRating !== undefined){
      this.rate = this.visualizarRating;
      this.visualizarRating=undefined;
    }
  }
}
