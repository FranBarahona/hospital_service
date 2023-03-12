const {Model,DataTypes,Sequelize} = require('sequelize');

const DOCTOR_TABLE = 'doctor';

const DoctorSchema = {
    id:{
        allowNull:false,
        AutoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER
    },
    firstName:{
        allowNull:true,
        field:'first_name',
        type: DataTypes.STRING
    },
    lastName:{
        allowNull:true,
        field:'last_name',
        type: DataTypes.STRING
    },
    isActive:{
        allowNull:true,
        field:'is_active',
        type: DataTypes.INTEGER
    }
}

class Doctor extends Model{
    static associate(){
    }

    static config(sequelize){
        return{
            sequelize,
            tableName:DOCTOR_TABLE,
            modelName: 'Doctor',
            timestamps:false
        }
    }
}

module.exports = {DOCTOR_TABLE,DoctorSchema,Doctor};

