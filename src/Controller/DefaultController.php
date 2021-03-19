<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function home()
    {
        return $this->render("base.html.twig");
    }

    /**
     * @Route("/activites", name="activites")
     */
    public function activitiesList()
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