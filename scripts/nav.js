var dropbtn = document.querySelector(".dropdown .dropbtn");
var dropdownContent = document.querySelector(
  ".dropdown .dropdown-content"
);

// Event listener برای دکمه dropdown
dropbtn.addEventListener("click", function (event) {
  event.stopPropagation(); // اجتناب از پدیدار شدن رویداد برای body
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none"; // مخفی کردن dropdown
  } else {
    dropdownContent.style.display = "block"; // نمایش dropdown
  }
});

// Event listener برای بستن dropdown وقتی روی body کلیک شود
document.body.addEventListener("click", function () {
  dropdownContent.style.display = "none"; // مخفی کردن dropdown
});