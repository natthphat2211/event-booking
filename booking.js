document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let fullname = document.getElementById("fullname").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let type = document.getElementById("ticketType").value;
  let count = parseInt(document.getElementById("ticketCount").value);
  let valid = true;

  ["errorFullname","errorPhone","errorType","errorCount"].forEach(id => document.getElementById(id).textContent = "");

  if (fullname.split(" ").length < 2) {
    document.getElementById("errorFullname").textContent = "กรุณากรอกชื่อและนามสกุล";
    valid = false;
  }
  if (!/^0\d{9}$/.test(phone)) {
    document.getElementById("errorPhone").textContent = "กรุณากรอกเบอร์โทรศัพท์ 10 หลัก";
    valid = false;
  }
  if (!type) {
    document.getElementById("errorType").textContent = "กรุณาเลือกประเภทตั๋ว";
    valid = false;
  }
  if (isNaN(count) || count < 1 || count > 5) {
    document.getElementById("errorCount").textContent = "จำนวนตั๋วต้อง 1-5";
    valid = false;
  }
  if ((type === "VIP" || type === "Premium") && count > 2) {
    document.getElementById("errorCount").textContent = "VIP/Premium ไม่เกิน 2 ใบ";
    valid = false;
  }
  if (valid) {
    document.getElementById("modalMessage").textContent = `จำนวน: ${count} ประเภท: ${type}`;
    document.getElementById("successModal").classList.remove("hidden");
  }
});
document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("successModal").classList.add("hidden");
});
