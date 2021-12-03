"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Importando Módulos */
/*import {Producto, sumarTotal} from "./almacen"


function procesarPedido(p: Producto[]){
    p[0].nombre
    console.log("Procesando...")
}*/
const impuestos_1 = __importDefault(require("./impuestos"));
//import * as impuestos from './impuestos';
console.log('El IVA es ' + (0, impuestos_1.default)(10.99));
