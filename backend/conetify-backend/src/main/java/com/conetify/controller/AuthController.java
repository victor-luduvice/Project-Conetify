package com.conetify.controller;

import com.conetify.model.AuthenticationRequest;
import com.conetify.model.AuthenticationResponse;
import com.conetify.model.RegisterRequest;
import com.conetify.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controlador responsável por gerenciar as requisições de autenticação
 * Expõe endpoints para registro e autenticação de usuários
 */
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationService service;

    /**
     * Endpoint para registro de novos usuários
     * @param request Dados do usuário para registro
     * @return Resposta com token JWT
     */
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));
    }

    /**
     * Endpoint para autenticação de usuários existentes
     * @param request Credenciais do usuário
     * @return Resposta com token JWT
     */
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }
} 