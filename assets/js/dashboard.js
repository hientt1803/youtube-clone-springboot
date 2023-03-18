//  Dashboard

const listItems = document.querySelectorAll(".sidebar-list li");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    let isActive = item.classList.contains("active");

    listItems.forEach((el) => {
      el.classList.remove("active");
    });

    if (isActive) item.classList.remove("active");
    else item.classList.add("active");
  });
});

const toggleSidebar = document.querySelector(".toggle-sidebar");
const logo = document.querySelector(".logo-box");
const sidebar = document.querySelector(".sidebar");

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

logo.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

const upload = document.querySelector("#Video-edit-myPicture");
const preview = document.querySelector(".video-edit-preview");
const error = document.querySelector(".error");

upload.addEventListener("change", function (e) {
  const file = upload.files[0];
  if (!file) {
    return;
  }

  // if (!file.name.endsWith(".jpg")) {
  //   error.innerText = "Png is not allow here";
  //   return;
  // } else {
  //   error.innerText = "";
  // }

  if (file.size / (1024 * 1024) > 5) {
    error.innerText = "Image must lower than 5mb";
    return;
  } else {
    error.innerText = "";
  }

  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  preview.appendChild(img);
});
