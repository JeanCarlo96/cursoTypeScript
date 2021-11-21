/* Interfaces Dos */
var _a;
function login() {
    return {
        username: 'admin',
        create_at: new Date(),
        superuser: true,
        persona: {
            name: 'Adimencio',
            email: 'foo@example.com'
        },
        logout: function () {
            console.log('Adiós');
        },
        rename: function (username) {
            console.log('TODO: Rename account');
        },
        saludame: function (nombre) {
            console.log('Hola ' + nombre);
        }
    };
}
var data = login();
var l = login();
l.rename('Jean Carlo');
l.saludame('Juan Palomeque');
console.log(l.username);
l.persona.name = 'Hola';
// Validar 1
if (l.create_at) {
    l.create_at.toISOString();
}
//Validar 2
(_a = l.create_at) === null || _a === void 0 ? void 0 : _a.toISOString();
//Validar 3, si o solo si, estamos seguros de que va a funcionar
l.create_at.toISOString();
