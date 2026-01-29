let nameBook = prompt("Vui lòng nhập tên sách: ");
let nameBorrower = prompt("Vui lòng nhập tên người mượn: ");
let bookCondition = prompt(
  "Tình trạng sách (có sẵn hay đã mượn hay không có sẵn): ",
);
let numberOfDaysBorrowed = prompt("Nhập số ngày mượn: ");
let libraryCard = prompt("Bạn có thẻ thư viện chưa(có hoặc không): ");
if (bookCondition === "có sẵn" && libraryCard === "có") {
  console.log("Chúc mừng, bạn có thể mượn sách này");
} else if (bookCondition === "đã mượn" && numberOfDaysBorrowed < 30) {
  if (libraryCard === "có") {
    console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
  } else if (libraryCard === "không") {
    console.log("Bạn không thể mượn sách ày neeys không có thẻ thư viện");
  } else {
    console.log("Thông tin của bạn không hợp lệ vui lòng nhập lại!");
  }
} else if (bookCondition === "Không có sẵn") {
  console.log(
    "Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau",
  );
} else {
  console.log("Thông tin của bạn không hợp lệ vui lòng nhập lại!");
}
