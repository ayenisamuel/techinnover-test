"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reminders = void 0;
const sequelize_1 = require("sequelize");
class reminders extends sequelize_1.Model {
    static initModel(sequelize) {
        reminders.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            user: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            description: {
                type: sequelize_1.DataTypes.STRING(300),
                allowNull: false
            },
            date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'reminders',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
        return reminders;
    }
}
exports.reminders = reminders;
