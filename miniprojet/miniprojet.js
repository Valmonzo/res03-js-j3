function countActiveUsers(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i].isActive === true) {
            count += 1;
        }
    }
    return count;
}

function hasBlueEyes(array) {
    let count = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i].isActive === true && array[i].eyeColor === "blue") {
            count += 1
        }
    }
    return count
}

function getActiveUsersAges(array) {
    let ageTab = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].isActive === true) {
            ageTab.push(array[i].age);
        }
    }

    return ageTab;
}

function computeActiveUsersAverageAge(ages) {
    let average = 0;

    for (let i = 0; i < ages.length; i++) {
        average += ages[i];
    }

    return average / ages.length;



}

function getMultronUsersToChangeForCenturia(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i].company === "MULTRON") {
            array[i].company = "CENTURIA";
            count++;
        }
    }
    return count;
}


function getBrowEyesUsersWhoDoesntWorkForCenturia(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++)
        if (array[i].eyeColor === "brown" && array[i].company !== "CENTURIA") {
            count++;
        }
    return count;
}


function countInactiveUsers(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++)
        if (array[i].isActive === false) {
            count++;
        }

    return count;
}

function getEyesColor(array, color) {
    let count = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].eyeColor === color) {
            count.push(array[i]);
        }
    }

    return count;
}




let users = [{
        id: 0,
        isActive: false,
        age: 24,
        eyeColor: "green",
        name: "Marsh Obrien",
        company: "CENTURIA"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        eyeColor: "green",
        name: "Rios Gibson",
        company: "MULTRON"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        eyeColor: "brown",
        name: "Morgan Buchanan",
        company: "CENTURIA"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        eyeColor: "brown",
        name: "Franklin Dyer",
        company: null
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Keller Pitts",
        company: "CENTURIA"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        eyeColor: "brown",
        name: "Davenport Maddox",
        company: "MULTRON"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        eyeColor: "brown",
        name: "Judith Graves",
        company: null
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        eyeColor: "blue",
        name: "Hoffman Hess",
        company: "CENTURIA"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        eyeColor: "blue",
        name: "Sheena Goff",
        company: "MULTRON"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        eyeColor: "brown",
        name: "Rose Lawrence",
        company: "EVENTIX"
    },
    {
        id: 10,
        isActive: false,
        age: 35,
        eyeColor: "blue",
        name: "Alston Goodman",
        company: "CENTURIA"
    },
    {
        id: 11,
        isActive: true,
        age: 28,
        eyeColor: "brown",
        name: "Nannie Berry",
        company: null
    },
    {
        id: 12,
        isActive: true,
        age: 27,
        eyeColor: "blue",
        name: "Lynette Jackson",
        company: "CENTURIA"
    },
    {
        id: 13,
        isActive: false,
        age: 23,
        eyeColor: "blue",
        name: "Samantha Garrett",
        company: "EVENTIX"
    },
    {
        id: 14,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Grimes Savage",
        company: "CENTURIA"
    },
    {
        id: 15,
        isActive: false,
        age: 31,
        eyeColor: "green",
        name: "Atkinson Kirby",
        company: null
    },
    {
        id: 16,
        isActive: false,
        age: 38,
        eyeColor: "green",
        name: "Jami Burgess",
        company: "CENTURIA"
    },
    {
        id: 17,
        isActive: true,
        age: 31,
        eyeColor: "blue",
        name: "Sallie Albert",
        company: "CENTURIA"
    },
    {
        id: 18,
        isActive: false,
        age: 26,
        eyeColor: "blue",
        name: "Ora Hobbs",
        company: "EVENTIX"
    },
    {
        id: 19,
        isActive: true,
        age: 30,
        eyeColor: "blue",
        name: "Pruitt Sellers",
        company: "CENTURIA"
    }
];

// Première étape




console.log(`We currently have ${ countActiveUsers(users) } active users.`);

// Deuxième étape




console.log(`Out of our currently ${countActiveUsers(users)} active users, ${hasBlueEyes(users)} have blue eyes.`);


// Troisième étape

//Fonction qui récupère l'âge des users actifs.





//Fonction qui calcule la moyenne des âges.





console.log(`Out of our currently ${countActiveUsers(users)} active users, the average age is ${computeActiveUsersAverageAge(getActiveUsersAges(users))}.`);


// Quatrième étape





console.log(`${getMultronUsersToChangeForCenturia(users)} user companies have been changed from MULTRON to CENTURIA.`);


// Cinquième étape





console.log(`${getBrowEyesUsersWhoDoesntWorkForCenturia(users)} users with brown eyes do not work at CENTURIA`);


console.log(`Out of our brown eyed users ${countActiveUsers(getEyesColor(users, "brown"))} are active and ${countInactiveUsers(getEyesColor(users, "brown"))} are inactive`);

console.log(`Out of our green eyed users ${countActiveUsers(getEyesColor(users, "green"))} are active and ${countInactiveUsers(getEyesColor(users, "green"))} are inactive`);

console.log(`Out of our blue eyed users ${countActiveUsers(getEyesColor(users, "blue"))} are active and ${countInactiveUsers(getEyesColor(users, "blue"))} are inactive`);
