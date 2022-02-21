"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersModule = void 0;
var common_1 = require("@nestjs/common");
var users_service_1 = require("./users.service");
var users_resolver_1 = require("./users.resolver");
var google_stratergy_1 = require("./google.stratergy");
var mongoose_1 = require("@nestjs/mongoose");
var users_schema_1 = require("./users.schema");
var users_controller_1 = require("./users.controller");
var user_serialization_1 = require("./user.serialization");
var passport_1 = require("@nestjs/passport");
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        (0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forFeature([{ name: "User", schema: users_schema_1.UserSchema }]),
                passport_1.PassportModule.register({
                    session: true
                })
            ],
            controllers: [users_controller_1.UsersController, users_controller_1.AuthCheckController],
            providers: [users_resolver_1.UsersResolver, users_service_1.UsersService, google_stratergy_1.GoogleStrategy, user_serialization_1.userSerializer]
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
