const btnMenuHp = document.getElementById('btnMenuHp');
const navUtama = document.getElementById('navUtama');

// Buka atau tutup menu saat tombol garis tiga diklik
btnMenuHp.addEventListener('click', () => {
    navUtama.classList.toggle('buka');
});

// Otomatis tutup menu setelah salah satu link diklik di HP
document.querySelectorAll('.menu-utama a').forEach(link => {
    link.addEventListener('click', () => {
        navUtama.classList.remove('buka');
    });
});

// ==========================================================================
// DATA 8 PLANET UTAMA (MENGAMBIL GAMBAR DARI FOLDER image/)
// ==========================================================================
const dataPlanet = [
    {
        id: 'merkurius',
        urutan: 'Planet ke-1',
        nama: 'Merkurius',
        julukan: 'Si Pelari Cepat Terkecil',
        kategori: 'Kebumian',
        gambar: 'image/merkurius.png',
        jarak: '57,9 Juta km',
        rotasi: '59 Hari Bumi',
        revolusi: '88 Hari Bumi',
        suhu: '-180 °C s/d 430 °C',
        satelit: '0 Satelit',
        deskripsi: 'Planet terkecil dan terdekat dengan Matahari. Karena hampir tidak memiliki atmosfer untuk menahan panas, suhu di Merkurius berubah sangat ekstrem antara siang dan malam.',
        fakta: 'Meskipun paling dekat dengan Matahari, Merkurius bukanlah planet terpanas di Tata Surya (rekor tersebut dipegang oleh Venus).'
    },
    {
        id: 'venus',
        urutan: 'Planet ke-2',
        nama: 'Venus',
        julukan: 'Bintang Fajar / Bintang Senja',
        kategori: 'Kebumian',
        gambar: 'image/venus.png',
        jarak: '108,2 Juta km',
        rotasi: '243 Hari Bumi',
        revolusi: '225 Hari Bumi',
        suhu: '±465 °C',
        satelit: '0 Satelit',
        deskripsi: 'Planet paling terang di langit malam setelah Bulan. Atmosfernya sangat tebal dan dipenuhi gas karbon dioksida serta awan asam sulfat yang memerangkap panas secara ekstrem.',
        fakta: 'Venus berotasi dari timur ke barat (berlawanan dengan Bumi), dan satu hari di Venus lebih lama daripada satu tahunnya!'
    },
    {
        id: 'bumi',
        urutan: 'Planet ke-3',
        nama: 'Bumi',
        julukan: 'Planet Biru',
        kategori: 'Kebumian',
        gambar: 'image/mm.gif',
        jarak: '149,6 Juta km',
        rotasi: '24 Jam',
        revolusi: '365,25 Hari',
        suhu: 'Rata-rata 15 °C',
        satelit: '1 (Bulan)',
        deskripsi: 'Satu-satunya planet yang diketahui memiliki kehidupan dan air cair di permukaannya (sekitar 71% wilayah Bumi). Dilindungi atmosfer kaya oksigen serta medan magnet kuat.',
        fakta: 'Bumi adalah satu-satunya planet di Tata Surya yang penamaannya tidak diambil dari nama dewa mitologi Yunani atau Romawi.'
    },
    {
        id: 'mars',
        urutan: 'Planet ke-4',
        nama: 'Mars',
        julukan: 'Planet Merah',
        kategori: 'Kebumian',
        gambar: 'image/mars.png',
        jarak: '227,9 Juta km',
        rotasi: '24,6 Jam',
        revolusi: '687 Hari Bumi',
        suhu: '-125 °C s/d 20 °C',
        satelit: '2 (Phobos & Deimos)',
        deskripsi: 'Berwarna kemerahan akibat kandungan besi oksida (karat) pada debu dan batuannya. Mars memiliki lembah ngarai raksasa, lapisan es di kutub, dan jejak aliran sungai purba.',
        fakta: 'Mars memiliki gunung berapi terbesar di Tata Surya bernama Olympus Mons, yang tingginya hampir tiga kali lipat Gunung Everest.'
    },
    {
        id: 'jupiter',
        urutan: 'Planet ke-5',
        nama: 'Jupiter',
        julukan: 'Sang Raja Planet',
        kategori: 'Raksasa Gas',
        gambar: 'image/jupiter.png',
        jarak: '778,5 Juta km',
        rotasi: '9,9 Jam',
        revolusi: '11,9 Tahun Bumi',
        suhu: '-110 °C',
        satelit: '95 Satelit',
        deskripsi: 'Planet terbesar di Tata Surya dengan massa lebih dari dua kali gabungan seluruh planet lainnya. Permukaannya berupa lapisan gas berawan tebal dengan pola pita warna-warni.',
        fakta: 'Jupiter memiliki badai abadi raksasa bernama Great Red Spot yang ukurannya lebih besar daripada diameter planet Bumi.'
    },
    {
        id: 'saturnus',
        urutan: 'Planet ke-6',
        nama: 'Saturnus',
        julukan: 'Permata Tata Surya',
        kategori: 'Raksasa Gas',
        gambar: 'image/saturnus.png',
        punyaCincin: true,
        jarak: '1,43 Miliar km',
        rotasi: '10,7 Jam',
        revolusi: '29,5 Tahun Bumi',
        suhu: '-140 °C',
        satelit: '146 Satelit',
        deskripsi: 'Terkenal karena sistem cincinnya yang paling luas, cerah, dan indah. Cincin tersebut tersusun dari miliaran bongkahan es, batuan, dan debu yang mengorbit ekuatornya.',
        fakta: 'Saturnus memiliki massa jenis lebih ringan daripada air—jika ada kolam raksasa yang cukup besar, Saturnus akan mengapung di atasnya!'
    },
    {
        id: 'uranus',
        urutan: 'Planet ke-7',
        nama: 'Uranus',
        julukan: 'Raksasa Es yang Miring',
        kategori: 'Raksasa Es',
        gambar: 'image/uranus.png',
        jarak: '2,87 Miliar km',
        rotasi: '17,2 Jam',
        revolusi: '84 Tahun Bumi',
        suhu: '-195 °C',
        satelit: '28 Satelit',
        deskripsi: 'Planet berwarna biru kehijauan pucat akibat gas metana di atmosfer atasnya yang menyerap cahaya merah Matahari. Uranus juga memiliki 13 cincin tipis berwarna gelap.',
        fakta: 'Uranus berotasi dalam posisi menyamping (kemiringan sumbu hampir 98 derajat), seolah-olah menggelinding mengelilingi Matahari.'
    },
    {
        id: 'neptunus',
        urutan: 'Planet ke-8',
        nama: 'Neptunus',
        julukan: 'Planet Biru Berangin Kencang',
        kategori: 'Raksasa Es',
        gambar: 'image/neptunus.png',
        jarak: '4,5 Miliar km',
        rotasi: '16,1 Jam',
        revolusi: '165 Tahun Bumi',
        suhu: '-200 °C',
        satelit: '16 Satelit',
        deskripsi: 'Planet terjauh dari Matahari yang gelap, dingin, dan disapu badai supersonik. Warna birunya yang tajam berasal dari metana dan komponen atmosfer yang masih diteliti.',
        fakta: 'Angin di Neptunus adalah yang tercepat di Tata Surya, kecepatannya mampu menembus 2.100 km/jam—lebih cepat dari kecepatan suara!'
    }
];

