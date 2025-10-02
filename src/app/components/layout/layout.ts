import { Component, OnInit } from '@angular/core';
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-layout',
  imports: [Header, Main, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit {
  ngOnInit(): void {

  }

}
