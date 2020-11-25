const { Sequelize } = require('sequelize');
const {host, name, user, password} = require('../db.config');

const sequelize = new Sequelize(name, user, password, {
	host: host,
	dialect: 'mysql', 
	logQueryParameters: true,
	benchmark: true
});

const models = [
	require('./rectangle')
	// could add more here
];

for (const model of models) {
	model(sequelize);
}

sequelize.sync();
module.exports = sequelize;