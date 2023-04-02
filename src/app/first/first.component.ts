import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get.data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  constructor(private getDataservice: GetDataService) {}
  users: any;

  deleteUser(id: number) {
    this.getDataservice.deleteData(id).subscribe(() => {
      const idx = this.users.findIndex(
        (el: object) => el['id' as keyof typeof el] === id
      );
      if (idx >= 0) {
        this.users.splice(idx, 1);
      }
    });
  }

  ngOnInit(): void {
    this.getDataservice.getDataMethod().subscribe((res) => {
      this.users = res['data' as keyof typeof res];
    });
  }
}
