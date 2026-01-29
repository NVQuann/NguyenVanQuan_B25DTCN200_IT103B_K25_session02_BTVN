let nameBook = prompt("Vui lòng nhập tên sách: ");
let bookGenre = prompt("Vui lòng nhập thể loại sách: ");
let bookCondition = prompt("Nhập tình trạng sách (có sẵn hay đã mượn): ");

if (bookGenre === "Khoa học" || bookGenre === "lịch sử") {
  if (bookCondition === "có sẵn") {
    console.log("Sách này có sẵn trong thư viện");
  } else {
    console.log("Sách đã được mượn");
  }
} else if (bookGenre === "Văn học" || bookGenre === "Truyện") {
  console.log("Sách này có thể đọc giải trí");
} else {
  console.log("Thể loại sách không có trong thư viện!");
}
