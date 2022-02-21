"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.postInput = void 0;
var graphql_1 = require("@nestjs/graphql");
var graphql_upload_1 = require("graphql-upload");
var postInput = /** @class */ (function () {
    function postInput() {
    }
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], postInput.prototype, "name");
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], postInput.prototype, "batch");
    __decorate([
        (0, graphql_1.Field)(function () { return [graphql_upload_1.GraphQLUpload] || [String]; }, { nullable: true })
    ], postInput.prototype, "images");
    __decorate([
        (0, graphql_1.Field)(function () { return [graphql_upload_1.GraphQLUpload] || [String]; }, { nullable: true })
    ], postInput.prototype, "posters");
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], postInput.prototype, "description");
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], postInput.prototype, "fromDate");
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], postInput.prototype, "toDate");
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], postInput.prototype, "session");
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], postInput.prototype, "venue");
    __decorate([
        (0, graphql_1.Field)(function () { return [String]; }, { nullable: true })
    ], postInput.prototype, "participants");
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], postInput.prototype, "participantsCount");
    __decorate([
        (0, graphql_1.Field)(function () { return [String]; }, { nullable: true })
    ], postInput.prototype, "chairman");
    postInput = __decorate([
        (0, graphql_1.InputType)()
    ], postInput);
    return postInput;
}());
exports.postInput = postInput;
