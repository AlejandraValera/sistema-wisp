import { QueryResult } from 'pg';
import DriverPostgreSql from './driver_postgresql'

class ClenteModelo extends DriverPostgreSql{

    private cedula_cliente:string;
    private nombres_cliente:string;
    private apellidos_cliente:string;
    private correo_clinte:string;
    private telefono_movil_cliente:string;
    private telefono_local_cliente:string;
    private direccion_cliente:string;
    private mac_antena_cliente:string;
    private fecha_registro_cliente:string;
    private estatu_cliente:string;
    private link_google_map_cliente:string;
    private id_modelo_equipo:string;

    constructor(){
        super();
        this.cedula_cliente="";
        this.nombres_cliente="";
        this.apellidos_cliente="";
        this.correo_clinte="";
        this.telefono_movil_cliente="";
        this.telefono_local_cliente="";
        this.direccion_cliente="";
        this.mac_antena_cliente="";
        this.fecha_registro_cliente="";
        this.estatu_cliente="";
        this.link_google_map_cliente="";
        this.id_modelo_equipo="";
    }


    setDatos(cliente:any):void {
        this.cedula_cliente=cliente.cedula_cliente;
        this.nombres_cliente=cliente.nombres_cliente;
        this.apellidos_cliente=cliente.apellidos_cliente;
        this.correo_clinte=cliente.correo_clinte;
        this.telefono_movil_cliente=cliente.telefono_movil_cliente;
        this.telefono_local_cliente=cliente.telefono_local_cliente;
        this.direccion_cliente=cliente.direccion_cliente;
        this.mac_antena_cliente=cliente.mac_antena_cliente;
        this.fecha_registro_cliente=cliente.fecha_registro_cliente;
        this.estatu_cliente=cliente.estatu_cliente;
        this.link_google_map_cliente=cliente.link_google_map_cliente;
        this.id_modelo_equipo=cliente.id_modelo_equipo;
    }

    setCedula(id:string):void{
        this.cedula_cliente=id
    }

    async registrar():Promise<QueryResult>{
        const SQL:string=`INSERT INTO tcliente(
            cedula_cliente,
            nombres_cliente,
            apellidos_cliente,
            correo_clinte,
            telefono_movil_cliente,
            telefono_local_cliente,
            direccion_cliente,
            mac_antena_cliente,
            fecha_registro_cliente,
            estatu_cliente,
            link_google_map_cliente,
            id_modelo_equipo
        ) 
        VALUES(
            '${this.cedula_cliente}',
            '${this.nombres_cliente}',
            '${this.apellidos_cliente}',
            '${this.correo_clinte}',
            '${this.telefono_movil_cliente}',
            '${this.telefono_local_cliente}',
            '${this.direccion_cliente}',
            '${this.mac_antena_cliente}',
            '${this.fecha_registro_cliente}',
            '${this.estatu_cliente}',
            '${this.link_google_map_cliente}',
            ${this.id_modelo_equipo}
        )`
        return await this.query(SQL)
    }


}