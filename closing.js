var today = new Date()
var open = ("Working Time 8:00 AM To 8:00 PM</span>");
var closed = ("We Are Closed</span>");
if (today == 0) display.innerHTML = 'closed';
if (today.getHours() >= 8 && today.getHours() < 20) {
    display.innerHTML = '';
} else {
    display.innerHTML = 'We Are Closed';
}
