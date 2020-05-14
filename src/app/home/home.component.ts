import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history/history.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  x1 = null;
  x2 = null;
  v1 = null;
  v2 = null;
  result = '';
  errorMessage = '';

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
  }

  validateForm() {
    this.errorMessage = ''
    if (this.x1 < 0 || this.x1 > 10000) {
      this.errorMessage = "x1 must be in the range of 0 and 10,000"
    } else if (this.x2 < 0 || this.x2 > 10000) {
      this.errorMessage = "x2 must be in the range of 0 and 10,000"
    } else if (this.x2 <= this.x1) {
      this.errorMessage = "x1 must be less than x2"
    } else if (this.v1 < 1 || this.v1 > 10000) {
      this.errorMessage = "v1 must be in the range of 1 and 10,000"
    } else if (this.v2 < 1 || this.v2 > 10000) {
      this.errorMessage = "v1 must be in the range of 1 and 10,000"
    }
  }

  reset() {
    this.x1 = null;
    this.x2 = null;
    this.v1 = null;
    this.v2 = null;
    this.result = "";
  }

  submit() {
    if (this.v2 > this.v1) {
      this.result = 'NO'
    } else {
      const jumbs = this.x2 - this.x1;
      const finalPoint_x1 = this.v1 * jumbs
      const finalPoint_x2 = this.v2 * jumbs + (this.x2 - this.x1)
      this.result = finalPoint_x1 === finalPoint_x2 ? "YES" : "NO";
    }
    this.historyService.history.push({
      date: new Date(),
      fields: { x1: this.x1, x2: this.x2, v1: this.v1, v2: this.v2 },
      result: this.result
    })
    console.log("result :: ", this.result)
  }
}
