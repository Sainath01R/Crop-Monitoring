import * as graphql from "@nestjs/graphql";
import { AnalysisReportResolverBase } from "./base/analysisReport.resolver.base";
import { AnalysisReport } from "./base/AnalysisReport";
import { AnalysisReportService } from "./analysisReport.service";

@graphql.Resolver(() => AnalysisReport)
export class AnalysisReportResolver extends AnalysisReportResolverBase {
  constructor(protected readonly service: AnalysisReportService) {
    super(service);
  }
}
