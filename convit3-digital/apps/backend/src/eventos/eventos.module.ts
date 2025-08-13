import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { EventoPrisma } from './evento.prisma';
import { EventosController } from './eventos.controller';

@Module({
  imports: [DbModule],
  controllers: [EventosController],
  providers: [EventoPrisma],
})
export class EventosModule {}
