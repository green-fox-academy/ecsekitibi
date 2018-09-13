//favAuthor(): string[] {
let favoriteAuthors = {};
for (let i = 0; i < this.books.length; i++) {
  if (favoriteAuthors[this.books[i]['author']]) {
    favoriteAuthors[this.books[i]['author']]++
  } else {
    favoriteAuthors[this.books[i]['author']] = 1;
  }
}
let maxCount: number = Math.max(...Object['values'](favoriteAuthors));
let theFavouriteAuthor = Object.keys(favoriteAuthors).filter(elem => {
  return favoriteAuthors[elem] === maxCount;
})
 // return theFavouriteAuthor
//}