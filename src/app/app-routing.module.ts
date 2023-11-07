import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { CalculatorComponent } from './calculator/calculator.component';

/* I define all the routes I will use to navigate through  my page */

const routes: Routes = [
  { path: '', redirectTo: '/greetings', pathMatch: 'full' },
  { path: 'greetings', component: GreetingsComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'transaction/:id', component: TransactionDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
