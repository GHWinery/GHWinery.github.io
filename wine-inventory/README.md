# Wine Inventory Manager - Complete System

A fully-functional wine inventory management system for Greenhouse Winery with persistent browser storage. No server required - everything runs in the browser!

## Features

### ✅ Complete CRUD Operations
- **Add** new wines with detailed information
- **Edit** existing wine entries
- **Delete** wines from inventory
- **Quick status changes** directly from wine cards

### ✅ Wine Information Tracking
- Wine Name (required)
- Type (Red, White, Rosé, etc.)
- Varietal
- Vintage
- Status (In Stock, Out of Stock, Coming Soon)
- Release Date (for upcoming wines)
- Notes/Additional Information

### ✅ Status Management
- Three status options: In Stock, Out of Stock, Coming Soon
- Color-coded status badges for quick visual reference
- One-click status changes from wine cards

### ✅ Filtering & Organization
- Filter wines by status
- Alphabetical sorting
- Wine count display

### ✅ Data Persistence
- Automatic saving to browser storage
- Data persists across sessions
- Works offline - no internet required

### ✅ Import/Export
- **Export** inventory to JSON file for backup
- **Import** inventory from JSON file
- Easy data transfer between devices

### ✅ User-Friendly Design
- Clean, winery-themed interface
- Fully responsive (works on desktop, tablet, mobile)
- No login or authentication required
- Instant updates - no page refresh needed

## Installation Instructions

### Step 1: Add to Your GitHub Pages Repository
1. Download the `wine-inventory` folder
2. Copy it into your `GHWinery.github.io` repository
3. Commit and push to GitHub

### Step 2: Link from Your Main Page
Add this link to your main `index.html` file:

```html
<a href="/wine-inventory/">Wine Inventory Manager</a>
```

### Step 3: Access the System
Once deployed, the inventory will be available at:
```
https://ghwinery.github.io/wine-inventory/
```

## How to Use

### Adding a Wine
1. Click "Add New Wine" button
2. Fill in wine details (only Name and Status are required)
3. Click "Save Wine"

### Editing a Wine
1. Click "Edit" button on any wine card
2. Update the information
3. Click "Save Wine"

### Deleting a Wine
1. Click "Delete" button on wine card
2. Confirm deletion

### Quick Status Update
- Click any of the "Mark [Status]" buttons on wine cards for instant status changes

### Filtering
- Use the "Filter by Status" dropdown to show only wines with specific status

### Backup & Restore
- **Export**: Click "Export Data" to download a JSON backup file
- **Import**: Click "Import Data" and select a previously exported JSON file

## Technical Details

### Browser Storage
The system uses modern browser persistent storage API with localStorage fallback. Data is stored locally in your browser and persists across sessions.

### No Server Required
Everything runs client-side in the browser. No database, no backend, no hosting costs.

### Data Format
Wines are stored as JSON objects with these fields:
```json
{
  "id": "unique-id",
  "name": "Wine Name",
  "type": "Red",
  "varietal": "Cabernet Sauvignon",
  "vintage": "2023",
  "status": "In Stock",
  "releaseDate": "2024-12-01",
  "notes": "Additional information",
  "lastUpdated": "2024-01-15T10:30:00.000Z"
}
```

## Project Structure
```
wine-inventory/
├── index.html    - Main HTML structure
├── styles.css    - All styling (responsive, winery-themed)
├── app.js        - Complete JavaScript application
└── README.md     - This file
```

## Browser Compatibility
Works in all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Tips for Your Winemaker

1. **No password needed** - Just visit the URL and start editing
2. **Changes save instantly** - No "save" button needed after each edit
3. **Mobile friendly** - Can update from phone or tablet
4. **Backup regularly** - Use "Export Data" to save backups periodically
5. **Undo deletions** - Keep export backups in case wines are deleted accidentally

## Support

If you need to reset everything and start fresh:
1. Export your current data first (if you want to save it)
2. Open browser developer console (F12)
3. Type: `localStorage.clear()` or `await window.storage.delete('greenhouse-wines')`
4. Refresh the page

Enjoy managing your wine inventory!
