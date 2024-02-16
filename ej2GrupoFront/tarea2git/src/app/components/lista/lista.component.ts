import { Component } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  clientes : any[] = []

  constructor(private service: ClienteService){}

  ngOnInit(): void{
    this.getClientes()
  }

  getClientes() : void{
    this.service.clienteList().subscribe({
      next : res => {
        this.clientes = res
        console.log(res)
      }
    })
  }
}
