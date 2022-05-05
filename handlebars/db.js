const Sequelize = require("sequelize")

const sequelize = new Sequelize("andreteste01", "andre_root8224", "andre_root8224", {
				host: "db4free.net",
				dialect: "mysql"
})

module.exports = {
				Sequelize: Sequelize,
				sequelize: sequelize
}