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
const m_cliente_1 = __importDefault(require("../modelo/m_cliente"));
const m_modelo_equipo_1 = __importDefault(require("../modelo/m_modelo_equipo"));
const clienteControlador = {
    registrar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let { cliente } = req.body;
        let modeloEquipoModelo = new m_modelo_equipo_1.default();
        modeloEquipoModelo.setIdModeloEquipo(cliente.id_modelo_equipo);
        let modelo_result = yield modeloEquipoModelo.consultar();
        if (modelo_result.rowCount > 0) {
            let clienteModelo = new m_cliente_1.default();
            clienteModelo.setDatos(cliente);
            let clienteResult = yield clienteModelo.registrar();
            if (clienteResult.rowCount > 0) {
                res.writeHead(200, "'content-type':application/json");
                res.write(JSON.stringify({
                    mensaje: "cliente registrados exitosamente",
                    estado: true
                }));
                res.end();
            }
            else {
                res.writeHead(200, "'content-type':application/json");
                res.write(JSON.stringify({
                    mensaje: "no se puedo registrar el cliente",
                    estado: false
                }));
                res.end();
            }
        }
        else {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: "error al registrar al cliente, por que este modelo de equipo no esta en la base de",
                estado: false
            }));
            res.end();
        }
    }),
    consultar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let { id_cedula } = req.params;
        let clienteModelo = new m_cliente_1.default();
        clienteModelo.setCedula(id_cedula);
        let clienteResult = yield clienteModelo.consultar();
        if (clienteResult.rowCount > 0) {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: "cliente consultado exitosamente",
                estado: true,
                datos: clienteResult.rows
            }));
            res.end();
        }
        else {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: "error al consultar no se a encontrado al cliente",
                estado: false,
                datos: []
            }));
            res.end();
        }
    }),
    actualizar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let { cliente } = req.body;
        let modeloEquipoModelo = new m_modelo_equipo_1.default();
        modeloEquipoModelo.setIdModeloEquipo(cliente.id_modelo_equipo);
        let modelo_result = yield modeloEquipoModelo.consultar();
        if (modelo_result.rowCount > 0) {
            let clienteModelo = new m_cliente_1.default();
            clienteModelo.setDatos(cliente);
            let cliente_result = yield clienteModelo.actualizar();
            if (cliente_result.rowCount > 0) {
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
                    mensaje: "error al actualizar",
                    estado: false
                }));
                res.end();
            }
        }
        else {
            res.writeHead(200, "'content-type':application/json");
            res.write(JSON.stringify({
                mensaje: "error al actualizar al cliente, por que este modelo de equipo no esta en la base de",
                estado: false
            }));
            res.end();
        }
    })
};
exports.default = clienteControlador;
