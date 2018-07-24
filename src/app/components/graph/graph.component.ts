import { AfterContentInit, Component } from '@angular/core';
import * as CryptowatchEmbed from 'cryptowatch-embed';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements AfterContentInit {

  sandboxMode = true;
  constructor() { }

  ngAfterContentInit() {
    const chart = new CryptowatchEmbed('gdax', 'btcusd', {
      timePeriod: '1m',
      presetColorScheme: 'delek'
    });
    chart.mount('#chart');
  }
}
