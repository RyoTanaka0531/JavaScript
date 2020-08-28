'use strict';

let book = {title: "Javaポケットリファレンス", publish: '技術評論社', price: 2680, other:{keyword: "Java SE 8",logo: 'logo.jpd'}};
let {title,other, other:{keyword}} =book;

console.log(title);
console.log(other);
console.log(keyword);