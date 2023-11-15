document.addEventListener('DOMContentLoaded', function () {
    // Get the user's preferred language from the browser
    var userLanguage = navigator.language || navigator.userLanguage;

    // Set the default language (fallback to English if not supported)
    var defaultLanguage = 'en';

    // Extract the primary language code (e.g., 'en' from 'en-US')
    var primaryLanguage = userLanguage.split('-')[0];

    // Hide all language sections initially
    var languageSections = document.querySelectorAll('.language-content');
    languageSections.forEach(function (section) {
        section.style.display = 'none';
    });

    // Show the content for the detected language or use the default
    var selectedLanguage = document.querySelector('.language-content.' + primaryLanguage);
    if (selectedLanguage) {
        selectedLanguage.style.display = 'block';
    } else {
        // Fallback to the default language
        var defaultLanguageSection = document.querySelector('.language-content.' + defaultLanguage);
        defaultLanguageSection.style.display = 'block';
    }
});
