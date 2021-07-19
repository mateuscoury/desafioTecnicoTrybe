const Usuarios = (sequelize, DataTypes) => {
  const Usuario = sequelize.define("Usuario", {
    nome: DataTypes.STRING,
    telNumero: DataTypes.INTEGER,
    celNumero: DataTypes.INTEGER,
    endereço: DataTypes.STRING,
    especialidades: DataTypes.STRING,
  }, {
    timestamps: false
  })
  return Usuario
}

module.exports = Usuarios