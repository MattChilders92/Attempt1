import { Component, OnInit } from '@angular/core';
import { GdaxService } from '@app/services/gdax/gdax.service';
import { Account } from 'gdax';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-balance-table',
  templateUrl: './balance-table.component.html',
  styleUrls: ['./balance-table.component.scss']
})
export class BalanceTableComponent implements OnInit {
  balances: Account[] = [];

  constructor(private gdaxService: GdaxService) { }

  ngOnInit() {
    setTimeout(() => {
      this.gdaxService.getBalances()
      .subscribe(
        accounts => this.balances = accounts,
        error => {
          console.log(error);
        }
      );
    }, 5000); // Wait for Authentication
    // TODO: find an event to hook this too
  }
}
