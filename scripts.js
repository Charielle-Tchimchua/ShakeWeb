document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const languageSwitcher = document.getElementById("language-switcher");

  languageSwitcher.addEventListener("change", function () {
    const selectedLanguage = this.value;
    loadLanguage(selectedLanguage);
  });

  // Load default language (e.g., English)
  loadLanguage("en");

  function loadLanguage(lang) {
    fetch(`lang/${lang}.json`)
      .then((response) => response.json())
      .then((data) => {
        // Update Hero section
        const heroTexts = document.querySelectorAll(".animated-text");
        data.hero_texts.forEach((text, index) => {
          heroTexts[index].textContent = text;
        });

        // Update Features title
        document.querySelector(".section-title").textContent =
          data.features_title;

        // Update FAQ section
        document.querySelector(".faq-section h2").textContent = data.faq_title;
        const faqItems = document.querySelectorAll(".faq-item");
        data.faq.forEach((faq, index) => {
          faqItems[index].querySelector(".faq-question").textContent =
            faq.question;
          faqItems[index].querySelector(".faq-answer p").textContent =
            faq.answer;
        });
      })
      .catch((error) => console.error("Error loading language:", error));
  }
});

// Fonction pour charger un fichier JSON
function loadLanguage(language) {
  fetch(`${language}.json`)
    .then((response) => response.json())
    .then((data) => {
      // Mettez à jour les éléments du DOM avec les données du JSON
      document.getElementById("main-title").textContent = data["main-title"];
      document.getElementById("description").textContent = data["description"];
      document.getElementById("footer-text").textContent = data["footer-text"];

      // Mise à jour des éléments de la navbar
      const navbar = data["navbar"];
      document.getElementById("navbar").innerHTML = `
                <a href="#">${navbar["home"]}</a>
                <a href="#">${navbar["about"]}</a>
                <a href="#">${navbar["contact"]}</a>
            `;
    })
    .catch((error) => console.error("Error loading language file:", error));
}

// Exemple : Charger la langue anglaise par défaut
loadLanguage("en");

// Changement de langue en fonction de l'utilisateur
document
  .getElementById("language-switcher")
  .addEventListener("change", function () {
    loadLanguage(this.value);
  });

fetch("en.json")
  .then((response) => response.json())
  .then((data) => {
    // Manipulez les données JSON ici
    console.log(data);
  });
