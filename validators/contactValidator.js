const { body, validationResult } = require('express-validator');

exports.validateContact = [
    body('fullname')
        .isLength({ min: 2 }).withMessage('Full name must be at least 2 characters long')
        .isAlpha('en-US', { ignore: ' ' }).withMessage('Full name must contain only letters and spaces'),
    body('email')
        .isEmail().withMessage('Email is required and must be valid'),
    body('company')
        .isLength({ min: 2 }).withMessage('Company name must be at least 2 characters long'),
    body('phone')
        .matches(/^\+?[1-9]\d{1,14}$/).withMessage('Phone number must be valid'),
    body('helpText')
        .isLength({ min: 10 }).withMessage('Please let us know how we can help you (at least 10 characters)'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
