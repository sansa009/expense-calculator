# Expense Calculator

A modern, user-friendly expense calculator web application to track and manage your expenses.

## Features

- ✅ Add expenses with description, amount, category, and date
- ✅ View all expenses in a clean, organized list
- ✅ Filter expenses by category
- ✅ Calculate total expenses automatically
- ✅ Delete individual expenses
- ✅ Clear all expenses at once
- ✅ Data persistence using browser's localStorage
- ✅ Responsive design that works on mobile and desktop
- ✅ Beautiful, modern UI with smooth animations

## Quick Start

### Option 1: Run with Local Server (Recommended)
1. Run the server:
   ```bash
   python3 server.py
   ```
   Or simply:
   ```bash
   npm start
   ```
2. The browser will automatically open to `http://localhost:8000`
3. If it doesn't open automatically, manually navigate to `http://localhost:8000`

### Option 2: Open Directly
1. Open `index.html` in your web browser (double-click the file)

## How to Use

1. Fill in the expense form:
   - Description: What the expense was for
   - Amount: The cost (in dollars)
   - Category: Choose from Food, Transport, Shopping, Bills, Entertainment, Health, or Other
   - Date: When the expense occurred
3. Click "Add Expense" to save it
4. View your total expenses at the top
5. Use the category filter to see expenses by type
6. Click "Delete" on any expense to remove it

## Categories

- 🍔 Food
- 🚗 Transport
- 🛒 Shopping
- 💳 Bills
- 🎬 Entertainment
- 🏥 Health
- 📦 Other

## Running the Server

The project includes a simple Python HTTP server (`server.py`) that will:
- Start a local server on port 8000
- Automatically open your browser
- Serve the application at `http://localhost:8000`

**To start the server:**
```bash
python3 server.py
```

Or use npm:
```bash
npm start
```

**To stop the server:**
Press `Ctrl+C` in the terminal

## Technical Details

- Pure HTML, CSS, and JavaScript (no frameworks required)
- Uses localStorage for data persistence
- Fully responsive design
- No external dependencies
- Python 3 HTTP server included (Python is pre-installed on macOS)

## Browser Support

Works in all modern browsers that support:
- ES6 JavaScript
- CSS Grid and Flexbox
- LocalStorage API

