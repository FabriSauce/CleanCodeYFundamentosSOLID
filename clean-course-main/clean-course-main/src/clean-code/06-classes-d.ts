(() => {

    // Aplicando el principio de responsabilidad única
    // Priorizar la composición fernte a la herencia ( hay que tratar de evitar los extends porque ellos añaden una capa extra de complicidad, a menos que sea extrictamente necesario)

    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate : Date;
        gender    : Gender;
        name      : string;
    }
// acá se aplica el principio de responsabilidad única
    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor({ name, gender, birthdate }: PersonProps ){
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }


    interface UserProps {
        email     : string;
        role      : string;
    }

    class User{
        
        public email        : string;
        public role         : string;
        public lastAccess   : Date;

        constructor({           
            email,
            role,
        }: UserProps ) {
//            super({ name, gender, birthdate }); no necesito llamar al super porque no hay herencia
            this.lastAccess = new Date();
            this.email = email;
            this.role  = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
        lastOpenFolder   : string;
        workingDirectory : string;
    }

    class Settings {

        public workingDirectory: string;
        public lastOpenFolder  : string;

        constructor({
            workingDirectory,
            lastOpenFolder,   
        }: SettingsProps ) {
//            super({ email, role, name, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
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
// aca priorizamos la composición
    class UserSettings{
        public person   : Person;
        public user     : User;
        public settings : Settings;

        constructor({name, gender, birthdate, email, role, lastOpenFolder, workingDirectory}: UserSettingsProps){
            this.person = new Person({name, gender, birthdate})
            this.user = new User({email, role})
            this.settings = new Settings({lastOpenFolder,workingDirectory })
        }
    }


    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });


})();