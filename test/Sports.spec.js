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
Object.defineProperty(exports, "__esModule", { value: true });
const CreateSports_service_1 = require("../src/modules/sports/services/CreateSports.service");
describe('Test Sports', () => {
    it('Create Sports', () => __awaiter(void 0, void 0, void 0, function* () {
        const sportService = new CreateSports_service_1.CreateSports();
        const sportData = {
            id: 1,
            name: 'sport test',
            category: 'category sports test',
            actived: true,
            create_at: new Date(),
            update_at: new Date(),
        };
    }));
});
