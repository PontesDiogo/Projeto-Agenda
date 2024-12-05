package com.trabalho.Agenda.DTOs;

import java.time.LocalDateTime;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CompromissoRequest(
    @NotBlank(message = "O título é obrigatório")
    @Size(min = 3, message = "O título deve ter no mínimo 3 caracteres")
    String titulo,
  
    String descricao,

    @NotBlank(message = "A data de início é obrigatória")
    LocalDateTime dataInicio,
    @NotBlank(message = "A data final é obrigatória")
    LocalDateTime dataFim,
   
    String local
) {
    
}