// ==========================================================================
// DATA KAMUS MINI ASTRONOMI
// ==========================================================================
const dataKamus = [
    { istilah: 'Orbit', arti: 'Jalur lintasan melengkung (umumnya berbentuk elips) yang dilalui benda langit saat mengelilingi benda langit lain yang lebih besar.' },
    { istilah: 'Rotasi', arti: 'Gerakan sebuah planet berputar pada poros atau sumbunya sendiri yang menyebabkan terjadinya pergantian siang dan malam.' },
    { istilah: 'Revolusi', arti: 'Gerakan sebuah planet mengelilingi Matahari dalam satu putaran penuh yang menentukan lamanya satu tahun di planet tersebut.' },
    { istilah: 'Gravitasi', arti: 'Gaya tarik-menarik alami antara semua benda yang memiliki massa; membuat planet tetap mengorbit Matahari.' },
    { istilah: 'Satelit Alami', arti: 'Benda langit yang mengorbit sebuah planet secara alami, seperti Bulan yang mengorbit Bumi.' },
    { istilah: 'Satuan Astronomi (AU)', arti: 'Satuan jarak dalam tata surya yang setara dengan jarak rata-rata Bumi ke Matahari (sekitar 149,6 juta km).' },
    { istilah: 'Tahun Cahaya', arti: 'Jarak yang ditempuh oleh cahaya dalam waktu satu tahun penuh, yaitu sekitar 9,46 triliun kilometer.' },
    { istilah: 'Zona Laik Huni', arti: 'Wilayah di sekitar bintang dengan suhu yang pas sehingga memungkinkan air bertahan dalam bentuk cair di permukaan planet.' },
    { istilah: 'Meteor & Meteorit', arti: 'Meteor adalah batuan luar angkasa yang terbakar di atmosfer Bumi ("bintang jatuh"), sedangkan meteorit adalah sisanya yang jatuh hingga ke tanah.' }
];

