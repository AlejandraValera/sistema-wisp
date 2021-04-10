CREATE DATABASE wisp_code_camp;

CREATE TABLE tequipo(
    id_equipo serial NOT NULL,
    nombre_equipo character varying(150) NOT NULL,
    estatus_equipo character (1) NOT NULL,
    constraint PK_id_equipo primary key(id_equipo)
);

INSERT INTO tequipo(nombre_equipo,estatus_equipo) VALUES('equipo 1','1');
INSERT INTO tequipo(nombre_equipo,estatus_equipo) VALUES('equipo 2','1');
INSERT INTO tequipo(nombre_equipo,estatus_equipo) VALUES('equipo 3','1');
INSERT INTO tequipo(nombre_equipo,estatus_equipo) VALUES('equipo 4','1');

CREATE TABLE tmodelo(
    id_modelo_equipo serial,
    nombre_modelo_equipo character varying(150) NOT NULL,
    estatu_modelo_equipo character(1) NOT NULL,
    id_equipo INTEGER NOT NULL,
    frecuencia_modelo_equipo FLOAT NOT NULL,
    constraint PK_id_modelo_equipo primary key(id_modelo_equipo),
    constraint FK_id_equipo foreign key(id_equipo) references tequipo(id_equipo) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO tmodelo(nombre_modelo_equipo,estatu_modelo_equipo,id_equipo,frecuencia_modelo_equipo) VALUES('modelo 1','1',1,'5.2');
INSERT INTO tmodelo(nombre_modelo_equipo,estatu_modelo_equipo,id_equipo,frecuencia_modelo_equipo) VALUES('modelo 2','1',1,'5.2');
INSERT INTO tmodelo(nombre_modelo_equipo,estatu_modelo_equipo,id_equipo,frecuencia_modelo_equipo) VALUES('modelo 3','1',1,'5.2');
INSERT INTO tmodelo(nombre_modelo_equipo,estatu_modelo_equipo,id_equipo,frecuencia_modelo_equipo) VALUES('modelo 4','1',1,'5.2');
INSERT INTO tmodelo(nombre_modelo_equipo,estatu_modelo_equipo,id_equipo,frecuencia_modelo_equipo) VALUES('modelo 1','1',2,'5.2');
INSERT INTO tmodelo(nombre_modelo_equipo,estatu_modelo_equipo,id_equipo,frecuencia_modelo_equipo) VALUES('modelo 2','1',2,'5.2');
INSERT INTO tmodelo(nombre_modelo_equipo,estatu_modelo_equipo,id_equipo,frecuencia_modelo_equipo) VALUES('modelo 3','1',2,'5.2');
INSERT INTO tmodelo(nombre_modelo_equipo,estatu_modelo_equipo,id_equipo,frecuencia_modelo_equipo) VALUES('modelo 4','1',2,'5.2');

