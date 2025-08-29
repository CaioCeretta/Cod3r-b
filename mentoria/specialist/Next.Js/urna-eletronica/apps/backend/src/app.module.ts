import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import RepositorioUsuarioArray from './auth/usuario-mem.repository';
import { DbModule } from './db/db.module';

@Module({
	imports: [AuthModule, DbModule],
	controllers: [AppController],
})
export class AppModule {}
