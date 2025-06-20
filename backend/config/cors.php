<?php

use PhpParser\Node\Stmt\TraitUseAdaptation;

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

   'paths' => ['api/*', 'sanctum/csrf-cookie'],

   'allowed_methods' => ['*'], // Allow all HTTP methods

   'allowed_origins' => ['http://localhost:5000','https://go-up-northstar.co.za'],

   'allowed_origins_patterns' => [],

   'allowed_headers' => ['*'],

   'exposed_headers' => [],

   'max_age' => 0,

   'supports_credentials' => true,

];
