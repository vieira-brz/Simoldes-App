<?php
session_start();

include_once explode('\controllers', __DIR__)[0].'\models\Funcionarios.php';

$funcionarios = new Funcionario();

$control = $_POST['control'];

switch ($control) 
{
    case 'cadastrar':
        $matricula = $_POST['matricula'];
        $nome = $_POST['nome'];
        $cargo = $_POST['cargo'];
        $senha = $_POST['senha'];
        $palavra = $_POST['palavra'];

        $request = $funcionarios->cadastrar($matricula, $nome, $cargo, $senha, $palavra);
        
        if ($request == 1) {
            
            $_SESSION[session_id()] = array(
                'nome' => $nome, 
                'cargo' => $cargo, 
                'matricula' => $matricula, 
                'acesso' => 'PADRAO'
            );
            
            echo 'OK';
        }
        else {
            echo 'NOK';
        } 
    break;

    case 'logar':
        $matricula = $_POST['matricula'];
        $senha = $_POST['senha'];

        $request = $funcionarios->logar($matricula, $senha);

        if (is_array($request))

            if (count($request) == 1) {

                $_SESSION[session_id()] = array(
                    'nome' => $request[0]['NOME'], 
                    'cargo' => $request[0]['CARGO'], 
                    'matricula' => $request[0]['MATRICULA'], 
                    'acesso' => $request[0]['ACESSO']
                );
        
                echo 'OK';
            }
            else {
                echo 'NOK';
            } 
        else 
            echo 'NOK';
    break;

    case 'muda_senha':
        $matricula = $_POST['matricula'];
        $palavra = $_POST['palavra'];
        $senha = $_POST['senha'];

        $request = $funcionarios->muda_senha($matricula, $palavra, $senha);

        if ($request == 1) 
            echo 'OK';
        else 
            echo 'NOK';
    break;

    case 'get_session':
        echo json_encode($_SESSION[session_id()]);
    break;

    case 'get_out_session':
        unset($_SESSION[session_id()]);
    break;
   
    default:
        echo 'Erro: Nenhum controle definido!';
    break;
}

unset($funcionarios);

?>