import type { Sequelize, Model } from "sequelize";
import { analytics } from "./analytics";
import type { analyticsAttributes, analyticsCreationAttributes } from "./analytics";
import { reminders } from "./reminders";
import type { remindersAttributes, remindersCreationAttributes } from "./reminders";

export {
  analytics,
  reminders,
};

export type {
  analyticsAttributes,
  analyticsCreationAttributes,
  remindersAttributes,
  remindersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  analytics.initModel(sequelize);
  reminders.initModel(sequelize);


  return {
    analytics: analytics,
    reminders: reminders,
  };
}
