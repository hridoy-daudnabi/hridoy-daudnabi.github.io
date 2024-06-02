<script>
    document.querySelectorAll('.project-description button a').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            showPDF(this.href);
        });
    });

    function showPDF(pdfUrl) {
        document.getElementById('pdf-frame').src = pdfUrl + '#toolbar=0';
        document.getElementById('pdf-viewer').style.display = 'block';
    }

    function hidePDF() {
        document.getElementById('pdf-viewer').style.display = 'none';
        document.getElementById('pdf-frame').src = '';
    }
</script>
