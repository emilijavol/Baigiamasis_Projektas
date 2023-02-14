import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, {answers} from '../database/data.js'

export async function getQuestions(req,res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

export async function postQuestion(req,res){
    try {
        Questions.insertMany({questions,answers }, function(err, data){
            res.json({ msg: "Data Saved"})
        })
    } catch (error) {
        res.json({ error })
    }
}

export async function deleteQuestions(req,res){
    try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted"});
   } catch (error) {
        res.json({ error })
   }
}

export async function getResult(req,res){
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

export async function postResult(req,res){
    try {
        const { username, result, attempts, points, achieved } = req.body;
        if(!username && !result) throw new Error('Data Not Provided');

        Results.create({ username, result, attempts, points, achieved }, function(err, data){
            res.json({ msg : "Result Saved "})
        })

   } catch (error) {
        res.json({error})
   }
}

export async function deleteResult(req,res){
    try {
        await Results.deleteMany();
        res.json({ msg : "Result Deleted"})
    } catch (error) {
        res.json({ error })
    }
}