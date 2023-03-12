const DoctorService = require('./../service/doctor.service');

const service = new DoctorService();
class DoctorController{


    async getDoctors(req,reply){
        try {
            const doctors = await service.find(req.query);
            reply.send(doctors);
          } catch (error) {
            console.log(error);
          }
    }


    async postDoctorsOrganization(req,reply){
      try {
        const doctors = await service.createDoctorOrganization(req.body);
        reply.send(doctors);
      } catch (error) {
        console.log(error);
      }
    }

}
module.exports = new DoctorController();