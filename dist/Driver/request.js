"use strict";
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
exports.fetchData = void 0;
var axios_1 = __importDefault(require("axios"));
var fetchData = function (searchTerm) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var target, res, data, data, err_1;
        var _a, _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _g.trys.push([0, 2, , 3]);
                    target = "https://genius.com/api/search/multi?per_page=1&q=" + searchTerm;
                    return [4 /*yield*/, axios_1.default.get(target)];
                case 1:
                    res = _g.sent();
                    //   const mainData = JSON.stringify(res.data);
                    if (res.data.response.sections[0].hits.length > 2) {
                        data = {
                            status: 200,
                            url: ((_a = res.data.response.sections[1].hits[0]) === null || _a === void 0 ? void 0 : _a.result.url) || "Not found",
                            album: ((_b = res.data.response.sections[1].hits[0]) === null || _b === void 0 ? void 0 : _b.result.full_title) ||
                                "Not found",
                            thumbnail: (_c = res.data.response.sections[1].hits[0]) === null || _c === void 0 ? void 0 : _c.result.header_image_url,
                            artist: ((_e = (_d = res.data.response.sections[1].hits[0]) === null || _d === void 0 ? void 0 : _d.result.primary_artist) === null || _e === void 0 ? void 0 : _e.name) || "Not found",
                            release_date: ((_f = res.data.response.sections[1].hits[0]) === null || _f === void 0 ? void 0 : _f.result.release_date_for_display) || "Not found",
                        };
                        resolve(data);
                    }
                    else {
                        data = {
                            status: 500,
                            message: "Unable to find song: " +
                                searchTerm +
                                " or Internal Server Error !",
                        };
                        resolve(data);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _g.sent();
                    reject(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
};
exports.fetchData = fetchData;
