package com.psp.tarea2backend.controllers;

import com.psp.tarea2backend.model.Cliente;
import com.psp.tarea2backend.services.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/clientes")
@RestController
@CrossOrigin
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @PostMapping("/save")
    public Cliente guardarClientes(@RequestBody Cliente cliente) {
        return clienteService.saveCliente(cliente);
    }

    @GetMapping
    public List<Cliente> listarClientes() {
        return clienteService.getClientes();
    }

}
