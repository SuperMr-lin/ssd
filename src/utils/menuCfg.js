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
    TreatmentAnalysisPatByAge,
    TreatmentAnalysisPatByType0,
    TreatmentAnalysisPatByType1,
    TreatmentAnalysisPatByDep,
    TreatmentAnalysisPatOutdep,
    TreatmentAnalysisPatRatio,
    OutPatDepTendencyUrl,
    OutPatDepDepUrl,
    DocExPreByDocUrl,
    DocExPreByDiseaseUrl,
    WorkoadByDepUrl,
    WorkoadByDocUrl,
    WorkoadByInspectUrl0,
    WorkoadByInspectUrl1,
    WorkoadByDocInspectUrl0,
    WorkoadByDocInspectUrl1,
    WorkoadByDepInspectUrl0,
    WorkoadByDepInspectUrl1,
    WorkoadDepOperUrl,
    WorkoadOperUrl,
    TreatmentAnalysisInPatUrl,
    TreatmentAnalysisBedUrl,
    TreatmentAnalysisOutPatRegistrationUrl,
    //5药品分析
    MedAnalysisMedConsumptionUrl,
    MedIncomeBySaleUrl,
    MedIncomeByDepUrl,
    MedIncomeByDocUrl,
    MedAnalysisPatUseMedUrl,
    MedAnalysisMedTotalCostUrl,
    MedAnalysisMedProportionUrl0,
    MedAnalysisMedProportionUrl1,
    MedAnalysisMedProportionUrl2,
    ControlledMedByTypeUrl,
    ControlledMedByDocUrl,
    AntibacterialMedHosStatisticalUrl,
    AntibacterialMedAntiMedPercentUrl0,
    AntibacterialMedAntiMedPercentUrl1,
    AntibacterialMedAntiMedAntiMedUseTrendByMonth,
    AntibacterialMedAntiMedAntiMedUseTrendByJbmc,
    AntibacterialMedAntiMedTotalFeeProportionUrl,
    AntibacterialMedAntiMedAntiMedTotalFeeProportionByDepDisease1,
    AntibacterialMedAntiMedAntiMedTotalFeeProportionByDepDisease2,
    AntibacterialMedInPatUseAntiMedVarietyUrl0,
    AntibacterialMedInPatUseAntiMedVarietyUrl1,
    AntibacterialMedInPatUseAntiMedFeeUrl0,
    AntibacterialMedInPatUseAntiMedFeeUrl1,
    AntibacterialMedInPatUseAntiMedProportionUrl0,
    AntibacterialMedInPatUseAntiMedProportionUrl1,
    AntibacterialMedAntiMedCheckProportionUrl0,
    AntibacterialMedAntiMedCheckProportionUrl1,
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


