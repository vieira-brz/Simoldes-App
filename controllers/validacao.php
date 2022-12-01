<?php

include_once explode('/controllers', __DIR__)[0].'/models/Funcionarios.php';
include_once explode('/controllers', __DIR__)[0].'/models/Plano_Vale.php';

$funcionarios = new Funcionario();
$plano_vale = new Plano_Vale();

$control = $_POST['control'];

switch ($control) 
{
    case 'get_session_access':
        echo $_SESSION[session_id()]['acesso'];
    break;

    case 'get_func':

        $matricula = $_POST['matricula'];

        $request = $plano_vale->pendentes_funcionario($matricula);

        if (is_array($request))
        {
            echo json_encode($request);
        }
        else 
        {
            echo 'NOK';
        }
    break;

    case 'get_all':

        $request = $plano_vale->pendentes_geral();

        if (is_array($request))
        {
            echo json_encode($request);
        }
        else 
        {
            echo 'NOK';
        }
    break;

    case 'accept':

        $id = $_POST['id'];
        
        $request = $plano_vale->accept($id);

        if ($request == 1)
        {
            echo 'OK';
        }
        else 
        {
            echo 'NOK';
        }
    break;

    case 'decline':

        $id = $_POST['id'];

        $request = $plano_vale->decline($id);

        if ($request == 1)
        {
            echo 'OK';
        }
        else 
        {
            echo 'NOK';
        }
    break;

    default:
        echo 'Erro: Nenhum controle definido!';
    break;
}

unset($funcionarios);
unset($plano_vale);

?>