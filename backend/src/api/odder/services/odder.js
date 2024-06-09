'use strict';

/**
 * odder service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::odder.odder');