// ==========================================================================
// DATA KUIS INTERAKTIF
// ==========================================================================
const dataKuis = [
    {
        pertanyaan: 'Planet manakah yang memiliki suhu permukaan paling panas di Tata Surya akibat efek rumah kaca yang ekstrem?',
        opsi: ['Merkurius', 'Venus', 'Mars', 'Jupiter'],
        jawaban: 1,
        penjelasan: 'Tepat! Meskipun Merkurius paling dekat dengan Matahari, Venus adalah planet terpanas (±465 °C) karena atmosfer karbon dioksidanya yang sangat tebal memerangkap panas.'
    },
    {
        pertanyaan: 'Apa nama gunung berapi terbesar di Tata Surya yang terletak di planet Mars?',
        opsi: ['Mauna Kea', 'Mount Everest', 'Olympus Mons', 'Valles Marineris'],
        jawaban: 2,
        penjelasan: 'Benar! Olympus Mons di Mars memiliki ketinggian sekitar 21–25 km, hampir tiga kali lipat tinggi Gunung Everest di Bumi.'
    },
    {
        pertanyaan: 'Mengapa pada tahun 2006 status Pluto diubah dari planet utama menjadi planet kerdil?',
        opsi: [
            'Karena Pluto tidak mengorbit Matahari',
            'Karena bentuk Pluto tidak bulat',
            'Karena Pluto belum membersihkan jalur orbitnya dari objek lain di Sabuk Kuiper',
            'Karena Pluto tidak memiliki satelit alami'
        ],
        jawaban: 2,
        penjelasan: 'Tepat sekali! Pluto mengorbit Matahari dan berbentuk bulat, tetapi orbitnya masih berbagi wilayah dengan banyak objek es di Sabuk Kuiper.'
    },
    {
        pertanyaan: 'Planet manakah yang berotasi menyamping dengan kemiringan sumbu hampir 98 derajat?',
        opsi: ['Saturnus', 'Uranus', 'Neptunus', 'Venus'],
        jawaban: 1,
        penjelasan: 'Betul! Uranus memiliki kemiringan sumbu ekstrem hampir 98 derajat sehingga tampak menggelinding saat mengorbit Matahari.'
    },
    {
        pertanyaan: 'Berapa lama waktu yang dibutuhkan cahaya Matahari untuk sampai ke Bumi?',
        opsi: ['8 detik', '8 menit 20 detik', '1 jam 15 menit', '24 jam'],
        jawaban: 1,
        penjelasan: 'Hebat! Cahaya bergerak dengan kecepatan 300.000 km/detik sehingga memerlukan waktu sekitar 8 menit 20 detik untuk menempuh jarak 149,6 juta km dari Matahari ke Bumi.'
    }
];

// ==========================================================================
// PENCARIAN CEPAT DI NAVBAR (#cari)
// ==========================================================================
const inputCariNav = document.getElementById('cari');
const hasilCariNav = document.getElementById('hasilCariNav');

