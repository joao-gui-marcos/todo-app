module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('tasks',
      [{
        description: 'Do the dishes',
        check: true
      },
      {
        description: 'Take the dog for a walk',
        check: false
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('tasks', null, {});
  },
};
