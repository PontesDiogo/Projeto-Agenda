package com.trabalho.Agenda.Services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trabalho.Agenda.DTOs.CompromissoRequest;
import com.trabalho.Agenda.DTOs.CompromissoResponse;
import com.trabalho.Agenda.Entities.Compromisso;
import com.trabalho.Agenda.Mappers.CompromissoMapper;
import com.trabalho.Agenda.Reposiotry.CompromissoRepository;

@Service
public class CompromissoService {
    @Autowired
    private CompromissoRepository repository;

    public List<CompromissoResponse> getAllCompromisso() {
        return repository.findAll().stream().map(c -> CompromissoMapper.toDto(c)).collect(Collectors.toList());
    }

    public CompromissoResponse getCompromissoById(Long id) {
        Compromisso compromisso = repository.findById(id).orElseThrow(
                () -> new RuntimeException("Compromisso não cadastrado"));
        return CompromissoMapper.toDto(compromisso);
    }

    // public CompromissoResponse getCompromissoByName(String titulo) {
    // Compromisso compromisso = repository.findByTitulo(titulo).orElseThrow(
    // () -> new RuntimeException("Compromisso não cadastrado"));
    // return CompromissoMapper.toDto(compromisso);

    // }

    public CompromissoResponse save(CompromissoRequest compromisso) {
        Compromisso newCompromisso = repository.save(CompromissoMapper.toEntity(compromisso))   ;
        return CompromissoMapper.toDto(newCompromisso);
    }

    public void update(CompromissoRequest compromisso, Long id) {
        Compromisso aux = repository.getReferenceById(id);

        aux.setTitulo(compromisso.titulo());
        aux.setDescricao(compromisso.descricao());
        aux.setDataInicio(compromisso.dataInicio());
        aux.setDataFim(compromisso.dataFim());
        aux.setLocal(compromisso.local());

        repository.save(aux);
    }

    public void delete(Long id) {

        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new RuntimeException("Compromisso nao cadastrado");
        }
    }
}
