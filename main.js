/******************
 * YOUR CODE HERE *
 ******************/

const newPerson = function (firstName = 'Anonymous', lastName = 'Person', age, married = false,){
  const person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    married, married,
    goingOn: function() {
    return Number(this.age) + 1;
                        },
    ageUp: function() {
      if (this.age) {
        return this.age++;
      }
                      },
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`;
    },
    marry: function(person2) {
      this.married = true;
      person2.married = true;
      this.spouseName = `${person2.firstName} ${person2.lastName}`;
      person2.spouseName = `${this.firstName} ${this.lastName}`;
    },
    divorce: function(person2) {
      this.married = false;
      person2.married = false;
      delete this.spouseName;
      delete person2.spouseName;

    }
  };

  return person;
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = {
  newPerson,
}
