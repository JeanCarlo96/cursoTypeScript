/* Interfaces */
function login() {
    return {
        username: 'admin',
        create_at: new Date(),
        superuser: true
    };
}
var data = login();
