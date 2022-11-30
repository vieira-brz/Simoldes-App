<?php

include_once explode('/controllers', __DIR__)[0].'/models/Funcionarios.php';
include_once explode('/controllers', __DIR__)[0].'/models/Plano_Vale.php';

$funcionarios = new Funcionario();
$plano_vale = new Plano_Vale();

// code ...

echo 'ok';

unset($funcionarios);
unset($plano_vale);

?>