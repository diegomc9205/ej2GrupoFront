package com.psp.tarea2backend.services;

import com.psp.tarea2backend.model.Cliente;
import com.psp.tarea2backend.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente saveCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }


    public List<Cliente> getClientes() {
        return clienteRepository.findAll();
    }
}
