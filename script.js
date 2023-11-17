document.addEventListener('DOMContentLoaded', function () {
    // Get the user's preferred language from the browser
    var userLanguage = navigator.language || navigator.userLanguage;

    // Set the default language (fallback to English if not supported)
    var defaultLanguage = 'en';

    // Extract the primary language code (e.g., 'en' from 'en-US')
    var primaryLanguage = userLanguage.split('-')[0];

    // Function to show content for a specific language
    function showLanguageContent(lang) {
        var languageSections = document.querySelectorAll('.language-content');
        languageSections.forEach(function (section) {
            section.style.display = 'none';
        });

        var selectedLanguage = document.querySelector('.language-content.' + lang);
        if (selectedLanguage) {
            selectedLanguage.style.display = 'block';
        } else {
            // Fallback to the default language
            var defaultLanguageSection = document.querySelector('.language-content.' + defaultLanguage);
            defaultLanguageSection.style.display = 'block';
        }
    }

    // Initial content display
    showLanguageContent(primaryLanguage);

    // Handle language selection click
    var languageSelector = document.querySelector('.language-selector');
    languageSelector.addEventListener('click', function (event) {
        event.preventDefault();

        if (event.target.tagName === 'A' || event.target.tagName === 'STRONG') {
            var selectedLang = event.target.getAttribute('data-lang');
            showLanguageContent(selectedLang);
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    window.langChange = function (selectedLang) {
        var languageSections = document.querySelectorAll('.language-content');
        languageSections.forEach(function (section) {
            section.style.display = 'none';
        });

        var selectedLanguage = document.querySelector('.language-content.' + selectedLang);
        if (selectedLanguage) {
            selectedLanguage.style.display = 'block';
        }
    };
});