<?php


namespace App\Controller;


use App\Security\UserAuthenticator;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends UserAuthenticator
{
    /**
     * @Route("/login", name="app_login", methods={"POST"})
     */
    public function login()
    {
        dump('prout');
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

}