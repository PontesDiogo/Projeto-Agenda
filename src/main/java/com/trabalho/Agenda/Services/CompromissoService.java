package com.trabalho.Agenda.Services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trabalho.Agenda.DTOs.CompromissoResponse;
import com.trabalho.Agenda.Mappers.CompromissoMapper;
import com.trabalho.Agenda.Reposiotry.CompromissoRepository;

@Service
public class CompromissoService {
    @Autowired
    private CompromissoRepository repository;
    public List<CompromissoResponse> getAllCompromisso() {
        return repository.findAll().stream().map(c -> CompromissoMapper.toDto(c)).collect(Collectors.toList());
    }
    
}