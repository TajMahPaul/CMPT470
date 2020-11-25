const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('rectangle', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		color: {
			allowNull: false,
			type: DataTypes.STRING,
        },
        height: {
			allowNull: false,
			type: DataTypes.INTEGER,
        },
        width: {
			allowNull: false,
			type: DataTypes.INTEGER,
        },
        area: {
			allowNull: false,
			type: DataTypes.INTEGER,
        },
        perimeter: {
			allowNull: false,
			type: DataTypes.INTEGER,
		}
	});
};