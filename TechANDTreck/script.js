'use strict';
// ハンバーガーメニューの開閉
function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

// お問い合わせフォームの送信イベント
document
  .getElementById('contact-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();
    alert('お問い合わせありがとうございます！担当者よりご連絡いたします。');
    // フォームのリセット
    this.reset();
  });
