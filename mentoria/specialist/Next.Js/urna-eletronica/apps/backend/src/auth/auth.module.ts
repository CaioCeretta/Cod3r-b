import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { BcryptProvider } from './bcrypt.provider';
import RepositorioUsuarioArray from './usuario-mem.repository';

@Module({
	providers: [RepositorioUsuarioArray, BcryptProvider],
	controllers: [AuthController],
})
export class AuthModule {}
