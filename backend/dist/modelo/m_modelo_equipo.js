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
class ModeloEquipoModelo extends driver_postgresql_1.default {
    constructor() {
        super();
        this.id_modelo_equipo = "";
        this.nombre_modelo_equipo = "";
        this.estatu_modelo_equipo = "";
        this.id_equipo = "";
        this.frecuencia_modelo_equipo = "";
    }
    setDatos(datos) {
        this.id_modelo_equipo = datos.id_modelo_equipo;
        this.nombre_modelo_equipo = datos.nombre_modelo_equipo;
        this.estatu_modelo_equipo = datos.estatu_modelo_equipo;
        this.id_equipo = datos.id_equipo;
        this.frecuencia_modelo_equipo = datos.frecuencia_modelo_equipo;
    }
    setIdModeloEquipo(id) {
        this.id_modelo_equipo = id;
    }
    setIdEquipo(id) {
        this.id_equipo = id;
    }
    registrar() {
        return __awaiter(this, void 0, void 0, function* () {
            const SQL = `INSERT INTO tmodelo(
                nombre_modelo_equipo,
                estatu_modelo_equipo,
                id_equipo,
                frecuencia_modelo_equipo
            )
            VALUES(
                '${this.nombre_modelo_equipo}',
                '${this.estatu_modelo_equipo}',
                ${this.id_equipo},
                '${this.frecuencia_modelo_equipo}'
            );
        `;
            return yield this.query(SQL);
        });
    }
    consultar() {
        return __awaiter(this, void 0, void 0, function* () {
            const SQL = `SELECT * FROM tmodelo WHERE id_modelo_equipo=${this.id_modelo_equipo};`;
            return yield this.query(SQL);
        });
    }
    consultarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            const SQL = `SELECT * FROM tmodelo;`;
            return yield this.query(SQL);
        });
    }
    actualizar() {
        return __awaiter(this, void 0, void 0, function* () {
            const SQL = `UPDATE tmodelo SET
            nombre_modelo_equipo='${this.nombre_modelo_equipo}',
            estatu_modelo_equipo='${this.estatu_modelo_equipo}',
            id_equipo=${this.id_equipo},
            frecuencia_modelo_equipo='${this.frecuencia_modelo_equipo}'
            WHERE 
            id_modelo_equipo=${this.id_modelo_equipo};
        `;
            return yield this.query(SQL);
        });
    }
    consultarPorEquipo() {
        return __awaiter(this, void 0, void 0, function* () {
            const SQL = `SELECT * FROM tmodelo WHERE id_equipo=${this.id_equipo};`;
            return yield this.query(SQL);
        });
    }
    consultarPorNombreModeloYEquipo(nombre_modelo_equipo) {
        return __awaiter(this, void 0, void 0, function* () {
            const SQL = `SELECT * FROM tmodelo WHERE  id_equipo=${this.id_equipo} AND nombre_modelo_equipo LIKE '%${nombre_modelo_equipo}%' `;
            return yield this.query(SQL);
        });
    }
    consultarPorNombr(nombre_modelo_equipo) {
        return __awaiter(this, void 0, void 0, function* () {
            const SQL = `SELECT * FROM tmodelo WHERE nombre_modelo_equipo LIKE '%${nombre_modelo_equipo}%' `;
            return yield this.query(SQL);
        });
    }
}
exports.default = ModeloEquipoModelo;
