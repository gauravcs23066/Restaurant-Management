/**
 * AURA BISTRO & BAR — Modern Restaurant Management System
 * Interactive Logic, POS Terminal, Kitchen Dispatcher, Table Management & Visual Analytics
 */

// ==========================================================================
// 1. Initial State & Curated Mock Data
// ==========================================================================

const INITIAL_MENU = [
  {
    id: "m1",
    name: "Truffle Ribeye 45-Day Dry Aged",
    category: "Steaks",
    price: 68.00,
    cost: 26.00,
    stock: 14,
    par: 10,
    ordersCount: 42,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    desc: "Black Angus prime cut with truffle butter infusion, charred rosemary, and sea salt flakes."
  },
  {
    id: "m2",
    name: "Pan-Seared Chilean Sea Bass",
    category: "Mains",
    price: 46.00,
    cost: 17.50,
    stock: 9,
    par: 12,
    ordersCount: 36,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
    desc: "Saffron saffron velouté, caramelized fennel puree, and crispy caper garnish."
  },
  {
    id: "m3",
    name: "Wild Mushroom & Truffle Risotto",
    category: "Mains",
    price: 32.00,
    cost: 8.50,
    stock: 22,
    par: 15,
    ordersCount: 29,
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80",
    desc: "Acquerello carnaroli rice, porcini dust, 36-month aged Parmigiano Reggiano."
  },
  {
    id: "m4",
    name: "Wagyu Beef Carpaccio",
    category: "Starters",
    price: 26.00,
    cost: 9.00,
    stock: 18,
    par: 15,
    ordersCount: 48,
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
    desc: "Thinly shaved A5 Miyazaki wagyu, pickled baby shallots, micro arugula, truffle aioli."
  },
  {
    id: "m5",
    name: "Burrata Pugliese & Heirloom Tomato",
    category: "Starters",
    price: 22.00,
    cost: 6.20,
    stock: 25,
    par: 12,
    ordersCount: 38,
    image: "https://images.unsplash.com/photo-1592417817098-8f3d69102a56?auto=format&fit=crop&w=600&q=80",
    desc: "Fresh 250g artisanal burrata, 12-year Modena balsamic glaze, basil oil, toasted focaccia."
  },
  {
    id: "m6",
    name: "Charred Spanish Octopus",
    category: "Starters",
    price: 28.00,
    cost: 11.00,
    stock: 7,
    par: 10,
    ordersCount: 31,
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80",
    desc: "Smoked paprika fingerling potatoes, salsa verde, and roasted garlic emulsion."
  },
  {
    id: "m7",
    name: "Valrhona Molten Chocolate Tart",
    category: "Desserts",
    price: 18.00,
    cost: 4.50,
    stock: 16,
    par: 10,
    ordersCount: 52,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    desc: "70% Guanaja chocolate, pistachio gelato, salted caramel drizzle, edible gold leaf."
  },
  {
    id: "m8",
    name: "Madagascan Bourbon Vanilla Soufflé",
    category: "Desserts",
    price: 19.00,
    cost: 4.80,
    stock: 12,
    par: 8,
    ordersCount: 24,
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=600&q=80",
    desc: "Baked to order with Grand Marnier anglaise and fresh raspberry coulis."
  },
  {
    id: "m9",
    name: "Smoked Old Fashioned",
    category: "Beverages",
    price: 21.00,
    cost: 4.20,
    stock: 45,
    par: 20,
    ordersCount: 64,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
    desc: "Woodford Reserve bourbon, smoked hickory chip cloche, bitters, orange zest twist."
  },
  {
    id: "m10",
    name: "Botanical Violette Spritz",
    category: "Beverages",
    price: 18.00,
    cost: 3.50,
    stock: 38,
    par: 20,
    ordersCount: 44,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    desc: "Empress 1908 indigo gin, crème de violette, elderflower liqueur, prosecco DOCG."
  }
];

const INITIAL_TABLES = [
  { id: "T-01", name: "Table 01", seats: 2, zone: "Main Dining", status: "occupied", orderId: "ORD-1041", guests: 2, server: "Elena R.", billTotal: 148.50 },
  { id: "T-02", name: "Table 02", seats: 4, zone: "Main Dining", status: "occupied", orderId: "ORD-1042", guests: 4, server: "Lucas S.", billTotal: 236.00 },
  { id: "T-03", name: "Table 03", seats: 4, zone: "Main Dining", status: "available", orderId: null, guests: 0, server: "Unassigned", billTotal: 0 },
  { id: "T-04", name: "Table 04", seats: 6, zone: "Main Dining", status: "bill", orderId: "ORD-1039", guests: 5, server: "Sophie M.", billTotal: 342.20 },
  { id: "T-05", name: "Table 05", seats: 2, zone: "Main Dining", status: "occupied", orderId: "ORD-1043", guests: 2, server: "Elena R.", billTotal: 96.00 },
  { id: "T-06", name: "Table 06", seats: 4, zone: "Main Dining", status: "reserved", orderId: null, guests: 4, server: "Lucas S.", resGuest: "Baroness Von Stauffen", resTime: "20:30", billTotal: 0 },
  { id: "T-07", name: "Table 07", seats: 2, zone: "Patio Terrace", status: "available", orderId: null, guests: 0, server: "Unassigned", billTotal: 0 },
  { id: "T-08", name: "Table 08", seats: 4, zone: "Patio Terrace", status: "occupied", orderId: "ORD-1044", guests: 3, server: "Sophie M.", billTotal: 184.00 },
  { id: "T-09", name: "Table 09", seats: 4, zone: "Patio Terrace", status: "occupied", orderId: "ORD-1045", guests: 4, server: "Sophie M.", billTotal: 210.50 },
  { id: "T-10", name: "Table 10", seats: 6, zone: "Patio Terrace", status: "reserved", orderId: null, guests: 6, server: "Lucas S.", resGuest: "David Sterling", resTime: "21:00", billTotal: 0 },
  { id: "T-11", name: "VIP Salon A", seats: 8, zone: "VIP Lounge", status: "occupied", orderId: "ORD-1038", guests: 8, server: "Mateo V.", billTotal: 692.00 },
  { id: "T-12", name: "VIP Salon B", seats: 10, zone: "VIP Lounge", status: "reserved", orderId: null, guests: 10, server: "Mateo V.", resGuest: "Ambassador Laurent", resTime: "20:00", billTotal: 0 },
  { id: "T-13", name: "Bar Stool 01", seats: 1, zone: "Bar Counter", status: "occupied", orderId: "ORD-1046", guests: 1, server: "Bartender Cole", billTotal: 42.00 },
  { id: "T-14", name: "Bar Stool 02", seats: 1, zone: "Bar Counter", status: "occupied", orderId: "ORD-1047", guests: 1, server: "Bartender Cole", billTotal: 39.00 },
  { id: "T-15", name: "Bar Stool 03", seats: 1, zone: "Bar Counter", status: "available", orderId: null, guests: 0, server: "Bartender Cole", billTotal: 0 },
  { id: "T-16", name: "Bar Stool 04", seats: 1, zone: "Bar Counter", status: "available", orderId: null, guests: 0, server: "Bartender Cole", billTotal: 0 },
  { id: "T-17", name: "Booth 01", seats: 4, zone: "Main Dining", status: "occupied", orderId: "ORD-1048", guests: 4, server: "Elena R.", billTotal: 280.00 },
  { id: "T-18", name: "Booth 02", seats: 4, zone: "Main Dining", status: "occupied", orderId: "ORD-1049", guests: 3, server: "Lucas S.", billTotal: 195.00 },
  { id: "T-19", name: "Booth 03", seats: 4, zone: "Main Dining", status: "available", orderId: null, guests: 0, server: "Unassigned", billTotal: 0 },
  { id: "T-20", name: "Booth 04", seats: 6, zone: "Main Dining", status: "occupied", orderId: "ORD-1050", guests: 5, server: "Sophie M.", billTotal: 310.00 },
  { id: "T-21", name: "Garden 01", seats: 2, zone: "Patio Terrace", status: "occupied", orderId: "ORD-1051", guests: 2, server: "Lucas S.", billTotal: 115.00 },
  { id: "T-22", name: "Garden 02", seats: 2, zone: "Patio Terrace", status: "occupied", orderId: "ORD-1052", guests: 2, server: "Elena R.", billTotal: 130.00 },
  { id: "T-23", name: "Garden 03", seats: 4, zone: "Patio Terrace", status: "reserved", orderId: null, guests: 3, server: "Sophie M.", resGuest: "Claire Bennet", resTime: "20:45", billTotal: 0 },
  { id: "T-24", name: "Garden 04", seats: 4, zone: "Patio Terrace", status: "occupied", orderId: "ORD-1053", guests: 4, server: "Elena R.", billTotal: 240.00 }
];

