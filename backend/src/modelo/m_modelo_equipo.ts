import { QueryResult } from 'pg';
import crud from '../interfaces/interfas_crud';
import DriverPostgreSql from './driver_postgresql'

class ModeloEquipoModelo extends DriverPostgreSql{

    private id_modelo_equipo:string;
    private nombre_modelo_equipo:string;
    private estatu_modelo_equipo:string;
    private id_equipo:string;
    private frecuencia_modelo_equipo:string;

    constructor(){
        super()
        this.id_modelo_equipo=""
        this.nombre_modelo_equipo=""
        this.estatu_modelo_equipo=""
        this.id_equipo=""
        this.frecuencia_modelo_equipo=""
    }

    setDatos(datos:any):void{
        this.id_modelo_equipo=datos.id_modelo_equipo
        this.nombre_modelo_equipo=datos.nombre_modelo_equipo
        this.estatu_modelo_equipo=datos.estatu_modelo_equipo
        this.id_equipo=datos.id_equipo
        this.frecuencia_modelo_equipo=datos.frecuencia_modelo_equipo
    }

    setIdModeloEquipo(id:string):void {
        this.id_modelo_equipo=id
    }

    setIdEquipo(id:string):void {
        this.id_equipo=id
    }

    async registrar():Promise<QueryResult>{
        const SQL:string=`INSERT INTO tmodelo(
                nombre_modelo_equipo,
                estatu_modelo_equipo,
                id_equipo,
                frecuencia_modelo_equipo
            )
            VALUES(
                '${this.nombre_modelo_equipo}',
                '${this.estatu_modelo_equipo}',
                ${this.id_equipo},
                '${this.frecuencia_modelo_equipo}'
            );
        `
        return await this.query(SQL)
    }

    async consultar():Promise<QueryResult>{
        const SQL:string=`SELECT * FROM tmodelo,tequipo WHERE tmodelo.id_modelo_equipo=${this.id_modelo_equipo} AND tmodelo.id_equipo=tequipo.id_equipo;`
        return await this.query(SQL)
    }

    async consultarTodos():Promise<QueryResult>{
        const SQL:string=`SELECT * FROM tmodelo,tequipo WHERE tmodelo.id_equipo=tequipo.id_equipo;`
        return await this.query(SQL)
    }

    async actualizar():Promise<QueryResult>{
        const SQL:string=`UPDATE tmodelo SET
            nombre_modelo_equipo='${this.nombre_modelo_equipo}',
            estatu_modelo_equipo='${this.estatu_modelo_equipo}',
            id_equipo=${this.id_equipo},
            frecuencia_modelo_equipo='${this.frecuencia_modelo_equipo}'
            WHERE 
            id_modelo_equipo=${this.id_modelo_equipo};
        `
        return await this.query(SQL)
    }

    async consultarPorEquipo():Promise<QueryResult>{
        const SQL:string=`SELECT * FROM tmodelo,tequipo WHERE tmodelo.id_equipo=${this.id_equipo} AND (tmodelo.id_equipo=tequipo.id_equipo);`
        return await this.query(SQL)
    }

    async consultarPorIdEquipoYNombreModelo(nombre_modelo_equipo:string):Promise<QueryResult>{
        const SQL:string=`SELECT * FROM tmodelo,tequipo WHERE  tmodelo.id_equipo=${this.id_equipo} AND (tmodelo.id_equipo=tequipo.id_equipo) AND tmodelo.nombre_modelo_equipo LIKE '%${nombre_modelo_equipo}%' `
        return await this.query(SQL)
    }
    
    async consultarPorNombreModelo(nombre_modelo_equipo:string):Promise<QueryResult>{
        const SQL:string=`SELECT * FROM tmodelo,tequipo WHERE tmodelo.nombre_modelo_equipo LIKE '%${nombre_modelo_equipo}%' AND (tmodelo.id_equipo=tequipo.id_equipo)`
        return await this.query(SQL)
    }
}

export default ModeloEquipoModelo