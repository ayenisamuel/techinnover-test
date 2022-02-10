"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = exports.reminders = exports.analytics = void 0;
const analytics_1 = require("./analytics");
Object.defineProperty(exports, "analytics", { enumerable: true, get: function () { return analytics_1.analytics; } });
const reminders_1 = require("./reminders");
Object.defineProperty(exports, "reminders", { enumerable: true, get: function () { return reminders_1.reminders; } });
function initModels(sequelize) {
    analytics_1.analytics.initModel(sequelize);
    reminders_1.reminders.initModel(sequelize);
    return {
        analytics: analytics_1.analytics,
        reminders: reminders_1.reminders,
    };
}
exports.initModels = initModels;
