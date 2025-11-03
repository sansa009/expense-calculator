// Expense Calculator Application

class ExpenseCalculator {
    constructor() {
        this.currentUserId = null;
        this.currentFilter = '';
        this.categoryKeywords = this.initCategoryKeywords();
        this.checkUserLogin();
        this.attachEventListeners();
    }

    checkUserLogin() {
        const savedUserId = localStorage.getItem('currentUserId');
        if (savedUserId) {
            this.loadUser(savedUserId);
        } else {
            this.showLoginModal();
        }
    }

    showLoginModal() {
        document.getElementById('userModal').style.display = 'block';
        document.getElementById('mainContainer').style.display = 'none';
        this.loadExistingUsers();
    }

    hideLoginModal() {
        document.getElementById('userModal').style.display = 'none';
        document.getElementById('mainContainer').style.display = 'block';
    }

    loadExistingUsers() {
        const allUsers = this.getAllUsers();
        const usersList = document.getElementById('usersList');
        const existingUsersDiv = document.getElementById('existingUsers');

        if (allUsers.length > 0) {
            existingUsersDiv.style.display = 'block';
            usersList.innerHTML = allUsers.map(userId => `
                <button type="button" class="user-btn" onclick="calculator.loadUser('${userId}')">
                    👤 ${userId}
                </button>
            `).join('');
        } else {
            existingUsersDiv.style.display = 'none';
        }
    }

