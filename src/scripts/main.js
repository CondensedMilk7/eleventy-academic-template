export async function initThemeHandler() {
  const selectEl = document.querySelector('select[id="theme"]');
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const preferredTheme = prefersDarkScheme ? "dark" : "light";
  const savedThemeConfig = localStorage.getItem("theme");

  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const style = getComputedStyle(document.body);

  selectEl.value = savedThemeConfig || "system";

  if (savedThemeConfig === "dark" || savedThemeConfig === "light") {
    setTheme(savedThemeConfig);
  } else {
    setTheme(preferredTheme);
  }

  selectEl.addEventListener("change", () => {
    if (selectEl.value === "system") {
      setTheme(preferredTheme);
    } else {
      setTheme(selectEl.value);
    }

    localStorage.setItem("theme", selectEl.value);
  });

  function setTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    const currentBackgroundColor = style.getPropertyValue("--clr-background");
    themeMeta.setAttribute("content", currentBackgroundColor);
  }
}

initThemeHandler();
