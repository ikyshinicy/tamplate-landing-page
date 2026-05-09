/* ================================
   MAIN.JS — Isi konten dari data.js
   ================================ */

// NAVBAR
document.getElementById('brand-name').textContent = data.nama_usaha;

// HERO
document.getElementById('hero-label').textContent   = data.label_hero;
document.getElementById('hero-judul').textContent   = data.nama_usaha;
document.getElementById('hero-tagline').textContent = data.tagline;
document.getElementById('hero-cta').textContent     = data.cta_hero;
document.getElementById('hero-cta').href            = '#kontak';
document.getElementById('foto-hero').src            = data.foto_hero;
document.getElementById('foto-hero').alt            = data.nama_usaha;

// TENTANG
document.getElementById('tentang-judul').textContent      = data.tentang_judul;
document.getElementById('tentang-deskripsi').textContent  = data.tentang_deskripsi;
document.getElementById('foto-promosi').src = data.foto_promosi;
document.getElementById('stat-1-angka').textContent       = data.stat_1_angka;
document.getElementById('stat-1-label').textContent       = data.stat_1_label;
document.getElementById('stat-2-angka').textContent       = data.stat_2_angka;
document.getElementById('stat-2-label').textContent       = data.stat_2_label;
document.getElementById('stat-3-angka').textContent       = data.stat_3_angka;
document.getElementById('stat-3-label').textContent       = data.stat_3_label;

// PRODUK
document.getElementById('produk-judul').textContent = data.produk_judul;

const produkGrid = document.getElementById('produk-grid');
data.produk.forEach(item => {
  const card = document.createElement('div');
  card.className = 'produk-card';
  card.innerHTML = `
    <img src="${item.foto}" alt="${item.nama}" />
    <div class="produk-card-body">
      <h3>${item.nama}</h3>
      <p>${item.deskripsi}</p>
    </div>
  `;
  produkGrid.appendChild(card);
});

// HARGA
document.getElementById('harga-judul').textContent = data.harga_judul;

const hargaGrid = document.getElementById('harga-grid');
data.harga.forEach(item => {
  const row = document.createElement('div');
  row.className = 'harga-item';
  row.innerHTML = `
    <span class="harga-nama">${item.nama}</span>
    <span class="harga-harga">${item.harga}</span>
  `;
  hargaGrid.appendChild(row);
});

// TESTIMONI
document.getElementById('testimoni-judul').textContent = data.testimoni_judul;

const testimoniGrid = document.getElementById('testimoni-grid');
data.testimoni.forEach(item => {
  const bintang = '★'.repeat(item.bintang);
  const card = document.createElement('div');
  card.className = 'testimoni-card';
  card.innerHTML = `
    <div class="testimoni-header">
      <img src="${item.foto}" alt="${item.nama}" class="testimoni-foto" />
      <div>
        <p class="testimoni-nama">${item.nama}</p>
        <p class="testimoni-bintang">${bintang}</p>
      </div>
    </div>
    <p class="testimoni-komentar">"${item.komentar}"</p>
  `;
  testimoniGrid.appendChild(card);
});

// KONTAK
document.getElementById('kontak-judul').textContent = data.kontak_judul;
document.getElementById('kontak-sub').textContent   = data.kontak_sub;
document.getElementById('kontak-alamat').textContent = '📍 ' + data.alamat;
document.getElementById('kontak-jam').textContent    = '🕐 ' + data.jam_operasional;

const waLink = document.getElementById('kontak-wa');
waLink.textContent = 'Chat WhatsApp';
waLink.href = `https://wa.me/${data.whatsapp}`;

// FOOTER
document.getElementById('footer-text').innerHTML = '© 2025 Dibuat oleh <a href="https://ikyshinicy.xyz" target="_blank" style="color: var(--color-accent); font-weight: 600;">Rizky Reranza</a>';
