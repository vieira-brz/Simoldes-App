<?php

include_once explode('\controllers', __DIR__)[0].'\models\Funcionarios.php';
include_once explode('\controllers', __DIR__)[0].'\models\Plano_Vale.php';

$funcionarios = new Funcionario();
$plano_vale = new Plano_Vale();

$control = $_POST['control'];

switch ($control) 
{
    case 'cadastrar':
        $matricula = $_POST['matricula'];
        
        $verificador = $plano_vale->pendentes_funcionario($matricula);
        
        if (is_array($verificador))
        {
            echo 'PENDENTE';
        }
        else 
        {
            $vale_transporte = $_POST['vale_transporte'];
            $plano_odontologico = $_POST['plano_odontologico'];
            $plano_saude = $_POST['plano_saude'];
            $comentario = $_POST['comentario'];

            $request = $plano_vale->cadastrar($matricula, $vale_transporte, $plano_odontologico, $plano_saude, $comentario);

            if ($request == 1) 
                echo 'OK';
            else 
                echo 'NOK';
        }
    break;

    default: 
        echo 'Erro: Nenhum controlador definido!';
    break;
}

unset($funcionarios);
unset($plano_vale);

?>