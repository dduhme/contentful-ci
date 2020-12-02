module.exports = function runMigration(migration) {
    const author = migration.createContentType('author');

    author.createField('name', {
        name: 'Name',
        type: 'Symbol'
    });
    author.createField('bio', {
        name: 'Biography',
        type: 'RichText'
    });

    author.displayField('name');
  };