const INITIAL_ORDERS = [
  {
    id: "ORD-1053",
    tableId: "T-24",
    tableName: "Garden 04",
    server: "Elena Rostova",
    timeAgo: "2 min ago",
    status: "pending", // pending, prep, ready, completed
    notes: "Celebration birthday dessert sparkler later",
    items: [
      { name: "Truffle Ribeye 45-Day Dry Aged", qty: 2, price: 68.00, notes: "Medium Rare" },
      { name: "Wagyu Beef Carpaccio", qty: 1, price: 26.00, notes: "Extra truffle aioli" },
      { name: "Smoked Old Fashioned", qty: 2, price: 21.00, notes: "" }
    ]
  },
  {
    id: "ORD-1048",
    tableId: "T-17",
    tableName: "Booth 01",
    server: "Elena Rostova",
    timeAgo: "8 min ago",
    status: "prep",
    notes: "No garlic on the risotto if possible",
    items: [
      { name: "Wild Mushroom & Truffle Risotto", qty: 2, price: 32.00, notes: "No garlic" },
      { name: "Pan-Seared Chilean Sea Bass", qty: 2, price: 46.00, notes: "Crispy skin" },
      { name: "Botanical Violette Spritz", qty: 4, price: 18.00, notes: "" }
    ]
  },
  {
    id: "ORD-1045",
    tableId: "T-09",
    tableName: "Table 09",
    server: "Sophie Martin",
    timeAgo: "14 min ago",
    status: "prep",
    notes: "VIP guests from Ritz",
    items: [
      { name: "Charred Spanish Octopus", qty: 2, price: 28.00, notes: "" },
      { name: "Burrata Pugliese & Heirloom Tomato", qty: 1, price: 22.00, notes: "" },
      { name: "Truffle Ribeye 45-Day Dry Aged", qty: 1, price: 68.00, notes: "Medium" }
    ]
  },
  {
    id: "ORD-1044",
    tableId: "T-08",
    tableName: "Table 08",
    server: "Sophie Martin",
    timeAgo: "17 min ago",
    status: "prep",
    notes: "Gluten free bread substitute",
    items: [
      { name: "Pan-Seared Chilean Sea Bass", qty: 2, price: 46.00, notes: "" },
      { name: "Wagyu Beef Carpaccio", qty: 2, price: 26.00, notes: "GF crackers" }
    ]
  },
  {
    id: "ORD-1041",
    tableId: "T-01",
    tableName: "Table 01",
    server: "Elena Rostova",
    timeAgo: "22 min ago",
    status: "ready",
    notes: "Ready on pass table 1",
    items: [
      { name: "Truffle Ribeye 45-Day Dry Aged", qty: 1, price: 68.00, notes: "Rare" },
      { name: "Wild Mushroom & Truffle Risotto", qty: 1, price: 32.00, notes: "" },
      { name: "Smoked Old Fashioned", qty: 2, price: 21.00, notes: "" }
    ]
  },
  {
    id: "ORD-1042",
    tableId: "T-02",
    tableName: "Table 02",
    server: "Lucas Silva",
    timeAgo: "26 min ago",
    status: "ready",
    notes: "Expedite desserts",
    items: [
      { name: "Valrhona Molten Chocolate Tart", qty: 2, price: 18.00, notes: "Extra pistachio gelato" },
      { name: "Madagascan Bourbon Vanilla Soufflé", qty: 2, price: 19.00, notes: "Poured tableside" }
    ]
  },
  {
    id: "ORD-1039",
    tableId: "T-04",
    tableName: "Table 04",
    server: "Sophie Martin",
    timeAgo: "44 min ago",
    status: "completed",
    notes: "Bill requested, credit card ready",
    items: [
      { name: "Truffle Ribeye 45-Day Dry Aged", qty: 2, price: 68.00, notes: "" },
      { name: "Chilean Sea Bass", qty: 2, price: 46.00, notes: "" },
      { name: "Smoked Old Fashioned", qty: 4, price: 21.00, notes: "" }
    ]
  }
];

const INITIAL_INVENTORY = [
  { item: "Black Angus Prime Ribeye (USDA Prime)", category: "Meat & Poultry", stock: "18.4 kg", par: "25.0 kg", status: "Low Stock", supplier: "Heritage Farm Meats", action: "Order Now" },
  { item: "Fresh Chilean Sea Bass Fillets", category: "Seafood", stock: "8.2 kg", par: "15.0 kg", status: "Critical", supplier: "Pacific Oceanic Catch", action: "Urgent Reorder" },
  { item: "Acquerello Aged Carnaroli Rice", category: "Dry Goods", stock: "45.0 kg", par: "30.0 kg", status: "Optimal", supplier: "Milano Imports LLC", action: "In Stock" },
  { item: "Perigord Black Winter Truffles", category: "Luxury Specialty", stock: "320 g", par: "500 g", status: "Low Stock", supplier: "Urbani Truffles", action: "Order Now" },
  { item: "Pugliese Fresh Burrata (250g)", category: "Dairy & Cheese", stock: "28 pcs", par: "24 pcs", status: "Optimal", supplier: "Lazio Artisans", action: "In Stock" },
  { item: "Woodford Reserve Bourbon", category: "Spirits & Cellar", stock: "14 btls", par: "12 btls", status: "Optimal", supplier: "Southern Glazer's", action: "In Stock" },
  { item: "Valrhona Guanaja 70% Chocolate", category: "Pastry & Bakery", stock: "12.5 kg", par: "10.0 kg", status: "Optimal", supplier: "French Gourmand", action: "In Stock" }
];

