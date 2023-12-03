/** @format */

const express = require('express');

const { validateBody } = require('../../middlewares');
const { verifyEmailSchema } = require('../../models');
const { confirmVerify, reVerifyUser } = require('../../controllers/auth');
const { ctrlWrapper } = require('../../utils');

const verifyRouter = express.Router();

verifyRouter.get('/:verificationToken', ctrlWrapper(confirmVerify));

verifyRouter.post(
	'/',
	validateBody(verifyEmailSchema, 'Missing required field email'),
	ctrlWrapper(reVerifyUser)
);

module.exports = verifyRouter;
