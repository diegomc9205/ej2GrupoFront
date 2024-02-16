import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent {

form: FormGroup 

constructor(private guardarService: ClienteService, private formBuilder:FormBuilder){

  this.form = this.formBuilder.group ({
    nombre : "",
    apellidoUno :"", 
    apellidoDos: "",
  })
 
}
getForm(){
  this.guardarService.addCliente(this.form.value).subscribe({
    next : res => {
      console.log(res)
    }
  })
}
}