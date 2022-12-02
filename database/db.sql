CREATE DATABASE centro_convenciones;

use centro_convenciones;

CREATE TABLE Users (
    id_user INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name_user VARCHAR (250) NOT NULL,
    email_user VARCHAR (250) NOT NULL unique,
    password_user VARCHAR (250) NOT NULL,
    document_type VARCHAR (250) NOT NULL,
    document_number BIGINT NOT NULL,
    phone_number_user VARCHAR (250) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Events(
    id_event INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    image_event VARCHAR (1000) NOT NULL,
    name_event VARCHAR (250) NOT NULL,
    description_event VARCHAR (250) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

DESCRIBE Users;

