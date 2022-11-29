<?php

include_once dirname().'/models/Funcionarios.php';
include_once dirname().'/models/Plano_Vale.php';

$funcionarios = new Funcionario();
$plano_vale = new Plano_Vale();

// code ...

unset($funcionarios);
unset($plano_vale);

?>