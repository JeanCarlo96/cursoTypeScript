/* Interfaces */

interface UserData {
    username: string,
    create_at: Date,
    superuser: boolean
}

function login (): UserData {
    return {
        username: 'admin',
        create_at: new Date(),
        superuser: true
    }
}

let data = login()