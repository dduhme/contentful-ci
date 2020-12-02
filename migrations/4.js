module.exports = function runMigration(migration) {
    const author = migration.createContentType('author', {
        name: 'Author',
        description: 'Blog post author'
    });
    
    author.createField('firstname', {
        name: 'Firstname',
        type: 'Symbol'
    });
    author.createField('lastname', {
        name: 'Lastname',
        type: 'Symbol'
    });

    author.displayField('lastname');
  };