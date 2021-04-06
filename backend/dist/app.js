"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// modulos
const index_1 = __importDefault(require("./rutas/equipo/index"));
const index_2 = __importDefault(require("./rutas/modelo-equipo/index"));
const app = express_1.default();
const nombreApi = "api-wisp";
app.set("puerto", 8080);
app.use(morgan_1.default("dev"))
    .use(cors_1.default());
// rutas modulos
app.use(`/${nombreApi}/equipo`, index_1.default);
app.use(`/${nombreApi}/modelo-equipo`, index_2.default);
exports.default = app;
