const {Model,DataTypes,Sequelize} = require('sequelize');

const  ORGANIZATION_TABLE = require('./organization.model');
const DOCTOR_TABLE = require('./doctor.model');
const DOCTOR_ORGANIZATION_TABLE = 'doctor_organization';
const doctorOrganizationSchema = {
    id:{
        allowNull:false,
        AutoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER
    },
    doctor:{
        allowNull:false,
        field:'doctor',
        type: DataTypes.INTEGER,
        references:{
            model:DOCTOR_TABLE,
            key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'SET NULL'
    },
    organization:{
        allowNull:false,
        field:'organization',
        type: DataTypes.INTEGER,
        references:{
            model:ORGANIZATION_TABLE,
            key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'SET NULL'
    },
    isActive:{
        allowNull:true,
        field:'is_active',
        type: DataTypes.INTEGER
    }
}

class DoctorOrganization extends Model{
    static associate(models){
            DoctorOrganization.belongsTo(models.Doctor, {as: 'Doctor', foreignKey: 'doctor'});
            DoctorOrganization.belongsTo(models.Organization, {as: 'Organization', foreignKey: 'organization'});
    }

    static config(sequelize){
        return{
            sequelize,
            tableName:DOCTOR_ORGANIZATION_TABLE,
            modelName: 'DoctorOrganization',
            timestamps:false
        }
    }
}

module.exports = {DOCTOR_ORGANIZATION_TABLE,doctorOrganizationSchema,DoctorOrganization};