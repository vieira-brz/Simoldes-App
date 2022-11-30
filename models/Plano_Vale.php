<?php

include_once explode('/models', __DIR__)[0].'/config/Mysql.php';

class Plano_Vale extends Mysql {

    private $mysql;
    private $database;
    private $table = 'teste.plano_vale';

    public function __construct() {
        $this->mysql = Mysql::getInstance();
        $this->database = $this->dbname;
    }
    
    public function cadastrar($matricula, $vale_transporte, $plano_odontologico, $plano_saude, $comentario) {
        $query = "insert $this->table values('$matricula', '$vale_transporte', '$plano_odontologico', '$plano_saude', '$comentario')";
        return $this->mysql->updateDb($query);
    }

    public function pendentes_funcionario($matricula) {
        $query = "select * from simoldes.plano_vale where MATRICULA = '$matricula' and (STATUS_VALIDACAO = 'NOK' or VALIDADO = 'N');";
        return $this->mysql->readDb($query);
    }

    public function __destruct() {
        unset($this->mysql);
    }
}

?>