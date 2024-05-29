import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.sequelize.query('DROP EXTENSION "uuid-ossp";');
  }
};
