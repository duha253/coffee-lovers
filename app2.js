

alert('Hello, its our unique page of coffee lovers');

var user = prompt('whats your age?');


if (user < 15) {
    alert('We dont recommend getting too much caffeine');
} else {
    alert('welcome to become one of ours');
};

var userOrder = prompt('what would you like to order we have 1.Espresso ,2.Cappuccino ,3.Americano ,4.Mocha ,5.Cafe au Lait ', 'place your order');

while (!(userOrder == 'Espresso' || userOrder == 'Cappuccino' || userOrder == 'Americano' || userOrder == 'Mocha' || userOrder == 'Cafe au Lait')) {
    userOrder = prompt('pleas enter the correct item')

}
var userInputs = prompt('how many do you want?')
for (var i = 0; i < userInputs; i++) {
    if (userOrder == 'Espresso') {
        image = '< img src="https://lh3.googleusercontent.com/proxy/8qHPdg-tKnVKJrV3FJn4ulWtCJKW7Pn4WVQCkHtirUwfYv_1fe5kJrdv2mbuE-itcrpt9gi5voA7ZmBkg1XPLS2Z0UK0NvZqembIeR9nAXo_Fvkf">'

        document.write(image);

    } else if (userOrder == 'Cappuccino') {
        image = '<img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjybqyzyiIPKEmTHSw4matD0FynynLR34xNQ&usqp=CAU">'

        document.write(image);

    } else if (userOrder == 'Americano') {

        image = '<img src ="https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-recipes-americano-1571757341897.jpg">'
        document.write(image);

    } else if (userOrder == 'Mocha') {

        image = '<img src ="https://food-images.files.bbci.co.uk/food/recipes/the_perfect_mocha_coffee_29100_16x9.jpg">'
        document.write(image);

    } else if (userOrder == 'Cafe au Lait') {
        image = '<img src =" https://media-cdn.tripadvisor.com/media/photo-s/18/93/48/08/cafe-late.jpg">'
        document.write(image);
     }

}

