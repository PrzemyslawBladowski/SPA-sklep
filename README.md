# SPA (Single Page Application) — Spirytus.pl (demo)

Statyczna aplikacja SPA w czystym HTML/CSS/JS. Renderowanie podstron działa po stronie klienta (bez frameworków) przez podmianę HTML w `<main id="mainContent"></main>`. Projekt zawiera:
- modal weryfikacji wieku (18+),
- responsywne menu (desktop/mobile),
- listę rekomendacji produktów i modal szczegółów produktu,
- stronę „O nas” i „Kontakt” z formularzem (frontend-only).

> Uwaga: To demo UI. Nie zawiera backendu, płatności ani realnej obsługi koszyka/zamówień.

---

## Funkcje

### Nawigacja SPA (bez przeładowania)
- Widoki: `home`, `about`, `contact`.
- Zmiana widoku przez `navigateTo(page)` oraz dynamiczne `renderPage(page)`.

### Weryfikacja wieku (18+)
- Overlay modal (blokuje stronę).
- Zapis stanu w `sessionStorage` pod kluczem `ageVerified`.

### Produkty i modal produktu
- Dane produktów w JS (`recommendations`).
- Przycisk „Zobacz więcej” otwiera modal z informacjami.
- Zamknięcie modala: klik w tło lub przycisk „X”.

### Formularz kontaktowy
- Walidacja HTML5 (`required`).
- Po wysłaniu: fake success message (bez wysyłki do serwera).

---

## Wymagania

- Dowolna przeglądarka (Chrome/Edge/Firefox/Safari).
- Opcjonalnie: prosty serwer statyczny (zalecane), aby testować jak najbardziej „produkcyjnie”.

---

## Uruchomienie lokalne

### Opcja A: przez plik (najszybciej)
1. Otwórz `index.html` w przeglądarce.

> Może działać OK, ale zalecany jest serwer lokalny (lepsza zgodność i cache).

### Opcja B: serwer statyczny (zalecane)

#### Python
```bash
cd /Users/przemyslawbladowski/SPA
python3 -m http.server 5173
```
Otwórz: `http://localhost:5173`

#### Node.js (http-server)
```bash
cd /Users/przemyslawbladowski/SPA
npx http-server -p 5173
```

---

## Struktura projektu

- `index.html` — layout strony, nagłówek, stopka, modal wieku, modal produktu, kontener na SPA (`#mainContent`)
- `styles.css` — pełne style responsywne (sekcje, grid, modale, typografia, przyciski)
- `script.js` — logika SPA: routing, renderowanie widoków, dane produktów, obsługa modali i formularza
- `README.md` — dokumentacja projektu

---

## Kluczowe elementy w kodzie

### Routing / stan
- `currentPage` — aktualny widok
- `isMenuOpen` — stan menu mobilnego

### Renderowanie widoków
- `renderHomePage()`
- `renderAboutPage()`
- `renderContactPage()`

### Modale
- `verifyAge()`
- `openProductModal(productId)`
- `closeProductModal()`

---

## Publikacja na GitHub (krok po kroku)

### 1) Inicjalizacja repo i commit
W katalogu projektu:
```bash
cd /Users/przemyslawbladowski/SPA
git init
git add .
git commit -m "Initial commit"
```

### 2) Utworzenie repo na GitHub
Opcja A (UI):
- Wejdź na GitHub → New repository
- Nazwa np. `spa-spirytus-demo`
- Public/Private według potrzeb
- Nie dodawaj automatycznie README (już jest lokalnie)

Opcja B (GitHub CLI):
```bash
gh repo create spa-spirytus-demo --public --source=. --remote=origin --push
```

### 3) Push ręczny (jeśli utworzyłeś repo przez UI)
Skopiuj URL repo (HTTPS lub SSH), a następnie:
```bash
git remote add origin https://github.com/<twoj-login>/spa-spirytus-demo.git
git branch -M main
git push -u origin main
```

---

## Uruchomienie na GitHub Pages (opcjonalnie)

### Opcja A: Pages z gałęzi `main`
1. Repo → Settings → Pages
2. Source: `Deploy from a branch`
3. Branch: `main` / folder: `/root`
4. Save

Po chwili strona będzie dostępna pod adresem:
`https://<twoj-login>.github.io/spa-spirytus-demo/`

> Jeśli chcesz, mogę dopasować projekt pod Pages (np. dodać właściwe meta/SEO, ogarnąć linki i ewentualnie dodać 404 fallback), ale do obecnej wersji nie jest to konieczne.

---

## Rozwój / pomysły
- Zastąpić `sessionStorage` na `localStorage` (zapamiętanie 18+ między sesjami).
- Dodać prosty router hash (`/#/about`) i obsługę back/forward.
- Dodać prawdziwe wysyłanie formularza (API / email service).
- Dodać koszyk (stan + localStorage) i licznik w headerze.

---

## Licencja
Brak określonej licencji — w razie potrzeby dodaj `LICENSE` (np. MIT) i zaktualizuj sekcję.
