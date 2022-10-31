CREATE DATABASE centro_convenciones IF NO EXISTS;

use centro_convenciones;

CREATE TABLE Usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre_usuario VARCHAR (250) NOT NULL,
    correo_usuario VARCHAR (250) NOT NULL,
    tipo_identificacion VARCHAR (250) NOT NULL,
    numero_identificacion BIGINT NOT NULL,
    telefono_usuario VARCHAR (250) NOT NULL,
    contraseña_usuario VARCHAR (250) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE Usuarios;

