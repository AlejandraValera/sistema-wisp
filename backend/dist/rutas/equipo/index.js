"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const c_equipo_1 = __importDefault(require("../../controlador/c_equipo"));
const router = express_1.Router();
router.use(body_parser_1.default.json());
router.post("/registrar", c_equipo_1.default.registrar);
router.get("/consultar/:id", c_equipo_1.default.consultar);
router.get("/consultar-todos", c_equipo_1.default.consultarTodos);
router.put("/actualizar/:id", c_equipo_1.default.actualizar);
router.get("/consultar-por-nombre/:nombre", c_equipo_1.default.consultarPorNombre);
exports.default = router;
