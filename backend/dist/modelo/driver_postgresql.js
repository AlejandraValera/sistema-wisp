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
Object.defineProperty(exports, "__esModule", { value: true });
class DriverPostgreSQL {
    constructor() {
        const { Pool } = require("pg"), config = {
            user: "gabriel",
            host: "localhost",
            password: "stark",
            database: "wisp_code_camp"
        };
        this.database = new Pool(config);
    }
    conexion() {
        this.database.connect();
    }
    conexion2(sql) {
        return __awaiter(this, void 0, void 0, function* () {
            let datos;
            yield this.database.connect()
                .then((cliente) => __awaiter(this, void 0, void 0, function* () {
                console.log("----------Inicio---------");
                console.log("consulta sql =>>> ", sql);
                console.log("----------Fin------------");
                yield cliente.query(sql)
                    .then(res => {
                    cliente.release();
                    // console.log (res.rows [0]);
                    datos = res;
                })
                    .catch(e => {
                    cliente.release();
                    console.log(e.stack);
                });
            }))
                .finally(() => {
                setTimeout(() => {
                    this.database.end(() => {
                        console.log("cerrando la conexion con la base de datos");
                    });
                }, 1000);
            });
            return datos;
        });
    }
    query(sql) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.conexion2(sql);
        });
    }
}
exports.default = DriverPostgreSQL;
