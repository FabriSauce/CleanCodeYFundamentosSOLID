(() =>{

    // no aplicando aún el principio de responsabilidad única
    
    type Gender = 'M'|'F';


    //idealmente...

    interface PersonProps{
        name        : string,
        gender      : Gender,
        birthdate   : Date

    }
    
     class Person {
        public name         : string;
        public gender       : string;
        public birthdate    : Date;

        constructor({ name, gender, birthdate }: PersonProps){
            this.name       = name;
            this.gender     = gender;
            this.birthdate  = birthdate
        }
     }


     // User tiene todas las características de la persona pero a su vez tiene otras que el usuario solamente tiene

     interface UserProps {
        email       : string;
        role        : string;
        name        : string;
        gender      : Gender;
        birthdate   : Date

       
     }

     class User extends Person {

        public email            : string;
        public role             : string;
        public lastAccess       : Date;

        constructor({ email, role, name, gender, birthdate }: UserProps){
            // el super me permite a mi , mandar a llamar el constructor del padre
            super({ name, gender, birthdate });
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;

        }
     }

     interface UserSettingsProps{
            workingDirectory        : string,
            lastOpenFolder          : string,
            email                   : string;
            role                    : string;
            name                    : string;
            gender                  : Gender;
            birthdate               : Date
     }

     class UserSettings extends User {

        public workingDirectory         : string;
            public lastOpenFolder       : string;

        constructor({workingDirectory, lastOpenFolder, email, role, name, gender, birthdate}:UserSettingsProps) {

            super({email, role, name, gender, birthdate } )
            this.workingDirectory   = workingDirectory;
            this.lastOpenFolder     = lastOpenFolder

        }
    }

     const userSettings = new UserSettings({
         workingDirectory: '/usr/home',
         lastOpenFolder: '/home',
         email: 'fabricio@gmail.com',
         role: 'Admin',
         name: 'Fabricio',
         gender:'M',
         birthdate: new Date ('1998-09-25')

     }
     );

     console.log({UserSettings})
    
    })(); 