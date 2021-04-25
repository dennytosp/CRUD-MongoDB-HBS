var categoryServices = require('../services/catelogyServices')

exports.getListCategories = async function getListCategories(){
    return await categoryServices.getListCategories()
}