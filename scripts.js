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
