// Khai báo các biến cần thiết
// - Tên người dùng (Ví dụ: "Nguyen Van A")
// - Vai trò (Nhập một trong các từ: "admin", "student", "guest")
// - Số dư tài khoản thẻ (Ví dụ: "50000" hoặc để rỗng/0 nếu hết tiền)
// - Trạng thái thẻ thư viện (Nhập "true" nếu đang hoạt động, hoặc để rỗng/nhập khác để coi như bị khóa)
// - Số ngày quá hạn trả sách (Ví dụ: 0 là đúng hạn, 5 là quá hạn 5 ngày)

let userName = "Nguyễn Văn A";
let role = "student";
let blance = "50000";
let cardStatus = true;
let expirationDate = 5;
let roleMessage = "";
let resultBorrowBook = "";
let fineAmount = 0;

// Kiểm tra quyền truy cập dựa vào biến Vai trò (cần chuẩn hóa về chữ thường trước khi check):
// - Nếu là "admin": In ra "Chào Admin, bạn có toàn quyền hệ thống".
// - Nếu là "student": In ra "Chào sinh viên, bạn có thể mượn sách".
// - Nếu là "guest": In ra "Chào khách, bạn chỉ có thể đọc tại chỗ".
// - Trường hợp khác (default): In ra "Lỗi: Vai trò không hợp lệ!".

switch (role) {
  case "admin":
    console.log("Chào Admin, bạn có toàn quyền hệ thống");

    // Gán lại nội dung cho biến roleMessage
    roleMessage = "Chào Admin, bạn có toàn quyền hệ thống";
    break;
  case "student":
    console.log("Chào sinh viên, bạn có thể mượn sách");

    // Gán lại nội dung cho biến roleMessage
    roleMessage = "Chào sinh viên, bạn có thể mượn sách";

    // Kiểm tra điều kiện mượn sách:
    // Người dùng CHỈ ĐƯỢC PHÉP mượn sách khi thỏa mãn các điều kiện sau:
    // - Tên người dùng không được để trống (Gợi ý: Kiểm tra Truthy/Falsy).
    // - Vai trò phải là "student" HOẶC "admin".
    // - Số dư tài khoản phải lớn hơn 0 VÀ Trạng thái thẻ phải là true (Hoạt động).
    // Nếu đủ điều kiện: In ra "ĐƯỢC PHÉP MƯỢN SÁCH".
    // Nếu không đủ điều kiện: In ra "YÊU CẦU BỊ TỪ CHỐI" và ghi rõ lý do (nếu có thể).
    if (userName.trim() && blance > 0 && cardStatus) {
      console.log("ĐƯỢC PHÉP MƯỢN SÁCH");

      // Gán lại kết quả mượn sách
      resultBorrowBook = "ĐƯỢC PHÉP MƯỢN SÁCH";

      // Tính phí phạt trả muộn dựa vào số ngày quá hạn:
      // - Nếu số ngày <= 0: Không phạt. In ra "Cảm ơn bạn đã trả đúng hạn".
      // - Nếu số ngày từ 1 đến 5 ngày: Phạt 5.000đ/ngày.
      // - Nếu số ngày từ 6 đến 10 ngày: Phạt 10.000đ/ngày.
      // - Nếu số ngày > 10 ngày: Phạt 200.000đ (cố định) và in thêm cảnh báo "TÀI KHOẢN BỊ KHÓA".

      if (expirationDate <= 0) {
        console.log("Cảm ơn bạn đã trả đúng hạn");
      } else if (expirationDate >= 1 && expirationDate <= 5) {
        console.log("Số tiền phạt là: ", expirationDate * 5000);

        // Gán lại số tiền bị phạt
        fineAmount = expirationDate * 5000;
      } else if (expirationDate >= 6 && expirationDate <= 10) {
        console.log("Số tiền phạt là: ", expirationDate * 10000);

        // Gán lại số tiền bị phạt
        fineAmount = expirationDate * 10000;
      } else {
        console.log("Số tiền phạt là: ", 200000);

        // Gán lại số tiền bị phạt
        fineAmount = 200000;
      }
    } else {
      // Gán lại kết quả mượn sách
      resultBorrowBook = "KHÔNG ĐƯỢC PHÉP MƯỢN SÁCH";

      // Kiểm tra các trường hợp lỗi
      if (!userName.trim()) {
        console.log("YÊU CẦU BỊ TỪ CHỐI. Lý do: tên người dùng bị trống");
      } else if (blance <= 0) {
        console.log("YÊU CẦU BỊ TỪ CHỐI. Lý do: Số dư tài khoản không đủ");
      } else {
        console.log("YÊU CẦU BỊ TỪ CHỐI. Lý do: Thẻ không hoạt động");
      }
    }

    break;
  case "guest":
    console.log("Chào khách, bạn chỉ có thể đọc tại chỗ");

    // Gán lại nội dung cho biến roleMessage
    roleMessage = "Chào khách, bạn chỉ có thể đọc tại chỗ";

    break;
  default:
    console.log("Lỗi: Vai trò không hợp lệ!");

    // Gán lại nội dung cho biến roleMessage
    roleMessage = "Lỗi: Vai trò không hợp lệ!";
    break;
}

// In ra phiếu thu
console.log(`
--- HỆ THỐNG MƯỢN TRẢ ---
    Người dùng: ${userName.toUpperCase()}
    Quyền hạn: ${roleMessage}
    Kết quả mượn: ${resultBorrowBook}
    Tình trạng trả sách: Quá hạn ${expirationDate} Ngày
    Tiền phạt: ${fineAmount} VNĐ
`);
