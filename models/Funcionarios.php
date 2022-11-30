<?php

include_once explode('/models', __DIR__)[0].'/config/Mysql.php';

class Funcionario extends Mysql {

    private $mysql;
    private $database;
    private $table = 'teste.funcionarios';

    public function __construct() {
        $this->mysql = Mysql::getInstance();
    }

    public function cadastrar($matricula, $nome, $cargo, $senha, $palavra) {
        $query = "insert $this->table values ('$matricula', '$nome', '$cargo', md5('$senha'), '$palavra')";
        return $this->mysql->updateDb($query);
    }

    public function logar($matricula, $senha) {
        $query = "select * from $this->table where MATRICULA = '$matricula' and SENHA = md5('$senha')";
        return $this->mysql->readDb($query);
    }

    public function muda_senha($matricula, $palavra, $senha) {

        $query = "select * from $this->table where MATRICULA = '$matricula' and PALAVRA = '$palavra'";
        $request = $this->mysql->readDb($query);
        
        if (is_array($request)) 
        {
            if (count($request) == 1) {
                $query = "update $this->table SET SENHA = md5('$senha') where MATRICULA = '$matricula'";
                return $this->mysql->updateDb($query);
            }
            else {
                return 0;
            }
        }
        else {
            return 0;
        } 
    }

    public function __destruct() {
        unset($this->mysql);
    }
}

?>