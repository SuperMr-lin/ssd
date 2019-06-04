//请求路径配置
//端口 http://192.168.1.111:8082/
// export const HeadPort ="http://service.schhsw.com:7300/mock/5c77a7a7ddfb6e0016d016c6/DSS";
// export const HeadPort = "http://localhost:2334";
export const HeadPort = "http://10.66.66.12:2334";
//user
//用户
export const UserUrl =  "/api/user";

//cards
//日报-1
export const DeansDailyUrl =  "/Report/DeansDaily";

//echarts
//kpi-1
export const KPIAnalysisUrl = "/Report/KPIAnalysis";

//排行榜-2
//每日前五-科室门诊量-21
export const DepUrl =  "/RankList/Dep";
//每日前五-医生门诊量-22
export const DocUrl = "/RankList/Doc";
//每日前五-门诊科室人均就诊费用-23
export const DepPerExpenseUrl =  "/RankList/DepPerExpense";
//每日前五-门诊各病种人均费用-24
export const DepPerIllnessUrl =  "/RankList/DepPerIllness";
//每日前五-全院科室收入-25
export const DepIncomeDailyUrl = "/RankList/DepIncomeDaily";
//每日前五-门诊医生收入-26
export const DocIncomeDailyUrl = "/RankList/DocIncomeDaily";
//每日前五-医疗项目收入-27
export const MedProjectIncomeDailyUrl = "/RankList/MedProjectIncomeDaily";
//每日前五-药品销售量-28
export const MedNumDailyUrl = "/RankList/MedNumDaily";
//每日前五-药品销售金额-29
export const MedIncomeDailyUrl = "/RankList/MedIncomeDaily";
//每日前五-科室药费比-210
export const DepMedDailyUrl = "/RankList/DepMedDaily";
//每日前五-医生药费比-211
export const DocMedDailyUrl = "/RankList/DocMedDaily";

//财务费用分析-3
//全院收入分析-31
//全院收入按机构占比-311
export const HospIncomeUrl = "/ExpenseAnalysis/Hospital/Function?type=0";
//全院收入按费用类型占比-312
export const HospIncomeTypeUrl = "/ExpenseAnalysis/InAndDep/Expense?type=0";
//全院科室收入-313
export const HospIncomeDepUrl =  "/ExpenseAnalysis/InAndDep/Income?type=0";
//全院收入按财务分类构成-315
export const HospIncomeFinancialClassifyUrl = "/ExpenseAnalysis/InAndDep/Finance?type=0";
//全院收入月趋势-316
export const HospIncomeMonthUrl = "/ExpenseAnalysis/InAndDep/Month?type=0";
//全院收入同环比报表-317
export const HospIncomeSameRingRatioUrl = "/ExpenseAnalysis/InAndDep/ChainRadio?type=0";

//门诊(OutpDep=Outpatient Department)收入分析-32
//门诊收入按费用类型构成比例图-321
export const OutpDepIncomeTypeUrl =  "/ExpenseAnalysis/InAndDep/Expense?type=1";
//门诊收入按分类构成比例图-322
export const OutpDepIncomeTypeProportionUrl = "/ExpenseAnalysis/InAndDep/Classification?type=1";
//门诊科室收入金额表-323
export const OutpDepIncomeDepUrl =  "/ExpenseAnalysis/InAndDep/Income?type=1";
//门诊科室收入比例图-324
export const OutpDepIncomeDepProportionUrl =  "/ExpenseAnalysis/InAndDep/Income?type=1";
//门诊收入按财务分类构成-325
export const OutpDepIncomeFinancialClassifyUrl = "/ExpenseAnalysis/InAndDep/Finance?type=1";
//门诊收入月趋势-326
export const OutpDepIncomeMonthUrl = "/ExpenseAnalysis/InAndDep/Month?type=1";
//门诊收入同环比报表-327
export const OutpDepIncomeSameRingRatioUrl = "/ExpenseAnalysis/InAndDep/ChainRadio?type=1";

//住院(InpaDep=Inpatient Department)收入分析-33
//住院收入按费用类型构成比例图-331
export const InpaDepIncomeTypeUrl =  "/ExpenseAnalysis/InAndDep/Expense?type=2";
//住院收入按分类构成比例图-332
export const InpaDepIncomeTypeProportionUrl = "/ExpenseAnalysis/InAndDep/Classification?type=2";
//住院科室收入金额表-333
export const InpaDepIncomeDepUrl =  "/ExpenseAnalysis/InAndDep/Income?type=2";
//住院科室收入比例图-334
export const InpaDepIncomeDepProportionUrl =  "/ExpenseAnalysis/InAndDep/Income?type=2";
//住院收入按财务分类构成-335
export const InpaDepIncomeFinancialClassifyUrl = "/ExpenseAnalysis/InAndDep/Finance?type=2";
//住院收入月趋势-336
export const InpaDepIncomeMonthUrl = "/ExpenseAnalysis/InAndDep/Month?type=2";
//住院收入同环比报表-337
export const InpaDepIncomeSameRingRatioUrl = "/ExpenseAnalysis/InAndDep/ChainRadio?type=2";

