
/* navigate to the categories */
function goToCategory(category) {
    const element = document.getElementById(`category-${category}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


/* Switch delivery pickup */
function toggleDeliverPickUp(selection) {
    document.getElementById('deliver').classList.remove('background_white');
    document.getElementById('pickup').classList.remove('background_white');
    if (selection === 'deliver') {
        document.getElementById('deliver').classList.add('background_white');
    } else if (selection === 'pickup') {
        document.getElementById('pickup').classList.add('background_white');
    }
}