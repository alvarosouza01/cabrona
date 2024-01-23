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

    function handleLanguageClick(event) {
        var target = event.target.closest('[data-lang]');
        if (target) {
            var selectedLang = target.getAttribute('data-lang');
            showLanguageContent(selectedLang);
        }
    }

    document.body.addEventListener('click', handleLanguageClick);
    document.body.addEventListener('touchend', handleLanguageClick);
});
function as()
{
    console.log("Clikced");
}
