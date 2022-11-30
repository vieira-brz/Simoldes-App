<?php

include_once explode('/models', __DIR__)[0].'/config/Mysql.php';

class Funcionario extends Mysql {

    private $mysql;
    private $table = 'simoldes.funcionarios';

    public function __construct() {
        $this->mysql = $this->conn;
    }

    public function __destruct() {
        unset($this->mysql);
    }
}

?>