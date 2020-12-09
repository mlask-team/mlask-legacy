import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus() {
    return 'Mlask Backend is running!'
  }
}
