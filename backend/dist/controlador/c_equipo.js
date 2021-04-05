"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let EquipoControlador = {
    registrar: (req, res) => {
        res.writeHead(200, "'content-type':application/json");
        res.write(JSON.stringify({ msj: "hola mundo con express y typescript" }));
        res.end();
    }
};
exports.default = EquipoControlador;
