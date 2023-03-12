const fastify = require('fastify');
const DoctorController = require('./../controller/doctor.controller');


const routes = [
    {
        url: '/doctor',
        method:'GET',
        handler:DoctorController.getDoctors
    },
    { 
        url: '/doctor',
        method:'POST',
        handler: DoctorController.postDoctorsOrganization
    },
];




module.exports = routes;