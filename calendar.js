const daysGrid = document.getElementById('days-grid');
const monthYearDisplay = document.getElementById('month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

let currentDate = new Date();

function renderCalendar(date) {
    // Clear the calendar grid
    daysGrid.innerHTML = '';

    // Get month, year, and day details
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Update the header
    monthYearDisplay.textContent = date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    });

    // Fill empty days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        daysGrid.appendChild(emptyDiv);
    }

    // Fill the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;

        // Highlight today's date
        const today = new Date();
        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            dayDiv.classList.add('today');
        }

        daysGrid.appendChild(dayDiv);
    }
}

// Navigate to previous and next months
prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

// Initialize the calendar
renderCalendar(currentDate);
