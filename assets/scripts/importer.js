function importFile(filePath, element) {
    fetch(filePath)
    .then(response => response.text())
    .then(data => {
        document.querySelector(element).innerHTML = data;
    });
}
importFile('/assets/pages/header.html', 'header');
importFile('/assets/pages/footer.html', 'footer');