const auditLogger = (auditLogService) => async (req, res, next) => {
    const logData = {
        action: req.method,
        user: req.userId, // Assuming you have a userId in req
        timestamp: new Date(),
    };
    await auditLogService.createLog(logData);
    next();
};

module.exports = auditLogger;
