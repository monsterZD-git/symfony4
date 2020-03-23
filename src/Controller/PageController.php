<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PageController extends AbstractController
{
    /**
     * @Route("/{message}", name="page")
     */
    public function index($message)
    {
        return $this->render('page/'.$message.'.twig', [
            'controller_name' => 'PageController',
        ]);
    }
}
