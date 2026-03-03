let isDark = false;

document.getElementById("btn").addEventListener("click", () => {
  isDark = !isDark;

  document.body.classList.toggle("dark", isDark);

  const msg = document.getElementById("msg");
  msg.innerText = isDark
    ? "Dark mode enabled ✅ Deployed via GitHub Actions!"
    : "Light mode enabled ✅ Ready for GitHub Pages!";
});