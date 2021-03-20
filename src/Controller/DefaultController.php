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
     *     path="/app{path}",
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

    /**
     * @Route("/tutorial", name="tutorials")
     */
    public function tutorial()
    {
        return $this->render("base.html.twig");
    }

    /**
     * @Route("/profil", name="profil")
     */
    public function profil()
    {
        return $this->render("base.html.twig");
    }

    /**
     * @Route("/create_activity", name="create_activity")
     */
    public function createActivity()
    {
        return $this->render("base.html.twig");
    }

}