# Enjoy Landing Page ![版本](https://img.shields.io/badge/版本-1.0.0-blue)

這是一個純手工打造的現代響應式 landing page，使用 HTML、CSS 和 JavaScript，無須依賴任何前端框架。專案展示了如何使用基礎網頁技術實現高效能、美觀且互動性強的產品展示頁面，適合各類企業服務、產品或品牌形象展示。

## 目錄

- [Enjoy Landing Page](#enjoy-landing-page-)
  - [目錄](#目錄)
  - [專案概述](#專案概述)
  - [專案結構](#專案結構)
  - [技術特點](#技術特點)
  - [功能亮點](#功能亮點)
  - [安裝與使用](#安裝與使用)
  - [技術棧詳解](#技術棧詳解)
  - [資料管理](#資料管理)
  - [外部資源](#外部資源)
  - [版本歷史](#版本歷史)
  - [開發團隊](#開發團隊)
  - [聯絡資訊](#聯絡資訊)

## 專案概述

Enjoy Landing Page 是一個多功能展示型網站，以現代設計展現產品或服務的特色與價值。包含首頁、關於頁面和聯絡頁面，構成完整的使用者體驗。網站採用模組化設計，透過 JSON 資料管理內容，實現了高度客製化且易於維護的架構。

## 專案結構

```plaintext
enjoy-landing-page/
├── index.html        # 首頁，展示主要功能與產品特點
├── about.html        # 關於頁面，展示平台理念與團隊
├── contact.html      # 聯絡頁面，提供聯繫表單
├── README.md         # 專案說明文檔
├── assets/
│   ├── css/
│   │   ├── main.css  # 主要樣式表
│   │   └── utils.css # 通用工具樣式
│   ├── js/
│   │   └── main.js   # 主要 JavaScript 邏輯
│   └── data/         # JSON 資料檔案
│       ├── features.json  # 功能特點資料
│       ├── stats.json     # 統計資料
│       └── swiper_data.json  # 輪播內容資料
```

## 技術特點

- **純原生開發**：使用 HTML5、CSS3 和原生 JavaScript，無需框架依賴
- **響應式設計**：完美適配手機、平板和桌面設備
- **模組化結構**：採用類別封裝與組件化設計
- **資料驅動**：通過外部 JSON 檔案驅動頁面內容
- **優化性能**：最佳化載入速度和執行效率

## 功能亮點

- **動態輪播**：整合 Swiper 實現流暢的輪播體驗
- **Material Design**：使用 Google Material Icons 增強界面視覺體驗
- **資料可視化**：動態數字統計展示關鍵成效
- **互動元件**：包含懸浮效果、過渡動畫等增強用戶體驗
- **表單驗證**：實現即時表單驗證與提交功能
- **深色模式**：支援系統深色模式自動切換

## 安裝與使用

1. 複製專案到本地環境：

   ```bash
   git clone https://github.com/yourusername/enjoy-landing-page.git
   ```

2. 直接在瀏覽器中開啟 `index.html` 檔案即可預覽：

   ```bash
   cd enjoy-landing-page
   # 使用瀏覽器開啟 index.html
   ```

3. 若需要開發，建議使用 Live Server 等工具提供本地伺服器環境：

   ```bash
   # 如使用 VS Code 的 Live Server 擴充功能
   # 右鍵 index.html 選擇 "Open with Live Server"
   ```

## 技術棧詳解

- **HTML5**：語意化標籤，提升可讀性與 SEO 優化
- **CSS3**：使用變數系統、Flexbox 與 Grid 布局
- **JavaScript ES6+**：
  - 類別封裝與模組化
  - 非同步資料載入
  - DOM 操作與事件處理
  - 動畫效果實現

## 資料管理

專案採用 JSON 檔案管理動態內容，便於維護與更新：

- `swiper_data.json`：輪播內容與主題展示圖片
- `features.json`：產品優勢與功能特點
- `stats.json`：成效數據與成果統計

## 外部資源

- **圖片來源**：[Unsplash](https://unsplash.com/) - 高品質免費圖庫
- **圖標**：[Google Material Icons](https://fonts.google.com/icons) - 專業設計圖標
- **輪播**：[Swiper](https://swiperjs.com/) - 高性能輪播組件

## 版本歷史

| 版本 | 日期 | 說明 |
|------|------|------|
| 1.0.0 | 2025/9/20 | 首次發布，包含首頁、關於頁面和聯絡頁面的基本功能 |

## 開發團隊

- **孫于喬 (YuChiaoSun, Joy)**
  - 職位：全端開發工程師
  - GitHub: [@suj811014](https://github.com/suj811014)
  - 專長：前端設計與實現、後端架構、UX/UI 設計

## 聯絡資訊

如有任何問題、建議或合作機會，歡迎聯繫：

- **技術支援**：[suj811014@gmail.com](mailto:suj811014@gmail.com)
- **GitHub Issues**：[提交問題或建議](https://github.com/yourusername/enjoy-landing-page/issues)
- **官方網站**：[Enjoy Develop](https://enjoy-develop.com)
