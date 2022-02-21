"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostsModule = void 0;
var common_1 = require("@nestjs/common");
var posts_service_1 = require("./posts.service");
var posts_resolver_1 = require("./posts.resolver");
var mongoose_1 = require("@nestjs/mongoose");
var post_schema_1 = require("./post.schema");
var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule = __decorate([
        (0, common_1.Module)({
            imports: [mongoose_1.MongooseModule.forFeature([{ name: "Post", schema: post_schema_1.PostSchema }])],
            providers: [posts_resolver_1.PostsResolver, posts_service_1.PostsService]
        })
    ], PostsModule);
    return PostsModule;
}());
exports.PostsModule = PostsModule;
