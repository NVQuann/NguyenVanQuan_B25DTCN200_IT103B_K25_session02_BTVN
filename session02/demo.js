// Sự khác nhau giữa 2 toán tử So sánh: == và ===
// Toán tử == sẽ so sánh tương đối: Chỉ so sánh giá trị, không quan tâm đến kiểu dữ liệu (hạn chế)
// Toán tử === sẽ so sánh tuyệt đối: So sánh cả giá trị và kiểu dữ liệu của 1 biến (nên dùng)

const variable_1 = 10;
const variable_2 = "10";

console.log("Sự khác nhau khi dùng == ", variable_1 == variable_2);
console.log("Sự khác nhau khi dùng === ", variable_1 === variable_2);

// Sự khác nhau giữa toán tử so sánh: != và !==

console.log("Khác nhau với toán tử !=", variable_1 != variable_2); // false
// Logic kiểm tra với !=
// 1. So sánh giá trị của 2 biến  (Không quan tâm kiểu dữ liệu) => lúc này kết quả true
// 2. Phủ định lại kết quả trên: !true => false

console.log("Khác nhau với toán tử !==", variable_1 !== variable_2); // true
// Logic kiểm tra với !==
//  1. So sánh giá trị và kiểu dữ liệu của 2 biến => lúc này kết quả là false
// 2. Phủ định lại kết quả trên: !false => true

// Toán tử logic (&& - AND và || - OR)
// 1. Toán tử AND: Logic xử lý: Duyệt từ bên trái qua phải, nếu khối bên trái đúng thì tiếp tục duyệt
// duyệt đến lúc nào kết thúc thì trả về khối cuối cùng
const statement_1 = 5 > 2 && 10 > 5 && 0 && 10 && 5;
console.log("Result_1: ", statement_1);

// 2. Toán tử OR: Logic xử lý: Duyệt từ trái qua phải, nếu chỉ cần 1 điều kiện đúng thì sẽ lấy chính khối đó
const statement_2 = null || 4 || 5 > 2 || 4 > 3 || 10;
console.log("Result_2", statement_2);

// Câu lệnh rẽ nhánh
// 1. Nếu có 1 điều kiện
const myAge = 18;
if (myAge >= 18) {
  console.log("Đủ tuổi thi lái xe");
}

// 2. Nếu có 2 điều kiện
if (myAge >= 18) {
  console.log("Đủ tuổi thi lái xe");
} else {
  console.log("Chưa đủ tuổi lái xe!");
}

// 3. Nếu có từ 2 điều kiện trở lên, và điều kiện phải nằm trong khoảng
// if() {

// } else if () {

// }else {}

// 4. Sử dụng switch - case thường được sử dụng trong trường hợp bộ điều kiện là phép so sánh 1 biến với 1 tập hợp các giá trị
// Sử dụng toán tử so sánh tuyệt đối ===
// Bài toán: Nhập vào số để in ra thứ trong tuần
const day = "3";

switch (day) {
  case 2:
    console.log("Thứ 2");
    break;
  case 3:
    console.log("Thứ 3");
    break;
  case 4:
    console.log("Thứ 4");
    break;
  case 5:
    console.log("Thứ 5");
    break;
  case 6:
    console.log("Thứ 6");
    break;
  case 7:
    console.log("Thứ 7");
    break;
  case 8:
    console.log("Chủ nhật");
    break;
  default:
    console.log("Gía trị nhập vào không hợp lệ!");
    break;
}

// In ra tên quyền: Cho các quyền sau: admin (quản trị viên), user (Người dùng), customer (Khách hàng), employee (Nhân viên)

let role = prompt("Vui lòng nhập quyền hạn: ");
switch (role) {
  case "admin":
    console.log("Quản trị viên");
    break;
  case "user":
    console.log("Người dùng");
    break;
  case "customer":
    console.log("Khách hàng");
    break;
  case "employee":
    console.log("Nhân viên");
    break;
  default:
    console.log("Quyền không tồn tại");
    break;
}
