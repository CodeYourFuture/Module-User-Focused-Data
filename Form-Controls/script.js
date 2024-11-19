const deliveryDateInput = document.getElementById('delivery-date');
const today = new Date();
const futureDate = new Date();
futureDate.setDate(today.getDate() + 28); // Set max to 28 days in the future

// Format the date to 'YYYY-MM-DD'
const formatDate = (date) => date.toISOString().split('T')[0];

// Set the min and max attributes
deliveryDateInput.min = formatDate(today);
deliveryDateInput.max = formatDate(futureDate);