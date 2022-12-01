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
        $query = "select * from $this->table as pv inner join simoldes.funcioanrios as f on f.MATRICULA = pv.MATRICULA
                  where MATRICULA = '$matricula' and (STATUS_VALIDACAO = 'NOK' or VALIDADO = 'N');";
        return $this->mysql->readDb($query);
    }

    public function pendentes_geral() {
        $query = "select * from $this->table as pv inner join simoldes.funcioanrios as f on f.MATRICULA = pv.MATRICULA 
                  where (STATUS_VALIDACAO = 'NOK' or VALIDADO = 'N');";
        return $this->mysql->readDb($query);
    }

    public function accept($id) {
        $query = "update $this->table SET STATUS_VALIDACAO = 'OK', VALIDADO = 'S' where ID = '$id';";
        return $this->mysql->updateDb($query);
    }

    public function decline($id) {
        $query = "update $this->table SET STATUS_VALIDACAO = 'OK', VALIDADO = 'N' where ID = '$id';";
        return $this->mysql->updateDb($query);
    }

    public function __destruct() {
        unset($this->mysql);
    }
}

?>