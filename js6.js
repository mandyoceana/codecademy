var friends = new Object();

friends.steve = {
    firstName: 'Steve',
    lastName: 'Jobs',
    number: '(206) 333-3333',
    address: ['1', 'the road', 'the city', 'the country'],
};

friends.bill = {
    firstName: 'Bill',
    lastName: 'Gates',
    number: '(206) 555-5555',
    address: ['2', 'the road', 'the city', 'the country'],
};
    
    
var list = function(friends) {
    for (var key in friends) {
        console.log(key);
    }
};
    
var search = function(name) {
    for(var key in friends) {
        if(friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
};



list(friends);
search('Steve'); 
