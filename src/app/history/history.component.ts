import { Component, OnInit } from '@angular/core';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history = []
  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.history = this.historyService.history
  }

  getDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} | ${date.getHours()}:${date.getMinutes()}`
  }
}
