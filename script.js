document.addEventListener('DOMContentLoaded', function() {
    function adjustLayout() {
        const packages = document.querySelectorAll('.package');
        const container = document.querySelector('.container');
        
        if (window.innerWidth <= 768) {
            packages.forEach(package => {
                package.style.width = '100%';
                package.style.marginBottom = '20px';
            });
            container.style.width = '90%';
        } else {
            packages.forEach(package => {
                package.style.width = '48%';
                package.style.marginBottom = '0';
            });
            container.style.width = '80%';
        }
    }

    window.addEventListener('resize', adjustLayout);
    adjustLayout(); // Initial call to set the layout
});

