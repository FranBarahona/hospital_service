

const { models } = require('./../libs/sequalize');

class DoctorService {

  constructor(){
    this.doctors = [];
  }

  async createDoctorOrganization(data) {
    const newDoctor = await models.DoctorOrganization.create(data);
    return newDoctor;
  }

  async find(query) {
    const options = {
      where: {}
    }
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit =  limit;
      options.offset =  offset;
    }

    const { org } = query;
    if (org) {
      options.where.organization = org;
    }

    const doctors = await models.DoctorOrganization.findAll(options);
    return doctors;
  }



}

module.exports = DoctorService;
