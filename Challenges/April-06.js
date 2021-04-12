
let users = [
    {
        name: 'Jeremy Scandanavia',
        age: 32,
        hobbies: ['skiing', 'art', 'gardening'],
        hasChildren: false
    },
    {
        name: 'Urasue Piper',
        age: 26,
        hobbies: ['acting', 'yoga', 'woodshop'],
        hasChildren: false
    },
    {
        name: 'Ahmed Smith',
        age: 23,
        hobbies: ['reading', 'farming', 'bowling'],
        hasChildren: true
    },
    {
        name: 'Flora Alonso',
        age: 23,
        hobbies: ['cooking', 'cars', 'sleeping'],
        hasChildren: false
    },
    {
        name: 'Wanda Nitt',
        age: 55,
        hobbies: ['racing', 'acting', 'reading'],
        hasChildren: false
    },
    {
        name: 'George Chen',
        age: 22,
        hobbies: ['sewing', 'witchcraft', 'writing'],
        hasChildren: false
    },
    {
        name: 'Sophie Castavet',
        age: 34,
        hobbies: ['soccer', 'bowling', 'swimming'],
        hasChildren: true
    },
    {
        name: 'Wayne Cross',
        age: 25,
        hobbies: ['music', 'eating', 'bird watching'],
        hasChildren: false
    },
    {
        name: 'Sarah Titinius',
        age: 57,
        hobbies: ['archery', 'tennis', 'video games'],
        hasChildren: false
    },
    {
        name: 'Mabaa Aziz',
        age: 21,
        hobbies: ['skiing', 'art', 'farming'],
        hasChildren: false
    },
    {
        name: 'Sophie Castavet',
        age: 55,
        hobbies: ['eating', 'cars', 'chess'],
        hasChildren: true
    },
    {
        name: 'Matthew Garcia',
        age: 41,
        hobbies: ['baking', 'art', 'tennis'],
        hasChildren: false
    },
    {
        name: 'Milo Fortuna',
        age: 30,
        hobbies: ['paintball', 'music', 'gardening'],
        hasChildren: false
    },
    {
        name: 'Sophie Castavet',
        age: 21,
        hobbies: ['video games', 'photography', 'coding'],
        hasChildren: true
    },
    {
        name: 'Maxwell Roa',
        age: 40,
        hobbies: ['skiing', 'art', 'gardening'],
        hasChildren: true
    },
    {
        name: 'William Mendoza',
        age: 37,
        hobbies: ['chess', 'hiking', 'gardening'],
        hasChildren: false
    }, 
    {
        name: 'Jack Medina',
        age: 77,
        hobbies: ['hiking', 'bird watching', 'cards'],
        hasChildren: false
    },
    {
        name: 'Kian Sharma',
        age: 24,
        hobbies: ['sleeping', 'eating', 'cards'],
        hasChildren: false
    },
    {
        name: 'Jetta Sepperin',
        age: 27,
        hobbies: ['woodshop', 'coding', 'bowling'],
        hasChildren: true
    },
    {
        name: 'Jovena Radcliff',
        age: 38,
        hobbies: ['chess', 'art', 'bird watching'],
        hasChildren: true
    },
    {
        name: 'Jolanta Maryam',
        age: 52,
        hobbies: ['hiking', 'sleeping', 'cooking'],
        hasChildren: false
    },
    {
        name: 'Deborah Beasley',
        age: 25,
        hobbies: ['witchcraft', 'art', 'gardening'],
        hasChildren: false
    },
    {
        name: 'Ethan Delarosa',
        age: 46,
        hobbies: ['coding', 'video games', 'baking'],
        hasChildren: false
    },
    {
        name: 'Erica Davila',
        age: 32,
        hobbies: ['yoga', 'soccer', 'canoeing'],
        hasChildren: false
    },
    {
        name: 'Ernest Rivera',
        age: 33,
        hobbies: ['cards', 'baking', 'coding'],
        hasChildren: true
    },
]



//Challenge 2
// You are working at a popular social networking site, and your 
// boss wants you to create a new addition to the app where parents 
// can can talk about their experiences. 
// In this challenge you will
// - Create a new array to store our users marked as parents, parentArray
// - Loop through the Users, using whichever type of loop you'd like
// - Create a new object inside the loop, to hold key value pairs, parentName, 
// parentAge, and hobbies and set the values to the values we get back from
// our loop
// - push the new object to our parentArray
    

// After you get back your new parent array...
// - Create a new array to store new users in
// - Using any method of itteration, map over the 'parentArray' array.
// - Use the .push() array method, to push all Users above the age of 30, 
// who's hobbies include 'gardening' 


let parentArray = [];

for(let i = 0; i < Users.length; i++){
    if(Users[i].hasChildren){
        let parentObj = {
            parentName: Users[i].name,
            parentAge: Users[i].age,
            hobbies: Users[i].hobbies
        };
        parentArray.push(parentObj);
    }
    
}

let gardeningArray = [];
parentArray.forEach((parent) => {
    if(parent.hobbies.includes('gardening') && parent.parentAge > 30){
        gardeningArray.push(parent)
    }
})

console.log(gardeningArray)