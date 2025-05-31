import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  users =[
    {id: 1, name: 'María Perez' , email: 'maria@example.com'},
     { id: 2, name: 'Juan García', email: 'juan@example.com' },
    { id: 3, name: 'Lucía López', email: 'lucia@example.com' },

  ];


}
