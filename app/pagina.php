<?php

@header( "Cache-Control: max-age=604800" );

class Pagina extends Index
{
    public function __construct()
    {
        parent:: __construct();
    }
    //não remover o método fillForm usado para preecher o form busca
    public function fillForm()
    {
        $this->fillTipo();
        $this->fillCategoria();
    }
    
    //não remover o método welcome, a remocao causará erro
    public function welcome()
    {
    }

    public function admin()
    {
        $this->tpl( "admin/login.html" );
        $this->render();
    }   

	//Se você pretente incluir o formulário de busca em uma nova página deverá chamar o método fillForm()
	//$this->fillForm(); 
	//$this->render();
	
}