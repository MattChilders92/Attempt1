import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { SafePipe } from '@app/util/safe.pipe';
import { GraphComponent } from '@app/components/graph/graph.component';
import { OrderBookComponent } from '@app/components/order-book/order-book.component';
import { YourOrdersComponent } from '@app/components/your-orders/your-orders.component';
import { BalanceTableComponent } from '@app/components/balance-table/balance-table.component';
import { GdaxService } from '@app/services/gdax/gdax.service';

const Components = [
  AppComponent, BalanceTableComponent, GraphComponent, OrderBookComponent, SafePipe, YourOrdersComponent
];

@NgModule({
  declarations: Components,
  imports: [
    BrowserModule, FlexLayoutModule
  ],
  providers: [GdaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