if (inputCariNav && hasilCariNav) {
    inputCariNav.addEventListener('input', (e) => {
        const kueri = e.target.value.trim().toLowerCase();
        if (!kueri) {
            hasilCariNav.classList.add('tersembunyi');
            return;
        }

        const cocokPlanet = dataPlanet
            .filter(p => p.nama.toLowerCase().includes(kueri) || p.julukan.toLowerCase().includes(kueri))
            .map(p => ({ judul: p.nama, ket: `Planet • ${p.kategori}`, aksi: () => bukaModalPlanet(p.id) }));

        const cocokKamus = dataKamus
            .filter(k => k.istilah.toLowerCase().includes(kueri) || k.arti.toLowerCase().includes(kueri))
            .map(k => ({
                judul: k.istilah,
                ket: 'Kamus Astronomi',
                aksi: () => {
                    document.getElementById('inputCariKamus').value = k.istilah;
                    tampilkanKamus(k.istilah);
                    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
                }
            }));

        const gabungan = [...cocokPlanet, ...cocokKamus];

        if (gabungan.length === 0) {
            hasilCariNav.innerHTML = `<div style="padding:10px; font-size:13px; color:#94A3B8;">Tidak ditemukan hasil untuk "${e.target.value}"</div>`;
        } else {
            hasilCariNav.innerHTML = gabungan.map((item, idx) => `
                <button type="button" class="item-hasil-cari" data-idx="${idx}">
                    <strong>${item.judul}</strong>
                    <span>${item.ket}</span>
                </button>
            `).join('');

            hasilCariNav.querySelectorAll('.item-hasil-cari').forEach((btn, idx) => {
                btn.addEventListener('click', () => {
                    gabungan[idx].aksi();
                    hasilCariNav.classList.add('tersembunyi');
                    inputCariNav.value = '';
                });
            });
        }

        hasilCariNav.classList.remove('tersembunyi');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.form-cari')) {
            hasilCariNav.classList.add('tersembunyi');
        }
    });
}

// ==========================================================================
// RENDER KARTU PLANET, FILTER & MODAL DETAIL
// ==========================================================================
const gridPlanet = document.getElementById('gridPlanet');
const tombolFilter = document.querySelectorAll('.tombol-filter');
const modalPlanet = document.getElementById('modalPlanet');
const tombolTutupModal = document.getElementById('tombolTutupModal');

function tampilkanPlanet(filter = 'all') {
    const hasilFilter = filter === 'all'
        ? dataPlanet
        : dataPlanet.filter(planet => planet.kategori === filter);

    gridPlanet.innerHTML = hasilFilter.map(planet => `
        <article class="kartu-kosmik kartu-planet">
            <div>
                <div class="baris-atas-planet">
                    <span class="urutan-planet">${planet.urutan}</span>
                    <span class="kategori-planet">${planet.kategori}</span>
                </div>

                <div class="wadah-foto-planet">
                    <img
                        src="${planet.gambar}"
                        alt="Foto Planet ${planet.nama}"
                        class="foto-planet ${planet.punyaCincin ? 'dengan-cincin' : ''}"
                    >
                </div>

                <div class="identitas-planet">
                    <h3 class="judul-kartu">${planet.nama}</h3>
                    <p class="julukan-planet">${planet.julukan}</p>
                </div>

                <div class="info-ringkas-planet">
                    <div>
                        <span class="label-kecil">Jarak</span>
                        <strong>${planet.jarak}</strong>
                    </div>
                    <div>
                        <span class="label-kecil">Suhu</span>
                        <strong>${planet.suhu}</strong>
                    </div>
                </div>
            </div>

            <button
                type="button"
                onclick="bukaModalPlanet('${planet.id}')"
                class="tombol-detail-planet"
            >
                Detail Planet
            </button>
        </article>
    `).join('');
}

tombolFilter.forEach(tombol => {
    tombol.addEventListener('click', () => {
        tombolFilter.forEach(item => item.classList.remove('aktif'));
        tombol.classList.add('aktif');
        tampilkanPlanet(tombol.dataset.filter);
    });
});

