const express = require('express');
const router = express.Router();
const { contactForm, contactBlogAuthorForm } = require('../controllers/form');

// validators
const { runValidation } = require('../libs/validators');
const { contactFormValidator } = require('../libs/validators/form');

router.post('/contact', contactFormValidator, runValidation, contactForm);
router.post('/contact-blog-author', contactFormValidator, runValidation, contactBlogAuthorForm);

module.exports = router;
