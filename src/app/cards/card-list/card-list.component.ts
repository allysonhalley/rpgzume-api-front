import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

import { CardService } from '../../core/services/card.service';
import { Card } from '../../core/models/models';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatCardSubtitle,
  MatCardFooter
} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatListModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle, MatDivider, MatCardFooter],
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
