exports.up = (pgm, run) => {
  pgm.addColumns('users', { email: { type: 'varchar(255)', notNull: true }})
  run()
};

exports.down = (pgm, run) => {
  pgm.dropColumns('users', ['email'])
  run()
};
