document.querySelector('form').addEventListener('submit', addDetails)

let investorsArr = JSON.parse(localStorage.getItem('investorsArr')) || [];

function addDetails(event){

    event.preventDefault();

    let investorObj = {
        imageUrl : form.imageURL.value,
        name : form.name.value,
        position: form.position.value,
        logoUrl : form.logoURL.value
    }

    investorsArr.push(investorObj);

    localStorage.setItem('investorsArr', JSON.stringify(investorsArr));
    console.log(investorsArr);

}