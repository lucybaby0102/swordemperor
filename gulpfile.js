const { src, dest, watch, series } = require('gulp');
const pug = require('gulp-pug');

// 路徑設定
const paths = {
  pug: {
    // 要「輸出成 HTML 的頁面」
    // 這裡抓 src 根目錄的所有 .pug（例如 src/index.pug、src/xxx.pug）
    src: [
      'src/*.pug',
      '!src/**/_*.pug'   // 排除檔名以 _ 開頭的（如果你之後也想在 src 放 partial）
    ],

    // 要「監聽變動」的 pug（包含 src/ 底下所有子資料夾）
    watch: 'src/**/*.pug',

    // 編譯輸出資料夾
    dest: 'docs'
  }
};

// 編譯 Pug → HTML
function compilePug() {
  return src(paths.pug.src)
    .pipe(pug({ pretty: true }))  // 開發用保留縮排
    .pipe(dest(paths.pug.dest));
}

// 監聽所有 pug，變動就重新編譯
function watcher() {
  watch(paths.pug.watch, compilePug);
}

// npx gulp        → 先編譯一次，再開始監聽（最方便開發）
exports.default = series(compilePug, watcher);

// npx gulp build  → 只編譯一次，不監聽
exports.build = compilePug;
