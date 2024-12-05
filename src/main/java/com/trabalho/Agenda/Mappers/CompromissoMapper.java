package com.trabalho.Agenda.Mappers;

import com.trabalho.Agenda.DTOs.CompromissoRequest;
import com.trabalho.Agenda.DTOs.CompromissoResponse;
import com.trabalho.Agenda.Entities.Compromisso;

public class CompromissoMapper {

    public static CompromissoResponse toDto(Compromisso compromisso) {
        return new CompromissoResponse(compromisso.getId(), compromisso.getTitulo(), compromisso.getDescricao(),
                compromisso.getDataInicio(), compromisso.getDataFim(), compromisso.getLocal());

    }
    public static Compromisso toEntity(CompromissoRequest compromissoRequest) {
        Compromisso compromisso = new Compromisso();
        compromisso.setDataInicio(compromissoRequest.dataInicio());
        compromisso.setDataFim(compromissoRequest.dataFim());
        compromisso.setDescricao(compromissoRequest.descricao());
        compromisso.setTitulo(compromissoRequest.titulo());
        compromisso.setLocal(compromissoRequest.local());
        return compromisso;
    }
}
