import { Pool, QueryResult } from "pg";

class DriverPostgreSQL {

    database:Pool;

    constructor(){
        const {Pool}=require("pg"),
        config={
            user:"gabriel",
            host:"localhost",
            password:"stark",
            database:"wisp_code_camp"
        }

        this.database=new Pool(config);
    }

    conexion(){
        this.database.connect()
    }
    
    async conexion2(sql:string):Promise<QueryResult>{
        let datos:any;
        await this.database.connect()
        .then (async cliente => {
            console.log("----------Inicio---------");
            console.log("consulta sql =>>> ",sql);
            console.log("----------Fin------------");
            await cliente.query (sql)
            .then(res => {
                cliente.release ();
                // console.log (res.rows [0]);
                datos=res
            })
            .catch (e => {
                cliente.release ();
                console.log (e.stack);
            })
        })
        .finally (() => {
            setTimeout(() => {
                this.database.end(() => {
                console.log("cerrando la conexion con la base de datos")})
            },1000)
        });

        return datos
    }

    async query(sql:string){
        return await this.conexion2(sql)
    }


}

export default DriverPostgreSQL