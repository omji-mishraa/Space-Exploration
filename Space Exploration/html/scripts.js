let currentVisibleContent = null;

function toggleContent(contentId) {
    const content = document.getElementById(contentId);

    // If the clicked content is already visible, hide it
    if (content === currentVisibleContent) {
        content.style.display = 'none';
        currentVisibleContent = null;
    } else {
        // Hide the previously visible content
        if (currentVisibleContent) {
            currentVisibleContent.style.display = 'none';
        }

        // Show the clicked content
        content.style.display = 'block';
        currentVisibleContent = content;
    }
}
function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    const allContents = document.querySelectorAll('.content'); // Select all content elements

    // Hide all contents first
    allContents.forEach((item) => {
        if (item.id !== contentId) {
            item.style.display = 'none'; // Hide other content sections
        }
    });

    // Toggle the selected content
    if (content.style.display === 'block') {
        content.style.display = 'none'; // If already open, close it
    } else {
        content.style.display = 'block'; // Open the selected content
    }
}
/*test*/
function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    const allContents = document.querySelectorAll('.content');

    // Hide all contents first
    allContents.forEach((item) => {
        item.style.display = 'none'; // Hide all content sections
    });

    // Toggle the selected content
    if (content.style.display === 'block') {
        content.style.display = 'none'; // If already open, close it
    } else {
        content.style.display = 'block'; // Open the selected content
    }
}