DROP DATABASE simoldes;
CREATE DATABASE simoldes;

/* 
    FUNCIONÁRIOS
*/
create table simoldes.funcionarios (
	MATRICULA VARCHAR(20) NOT NULL PRIMARY KEY,
    NOME VARCHAR(80) NOT NULL,
    CARGO VARCHAR(80) NOT NULL,
    SENHA VARCHAR(50) NOT NULL,
    PALAVRA VARCHAR(50) NOT NULL,
    ACESSO VARCHAR(10) DEFAULT 'PADRAO'
);

/* Tudo da tabela */
select * from simoldes.funcionarios;

/* Tudo de 1 determinado funcionário */
select * from simoldes.funcionarios where MATRICULA = '$matricula';

/* Verificador de palavra chave de 1 determinado funcionário */
select PALAVRA from simoldes.funcionarios where PALAVRA LIKE '%$palavra%';

/* Verificador de login */
select * from simoldes.funcionarios where MATRICULA = '$matricula' and SENHA = 'md5($matricula)';


/* 
    PLANOS E VALES
*/
create table simoldes.plano_vale (
	ID INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    MATRICULA VARCHAR(20) NOT NULL,
    VALE_TRANSPORTE VARCHAR(1) NOT NULL,
    PLANO_ODONTOLOGICO VARCHAR(1) NOT NULL,
    PLANO_SAUDE VARCHAR(1) NOT NULL,
    COMENTARIO VARCHAR(100),
    DATA_INSERC DATETIME DEFAULT NOW(),
    VALIDADO VARCHAR(1) DEFAULT 'N',
    STATUS_VALIDACAO VARCHAR(3) DEFAULT 'NOK',
    
    FOREIGN KEY (MATRICULA) REFERENCES simoldes.funcionarios(MATRICULA)
);

/* Tudo da tabela */
select * from simoldes.plano_vale;

/* Tudo de 1 funcionario */
select * from simoldes.plano_vale where MATRICULA = '$matricula';

/* Tudo de 1 funcionario e que não tenha o formulário validado */
select * from simoldes.plano_vale where MATRICULA = '$matricula' and STATUS_VALIDACAO = 'NOK';

/* Tudo de 1 funcionario e que tenha status em andamento ou então não tenha o formulário validado */ 
select * from simoldes.plano_vale where MATRICULA = '$matricula' and (STATUS_VALIDACAO = 'NOK' or VALIDADO = 'N');

/* Tabela funcionarios + planos e vales */
select * from simoldes.plano_vale as pv inner join simoldes.funcionarios as f on f.MATRICULA = pv.MATRICULA;