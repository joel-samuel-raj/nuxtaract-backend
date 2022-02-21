"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreatePostDto = void 0;
var graphql_upload_1 = require("graphql-upload");
var graphql_1 = require("@nestjs/graphql");
var CreatePostDto = /** @class */ (function () {
    function CreatePostDto() {
    }
    __decorate([
        (0, graphql_1.Field)()
    ], CreatePostDto.prototype, "name");
    __decorate([
        (0, graphql_1.Field)()
    ], CreatePostDto.prototype, "batch");
    __decorate([
        (0, graphql_1.Field)(function () { return [graphql_upload_1.GraphQLUpload] || [String]; })
    ], CreatePostDto.prototype, "images");
    __decorate([
        (0, graphql_1.Field)(function () { return [graphql_upload_1.GraphQLUpload] || [String]; })
    ], CreatePostDto.prototype, "posters");
    __decorate([
        (0, graphql_1.Field)()
    ], CreatePostDto.prototype, "description");
    __decorate([
        (0, graphql_1.Field)()
    ], CreatePostDto.prototype, "fromDate");
    __decorate([
        (0, graphql_1.Field)()
    ], CreatePostDto.prototype, "toDate");
    __decorate([
        (0, graphql_1.Field)()
    ], CreatePostDto.prototype, "session");
    __decorate([
        (0, graphql_1.Field)()
    ], CreatePostDto.prototype, "venue");
    __decorate([
        (0, graphql_1.Field)(function () { return [String]; })
    ], CreatePostDto.prototype, "participants");
    __decorate([
        (0, graphql_1.Field)()
    ], CreatePostDto.prototype, "participantsCount");
    __decorate([
        (0, graphql_1.Field)(function () { return [String]; })
    ], CreatePostDto.prototype, "chairman");
    CreatePostDto = __decorate([
        (0, graphql_1.ObjectType)()
    ], CreatePostDto);
    return CreatePostDto;
}());
exports.CreatePostDto = CreatePostDto;
