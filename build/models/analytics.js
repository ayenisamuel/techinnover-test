"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analytics = void 0;
const sequelize_1 = require("sequelize");
class analytics extends sequelize_1.Model {
    static initModel(sequelize) {
        analytics.init({
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
            date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            },
            eventType: {
                type: sequelize_1.DataTypes.ENUM('click', 'pageView'),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'analytics',
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
        return analytics;
    }
}
exports.analytics = analytics;
