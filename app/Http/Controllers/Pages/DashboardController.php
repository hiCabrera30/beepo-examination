<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Http\Resources\Users\BasicUserResource;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller {

    public function index() {
        $user = $this->flattenObject(new BasicUserResource(Auth::user()));

        return inertia("Dashboard/DashboardPage", compact("user"));
    }

}
