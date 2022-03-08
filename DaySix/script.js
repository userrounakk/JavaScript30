var endpoint = window.location.origin + '/DaySix/districts.json';
var search = document.querySelector('#search-field');
var listDisp = document.querySelector('#list');

search.addEventListener('focus', displayList);
search.addEventListener('blur', removeList);

//fetch district list
var districts = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => districts.push(...data));


//Function that shortlists the district according to search
function matchingDistricts(findDistrict, districtList) {
    var shortListed = districtList.filter(district => {
        var regex = new RegExp(findDistrict, 'gi');
        return district.match(regex);
    })
    return shortListed;
};


//Function to display the search results
function searchDis() {
    districtsList = matchingDistricts(search.value, districts);

    //Remove initial search results
    if (document.querySelector('.list-item')) {
        let collection = document.querySelectorAll('.list-item');
        collection.forEach(element => {
            element.remove();
        })
    }
    let listItem;
    districtsList.forEach(dis => {
        let regex = new RegExp(search.value, 'gi');
        var disName = dis.replace(regex, `<span class="hl">${search.value}</span>`)
        listItem = document.createElement('div');
        listItem.classList.add('list-item')
        listItem.innerHTML = disName;
        listDisp.appendChild(listItem)
    })
}

function displayList() {
    districts.forEach(dis => {
        listItem = document.createElement('div');
        listItem.classList.add('list-item')
        listItem.textContent = dis;
        listDisp.appendChild(listItem)
    })
}

function removeList() {
    if (document.querySelector('.list-item')) {
        let collection = document.querySelectorAll('.list-item');
        collection.forEach(element => {
            element.remove();
        })
    }
}

