import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get.data.service';

@Component({
  selector: 'app-sourses',
  templateUrl: './sourses.component.html',
  styleUrls: ['./sourses.component.css'],
})
export class SoursesComponent implements OnInit {
  constructor(private getDataservice: GetDataService) {}
  sourses: any;
  ngOnInit(): void {
    this.getDataservice.getDataMethod().subscribe((res) => {
      this.sourses = res['data' as keyof typeof res];
    });
  }
}
