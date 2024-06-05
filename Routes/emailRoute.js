import { Router } from "express";
import { sendEmail } from "../Controllers/emailController.js";
import { sendContactDetails } from "../Controllers/contactDetailsController.js";

const router = Router();

router.post("/sendEmail", sendEmail);
router.post("/sendContactDetails", sendContactDetails)

export default router;