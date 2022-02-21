"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateUserDto = void 0;
var graphql_1 = require("@nestjs/graphql");
var CreateUserDto = /** @class */ (function () {
    function CreateUserDto() {
    }
    __decorate([
        (0, graphql_1.Field)()
    ], CreateUserDto.prototype, "googleId");
    __decorate([
        (0, graphql_1.Field)()
    ], CreateUserDto.prototype, "name");
    __decorate([
        (0, graphql_1.Field)()
    ], CreateUserDto.prototype, "email");
    __decorate([
        (0, graphql_1.Field)()
    ], CreateUserDto.prototype, "photo");
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }),
        (0, graphql_1.Field)(function () { return Date; })
    ], CreateUserDto.prototype, "dateJoined");
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; })
    ], CreateUserDto.prototype, "batch");
    __decorate([
        (0, graphql_1.Field)()
    ], CreateUserDto.prototype, "department");
    __decorate([
        (0, graphql_1.Field)()
    ], CreateUserDto.prototype, "phonenumber");
    __decorate([
        (0, graphql_1.Field)()
    ], CreateUserDto.prototype, "isAdmin");
    __decorate([
        (0, graphql_1.Field)(function () { return [String]; })
    ], CreateUserDto.prototype, "events");
    __decorate([
        (0, graphql_1.Field)()
    ], CreateUserDto.prototype, "role");
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; })
    ], CreateUserDto.prototype, "team");
    CreateUserDto = __decorate([
        (0, graphql_1.ObjectType)()
    ], CreateUserDto);
    return CreateUserDto;
}());
exports.CreateUserDto = CreateUserDto;
