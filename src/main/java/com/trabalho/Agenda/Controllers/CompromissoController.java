package com.trabalho.Agenda.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trabalho.Agenda.DTOs.CompromissoResponse;
import com.trabalho.Agenda.Services.CompromissoService;

@RestController
@RequestMapping("compromissos")
public class CompromissoController {
    @Autowired
    private CompromissoService service;

    @GetMapping
    public ResponseEntity<List<CompromissoResponse>> getAllCompromisso() {
        return ResponseEntity.ok(service.getAllCompromisso()); 
    }


    @GetMapping("{id}")
    public ResponseEntity<CompromissoResponse> getCompromissoById(Long id) {
        return ResponseEntity.ok(service.getCompromissoById(id)); 
    }
  
}
