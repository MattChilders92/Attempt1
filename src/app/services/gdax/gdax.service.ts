import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account, AuthenticatedClient, PublicClient, OrderInfo } from 'gdax';
@Injectable()
export class GdaxService {
  authedClient = null;
  publicClient = null;

  constructor() {
    const key = 'dc7b60e427315ae900673fe59120aba3';
    const secret = 'Trq9OUyERDHv/Zmm7K9TnQP9SXdcNt5M9uRz26YmhPl7CbWYX6P7PRm/GZWtHhlafykqAU6maS+gdvdCW8RJ2w==';
    const passphrase = 'riui63tumh';
    const sandboxURI = 'https://api-public.sandbox.gdax.com';

    this.authedClient = new AuthenticatedClient(
      key,
      secret,
      passphrase,
      sandboxURI
    );
    this.publicClient = new PublicClient();
  }

  getBalances(): Observable<Account[]> {
    return this.authedClient.getAccounts();
  }

  getOrders(): Observable<OrderInfo[]> {
    return this.authedClient.getOrders();
  }
}
