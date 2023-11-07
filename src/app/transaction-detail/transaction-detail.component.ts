import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../services/transaction.service';


@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
  transactionId: string | null = '';
  transaction: any;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.transactionId = params.get('id');
      console.log(this.transactionId);
      this.transactionService.getTransactionDetail(this.transactionId)
        .subscribe(data => {
          this.transaction = data;
          console.log("transaction: ", this.transaction);
        });
    });
  }
}
