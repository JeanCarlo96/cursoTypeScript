"use strict";
/* Interfaces */
function login() {
    return {
        username: 'admin',
        create_at: new Date(),
        superuser: true
    };
}
let data = login();
