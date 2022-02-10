import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface remindersAttributes {
  id: number;
  user: number;
  description: string;
  date: Date;
}

export type remindersPk = "id";
export type remindersId = reminders[remindersPk];
export type remindersOptionalAttributes = "id";
export type remindersCreationAttributes = Optional<remindersAttributes, remindersOptionalAttributes>;

export class reminders extends Model<remindersAttributes, remindersCreationAttributes> implements remindersAttributes {
  id!: number;
  user!: number;
  description!: string;
  date!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof reminders {
    reminders.init({
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
    description: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
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
