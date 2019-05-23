import {
    //1.1card
    DeansDailyUrl,
    //1.2kpi
    KPIAnalysisUrl,
    //2排行榜
    MedProjectIncomeDailyUrl,
    MedNumDailyUrl,
    MedIncomeDailyUrl,
    DocMedDailyUrl,
    DocIncomeDailyUrl,
    DocUrl,
    DepPerIllnessUrl,
    DepPerExpenseUrl,
    DepMedDailyUrl,
    DepUrl,
    DepIncomeDailyUrl,
    //3财务费用分析
    HospIncomeUrl,
    HospIncomeTypeUrl,
    HospIncomeDepUrl,
    HospIncomeDepProportionUrl,
    HospIncomeFinancialClassifyUrl,
    HospIncomeMonthUrl,
    HospIncomeSameRingRatioUrl,

    OutpDepIncomeTypeUrl,
    OutpDepIncomeTypeProportionUrl,
    OutpDepIncomeDepUrl,
    OutpDepIncomeDepProportionUrl,
    OutpDepIncomeFinancialClassifyUrl,
    OutpDepIncomeMonthUrl,
    OutpDepIncomeSameRingRatioUrl,

    InpaDepIncomeTypeUrl,
    InpaDepIncomeTypeProportionUrl,
    InpaDepIncomeDepUrl,
    InpaDepIncomeDepProportionUrl,
    InpaDepIncomeFinancialClassifyUrl,
    InpaDepIncomeMonthUrl,
    InpaDepIncomeSameRingRatioUrl,

    DiscPatiCostStatisticsDepUrl,
    DiscPatiCostStatisticsDiseaseUrl,
    DiscPatiCostStatisticsTypeUrl,

    PatiCostStatisticsDepUrl,
    PatiCostStatisticsDiseaseUrl,
    PatiCostStatisticsTypeUrl,

    DiscPatiNoPayCostStatisticsDepUrl,
    DiscPatiNoPayCostStatisticsDetailUrl,

    SpecReduFeeWaiverUrl,
    SpecReduFeeWaiverTypeUrl,
    //4. 诊疗活动分析
    TreatmentAnalysisPatUrl,
    OutPatDepTendencyUrl,
    OutPatDepDepUrl,
    DocExPreByDocUrl,
    DocExPreByDiseaseUrl,
    WorkoadByDepUrl,
    WorkoadByDocUrl,
    WorkoadByInspectUrl,
    WorkoadByDocInspectUrl,
    WorkoadByDepInspectUrl,
    WorkoadDepOperUrl,
    WorkoadOperUrl,
    TreatmentAnalysisInPatUrl,
    TreatmentAnalysisBedUrl,
    //5药品分析
    MedAnalysisMedConsumptionUrl,
    MedIncomeBySaleUrl,
    MedIncomeByDepUrl,
    MedIncomeByDocUrl,
    MedAnalysisPatUseMedUrl,
    MedAnalysisMedTotalCostUrl,
    MedAnalysisMedProportionUrl,
    ControlledMedByTypeUrl,
    ControlledMedByDocUrl,
    AntibacterialMedHosStatisticalUrl,
    AntibacterialMedAntiMedPercentUrl,
    AntibacterialMedAntiMedUseTrendUrl,
    AntibacterialMedAntiMedTotalFeeProportionUrl,
    AntibacterialMedInPatUseAntiMedVarietyUrl,
    AntibacterialMedInPatUseAntiMedFeeUrl,
    AntibacterialMedInPatUseAntiMedProportionUrl,
    AntibacterialMedAntiMedCheckProportionUrl,
    MedAnalysisMedStockTrendUrl,
    //6医疗质量分析
    MedicalCareAnalysisDiseasePatUrl,
    MedicalCareAnalysisDiseaseAnalysisUrl,
    MedicalCareAnalysisVisitTimeUrl,
    CoincidenceByHosUrl,
    CoincidenceByDocUrl,
    MedicalCareAnalysisPatSatisfactionUrl,
    CureRateByHospitalUrl,
    CureRateByDiseaseUrl,
} from '../services/UrlConfig';


