"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const driver_postgresql_1 = __importDefault(require("./driver_postgresql"));
class EquipoModelo extends driver_postgresql_1.default {
    constructor() {
        super();
        this.id_equipo = "";
        this.nombre_equipo = "";
        this.estatus_equipo = "";
    }
    setDatos(datos) {
        this.id_equipo = datos.id_equipo;
        this.nombre_equipo = datos.nombre_equipo;
        this.estatus_equipo = datos.estatus_equipo;
    }
    setId(id) {
        this.id_equipo = id;
    }
    registrar() {
        return __awaiter(this, void 0, void 0, function* () {
            const SQL = `INSERT INTO tequipo(
            nombre_equipo,
            estatus_equipo
            ) 
            VALUES(
            '${this.nombre_equipo}',
            '${this.estatus_equipo}'
            );`;
            return yield this.query(SQL);
        });
    }
    consultar() {
        return __awaiter(this, void 0, void 0, function* () {
            const SQL = `SELECT * FROM tequipo WHERE id_equipo=${this.id_equipo};`;
            return yield this.query(SQL);
        });
    }
    actualizar() {
        return __awaiter(this, void 0, void 0, function* () {
            const SQL = `UPDATE tequipo SET
            nombre_equipo='${this.nombre_equipo}',
            estatus_equipo='${this.estatus_equipo}'
            WHERE id_equipo=${this.id_equipo};`;
            return yield this.query(SQL);
        });
    }
    consultarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            const SQL = `SELECT * FROM tequipo;`;
            return yield this.query(SQL);
        });
    }
}
exports.default = EquipoModelo;
