"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const auth_1 = require("@urna/auth");
const RepositorioUsuarioMemoria_1 = __importDefault(require("./RepositorioUsuarioMemoria"));
let AppController = class AppController {
    async getHello() {
        const usuario = {
            id: "1",
            nome: "Fulano",
            email: "fulano@ciclano.com",
            senha: "123456",
        };
        await (0, auth_1.loginUsuario)({
            email: usuario.email,
            repo: new RepositorioUsuarioMemoria_1.default(),
            senha: "123",
        });
        return {
            usuario,
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)("hello"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
//# sourceMappingURL=app.controller.js.map