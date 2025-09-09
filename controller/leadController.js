const leadModel = require('../models/leadModel');

//Create Lead Controller
const createLeadController = async (req,resp)=>{
    try {
        const {name,email,phone,message} = req.body
        if(!name || !email || !phone || !message)
        {
            return resp.status(400).send({
                success:false,
                message:'All fields are required',
            })
        }
        const existingLead = await leadModel.findOne({email});
        if(existingLead)
        {
            return resp.status(200).send({
                success:true,
                message:'Lead already exists',
            })
        }

        const lead = new leadModel({name,email,phone,message})
        await lead.save();

        resp.status(201).send({
            success:true,
            message:'Lead created successfully',
            lead
        })
    } catch (error) {
        console.log(error);
        resp.status(500).send({
            success:false,
            message:'Error in create lead api',
            error:error.message
        })
    }
}

//GET ALL LEADS CONTROLLER

const getLeadsController = async ( req,resp ) =>{
    try {
        const leads = await leadModel.find({}).sort({createdAt:-1});
        console.log(leads);
        
        if(leads.length === 0)
        {
            return resp.status(404).send({
                success:false,
                message:"No Leads Found"
            })
        }

        resp.status(200).send({
            success:true,
            totalCount: leads.length,
            data:leads
        })
    } catch (error) {
        console.log(error);
        resp.status(500).send({
            success:false,
            message:'Error in get leads api',
            error:error.message
        })
    }
}

module.exports = {createLeadController,getLeadsController};