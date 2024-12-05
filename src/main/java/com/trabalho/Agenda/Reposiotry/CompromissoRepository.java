package com.trabalho.Agenda.Reposiotry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trabalho.Agenda.Entities.Compromisso;

public interface CompromissoRepository extends JpaRepository<Compromisso, Long> {
    
}
