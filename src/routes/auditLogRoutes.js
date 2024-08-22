const express = require('express');
const router = express.Router();

module.exports = (di) => {
    const auditLogController = di.get('auditLogController');

    router.get('/', auditLogController.getAuditLogs.bind(auditLogController));

    return router;
};
