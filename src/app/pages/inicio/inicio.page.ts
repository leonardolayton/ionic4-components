import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
    name: 'Action Sheet',
    redirectTo: '/action-sheet'
    },
    {
    name: 'Alert',
    redirectTo: '/alert'
    },
    {
    name: 'Avatar',
    redirectTo: '/avatar'
    },
    {
    name: 'Buttons & Router',
    redirectTo: '/buttons'
    },

    {
    name: 'Cards',
    redirectTo: '/card'
    },

    {
      name: 'Checkbox',
      redirectTo: '/check'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
name: string;
redirectTo: string;
}
