import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '../../servicios/users.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {
// inyectar el servicio users -> con inject, al igual se puede hacer con constructor como se ha hecho desde siempre
public usersService = inject(UsersService)


}
