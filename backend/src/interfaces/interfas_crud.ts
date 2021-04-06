import { QueryResult } from "pg";

interface crud{
    registrar:Promise<QueryResult>,
    actualizar:Promise<QueryResult>,
    consultar:Promise<QueryResult>,
    eliminar:Promise<QueryResult>
}

export default crud