//出院病人(DiscPati=Discharged Patients)费用分析-34
//出院病人费用（按科室）统计分析表-341
export const DiscPatiCostStatisticsDepUrl =  "/ExpenseAnalysis/OutInPat/ByDep?type=0";
//出院病人费用（按疾病）统计分析表-342
export const DiscPatiCostStatisticsDiseaseUrl = "/ExpenseAnalysis/OutInPat/ByDisease?type=0";
//出院病人费用（按病人类型）统计分析表-343
export const DiscPatiCostStatisticsTypeUrl =  "/ExpenseAnalysis/OutInPat/ByType?type=0";

//在院病人(Pati=Patients)费用分析-35
//在院病人费用（按科室）统计分析表-351
export const PatiCostStatisticsDepUrl =  "/ExpenseAnalysis/OutInPat/ByDep?type=1";
//在院病人费用（按疾病）统计分析表-352
export const PatiCostStatisticsDiseaseUrl = "/ExpenseAnalysis/OutInPat/ByDisease?type=1";
//在院病人费用（按病人类型）统计分析表-353
export const PatiCostStatisticsTypeUrl =  "/ExpenseAnalysis/OutInPat/ByType?type=1";

//出院未结病人(DiscPatiNoPay=Discharged Patients No Pay)费用统计-36
//出院未结病人（按科室）费用统计-361
export const DiscPatiNoPayCostStatisticsDepUrl =  "/ExpenseAnalysis/OutPatNoPay/NoPayByDep";
//出院未结病人费用明细表-362
export const DiscPatiNoPayCostStatisticsDetailUrl = "/ExpenseAnalysis/OutPatNoPay/NoPayDetail";

//特殊群体(SpecRedu=Special Reduction)费用减免统计-37
//特殊群体费用减免统计-371
export const SpecReduFeeWaiverUrl =  "/ExpenseAnalysis/SpecialReduction/Reduction";
//特殊群体各类费用减免统计-372
export const SpecReduFeeWaiverTypeUrl = "/ExpenseAnalysis/SpecialReduction/ReductionType";


//4. 诊疗活动分析
//4.1 患者来源分析

// 4.1.1 按时间周期和病人年龄组分类的比例图
export const TreatmentAnalysisPatByAge = "/TreatmentAnalysis/Pat/ByAge";
// 4.1.2 按时间周期和病人类型的比例图(门诊)
export const TreatmentAnalysisPatByType0 = "/TreatmentAnalysis/Pat/ByType?type=0";
// 4.1.2 按时间周期和病人类型的比例图(住院)
export const TreatmentAnalysisPatByType1 = "/TreatmentAnalysis/Pat/ByType?type=1";
// 4.1.3 按时间周期和病人就诊科室分类的比例图
export const TreatmentAnalysisPatByDep = "/TreatmentAnalysis/Pat/ByDep";
// 4.1.4 按时间周期计算的门诊人次趋势图
export const TreatmentAnalysisPatOutdep = "/TreatmentAnalysis/Pat/Outdep";
// 4.1.5 按时间周期计算的同环比列表
export const TreatmentAnalysisPatRatio = "/TreatmentAnalysis/Pat/ratio";

//4.2 门诊量分析
//4.2.1 门诊量趋势图
//4.2.2门诊发药量趋势图
export const OutPatDepTendencyUrl = "/TreatmentAnalysis/OutPatDep/Tendency";
//4.2.3 门诊专业就诊数量
export const OutPatDepDepUrl = "/TreatmentAnalysis/OutPatDep/Dep";

//4.3 门诊医生大处方统计
//4.3.1 各门诊科室医生大处方统计表
export const DocExPreByDocUrl = "/TreatmentAnalysis/DocExPre/ByDoc";
//4.3.2 门诊各病种（按医生）大处方统计表
export const DocExPreByDiseaseUrl = "/TreatmentAnalysis/DocExPre/ByDisease";

