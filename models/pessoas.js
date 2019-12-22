const findAll = async knex => await knex('pessoas')



  const findById = async(knex, id) => {
    const results = await knex('pessoas').where({id})
    
               if(results.length>0){
                return results[0]              
                }else{
                    return {}
                }
            }
       

const deleteOne = async(knex, id) => await knex('pessoas').where({id}).del().limit(1)

const create = async(knex, data) => await knex('pessoas').insert(data)    

const update = async(knex, id,  data) => await knex('pessoas').where({id}).update(data)    

module.exports ={
    findAll,
    findById,
    deleteOne, 
    create, 
    update
}