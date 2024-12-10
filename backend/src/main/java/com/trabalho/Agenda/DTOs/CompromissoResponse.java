package com.trabalho.Agenda.DTOs;

import java.sql.Date;
import java.time.LocalDateTime;

public record CompromissoResponse(
    long id,
    String titulo,
    String descricao,
    Date dataInicio,
    Date dataFim,
    String local,
    String horaInicio,
    String horaFim
) {

   
    
}
