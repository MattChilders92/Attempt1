import { Component, OnInit } from '@angular/core';
import { OrderInfo } from 'gdax';

@Component({
  selector: 'app-your-orders',
  templateUrl: './your-orders.component.html',
  styleUrls: ['./your-orders.component.scss']
})
export class YourOrdersComponent implements OnInit {
  orders: OrderInfo[];
  constructor() { }

  ngOnInit() {
  }
}
