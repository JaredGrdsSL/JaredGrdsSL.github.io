// ------------------------------------Tabs------------------------------------------
function selectTab(whichTab = "") {
    for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
        if (document.getElementsByTagName("li")[i].innerText === whichTab) {
            document.getElementsByTagName("li")[i].classList.add("selected");
        } else {
            document.getElementsByTagName("li")[i].classList.remove("selected");
        }
    }

    if (document.getElementById(whichTab).classList.contains("hidden")) {
        for (let i = 0; i < document.getElementsByClassName("subMain").length; i++) {
            document.getElementsByClassName("subMain")[i].classList.add("hidden");
            document.getElementsByClassName("subHelp")[i].classList.add("hidden");
        }
        document.getElementById(whichTab).classList.remove("hidden");
        document.getElementById(whichTab + "Help").classList.remove("hidden");
    }
}

// ------------------------------------Modals------------------------------------------
function openModal(data) {
    let whatModal = document.querySelector(data);
    whatModal.showModal();
}

// This code makes it so clicking off of any modal closes all modals
for (let i = 0; i < document.getElementsByTagName('dialog').length; i++) {
    let allDialog = document.getElementsByTagName('dialog')[i];
    allDialog.addEventListener('click', function (event) {
        let rect = allDialog.getBoundingClientRect();
        let isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            allDialog.close();
        }
    });
}