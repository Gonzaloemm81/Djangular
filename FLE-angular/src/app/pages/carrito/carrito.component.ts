import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPayPalConfig } from 'ngx-paypal';
import { ICreateOrderRequest } from 'ngx-paypal'
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  //paypal
  public payPalConfig?: IPayPalConfig;

  serv: any
  carritoForm: FormGroup;
  total: number = 0;
  subtotal: number = 0;
  agregado: boolean = false;

  items: number[] = [];

  sucursales = [
    { id: 0, nombre: "Buenos Aires" },
    { id: 1, nombre: "Córdoba" },
    { id: 2, nombre: "Mendoza" },
    { id: 3, nombre: "Rosario" }
  ];

  distKm: number[][] = [
    [0, 100, 350, 250],
    [100, 0, 150, 300],
    [350, 150, 0, 200],
    [250, 300, 200, 0]
  ];

  constructor(public api: ApiService, private formBuilder: FormBuilder) {
    this.api.obtenerServicios().subscribe({
      next: (apiData) => {
        this.serv = apiData;
      },
      error: (errorData) => {
        console.error(errorData);
      }
    })

    this.carritoForm = this.formBuilder.group({
      servChoice: ['', [Validators.required]],
      sucursalInicio: ['', [Validators.required]],
      sucursalFinal: ['', [Validators.required]],
    })
  }





  ngOnInit(): void {
    this.initConfig();
  }

  //paypal
  private initConfig(): void {
    this.payPalConfig = {

      currency: "USD",
      clientId: "AdzoRCJFyPoLkL4QWE3YnagUjes2CR1pJe7b5sRVpwcYs61JFqZPtrgvT0QgzjSfoDm0wvBvWYD6mIZ9",
      //tslint:disable-next-line: no-angle-bracket-type-assertion
      createOrderOnClient: (data) => <ICreateOrderRequest>{

        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: this.total.toString(),
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: this.total.toString(),
              }
            }
          },
          items: [
            {
              name: 'Servicio',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'USD',
                value: this.total.toString(),
              },
            },
            
          ]
        }]

      },

      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('OnApprove - transaction was approved, but not authorized.')
        actions.order.get().then((details: any) => {

          console.log('onApprove - you can get full order details inside.', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform.');
      },



      onCancel: (data, actions) => {
        console.log("OnCancel", data, actions);
      },
      onError: (err) => {
        console.log("OnError", err);
      },
      onClick: (data, actions) => {
        console.log("onClick", data, actions);
      }
    }

  }

  agregarAlCarrito() {

    const formValues = {
      servicio: this.carritoForm.value.servChoice,
      inicio: this.carritoForm.value.sucursalInicio,
      final: this.carritoForm.value.sucursalFinal
    }

    if (this.carritoForm.invalid) {
      alert("Complete el formulario para poder agregar el servicio al carrito")
      return;
    } else if (formValues.inicio == formValues.final) {
      alert("Seleccione distintas sucursales para realizar su envío")
    } else {
      this.subtotal = formValues.servicio * this.distKm[formValues.inicio][formValues.final]
      this.total += formValues.servicio * this.distKm[formValues.inicio][formValues.final]
      this.carritoForm.reset()
      this.agregado = true;
      this.items.push(this.subtotal)
    }

  }

  pagar() {
    alert("Se está procesando el pago...")
    this.total = 0;
    this.agregado = false;
    this.items = [];
  }

  quitar(item: number) {
    this.total -= item

    const elementoBuscado: number = item;

    const indice: number = this.items.findIndex((elemento) => elemento === elementoBuscado);

    if (indice !== -1) {
      this.items.splice(indice, 1);
      console.log("Elemento eliminado:", elementoBuscado);
    } else {
      console.log("Elemento no encontrado");
    }

  }
}

