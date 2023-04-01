import { Injectable } from '@nestjs/common';

type TUser = {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable()
export class AppService {
  getUsers(): TUser[] {
    return [
      {
        id: 1,
        name: 'John Smith',
        email: 'test@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        email: 'test@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Michael Williams',
        email: 'test@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'JEmily Brown',
        email: 'test@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: 'Andrew Davis',
        email: 'test@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: 'Jennifer Wilson',
        email: 'test@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: 'James Jones',
        email: 'test@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: 'Jessica Anderson',
        email: 'test@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        name: 'William Thompson',
        email: 'test@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        name: 'Elizabeth Taylor',
        email: 'test@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

  }
}