//4.4 工作量统计分析
// 4.4.1 按科室工作量统计
export const WorkoadByDepUrl = "/TreatmentAnalysis/Workoad/ByDep";
//4.4.2 按人员工作量统计
export const WorkoadByDocUrl = "/TreatmentAnalysis/Workoad/ByDoc";
//4.4.3 按检验项目标本份数统计
//4.4.4 按检验项目检验费用统计
export const WorkoadByInspectUrl0 = "/TreatmentAnalysis/Workoad/ByInspect?type=0";
//4.4.5 按检查项目标本份数统计
// 4.4.6 按检查项目检验费用统计
export const WorkoadByInspectUrl1 = "/TreatmentAnalysis/Workoad/ByInspect?type=1";

//4.4.7 医生开具检验项目统计
export const WorkoadByDocInspectUrl0 = "/TreatmentAnalysis/Workoad/ByDocInspect?type=0";
// 4.4.8 医生开具检查项目统计
export const WorkoadByDocInspectUrl1 = "/TreatmentAnalysis/Workoad/ByDocInspect?type=1";

//4.4.9 科室开具检验项目统计
export const WorkoadByDepInspectUrl0 = "/TreatmentAnalysis/Workoad/ByDepInspect?type=0";
// 4.4.10 科室开具检查项目统计
export const WorkoadByDepInspectUrl1 = "/TreatmentAnalysis/Workoad/ByDepInspect?type=1";
// 4.4.11 科室手术工作量统计
export const WorkoadDepOperUrl = "/TreatmentAnalysis/Workoad/DepOper";
// 4.4.12 手术项目工作量统计
export const WorkoadOperUrl = "/TreatmentAnalysis/Workoad/Oper";

// 4.5 在院病人分布状况
// 4.5.1 在院病人按科室分布统计
// 4.5.2 在院病人按医生分布统计
export const TreatmentAnalysisInPatUrl = "/TreatmentAnalysis/InPat";

// 4.6 床位使用状况分析
export const TreatmentAnalysisBedUrl = "/TreatmentAnalysis/Bed";
// 4.7 门诊挂号类别统计
export const TreatmentAnalysisOutPatRegistrationUrl = "/TreatmentAnalysis/OutPatRegistration";


// 5. 药品分析
// 5.1 药品消耗量排名
export const MedAnalysisMedConsumptionUrl = "/MedAnalysis/MedConsumption";

// 5.2 用药金额排名
// 5.2.1 药品销量金额排名
export const MedIncomeBySaleUrl = "/MedAnalysis/MedIncome/BySale";
// 5.2.2 科室用药金额排名
export const MedIncomeByDepUrl = "/MedAnalysis/MedIncome/ByDep";
// 5.2.3 医生开药金额排名
export const MedIncomeByDocUrl = "/MedAnalysis/MedIncome/ByDoc";


// 5.3 用药量变化因素分析

// 5.4 病人用药类型分析
export const MedAnalysisPatUseMedUrl = "/MedAnalysis/PatUseMed";
// 5.5 药费总额构成分析
export const MedAnalysisMedTotalCostUrl = "/MedAnalysis/MedTotalCost";

// 5.6 药品收入比重分析
// 5.6.1 各医生药品收入占医疗收入比重分析
export const MedAnalysisMedProportionUrl0 = "/MedAnalysis/MedProportion?type=0";
// 5.6.2 各科室药品收入占医疗收入比重分析
export const MedAnalysisMedProportionUrl1 = "/MedAnalysis/MedProportion?type=1";
// 5.6.3 各病种药品收入占医疗收入比重分析
export const MedAnalysisMedProportionUrl2 = "/MedAnalysis/MedProportion?type=2";

// 5.7 控制类药品分析
// 5.7.1 按特殊药品类型占比分析
export const ControlledMedByTypeUrl = "/MedAnalysis/ControlledMed/ByType";
// 5.7.2 各医生各类特殊药品开药金额排名
export const ControlledMedByDocUrl = "/MedAnalysis/ControlledMed/ByDoc";

