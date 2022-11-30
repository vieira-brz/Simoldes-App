<?php

include_once explode('/models', __DIR__)[0].'/config/Mysql.php';

class Plano_Vale extends Mysql {

    private $mysql;
    private $table = 'simoldes.plano_vale';

    public function __construct() {
        $this->mysql = $this->conn;
    }

    public function __destruct() {
        unset($this->mysql);
    }
}

?>