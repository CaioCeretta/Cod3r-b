import { Controller, Get } from "@nestjs/common";
// biome-ignore lint/style/useImportType: NestJS precisa da classe em runtime
import { AppService } from "./app.service";

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): { message: string } {
		return {
			message: this.appService.getHello(),
		};
	}
}