// 5.8 抗菌药品分析
// 5.8.1 全院抗菌药品统计指标监控表
export const AntibacterialMedHosStatisticalUrl = "/MedAnalysis/AntibacterialMed/HosStatistical";
// 5.8.2 各病种就诊使用抗菌药物占比
export const AntibacterialMedAntiMedPercentUrl0 = "/MedAnalysis/AntibacterialMed/VisAntiMedPercent?type=0";
// 5.8.3 各医生就诊使用抗菌药物占比
export const AntibacterialMedAntiMedPercentUrl1 = "/MedAnalysis/AntibacterialMed/VisAntiMedPercent?type=1";
// 5.8.4 抗菌药物使用强度趋势图
export const AntibacterialMedAntiMedUseTrendUrl0 = "/MedAnalysis/AntibacterialMed/AntiMedUseTrend?type=0";
// 5.8.5 各病种抗菌药物使用强度对比
export const AntibacterialMedAntiMedUseTrendUrl1 = "/MedAnalysis/AntibacterialMed/AntiMedUseTrend?type=1";
// 5.8.6 抗菌药物占药费总额百分率
export const AntibacterialMedAntiMedTotalFeeProportionUrl0 = "/MedAnalysis/AntibacterialMed/AntiMedTotalFeeProportion?type=0";
// 5.8.7 各病种抗菌药物占药费总额百分比
export const AntibacterialMedAntiMedTotalFeeProportionUrl1 = "/MedAnalysis/AntibacterialMed/AntiMedTotalFeeProportion?type=1";
// 5.8.8 各科室抗菌药物占药费总额百分比
export const AntibacterialMedAntiMedTotalFeeProportionUrl2 = "/MedAnalysis/AntibacterialMed/AntiMedTotalFeeProportion?type=2";
// 5.8.9 各医生住院患者人均使用抗菌药物品种数
export const AntibacterialMedInPatUseAntiMedVarietyUrl0 = "/MedAnalysis/AntibacterialMed/InPatUseAntiMedVariety?type=0";
// 5.8.10 各病种住院患者人均使用抗菌药物品种数
export const AntibacterialMedInPatUseAntiMedVarietyUrl1 = "/MedAnalysis/AntibacterialMed/InPatUseAntiMedVariety?type=1";
// 5.8.11 住院患者人均使用抗菌药物费用趋势
export const AntibacterialMedInPatUseAntiMedFeeUrl0 = "/MedAnalysis/AntibacterialMed/InPatUseAntiMedFee?type=0";
// 5.8.12 各病种住院患者人均使用抗菌药物费用
export const AntibacterialMedInPatUseAntiMedFeeUrl1 = "/MedAnalysis/AntibacterialMed/InPatUseAntiMedFee?type=1";
// 5.8.13 各科室住院患者使用抗菌药物比例对比
export const AntibacterialMedInPatUseAntiMedProportionUrl0 = "/MedAnalysis/AntibacterialMed/InPatUseAntiMedProportion?type=0";
// 5.8.14 各病种住院患者使用抗菌药物比例对比
export const AntibacterialMedInPatUseAntiMedProportionUrl1 = "/MedAnalysis/AntibacterialMed/InPatUseAntiMedProportion?type=1";
// 5.8.15 住院用抗菌药物患者病原学检查比率趋势
export const AntibacterialMedAntiMedCheckProportionUrl0 = "/MedAnalysis/AntibacterialMed/AntiMedCheckProportion?type=0";
// 5.8.16 各病种抗菌药物患者病原学检查比率趋势
export const AntibacterialMedAntiMedCheckProportionUrl1 = "/MedAnalysis/AntibacterialMed/AntiMedCheckProportion?type=1";

// 5.9 药品库存趋势分析
export const MedAnalysisMedStockTrendUrl = "/MedAnalysis/MedStockTrend";

//5.10 药品使用模式分析

// 6. 医疗质量分析
// 6.1 疾病人群分析
export const MedicalCareAnalysisDiseasePatUrl = "/MedicalCareAnalysis/DiseasePat";
// 6.1.1 性别分布
// 6.1.2 各病种人群地域分布

// 6.2 单病种分析
export const MedicalCareAnalysisDiseaseAnalysisUrl = "/MedicalCareAnalysis/DiseaseAnalysis";

// 6.3 就诊时间分析
export const MedicalCareAnalysisVisitTimeUrl = "/MedicalCareAnalysis/VisitTime";

// 6.4 诊断符合率分析
// 6.4.1 全院诊断符合率趋势分析
export const CoincidenceByHosUrl = "/MedicalCareAnalysis/Coincidence/ByHos";
// 6.4.2 各医生诊断符合率分析
export const CoincidenceByDocUrl = "/MedicalCareAnalysis/Coincidence/ByDoc";

// 6.5 病人满意度分析
export const MedicalCareAnalysisPatSatisfactionUrl = "/MedicalCareAnalysis/PatSatisfaction";

// 6.6 治愈好转率分析
// 6.6.1 全院治愈好转率趋势分析
export const CureRateByHospitalUrl = "/MedicalCareAnalysis/CureRate/ByHospital";
// 6.6.2 各病种治愈好转率分析
export const CureRateByDiseaseUrl = "/MedicalCareAnalysis/CureRate/ByDisease";

































































