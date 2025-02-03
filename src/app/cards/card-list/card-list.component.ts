import { Component, OnInit } from '@angular/core';
import { CardService } from '../../core/services/card.service';
import { Card } from '../../core/models/models';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards: Card[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.getAllCards().then(response => {
      this.cards = response.data._embedded.cards;
    });
  }
}
