package com.trabalho.Agenda.DTOs;

import java.time.LocalDateTime;

public record CompromissoResponse(
    long id,
    String titulo,
    String descricao,
    LocalDateTime dataInicio,
    LocalDateTime dataFim,
    String local,
    String horaInicio,
    String horaFim
) {
    
}