    getAllUsers() {
        const users = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('expenses_')) {
                const userId = key.replace('expenses_', '');
                users.push(userId);
            }
        }
        return users.sort();
    }

    loadUser(userId) {
        this.currentUserId = userId;
        localStorage.setItem('currentUserId', userId);
        this.expenses = this.loadExpenses() || [];
        document.getElementById('currentUserId').textContent = userId;
        this.hideLoginModal();
        this.render();
        
        // Show welcome message for new users
        if (this.expenses.length === 0) {
            setTimeout(() => {
                const welcomeMsg = document.createElement('div');
                welcomeMsg.className = 'success-message';
                welcomeMsg.innerHTML = `✅ Welcome, <strong>${userId}</strong>! Start adding your expenses below.`;
                welcomeMsg.style.cssText = 'background: #4CAF50; color: white; padding: 15px; border-radius: 8px; margin: 20px auto; max-width: 500px; text-align: center; animation: slideDown 0.3s;';
                const formSection = document.querySelector('.form-section');
                if (formSection) {
                    formSection.insertBefore(welcomeMsg, formSection.firstChild);
                    setTimeout(() => welcomeMsg.remove(), 5000);
                }
            }, 300);
        }
    }

    switchUser() {
        if (confirm('Switch to a different user? Your current session will be saved.')) {
            localStorage.removeItem('currentUserId');
            this.currentUserId = null;
            this.showLoginModal();
        }
    }

    attachEventListeners() {
        const userForm = document.getElementById('userForm');
        if (userForm) {
            userForm.addEventListener('submit', (e) => this.handleUserSubmit(e));
        }

        const switchUserBtn = document.getElementById('switchUserBtn');
        if (switchUserBtn) {
            switchUserBtn.addEventListener('click', () => this.switchUser());
        }

        const form = document.getElementById('expenseForm');
        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }

        const descriptionInput = document.getElementById('description');
        if (descriptionInput) {
            descriptionInput.addEventListener('input', () => this.updateCategoryPreview());
        }

        const filterCategory = document.getElementById('filterCategory');
        if (filterCategory) {
            filterCategory.addEventListener('change', (e) => {
                this.currentFilter = e.target.value;
                this.render();
            });
        }

        const clearAllBtn = document.getElementById('clearAllBtn');
        if (clearAllBtn) {
            clearAllBtn.addEventListener('click', () => this.clearAllExpenses());
        }
    }

    handleUserSubmit(e) {
        e.preventDefault();
        const userId = document.getElementById('userId').value.trim();
        
        if (userId.length < 3 || userId.length > 20) {
            alert('User ID must be between 3 and 20 characters');
            return;
        }

        // Check if user already exists or create new
        this.loadUser(userId);
    }

    initCategoryKeywords() {
        return {
            'Food': [
                'food', 'groceries', 'restaurant', 'coffee', 'lunch', 'dinner', 'breakfast',
                'starbucks', 'mcdonalds', 'pizza', 'burger', 'sushi', 'cafe', 'bakery',
                'supermarket', 'walmart', 'target', 'whole foods', 'trader joe', 'kroger',
                'snack', 'meal', 'takeout', 'delivery', 'grubhub', 'ubereats', 'doordash'
            ],
            'Transport': [
                'gas', 'fuel', 'uber', 'lyft', 'taxi', 'parking', 'metro', 'subway',
                'bus', 'train', 'airline', 'flight', 'airport', 'car', 'vehicle',
                'maintenance', 'repair', 'oil change', 'tire', 'insurance', 'registration'
            ],
            'Shopping': [
                'amazon', 'shopping', 'store', 'mall', 'clothes', 'clothing', 'shoes',
                'electronics', 'phone', 'laptop', 'book', 'gift', 'purchase', 'buy',
                'walmart', 'target', 'best buy', 'home depot', 'costco', 'ikea'
            ],
            'Bills': [
                'bill', 'electric', 'electricity', 'water', 'internet', 'wifi', 'cable',
                'phone bill', 'mobile', 'rent', 'mortgage', 'utilities', 'insurance',
                'subscription', 'netflix', 'spotify', 'hulu', 'disney', 'apple music',
                'youtube premium', 'adobe', 'microsoft', 'cloud', 'hosting'
            ],
            'Entertainment': [
                'movie', 'cinema', 'theater', 'concert', 'show', 'ticket', 'event',
                'netflix', 'spotify', 'hulu', 'disney', 'streaming', 'game', 'gaming',
                'steam', 'playstation', 'xbox', 'nintendo', 'bowling', 'arcade', 'bar',
                'club', 'party', 'nightlife', 'music', 'sport', 'fitness', 'gym'
            ],
            'Health': [
                'doctor', 'hospital', 'pharmacy', 'medicine', 'drug', 'prescription',
                'dentist', 'optometrist', 'glasses', 'contact', 'vitamin', 'supplement',
                'gym', 'fitness', 'yoga', 'pilates', 'massage', 'spa', 'therapy',
                'cvs', 'walgreens', 'clinic', 'medical', 'health'
            ]
        };
    }

    detectCategory(description) {
        const lowerDesc = description.toLowerCase();
        
        // Check each category's keywords
        for (const [category, keywords] of Object.entries(this.categoryKeywords)) {
            for (const keyword of keywords) {
                if (lowerDesc.includes(keyword)) {
                    return category;
                }
            }
        }
        
        // Default to 'Other' if no match found
        return 'Other';
    }

    updateCategoryPreview() {
        const description = document.getElementById('description').value.trim();
        const categoryPreview = document.getElementById('categoryPreview');
        const detectedCategorySpan = document.getElementById('detectedCategory');

        if (description.length > 0) {
            const detectedCategory = this.detectCategory(description);
            const emoji = this.getCategoryEmoji(detectedCategory);
            detectedCategorySpan.innerHTML = `${emoji} ${detectedCategory}`;
            categoryPreview.style.display = 'flex';
        } else {
            categoryPreview.style.display = 'none';
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if (!this.currentUserId) {
            alert('Please login first');
            this.showLoginModal();
            return;
        }
        
        const description = document.getElementById('description').value.trim();
        const amount = parseFloat(document.getElementById('amount').value);

        if (!description || !amount || isNaN(amount) || amount <= 0) {
            alert('Please enter a valid description and amount');
            return;
        }

        const category = this.detectCategory(description);
        const date = new Date().toISOString().split('T')[0]; // Today's date

        const expense = {
            id: Date.now(),
            description,
            amount,
            category,
            date
        };

        this.expenses.push(expense);
        this.saveExpenses();
        this.render();
        
        // Show success message
        this.showSuccessMessage(`✅ Expense saved! (${this.getCategoryEmoji(category)} ${category})`);
        
        // Reset form
        document.getElementById('expenseForm').reset();
        document.getElementById('categoryPreview').style.display = 'none';
    }

    showSuccessMessage(message) {
        // Remove existing success messages
        const existing = document.querySelector('.success-message');
        if (existing) existing.remove();
        
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.textContent = message;
        successMsg.style.cssText = 'background: #4CAF50; color: white; padding: 12px 20px; border-radius: 8px; margin: 15px auto; max-width: 500px; text-align: center; animation: slideDown 0.3s; font-weight: 500; box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);';
        
        const formSection = document.querySelector('.form-section');
        if (formSection) {
            formSection.insertBefore(successMsg, formSection.querySelector('h2').nextSibling);
            setTimeout(() => {
                successMsg.style.opacity = '0';
                successMsg.style.transition = 'opacity 0.3s';
                setTimeout(() => successMsg.remove(), 300);
            }, 3000);
        }
    }

    deleteExpense(id) {
        if (confirm('Are you sure you want to delete this expense?')) {
            this.expenses = this.expenses.filter(expense => expense.id !== id);
            this.saveExpenses();
            this.render();
        }
    }

    clearAllExpenses() {
        if (this.expenses.length === 0) {
            alert('No expenses to clear');
            return;
        }

        if (confirm('Are you sure you want to delete ALL expenses? This cannot be undone.')) {
            this.expenses = [];
            this.saveExpenses();
            this.render();
        }
    }

    getFilteredExpenses() {
        if (!this.currentFilter) {
            return this.expenses;
        }
        return this.expenses.filter(expense => expense.category === this.currentFilter);
    }

    calculateTotal() {
        return this.getFilteredExpenses().reduce((sum, expense) => sum + expense.amount, 0);
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    }

    getCategoryEmoji(category) {
        const emojiMap = {
            'Food': '🍔',
            'Transport': '🚗',
            'Shopping': '🛒',
            'Bills': '💳',
            'Entertainment': '🎬',
            'Health': '🏥',
            'Other': '📦'
        };
        return emojiMap[category] || '📦';
    }

    render() {
        this.renderSummary();
        this.renderExpenses();
    }

    renderSummary() {
        const filteredExpenses = this.getFilteredExpenses();
        const total = this.calculateTotal();
        const count = filteredExpenses.length;

        document.getElementById('totalExpenses').textContent = `Rs ${total.toFixed(2)}`;
        document.getElementById('totalItems').textContent = count;
    }

    renderExpenses() {
        const expensesList = document.getElementById('expensesList');
        const filteredExpenses = this.getFilteredExpenses();

        if (filteredExpenses.length === 0) {
            expensesList.innerHTML = '<p class="empty-message">No expenses found. ' + 
                (this.currentFilter ? 'Try changing the filter or add a new expense!' : 'Add your first expense above!') + 
                '</p>';
            return;
        }

        // Sort by date (newest first)
        const sortedExpenses = [...filteredExpenses].sort((a, b) => 
            new Date(b.date) - new Date(a.date)
        );

        expensesList.innerHTML = sortedExpenses.map(expense => `
            <div class="expense-item">
                <div class="expense-info">
                    <div class="expense-description">${this.escapeHtml(expense.description)}</div>
                    <div class="expense-meta">
                        <span class="expense-category">${this.getCategoryEmoji(expense.category)} ${expense.category}</span>
                        <span>📅 ${this.formatDate(expense.date)}</span>
                    </div>
                </div>
                <div style="display: flex; align-items: center;">
                    <span class="expense-amount">Rs ${expense.amount.toFixed(2)}</span>
                    <button class="btn-delete" onclick="calculator.deleteExpense(${expense.id})">Delete</button>
                </div>
            </div>
        `).join('');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    saveExpenses() {
        if (!this.currentUserId) return;
        const key = `expenses_${this.currentUserId}`;
        localStorage.setItem(key, JSON.stringify(this.expenses));
    }

    loadExpenses() {
        if (!this.currentUserId) return [];
        const key = `expenses_${this.currentUserId}`;
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : [];
    }
}

// Initialize the calculator when the page loads
let calculator;
document.addEventListener('DOMContentLoaded', () => {
    calculator = new ExpenseCalculator();
});

