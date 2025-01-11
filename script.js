let currentSectionIndex = 0;
        const sections = ['#technical-experience', '#teaching-experience','#freelance-experience'];

        function showSection(index) {
            // Hide all sections
            sections.forEach(section => {
                document.querySelector(section).classList.remove('active');
            });
            // Show the selected section
            document.querySelector(sections[index]).classList.add('active');
            // Enable/Disable buttons
            document.getElementById('prev-btn').disabled = index === 0;
            document.getElementById('next-btn').disabled = index === sections.length - 1;
        }

        document.getElementById('next-btn').addEventListener('click', () => {
            if (currentSectionIndex < sections.length - 1) {
                currentSectionIndex++;
                showSection(currentSectionIndex);
            }
        });

        document.getElementById('prev-btn').addEventListener('click', () => {
            if (currentSectionIndex > 0) {
                currentSectionIndex--;
                showSection(currentSectionIndex);
            }
        });

        // Initialize the first section
        showSection(currentSectionIndex);