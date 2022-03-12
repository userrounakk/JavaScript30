var memo = document.getElementById('memo')
var checkBoxes = document.querySelectorAll('input[type="checkbox');
var currentIndex, lastIndex;
var lastChecked;

checkBoxes.forEach(checkBox => checkBox.addEventListener('click', checked));

document.addEventListener('keyup', release)

function checked(e) {

    if (this.checked && e.shiftKey) {
        var n = 0
        for (checkBox of checkBoxes) {
            if (checkBox == this) currentIndex = n;
            if (checkBox == lastChecked) lastIndex = n;
            n++
        }
        if (lastIndex != undefined) {
            for (let i = lastIndex; lastIndex < currentIndex ? i < currentIndex : i > currentIndex; lastIndex < currentIndex ? i++ : i--) {
                checkBoxes[i].checked = true;
            }
        }
        lastChecked = this;
    }

}
function release(e) {
    if (e.keyCode == 16) {
        lastIndex = undefined;
        lastChecked = undefined;
    }
}