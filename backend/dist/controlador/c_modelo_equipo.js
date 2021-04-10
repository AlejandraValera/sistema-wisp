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
const m_modelo_equipo_1 = __importDefault(require("../modelo/m_modelo_equipo"));
let modeloEquipoControlador = {
    registrar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let { modelo } = req.body;
        let mModeloEquipo = new m_modelo_equipo_1.default();
        mModeloEquipo.setDatos(modelo);
        let result_modelo = yield mModeloEquipo.registrar();
        if (result_modelo.rowCount > 0) {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: "modelo registrado",
                estado: true
            }));
            res.end();
        }
        else {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: "error al registrar modelo",
                estado: false
            }));
            res.end();
        }
    }),
    consultar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let { id } = req.params;
        let mModeloEquipo = new m_modelo_equipo_1.default();
        mModeloEquipo.setIdModeloEquipo(id);
        let result_modelo = yield mModeloEquipo.consultar();
        if (result_modelo.rowCount > 0) {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: "consulta completada",
                estado: true,
                datos: result_modelo.rows
            }));
            res.end();
        }
        else {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: "el modelo no a sido encontrado",
                estado: false
            }));
            res.end();
        }
    }),
    consultarTodos: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let mModeloEquipo = new m_modelo_equipo_1.default();
        let result_modelo = yield mModeloEquipo.consultarTodos();
        if (result_modelo.rowCount > 0) {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: "consultar completada",
                estado: true,
                datos: result_modelo.rows
            }));
            res.end();
        }
        else {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: "error al consultar no hay nada en la base de datos",
                estado: false
            }));
            res.end();
        }
    }),
    actualizar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let { modelo } = req.body;
        let { id } = req.params;
        let mModeloEquipo = new m_modelo_equipo_1.default();
        mModeloEquipo.setDatos(modelo);
        let result_modelo = yield mModeloEquipo.actualizar();
        if (result_modelo.rowCount > 0) {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: "actualización completada",
                estado: true
            }));
            res.end();
        }
        else {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: "error al actualizar, no se encontrado el modelo a actualizar",
                estado: false
            }));
            res.end();
        }
    })
};
exports.default = modeloEquipoControlador;
