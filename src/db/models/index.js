const { Doctor, DoctorSchema } = require('./doctor.model');
const { Organization, OrganizationSchema } = require('./organization.model');
const { DoctorOrganization, doctorOrganizationSchema } = require('./doctorOrganization.model');



function setupModels(sequelize) {
    Doctor.init(DoctorSchema, Doctor.config(sequelize));
    Organization.init(OrganizationSchema, Organization.config(sequelize));
    DoctorOrganization.init(doctorOrganizationSchema, DoctorOrganization.config(sequelize));

  Doctor.associate(sequelize.models);
  Organization.associate(sequelize.models);
  DoctorOrganization.associate(sequelize.models);
}

module.exports = setupModels;