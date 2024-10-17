document.getElementById("messageButton").addEventListener("click", function () {
  alert("Thank you for visiting my profile!");
});

const socialIcons = document.querySelectorAll(".social-icons a");
socialIcons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.color = "#3498db";
  });

  icon.addEventListener("mouseout", () => {
    icon.style.color = "";
  });
});
