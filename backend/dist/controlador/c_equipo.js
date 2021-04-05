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
const m_equipo_1 = __importDefault(require("../modelo/m_equipo"));
let EquipoControlador = {
    registrar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let respuesta_cliente = {
            mensaje: "",
            estado: false,
            datos: []
        };
        let { equipo } = req.body;
        let mEquipo = new m_equipo_1.default();
        mEquipo.setDatos(equipo);
        let result_equipo = yield mEquipo.registrar();
        // console.log("datos =>>>> ",result_equipo)
        if (result_equipo.rowCount > 0) {
            respuesta_cliente.mensaje = "equipo registrado de forma exitosa";
            respuesta_cliente.estado = true;
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify(respuesta_cliente));
            res.end();
        }
        else {
            respuesta_cliente.mensaje = "error al registar el equipo";
            respuesta_cliente.estado = false;
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify(respuesta_cliente));
            res.end();
        }
    }),
    consultar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let respuesta_cliente = {
            mensaje: "",
            estado: false,
            datos: []
        };
        let { id } = req.params;
        let mEquipo = new m_equipo_1.default();
        mEquipo.setId(id);
        let result_equipo = yield mEquipo.consultar();
        if (result_equipo.rowCount > 0) {
            respuesta_cliente.mensaje = "equipo encontrado";
            respuesta_cliente.estado = true;
            respuesta_cliente.datos = result_equipo.rows[0];
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify(respuesta_cliente));
            res.end();
        }
        else {
            respuesta_cliente.mensaje = "no se encontro el quipo";
            respuesta_cliente.estado = false;
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify(respuesta_cliente));
            res.end();
        }
    })
};
exports.default = EquipoControlador;
