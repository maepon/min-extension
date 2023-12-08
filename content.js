// content.js

// ページ上のテキストを変更
document.body.innerText = "Hello, Chrome拡張機能!";

//DomContentLoad時にaタグのtarget属性を削除する
// function removeTarget() {
//     const links = document.querySelectorAll('a[target]');
//
//     links.forEach((link) => {
//         link.removeAttribute('target');
//     });
//
//     setTimeout(removeTarget, 500)
// }
//
// removeTarget();