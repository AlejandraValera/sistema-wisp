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
        let { equipo } = req.body;
        let mEquipo = new m_equipo_1.default();
        mEquipo.setDatos(equipo);
        let result_equipo = yield mEquipo.registrar();
        // console.log("datos =>>>> ",result_equipo)
        if (result_equipo.rowCount > 0) {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: "equipo registrado",
                estado: true
            }));
            res.end();
        }
        else {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: "error al registar",
                estado: false
            }));
            res.end();
        }
    }),
    consultar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let { id } = req.params;
        let mEquipo = new m_equipo_1.default();
        mEquipo.setId(id);
        let result_equipo = yield mEquipo.consultar();
        if (result_equipo.rowCount > 0) {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: "equipo encontrado",
                estado: true,
                datos: result_equipo.rows[0]
            }));
            res.end();
        }
        else {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: "no se encontro el equipo",
                estado: false
            }));
            res.end();
        }
    }),
    actualizar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let respuesta_cliente = {
            mensaje: "",
            estado: false,
            datos: []
        };
        let { equipo } = req.body;
        let { id } = req.params;
        let mEquipo = new m_equipo_1.default();
        mEquipo.setId(id);
        mEquipo.setDatos(equipo);
        let result_equipo = yield mEquipo.actualizar();
        if (result_equipo.rowCount > 0) {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: "equipo actualizado",
                estado: true,
                datos: result_equipo.rows[0]
            }));
            res.end();
        }
        else {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: "no se encontro el quipo",
                estado: false
            }));
            res.end();
        }
        // let result_equipo:QueryResult=await mEquipo.
    }),
    consultarTodos: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let mEquipo = new m_equipo_1.default();
        let result_equipo = yield mEquipo.consultarTodos();
        if (result_equipo.rowCount > 0) {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: "consulta completada",
                estado: true,
                datos: result_equipo.rows
            }));
            res.end();
        }
        else {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: "no tienes equipos almacenados",
                estado: false
            }));
            res.end();
        }
    }),
    consultarPorNombre: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let { nombre } = req.params;
        let mEquipo = new m_equipo_1.default();
        let result_equipo = yield mEquipo.consultarPorNombre(nombre);
        if (result_equipo.rowCount > 0) {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: `cosnultar completada`,
                estado: true,
                datos: result_equipo.rows
            }));
            res.end();
        }
        else {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: `no se a encontrado ningun equipo con el nombre de ${nombre}`,
                estado: false
            }));
            res.end();
        }
    })
};
exports.default = EquipoControlador;
