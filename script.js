const navigation_items_elms = document.querySelectorAll(".navigation-bar .list-items .item");
const navigation_pointer = document.querySelector(".navigation-bar .pointer");

navigation_items_elms.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    navigation_items_elms.forEach((itm) => itm.classList.remove("active"));

    item.classList.add("active");

    const pointerWidth = 100 / navigation_items_elms.length;
    navigation_pointer.style.width = `${pointerWidth}%`;
    navigation_pointer.style.left = `${pointerWidth * index}%`;
  });
});