//  bar 单数据柱形图
//  simple 多数据柱形图
// gauge 仪表图
// cards 卡片表格
// table 表格 需要在 /utils/tableTitleCfg.js 文件配置表头
// lineStack 多条折线图 
// line  单条折线图 


export const MenuList = [
    {
        id: "1",
        title: "每日简报",
        path: "/main/cards",
        list: [
            {
                id: '11',
                title: "院长日报",
                path: "/main/cards",
                type: DeansDailyUrl
                // id:'1.1',
                // title:"院长日报"
            },
            {
                id: '12',
                title: "KPI指标",
                path: "/main/gauge",
                picker:"MonthPicker",
                type: KPIAnalysisUrl
                // id: '1.2',
                // title: "KPI指标"
            }
        ]
    },
    {
        id: "2",
        title: "排行榜",
        list: [
            {
                id: '21',
                title: "科室门诊量",
                path: "/main/bar",
                type: DepUrl
            },
            {
                id: '22',
                title: "医生门诊量",
                path: "/main/bar",
                type: DocUrl
            }
            ,
            {
                id: '23',
                title: "门诊科室人均就诊费",
                path: "/main/bar",
                type: DepPerExpenseUrl
            }
            ,
            {
                id: '24',
                title: "门诊各病种人均费用",
                path: "/main/bar",
                type: DepPerIllnessUrl
            }
            ,
            {
                id: '25',
                title: "全院科室收入",
                path: "/main/bar",
                type: DepIncomeDailyUrl
            }
            ,
            {
                id: '26',
                title: "门诊医生收入",
                path: "/main/bar",
                type: DocIncomeDailyUrl
            }
            ,
            {
                id: '27',
                title: "医疗项目收入",
                path: "/main/bar",
                type: MedProjectIncomeDailyUrl
            }
            ,
            {
                id: '28',
                title: "药品销售量",
                path: "/main/bar",
                type: MedNumDailyUrl
            }
            ,
            {
                id: '29',
                title: "药品销售金额",
                path: "/main/bar",
                type: MedIncomeDailyUrl
            }
            ,
            {
                id: '210',
                title: "科室药费比",
                path: "/main/simple",
                type: DepMedDailyUrl
            }
            ,
            {
                id: '211',
                title: "医生药费比",
                path: "/main/simple",
                type: DocMedDailyUrl
            }
        ]
    },
    {
        id: "3",
        title: "财务费用分析",
        list: [
            {
                id: '31',
                title: "全院收入分析",
                list: [
                    {
                        id: "311",
                        title: "全院收入按机构占比",
                        picker: "MonthPicker",
                        path: "/main/pie",
                        type: HospIncomeUrl
                    },
                    {
                        id: "312",
                        title: "全院收入按费用占比",
                        picker: "MonthPicker",
                        path: "/main/pie",
                        type: HospIncomeTypeUrl
                    },
                    {
                        id: "313",
                        title: "全院科室收入",
                        path: "/main/pie",
                        type: HospIncomeDepUrl
                    },
                    {
                        id: "314",
                        title: "全院科室收入占比",
                        path: "/main/pie",
                        type: HospIncomeDepProportionUrl
                    },
                    {
                        id: "315",
                        title: "全院收入按财务分类",
                        picker: "MonthPicker",
                        path: "/main/pie",
                        type: HospIncomeFinancialClassifyUrl
                    },
                    {
                        id: "316",
                        title: "全院收入月趋势",
                        path: "/main/lineStack",
                        picker: "MonthPicker",
                        type: HospIncomeMonthUrl
                    },
                    {
                        id: "317",
                        title: "全院收入同环比报表",
                        picker: "MonthPicker",
                        path: "/main/pie",
                        type: HospIncomeSameRingRatioUrl
                    }
                ]
            },
            {
                id: '32',
                title: "门诊收入分析",
                list: [
                    {
                        id: "321",
                        title: "门诊收入按费用类型构成比例图",
                        picker: "MonthPicker",
                        path: "/main/pie",
                        type: OutpDepIncomeTypeUrl
                    },
                    {
                        id: "322",
                        title: "门诊收入按分类构成比例图",
                        picker: "MonthPicker",
                        path: "/main/pie",
                        type: OutpDepIncomeTypeProportionUrl
                    },
                    {
                        id: "323",
                        title: "门诊科室收入金额表",
                        picker: "MonthPicker",
                        path: "/main/pie",
                        type: OutpDepIncomeDepUrl
                    },
                    {
                        id: "324",
                        title: "门诊科室收入比例图",
                        picker: "MonthPicker",
                        path: "/main/pie",
                        type: OutpDepIncomeDepProportionUrl
                    },
                    {
                        id: "325",
                        title: "门诊收入按财务分类构成",
                        picker: "MonthPicker",
                        path: "/main/pie",
                        type: OutpDepIncomeFinancialClassifyUrl
                    },
                    {
                        id: "326",
                        title: "门诊收入月趋势",
                        path: "/main/lineStack",
                        picker: "MonthPicker",
                        type: OutpDepIncomeMonthUrl
                    },
                    {
                        id: "327",
                        title: "门诊收入同环比报表",
                        picker: "MonthPicker",
                        path: "/main/bar",
                        type: OutpDepIncomeSameRingRatioUrl
                    }
                ]
            },
            {
                id: '33',
                title: "住院收入分析",
                list: [
                    {
                        id: "331",
                        title: "住院收入按费用类型构成比例图",
                        path: "/main/pie",
                        picker: "MonthPicker",
                        type: InpaDepIncomeTypeUrl
                    },
                    {
                        id: "332",
                        title: "住院收入按分类构成比例图",
                        path: "/main/pie",
                        picker: "MonthPicker",
                        type: InpaDepIncomeTypeProportionUrl
                    },
                    {
                        id: "333",
                        title: "住院科室收入金额表",
                        path: "/main/pie",
                        picker: "MonthPicker",
                        type: InpaDepIncomeDepUrl
                    },
                    {
                        id: "334",
                        title: "住院科室收入比例图",
                        path: "/main/pie",
                        picker: "MonthPicker",
                        type: InpaDepIncomeDepProportionUrl
                    },
                    {
                        id: "335",
                        title: "住院收入按财务分类构成",
                        path: "/main/pie",
                        picker: "MonthPicker",
                        type: InpaDepIncomeFinancialClassifyUrl
                    },
                    {
                        id: "336",
                        title: "住院收入月趋势",
                        picker: "MonthPicker",
                        path: "/main/lineStack",
                        type: InpaDepIncomeMonthUrl
                    },
                    {
                        id: "337",
                        title: "住院收入同环比报表",
                        path: "/main/simple",
                        picker: "MonthPicker",
                        type: InpaDepIncomeSameRingRatioUrl
                    }
                ]
            },
            {
                id: '34',
                title: "出院病人费用分析",
                list: [
                    {
                        id: "341",
                        title: "出院病人费用（按科室）统计分析表",
                        path: "/main/table",
                        type: DiscPatiCostStatisticsDepUrl
                    },
                    {
                        id: "342",
                        title: "出院病人费用（按疾病）统计分析表",
                        path: "/main/table",
                        type: DiscPatiCostStatisticsDiseaseUrl
                    },
                    {
                        id: "343",
                        title: "出院病人费用（按病人类型）统计分析表",
                        path: "/main/table",
                        type: DiscPatiCostStatisticsTypeUrl
                    }
                ]
            },
            {
                id: '35',
                title: "在院病人费用分析",
                list: [
                    {
                        id: "351",
                        title: "在院病人费用（按科室）统计分析表",
                        path: "/main/table",
                        type: PatiCostStatisticsDepUrl
                    },
                    {
                        id: "352",
                        title: "在院病人费用（按疾病）统计分析表",
                        path: "/main/table",
                        type: PatiCostStatisticsDiseaseUrl
                    },
                    {
                        id: "353",
                        title: "在院病人费用（按病人类型）统计分析表",
                        path: "/main/table",
                        type: PatiCostStatisticsTypeUrl
                    }
                ]
            },
            {
                id: '36',
                title: "出院未结病人费用统计",
                list: [
                    {
                        id: "361",
                        title: "出院未结病人（按科室）费用统计",
                        path: "/main/table",
                        type: DiscPatiNoPayCostStatisticsDepUrl
                    },
                    {
                        id: "362",
                        title: "出院未结病人费用明细表",
                        path: "/main/table",
                        type: DiscPatiNoPayCostStatisticsDetailUrl
                    }
                ]
            },
            {
                id: '37',
                title: "特殊群体费用减免统计",
                list: [
                    {
                        id: "371",
                        title: "特殊群体费用减免统计",
                        path: "/main/table",
                        type: SpecReduFeeWaiverUrl
                    },
                    {
                        id: "372",
                        title: "特殊群体各类费用减免统计",
                        path: "/main/table",
                        type: SpecReduFeeWaiverTypeUrl
                    }
                ]
            }
        ]
    },
    {
        id: "4",
        title: "诊疗活动分析",
        list: [
            {
                id: '41',
                title: "患者来源分析",
                path: "/main/source",
                picker: "MonthPicker",
                type: TreatmentAnalysisPatUrl
            },
            {
                id: '42',
                title: "门诊量分析",
                list: [
                    {
                        id: "421",
                        title: "门诊量趋势图",
                        path: "/main/lineStack",
                        picker: "MonthPicker",
                        type: OutPatDepTendencyUrl
                    },
                    {
                        id: "423",
                        title: "门诊专业就诊数量",
                        path: "/main/bar",
                        type: OutPatDepDepUrl
                    }
                ]
            },
            {
                id: '43',
                title: "门诊医生大处方统计",
                list: [
                    {
                        id: "431",
                        title: "各门诊科室医生大处方统计表",
                        path: "/main/bar",
                        type: DocExPreByDocUrl
                    },
                    {
                        id: "432",
                        title: "门诊各病种(按医生)大处方统计表",
                        path: "/main/bar",
                        type: DocExPreByDiseaseUrl
                    }
                ]
            },
            {
                id: '44',
                title: "工作量统计分析",
                list: [
                    {
                        id: "441",
                        title: "按科室工作量统计",
                        path: "/main/bar",
                        type: WorkoadByDepUrl
                    },
                    {
                        id: "442",
                        title: "按人员工作量统计",
                        path: "/main/bar",
                        type: WorkoadByDocUrl
                    },
                    {
                        id: "443",
                        title: "按检验项目标本份数统计",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: WorkoadByInspectUrl
                    },
                    {
                        id: "444",
                        title: "按检验项目检验费用统计",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: WorkoadByInspectUrl
                    },
                    {
                        id: "445",
                        title: "按检查项目标本份数统计",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: WorkoadByInspectUrl
                    },
                    {
                        id: "446",
                        title: "按检查项目检验费用统计",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: WorkoadByInspectUrl
                    },
                    {
                        id: "447",
                        title: "医生开具检验项目统计",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: WorkoadByDocInspectUrl
                    },
                    {
                        id: "448",
                        title: "医生开具检查项目统计",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: WorkoadByDocInspectUrl
                    },
                    {
                        id: "449",
                        title: "科室开具检验项目统计",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: WorkoadByDepInspectUrl
                    },
                    {
                        id: "4410",
                        title: "科室开具检查项目统计",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: WorkoadByDepInspectUrl
                    },
                    {
                        id: "4411",
                        title: "科室手术工作量统计",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: WorkoadDepOperUrl
                    },
                    {
                        id: "4412",
                        title: "手术项目工作量统计",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: WorkoadOperUrl
                    }
                ]
            },
            {
                id: '45',
                title: "在院病人分布状况",
                list: [
                    {
                        id: "451",
                        title: "在院病人按科室分布统计",
                        path: "/main/pie",
                        type: TreatmentAnalysisInPatUrl
                    },
                    {
                        id: "452",
                        title: "在院病人按医生分布统计",
                        path: "/main/pie",
                        type: TreatmentAnalysisInPatUrl
                    }
                ]
            },
            {
                id: '46',
                title: "床位使用状况分析",
                path: "/main/pie",
                type: TreatmentAnalysisBedUrl
            }

        ]

    },
    {
        id: "5",
        title: "药品分析",
        list: [
            {
                id: '51',
                title: "药品消耗量排名",
                path: "/main/bar",
                type: MedAnalysisMedConsumptionUrl
            },
            {
                id: '52',
                title: "用药金额排名",
                list: [
                    {
                        id: "521",
                        title: "药品销量金额排名",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: MedIncomeBySaleUrl
                    },
                    {
                        id: "522",
                        title: "科室用药金额排名",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: MedIncomeByDepUrl
                    },
                    {
                        id: "523",
                        title: "医生开药金额排名",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: MedIncomeByDocUrl
                    }
                ]
            },
            // {
            //     id: '53',
            //     title: "用药量变化因素分析",
            //     list: [
            //         {
            //             id: "431",
            //             title: "各门诊科室医生大处方统计表",
            //             path: "/main/bar",
            //             type: DocExPreByDocUrl
            //         },
            //         {
            //             id: "432",
            //             title: "门诊各病种(按医生)大处方统计表",
            //             path: "/main/bar",
            //             type: DocExPreByDiseaseUrl
            //         }
            //     ]
            // },
            {
                id: '54',
                title: "病人用药类型分析",
                path: "/main/bar",
                picker: "MonthPicker",
                type: MedAnalysisPatUseMedUrl
            },
            {
                id: '55',
                title: "药费总额构成分析",
                path: "/main/bar",
                picker: "MonthPicker",
                type: MedAnalysisMedTotalCostUrl
            },
            {
                id: '56',
                title: "药品收入比重分析",
                list: [
                    {
                        id: "561",
                        title: "各医生药品收入占医疗收入比重分析",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: MedAnalysisMedProportionUrl
                    },
                    {
                        id: "562",
                        title: "各科室药品收入占医疗收入比重分析",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: MedAnalysisMedProportionUrl
                    },
                    {
                        id: "563",
                        title: "各病种药品收入占医疗收入比重分析",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: MedAnalysisMedProportionUrl
                    }
                ]
            },
            {
                id: '57',
                title: "控制类药品分析",
                list: [
                    {
                        id: "571",
                        title: "按特殊药品类型占比分析",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: ControlledMedByTypeUrl
                    },
                    {
                        id: "572",
                        title: "各医生各类特殊药品开药金额排名",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: ControlledMedByDocUrl
                    }
                ]
            },
            {
                id: '58',
                title: "抗菌药品分析",
                list: [
                    {
                        id: "581",
                        title: "全院抗菌药品统计指标监控表",
                        path: "/main/pie",
                        picker: "MonthPicker",
                        type: AntibacterialMedHosStatisticalUrl
                    },
                    {
                        id: "582",
                        title: "各病种就诊使用抗菌药物占比",
                        path: "/main/pie",
                        picker: "MonthPicker",
                        type: AntibacterialMedAntiMedPercentUrl
                    },
                    {
                        id: "583",
                        title: "各医生就诊使用抗菌药物占比",
                        path: "/main/pie",
                        picker: "MonthPicker",
                        type: AntibacterialMedAntiMedPercentUrl
                    },
                    {
                        id: "584",
                        title: "抗菌药物使用强度趋势图",
                        path: "/main/lineStack",
                        picker: "MonthPicker",
                        type: AntibacterialMedAntiMedUseTrendUrl
                    },
                    {
                        id: "585",
                        title: "各病种抗菌药物使用强度对比",
                        path: "/main/pie",
                        picker: "MonthPicker",
                        type: AntibacterialMedAntiMedUseTrendUrl
                    },
                    {
                        id: "586",
                        title: "抗菌药物占药费总额百分率",
                        path: "/main/pie",
                        picker: "MonthPicker",
                        type: AntibacterialMedAntiMedTotalFeeProportionUrl
                    },
                    {
                        id: "587",
                        title: "各病种抗菌药物占药费总额百分比",
                        path: "/main/pie",
                        picker: "MonthPicker",
                        type: AntibacterialMedAntiMedTotalFeeProportionUrl
                    },
                    {
                        id: "588",
                        title: "各科室抗菌药物占药费总额百分比",
                        path: "/main/pie",
                        picker: "MonthPicker",
                        type: AntibacterialMedAntiMedTotalFeeProportionUrl
                    },
                    {
                        id: "589",
                        title: "各医生住院患者人均使用抗菌药物品种数",
                        path: "/main/pie",
                        picker: "MonthPicker",
                        type: AntibacterialMedInPatUseAntiMedVarietyUrl
                    },
                    {
                        id: "5810",
                        title: "各病种住院患者人均使用抗菌药物品种数",
                        path: "/main/pie",
                        picker: "MonthPicker",
                        type: AntibacterialMedInPatUseAntiMedVarietyUrl
                    },
                    {
                        id: "5811",
                        title: "住院患者人均使用抗菌药物费用趋势",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: AntibacterialMedInPatUseAntiMedFeeUrl
                    },
                    {
                        id: "5812",
                        title: "各病种住院患者人均使用抗菌药物费用",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: AntibacterialMedInPatUseAntiMedFeeUrl
                    },
                    {
                        id: "5813",
                        title: "各医生各类特殊药品开药金额排名",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: AntibacterialMedInPatUseAntiMedProportionUrl
                    },
                    {
                        id: "5814",
                        title: "各科室住院患者使用抗菌药物比例对比",
                        path: "/main/bar",
                        picker: "MonthPicker",
                        type: AntibacterialMedInPatUseAntiMedProportionUrl
                    },
                    {
                        id: "5815",
                        title: "住院用抗菌药物患者病原学检查比率趋势",
                        path: "/main/lineStack",
                        picker: "MonthPicker",
                        type: AntibacterialMedAntiMedCheckProportionUrl
                    },
                    {
                        id: "5816",
                        title: "各病种抗菌药物患者病原学检查比率趋势",
                        path: "/main/simple",
                        picker: "MonthPicker",
                        type: AntibacterialMedAntiMedCheckProportionUrl
                    }
                ]
            },
            // {
            //     id: '59',
            //     title: "药品库存趋势分析",
            //     path: "/main/lineStack",
            //     type: MedAnalysisMedStockTrendUrl
             
            // },
            // {
            //     id: '510',
            //     title: "药品使用模式分析",
            //     path: "/main/bar",
            //     type: MedAnalysisMedStockTrendUrl
                
            // },

        ]

    },
    {
        id: "6",
        title: "医疗质量分析",
        list: [
            {
                id: '61',
                title: "疾病人群分析",
                path: "/main/table",
                picker: "MonthPicker",
                type: MedicalCareAnalysisDiseasePatUrl
                // list:[
                //     {
                //         id: "611",
                //         title: "性别分布",
                //         type: MedicalCareAnalysisDiseasePatUrl
                //     }, 
                //     {
                //         id: "612",
                //         title: "各病种人群地域分布",
                //         path: "/main/pie",
                //         type: MedicalCareAnalysisDiseasePatUrl
                //     },
                // ]
            },
            {
                id: '62',
                title: "单病种分析",
                path: "/main/pie",
                picker: "MonthPicker",
                type: MedicalCareAnalysisDiseaseAnalysisUrl
            },
            {
                id: '63',
                title: "就诊时间分析",
                path: "/main/pie",
                picker: "MonthPicker",
                type: MedicalCareAnalysisVisitTimeUrl
            },
            {
                id: '64',
                title: "诊断符合率分析",
                list: [
                    {
                        id: "641",
                        title: "全院诊断符合率趋势分析",
                        path: "/main/pie",
                        picker: "MonthPicker",
                        type: CoincidenceByHosUrl
                    },
                    {
                        id: "642",
                        title: "各医生诊断符合率分析",
                        path: "/main/pie",
                        picker: "MonthPicker",
                        type: CoincidenceByDocUrl
                    }
                    
                ]
            },
            {
                id: '65',
                title: "病人满意度分析",
                path: "/main/pie",
                picker: "MonthPicker",
                type: MedicalCareAnalysisPatSatisfactionUrl
            },
            {
                id: '66',
                title: "治愈好转率分析",
                list: [
                    {
                        id: "661",
                        title: "全院治愈好转率趋势分析",
                        path: "/main/pie",
                        picker: "MonthPicker",
                        type: CureRateByHospitalUrl
                    },
                    {
                        id: "662",
                        title: "各病种治愈好转率分析",
                        path: "/main/pie",
                        picker: "MonthPicker",
                        type: CureRateByDiseaseUrl
                    },
                ]
            }

        ]

    },
]