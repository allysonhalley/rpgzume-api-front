import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import {Card, Magic} from "../../core/models/models";
import { MagicService } from "../../core/services/magic.service";

@Component({
  selector: 'app-magic-list',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatListModule, MatCardModule, MatDividerModule],
  templateUrl: './magic-list.component.html',
  styleUrls: ['../../shared/shared-list.component.scss']
})
export class MagicListComponent implements OnInit {
  magics: Magic[] = [];

  constructor(private magicService: MagicService) {}

  async ngOnInit() {
    try {
      const response = await this.magicService.getAllMagics();
      this.magics = response.data || [];
    } catch (error) {
      console.error('Erro ao buscar magias:', error);
    }
  }
}
