import { Controller, Get, Header } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiProduces, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Misc')
export class AppController {
  constructor() {}

  @Get()
  @Header('Content-Type', 'text/plain; charset=utf-8')
  @ApiOperation({ summary: 'Health check' })
  @ApiOkResponse({ description: 'Success', type: String, example: 'ok' })
  @ApiProduces('text/plain')
  healthCheck(): string {
    return 'ok';
  }
}
