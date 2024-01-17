"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLyrics = void 0;
var request_1 = require("./Driver/request");
var axios_1 = __importDefault(require("axios"));
var cheerio = __importStar(require("cheerio"));
/**
 * Returns
 *
 * @param {string} query - The name of the song
 * @description It will return an object with status, url, album, artist, release_date, thumbnail, lyrics
 * @author FantoX
 * @see {@link https://github.com/FantoX/lyrics-scraper} Source code on GitHub
 * @returns
 */
var getLyrics = function (query) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
                var data, res, headers, targetHtml, $_1, data1, arrX_1, maindata, data, data, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 5, , 6]);
                            if (!query) {
                                data = {
                                    status: 400,
                                    message: "Song name qurey is required!",
                                };
                                resolve(data);
                            }
                            return [4 /*yield*/, (0, request_1.fetchData)(query)];
                        case 1:
                            res = _a.sent();
                            if (!(res.status == 200 && res.url !== "Not found")) return [3 /*break*/, 3];
                            headers = {
                                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
                                "Accept-Encoding": "gzip, deflate, br",
                                "Accept-Language": "en-US,en;q=0.9",
                                "Cache-Control": "max-age=0",
                                "Sec-Fetch-Dest": "document",
                                "Sec-Fetch-Mode": "navigate",
                                "Sec-Fetch-Site": "none",
                                "Sec-Fetch-User": "?1",
                                "Sec-Gpc": "1",
                                "Upgrade-Insecure-Requests": "1",
                                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                            };
                            return [4 /*yield*/, axios_1.default.get(res.url, { headers: headers })];
                        case 2:
                            targetHtml = _a.sent();
                            $_1 = cheerio.load(targetHtml.data);
                            data1 = $_1(".kUgSbL");
                            arrX_1 = [];
                            data1.each(function (i, el) {
                                var dtx = $_1(el).html();
                                $_1 = cheerio.load(dtx, {
                                    normalizeWhitespace: true,
                                });
                                $_1("br").replaceWith("\n");
                                var XRT = $_1.text();
                                arrX_1.push(XRT);
                            });
                            maindata = arrX_1.join("\n");
                            if (!maindata ||
                                maindata == "" ||
                                maindata == null ||
                                maindata == undefined) {
                                data = {
                                    status: 500,
                                    message: "Unable to find song: " + query + " or Internal Server Error !",
                                };
                                resolve(data);
                            }
                            else {
                                data = {
                                    status: 200,
                                    url: res.url || "Not Found",
                                    album: res.album || "Not Found",
                                    artist: res.artist || "Not Found",
                                    release_date: res.release_date || "Not Found",
                                    thumbnail: res.thumbnail || "Not Found",
                                    lyrics: maindata || "Not Found",
                                };
                                resolve(data);
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            resolve(res);
                            _a.label = 4;
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            err_1 = _a.sent();
                            reject(err_1);
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
exports.getLyrics = getLyrics;
