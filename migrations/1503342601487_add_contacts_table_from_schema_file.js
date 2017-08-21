exports.up = (pgm, run) => {
  pgm.createTable('contacts', {
    id: { type: 'serial' },
    first_name: { type: 'varchar(255)', notNull: true },
    last_name: { type: 'varchar(255)', notNull: true}
  })
  run()
};

exports.down = (pgm, run) => {
  pgm.dropTable('contacts')
  run()
};
