 // Hardcoded example data and operations
 const tracker = new ExpenseTracker();
        
 // Adding expenses
 tracker.addExpense(50, 'Food', 'Groceries');
 tracker.addExpense(20, 'Transport', 'Bus fare');
 tracker.addExpense(100, 'Entertainment', 'Movies');
 tracker.addExpense(30, 'Food', 'Dining out');

 // Categorizing expenses
 console.log('Categorized Expenses:', tracker.categorizeExpenses());

 // Getting summary by category
 console.log('Expense Summary by Category:', tracker.getExpenseSummaryByCategory());

 // Setting a budget and tracking spending
 tracker.setBudget(200);
 console.log('Budget Tracking:', tracker.trackSpending());

 // Generating reports
 console.log('Monthly Report (August):', tracker.generateMonthlyReport(8));
 console.log('Yearly Report (2024):', tracker.generateYearlyReport(2024));