const INITIAL_STAFF = [
  { name: "Mateo Vance", role: "General Manager", section: "All Zones", shift: "14:00 - Close", avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80", status: "Active Lead" },
  { name: "Antoine Renaud", role: "Executive Head Chef", section: "Hot Line & Pass", shift: "15:00 - 23:30", avatar: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=200&q=80", status: "Cooking" },
  { name: "Elena Rostova", role: "Senior Head Waiter", section: "Main Dining (Tables 1-5)", shift: "16:00 - Close", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80", status: "Floor Active" },
  { name: "Lucas Silva", role: "Captain Server", section: "Patio Terrace", shift: "16:30 - Close", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80", status: "Floor Active" },
  { name: "Sophie Martin", role: "Floor Sommelier", section: "VIP Lounge & Dining", shift: "17:00 - Close", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80", status: "Floor Active" },
  { name: "Cole Bennett", role: "Head Mixologist", section: "Cocktail Bar", shift: "16:00 - 01:00", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80", status: "Mixing" }
];

const INITIAL_NOTIFICATIONS = [
  { id: 1, title: "Table 04 Requested Bill", desc: "Party of 5 requested final checkout ($342.20)", time: "3m ago", type: "urgent", icon: "fa-solid fa-receipt" },
  { id: 2, title: "Order #1041 Ready on Pass", desc: "Chef Antoine marked Ribeye & Risotto ready to serve", time: "6m ago", type: "success", icon: "fa-solid fa-bell-concierge" },
  { id: 3, title: "Low Stock: Chilean Sea Bass", desc: "Only 8.2 kg left in walk-in cooler (Par: 15 kg)", time: "12m ago", type: "urgent", icon: "fa-solid fa-triangle-exclamation" },
  { id: 4, title: "VIP Reservation Confirmed", desc: "Ambassador Laurent arrived at reception for VIP Salon B", time: "18m ago", type: "info", icon: "fa-regular fa-star" }
];

// ==========================================================================
// 2. Application State Class
// ==========================================================================

class RestaurantApp {
  constructor() {
    this.tables = JSON.parse(localStorage.getItem('aura_tables')) || INITIAL_TABLES;
    this.orders = JSON.parse(localStorage.getItem('aura_orders')) || INITIAL_ORDERS;
    this.menu = JSON.parse(localStorage.getItem('aura_menu')) || INITIAL_MENU;
    this.inventory = INITIAL_INVENTORY;
    this.staff = INITIAL_STAFF;
    this.notifications = INITIAL_NOTIFICATIONS;
    
    // Live Order Draft for POS
    this.currentPosTicket = {
      tableId: "T-03",
      guestCount: 2,
      server: "Mateo V. (GM)",
      items: {}, // key: menuItemId, val: { item, qty, note }
      notes: ""
    };

    // Filter states
    this.currentView = 'dashboard';
    this.orderFilter = 'all';
    this.tableZoneFilter = 'all';
    this.menuCategoryFilter = 'all';
    this.posCategoryFilter = 'all';
    this.chartPeriod = 'revenue'; // revenue or covers
    this.soundEnabled = true;

    // Charts instances
    this.salesChart = null;
    this.categoryChart = null;
    this.paymentChart = null;

    this.init();
  }

  init() {
    this.bindEvents();
    this.startClock();
    this.renderAll();
    this.initCharts();
  }

  save() {
    localStorage.setItem('aura_tables', JSON.stringify(this.tables));
    localStorage.setItem('aura_orders', JSON.stringify(this.orders));
    localStorage.setItem('aura_menu', JSON.stringify(this.menu));
  }

  // Gentle Audio Feedback
  playChime(type = 'success') {
    if (!this.soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'success') {
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
        osc.frequency.setValueAtTime(880.00, audioCtx.currentTime + 0.12); // A5
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.35);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.35);
      } else if (type === 'pop') {
        osc.frequency.setValueAtTime(440, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.15);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.15);
      }
    } catch (e) {
      // Audio context might be restricted before user gesture
    }
  }

  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let iconClass = 'fa-solid fa-circle-info';
    if (type === 'success') iconClass = 'fa-solid fa-circle-check';
    if (type === 'danger') iconClass = 'fa-solid fa-triangle-exclamation';

    toast.innerHTML = `
      <i class="${iconClass}"></i>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  startClock() {
    const clockEl = document.getElementById('currentTimeDisplay');
    const updateTime = () => {
      const now = new Date();
      if (clockEl) {
        clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      }
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  // ==========================================================================
  // 3. Render Helpers
  // ==========================================================================

  renderAll() {
    this.updateKpiCounters();
    this.renderDashboardOrdersQueue();
    this.renderDashboardQuickTables();
    this.renderBestsellers();
    this.renderStaffMini();
    this.renderKanbanBoard();
    this.renderFullFloor();
    this.renderMenuGrid();
    this.renderInventoryTable();
    this.renderStaffGrid();
    this.renderNotifications();
    this.populateTableSelectDropdowns();
    this.renderPosMenuCatalog();
    this.renderPosCurrentTicket();
  }

  updateKpiCounters() {
    // Total revenue from all settled and active table bills
    const activeRevenue = this.tables.reduce((acc, t) => acc + (t.billTotal || 0), 0);
    const baseSettled = 3280.00;
    const totalRev = baseSettled + activeRevenue;

    const kpiRev = document.getElementById('kpiRevenue');
    if (kpiRev) kpiRev.textContent = `$${totalRev.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const sidebarRev = document.getElementById('sidebarShiftRevenue');
    if (sidebarRev) sidebarRev.textContent = `$${totalRev.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    // Occupied tables count
    const occupiedCount = this.tables.filter(t => t.status === 'occupied' || t.status === 'bill').length;
    const totalTables = this.tables.length;
    const occupancyPct = Math.round((occupiedCount / totalTables) * 100);

    const kpiOcc = document.getElementById('kpiOccupancy');
    if (kpiOcc) kpiOcc.textContent = `${occupiedCount} / ${totalTables}`;

    const kpiOccPct = document.getElementById('kpiOccupancyPct');
    if (kpiOccPct) kpiOccPct.textContent = `${occupancyPct}% Occupied`;

    const occPill = document.getElementById('serviceOccupancyPill');
    if (occPill) occPill.textContent = `${occupancyPct}%`;

    // Active orders in kitchen
    const activeOrders = this.orders.filter(o => o.status === 'pending' || o.status === 'prep');
    const readyOrders = this.orders.filter(o => o.status === 'ready');

    const kpiActive = document.getElementById('kpiActiveOrdersCount');
    if (kpiActive) kpiActive.textContent = activeOrders.length + readyOrders.length;

    const navActiveOrders = document.getElementById('activeOrdersCount');
    if (navActiveOrders) navActiveOrders.textContent = activeOrders.length + readyOrders.length;

    const vacantCount = this.tables.filter(t => t.status === 'available').length;
    const navVacant = document.getElementById('vacantTablesCount');
    if (navVacant) navVacant.textContent = `${vacantCount} Vacant`;

    // Update filter counts
    const countAll = this.orders.filter(o => o.status !== 'completed').length;
    const countPrep = this.orders.filter(o => o.status === 'prep').length;
    const countReady = this.orders.filter(o => o.status === 'ready').length;
    const countPending = this.orders.filter(o => o.status === 'pending').length;

    if (document.getElementById('allOrdersFilterCount')) document.getElementById('allOrdersFilterCount').textContent = countAll;
    if (document.getElementById('prepOrdersFilterCount')) document.getElementById('prepOrdersFilterCount').textContent = countPrep;
    if (document.getElementById('readyOrdersFilterCount')) document.getElementById('readyOrdersFilterCount').textContent = countReady;
    if (document.getElementById('newOrdersFilterCount')) document.getElementById('newOrdersFilterCount').textContent = countPending;

    // Floor stats strip
    if (document.getElementById('floorOccupiedCount')) document.getElementById('floorOccupiedCount').textContent = `${occupiedCount} Tables`;
    if (document.getElementById('floorAvailableCount')) document.getElementById('floorAvailableCount').textContent = `${vacantCount} Tables`;
    if (document.getElementById('floorReservedCount')) {
      const resCount = this.tables.filter(t => t.status === 'reserved').length;
      document.getElementById('floorReservedCount').textContent = `${resCount} Reserved`;
    }
  }

  // --------------------------------------------------------------------------
  // Dashboard Orders Queue
  // --------------------------------------------------------------------------
  renderDashboardOrdersQueue() {
    const container = document.getElementById('dashboardOrdersQueue');
    if (!container) return;

    let filtered = this.orders.filter(o => o.status !== 'completed');
    if (this.orderFilter !== 'all') {
      filtered = filtered.filter(o => o.status === this.orderFilter);
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; padding: 30px; text-align: center; color: var(--text-dim);">
          <i class="fa-solid fa-check-double" style="font-size: 2rem; margin-bottom: 8px;"></i>
          <p>No active orders matching this filter.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(order => {
      const itemsHtml = order.items.map(it => `
        <li class="ticket-item">
          <span><span class="ticket-item-qty">${it.qty}x</span> ${it.name}</span>
          ${it.notes ? `<span class="ticket-item-notes"><i class="fa-solid fa-comment-dots"></i> ${it.notes}</span>` : ''}
        </li>
      `).join('');

      let actionBtn = '';
      if (order.status === 'pending') {
        actionBtn = `<button class="btn btn-xs btn-primary" onclick="app.advanceOrderStatus('${order.id}', 'prep')"><i class="fa-solid fa-fire-burner"></i> Start Cook</button>`;
      } else if (order.status === 'prep') {
        actionBtn = `<button class="btn btn-xs btn-primary" style="background: var(--accent-emerald); color:#fff;" onclick="app.advanceOrderStatus('${order.id}', 'ready')"><i class="fa-solid fa-bell-concierge"></i> Mark Ready</button>`;
      } else if (order.status === 'ready') {
        actionBtn = `<button class="btn btn-xs btn-outline" onclick="app.advanceOrderStatus('${order.id}', 'completed')"><i class="fa-solid fa-check"></i> Served</button>`;
      }

      return `
        <div class="order-ticket status-${order.status}" id="ticket-${order.id}">
          <div class="ticket-top">
            <span class="ticket-number">${order.id}</span>
            <span class="ticket-table-badge">${order.tableName}</span>
            <span class="ticket-timer ${order.timeAgo.includes('2') || order.timeAgo.includes('3') ? 'urgent' : ''}">
              <i class="fa-regular fa-clock"></i> ${order.timeAgo}
            </span>
          </div>
          <ul class="ticket-items-list">
            ${itemsHtml}
          </ul>
          <div class="ticket-footer">
            <span class="ticket-server"><i class="fa-regular fa-user"></i> ${order.server}</span>
            <div class="ticket-action-btns">
              ${actionBtn}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // --------------------------------------------------------------------------
  // Dashboard Quick Tables
  // --------------------------------------------------------------------------
  renderDashboardQuickTables() {
    const container = document.getElementById('dashboardQuickTablesGrid');
    if (!container) return;

    // Show first 12 tables in overview
    const subset = this.tables.slice(0, 12);
    container.innerHTML = subset.map(t => {
      let statusLabel = 'Available';
      if (t.status === 'occupied') statusLabel = 'Occupied';
      if (t.status === 'reserved') statusLabel = 'Reserved';
      if (t.status === 'bill') statusLabel = 'Bill Due';

      return `
        <div class="table-cell-card ${t.status}" onclick="app.openTableModal('${t.id}')">
          <span class="table-num">${t.name}</span>
          <span class="table-seats"><i class="fa-solid fa-user"></i> ${t.seats} seats</span>
          <span class="table-status-pill ${t.status}">${statusLabel}</span>
        </div>
      `;
    }).join('');
  }

  // --------------------------------------------------------------------------
  // Bestsellers & Staff Mini
  // --------------------------------------------------------------------------
  renderBestsellers() {
    const container = document.getElementById('bestsellersList');
    if (!container) return;

    const topItems = [...this.menu].sort((a, b) => b.ordersCount - a.ordersCount).slice(0, 4);

    container.innerHTML = topItems.map((item, idx) => `
      <div class="bestseller-item">
        <img src="${item.image}" alt="${item.name}" class="dish-thumb">
        <div class="bestseller-meta">
          <div class="dish-title">
            <span>${item.name}</span>
            <span class="dish-price">$${item.price.toFixed(2)}</span>
          </div>
          <div class="dish-subinfo">
            <span>${item.ordersCount} ordered tonight</span>
            <span>•</span>
            <span style="display:flex; align-items:center; gap:4px;">Stock: 
              <div class="stock-meter">
                <div class="stock-meter-fill ${item.stock < item.par ? 'low' : ''}" style="width: ${Math.min(100, (item.stock / 25) * 100)}%"></div>
              </div>
            </span>
          </div>
        </div>
      </div>
    `).join('');
  }

  renderStaffMini() {
    const container = document.getElementById('staffMiniList');
    if (!container) return;

    container.innerHTML = this.staff.slice(0, 4).map(st => `
      <div class="staff-chip">
        <img src="${st.avatar}" alt="${st.name}">
        <div class="staff-chip-info">
          <span class="staff-chip-name">${st.name}</span>
          <span class="staff-chip-role">${st.role}</span>
        </div>
      </div>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // Kanban Board (Live Orders Dispatcher)
  // --------------------------------------------------------------------------
  renderKanbanBoard() {
    const statuses = ['pending', 'prep', 'ready', 'completed'];
    
    statuses.forEach(status => {
      const colCards = document.getElementById(`kanban${status.charAt(0).toUpperCase() + status.slice(1)}`);
      const colBadge = document.getElementById(`colCount${status.charAt(0).toUpperCase() + status.slice(1)}`);
      
      if (!colCards) return;

      const ordersInCol = this.orders.filter(o => o.status === status);
      if (colBadge) colBadge.textContent = ordersInCol.length;

      if (ordersInCol.length === 0) {
        colCards.innerHTML = `
          <div style="padding: 24px; text-align: center; color: var(--text-dim); font-size: 0.8rem;">
            No tickets in this stage
          </div>
        `;
        return;
      }

      colCards.innerHTML = ordersInCol.map(order => {
        let actionBtn = '';
        if (order.status === 'pending') {
          actionBtn = `<button class="btn btn-xs btn-primary" onclick="app.advanceOrderStatus('${order.id}', 'prep')">Send to Kitchen</button>`;
        } else if (order.status === 'prep') {
          actionBtn = `<button class="btn btn-xs btn-primary" style="background:var(--accent-emerald); color:#fff;" onclick="app.advanceOrderStatus('${order.id}', 'ready')">Plated Ready</button>`;
        } else if (order.status === 'ready') {
          actionBtn = `<button class="btn btn-xs btn-outline" onclick="app.advanceOrderStatus('${order.id}', 'completed')">Serve Guest</button>`;
        } else {
          actionBtn = `<span class="badge-tag emerald" style="font-size:0.7rem;">Closed & Settled</span>`;
        }

        return `
          <div class="order-ticket status-${order.status}">
            <div class="ticket-top">
              <span class="ticket-number">${order.id}</span>
              <span class="ticket-table-badge">${order.tableName}</span>
            </div>
            <div style="font-size: 0.72rem; color: var(--text-dim); margin-top: -6px;">
              <i class="fa-regular fa-clock"></i> ${order.timeAgo} • Server: ${order.server}
            </div>
            <ul class="ticket-items-list" style="margin: 8px 0;">
              ${order.items.map(it => `
                <li class="ticket-item">
                  <span><strong>${it.qty}x</strong> ${it.name}</span>
                  <span>$${(it.qty * it.price).toFixed(2)}</span>
                </li>
              `).join('')}
            </ul>
            ${order.notes ? `<div style="font-size:0.75rem; color:var(--accent-amber); margin-bottom:8px;"><i class="fa-regular fa-note-sticky"></i> ${order.notes}</div>` : ''}
            <div class="ticket-footer">
              <div style="font-weight: 700; color: var(--accent-amber-light); font-size: 0.88rem;">
                $${order.items.reduce((s, it) => s + (it.qty * it.price), 0).toFixed(2)}
              </div>
              <div class="ticket-action-btns">
                ${actionBtn}
              </div>
            </div>
          </div>
        `;
      }).join('');
    });
  }

  // --------------------------------------------------------------------------
  // Table Plan Full Floor Layout
  // --------------------------------------------------------------------------
  renderFullFloor() {
    const container = document.getElementById('fullFloorGrid');
    if (!container) return;

    let filtered = this.tables;
    if (this.tableZoneFilter !== 'all') {
      filtered = filtered.filter(t => t.zone === this.tableZoneFilter);
    }

    container.innerHTML = filtered.map(t => {
      let statusBadge = '';
      if (t.status === 'occupied') statusBadge = '<span class="table-status-pill occupied">Occupied</span>';
      else if (t.status === 'available') statusBadge = '<span class="table-status-pill available">Available</span>';
      else if (t.status === 'reserved') statusBadge = '<span class="table-status-pill reserved">Reserved</span>';
      else if (t.status === 'bill') statusBadge = '<span class="table-status-pill bill">Bill Requested</span>';

      return `
        <div class="floor-table-card ${t.status}" onclick="app.openTableModal('${t.id}')">
          <div class="floor-card-top">
            <div>
              <div class="floor-t-title">${t.name}</div>
              <div class="floor-card-zone"><i class="fa-solid fa-location-dot"></i> ${t.zone}</div>
            </div>
            ${statusBadge}
          </div>

          <div class="floor-guest-info">
            <div style="display:flex; justify-content:space-between;">
              <span>Capacity:</span>
              <strong>${t.seats} Persons</strong>
            </div>
            <div style="display:flex; justify-content:space-between;">
              <span>Current Server:</span>
              <strong style="color:var(--text-bright);">${t.server}</strong>
            </div>
            ${t.status === 'reserved' ? `
              <div style="color:var(--accent-amber-light); margin-top:4px;">
                <i class="fa-regular fa-clock"></i> Res: ${t.resTime} (${t.resGuest})
              </div>
            ` : ''}
            ${(t.status === 'occupied' || t.status === 'bill') ? `
              <div style="display:flex; justify-content:space-between; margin-top:4px; color:var(--accent-amber-light);">
                <span>Current Tab:</span>
                <strong>$${t.billTotal.toFixed(2)}</strong>
              </div>
            ` : ''}
          </div>

          <div class="floor-card-bottom">
            <button class="btn btn-xs btn-outline" style="width: 100%;">
              <i class="fa-solid fa-gear"></i> Manage Table
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // --------------------------------------------------------------------------
  // Menu Catalog Grid
  // --------------------------------------------------------------------------
  renderMenuGrid() {
    const container = document.getElementById('menuItemsGrid');
    if (!container) return;

    let filtered = this.menu;
    if (this.menuCategoryFilter !== 'all') {
      filtered = filtered.filter(m => m.category === this.menuCategoryFilter);
    }

    container.innerHTML = filtered.map(item => `
      <div class="menu-item-card">
        <div class="menu-img-wrap">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <span class="menu-badge-category">${item.category}</span>
          <span class="menu-badge-stock ${item.stock < item.par ? 'low-stock' : 'in-stock'}">
            ${item.stock < item.par ? `Low: ${item.stock} left` : `In Stock: ${item.stock}`}
          </span>
        </div>
        <div class="menu-details">
          <div class="menu-item-title-row">
            <h3 class="menu-dish-name">${item.name}</h3>
            <span class="menu-dish-price">$${item.price.toFixed(2)}</span>
          </div>
          <p class="menu-dish-desc">${item.desc}</p>
          <div class="menu-card-footer">
            <span style="font-size:0.75rem; color:var(--text-dim);"><i class="fa-solid fa-chart-line"></i> ${item.ordersCount} sold</span>
            <button class="btn btn-xs btn-primary" onclick="app.quickAddOrderFromMenu('${item.id}')">
              <i class="fa-solid fa-plus"></i> Add to Order
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // Inventory Table
  // --------------------------------------------------------------------------
  renderInventoryTable() {
    const tbody = document.getElementById('inventoryTableBody');
    if (!tbody) return;

    tbody.innerHTML = this.inventory.map(inv => {
      let badgeClass = 'emerald';
      if (inv.status === 'Low Stock') badgeClass = 'gold';
      if (inv.status === 'Critical') badgeClass = 'rose';

      return `
        <tr>
          <td><strong>${inv.item}</strong></td>
          <td><span class="badge-tag info">${inv.category}</span></td>
          <td>${inv.stock}</td>
          <td>${inv.par}</td>
          <td><span class="badge-tag ${badgeClass}">${inv.status}</span></td>
          <td>${inv.supplier}</td>
          <td>
            <button class="btn btn-xs btn-outline" onclick="app.restockItem('${inv.item}')">
              <i class="fa-solid fa-truck-fast"></i> Restock
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  // --------------------------------------------------------------------------
  // Staff Grid
  // --------------------------------------------------------------------------
  renderStaffGrid() {
    const container = document.getElementById('staffCardsGrid');
    if (!container) return;

    container.innerHTML = this.staff.map(st => `
      <div class="staff-full-card">
        <div class="staff-head">
          <img src="${st.avatar}" alt="${st.name}">
          <div>
            <h3 style="font-size: 1rem; color: #fff;">${st.name}</h3>
            <span style="color: var(--accent-amber-light); font-size: 0.8rem; font-weight: 600;">${st.role}</span>
          </div>
        </div>
        <div style="font-size: 0.82rem; color: var(--text-muted); display:flex; flex-direction:column; gap:4px;">
          <div><i class="fa-solid fa-location-crosshairs"></i> Station: <strong>${st.section}</strong></div>
          <div><i class="fa-regular fa-clock"></i> Shift: <strong>${st.shift}</strong></div>
          <div><i class="fa-solid fa-circle-check" style="color: var(--accent-emerald);"></i> Status: <strong>${st.status}</strong></div>
        </div>
        <div style="display: flex; gap: 8px; margin-top: 4px;">
          <button class="btn btn-xs btn-outline" style="flex:1;" onclick="app.showToast('Page sent to ${st.name}', 'info')">
            <i class="fa-regular fa-message"></i> Page
          </button>
          <button class="btn btn-xs btn-glass" onclick="app.showToast('Shift assigned', 'success')">
            Reassign
          </button>
        </div>
      </div>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // Notifications List
  // --------------------------------------------------------------------------
  renderNotifications() {
    const list = document.getElementById('notifList');
    const badge = document.getElementById('unreadNotifBadge');
    if (!list) return;

    if (badge) badge.textContent = this.notifications.length;

    if (this.notifications.length === 0) {
      list.innerHTML = `<li style="padding: 20px; text-align: center; color: var(--text-dim);">No alerts right now</li>`;
      return;
    }

    list.innerHTML = this.notifications.map(n => `
      <li class="notif-item">
        <div class="notif-icon ${n.type}">
          <i class="${n.icon}"></i>
        </div>
        <div class="notif-content">
          <div class="notif-title">${n.title}</div>
          <div class="notif-desc">${n.desc}</div>
          <div class="notif-time">${n.time}</div>
        </div>
      </li>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // POS Order Modal Catalog & Current Ticket
  // --------------------------------------------------------------------------
  renderPosMenuCatalog() {
    const container = document.getElementById('posItemsList');
    if (!container) return;

    let filtered = this.menu;
    if (this.posCategoryFilter !== 'all') {
      filtered = filtered.filter(m => m.category === this.posCategoryFilter);
    }

    container.innerHTML = filtered.map(item => `
      <div class="pos-item-card" onclick="app.addPosTicketItem('${item.id}')">
        <img src="${item.image}" alt="${item.name}" class="pos-item-img">
        <div style="flex: 1; overflow: hidden;">
          <div class="pos-item-name" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</div>
          <div class="pos-item-price">$${item.price.toFixed(2)}</div>
        </div>
        <button class="btn btn-xs btn-outline" style="padding: 4px 8px;"><i class="fa-solid fa-plus"></i></button>
      </div>
    `).join('');
  }

  renderPosCurrentTicket() {
    const container = document.getElementById('posTicketItems');
    if (!container) return;

    const itemKeys = Object.keys(this.currentPosTicket.items);
    if (itemKeys.length === 0) {
      container.innerHTML = `
        <div class="empty-ticket-hint">
          <i class="fa-solid fa-basket-shopping"></i>
          <p>No items added yet.<br>Click dishes on the left to add to ticket.</p>
        </div>
      `;
      this.updatePosTotals(0);
      return;
    }

    let subtotal = 0;
    container.innerHTML = itemKeys.map(id => {
      const entry = this.currentPosTicket.items[id];
      const lineTotal = entry.item.price * entry.qty;
      subtotal += lineTotal;

      return `
        <div class="ticket-line-item">
          <div>
            <div class="t-line-title">${entry.item.name}</div>
            <div style="font-size: 0.72rem; color: var(--text-dim);">$${entry.item.price.toFixed(2)} each</div>
          </div>
          <div class="t-line-controls">
            <button class="qty-btn" onclick="app.changePosItemQty('${id}', -1)">-</button>
            <span style="font-weight: 700; width: 18px; text-align: center;">${entry.qty}</span>
            <button class="qty-btn" onclick="app.changePosItemQty('${id}', 1)">+</button>
            <span style="font-weight: 700; color: var(--accent-amber-light); margin-left: 6px;">$${lineTotal.toFixed(2)}</span>
          </div>
        </div>
      `;
    }).join('');

    this.updatePosTotals(subtotal);
  }

  updatePosTotals(subtotal) {
    const tax = subtotal * 0.08;
    const grandTotal = subtotal + tax;

    if (document.getElementById('posSubtotal')) document.getElementById('posSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    if (document.getElementById('posTax')) document.getElementById('posTax').textContent = `$${tax.toFixed(2)}`;
    if (document.getElementById('posGrandTotal')) document.getElementById('posGrandTotal').textContent = `$${grandTotal.toFixed(2)}`;
  }

  populateTableSelectDropdowns() {
    const posSelect = document.getElementById('posTableSelect');
    const resSelect = document.getElementById('resTableSelect');

    const options = this.tables.map(t => `
      <option value="${t.id}" ${t.status === 'occupied' ? 'style="color:#f43f5e;"' : ''}>
        ${t.name} (${t.zone} • ${t.seats} seats) — [${t.status.toUpperCase()}]
      </option>
    `).join('');

    if (posSelect) posSelect.innerHTML = options;
    if (resSelect) {
      // Only available tables for new reservation
      const avail = this.tables.filter(t => t.status === 'available');
      resSelect.innerHTML = avail.map(t => `<option value="${t.id}">${t.name} (${t.zone} • ${t.seats} seats)</option>`).join('');
    }
  }

  // ==========================================================================
  // 4. POS & Order Actions
  // ==========================================================================

  addPosTicketItem(menuItemId) {
    const item = this.menu.find(m => m.id === menuItemId);
    if (!item) return;

    if (this.currentPosTicket.items[menuItemId]) {
      this.currentPosTicket.items[menuItemId].qty += 1;
    } else {
      this.currentPosTicket.items[menuItemId] = {
        item: item,
        qty: 1,
        note: ""
      };
    }
    this.playChime('pop');
    this.renderPosCurrentTicket();
  }

  changePosItemQty(menuItemId, delta) {
    if (!this.currentPosTicket.items[menuItemId]) return;
    this.currentPosTicket.items[menuItemId].qty += delta;

    if (this.currentPosTicket.items[menuItemId].qty <= 0) {
      delete this.currentPosTicket.items[menuItemId];
    }
    this.renderPosCurrentTicket();
  }

  submitPosOrder() {
    const itemKeys = Object.keys(this.currentPosTicket.items);
    if (itemKeys.length === 0) {
      this.showToast("Cannot place empty order! Select items from menu first.", "danger");
      return;
    }

    const tableId = document.getElementById('posTableSelect').value;
    const targetTable = this.tables.find(t => t.id === tableId);
    const guestCount = parseInt(document.getElementById('posGuestCount').value, 10) || 2;
    const server = document.getElementById('posServerSelect').value;
    const kitchenNotes = document.getElementById('posKitchenNotes').value;

    const newTicketItems = itemKeys.map(id => ({
      name: this.currentPosTicket.items[id].item.name,
      qty: this.currentPosTicket.items[id].qty,
      price: this.currentPosTicket.items[id].item.price,
      notes: ""
    }));

    const ticketSubtotal = newTicketItems.reduce((acc, it) => acc + (it.qty * it.price), 0);
    const grandTotal = ticketSubtotal * 1.08;

    const newOrderId = `ORD-${Math.floor(1054 + Math.random() * 800)}`;

    const newOrder = {
      id: newOrderId,
      tableId: tableId,
      tableName: targetTable ? targetTable.name : tableId,
      server: server,
      timeAgo: "Just now",
      status: "pending",
      notes: kitchenNotes,
      items: newTicketItems
    };

    // Update table status
    if (targetTable) {
      targetTable.status = "occupied";
      targetTable.orderId = newOrderId;
      targetTable.guests = guestCount;
      targetTable.server = server;
      targetTable.billTotal = (targetTable.billTotal || 0) + grandTotal;
    }

    this.orders.unshift(newOrder);

    // Increment item order counts
    itemKeys.forEach(id => {
      const m = this.menu.find(x => x.id === id);
      if (m) m.ordersCount += this.currentPosTicket.items[id].qty;
    });

    // Reset ticket
    this.currentPosTicket.items = {};
    document.getElementById('posKitchenNotes').value = "";
    this.closeModal('newOrderModal');

    this.save();
    this.renderAll();
    this.playChime('success');
    this.showToast(`Order ${newOrderId} dispatched to Kitchen for ${targetTable ? targetTable.name : 'Table'}!`, "success");
  }

  quickAddOrderFromMenu(menuItemId) {
    this.openModal('newOrderModal');
    this.addPosTicketItem(menuItemId);
  }

  advanceOrderStatus(orderId, nextStatus) {
    const order = this.orders.find(o => o.id === orderId);
    if (!order) return;

    order.status = nextStatus;
    if (nextStatus === 'prep') {
      this.showToast(`Order ${order.id} sent to kitchen firing line.`, 'info');
    } else if (nextStatus === 'ready') {
      this.playChime('success');
      this.showToast(`Order ${order.id} is Plated & Ready on the pass!`, 'success');
      // Add notification
      this.notifications.unshift({
        id: Date.now(),
        title: `Order ${order.id} Ready`,
        desc: `${order.tableName} items are ready for pickup on pass`,
        time: 'Just now',
        type: 'success',
        icon: 'fa-solid fa-bell-concierge'
      });
    } else if (nextStatus === 'completed') {
      this.showToast(`Order ${order.id} marked as served.`, 'info');
    }

    this.save();
    this.renderAll();
  }

  // --------------------------------------------------------------------------
  // Table Modal & Actions
  // --------------------------------------------------------------------------
  openTableModal(tableId) {
    const table = this.tables.find(t => t.id === tableId);
    if (!table) return;

    const modal = document.getElementById('tableDetailModal');
    const title = document.getElementById('tableModalTitle');
    const body = document.getElementById('tableModalBody');

    title.innerHTML = `${table.name} — ${table.zone}`;

    let statusBadge = `<span class="badge-tag emerald">Available</span>`;
    if (table.status === 'occupied') statusBadge = `<span class="badge-tag rose">Occupied (${table.guests} Guests)</span>`;
    if (table.status === 'reserved') statusBadge = `<span class="badge-tag gold">Reserved for ${table.resGuest}</span>`;
    if (table.status === 'bill') statusBadge = `<span class="badge-tag info">Bill Requested ($${table.billTotal.toFixed(2)})</span>`;

    // Find table's active order
    const tableOrder = this.orders.find(o => o.id === table.orderId);

    body.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 16px;">
        <div>
          <span style="font-size:0.8rem; color:var(--text-dim);">Table Status</span>
          <div>${statusBadge}</div>
        </div>
        <div style="text-align:right;">
          <span style="font-size:0.8rem; color:var(--text-dim);">Assigned Server</span>
          <div style="font-weight:600; color:var(--text-bright);">${table.server}</div>
        </div>
      </div>

      ${tableOrder ? `
        <div style="background:var(--bg-surface); padding:14px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); margin-bottom:18px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <strong style="color:var(--accent-amber-light);">${tableOrder.id}</strong>
            <span style="font-size:0.75rem; text-transform:uppercase;">Status: ${tableOrder.status}</span>
          </div>
          <ul style="list-style:none; display:flex; flex-direction:column; gap:6px; font-size:0.84rem;">
            ${tableOrder.items.map(it => `
              <li style="display:flex; justify-content:space-between;">
                <span>${it.qty}x ${it.name}</span>
                <span>$${(it.qty * it.price).toFixed(2)}</span>
              </li>
            `).join('')}
          </ul>
          <div style="border-top:1px solid var(--border-subtle); margin-top:10px; padding-top:8px; display:flex; justify-content:space-between; font-weight:700;">
            <span>Current Total Due:</span>
            <span style="color:var(--accent-amber-light); font-size:1.05rem;">$${table.billTotal.toFixed(2)}</span>
          </div>
        </div>
      ` : `
        <div style="padding:20px; background:rgba(255,255,255,0.02); text-align:center; color:var(--text-dim); border-radius:var(--radius-md); margin-bottom:18px;">
          No active order ticket assigned to this table.
        </div>
      `}

      <div style="display:flex; flex-direction:column; gap:10px;">
        ${table.status === 'available' ? `
          <button class="btn btn-primary" onclick="app.startOrderForTable('${table.id}')">
            <i class="fa-solid fa-plus"></i> Open New Order for ${table.name}
          </button>
          <button class="btn btn-outline" onclick="app.reserveThisTable('${table.id}')">
            <i class="fa-regular fa-calendar-check"></i> Reserve Table
          </button>
        ` : ''}

        ${(table.status === 'occupied' || table.status === 'bill') ? `
          <button class="btn btn-primary" style="background:linear-gradient(135deg, #10b981 0%, #059669 100%); color:#fff;" onclick="app.settleTableBill('${table.id}')">
            <i class="fa-solid fa-receipt"></i> Settle Bill & Close Table ($${table.billTotal.toFixed(2)})
          </button>
          <button class="btn btn-outline" onclick="app.startOrderForTable('${table.id}')">
            <i class="fa-solid fa-plus"></i> Add More Items (Add-on Order)
          </button>
          <button class="btn btn-glass" onclick="app.releaseTable('${table.id}')">
            <i class="fa-solid fa-arrow-rotate-left"></i> Force Vacate Table
          </button>
        ` : ''}

        ${table.status === 'reserved' ? `
          <button class="btn btn-primary" onclick="app.seatReservedParty('${table.id}')">
            <i class="fa-solid fa-user-check"></i> Seat Reserved Guests Now
          </button>
          <button class="btn btn-outline" onclick="app.releaseTable('${table.id}')">
            Cancel Reservation
          </button>
        ` : ''}
      </div>
    `;

    modal.classList.add('show');
  }

  startOrderForTable(tableId) {
    this.closeModal('tableDetailModal');
    this.openModal('newOrderModal');
    const sel = document.getElementById('posTableSelect');
    if (sel) sel.value = tableId;
  }

  reserveThisTable(tableId) {
    this.closeModal('tableDetailModal');
    this.openModal('reservationModal');
    const sel = document.getElementById('resTableSelect');
    if (sel) sel.value = tableId;
  }

  seatReservedParty(tableId) {
    const table = this.tables.find(t => t.id === tableId);
    if (!table) return;

    table.status = 'occupied';
    table.server = 'Elena Rostova';
    this.closeModal('tableDetailModal');
    this.save();
    this.renderAll();
    this.showToast(`Party seated at ${table.name}! Ready for order.`, 'success');
  }

  settleTableBill(tableId) {
    const table = this.tables.find(t => t.id === tableId);
    if (!table) return;

    const amount = table.billTotal.toFixed(2);
    table.status = 'available';
    table.orderId = null;
    table.billTotal = 0;
    table.guests = 0;

    this.closeModal('tableDetailModal');
    this.save();
    this.renderAll();
    this.playChime('success');
    this.showToast(`Table ${table.name} bill of $${amount} settled via Card! Table is now available.`, 'success');
  }

  releaseTable(tableId) {
    const table = this.tables.find(t => t.id === tableId);
    if (!table) return;

    table.status = 'available';
    table.orderId = null;
    table.billTotal = 0;
    table.guests = 0;
    table.resGuest = null;

    this.closeModal('tableDetailModal');
    this.save();
    this.renderAll();
    this.showToast(`${table.name} has been reset to Available.`, 'info');
  }

  // --------------------------------------------------------------------------
  // Reservations Form
  // --------------------------------------------------------------------------
  submitReservation(e) {
    e.preventDefault();
    const guest = document.getElementById('resGuestName').value;
    const party = parseInt(document.getElementById('resPartySize').value, 10);
    const time = document.getElementById('resTime').value;
    const tableId = document.getElementById('resTableSelect').value;

    const table = this.tables.find(t => t.id === tableId);
    if (table) {
      table.status = 'reserved';
      table.guests = party;
      table.resGuest = guest;
      table.resTime = time;
    }

    this.notifications.unshift({
      id: Date.now(),
      title: `Reservation: ${guest}`,
      desc: `Booked for ${party} guests at ${time} (${table ? table.name : 'Table'})`,
      time: 'Just now',
      type: 'info',
      icon: 'fa-regular fa-calendar-check'
    });

    this.closeModal('reservationModal');
    document.getElementById('reservationForm').reset();
    this.save();
    this.renderAll();
    this.playChime('success');
    this.showToast(`Reservation confirmed for ${guest} at ${table ? table.name : 'Table'}!`, 'success');
  }

  // --------------------------------------------------------------------------
  // Inventory Restock Action
  // --------------------------------------------------------------------------
  restockItem(itemName) {
    const it = this.inventory.find(i => i.item === itemName);
    if (it) {
      it.status = "Optimal";
      it.stock = it.par;
      this.renderInventoryTable();
      this.showToast(`Purchase order placed for ${itemName}. Stock par restored!`, 'success');
    }
  }

  // ==========================================================================
  // 5. Analytics Charts (Chart.js)
  // ==========================================================================

  initCharts() {
    this.initSalesVelocityChart();
    this.initCategoryShareChart();
    this.initPaymentChart();
  }

  initSalesVelocityChart() {
    const ctx = document.getElementById('salesVelocityChart');
    if (!ctx) return;

    const labels = ['12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM (Now)', '10 PM (Est)'];
    const revenueData = [280, 520, 640, 210, 180, 490, 720, 890, 1140, 920, 480];
    const coversData = [12, 22, 28, 8, 6, 18, 30, 36, 44, 38, 20];

    this.salesChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Hourly Sales ($)',
          data: revenueData,
          borderColor: '#f59e0b',
          backgroundColor: 'rgba(245, 158, 11, 0.08)',
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#fbbf24',
          pointBorderColor: '#090d16',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#151f38',
            titleColor: '#fff',
            bodyColor: '#fbbf24',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            padding: 10,
            displayColors: false
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.04)' },
            ticks: { color: '#64748b', font: { size: 11 } }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.04)' },
            ticks: {
              color: '#64748b',
              font: { size: 11 },
              callback: (val) => `$${val}`
            }
          }
        }
      }
    });

    // Chart toggle buttons
    const btnRev = document.getElementById('btnChartRevenue');
    const btnCov = document.getElementById('btnChartCovers');

    if (btnRev && btnCov) {
      btnRev.addEventListener('click', () => {
        btnRev.classList.add('active');
        btnCov.classList.remove('active');
        this.salesChart.data.datasets[0].label = 'Hourly Sales ($)';
        this.salesChart.data.datasets[0].data = revenueData;
        this.salesChart.data.datasets[0].borderColor = '#f59e0b';
        this.salesChart.options.scales.y.ticks.callback = (v) => `$${v}`;
        this.salesChart.update();
      });

      btnCov.addEventListener('click', () => {
        btnCov.classList.add('active');
        btnRev.classList.remove('active');
        this.salesChart.data.datasets[0].label = 'Guest Covers';
        this.salesChart.data.datasets[0].data = coversData;
        this.salesChart.data.datasets[0].borderColor = '#6366f1';
        this.salesChart.options.scales.y.ticks.callback = (v) => `${v} pax`;
        this.salesChart.update();
      });
    }
  }

  initCategoryShareChart() {
    const ctx = document.getElementById('categoryShareChart');
    if (!ctx) return;

    this.categoryChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Prime Steaks', 'Seafood & Mains', 'Starters', 'Cellar & Cocktails', 'Desserts'],
        datasets: [{
          data: [38, 26, 16, 14, 6],
          backgroundColor: ['#f59e0b', '#3b82f6', '#10b981', '#a855f7', '#f43f5e'],
          borderWidth: 2,
          borderColor: '#151f38'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: { color: '#94a3b8', font: { size: 11 }, padding: 12 }
          }
        },
        cutout: '70%'
      }
    });
  }

  initPaymentChart() {
    const ctx = document.getElementById('paymentMethodsChart');
    if (!ctx) return;

    this.paymentChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Visa / Mastercard', 'American Express', 'Apple Pay / NFC', 'Cash', 'House Tab'],
        datasets: [{
          label: 'Revenue ($)',
          data: [2650, 1180, 680, 220, 132],
          backgroundColor: 'rgba(99, 102, 241, 0.75)',
          hoverBackgroundColor: '#818cf8',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#64748b', font: { size: 10 } }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.04)' },
            ticks: {
              color: '#64748b',
              callback: (v) => `$${v}`
            }
          }
        }
      }
    });
  }

  // ==========================================================================
  // 6. Modal Helpers & Navigation
  // ==========================================================================

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('show');
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('show');
  }

  switchView(viewName) {
    this.currentView = viewName;
    
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
      if (btn.dataset.view === viewName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update panels
    document.querySelectorAll('.view-panel').forEach(panel => {
      if (panel.id === `view-${viewName}`) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    // Close mobile sidebar if open
    const sidebar = document.getElementById('mainSidebar');
    if (sidebar) sidebar.classList.remove('mobile-open');

    // Trigger charts resize if needed
    if (viewName === 'analytics') {
      setTimeout(() => {
        if (this.categoryChart) this.categoryChart.resize();
        if (this.paymentChart) this.paymentChart.resize();
      }, 50);
    }
  }

  // ==========================================================================
  // 7. Event Listeners Binding
  // ==========================================================================

  bindEvents() {
    // Nav Click Handling
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.switchView(btn.dataset.view);
      });
    });

    // Sidebar Toggle
    const sidebar = document.getElementById('mainSidebar');
    const toggleBtn = document.getElementById('sidebarToggle');
    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
      });
    }

    // Mobile Hamburger
    const mobileBtn = document.getElementById('mobileMenuBtn');
    if (mobileBtn && sidebar) {
      mobileBtn.addEventListener('click', () => {
        sidebar.classList.toggle('mobile-open');
      });
    }

    // Shortcut Buttons to switch view
    const viewAllOrdersBtn = document.getElementById('viewAllOrdersBtn');
    if (viewAllOrdersBtn) {
      viewAllOrdersBtn.addEventListener('click', () => this.switchView('orders'));
    }

    const viewAllTablesBtn = document.getElementById('viewAllTablesBtn');
    if (viewAllTablesBtn) {
      viewAllTablesBtn.addEventListener('click', () => this.switchView('tables'));
    }

    // Dashboard Order Filter Pills
    document.querySelectorAll('#orderStatusFilters .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#orderStatusFilters .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.orderFilter = btn.dataset.filter;
        this.renderDashboardOrdersQueue();
      });
    });

    // Floor Zone Filters
    document.querySelectorAll('#zoneFilterGroup .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#zoneFilterGroup .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.tableZoneFilter = btn.dataset.zone;
        this.renderFullFloor();
      });
    });

    // Menu Category Tabs
    document.querySelectorAll('#menuCategoryTabs .cat-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('#menuCategoryTabs .cat-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.menuCategoryFilter = tab.dataset.category;
        this.renderMenuGrid();
      });
    });

    // POS Category Filters
    document.querySelectorAll('#posCategoryFilter .pos-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('#posCategoryFilter .pos-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.posCategoryFilter = pill.dataset.posCat;
        this.renderPosMenuCatalog();
      });
    });

    // POS Search Input
    const posSearch = document.getElementById('posSearchInput');
    if (posSearch) {
      posSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const container = document.getElementById('posItemsList');
        const matches = this.menu.filter(m => m.name.toLowerCase().includes(query));
        container.innerHTML = matches.map(item => `
          <div class="pos-item-card" onclick="app.addPosTicketItem('${item.id}')">
            <img src="${item.image}" alt="${item.name}" class="pos-item-img">
            <div style="flex: 1; overflow: hidden;">
              <div class="pos-item-name" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</div>
              <div class="pos-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <button class="btn btn-xs btn-outline" style="padding: 4px 8px;"><i class="fa-solid fa-plus"></i></button>
          </div>
        `).join('');
      });
    }

    // Global Search Input
    const globalSearch = document.getElementById('globalSearchInput');
    if (globalSearch) {
      globalSearch.addEventListener('input', (e) => {
        const q = e.target.value.trim().toLowerCase();
        if (!q) return;

        // If user typed table number e.g. "table 4" or "t-04"
        const foundTable = this.tables.find(t => t.name.toLowerCase().includes(q) || t.id.toLowerCase().includes(q));
        if (foundTable && e.inputType === 'insertLineBreak') {
          this.openTableModal(foundTable.id);
        }
      });
    }

    // Modal Triggers
    const btnOpenOrder = document.getElementById('btnOpenOrderModal');
    if (btnOpenOrder) btnOpenOrder.addEventListener('click', () => this.openModal('newOrderModal'));

    const btnOpenFromBoard = document.getElementById('btnOpenNewOrderFromBoard');
    if (btnOpenFromBoard) btnOpenFromBoard.addEventListener('click', () => this.openModal('newOrderModal'));

    const btnOpenRes = document.getElementById('btnOpenReservationModal');
    if (btnOpenRes) btnOpenRes.addEventListener('click', () => this.openModal('reservationModal'));

    const btnFloorRes = document.getElementById('btnFloorNewReservation');
    if (btnFloorRes) btnFloorRes.addEventListener('click', () => this.openModal('reservationModal'));

    // Modal Close Buttons
    document.getElementById('closeOrderModal')?.addEventListener('click', () => this.closeModal('newOrderModal'));
    document.getElementById('closeTableModal')?.addEventListener('click', () => this.closeModal('tableDetailModal'));
    document.getElementById('closeResModal')?.addEventListener('click', () => this.closeModal('reservationModal'));
    document.getElementById('btnCancelOrder')?.addEventListener('click', () => {
      this.currentPosTicket.items = {};
      this.renderPosCurrentTicket();
      this.closeModal('newOrderModal');
    });
    document.getElementById('btnCancelRes')?.addEventListener('click', () => this.closeModal('reservationModal'));

    // POS Submit
    document.getElementById('btnSubmitOrder')?.addEventListener('click', () => this.submitPosOrder());

    // Reservation Submit
    document.getElementById('reservationForm')?.addEventListener('submit', (e) => this.submitReservation(e));

    // Notifications Dropdown Toggle
    const notifBtn = document.getElementById('notifBellBtn');
    const notifDropdown = document.getElementById('notifDropdown');
    if (notifBtn && notifDropdown) {
      notifBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        notifDropdown.classList.toggle('show');
      });

      document.addEventListener('click', (e) => {
        if (!notifDropdown.contains(e.target) && e.target !== notifBtn) {
          notifDropdown.classList.remove('show');
        }
      });
    }

    // Clear notifications
    document.getElementById('btnMarkAllNotifsRead')?.addEventListener('click', () => {
      this.notifications = [];
      this.renderNotifications();
      this.showToast('All notifications cleared', 'info');
    });

    // Sound toggle
    const soundBtn = document.getElementById('soundToggleBtn');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        this.soundEnabled = !this.soundEnabled;
        soundBtn.innerHTML = this.soundEnabled ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark"></i>';
        this.showToast(`Sound alerts ${this.soundEnabled ? 'enabled' : 'disabled'}`, 'info');
      });
    }

    // Refresh stats button
    document.getElementById('btnRefreshStats')?.addEventListener('click', () => {
      this.renderAll();
      this.playChime('pop');
      this.showToast('Operations data refreshed successfully', 'success');
    });

    // Export CSV
    document.getElementById('btnExportCSV')?.addEventListener('click', () => {
      const rows = [
        ["Order ID", "Table", "Server", "Items Count", "Status"],
        ...this.orders.map(o => [o.id, o.tableName, o.server, o.items.length, o.status])
      ];
      const csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `Aura_Orders_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.showToast('CSV order export downloaded!', 'success');
    });

    // Print End of Shift Report
    document.getElementById('btnPrintReport')?.addEventListener('click', () => {
      window.print();
    });

    document.getElementById('btnQuickReport')?.addEventListener('click', () => {
      this.switchView('analytics');
    });
  }
}

// Global App Instance
let app;
window.addEventListener('DOMContentLoaded', () => {
  app = new RestaurantApp();
});
