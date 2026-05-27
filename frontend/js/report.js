// ==================== REPORT LOGIC ====================

// DOM Elements
const reportDateInput = document.getElementById('report-date');
const generateReportBtn = document.getElementById('generate-report-btn');
const reportContent = document.getElementById('report-content');

// ==================== GENERATE REPORT ====================
generateReportBtn.addEventListener('click', async () => {
  const date = reportDateInput.value;
  
  if (!date) {
    showNotification('Pilih tanggal terlebih dahulu', 'warning');
    return;
  }
  
  try {
    const report = await apiCall(`/reports/daily?date=${date}`);
    displayReport(report, date);
    
  } catch (error) {
    console.error('Generate report error:', error);
    showNotification('❌ Gagal membuat laporan', 'error');
  }
});

// ==================== DISPLAY REPORT ====================
function displayReport(report, date) {
  const dateObj = new Date(date);
  const dateString = dateObj.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const transactionCount = report.transaction_count || 0;
  const totalSales = report.total_sales || 0;
  const totalItems = report.total_items || 0;
  
  if (transactionCount === 0) {
    reportContent.innerHTML = `
      <div class="report-empty">
        <p style="text-align: center; color: var(--text-light); padding: 40px;">
          📊 Tidak ada transaksi pada tanggal ${dateString}
        </p>
      </div>
    `;
    return;
  }
  
  reportContent.innerHTML = `
    <div class="report-header">
      <h3>📋 Laporan Penjualan</h3>
      <p>${dateString}</p>
    </div>
    
    <div class="report-stats">
      <div class="stat-card">
        <h4>Total Transaksi</h4>
        <p class="stat-value">${transactionCount}</p>
      </div>
      <div class="stat-card">
        <h4>Total Penjualan</h4>
        <p class="stat-value">${formatRupiah(totalSales)}</p>
      </div>
      <div class="stat-card">
        <h4>Total Item</h4>
        <p class="stat-value">${totalItems}</p>
      </div>
      <div class="stat-card">
        <h4>Rata-rata per Transaksi</h4>
        <p class="stat-value">${formatRupiah(totalSales / transactionCount)}</p>
      </div>
    </div>
    
    <button class="btn btn-primary" onclick="printReport('${dateString}', '${transactionCount}', '${formatRupiah(totalSales)}', '${totalItems}')">
      🖨️ Print Laporan
    </button>
  `;
}

// ==================== PRINT REPORT ====================
function printReport(dateString, transactionCount, totalSales, totalItems) {
  const printWindow = window.open('', '', 'height=600,width=800');
  
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Laporan Penjualan</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
          border-bottom: 2px solid #000;
          padding-bottom: 15px;
        }
        .header h2 {
          margin: 0;
        }
        .content {
          margin-bottom: 30px;
        }
        .row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          font-size: 14px;
        }
        .label {
          font-weight: bold;
        }
        .value {
          text-align: right;
        }
        .footer {
          margin-top: 50px;
          text-align: center;
          font-size: 12px;
          color: #666;
        }
        @media print {
          body {
            margin: 0;
            padding: 10px;
          }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h2>🏪 DUNIA KOBAR</h2>
        <p>Laporan Penjualan Harian</p>
        <p>${dateString}</p>
      </div>
      
      <div class="content">
        <div class="row">
          <span class="label">Total Transaksi:</span>
          <span class="value">${transactionCount}</span>
        </div>
        <div class="row">
          <span class="label">Total Penjualan:</span>
          <span class="value">${totalSales}</span>
        </div>
        <div class="row">
          <span class="label">Total Item Terjual:</span>
          <span class="value">${totalItems}</span>
        </div>
      </div>
      
      <div class="footer">
        <p>Laporan ini dicetak pada ${new Date().toLocaleString('id-ID')}</p>
        <p>Terima kasih telah menggunakan POS Dunia Kobar</p>
      </div>
    </body>
    </html>
  `);
  
  printWindow.document.close();
  printWindow.print();
}

// ==================== INITIALIZE ====================
// Set today's date as default
const today = new Date().toISOString().split('T')[0];
reportDateInput.value = today;
