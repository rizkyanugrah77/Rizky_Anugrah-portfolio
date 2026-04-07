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
# Execution — [Nama]

## Step 1: [Nama]

### Prompt
[paste prompt lengkap]

### RTCC-O Check
- R: ✅/❌
- T: ✅/❌
- C: ✅/❌
- C: ✅/❌
- O: ✅/❌

### AI Response
[paste output atau screenshot]

### Review
- [✅/❌] Sesuai constraints?
- [✅/❌] Format sesuai?
- [✅/❌] Bisa dipahami?
- Changes: [jika ada]

---

## Step 2: [Nama]

[Same format...]

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
