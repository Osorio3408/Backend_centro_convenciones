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
    np createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Events(
    id_event INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    image_event VARCHAR (1000) NOT NULL,
    name_event VARCHAR (250) NOT NULL,
    description_event VARCHAR (250) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ;


-- PROCEDIMIENTOS ALMACENADOS PARA LA BASE DE DATOS


create procedure listar_usuarios() 
begin
    select
        *
    from
        users
end;


--------------------------------

create procedure obtener_evento(in id int) 
begin
    select
        *
    from
        events
    where
        id_event = id
end;

---------------------------------

CREATE PROCEDURE insertar_usuario(in name varchar(250), in email varchar(250), in pass varchar(250), in document varchar(250), in number_document bigint, in phone_number varchar(250))
BEGIN
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
  BEGIN
    ROLLBACK;
  end;
  START TRANSACTION;
    INSERT
    INTO users (name_user ,email_user,password_user,document_type,document_number,phone_number_user) values (name,email,pass,document,number_document,phone_number);
   commit;
end;

----------------------------------


create procedure eliminar_evento(in id int)
begin
	delete from events where id_event = id
end;


-----------------------------------

CREATE PROCEDURE insertar_evento(in image_url varchar(250), in name varchar(250), in description varchar(250))
BEGIN
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
  BEGIN
    ROLLBACK;
  end;
  START TRANSACTION;
    INSERT
    INTO events (image_event,name_event,description_event) values (image_url,name,description);
   commit;
end;