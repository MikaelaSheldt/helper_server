const Sequelize = require('sequelize')
const db = require('../database')

const Block = db.define('block', {
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  seconds: Sequelize.INTEGER,
  priority: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['high', 'medium', 'low']]
    }
  },
  status: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['active', 'paused', 'retired']]
    }
  },
  mutable: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  morning: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  day: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  night: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  recover: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  category: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['weekend', 'weekday']]
    }
  }
})
