class AuditLogService {
    constructor(auditLogModel) {
        this.auditLogModel = auditLogModel;
    }

    async createLog(data) {
        return this.auditLogModel.create(data);
    }

    async getLogs(filter) {
        return this.auditLogModel.find(filter).populate('user').populate('book');
    }
}

module.exports = AuditLogService;
