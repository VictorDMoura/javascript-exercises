const findTheOldest = function(objects) {
    const currentYear = new Date().getFullYear();
    let oldestPerson = objects.reduce((oldest, person) => {
        const oldestAge = (oldest.yearOfDeath ? oldest.yearOfDeath : currentYear) - oldest.yearOfBirth;
        const personAge = (person.yearOfDeath ? person.yearOfDeath : currentYear) - person.yearOfBirth;
        return personAge > oldestAge ? person : oldest;
    });
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
