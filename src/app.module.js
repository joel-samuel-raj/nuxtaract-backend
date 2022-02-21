"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var apollo_1 = require("@nestjs/apollo");
var common_1 = require("@nestjs/common");
var graphql_1 = require("@nestjs/graphql");
var posts_module_1 = require("./posts/posts.module");
var users_module_1 = require("./users/users.module");
var constants_1 = require("./constants");
var app_controller_1 = require("./app.controller");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                graphql_1.GraphQLModule.forRoot({
                    driver: apollo_1.ApolloDriver,
                    autoSchemaFile: 'graph.gql'
                }),
                posts_module_1.PostsModule,
                users_module_1.UsersModule,
                mongoose_1.MongooseModule.forRoot(constants_1.MONGO_DB_CONNECTION_STRING, function () {
                    common_1.Logger.log("Mongo on the GO");
                }),
            ],
            controllers: [app_controller_1.AppController]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
