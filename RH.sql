create database RH;
use RH;

create table employeer(
	id_employeer int primary key auto_increment,
    employeer_name char(255) not null
);

create table customer(
	id_customer int primary key auto_increment,
    client_name char(255) not null
);

create table employeer_gets_calls(
	fk_id_employeer int not null,
    fk_id_customer int not null,
	description varchar(1000) not null,
    stage enum('closed', 'open'),
    
    primary key (fk_id_employeer, fk_id_customer),
    constraint fk_id_employeer foreign key(fk_id_employeer) references employeer(id_employeer),
    constraint fk_id_customer foreign key(fk_id_customer) references customer(id_customer)
);

#drop database RH;