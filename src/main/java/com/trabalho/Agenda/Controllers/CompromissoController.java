package com.trabalho.Agenda.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trabalho.Agenda.DTOs.CompromissoRequest;
import com.trabalho.Agenda.DTOs.CompromissoResponse;
import com.trabalho.Agenda.Services.CompromissoService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

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

    @PostMapping("save")
    public ResponseEntity<CompromissoResponse> saveCompromisso(@Validated @RequestBody CompromissoRequest compromisso) {
        CompromissoResponse newCompromisso = service.save(compromisso);
        return ResponseEntity.created(null).body(newCompromisso);
    }

    
}
