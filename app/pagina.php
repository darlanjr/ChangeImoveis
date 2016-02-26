<?php

@header( "Cache-Control: max-age=604800" );

class Pagina extends Index
{
    public function __construct()
    {
        parent:: __construct();
    }
    //n�o remover o m�todo fillForm usado para preecher o form busca
    public function fillForm()
    {
        $this->fillTipo();
        $this->fillCategoria();
    }
    
    //n�o remover o m�todo welcome, a remocao causar� erro
    public function welcome()
    {
    }

    public function sobre()
    {
        $this->tpl( "public/sobre.html" );
        $this->render();
    }    

    public function links()
    {
        $this->tpl( "public/links.html" );
        $this->render();
    }    

    public function contato()
    {
        $this->tpl( "public/contato.html" );
        $this->render();
    }

    public function admin()
    {
        $this->tpl( "admin/login.html" );
        $this->render();
    }   

	//Se voc� pretente incluir o formul�rio de busca em uma nova p�gina dever� chamar o m�todo fillForm()
	//$this->fillForm(); 
	//$this->render();
	
}