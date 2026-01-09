<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
                // Log::info('Login request', $request->all());

        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);
        // Log::info('Login attempt', $credentials);
        if (Auth::attempt($credentials)) {
            // Log::info('Login true');
            $user = Auth::user();
            // Log::info('Login user', $user->toArray());
            $token = $user->createToken('auth_token')->plainTextToken;
// Log::info('Login token', $token);
            return response()->json([
                'access_token' => $token,
                'token_type' => 'Bearer',
            ]);
        }

        return response()->json(['message' => 'Invalid credentials'], 401);
    }
}
