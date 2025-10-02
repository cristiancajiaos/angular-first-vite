import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit {

  public currentDate: Date = new Date();
  public currentYear: number = 0;

  ngOnInit(): void {
    this.currentYear = this.currentDate.getFullYear();

  }

}
