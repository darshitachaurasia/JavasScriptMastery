
function Translator(translations) {
  this.translations = translations
  this.translate = function(language){
    return this.translations[language] || "Not Available"
  }
}

// Example Usage:
const translator = new Translator({ en: "Hello", es: "Hola", fr: "Bonjour" });
console.log(translator.translate("es")); // Output: Hola
console.log(translator.translate("de")); // Output: Translation not available

  