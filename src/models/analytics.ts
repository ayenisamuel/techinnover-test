import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface analyticsAttributes {
  id: number;
  user: number;
  date: Date;
  eventType: 'click' | 'pageView';
}

export type analyticsPk = "id";
export type analyticsId = analytics[analyticsPk];
export type analyticsOptionalAttributes = "id";
export type analyticsCreationAttributes = Optional<analyticsAttributes, analyticsOptionalAttributes>;

export class analytics extends Model<analyticsAttributes, analyticsCreationAttributes> implements analyticsAttributes {
  id!: number;
  user!: number;
  date!: Date;
  eventType!: 'click' | 'pageView';


  static initModel(sequelize: Sequelize.Sequelize): typeof analytics {
    analytics.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    eventType: {
      type: DataTypes.ENUM('click','pageView'),
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
