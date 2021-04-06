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

}

export default ModeloEquipoModelo