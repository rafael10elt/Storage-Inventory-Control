CREATE DATABASE SIC;

CREATE TABLE USERS(IdUser int primary key not null identity(1000,1),
UserFirstName varchar(255) not null, 
UserLastName varchar(255) not null,
UserJobTitle varchar(50),
UserPhone varchar(30),
UserLogin varchar(30) unique not null,
UserPassword varchar(30) not null
);

ALTER TABLE USERS ADD IdCustomer int references CUSTOMERS;
ALTER TABLE USERS ADD IdOrder int references ORDERS;

SELECT * FROM USERS;

CREATE TABLE CUSTOMERS(
IdCustomer int primary key not null identity(100,1),
CompanyName varchar(100) not null,
BIN varchar(20),
Email varchar(50) not null,
Phone varchar(20) not null,
Address varchar(150) not null,
City varchar(50)not null,
Province varchar(50) not null,
PostalCode varchar(10),
RegistrationDateCustomer date
);

ALTER TABLE CUSTOMERS alter column PostalCode varchar(10) not null;
ALTER TABLE CUSTOMERS ADD IdUser int references USERS;
ALTER TABLE CUSTOMERS ADD IdOrder int references ORDERS;

SELECT * FROM CUSTOMERS;

CREATE TABLE ORDERS(
IdOrder int primary key not null identity(300,1),
ProductName varchar(100) not null, 
Warehouse int not null,
Room int not null,
Aisle char(1) not null,
Shelf int not null,
Type varchar(100) not null,
Specification varchar(150),
Price float,
Brand varchar(50),
Quantity int not null,
EntryDateProduct datetime
);

ALTER TABLE ORDERS ADD IdUser int references USERS;
ALTER TABLE ORDERS ADD IdCustomer int references CUSTOMERS;

SELECT * from ORDERS;

