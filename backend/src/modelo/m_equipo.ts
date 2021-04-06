import { QueryResult } from 'pg';
import DriverPostgreSql from './driver_postgresql'


class EquipoModelo extends DriverPostgreSql{

    private id_equipo:string;
    private nombre_equipo:string;
    private estatus_equipo:string;

    constructor(){
        super();
        this.id_equipo=""
        this.nombre_equipo=""
        this.estatus_equipo=""
    }

    setDatos(datos:any):void {
        this.id_equipo=datos.id_equipo
        this.nombre_equipo=datos.nombre_equipo
        this.estatus_equipo=datos.estatus_equipo
    }

    setId(id:string):void {
        this.id_equipo=id
    }

    async registrar():Promise<QueryResult>{
        const SQL:string=`INSERT INTO tequipo(
            nombre_equipo,
            estatus_equipo
            ) 
            VALUES(
            '${this.nombre_equipo}',
            '${this.estatus_equipo}'
            );`
        return await this.query(SQL)
    }

    async consultar(): Promise<QueryResult>{
        const SQL:string=`SELECT * FROM tequipo WHERE id_equipo=${this.id_equipo};`
        return await this.query(SQL)
    }

    async actualizar():Promise<QueryResult>{
        const SQL:string=`UPDATE tequipo SET
            nombre_equipo='${this.nombre_equipo}',
            estatus_equipo='${this.estatus_equipo}'
            WHERE id_equipo=${this.id_equipo};`
        return await this.query(SQL)
    }

    async consultarTodos():Promise<QueryResult>{
        const SQL:string=`SELECT * FROM tequipo;`
        return await this.query(SQL)
    }

    async consultarPorNombre(nombre:string):Promise<QueryResult>{
        const SQL:string=`SELECT * FROM tequipo WHERE nombre_equipo LIKE '%${nombre}%'`
        return await this.query(SQL)
    }

    


}

export default EquipoModelo