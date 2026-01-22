// Greenhouse Winery - Wine Inventory App
// Complete implementation with browser-based persistent storage

class WineInventory {
    constructor() {
        this.wines = [];
        this.currentFilter = 'all';
        this.editingId = null;
        this.init();
    }

    init() {
        // Load data from storage
        this.loadFromStorage();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Render initial display
        this.render();
    }

    // === STORAGE METHODS ===
    async loadFromStorage() {
        try {
            if (window.storage) {
                const result = await window.storage.get('greenhouse-wines');
                if (result && result.value) {
                    this.wines = JSON.parse(result.value);
                    return;
                }
            } else {
                // Fallback to localStorage
                const stored = localStorage.getItem('greenhouse-wines');
                if (stored) {
                    this.wines = JSON.parse(stored);
                    return;
                }
            }
            
            // If no data exists, load initial wine list
            console.log('No previous data found, loading initial wine list...');
            await this.loadInitialWines();
        } catch (error) {
            console.log('Error loading data, loading initial wine list...');
            await this.loadInitialWines();
        }
    }

    async loadInitialWines() {
        try {
            const response = await fetch('initial-wines.json');
            if (response.ok) {
                this.wines = await response.json();
                await this.saveToStorage();
                console.log('Initial wine list loaded successfully!');
            } else {
                console.log('Could not load initial wines, starting empty');
                this.wines = [];
            }
        } catch (error) {
            console.log('Could not load initial wines, starting empty');
            this.wines = [];
        }
    }

    async saveToStorage() {
        try {
            const data = JSON.stringify(this.wines);
            if (window.storage) {
                await window.storage.set('greenhouse-wines', data);
            } else {
                // Fallback to localStorage
                localStorage.setItem('greenhouse-wines', data);
            }
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data. Please try again.');
        }
    }

    // === EVENT LISTENERS ===
    setupEventListeners() {
        // Add wine button
        document.getElementById('addWineBtn').addEventListener('click', () => {
            this.showForm();
        });

        // Form submission
        document.getElementById('addEditForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveWine();
        });

        // Cancel button
        document.getElementById('cancelBtn').addEventListener('click', () => {
            this.hideForm();
        });

        // Filter
        document.getElementById('filterStatus').addEventListener('change', (e) => {
            this.currentFilter = e.target.value;
            this.render();
        });

        // Export
        document.getElementById('exportBtn').addEventListener('click', () => {
            this.exportData();
        });

        // Import
        document.getElementById('importBtn').addEventListener('click', () => {
            document.getElementById('importFile').click();
        });

