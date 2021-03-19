<?php

namespace App\Controller;

use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Rest\Get(
     *     name="home",
     *     path="/app/{path}",
     *     requirements={
     *         "path"=".*"
     *     },
     * )
     */
    public function home()
    {
        return $this->render("base.html.twig");
    }

//    /**
//     * @Route("/activites", name="activites")
//     */
//    public function activitiesList()
//    {
//        return $this->render("base.html.twig");
//    }

}