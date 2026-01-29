let numberOfBooks = prompt("Vui lòng nhập số lượng sách trong thư viện: ");
let newBookLibary = Number(numberOfBooks);

if (newBookLibary < 10) {
  console.log("Thư viện có ít sách");
} else if (newBookLibary >= 10 && newBookLibary <= 20) {
  console.log("Thư viện có số lượng sách vừa đủ");
} else if (newBookLibary > 20) {
  console.log("Thư viện có nhiều sách");
} else {
  console.log("Gía trị nhập không hợp lệ");
}
