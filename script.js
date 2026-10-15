const buttons = document.querySelectorAll("[data-lang]");
    const translatable = document.querySelectorAll("[data-jp][data-en]");
    const setLanguage = (language) => {
      document.documentElement.lang = language === "jp" ? "ja" : "en";
      translatable.forEach((element) => { element.textContent = element.dataset[language]; });
      buttons.forEach((button) => button.classList.toggle("active", button.dataset.lang === language));
    };
    buttons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
