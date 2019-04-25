-- Greenwave database script

-- if db exists delete it and then re-create it afresh
drop database if exists greenwave;
create database greenwave;


-- keep user data
create table users (
   id int auto_increment,
   username varchar(50) not null unique,
   passcode varchar(190) not null,
   email varchar(90),
   city varchar(50),
   dob date not null,
   code varchar(30) not null unique,
   verified boolean default false,
   joined_on datetime default NOW(),
   user_type enum('CONTENT_CREATOR', 'REGULAR') not null,
   primary key(id)
);

-- keep verifications for users who have just registered
create table verifications (
  id int auto_increment,
  user_id int not null,
  code varchar(50) not null unique,
  added_on datetime default NOW(),
  foreign key(user_id) references users(id) on delete cascade,
  primary key(id)
);

-- keep transactions
create table transactions(
   id int auto_increment,
   content_creator int not null,
   made_by int default null,
   ammount double(10, 2),
   
   method enum ('AFRICAS_TALKING', 'PAYPAL') not null,
   code varchar(190) not null,
   pass_status enum('PENDING', 'SUCCESS', 'FAIL') default 'PENDING',

   made_on datetime default NOW(),
   foreign key(content_creator) references users(id) on delete cascade,
   foreign key(made_by) references users(id),
   primary key(id)
);