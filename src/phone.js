function bindPhones() {
    function addUnderscore(number, order = 11) {
        if (number.length >= order) return number;
        return addUnderscore(number + '_');
    }

    document.querySelectorAll('[type="phone"]').forEach((input) => {
        input.addEventListener('input', () => {
            const phone = addUnderscore(input.value.replace(/\D/g, '').replace(/^8/g, '7'));
            input.value = `+${phone[0]}(${phone[1] + phone[2] + phone[3]})${phone[4] + phone[5]}-${phone[6] + phone[7]}-${phone[8] + phone[9] + phone[10]}`;
        })
    })
}
