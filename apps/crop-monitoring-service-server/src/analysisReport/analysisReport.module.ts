import { Module } from "@nestjs/common";
import { AnalysisReportModuleBase } from "./base/analysisReport.module.base";
import { AnalysisReportService } from "./analysisReport.service";
import { AnalysisReportController } from "./analysisReport.controller";
import { AnalysisReportResolver } from "./analysisReport.resolver";

@Module({
  imports: [AnalysisReportModuleBase],
  controllers: [AnalysisReportController],
  providers: [AnalysisReportService, AnalysisReportResolver],
  exports: [AnalysisReportService],
})
export class AnalysisReportModule {}
