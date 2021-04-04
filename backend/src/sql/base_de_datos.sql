CREATE DATABASE wisp_code_camp;

CREATE TABLE tequipo(
    id_equipo serial NOT NULL,
    nombre_equipo character varying(150) NOT NULL,
    estatus_equipo character (1) NOT NULL,
    constraint PK_id_equipo primary key(id_equipo)
);

CREATE TABLE tmodelo(
    id_modelo_equipo serial,
    nombre_modelo_equipo character varying(150) NOT NULL,
    estatu_modelo_equipo character(1) NOT NULL,
    id_equipo INTEGER NOT NULL,
    frecuencia_modelo_equipo FLOAT NOT NULL,
    constraint PK_id_modelo_equipo primary key(id_modelo_equipo),
    constraint FK_id_equipo foreign key(id_modelo_equipo) references tequipo(id_equipo) ON DELETE CASCADE ON UPDATE CASCADE
);
