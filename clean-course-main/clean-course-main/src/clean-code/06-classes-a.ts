(() =>{

// no aplicando el principio de responsabilidad única

//forma larga de hacer una clase en typeScript

type Gender = 'M'|'F';

 class Person{
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor(name: string, gender: Gender, birthdate: Date){
        this.name = name;
        this.gender = gender;
        this.birthdate = birthdate;
    }
 }

 const newPerson = new Person('Fabricio', 'M', new Date('1998-01-25'));
 console.log({newPerson});


 // forma corta

 /* class Person {
    constructor(
        public name: string,
        public gender: Gender,
        public birthdate: Date
    ){}
 }
 const newPerson = new Person('Fabricio', 'M', new Date('1998-01-25'));
 console.log({newPerson}); */




})();