//  bar 柱形图
// gauge 仪表图
// line  折线图 
// pie  饼图
// cards 卡片表格（院长日报页面专用）
// table 表格 需要在 /utils/tableTitleCfg.js 文件配置表头
// picker: "MonthPicker", 只选择年份
// picker: "MonthPicker", 只选择月份
// picker 默认 年月日
// 统计图 统一路径：/main/echarts
/*
            echarts: [
                    一个统计图
                    {
                        **统计图名称
                        name: "科室门诊量",
                        **统计图类型
                        type: "bar",
                        **统计图请求地址
                        url: DepUrl
                    }
                    ...多个统计图
            ]

*/


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
                type: HospIncomeUrl
                // id:'1.1',
                // title:"院长日报"
            },
            {
                id: '12',
                title: "KPI指标",
                picker: "MonthPicker",
                path: "/main/echarts", echarts: [{ name: "KPI指标", type: "table", url: KPIAnalysisUrl }]
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
                path: "/main/echarts",
                echarts: [
                    {
                        name: "科室门诊量-前五排名",
                        type: "bar",
                        url: DepUrl
                    }
                ]
            },
            {
                id: '22',
                title: "医生门诊量",
                path: "/main/echarts",
                echarts: [
                    {
                        name: "医生门诊量-前五排名",
                        type: "bar",
                        url: DocUrl
                    }
                ]
            }
            ,
            {
                id: '23',
                title: "门诊科室人均就诊费",
                path: "/main/echarts",
                echarts: [
                    {
                        name: "门诊科室人均就诊费-前五排名",
                        type: "bar",
                        url: DepPerExpenseUrl
                    }
                ]
            }
            ,
            {
                id: '24',
                title: "门诊各病种人均费用",
                path: "/main/echarts",
                echarts: [
                    {
                        name: "门诊各病种人均费用-前五排名",
                        type: "bar",
                        url: DepPerIllnessUrl
                    }
                ]
            }
            ,
            {
                id: '25',
                title: "全院科室收入",
                path: "/main/echarts",
                echarts: [
                    {
                        name: "全院科室收入-前五排名",
                        type: "bar",
                        url: DepIncomeDailyUrl
                    }
                ]
            }
            ,
            {
                id: '26',
                title: "门诊医生收入",
                path: "/main/echarts",
                echarts: [
                    {
                        name: "门诊医生收入-前五排名",
                        type: "bar",
                        url: DocIncomeDailyUrl
                    }
                ]
            }
            ,
            {
                id: '27',
                title: "医疗项目收入",
                path: "/main/echarts",
                echarts: [
                    {
                        name: "医疗项目收入-前五排名",
                        type: "bar",
                        url: MedProjectIncomeDailyUrl
                    }
                ]
            }
            ,
            {
                id: '28',
                title: "药品销售量",
                path: "/main/echarts",
                echarts: [
                    {
                        name: "药品销售量-前五排名",
                        type: "bar",
                        url: MedNumDailyUrl
                    }
                ]
            }
            ,
            {
                id: '29',
                title: "药品销售金额",
                path: "/main/echarts",
                echarts: [
                    {
                        name: "药品销售金额-前五排名",
                        type: "bar",
                        url: MedIncomeDailyUrl
                    }
                ]
            }
            ,
            {
                id: '210',
                title: "科室药费比",
                path: "/main/echarts",
                echarts: [
                    {
                        name: "科室药费比-前五排名",
                        type: "bar",
                        url: DepMedDailyUrl
                    }
                ]
            }
            ,
            {
                id: '211',
                title: "医生药费比",
                path: "/main/echarts",
                echarts: [
                    {
                        name: "医生药费比-前五排名",
                        type: "bar",
                        url: DocMedDailyUrl
                    }
                ]
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
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "全院收入按机构占比",
                                type: "pie",
                                url: HospIncomeUrl
                            }
                        ]
                    },
                    {
                        id: "312",
                        title: "全院收入按费用占比",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "全院收入按费用占比",
                                type: "pie",
                                url: HospIncomeTypeUrl
                            }
                        ]
                    },
                    {
                        id: "313",
                        title: "全院科室收入",
                        picker: "MonthPicker",
                        path: "/main/echarts", echarts: [{ name: "全院科室收入", type: "table", url: HospIncomeDepUrl }]
                    },
                    {
                        id: "315",
                        title: "全院收入按财务分类",
                        picker: "MonthPicker",
                        path: "/main/echarts", echarts: [{ name: "全院收入按财务分类", type: "table", url: HospIncomeFinancialClassifyUrl }]
                    },
                    {
                        id: "316",
                        title: "全院收入月趋势",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "全院收入月趋势",
                                type: "line",
                                url: HospIncomeMonthUrl
                            }
                        ]
                    },
                    {
                        id: "317",
                        title: "全院收入同环比报表",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "全院收入同环比报表",
                                type: "bar",
                                url: HospIncomeSameRingRatioUrl
                            }
                        ]
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
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "门诊收入按费用类型构成比例图",
                                type: "pie",
                                url: OutpDepIncomeTypeUrl
                            }
                        ]
                    },
                    {
                        id: "322",
                        title: "门诊收入按分类构成比例图",
                        picker: "MonthPicker",
                        path: "/main/echarts", echarts: [{ name: "门诊收入按分类构成比例图", type: "table", url: OutpDepIncomeTypeProportionUrl }]
                    },
                    {
                        id: "323",
                        title: "门诊科室收入金额表",
                        picker: "MonthPicker",
                        path: "/main/echarts", echarts: [{ name: "门诊科室收入金额表", type: "table", url: OutpDepIncomeDepUrl }]
                    },
                    {
                        id: "325",
                        title: "门诊收入按财务分类构成",
                        picker: "MonthPicker",
                        path: "/main/echarts", echarts: [{ name: "门诊收入按财务分类构成", type: "table", url: OutpDepIncomeFinancialClassifyUrl }]

                    },
                    {
                        id: "326",
                        title: "门诊收入月趋势",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "门诊收入月趋势",
                                type: "line",
                                url: OutpDepIncomeMonthUrl
                            }
                        ]
                    },
                    {
                        id: "327",
                        title: "门诊收入同环比报表",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "门诊收入同环比报表",
                                type: "bar",
                                url: OutpDepIncomeSameRingRatioUrl
                            }
                        ]
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
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "住院收入按费用类型构成比例图",
                                type: "pie",
                                url: InpaDepIncomeTypeUrl
                            }
                        ]
                    },
                    {
                        id: "332",
                        title: "住院收入按分类构成比例图",
                        picker: "MonthPicker",
                        path: "/main/echarts", echarts: [{ name: "住院收入按分类构成比例图", type: "table", url: InpaDepIncomeTypeProportionUrl }]
                    },
                    {
                        id: "333",
                        title: "住院科室收入金额表",
                        picker: "MonthPicker",
                        path: "/main/echarts", echarts: [{ name: "住院科室收入金额表", type: "table", url: InpaDepIncomeDepUrl }]

                    },
                    {
                        id: "335",
                        title: "住院收入按财务分类构成",
                        picker: "MonthPicker",
                        path: "/main/echarts", echarts: [{ name: "住院收入按财务分类构成", type: "table", url: InpaDepIncomeFinancialClassifyUrl }]

                    },
                    {
                        id: "336",
                        title: "住院收入月趋势",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "住院收入月趋势",
                                type: "line",
                                url: InpaDepIncomeMonthUrl
                            }
                        ]
                    },
                    {
                        id: "337",
                        title: "住院收入同环比报表",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "住院收入同环比报表",
                                type: "bar",
                                url: InpaDepIncomeSameRingRatioUrl
                            }
                        ]

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
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "出院病人费用（按科室）统计分析表",
                                type: "table",
                                url: DiscPatiCostStatisticsDepUrl
                            }
                        ]

                    },
                    {
                        id: "342",
                        title: "出院病人费用（按疾病）统计分析表",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "出院病人费用（按疾病）统计分析表",
                                type: "table",
                                url: DiscPatiCostStatisticsDiseaseUrl
                            }
                        ]
                    },
                    // {
                    //     id: "342",
                    //     title: "出院病人费用（按疾病）统计分析表",
                    //     picker: "MonthPicker",
                    //     path: "/main/echarts",                         echarts: [                             {                                 name: "全院收入同环比报表",                                 type: "table",                                 url: DiscPatiCostStatisticsTypeUrl                             }                         ]
                    //     type: DiscPatiCostStatisticsDiseaseUrl
                    // },
                    {
                        id: "343",
                        title: "出院病人费用（按病人类型）统计分析表",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "出院病人费用（按病人类型）统计分析表",
                                type: "table",
                                url: DiscPatiCostStatisticsTypeUrl
                            }
                        ]
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
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "在院病人费用（按科室）统计分析表",
                                type: "table",
                                url: PatiCostStatisticsDepUrl
                            }
                        ]
                    },
                    {
                        id: "352",
                        title: "在院病人费用（按疾病）统计分析表",
                        picker: "MonthPicker",
                        path: "/main/echarts", echarts: [{ name: "在院病人费用（按疾病）统计分析表", type: "table", url: PatiCostStatisticsDiseaseUrl }]
                    },
                    {
                        id: "353",
                        title: "在院病人费用（按病人类型）统计分析表",
                        picker: "MonthPicker",
                        path: "/main/echarts", echarts: [{ name: "在院病人费用（按病人类型）统计分析表", type: "table", url: PatiCostStatisticsTypeUrl }]
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
                        path: "/main/echarts", echarts: [{ name: "出院未结病人（按科室）费用统计", type: "table", url: DiscPatiNoPayCostStatisticsDepUrl }]
                    },
                    {
                        id: "362",
                        title: "出院未结病人费用明细表",
                        path: "/main/echarts", echarts: [{ name: "出院未结病人费用明细表", type: "table", url: DiscPatiNoPayCostStatisticsDetailUrl }]
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
                        path: "/main/echarts", echarts: [{ name: "特殊群体费用减免统计", type: "table", url: SpecReduFeeWaiverUrl }]
                    },
                    {
                        id: "372",
                        title: "特殊群体各类费用减免统计",
                        path: "/main/echarts", echarts: [{ name: "特殊群体各类费用减免统计", type: "table", url: SpecReduFeeWaiverTypeUrl }]
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
                picker: "MonthPicker",
                path: "/main/echarts",
                echarts: [
                    {
                        name: "按时间周期和病人年龄组分类的比例图",
                        type: "pie",
                        url: TreatmentAnalysisPatByAge
                    },
                    {
                        name: "按时间周期和病人类型的比例图(住院)",
                        type: "pie",
                        url: TreatmentAnalysisPatByType1
                    },
                    {
                        name: "按时间周期和病人类型的比例图(门诊)",
                        type: "pie",
                        url: TreatmentAnalysisPatByType0
                    },
                    {
                        name: "按时间周期和病人就诊科室分类的比例图",
                        type: "table",
                        url: TreatmentAnalysisPatByDep
                    },
                    {
                        name: "按时间周期计算的门诊人次趋势图",
                        type: "line",
                        url: TreatmentAnalysisPatOutdep
                    },
                    {
                        name: "按时间周期计算的同环比列表",
                        type: "bar",
                        url: TreatmentAnalysisPatRatio
                    },
                ]
            },
            {
                id: '42',
                title: "门诊量分析",
                list: [
                    {
                        id: "421",
                        title: "门诊量趋势图",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "门诊量趋势图",
                                type: "line",
                                url: OutPatDepTendencyUrl
                            }
                        ]

                    },
                    {
                        id: "423",
                        title: "门诊专业就诊数量",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "门诊专业就诊数量",
                                type: "bar",
                                url: OutPatDepDepUrl
                            }
                        ]
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
                        path: "/main/echarts", echarts: [{ name: "各门诊科室医生大处方统计表", type: "table", url: DocExPreByDocUrl }]
                    },
                    {
                        id: "432",
                        title: "门诊各病种(按医生)大处方统计表",
                        path: "/main/echarts", echarts: [{ name: "门诊各病种(按医生)大处方统计表", type: "table", url: DocExPreByDiseaseUrl }]
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
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "按科室工作量统计",
                                type: "bar",
                                url: WorkoadByDepUrl
                            }
                        ]
                    },
                    {
                        id: "442",
                        title: "按人员工作量统计",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "按人员工作量统计",
                                type: "bar",
                                url: WorkoadByDocUrl
                            }
                        ]
                    },
                    {
                        id: "443",
                        title: "按检验项目标本份数统计",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "按检验项目标本份数统计",
                                type: "bar",
                                url: WorkoadByInspectUrl0
                            }
                        ]
                    },
                    {
                        id: "445",
                        title: "按检查项目标本份数统计",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "按检查项目标本份数统计",
                                type: "bar",
                                url: WorkoadByInspectUrl1
                            }
                        ]
                    },
                    {
                        id: "447",
                        title: "医生开具检验项目统计",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "医生开具检验项目统计",
                                type: "bar",
                                url: WorkoadByDocInspectUrl0
                            }
                        ]
                    },
                    {
                        id: "448",
                        title: "医生开具检查项目统计",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "医生开具检查项目统计",
                                type: "bar",
                                url: WorkoadByDocInspectUrl1
                            }
                        ]
                    },
                    {
                        id: "449",
                        title: "科室开具检验项目统计",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "科室开具检验项目统计",
                                type: "bar",
                                url: WorkoadByDepInspectUrl0
                            }
                        ]
                    },
                    {
                        id: "4410",
                        title: "科室开具检查项目统计",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "科室开具检查项目统计",
                                type: "bar",
                                url: WorkoadByDepInspectUrl1
                            }
                        ]
                    },
                    {
                        id: "4411",
                        title: "科室手术工作量统计",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "科室手术工作量统计",
                                type: "bar",
                                url: WorkoadDepOperUrl
                            }
                        ]
                    },
                    {
                        id: "4412",
                        title: "手术项目工作量统计",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "手术项目工作量统计",
                                type: "bar",
                                url: WorkoadOperUrl
                            }
                        ]
                    }
                ]
            },
            {
                id: '45',
                title: "在院病人分布状况",
                path: "/main/echarts", echarts: [{ name: "在院病人分布状况", type: "table", url: TreatmentAnalysisInPatUrl }]
            },
            {
                id: '46',
                title: "床位使用状况分析",
                picker: "MonthPicker",
                path: "/main/echarts", echarts: [{ name: "床位使用状况分析", type: "table", url: TreatmentAnalysisBedUrl }]
            }
            ,
            {
                id: '47',
                title: "门诊挂号类别统计",
                path: "/main/echarts", echarts: [{ name: "门诊挂号类别统计", type: "table", url: TreatmentAnalysisOutPatRegistrationUrl }]
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
                path: "/main/echarts",
                echarts: [
                    {
                        name: "药品消耗量排名",
                        type: "table",
                        url: MedAnalysisMedConsumptionUrl
                    }
                ]
            },
            {
                id: '52',
                title: "用药金额排名",
                list: [
                    {
                        id: "521",
                        title: "药品销量金额排名",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "药品销量金额排名",
                                type: "bar",
                                url: MedIncomeBySaleUrl
                            }
                        ]
                    },
                    {
                        id: "522",
                        title: "科室用药金额排名",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "科室用药金额排名",
                                type: "bar",
                                url: MedIncomeByDepUrl
                            }
                        ]
                    },
                    {
                        id: "523",
                        title: "医生开药金额排名",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "医生开药金额排名",
                                type: "bar",
                                url: MedIncomeByDocUrl
                            }
                        ]
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
                picker: "MonthPicker",
                path: "/main/echarts",
                echarts: [
                    {
                        name: "病人用药类型分析",
                        type: "bar",
                        url: MedAnalysisPatUseMedUrl
                    }
                ]
            },
            {
                id: '55',
                title: "药费总额构成分析",
                picker: "MonthPicker",
                path: "/main/echarts",
                echarts: [
                    {
                        name: "药费总额构成分析",
                        type: "bar",
                        url: MedAnalysisMedTotalCostUrl
                    }
                ]
            },
            {
                id: '56',
                title: "药品收入比重分析",
                list: [
                    {
                        id: "561",
                        title: "各医生药品收入占医疗收入比重分析",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "各医生药品收入占医疗收入比重分析",
                                type: "table",
                                url: MedAnalysisMedProportionUrl0
                            }
                        ]
                    },
                    {
                        id: "562",
                        title: "各科室药品收入占医疗收入比重分析",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "各科室药品收入占医疗收入比重分析",
                                type: "table",
                                url: MedAnalysisMedProportionUrl1
                            }
                        ]
                    },
                    {
                        id: "563",
                        title: "各病种药品收入占医疗收入比重分析",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "各病种药品收入占医疗收入比重分析",
                                type: "table",
                                url: MedAnalysisMedProportionUrl2
                            }
                        ]
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
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "按特殊药品类型占比分析",
                                type: "bar",
                                url: ControlledMedByTypeUrl
                            }
                        ]
                    },
                    {
                        id: "572",
                        title: "各医生各类特殊药品开药金额排名",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "各医生各类特殊药品开药金额排名",
                                type: "table",
                                url: ControlledMedByDocUrl
                            }
                        ]
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
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "全院抗菌药品统计指标监控表",
                                type: "table",
                                url: AntibacterialMedHosStatisticalUrl
                            }
                        ]
                    },
                    {
                        id: "582",
                        title: "各病种就诊使用抗菌药物占比",
                        picker: "MonthPicker",
                        path: "/main/echarts", echarts: [{ name: "各病种就诊使用抗菌药物占比", type: "table", url: AntibacterialMedAntiMedPercentUrl0 }]

                    },
                    {
                        id: "583",
                        title: "各医生就诊使用抗菌药物占比",
                        picker: "MonthPicker",
                        path: "/main/echarts", echarts: [{ name: "各医生就诊使用抗菌药物占比", type: "table", url: AntibacterialMedAntiMedPercentUrl1 }]

                    },
                    {
                        id: "584",
                        title: "抗菌药物使用强度趋势图",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "抗菌药物使用强度趋势图",
                                type: "line",
                                url: AntibacterialMedAntiMedAntiMedUseTrendByMonth
                            }
                        ]
                    },
                    {
                        id: "585",
                        title: "各病种抗菌药物使用强度对比",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "各病种抗菌药物使用强度对比",
                                type: "table",
                                url: AntibacterialMedAntiMedAntiMedUseTrendByJbmc
                            }
                        ]
                    },
                    {
                        id: "586",
                        title: "抗菌药物占药费总额百分率",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "抗菌药物占药费总额百分率",
                                type: "pie",
                                url: AntibacterialMedAntiMedTotalFeeProportionUrl
                            }
                        ]
                    },
                    {
                        id: "587",
                        title: "各病种抗菌药物占药费总额百分比",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "各病种抗菌药物占药费总额百分比",
                                type: "table",
                                url: AntibacterialMedAntiMedAntiMedTotalFeeProportionByDepDisease1
                            }
                        ]
                    },
                    {
                        id: "588",
                        title: "各科室抗菌药物占药费总额百分比",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "各科室抗菌药物占药费总额百分比",
                                type: "table",
                                url: AntibacterialMedAntiMedAntiMedTotalFeeProportionByDepDisease2
                            }
                        ]

                    },
                    {
                        id: "589",
                        title: "各医生住院患者人均使用抗菌药物品种数",
                        picker: "MonthPicker",
                        path: "/main/echarts", echarts: [{ name: "各医生住院患者人均使用抗菌药物品种数", type: "table", url: AntibacterialMedInPatUseAntiMedVarietyUrl0 }]
                    },
                    {
                        id: "5810",
                        title: "各病种住院患者人均使用抗菌药物品种数",
                        picker: "MonthPicker",
                        path: "/main/echarts", echarts: [{ name: "各病种住院患者人均使用抗菌药物品种数", type: "table", url: AntibacterialMedInPatUseAntiMedVarietyUrl1 }]
                    },
                    {
                        id: "5811",
                        title: "住院患者人均使用抗菌药物费用趋势",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "住院患者人均使用抗菌药物费用趋势",
                                type: "line",
                                url: AntibacterialMedInPatUseAntiMedFeeUrl0
                            }
                        ]
                    },
                    {
                        id: "5812",
                        title: "各病种住院患者人均使用抗菌药物费用",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "各病种住院患者人均使用抗菌药物费用",
                                type: "bar",
                                url: AntibacterialMedInPatUseAntiMedFeeUrl1
                            }
                        ]
                    },
                    {
                        id: "5813",
                        title: "各科室住院患者使用抗菌药物比例对比",
                        picker: "MonthPicker",
                        path: "/main/echarts", echarts: [{ name: "各科室住院患者使用抗菌药物比例对比", type: "table", url: AntibacterialMedInPatUseAntiMedProportionUrl0 }]
                    },
                    {
                        id: "5814",
                        title: "各病种住院患者人均使用抗菌药物费用",
                        picker: "MonthPicker",
                        path: "/main/echarts", echarts: [{ name: "各病种住院患者人均使用抗菌药物费用", type: "table", url: AntibacterialMedInPatUseAntiMedProportionUrl1 }]
                    },
                    {
                        id: "5815",
                        title: "住院用抗菌药物患者病原学检查比率趋势",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "住院用抗菌药物患者病原学检查比率趋势",
                                type: "pie",
                                url: AntibacterialMedAntiMedCheckProportionUrl0
                            }
                        ]
                    },
                    {
                        id: "5816",
                        title: "各病种抗菌药物患者病原学检查比率趋势",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "各病种抗菌药物患者病原学检查比率趋势",
                                type: "line",
                                url: AntibacterialMedAntiMedCheckProportionUrl1
                            }
                        ]
                    }
                ]
            },
            {
                id: '59',
                title: "药品库存分析",
                path: "/main/echarts",
                echarts: [
                    {
                        name: "药品库存分析",
                        type: "line",
                        url: MedAnalysisMedStockTrendUrl
                    }
                ]

            },
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
                picker: "MonthPicker",
                path: "/main/echarts",
                echarts: [
                    {
                        name: "疾病人群分析",
                        type: "BarNegative",
                        url: MedicalCareAnalysisDiseasePatUrl
                    }
                ]
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
                picker: "MonthPicker",
                path: "/main/echarts",
                echarts: [
                    {
                        name: "单病种分析",
                        type: "table",
                        url: MedicalCareAnalysisDiseaseAnalysisUrl
                    }
                ]
            },
            {
                id: '63',
                title: "就诊时间分析",
                picker: "MonthPicker",
                path: "/main/echarts",
                echarts: [
                    {
                        name: "就诊时间分析",
                        type: "pie",
                        url: MedicalCareAnalysisVisitTimeUrl
                    }
                ]
            },
            {
                id: '64',
                title: "诊断符合率分析",
                list: [
                    {
                        id: "641",
                        title: "全院诊断符合率趋势分析",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "全院诊断符合率趋势分析",
                                type: "line",
                                url: CoincidenceByHosUrl
                            }
                        ]
                    },
                    {
                        id: "642",
                        title: "各医生诊断符合率分析",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "各医生诊断符合率分析",
                                type: "pie",
                                url: CoincidenceByDocUrl
                            }
                        ]
                    }

                ]
            },
            {
                id: '65',
                title: "病人满意度分析",
                picker: "MonthPicker",
                path: "/main/echarts",
                echarts: [
                    {
                        name: "病人满意度分析",
                        type: "pie",
                        url: MedicalCareAnalysisPatSatisfactionUrl
                    }
                ]
            },
            {
                id: '66',
                title: "治愈好转率分析",
                list: [
                    {
                        id: "661",
                        title: "全院治愈好转率趋势分析",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "全院治愈好转率趋势分析",
                                type: "line",
                                url: CureRateByHospitalUrl
                            }
                        ]
                    },
                    {
                        id: "662",
                        title: "各病种治愈好转率分析",
                        picker: "MonthPicker",
                        path: "/main/echarts",
                        echarts: [
                            {
                                name: "各病种治愈好转率分析",
                                type: "table",
                                url: CureRateByDiseaseUrl
                            }
                        ]
                    },
                ]
            }

        ]

    },
]