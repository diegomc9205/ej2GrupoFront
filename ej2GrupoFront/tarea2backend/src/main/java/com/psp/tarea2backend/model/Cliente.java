package com.psp.tarea2backend.model;

import jakarta.persistence.*;

@Entity
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    @Column(name = "apellido_uno")
    private String apellidoUno;
    @Column(name = "apellido_dos")
    private String apellidoDos;

    public Cliente(){}
    public Cliente(Long id, String nombre, String apellidoUno, String apellidoDos) {
        this.id = id;
        this.nombre = nombre;
        this.apellidoUno = apellidoUno;
        this.apellidoDos = apellidoDos;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidoUno() {
        return apellidoUno;
    }

    public void setApellidoUno(String apellidoUno) {
        this.apellidoUno = apellidoUno;
    }

    public String getApellidoDos() {
        return apellidoDos;
    }

    public void setApellidoDos(String apellidoDos) {
        this.apellidoDos = apellidoDos;
    }
}
