let nameBook = prompt("Vui lòng nhập tên sách: ");
let nameBorrower = prompt("Vui lòng nhập tên người mượn: ");
let levelOfLiking = prompt(
  "Mức độ yêu thích (một giá trị từ 1 đến 5, với 1 là ít thích nhất và 5 là rất thích): ",
);

if (levelOfLiking === 5 || levelOfLiking === 4) {
  console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
} else if (levelOfLiking === 3) {
  console.log("Sách này khá ổn, có thể mượn");
} else if (levelOfLiking === 2 || levelOfLiking === 1) {
  console.log("Sách này bạn có thể cân nhắc mượn lại sau");
} else {
  console.log("Mức độ yêu thích của bạn không hợp lệ!");
}
