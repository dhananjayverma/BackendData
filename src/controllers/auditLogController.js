class AuditLogController {
    constructor(auditLogService) {
        this.auditLogService = auditLogService;
    }

    async getAuditLogs(req, res) {
        const logs = await this.auditLogService.getLogs(req.query);
        res.status(200).json(logs);
    }
}

module.exports = AuditLogController;
