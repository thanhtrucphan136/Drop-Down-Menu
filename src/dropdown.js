export function dropdown() {
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdown = document.querySelector(".dropdown-options");

  //open dropdown when hovering the button
  dropdownBtn.addEventListener("mouseenter", () => {
    dropdown.classList.add("dropdown-active");
  });

  dropdown.addEventListener("mouseenter", () => {
    dropdown.classList.add("dropdown-active");
  });

  //close the dropdown if not hovering
  dropdownBtn.addEventListener("mouseleave", () => {
    dropdown.classList.remove("dropdown-active");
  });

  dropdown.addEventListener("mouseleave", () => {
    dropdown.classList.remove("dropdown-active");
  });
  console.log("hhihi");
}
