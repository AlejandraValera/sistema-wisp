"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const c_equipo_1 = __importDefault(require("../../controlador/c_equipo"));
const router = express_1.Router();
router.post("/registrar", c_equipo_1.default.registrar);
exports.default = router;
