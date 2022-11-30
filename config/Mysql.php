<?php

class Mysql
{
  protected static $instance;
  protected $conn;
  protected $servername;
  protected $username;
  protected $password;
  protected $dbname;

  
  protected function __construct()
  {
    $db = parse_ini_file('./host.ini');

    $this->servername = $db["host"];
    $this->username = $db["user"];
    $this->password = $db["pass"];
    $this->dbname = $db["dbse"];

    $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
  }


  public static function getInstance()
  {
    if(!self::$instance)
    { 
      self::$instance = new self();
    }
    return self::$instance;
  }


  public function readDb($query)
  {
    $query = utf8_decode($query);

    if($this->conn != null)
    {
      if($result = $this->conn->query($query))
      {
        if($result->num_rows > 0)
        {
          $data = array();

          while ($row = $result->fetch_assoc())
          {
            $data[] = $row;
          }

          $result->close();

          $data = json_encode($data);
          return $data;
        }
        else
        {
          return null; 
        }
      }
      else
      {
        return -1; 
      }
    }
    else
    {
      if ($this->conn != null)
      {
        $result = $this->conn->query($query);

       if (!$result)
       {
         echo 'Erro '. mysqli_errno(($this->conn)) .': '. mysqli_error($this->conn) ."\n";
       }
       else
       {
         return $this->conn->affected_rows;
       }
      }
      else
      {
        return -2;
      }
    }
  }


  function updateDb($query)
  {    
    if($this->conn != null)
    {
      $result = $this->conn->query($query);

     if (!$result)
     {
       echo 'Erro '. mysqli_errno(($this->conn)) .': '. mysqli_error($this->conn) ."\n";
       return 'Erro '. mysqli_errno(($this->conn)) .': '. mysqli_error($this->conn) ."\n";
     }
     else
     {
       return $this->conn->affected_rows;
     }
    }
    else
    {
      return -2;
    }
  }


  function __destruct()
  {
    $this->conn->close();
  }
}

?>