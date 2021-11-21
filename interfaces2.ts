/* Interfaces Dos */

interface UserData {
    readonly username: string
    create_at?: Date
    superuser?: boolean
    readonly persona: {
        name: string
        email: string

    }

    logout(): void,
    rename: (username: string) => void,
    saludame(nombre: string): void
}

function login (): UserData {
    return {
        username: 'admin',
        create_at: new Date(),
        superuser: true,
        persona: {
            name: 'Adimencio',
            email: 'foo@example.com'
        },
        logout() {
            console.log('Adiós')
        },
        rename(username) {
            console.log('TODO: Rename account')
        },
        saludame(nombre){
            console.log('Hola ' + nombre)
        }
    }
}

let data = login()

let l = login()
l.rename('Jean Carlo')
l.saludame('Juan Palomeque')
console.log(l.username)
l.persona.name = 'Hola'

// Validar 1
if(l.create_at) {
    l.create_at.toISOString()
}

//Validar 2
l.create_at?.toISOString()

//Validar 3, si o solo si, estamos seguros de que va a funcionar
l.create_at!.toISOString()

