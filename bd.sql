create table comptes
(
    id_compte int(6) unsigned auto_increment
        primary key,
    nom       varchar(50)   not null,
    prenom    varchar(50)   not null,
    email     varchar(1000) not null,
    password  varchar(1000) not null
);

create table login
(
    id_compte int unsigned auto_increment
        primary key,
    email     varchar(1000) null,
    password  varchar(1000) null,
    constraint fk_login
        foreign key (id_compte) references comptes (id_compte)
);
/*
// table comptes

 id_compte | nom      | prenom  | email                                                            | password                                     |
+-----------+----------+---------+------------------------------------------------------------------+----------------------------------------------+
|        12 | habtiche | Sonia   | ec604747612fb55138311a23966b1503ebe283301d11f43195e8e5e32a7c7a40 | U2FsdGVkX19kk5+pEmWHIwfUlH4JYhp7+TKQByk94Ko= |
|        13 | Sonia    | sonia   | U2FsdGVkX18NfSGviZeHH9cMpzBONgH7vYEGPirGc9A=                     | U2FsdGVkX18gjztz45m6MQqxJ6mudX4pRATD2cjw2Iw= |
|        14 | cdscdsc  | cdscdsc | U2FsdGVkX19Tyhv0qAeq1hYse9hBeK1UKyEha0LOF/A=                     | U2FsdGVkX1+QjbmE9N7D9euv9cCAz7/1jyArBXW3L50= |
|        15 | babibo   | baba    | U2FsdGVkX19s42u7GEl1Jf3AsXalNPE0VrqG6HlOcPgj5TtYbMBnAJ7tcPD8fdOy | U2FsdGVkX1+pb7U4d3hNGRpQvDxB7splId1tFeaFL44= |

//table login

| id_compte | email                                                            | password                                     |
+-----------+------------------------------------------------------------------+----------------------------------------------+
|        12 | ec604747612fb55138311a23966b1503ebe283301d11f43195e8e5e32a7c7a40 | U2FsdGVkX19kk5+pEmWHIwfUlH4JYhp7+TKQByk94Ko= |
|        13 | U2FsdGVkX18NfSGviZeHH9cMpzBONgH7vYEGPirGc9A=                     | U2FsdGVkX18gjztz45m6MQqxJ6mudX4pRATD2cjw2Iw= |
|        14 | U2FsdGVkX19Tyhv0qAeq1hYse9hBeK1UKyEha0LOF/A=                     | U2FsdGVkX1+QjbmE9N7D9euv9cCAz7/1jyArBXW3L50= |
|        15 | U2FsdGVkX19s42u7GEl1Jf3AsXalNPE0VrqG6HlOcPgj5TtYbMBnAJ7tcPD8fdOy | U2FsdGVkX1+pb7U4d3hNGRpQvDxB7splId1tFeaFL44= |

*/