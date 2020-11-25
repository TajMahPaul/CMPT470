const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'mysql', 
	logQueryParameters: true,
	benchmark: true
});

const models = [
	require('./rectangle')
	// could add more here
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

module.exports = sequelize;