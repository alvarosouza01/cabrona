document.addEventListener('DOMContentLoaded', function () {
    var userLanguage = navigator.language || navigator.userLanguage;
    var defaultLanguage = 'en';
    var primaryLanguage = userLanguage.split('-')[0];

    function showLanguageContent(lang) {
        var languageSections = document.querySelectorAll('.language-content');
        languageSections.forEach(function (section) {
            section.style.display = 'none';
        });

        var selectedLanguage = document.querySelector('.language-content.' + lang);
        if (selectedLanguage) {
            selectedLanguage.style.display = 'block';
        } else {
            var defaultLanguageSection = document.querySelector('.language-content.' + defaultLanguage);
            defaultLanguageSection.style.display = 'block';
        }
    }

    showLanguageContent(primaryLanguage);

    document.addEventListener('click', function (event) {
        var target = event.target;

        if (target.tagName === 'A' || target.tagName === 'STRONG') {
            var selectedLang = target.getAttribute('data-lang');
            showLanguageContent(selectedLang);
        }
    });
});
