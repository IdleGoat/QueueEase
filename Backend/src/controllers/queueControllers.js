const { pool } = require('../config/config');


const queueController = {
    createQueue: async (req, res) => {
        try {
            const {
                customer_id
            } = req.body;
            
            const createQueueQuery = `
            INSERT INTO Queue (
                customer_id
            )
            VALUES ($1)
            RETURNING queue_id
            `;
                
            const createQueueValues = [
                customer_id
            ];
            
            const result = await pool.query(createQueueQuery, createQueueValues);
            const newQueueId = result.rows[0].queue_id;
    
            res.status(201).json({ queue_id: newQueueId });
        } catch (error) {
            console.error('Error creating queue', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

  };
  
  module.exports = queueController;