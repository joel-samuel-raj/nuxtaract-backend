"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.PostsResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var post_querydto_1 = require("./post.querydto");
var fs_1 = require("fs");
var PostsResolver = /** @class */ (function () {
    function PostsResolver(postsService) {
        this.postsService = postsService;
    }
    PostsResolver.prototype.writeFile = function (stream, filename) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        stream
                            .pipe((0, fs_1.createWriteStream)("".concat(process.cwd(), "/src/posts/uploads/").concat(filename)))
                            .on('finish', function () { return resolve(true); })
                            .on('error', function (err) { return reject(err); });
                    })];
            });
        });
    };
    PostsResolver.prototype.createFile = function (arr) {
        return __awaiter(this, void 0, void 0, function () {
            var stringArr, files, _i, files_1, file, fileExtension, temp, fileName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stringArr = [];
                        console.log(arr);
                        return [4 /*yield*/, Promise.all(arr)];
                    case 1:
                        files = _a.sent();
                        for (_i = 0, files_1 = files; _i < files_1.length; _i++) {
                            file = files_1[_i];
                            fileExtension = file.filename.split('.').pop();
                            temp = file.filename.split('.');
                            fileName = "".concat(temp.splice(0, temp.length - 1).join(''), "-").concat(Date.now(), ".").concat(fileExtension);
                            this.writeFile(file.createReadStream(), fileName);
                            stringArr.push(fileName);
                        }
                        return [2 /*return*/, stringArr];
                }
            });
        });
    };
    PostsResolver.prototype.resolve = function (arr, key, input) {
        return __awaiter(this, void 0, void 0, function () {
            var res, string;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        res = arr;
                        return [4 /*yield*/, this.createFile(res)];
                    case 1:
                        string = _a.sent();
                        input[key] = string;
                        return [2 /*return*/, input];
                }
            });
        });
    };
    PostsResolver.prototype.hello = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, 'Hello'];
            });
        });
    };
    PostsResolver.prototype.posts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.postsService.findAll()];
            });
        });
    };
    PostsResolver.prototype.createPost = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var images, posters_1;
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    images = input.images;
                    posters_1 = input.posters;
                    delete input.images;
                    delete input.posters;
                    //   Promise.all([
                    //     this.createFile(images),
                    //     this.createFile(posters)
                    //   ]).then((values) => { 
                    //       images = values[0], 
                    //       posters = values[1]  
                    //     }).then(() => { 
                    //         input.images = images
                    //         input.posters = posters
                    //         this.postsService.create(input)
                    //       })
                    //   return true
                    // } catch (error) {
                    if (images && posters_1) {
                        this.resolve(images, "images", input).then(function () {
                            _this.resolve(posters_1, "posters", input).then(function (res) {
                                _this.postsService.create(res);
                            });
                        });
                    }
                    if (images && !posters_1) {
                        this.resolve(images, "images", input).then(function (res) {
                            _this.postsService.create(res);
                        });
                    }
                    if (!images && posters_1) {
                        this.resolve(posters_1, "posters", input).then(function (res) {
                            _this.postsService.create(res);
                        });
                    }
                    return [2 /*return*/, true];
                }
                catch (error) {
                    console.error(error);
                    return [2 /*return*/, false];
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        (0, graphql_1.Query)(function () { return String; })
    ], PostsResolver.prototype, "hello");
    __decorate([
        (0, graphql_1.Query)(function () { return [post_querydto_1.CreatePostDto]; })
    ], PostsResolver.prototype, "posts");
    __decorate([
        (0, graphql_1.Mutation)(function () { return Boolean; }),
        __param(0, (0, graphql_1.Args)('input'))
    ], PostsResolver.prototype, "createPost");
    PostsResolver = __decorate([
        (0, graphql_1.Resolver)()
    ], PostsResolver);
    return PostsResolver;
}());
exports.PostsResolver = PostsResolver;
