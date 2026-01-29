let nameBook = prompt("Nhập tên cuốn sách: ");
let author = prompt("Nhập tên tác giả: ");
let yearBook = +prompt("Nhập năm sản xuất: ");

let year = new Date().getFullYear();
if (year === yearBook) {
  console.log("Đây là sách mới");
} else if (year - 5 <= yearBook < year) {
  console.log("Đây là sách khá mới");
} else {
  console.log("Đây là sách cũ");
}
