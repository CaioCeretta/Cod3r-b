import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AuthController } from "./auth/auth.controller";
import { AuthModule } from "./auth/auth.module";
import { DbModule } from './db/db.module';

@Module({
	imports: [AuthModule, DbModule],
	controllers: [AppController, AuthController],
})
export class AppModule {}
