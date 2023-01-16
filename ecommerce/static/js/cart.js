var updateCartButtons = document.getElementsByClassName('update-cart');

for (var i = 0; i < updateCartButtons.length; i++) {
  var button = updateCartButtons[i];
  button.addEventListener('click', function() {
    var product = this.dataset.product;
    var action = this.dataset.action;

    console.log(`Product: ${product} Action: ${action}`);

    console.log('USER:', user)
    if( user == 'AnonymousUser'){
        console.log('User is Anonymous')
    }else{
        updateUserOrder(product, action)
    }
  });
}

function updateUserOrder(product, action){
    console.log('User logged in')

    var url = '/update/'

    fetch(url, {
        method: 'POST', 
        headers: { 
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
            },
        body: JSON.stringify({'productId': product, 'action': action})
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log('data:', data)
        location.reload();

    })
    .catch((error) => {
        console.error(error);
    });
}