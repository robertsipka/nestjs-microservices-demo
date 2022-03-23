import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {

  @MessagePattern({cmd: 'greeting'})
  getGreetingMessage(name: string): string {
    return `Helloka ${name}`;
  }

  @MessagePattern({cmd: 'greeting-async'})
  async getGreetingMessageAysnc(name: string): Promise<string> {
    return `Hello ${name}`;
  }

  @Get()
  async getHello(): Promise<any> {
    return "hello from server"
  }

  count = 0;

  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): number {
    this.count++;
    console.log('Recieved message number ' + this.count);

    return (data || []).reduce((a, b) => a + b);
  }
}

