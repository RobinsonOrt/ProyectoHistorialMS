package com.proyecto.historial_ms.repositories;

import com.proyecto.historial_ms.models.Historial;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface HistorialRepository extends MongoRepository<Historial, String> {
    List<Historial> findByDocumento(String documento);
    List<Historial> findByMedicoId(String medicoId);
    //Historial findByDocumento(String documento);
}

