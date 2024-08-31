
            // Define the ExpenseTracker class
            class ExpenseTracker {
                constructor() {
                    this.expenses = []; // Array to store expense objects
                    this.budget = 0; // Variable to store the set budget
                }
        
                // Method to add a new expense
                addExpense(amount, category, description) {
                    const expense = { amount, category, description, date: new Date() };
                    this.expenses.push(expense);
                }
        
                // Method to categorize expenses
                categorizeExpenses() {
                    return this.expenses.reduce((acc, expense) => {
                        if (!acc[expense.category]) {
                            acc[expense.category] = [];
                        }
                        acc[expense.category].push(expense);
                        return acc;
                    }, {});
                }
        
                // Method to get expense summary by category
                getExpenseSummaryByCategory() {
                    return this.expenses.reduce((acc, expense) => {
                        if (!acc[expense.category]) {
                            acc[expense.category] = 0;
                        }
                        acc[expense.category] += expense.amount;
                        return acc;
                    }, {});
                }
        
                // Method to set a budget
                setBudget(amount) {
                    this.budget = amount;
                }
        
                // Method to track spending against the set budget
                trackSpending() {
                    const totalSpent = this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
                    const remainingBudget = this.budget - totalSpent;
                    return {
                        totalSpent,
                        remainingBudget,
                        overBudget: remainingBudget < 0
                    };
                }
        
                // Method to generate a monthly report
                generateMonthlyReport(month) {
                    const monthlyExpenses = this.expenses.filter(expense =>
                        expense.date.getMonth() === month - 1
                    );
                    return this._generateReport(monthlyExpenses);
                }
        
                // Method to generate a yearly report
                generateYearlyReport(year) {
                    const yearlyExpenses = this.expenses.filter(expense =>
                        expense.date.getFullYear() === year
                    );
                    return this._generateReport(yearlyExpenses);
                }
        
                // Helper method to generate a report summary
                _generateReport(expenses) {
                    return expenses.reduce((acc, expense) => {
                        if (!acc[expense.category]) {
                            acc[expense.category] = 0;
                        }
                        acc[expense.category] += expense.amount;
                        return acc;
                    }, {});
                }
            }
        
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
        
            
        
        
  