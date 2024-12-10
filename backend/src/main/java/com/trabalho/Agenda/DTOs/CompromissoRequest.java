package com.trabalho.Agenda.DTOs;

import java.sql.Date;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CompromissoRequest(
    @NotBlank(message = "O título é obrigatório")
    @Size(min = 3, message = "O título deve ter no mínimo 3 caracteres")
    String titulo,
  
    String descricao,

    
    Date dataInicio,
   
    Date dataFim,
   
    String local,
    String horaInicio,
    String horaFim
) {
    
}
