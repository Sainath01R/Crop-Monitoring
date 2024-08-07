import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnalysisReportService } from "./analysisReport.service";
import { AnalysisReportControllerBase } from "./base/analysisReport.controller.base";

@swagger.ApiTags("analysisReports")
@common.Controller("analysisReports")
export class AnalysisReportController extends AnalysisReportControllerBase {
  constructor(protected readonly service: AnalysisReportService) {
    super(service);
  }
}
