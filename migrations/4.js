module.exports = function runMigration(migration) {
    const author = migration.createContentType('author', {
        name: 'name'
    });

    author.createField('name', {
        name: 'Name',
        type: 'Symbol'
    });
    author.createField('bio', {
        name: 'Biography',
        type: 'Text'
    });

    author.displayField('name');
  };