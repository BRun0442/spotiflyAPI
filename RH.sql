create database RH;
use RH;

create table usuario(
	id_user int primary key auto_increment,
    user_name varchar(100) not null,
    user_birthday varchar(8) not null,
	user_permission enum('office', 'customer', 'employeer') not null
);

create table employeer(
	id_employeer int not null auto_increment,
    
	primary key (id_employeer),
    constraint id_employeer foreign key(id_employeer) references usuario(id_user)
);

create table customer(
	id_customer int not null auto_increment,
    client_name char(255) not null,
    
    primary key (id_customer),
    constraint id_customer foreign key(id_customer) references usuario(id_user)
);

create table employeer_gets_calls(
	id_call int primary key auto_increment,
	fk_id_employeer int not null,
    fk_id_customer int not null,
	description varchar(1000) not null,
    stage enum('closed', 'open') not null,
    
    constraint fk_id_employeer foreign key(fk_id_employeer) references employeer(id_employeer),
    constraint fk_id_customer foreign key(fk_id_customer) references customer(id_customer)
);

#drop database RH;

insert into usuario(user_name, user_birthday, user_permission) values("Osmar", "20040813", "employeer");
insert into employeer(user_name, user_birthday, user_permission) values("Osmar", "20040813", "employeer");
 
 select * from usuario;
 select * from employeer