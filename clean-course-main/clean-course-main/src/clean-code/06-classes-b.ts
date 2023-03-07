(() =>{

    // no aplicando el principio de responsabilidad única
    
    type Gender = 'M'|'F';
    
     class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ){}
     }


     // User tiene todas las características de la persona pero a su vez tiene otras que el usuario solamente tiene
     class User extends Person {

        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            
            name: string,
            gender: Gender,
            birthdate: Date,

        ){
            // el super me permite a mi , mandar a llamar el constructor del padre
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;

        }
     }

     class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder  : string,
            email                  : string,
            role                   : string,
            name                   : string,
            gender                 : Gender,
            birthdate              : Date,
        ) {
            super(email, role, name, gender, birthdate )
        }
    }

     const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'fabricio@gmail.com',
        'Admin',
        'Fabricio',
        'M',
        new Date ('1998-09-25')
     );

     console.log({UserSettings})
    
    })();