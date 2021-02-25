function createNotification(text, isLight = true, className = 'primary') {
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';

    const el = document.createElement('div');
    el.className = `notification is-${className} ${(isLight) ? 'is-light' : ''}`;
    el.innerHTML = text;

    el.append(deleteBtn);
    document.querySelector('#notifications').append(el);

    el.timer = setTimeout(() => meltNotification(el), 2000);

    deleteBtn.addEventListener('click', () => {
        el.remove();
        clearTimeout(el.timer);
    })
}

function meltNotification(el) {
    el.classList.add('melt');
    el.timer = setTimeout(() => el.remove(), 1000)
}

function bindNotifications() {
    const notificationField = document.createElement('div');
    notificationField.id = 'notifications';
    document.body.append(notificationField);
}
