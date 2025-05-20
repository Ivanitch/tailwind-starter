# Tailwind Starter

Простой стартовый шаблон с Tailwind CSS 4.1.7 и Vite.

## 🚀 Быстрый старт

1. Установите зависимости:
   ```bash
   npm install
   ```

2. Запустите сервер разработки:
   ```bash
   npm run dev
   ```

3. Откройте в браузере:
   ```
   http://localhost:5173

   # или
   http://localhost:5500

   ```

## 📦 Сборка на продакшн

```bash
npm run build
```

Скомпилированные файлы появятся в папке `dist/`.

## 📁 Структура проекта

```
.
├── css/              # Кастомные стили
│   └── styles.css
├── js/               # Кастомный JavaScript
│   └── scripts.js
├── index.html        # Главная страница
├── about.html        # Доп. страница
├── contact.html      # Ещё одна
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── .vscode/          # Настройки VS Code
│   └── settings.json
```

## ✅ Возможности

- Tailwind v4.1.7
- Vite
- Несколько HTML-файлов (`/**/*.html`)
- IntelliSense поддержка в VS Code
- Подготовлено для интеграции в Laravel (Breeze, Jetstream и др.)