        document.getElementById('importFile').addEventListener('change', (e) => {
            this.importData(e);
        });
    }

    // === WINE CRUD OPERATIONS ===
    async saveWine() {
        const wine = {
            id: this.editingId || Date.now().toString(),
            name: document.getElementById('wineName').value,
            type: document.getElementById('wineType').value,
            varietal: document.getElementById('wineVarietal').value,
            vintage: document.getElementById('wineVintage').value,
            status: document.getElementById('wineStatus').value,
            releaseDate: document.getElementById('wineReleaseDate').value,
            notes: document.getElementById('wineNotes').value,
            lastUpdated: new Date().toISOString()
        };

        if (this.editingId) {
            // Update existing wine
            const index = this.wines.findIndex(w => w.id === this.editingId);
            this.wines[index] = wine;
        } else {
            // Add new wine
            this.wines.push(wine);
        }

        await this.saveToStorage();
        this.hideForm();
        this.render();
    }

    editWine(id) {
        const wine = this.wines.find(w => w.id === id);
        if (!wine) return;

        this.editingId = id;
        document.getElementById('formTitle').textContent = 'Edit Wine';
        document.getElementById('wineName').value = wine.name;
        document.getElementById('wineType').value = wine.type;
        document.getElementById('wineVarietal').value = wine.varietal;
        document.getElementById('wineVintage').value = wine.vintage;
        document.getElementById('wineStatus').value = wine.status;
        document.getElementById('wineReleaseDate').value = wine.releaseDate;
        document.getElementById('wineNotes').value = wine.notes;
        
        this.showForm();
    }

    async deleteWine(id) {
        if (!confirm('Are you sure you want to delete this wine?')) return;
        
        this.wines = this.wines.filter(w => w.id !== id);
        await this.saveToStorage();
        this.render();
    }

    async quickStatusChange(id, newStatus) {
        const wine = this.wines.find(w => w.id === id);
        if (wine) {
            wine.status = newStatus;
            wine.lastUpdated = new Date().toISOString();
            await this.saveToStorage();
            this.render();
        }
    }

    // === FORM MANAGEMENT ===
    showForm() {
        document.getElementById('wineForm').style.display = 'block';
        document.getElementById('wineName').focus();
    }

    hideForm() {
        document.getElementById('wineForm').style.display = 'none';
        document.getElementById('addEditForm').reset();
        this.editingId = null;
        document.getElementById('formTitle').textContent = 'Add New Wine';
    }

    // === RENDERING ===
    render() {
        const wineList = document.getElementById('wineList');
        const emptyState = document.getElementById('emptyState');
        const wineCount = document.getElementById('wineCount');

        // Filter wines
        let filteredWines = this.wines;
        if (this.currentFilter !== 'all') {
            filteredWines = this.wines.filter(w => w.status === this.currentFilter);
        }

        // Sort wines by name
        filteredWines.sort((a, b) => a.name.localeCompare(b.name));

        // Update count
        wineCount.textContent = `Showing ${filteredWines.length} of ${this.wines.length} wines`;

        // Show empty state if no wines
        if (filteredWines.length === 0) {
            wineList.innerHTML = '';
            emptyState.style.display = 'block';
            if (this.currentFilter !== 'all') {
                emptyState.innerHTML = '<p>No wines match the selected filter.</p>';
            } else {
                emptyState.innerHTML = '<p>No wines in inventory yet. Click "Add New Wine" to get started!</p>';
            }
            return;
        }

        emptyState.style.display = 'none';

        // Render wine cards
        wineList.innerHTML = filteredWines.map(wine => this.createWineCard(wine)).join('');

        // Add event listeners to action buttons
        filteredWines.forEach(wine => {
            const editBtn = document.getElementById(`edit-${wine.id}`);
            const deleteBtn = document.getElementById(`delete-${wine.id}`);
            const statusBtns = document.querySelectorAll(`[data-wine-id="${wine.id}"][data-action="status"]`);

            if (editBtn) {
                editBtn.addEventListener('click', () => this.editWine(wine.id));
            }
            if (deleteBtn) {
                deleteBtn.addEventListener('click', () => this.deleteWine(wine.id));
            }
            statusBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.quickStatusChange(wine.id, btn.dataset.status);
                });
            });
        });
    }

    createWineCard(wine) {
        const statusClass = wine.status.toLowerCase().replace(/ /g, '-');
        
        let releaseInfo = '';
        if (wine.status === 'Coming Soon' && wine.releaseDate) {
            const date = new Date(wine.releaseDate);
            releaseInfo = `<p><strong>Release:</strong> ${date.toLocaleDateString()}</p>`;
        }

        const typeInfo = wine.type ? `<p><strong>Type:</strong> ${wine.type}</p>` : '';
        const varietalInfo = wine.varietal ? `<p><strong>Varietal:</strong> ${wine.varietal}</p>` : '';
        const vintageInfo = wine.vintage ? `<p><strong>Vintage:</strong> ${wine.vintage}</p>` : '';
        const notesSection = wine.notes ? `<div class="wine-notes">${wine.notes}</div>` : '';

        // Quick status change buttons (only show other statuses)
        const statusOptions = ['In Stock', 'Out of Stock', 'Coming Soon']
            .filter(s => s !== wine.status)
            .map(s => `<button class="btn btn-small btn-secondary" data-wine-id="${wine.id}" data-action="status" data-status="${s}">Mark ${s}</button>`)
            .join('');

        return `
            <div class="wine-card">
                <div class="wine-card-header">
                    <div>
                        <div class="wine-name">${wine.name}</div>
                        <span class="status-badge status-${statusClass}">${wine.status}</span>
                    </div>
                </div>
                <div class="wine-details">
                    ${typeInfo}
                    ${varietalInfo}
                    ${vintageInfo}
                    ${releaseInfo}
                </div>
                ${notesSection}
                <div class="wine-actions">
                    <button id="edit-${wine.id}" class="btn btn-small btn-primary">Edit</button>
                    <button id="delete-${wine.id}" class="btn btn-small btn-danger">Delete</button>
                    ${statusOptions}
                </div>
            </div>
        `;
    }

    // === IMPORT/EXPORT ===
    exportData() {
        const dataStr = JSON.stringify(this.wines, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `greenhouse-wines-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    async importData(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const imported = JSON.parse(e.target.result);
                
                if (!Array.isArray(imported)) {
                    alert('Invalid file format. Please select a valid wine inventory JSON file.');
                    return;
                }

                if (confirm(`This will replace your current inventory (${this.wines.length} wines) with ${imported.length} wines from the file. Continue?`)) {
                    this.wines = imported;
                    await this.saveToStorage();
                    this.render();
                    alert('Data imported successfully!');
                }
            } catch (error) {
                alert('Error reading file. Please ensure it is a valid JSON file.');
            }
        };
        reader.readAsText(file);
        
        // Reset file input
        event.target.value = '';
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.wineInventory = new WineInventory();
    console.log('Wine Inventory System Loaded');
});
