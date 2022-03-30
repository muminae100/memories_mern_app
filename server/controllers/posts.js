import express from 'express';
import mongoose from 'mongoose';


const router = express.Router();

export const getPosts = async (req, res) => { 
    res.send('Hello world!');
}


export default router;