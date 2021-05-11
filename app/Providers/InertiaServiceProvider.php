<?php

namespace App\Providers;

use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class InertiaServiceProvider extends ServiceProvider {
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register() {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot() {
        $this->shareRequestData();
    }

    public function shareRequestData() {
        Inertia::share([
            'errors'           => function (Request $request) {
                return $request->session()->get('errors')
                ? $request->session()->get('errors')->getBag('default')->getMessages()
                : (object) [];
            },
            'responseMessages' => function (Request $request) {
                return [
                    "success" => $request->session()->get('success'),
                    "error"   => $request->session()->get('error'),
                ];
            },
        ]);
    }
}
