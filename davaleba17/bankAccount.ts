class BankAccount {
    private balance: number;
    private transactionHistory: string[] = [];
  
    constructor(private accountNumber: string, initialBalance: number) {
      this.balance = initialBalance;
    }
  
    getAccountInfo(): { accountNumber: string; balance: number } {
      return { accountNumber: this.accountNumber, balance: this.balance };
    }
  
    deposit(amount: number): void {
      if (amount <= 0) throw new Error("Deposit amount must be positive.");
      this.balance += amount;
      this.recordTransaction(`Deposited: $${amount}`);
    }
  
    withdraw(amount: number): void {
      if (amount <= 0) throw new Error("Withdrawal amount must be positive.");
      if (amount > this.balance) throw new Error("Insufficient funds.");
      this.balance -= amount;
      this.recordTransaction(`Withdrew: $${amount}`);
    }
  
    transferFunds(amount: number, recipient: BankAccount): void {
      if (amount <= 0) throw new Error("Transfer amount must be positive.");
      if (amount > this.balance) throw new Error("Insufficient funds.");
      this.withdraw(amount);
      recipient.deposit(amount);
      this.recordTransaction(`Transferred: $${amount} to account ${recipient.accountNumber}`);
    }
  
    getTransactionHistory(): string[] {
      return this.transactionHistory;
    }
  
    private recordTransaction(description: string): void {
      const timestamp = new Date().toISOString();
      this.transactionHistory.push(`[${timestamp}] ${description}`);
    }
  }
  
  // Test Cases
  const account1 = new BankAccount("12345", 1000);
  const account2 = new BankAccount("67890", 500);
  
  account1.deposit(200);
  account1.withdraw(150);
  account1.transferFunds(300, account2);
  
  console.log("Account 1 Info:", account1.getAccountInfo());
  console.log("Account 2 Info:", account2.getAccountInfo());
  
  console.log("Account 1 Transaction History:");
  console.log(account1.getTransactionHistory());
  
  console.log("Account 2 Transaction History:");
  console.log(account2.getTransactionHistory());
  