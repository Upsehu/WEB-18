// Display items from LoacalStorage array of objects

let inverstorsArr = JSON.parse(localStorage.getItem('investorsArr'));
console.log(inverstorsArr);

inverstorsArr.forEach(function(ele){
    
    let div = document.createElement('div');

    let avatar = document.createElement('img');
    avatar.setAttribute('src', ele.imageUrl);

    let name = document.createElement('h3');
    name.innerText = ele.name;

    let role = document.createElement('p');
    role.innerText = ele.position;

    let logo = document.createElement('img');
    logo.setAttribute ('src', ele.logoUrl);

    div.append(avatar, name, role, logo);

    document.getElementById('container').append(div);
})
