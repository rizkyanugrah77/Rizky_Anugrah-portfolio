# 03: Execution

## Prinsip

```
SETIAP STEP:
1. Kirim prompt ke AI
2. Review output AI
3. Fix jika perlu
4. Lanjut step berikutnya
```

---

## RTCC-O Checklist (Per Prompt)

```
□ R — Role dispesifikasi?
□ T — Task konkret?
□ C — Context cukup?
□ C — Constraints jelas?
□ O — Output format ditentukan?
```

---

## Template

```markdown
# Execution — [VSCode/CODEX]

## Step 1: [Rancang portfolio mobile-first]

### Prompt
[Saya sebagai UX/UI Consultant profesional, rancang portfolio website mobile-first untuk fresh graduate IT bernama Rizky Anugrah Septiawan yang menargetkan startup, dengan gaya minimalis, modern, dan standout; gunakan 3 opsi color palette (Teal, Cyan, Black) lengkap dengan primary, secondary, background, accent, dan text color, serta typography Poppins (heading, body, button, spacing); susun struktur HTML5 semantic + Tailwind CSS meliputi Hero, About, Skills (dengan icon untuk HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, PHP, Laravel, MySQL, RESTful APIs, ERD), Projects (card dengan thumbnail, judul, stack, deskripsi singkat, tombol live demo & source code, hover & micro-interaction), Experience (opsional), Contact, dan Footer; desain responsif untuk 480px, 728px, dan 1440px dengan grid, spacing, dan breakpoint jelas; sertakan 1 elemen unik (misalnya animasi interaktif atau hover effect modern) beserta alasan UX-nya; output berupa wireframe deskriptif, UI guideline, serta saran class Tailwind dan alasan desain yang relevan untuk menarik recruiter startup.]

### RTCC-O Check
- R: ✅/❌
- T: ✅/❌
- C: ✅/❌
- C: ✅/❌
- O: ✅/❌

### AI Response
[Untuk target recruiter startup, arahnya sebaiknya bukan “portfolio yang ramai”, tapi “cepat dipahami, terasa digital-native, dan menunjukkan taste”. Karena index.html dan style.css masih kosong, kita punya ruang bagus untuk membangun versi yang rapi dari nol dengan pendekatan mobile-first.

Arah Konsep

Rizky Anugrah Septiawan perlu tampil sebagai fresh graduate IT yang “siap kerja”, bukan sekadar “bisa coding”. Jadi visualnya harus minimalis, modern, clean, tapi tetap punya 1 ciri khas supaya tidak generik. Fokus UX-nya:


recruiter bisa menangkap identitas, skill, dan project dalam 15-30 detik

CTA jelas ke project dan contact

visual terasa tech/startup-friendly, bukan formal kampus


3 Color Palette

Teal Minimal

Primary: #0F766E

Secondary: #14B8A6

Background: #F5FFFD

Accent: #99F6E4

Text: #0F172A



Cyan Modern

Primary: #0891B2

Secondary: #22D3EE

Background: #F4FBFF

Accent: #A5F3FC

Text: #111827



Black Standout

Primary: #0F0F10

Secondary: #27272A

Background: #FAFAFA

Accent: #06B6D4

Text: #18181B




Rekomendasi utama untuk startup target: Black Standout.

Alasannya: terasa dewasa, sharp, dan premium; accent cyan memberi kesan tech tanpa jatuh ke tampilan template.

Typography Guideline

Gunakan Poppins untuk seluruh UI.


Heading: font-semibold atau font-bold

H1: text-4xl md:text-5xl xl:text-6xl leading-tight

H2: text-2xl md:text-3xl xl:text-4xl

H3/Card title: text-lg md:text-xl

Body: text-sm md:text-base leading-7

Button: text-sm md:text-base font-medium

Spacing rhythm: basis 4px, section utama py-16 md:py-20 xl:py-24, container px-5 md:px-8 xl:px-16


Wireframe Deskriptif

Header/Nav

Mobile: logo/nama kiri, hamburger kanan

Desktop: nav inline About, Skills, Projects, Contact

Sticky tipis dengan blur ringan agar modern dan memudahkan pindah section



Hero

Headline kuat: “Fresh Graduate IT Building Clean, Useful Web Experiences”

Subheadline: singkat, menekankan frontend/backend basic + siap kontribusi di startup

CTA utama: See Projects

CTA sekunder: Contact Me

Visual pendamping: portrait/abstract card/stats badge

Tambah badge kecil seperti Open to Work, Based in Indonesia, Startup-ready



About

2 blok: ringkasan personal + value proposition

Hindari paragraf panjang; pakai 2-3 short paragraphs

Tambahkan info cepat: domisili, fokus role, tools favorit



Skills

Grid icon cards

Kelompokkan supaya recruiter cepat scan:

Frontend: HTML, CSS, JavaScript, Bootstrap, Tailwind CSS

Backend: PHP, Laravel, RESTful APIs

Database/System: MySQL, ERD




Setiap card cukup icon + nama + level singkat, mis. Comfortable, Learning by building



Projects

3-4 project cards

Isi card:

thumbnail

title

stack tags

2-3 kalimat problem/result

tombol Live Demo dan Source Code




Card harus jadi section paling kuat secara visual karena ini bukti utama ke recruiter



Experience opsional

Jika pengalaman kerja belum ada, ganti jadi Learning Journey atau Campus & Freelance Highlights

Format timeline singkat lebih jujur dan tetap profesional



Contact

Headline langsung

Email, LinkedIn, GitHub

CTA sederhana: “Let’s build something useful together”



Footer

copyright

quick links

social links kecil




Struktur Semantic HTML5

html



<header>
  <nav></nav>
</header>

<main>
  <section id="hero"></section>
  <section id="about"></section>
  <section id="skills"></section>
  <section id="projects"></section>
  <section id="experience"></section>
  <section id="contact"></section>
</main>

<footer></footer>



Breakpoint dan Layout


480px: single-column, hero stack vertical, project cards full width

728px: about jadi 2 kolom, skills 2-3 kolom, projects 2 kolom

1440px: container max 1280px, hero 2 kolom, projects 3 kolom, whitespace lebih lega


Saran grid:


Mobile: grid-cols-1

Tablet: md:grid-cols-2

Desktop besar: xl:grid-cols-3


Tailwind Class Suggestions

Untuk container umum:

html



class="mx-auto w-full max-w-7xl px-5 md:px-8 xl:px-16"



Untuk section:

html



class="py-16 md:py-20 xl:py-24"



Untuk hero:

html



class="grid items-center gap-10 xl:grid-cols-2"



Untuk skill cards:

html



class="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5"
class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"



Untuk project cards:

html



class="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"



Untuk tag stack:

html



class="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700"



Untuk tombol primary:

html



class="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-cyan-600"



Untuk tombol secondary:

html



class="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-900 hover:bg-slate-50"



Elemen Unik

Gunakan interactive spotlight hover pada project cards.


Saat hover, muncul glow halus mengikuti area card dan thumbnail sedikit zoom

UX reason: menarik perhatian recruiter ke karya tanpa mengganggu keterbacaan

Ini memberi kesan modern dan polished, cocok untuk target startup yang menghargai detail produk


Implementasi visual sederhananya bisa berupa:


group-hover:scale-105 pada thumbnail

overlay gradient tipis

shadow dan border color shift saat hover


Guideline UI


Gunakan banyak ruang kosong; jangan isi semua area

Prioritaskan 1 headline besar per section

Maksimal 2 CTA di hero

Jangan terlalu banyak warna; 1 primary + 1 accent sudah cukup

Project thumbnail wajib konsisten rasio, mis. 16:10

Icon skills sebaiknya satu gaya visual, jangan campur outline dan flat sembarangan


Kenapa desain ini menarik recruiter startup


cepat scan

terasa product-minded

menunjukkan rasa visual yang lebih matang dari portfolio fresh graduate biasa

memberi fokus ke project, bukan hanya daftar skill

micro-interaction memberi sinyal bahwa kandidat peduli detail UI


Kalau kamu mau, langkah berikutnya saya bisa langsung ubahkan arahan ini menjadi index.html + style.css atau versi Tailwind CDN yang siap dipreview.]

### Review
- [✅] Sesuai constraints?
- [✅] Format sesuai?
- [✅] Bisa dipahami?
- Changes: [jika ada]

---

## Step 2: [buat langkah berikutnya]

[Langkah berikutnya sudah saya buat langsung di index.html dan style.css. Halamannya sekarang sudah punya struktur semantic HTML5, layout mobile-first dengan Tailwind CDN, palette Black Standout sebagai default, section Hero, About, Skills, Projects, Experience, Contact, dan Footer, plus micro-interaction spotlight hover di project card untuk memberi kesan modern tanpa mengganggu readability.

Di CSS, saya tambahkan UI guideline yang konsisten: spacing section untuk 480px, 728px, dan 1440px, styling card, nav, CTA, contact panel, serta animasi ringan pada hero dan hover state. Efek uniknya ada di project card: glow mengikuti pointer untuk membantu recruiter lebih fokus ke karya utama, yang secara UX memperkuat area paling penting di portfolio.

Saya belum menjalankan preview browser otomatis, jadi langkah paling pas sekarang adalah:

Ganti placeholder link Live Demo, Source Code, GitHub, LinkedIn, dan email di index.html.
Sesuaikan isi 3 project card dengan project asli kamu.
Jika kamu mau, saya bisa lanjut bantu isi plan/03-execution.md dengan dokumentasi step-by-step berdasarkan pekerjaan yang baru saya kerjakan.]

---

## Step 3: [Nama]

[Same format...]

---

## Step 4: [Nama]

[Same format...]
```

---

## Common Mistakes

| Mistake | How to Avoid |
|---------|--------------|
| Prompt terlalu panjang | Pecah jadi step kecil |
| Skip review | Baca setiap baris output |
| Copy-paste tanpa paham | Tanya ke AI jika bingung |
| Lanjut tanpa fix | Fix sebelum next step |
