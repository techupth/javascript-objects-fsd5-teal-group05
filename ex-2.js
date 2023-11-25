// Exercise #2 Product

const product = {
  name: "Xiaomi Air Purifier",
  price: 4000,
  ratings: 2.5,
  photo: null,
};
let socialMediaShare = "facebookShare";
// Start code here

// ให้ Reassign ตัว Value ของ Key ratings เป็น 4.5
product["ratings"] = 4.5;

// ให้ Reassign ตัว Value ของ Key photo เป็น https://i01.appmifile.com/webfile/globalimg/products/pc/mi-air-purifier-3H/replace_03.jpg
product["photo"] =
  "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-air-purifier-3H/replace_03.jpg";

// ให้สร้าง Key ใหม่ที่ชื่อว่า code ใน Variable product โดยมี Value เป็น IT0101010
product.code = "IT0101010";

// ให้ Reassign ตัว Value ของ Key price เป็น 6000
product.price = 6000;

// ให้ลบ Key ratings ออกจาก Variable product
delete product.ratings;

// ให้สร้าง Key ใหม่ ใน Variable product โดยใช้ Value จาก Variable socialMediaShare เพื่อสร้าง Key และ Assign ตัว Value ของ Key นั้น เป็น 45.5
product[socialMediaShare] = 45.5;

console.log(product);
