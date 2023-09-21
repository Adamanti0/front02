import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  items: any[] = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      routerLink: ['/home']
    },
    {
      label: 'Productos',
      icon: 'pi pi-shopping-cart',
      items: [
        {
          label: 'Ropa',
          icon: 'pi pi-gift',
          routerLink: ['/products/clothing']
        },
        {
          label: 'Electrónica para musica electronica',
          icon: 'pi pi-desktop',
          routerLink: ['/products/electronics']
        }
      ]
    },
    {
      label: 'Contacto',
      icon: 'pi pi-envelope',
      routerLink: ['/contact']
    }
  ];
}
