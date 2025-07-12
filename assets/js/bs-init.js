document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that have the 'data-bss-tooltip' attribute
    // Use the spread operator (...) to convert the NodeList returned by querySelectorAll into an array
    const tooltipTriggerList = [...document.querySelectorAll('[data-bss-tooltip]')];

    // Iterate over each tooltip trigger element and initialize a new Bootstrap Tooltip instance
    const tooltipList = tooltipTriggerList.map(tooltipTriggerEl => {
        // Ensure that Bootstrap's Tooltip component is available before trying to initialize it
        if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        } else {
            console.warn('Bootstrap Tooltip is not defined. Make sure Bootstrap JavaScript is loaded.');
            return null; // Return null for elements where Tooltip could not be initialized
        }
    }).filter(tooltip => tooltip !== null); // Filter out any null entries if Tooltip was not defined
});