window.bukaModalPlanet = function(idPlanet) {
    const planet = dataPlanet.find(item => item.id === idPlanet);
    if (!planet) return;

    document.getElementById('visualModalPlanet').innerHTML = `
        <img
            src="${planet.gambar}"
            alt="Foto Planet ${planet.nama}"
            class="foto-planet ${planet.punyaCincin ? 'dengan-cincin' : ''}"
        >
    `;
    document.getElementById('kategoriModalPlanet').textContent = `Planet ${planet.kategori}`;
    document.getElementById('namaModalPlanet').textContent = planet.nama;
    document.getElementById('julukanModalPlanet').textContent = planet.julukan;
    document.getElementById('deskripsiModalPlanet').textContent = planet.deskripsi;
    document.getElementById('jarakModal').textContent = planet.jarak;
    document.getElementById('rotasiModal').textContent = planet.rotasi;
    document.getElementById('revolusiModal').textContent = planet.revolusi;
    document.getElementById('suhuModal').textContent = planet.suhu;
    document.getElementById('satelitModal').textContent = planet.satelit;
    document.getElementById('urutanModal').textContent = planet.urutan;
    document.getElementById('faktaModal').textContent = planet.fakta;

    modalPlanet.classList.remove('tersembunyi');
    document.body.style.overflow = 'hidden';
};

function tutupModalPlanet() {
    modalPlanet.classList.add('tersembunyi');
    document.body.style.overflow = '';
}

tombolTutupModal.addEventListener('click', tutupModalPlanet);
modalPlanet.addEventListener('click', (e) => {
    if (e.target === modalPlanet) tutupModalPlanet();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalPlanet.classList.contains('tersembunyi')) {
        tutupModalPlanet();
    }
});

// ==========================================================================
// TAB SWITCHER: PLANET KERDIL VS EKSOPLANET
// ==========================================================================
const tombolTabKerdil = document.getElementById('tombolTabKerdil');
const tombolTabEkso = document.getElementById('tombolTabEkso');
const kontenTabKerdil = document.getElementById('kontenTabKerdil');
const kontenTabEkso = document.getElementById('kontenTabEkso');

tombolTabKerdil.addEventListener('click', () => {
    kontenTabKerdil.classList.remove('tersembunyi');
    kontenTabEkso.classList.add('tersembunyi');
    tombolTabKerdil.classList.add('aktif');
    tombolTabEkso.classList.remove('aktif');
});

tombolTabEkso.addEventListener('click', () => {
    kontenTabEkso.classList.remove('tersembunyi');
    kontenTabKerdil.classList.add('tersembunyi');
    tombolTabEkso.classList.add('aktif');
    tombolTabKerdil.classList.remove('aktif');
});

// ==========================================================================
// KAMUS MINI ASTRONOMI
// ==========================================================================
const daftarKamus = document.getElementById('daftarKamus');
const inputCariKamus = document.getElementById('inputCariKamus');

function tampilkanKamus(kataKunci = '') {
    const kueri = kataKunci.trim().toLowerCase();
    const hasilCari = dataKamus.filter(item =>
        item.istilah.toLowerCase().includes(kueri) || item.arti.toLowerCase().includes(kueri)
    );

    if (hasilCari.length === 0) {
        daftarKamus.innerHTML = `<p class="teks-kartu" style="text-align:center; padding: 24px 0;">Istilah "<strong>${kataKunci}</strong>" tidak ditemukan.</p>`;
        return;
    }

    daftarKamus.innerHTML = hasilCari.map(item => `
        <div class="item-istilah">
            <h4 class="judul-istilah">${item.istilah}</h4>
            <p class="arti-istilah">${item.arti}</p>
        </div>
    `).join('');
}

inputCariKamus.addEventListener('input', (e) => tampilkanKamus(e.target.value));

// ==========================================================================
// MINI KUIS INTERAKTIF
// ==========================================================================
let indeksSoalSekarang = 0;
let skorKuis = 0;
let sudahDijawab = false;

const lencanaProgresKuis = document.getElementById('lencanaProgresKuis');
const pertanyaanKuis = document.getElementById('pertanyaanKuis');
const opsiKuis = document.getElementById('opsiKuis');
const umpanBalikKuis = document.getElementById('umpanBalikKuis');
const tombolSoalBerikutnya = document.getElementById('tombolSoalBerikutnya');
const badanKuis = document.getElementById('badanKuis');
const hasilKuis = document.getElementById('hasilKuis');

