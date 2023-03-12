const {Model,DataTypes,Sequelize} = require('sequelize');

const ORGANIZATION_TABLE = 'organization';
const OrganizationSchema = {
    id:{
        allowNull:false,
        AutoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER
    },
    name:{
        allowNull:true,
        field:'name',
        type: DataTypes.STRING
    },
    address:{
        allowNull:true,
        field:'address',
        type: DataTypes.STRING
    },
}

class Organization extends Model{
    static associate(){
     //associate   
    }

    static config(sequelize){
        return{
            sequelize,
            tableName:ORGANIZATION_TABLE,
            modelName: 'Organization',
            timestamps:false
        }
    }
}

module.exports = {ORGANIZATION_TABLE,OrganizationSchema,Organization};