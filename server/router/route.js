import {Router} from "express";
const router=Router();
import * as controller from '../controllers/controller.js'




router.route('/questions')
    .get(controller.getQuestions)
    .post(controller.postQuestion)
    .delete(controller.deleteQuestions)



router.route('/result')
    .get(controller.getResult)
    .post(controller.postResult)
    .delete(controller.deleteResult)






export default router;