function muatSoalKuis() {
    sudahDijawab = false;
    const soalAktif = dataKuis[indeksSoalSekarang];

    lencanaProgresKuis.textContent = `Soal ${indeksSoalSekarang + 1} dari ${dataKuis.length}`;
    pertanyaanKuis.textContent = soalAktif.pertanyaan;
    umpanBalikKuis.classList.add('tersembunyi');
    tombolSoalBerikutnya.classList.add('tersembunyi');

    opsiKuis.innerHTML = soalAktif.opsi.map((pilihan, indeks) => `
        <button
            type="button"
            onclick="pilihJawaban(${indeks})"
            class="tombol-opsi-kuis"
        >
            <span class="huruf-opsi">${String.fromCharCode(65 + indeks)}</span>
            <span>${pilihan}</span>
        </button>
    `).join('');
}

window.pilihJawaban = function(indeksPilihan) {
    if (sudahDijawab) return;
    sudahDijawab = true;

    const soalAktif = dataKuis[indeksSoalSekarang];
    const semuaTombolOpsi = document.querySelectorAll('.tombol-opsi-kuis');

    semuaTombolOpsi.forEach((tombol, indeks) => {
        tombol.disabled = true;
        if (indeks === soalAktif.jawaban) {
            tombol.classList.add('jawaban-benar');
        } else if (indeks === indeksPilihan && indeksPilihan !== soalAktif.jawaban) {
            tombol.classList.add('jawaban-salah');
        }
    });

    if (indeksPilihan === soalAktif.jawaban) {
        skorKuis++;
        umpanBalikKuis.className = 'kotak-umpan-balik benar';
        umpanBalikKuis.innerHTML = `<strong>✅ Jawaban Benar!</strong> ${soalAktif.penjelasan}`;
    } else {
        umpanBalikKuis.className = 'kotak-umpan-balik salah';
        umpanBalikKuis.innerHTML = `<strong>❌ Kurang Tepat.</strong> ${soalAktif.penjelasan}`;
    }

    umpanBalikKuis.classList.remove('tersembunyi');
    tombolSoalBerikutnya.textContent = indeksSoalSekarang === dataKuis.length - 1
        ? 'Lihat Hasil Skor'
        : 'Soal Berikutnya →';
    tombolSoalBerikutnya.classList.remove('tersembunyi');
};

tombolSoalBerikutnya.addEventListener('click', () => {
    indeksSoalSekarang++;
    if (indeksSoalSekarang < dataKuis.length) {
        muatSoalKuis();
    } else {
        tampilkanHasilKuis();
    }
});

function tampilkanHasilKuis() {
    badanKuis.classList.add('tersembunyi');
    hasilKuis.classList.remove('tersembunyi');
    lencanaProgresKuis.textContent = 'Selesai';

    const nilaiAkhir = Math.round((skorKuis / dataKuis.length) * 100);
    document.getElementById('teksSkorAkhir').textContent = `${nilaiAkhir} / 100`;

    const emojiHasil = document.getElementById('emojiHasil');
    const pesanHasil = document.getElementById('pesanHasil');

    if (nilaiAkhir === 100) {
        emojiHasil.textContent = '🚀';
        pesanHasil.textContent = 'Luar biasa! Kamu menjawab semua pertanyaan dengan sempurna layaknya seorang astronot sejati.';
    } else if (nilaiAkhir >= 60) {
        emojiHasil.textContent = '🌟';
        pesanHasil.textContent = `Bagus sekali! Kamu berhasil menjawab benar ${skorKuis} dari ${dataKuis.length} soal. Terus jelajahi fakta planet lainnya!`;
    } else {
        emojiHasil.textContent = '🔭';
        pesanHasil.textContent = `Kamu menjawab benar ${skorKuis} dari ${dataKuis.length} soal. Coba baca kembali kartu planet di atas lalu ulangi kuisnya!`;
    }
}

document.getElementById('tombolUlangKuis').addEventListener('click', () => {
    indeksSoalSekarang = 0;
    skorKuis = 0;
    hasilKuis.classList.add('tersembunyi');
    badanKuis.classList.remove('tersembunyi');
    muatSoalKuis();
});

// Jalankan saat halaman selesai dimuat
window.addEventListener('DOMContentLoaded', () => {
    tampilkanPlanet('all');
    tampilkanKamus();
    muatSoalKuis();
});