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
class ClienteModelo extends driver_postgresql_1.default {
    constructor() {
        super();
        this.cedula_cliente = "";
        this.nombres_cliente = "";
        this.apellidos_cliente = "";
        this.correo_clinte = "";
        this.telefono_movil_cliente = "";
        this.telefono_local_cliente = "";
        this.direccion_cliente = "";
        this.mac_antena_cliente = "";
        this.fecha_registro_cliente = "";
        this.estatu_cliente = "";
        this.link_google_map_cliente = "";
        this.id_modelo_equipo = "";
    }
    setDatos(cliente) {
        this.cedula_cliente = cliente.cedula_cliente;
        this.nombres_cliente = cliente.nombres_cliente;
        this.apellidos_cliente = cliente.apellidos_cliente;
        this.correo_clinte = cliente.correo_clinte;
        this.telefono_movil_cliente = cliente.telefono_movil_cliente;
        this.telefono_local_cliente = cliente.telefono_local_cliente;
        this.direccion_cliente = cliente.direccion_cliente;
        this.mac_antena_cliente = cliente.mac_antena_cliente;
        this.fecha_registro_cliente = cliente.fecha_registro_cliente;
        this.estatu_cliente = cliente.estatu_cliente;
        this.link_google_map_cliente = cliente.link_google_map_cliente;
        this.id_modelo_equipo = cliente.id_modelo_equipo;
    }
    setCedula(id) {
        this.cedula_cliente = id;
    }
    registrar() {
        return __awaiter(this, void 0, void 0, function* () {
            const SQL = `INSERT INTO tcliente(
            cedula_cliente,
            nombres_cliente,
            apellidos_cliente,
            correo_clinte,
            telefono_movil_cliente,
            telefono_local_cliente,
            direccion_cliente,
            mac_antena_cliente,
            fecha_registro_cliente,
            estatu_cliente,
            link_google_map_cliente,
            id_modelo_equipo
        ) 
        VALUES(
            '${this.cedula_cliente}',
            '${this.nombres_cliente}',
            '${this.apellidos_cliente}',
            '${this.correo_clinte}',
            '${this.telefono_movil_cliente}',
            '${this.telefono_local_cliente}',
            '${this.direccion_cliente}',
            '${this.mac_antena_cliente}',
            '${this.fecha_registro_cliente}',
            '${this.estatu_cliente}',
            '${this.link_google_map_cliente}',
            ${this.id_modelo_equipo}
        )`;
            return yield this.query(SQL);
        });
    }
}
exports.default = ClienteModelo;
