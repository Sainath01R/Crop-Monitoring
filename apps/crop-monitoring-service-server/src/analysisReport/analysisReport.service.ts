import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnalysisReportServiceBase } from "./base/analysisReport.service.base";

@Injectable()
export class AnalysisReportService extends AnalysisReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
