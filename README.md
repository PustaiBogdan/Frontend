# Frontend Application

## Structura Proiectului

Structura proiectului este organizată modular, pentru a asigura **scalabilitate** și **claritate**. Iată o descriere a fiecărui director și fișier:

---

## **1. Business Logic Layer (BLL)**

- 📂 `app/bll/`  
  Conține **logica de business** a aplicației. Aici sunt implementate regulile care procesează datele și acțiunile aplicației.

---

## **2. Data Access Layer (DAL)**

- 📂 `app/dal/`  
  Responsabil pentru **accesul la date** (API-uri, baze de date, localStorage).

---

## **3. Landing Pages**

- 📂 `app/landingPages/`  
  Conține paginile principale ale aplicației.

---

## **4. Models**

- 📂 `app/model/`  
  Conține **modelele și tipurile de date** folosite în aplicație.

---

## **5. Navigation**

- 📂 `app/navigation/`  
  Conține logica pentru **navigație** în aplicație.

---

## **6. Presentation Layer**

- 📂 `app/presentationLayer/`  
  Conține **componente reutilizabile** pentru UI.

---

## **7. Store (State Management)**

- 📂 `app/store/`  
  Gestionarea stării aplicației.

---

## **8. Utils**

- 📂 `app/utils/`  
  Conține funcții și utilitare reutilizabile.

---

## **9. Assets**

- 📂 `assets/`  
  Conține fișiere statice precum imagini, fonturi sau logo-uri.

---

## **10. Environments**

- 📂 `environments/`  
  Configurări separate pentru diferite medii (development și production).

---

## **11. Main Application Files**

- **`app.component.ts`**: Componenta principală a aplicației.
- **`app.module.ts`**: Modulul principal unde sunt importate toate componentele și modulele.
- **`app.component.html`**: Template-ul principal pentru aplicație.
- **`main.ts`**: Punctul de intrare al aplicației.

---

## **12. Root Configurations**

- **`.gitignore`**: Fișiere ignorate de Git (ex.: `node_modules`, `dist`).
- **`angular.json`**: Configurarea Angular CLI.
- **`package.json`**: Gestionarea dependențelor proiectului.
- **`tsconfig.json`**: Configurarea TypeScript.

---

# Ghid pentru Branch-uri și Commit-uri

Acest document stabilește convențiile pentru crearea **branch-urilor** și realizarea **commit-urilor** în cadrul proiectului. Scopul este să menținem un **workflow clar, organizat și ușor de urmărit**.

---

## **1. Conveție pentru Branch-uri**

Folosim formatul: <tip-branch>/<data>-<nume-descriptiv>

### **Explicație**:

- **`tip-branch`**:
  - `feature` → pentru funcționalități noi.
  - `fix` → pentru rezolvarea unui bug.
  - `hotfix` → pentru rezolvarea rapidă a unui bug critic în producție.
  - `refactor` → pentru modificări de cod fără schimbări funcționale.
  - `chore` → pentru task-uri administrative (ex.: update de dependențe).
- **`data`**: Data curentă în format `DDMMYYYY` (ex.: `16122024`).
- **`nume-descriptiv`**: O descriere clară, scurtă și fără spații, delimitată prin `-`.

---

### **Exemple pentru branch-uri**:

1. **Funcționalități noi**:

   ```bash
   feature/16122024-login-page
   feature/16122024-add-user-profile
   ```

2. **Bug fix**:

   ```bash
   fix/16122024-button-click-error
   fix/16122024-api-connection-issue
   ```

3. **Hot fix**:

   ```bash
   hotfix/16122024-crash-on-startup
   ```

4. **Refactorizare cod**:

   ```bash
   refactor/16122024-optimize-api-calls
   refactor/16122024-cleanup-unused-files
   ```

5. **Task-uri administrative**:

   ```bash
   chore/16122024-update-dependencies
   chore/16122024-fix-eslint-rules
   ```

## **2. Conveție pentru Commit-uri**

Folosim formatul: <tip-commit>: <descriere scurtă>

- **`tip-commit`**:
  - `feat` → Adaugă o funcționalitate nouă.
  - `fix` → Rezolvă un bug.
  - `hotfix` → Rezolvă urgent un bug critic.
  - `refactor` → Modifică codul fără a schimba funcționalitatea.
  - `docs` → Adaugă sau modifică documentația.
  - `style` → Modificări legate de formatare (fără schimbări funcționale).
  - `test` → Adaugă sau modifică teste.
  - `chore` → Task-uri administrative (ex.: update de dependențe, build scripts).
