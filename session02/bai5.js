let nameBook = prompt("Vui lòng nhập tên sách: ");
let bookStatus = prompt("Trạng thái sách (có sẵn hay đã mượn): ");
let yearBook = Number(prompt("Năm xuất bản: "));
let newYearBook = new Date().getFullYear();
if (bookStatus === "có sẵn" && newYearBook - yearBook <= 5) {
  console.log("Sách này mới và có sẵn để mượn");
} else if (bookStatus === "đã mượn" && newYearBook - yearBook <= 10) {
  console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
} else if (bookStatus === "đã mượn" && newYearBook - yearBook > 10) {
  console.log("Sách này đã mượn và khá cũ");
} else if (bookStatus === "có sẵn" && newYearBook - yearBook > 5) {
  console.log("Sách này có sẵn nhưng đã lâu năm");
} else {
  console.log("Không hợp lệ!");
}
