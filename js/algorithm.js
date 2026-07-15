// ========== 城市配置 ==========
const CITY_CONFIG = {
    beijing: { name: '北京', tier: 1, incomeWeight: 1.3, assetWeight: 1.2, hukouBonus: 15, provincialBonus: 5, competitionBase: 85, baseIncome: 25, baseAsset: 300 },
    shanghai: { name: '上海', tier: 1, incomeWeight: 1.3, assetWeight: 1.25, hukouBonus: 18, provincialBonus: 4, competitionBase: 88, baseIncome: 25, baseAsset: 300 },
    tianjin: { name: '天津', tier: 1, incomeWeight: 1.15, assetWeight: 1.1, hukouBonus: 14, provincialBonus: 5, competitionBase: 78, baseIncome: 18, baseAsset: 200 },
    chongqing: { name: '重庆', tier: 1, incomeWeight: 1.1, assetWeight: 1.05, hukouBonus: 12, provincialBonus: 6, competitionBase: 75, baseIncome: 16, baseAsset: 150 },
    guangzhou: { name: '广州', tier: 1, incomeWeight: 1.15, assetWeight: 1.1, hukouBonus: 12, provincialBonus: 6, competitionBase: 78, baseIncome: 20, baseAsset: 250 },
    shenzhen: { name: '深圳', tier: 1, incomeWeight: 1.25, assetWeight: 1.15, hukouBonus: 14, provincialBonus: 8, competitionBase: 82, baseIncome: 22, baseAsset: 280 },
    chengdu: { name: '成都', tier: 2, incomeWeight: 1.0, assetWeight: 1.05, hukouBonus: 10, provincialBonus: 7, competitionBase: 70, baseIncome: 15, baseAsset: 120 },
    hangzhou: { name: '杭州', tier: 1.5, incomeWeight: 1.2, assetWeight: 1.15, hukouBonus: 13, provincialBonus: 6, competitionBase: 76, baseIncome: 20, baseAsset: 200 },
    wuhan: { name: '武汉', tier: 1.5, incomeWeight: 1.1, assetWeight: 1.1, hukouBonus: 12, provincialBonus: 5, competitionBase: 74, baseIncome: 16, baseAsset: 150 },
    nanjing: { name: '南京', tier: 1.5, incomeWeight: 1.15, assetWeight: 1.15, hukouBonus: 14, provincialBonus: 5, competitionBase: 76, baseIncome: 18, baseAsset: 200 },
    suzhou: { name: '苏州', tier: 1.5, incomeWeight: 1.2, assetWeight: 1.15, hukouBonus: 12, provincialBonus: 6, competitionBase: 75, baseIncome: 18, baseAsset: 180 },
    xian: { name: '西安', tier: 1.5, incomeWeight: 1.0, assetWeight: 1.05, hukouBonus: 12, provincialBonus: 5, competitionBase: 72, baseIncome: 14, baseAsset: 120 },
    zhengzhou: { name: '郑州', tier: 1.5, incomeWeight: 1.0, assetWeight: 1.0, hukouBonus: 10, provincialBonus: 5, competitionBase: 70, baseIncome: 13, baseAsset: 110 },
    changsha: { name: '长沙', tier: 1.5, incomeWeight: 1.05, assetWeight: 1.05, hukouBonus: 11, provincialBonus: 5, competitionBase: 72, baseIncome: 14, baseAsset: 130 },
    dongguan: { name: '东莞', tier: 1.5, incomeWeight: 1.1, assetWeight: 1.1, hukouBonus: 10, provincialBonus: 7, competitionBase: 74, baseIncome: 15, baseAsset: 150 },
    foshan: { name: '佛山', tier: 1.5, incomeWeight: 1.05, assetWeight: 1.1, hukouBonus: 10, provincialBonus: 6, competitionBase: 72, baseIncome: 14, baseAsset: 140 },
    ningbo: { name: '宁波', tier: 1.5, incomeWeight: 1.1, assetWeight: 1.1, hukouBonus: 12, provincialBonus: 5, competitionBase: 73, baseIncome: 16, baseAsset: 160 },
    qingdao: { name: '青岛', tier: 1.5, incomeWeight: 1.05, assetWeight: 1.05, hukouBonus: 11, provincialBonus: 5, competitionBase: 72, baseIncome: 15, baseAsset: 140 },
    dalian: { name: '大连', tier: 1.5, incomeWeight: 1.0, assetWeight: 1.05, hukouBonus: 11, provincialBonus: 5, competitionBase: 71, baseIncome: 14, baseAsset: 130 },
    jinan: { name: '济南', tier: 1.5, incomeWeight: 1.0, assetWeight: 1.0, hukouBonus: 11, provincialBonus: 5, competitionBase: 71, baseIncome: 14, baseAsset: 130 },
    hefei: { name: '合肥', tier: 1.5, incomeWeight: 1.0, assetWeight: 1.0, hukouBonus: 10, provincialBonus: 5, competitionBase: 70, baseIncome: 13, baseAsset: 120 },
    fuzhou: { name: '福州', tier: 2, incomeWeight: 0.95, assetWeight: 1.0, hukouBonus: 10, provincialBonus: 5, competitionBase: 68, baseIncome: 13, baseAsset: 120 },
    xiamen: { name: '厦门', tier: 1.5, incomeWeight: 1.1, assetWeight: 1.15, hukouBonus: 12, provincialBonus: 6, competitionBase: 74, baseIncome: 16, baseAsset: 180 },
    kunming: { name: '昆明', tier: 2, incomeWeight: 0.9, assetWeight: 0.95, hukouBonus: 8, provincialBonus: 5, competitionBase: 65, baseIncome: 11, baseAsset: 100 },
    nanning: { name: '南宁', tier: 2, incomeWeight: 0.85, assetWeight: 0.9, hukouBonus: 8, provincialBonus: 5, competitionBase: 63, baseIncome: 10, baseAsset: 90 },
    guiyang: { name: '贵阳', tier: 2, incomeWeight: 0.85, assetWeight: 0.9, hukouBonus: 8, provincialBonus: 5, competitionBase: 63, baseIncome: 10, baseAsset: 90 },
    lanzhou: { name: '兰州', tier: 2, incomeWeight: 0.85, assetWeight: 0.9, hukouBonus: 8, provincialBonus: 5, competitionBase: 63, baseIncome: 10, baseAsset: 90 },
    haerbin: { name: '哈尔滨', tier: 2, incomeWeight: 0.9, assetWeight: 0.95, hukouBonus: 10, provincialBonus: 5, competitionBase: 66, baseIncome: 11, baseAsset: 100 },
    changchun: { name: '长春', tier: 2, incomeWeight: 0.85, assetWeight: 0.9, hukouBonus: 9, provincialBonus: 5, competitionBase: 64, baseIncome: 10, baseAsset: 95 },
    shenyang: { name: '沈阳', tier: 2, incomeWeight: 0.95, assetWeight: 1.0, hukouBonus: 10, provincialBonus: 5, competitionBase: 68, baseIncome: 12, baseAsset: 110 },
    nanchang: { name: '南昌', tier: 2, incomeWeight: 0.9, assetWeight: 0.95, hukouBonus: 9, provincialBonus: 5, competitionBase: 66, baseIncome: 11, baseAsset: 100 },
    huhehaote: { name: '呼和浩特', tier: 2, incomeWeight: 0.9, assetWeight: 0.95, hukouBonus: 9, provincialBonus: 5, competitionBase: 65, baseIncome: 11, baseAsset: 100 },
    xining: { name: '西宁', tier: 3, incomeWeight: 0.8, assetWeight: 0.85, hukouBonus: 7, provincialBonus: 4, competitionBase: 60, baseIncome: 9, baseAsset: 80 },
    yinchuan: { name: '银川', tier: 3, incomeWeight: 0.8, assetWeight: 0.85, hukouBonus: 7, provincialBonus: 4, competitionBase: 60, baseIncome: 9, baseAsset: 80 },
    wulumuqi: { name: '乌鲁木齐', tier: 3, incomeWeight: 0.85, assetWeight: 0.9, hukouBonus: 8, provincialBonus: 5, competitionBase: 62, baseIncome: 10, baseAsset: 85 },
    lasa: { name: '拉萨', tier: 3, incomeWeight: 0.9, assetWeight: 0.85, hukouBonus: 10, provincialBonus: 6, competitionBase: 60, baseIncome: 12, baseAsset: 80 },
    haikou: { name: '海口', tier: 2, incomeWeight: 0.9, assetWeight: 1.0, hukouBonus: 10, provincialBonus: 6, competitionBase: 66, baseIncome: 12, baseAsset: 110 },
    sanya: { name: '三亚', tier: 2, incomeWeight: 0.9, assetWeight: 1.05, hukouBonus: 10, provincialBonus: 6, competitionBase: 67, baseIncome: 12, baseAsset: 120 },
    hongkong: { name: '香港', tier: 1, incomeWeight: 1.3, assetWeight: 1.3, hukouBonus: 20, provincialBonus: 5, competitionBase: 90, baseIncome: 30, baseAsset: 400 },
    macau: { name: '澳门', tier: 1, incomeWeight: 1.2, assetWeight: 1.2, hukouBonus: 18, provincialBonus: 5, competitionBase: 85, baseIncome: 25, baseAsset: 350 }
};

// ========== 岗位评分 ==========
const JOB_SCORES = {
    civil_servant: 92, state_owned: 85, tech: 82, finance: 88,
    education: 80, medical: 83, enterprise: 86, military: 84,
    legal: 85, media: 75, realestate: 78, manufacturing: 72,
    service: 62, logistics: 65, freelance: 72, private: 68,
    entrepreneur: 80, student: 55, retired: 60, other: 60
};

// ========== 学历评分 ==========
const EDUCATION_SCORES = {
    junior_high: 40, highschool: 52, college: 65,
    bachelor: 80, master: 92, phd: 98
};

// ========== 家庭情况评分 ==========
const FAMILY_SCORES = {
    only_child: 88, one_sibling: 82, multiple_siblings: 70,
    deceased_parent: 65, both_parents: 85
};

// ========== 年龄评分 ==========
function getAgeScore(birthday, gender) {
    const birth = new Date(birthday);
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const m = now.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--;
    if (gender === 'male') {
        if (age >= 25 && age <= 32) return 95;
        if (age >= 23 && age <= 24) return 82;
        if (age >= 33 && age <= 36) return 78;
        if (age >= 37 && age <= 40) return 65;
        if (age >= 21 && age <= 22) return 72;
        if (age > 40) return 50;
        if (age < 21) return 60;
        return 70;
    } else {
        if (age >= 23 && age <= 29) return 95;
        if (age >= 21 && age <= 22) return 82;
        if (age >= 30 && age <= 33) return 78;
        if (age >= 34 && age <= 37) return 65;
        if (age >= 38) return 50;
        if (age < 21) return 68;
        return 70;
    }
}

function getAge(birthday) {
    const birth = new Date(birthday);
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const m = now.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--;
    return age;
}

// ========== 收入评分 ==========
function getIncomeScore(income, city) {
    const config = CITY_CONFIG[city] || { baseIncome: 12, incomeWeight: 0.9 };
    const baseIncome = config.baseIncome;
    let score;
    if (income >= baseIncome * 4) score = 98;
    else if (income >= baseIncome * 3) score = 92;
    else if (income >= baseIncome * 2) score = 85;
    else if (income >= baseIncome * 1.5) score = 78;
    else if (income >= baseIncome) score = 70;
    else if (income >= baseIncome * 0.7) score = 60;
    else if (income >= baseIncome * 0.5) score = 50;
    else score = 40;
    return Math.min(100, Math.round(score * config.incomeWeight * 100) / 100);
}

// ========== 资产评分 ==========
function getAssetScore(assets, city) {
    const config = CITY_CONFIG[city] || { baseAsset: 100, assetWeight: 0.9 };
    const baseAsset = config.baseAsset;
    let score;
    if (assets >= baseAsset * 5) score = 98;
    else if (assets >= baseAsset * 3) score = 92;
    else if (assets >= baseAsset * 2) score = 85;
    else if (assets >= baseAsset) score = 75;
    else if (assets >= baseAsset * 0.5) score = 65;
    else if (assets >= baseAsset * 0.2) score = 55;
    else if (assets > 0) score = 45;
    else score = 35;
    return Math.min(100, Math.round(score * config.assetWeight * 100) / 100);
}

// ========== 外形评分 ==========
function getAppearanceScore(rating) {
    return Math.round(30 + (rating - 1) * 7.78);
}

// ========== 户籍评分 ==========
function getHukouScore(hukou, city) {
    const config = CITY_CONFIG[city] || { hukouBonus: 8, provincialBonus: 4 };
    let baseScore = 70;
    if (hukou === 'local') baseScore = 95;
    else if (hukou === 'provincial') baseScore = 78;
    else baseScore = 60;
    if (hukou === 'local') baseScore += config.hukouBonus;
    else if (hukou === 'provincial') baseScore += config.provincialBonus;
    return Math.min(100, baseScore);
}

// ========== 主评分函数 ==========
function calculateScore(formData) {
    const city = formData.city;
    const gender = formData.gender;
    const ageScore = getAgeScore(formData.birthday, gender);
    const incomeScore = getIncomeScore(parseFloat(formData.income), city);
    const assetScore = getAssetScore(parseFloat(formData.assets), city);
    const appearanceScore = getAppearanceScore(parseInt(formData.appearance));
    const educationScore = EDUCATION_SCORES[formData.education] || 60;
    const familyScore = FAMILY_SCORES[formData.family] || 70;
    const jobScore = JOB_SCORES[formData.job] || 60;
    const hukouScore = getHukouScore(formData.hukou, city);
    
    const weights = gender === 'male' ? {
        age: 0.12, income: 0.18, asset: 0.15, appearance: 0.15,
        education: 0.12, family: 0.08, job: 0.12, hukou: 0.08
    } : {
        age: 0.15, income: 0.10, asset: 0.12, appearance: 0.18,
        education: 0.13, family: 0.10, job: 0.12, hukou: 0.10
    };
    
    const totalScore = Math.round(
        ageScore * weights.age + incomeScore * weights.income +
        assetScore * weights.asset + appearanceScore * weights.appearance +
        educationScore * weights.education + familyScore * weights.family +
        jobScore * weights.job + hukouScore * weights.hukou
    );
    
    const cityConfig = CITY_CONFIG[city] || { competitionBase: 65 };
    const percentile = calculatePercentile(totalScore, gender, cityConfig);
    
    return {
        totalScore: Math.min(100, Math.max(0, totalScore)),
        percentile,
        dimensions: { age: ageScore, income: incomeScore, asset: assetScore, appearance: appearanceScore, education: educationScore, family: familyScore, job: jobScore, hukou: hukouScore },
        weights
    };
}

function calculatePercentile(score, gender, cityConfig) {
    const baseLine = cityConfig.competitionBase || 65;
    const adjustedScore = score * (baseLine / 75);
    const mean = 65;
    const stdDev = 15;
    const z = (adjustedScore - mean) / stdDev;
    const cdf = 0.5 * (1 + erf(z / Math.sqrt(2)));
    return Math.round(Math.min(99, Math.max(1, cdf * 100)));
}

function erf(x) {
    const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741;
    const a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
    const sign = x >= 0 ? 1 : -1;
    x = Math.abs(x);
    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    return sign * y;
}

// ========== 分析文本 ==========
function generateAnalysis(scoreResult, formData, cityName) {
    const score = scoreResult.totalScore;
    const percentile = scoreResult.percentile;
    const gender = formData.gender === 'male' ? '男性' : '女性';
    const age = getAge(formData.birthday);
    let level, levelDesc;
    if (score >= 90) { level = '顶级竞争力'; levelDesc = '你在相亲市场属于稀缺资源，极具吸引力，选择面非常广'; }
    else if (score >= 80) { level = '优秀竞争力'; levelDesc = '你在相亲市场有明显优势，能吸引到不错的对象'; }
    else if (score >= 70) { level = '良好竞争力'; levelDesc = '你具备不错的相亲条件，整体处于中上水平'; }
    else if (score >= 60) { level = '中等竞争力'; levelDesc = '你的条件处于市场平均水平，需要突出个人亮点'; }
    else if (score >= 50) { level = '一般竞争力'; levelDesc = '你在相亲市场存在一定压力，建议重点提升优势维度'; }
    else { level = '待提升'; levelDesc = '建议先提升核心竞争力，再进入相亲市场'; }
    
    const dims = scoreResult.dimensions;
    const dimNames = { age: '年龄', income: '收入', asset: '资产', appearance: '外形', education: '学历', family: '家庭', job: '岗位', hukou: '户籍' };
    let maxDim = '', maxScore = 0, minDim = '', minScore = 100;
    for (const [key, val] of Object.entries(dims)) {
        if (val > maxScore) { maxScore = val; maxDim = key; }
        if (val < minScore) { minScore = val; minDim = key; }
    }
    
    const advice = {
        age: '年龄无法改变，建议在其他维度提升竞争力',
        income: '可通过职业发展、副业等方式提升收入水平',
        asset: '可考虑合理投资理财增加资产积累',
        appearance: '注意穿搭形象管理，适当健身提升气质',
        education: '可考虑在职提升学历或获取专业证书',
        family: '家庭情况无法改变，建议在其他方面突出优势',
        job: '可考虑向更有竞争力的岗位方向发展',
        hukou: '户籍可通过落户政策逐步解决'
    };
    
    return `<p>你在<span class="analysis-highlight">${cityName}</span>相亲市场中的综合竞争力等级为：<span class="analysis-highlight">${level}</span>。</p>
    <p>${levelDesc}，综合得分 <span class="analysis-highlight">${score}分</span>，超过了当地 <span class="analysis-highlight">${percentile}%</span> 的${gender}相亲人群。</p>
    <p>你最强的维度是<span class="analysis-highlight">${dimNames[maxDim]}</span>（${maxScore}分），这是你相亲时的核心优势。</p>
    <p>相对较弱的维度是<span class="analysis-highlight">${dimNames[minDim]}</span>（${minScore}分），${advice[minDim] || ''}。</p>
    <p>年龄${age}岁，${age <= 30 ? '正处于婚恋黄金期，建议把握时间窗口积极相亲。' : '在相亲市场中需要更注重其他维度的竞争力。'}</p>`;
}

// ========== 各维度详细解读 ==========
function generateDimensionDetails(scoreResult, formData) {
    const dims = scoreResult.dimensions;
    const cityName = formData.cityName || formData.city;
    const age = getAge(formData.birthday);
    const gender = formData.gender === 'male' ? '男' : '女';
    const income = parseFloat(formData.income);
    const assets = parseFloat(formData.assets);
    const details = [];
    
    // 年龄
    let ageComment = '';
    if (formData.gender === 'male') {
        if (age >= 25 && age <= 32) ageComment = '你正处于男性婚恋黄金年龄段，既有一定经济基础又保持年轻活力。';
        else if (age >= 23 && age <= 24) ageComment = '你还年轻，虽然经济基础可能还不够雄厚，但年轻本身就是优势。';
        else if (age >= 33 && age <= 36) ageComment = '你已经比较成熟，有一定的经济积累和社会阅历。';
        else if (age >= 37 && age <= 40) ageComment = '你在相亲市场属于大龄段，建议重点突出收入、资产、岗位等硬实力。';
        else if (age > 40) ageComment = '年龄偏大，相亲市场选择面会收窄，建议提升其他维度竞争力。';
        else ageComment = '年龄较小，建议以提升自身能力为主。';
    } else {
        if (age >= 23 && age <= 29) ageComment = '你正处于女性婚恋黄金年龄段，既年轻又有一定成熟度。';
        else if (age >= 30 && age <= 33) ageComment = '你已经比较成熟，有一定的社会阅历和经济基础。';
        else if (age >= 34 && age <= 37) ageComment = '你在相亲市场属于大龄段，建议重点突出外形、学历、工作等优势。';
        else if (age > 37) ageComment = '年龄偏大，相亲市场选择面会收窄，建议提升综合竞争力。';
        else ageComment = '年龄较小，建议以提升自身能力为主。';
    }
    details.push({ name: '年龄', score: dims.age, comment: ageComment });
    
    // 收入
    const baseIncome = (CITY_CONFIG[formData.city] || { baseIncome: 12 }).baseIncome;
    let incomeComment = '';
    if (income >= baseIncome * 3) incomeComment = `你在${cityName}的收入水平非常高，远超当地平均水平，这是你相亲时的核心优势。`;
    else if (income >= baseIncome * 2) incomeComment = `你的收入在${cityName}属于中上水平，稳定的高收入是相亲的重要加分项。`;
    else if (income >= baseIncome) incomeComment = `你的收入在${cityName}处于平均水平，不算突出但也不拖后腿。`;
    else if (income >= baseIncome * 0.7) incomeComment = `你的收入略低于${cityName}平均水平，在相亲时可能不占优势。`;
    else incomeComment = `你的收入明显低于${cityName}平均水平，这是相亲时的短板。`;
    details.push({ name: '收入', score: dims.income, comment: incomeComment });
    
    // 资产
    const baseAsset = (CITY_CONFIG[formData.city] || { baseAsset: 100 }).baseAsset;
    let assetComment = '';
    if (assets >= baseAsset * 3) assetComment = '你家的资产非常雄厚，在相亲市场属于顶层。';
    else if (assets >= baseAsset * 2) assetComment = '你家的资产状况良好，有房有车，在相亲市场有明显优势。';
    else if (assets >= baseAsset) assetComment = '你家的资产处于中上水平，基本满足婚房需求。';
    else if (assets >= baseAsset * 0.5) assetComment = '你家的资产状况一般，可能暂时没有独立婚房。';
    else if (assets > 0) assetComment = '你家的可租住资产较少，在相亲市场可能不占优势。';
    else assetComment = '你家目前没有可租住资产，这是相亲时的明显短板。';
    details.push({ name: '资产', score: dims.asset, comment: assetComment });
    
    // 外形
    const appearance = parseInt(formData.appearance);
    let appearanceComment = '';
    if (appearance >= 8) appearanceComment = '你的外形条件非常好，颜值是相亲时的第一吸引力。';
    else if (appearance >= 6) appearanceComment = '你的外形条件中上，给人感觉干净清爽、得体大方。';
    else if (appearance >= 4) appearanceComment = '你的外形条件中等，建议注重穿搭风格和发型管理。';
    else appearanceComment = '你的外形条件一般，建议注重个人形象管理。';
    details.push({ name: '外形', score: dims.appearance, comment: appearanceComment });
    
    // 学历
    const eduMap = { phd: '博士', master: '硕士', bachelor: '本科', college: '大专', highschool: '高中', junior_high: '初中' };
    let eduComment = '';
    const edu = formData.education;
    if (edu === 'phd') eduComment = '你的学历非常高，博士学历在相亲市场是顶级加分项。';
    else if (edu === 'master') eduComment = '你的学历很高，硕士学历在相亲市场有明显优势。';
    else if (edu === 'bachelor') eduComment = '你的学历是本科，属于相亲市场的主流配置。';
    else if (edu === 'college') eduComment = '你的学历是大专，在相亲市场可能不占优势。';
    else eduComment = '你的学历偏低，在相亲市场可能处于劣势。';
    details.push({ name: '学历', score: dims.education, comment: eduComment });
    
    // 家庭
    const famMap = { only_child: '独生子女', one_sibling: '一个兄弟姐妹', multiple_siblings: '多个兄弟姐妹', deceased_parent: '父母一方不在', both_parents: '双亲健在' };
    let famComment = '';
    const fam = formData.family;
    if (fam === 'only_child') famComment = '你是独生子女，父母双全。在相亲时，独生子女意味着财产不会被分割，但养老压力集中。';
    else if (fam === 'one_sibling') famComment = '你有一个兄弟姐妹，养老压力可以分担。';
    else if (fam === 'multiple_siblings') famComment = '你有多个兄弟姐妹，家庭关系可能比较复杂。';
    else if (fam === 'deceased_parent') famComment = '你的父母有一方不在了，建议展现积极乐观的一面。';
    else famComment = '你父母双全且健在，家庭完整，代表你成长环境健康。';
    details.push({ name: '家庭', score: dims.family, comment: famComment });
    
    // 岗位
    const jobNames = {
        civil_servant: '公务员/事业单位', state_owned: '国企', tech: '互联网/IT', finance: '金融',
        education: '教育', medical: '医疗', enterprise: '企业管理层', military: '军人',
        legal: '法律', media: '媒体文化', realestate: '房地产', manufacturing: '制造业',
        service: '服务业', logistics: '物流运输', freelance: '自由职业', private: '私企',
        entrepreneur: '创业', student: '在读', retired: '已退休', other: '其他'
    };
    let jobComment = '';
    const job = formData.job;
    if (['civil_servant', 'state_owned', 'military'].includes(job)) {
        jobComment = `你从事${jobNames[job]}工作，属于相亲市场的"铁饭碗"，工作稳定、福利好、社会地位高。`;
    } else if (['tech', 'finance', 'enterprise'].includes(job)) {
        jobComment = `你从事${jobNames[job]}工作，收入水平较高，发展前景好。`;
    } else if (['education', 'medical', 'legal'].includes(job)) {
        jobComment = `你从事${jobNames[job]}工作，属于专业性强、社会认可度高的职业。`;
    } else {
        jobComment = `你从事${jobNames[job] || '其他'}工作，在相亲市场属于普通水平。建议在收入、技能等方面突出优势。`;
    }
    details.push({ name: '岗位', score: dims.job, comment: jobComment });
    
    // 户籍
    let hukouComment = '';
    if (formData.hukou === 'local') hukouComment = `你是${cityName}本地户籍，在相亲市场有明显优势。`;
    else if (formData.hukou === 'provincial') hukouComment = '你是本省外市户籍，距离较近，生活习惯相近。';
    else hukouComment = '你是外省户籍，在一线城市相亲时可能处于劣势。';
    details.push({ name: '户籍', score: dims.hukou, comment: hukouComment });
    
    return details;
}

// ========== 提升建议 ==========
function generateAdvice(scoreResult, formData) {
    const dims = scoreResult.dimensions;
    const advice = [];
    if (dims.income < 70) advice.push({ icon: '💰', text: '收入是相亲核心硬指标，建议通过技能提升、副业、跳槽等方式增加年收入。' });
    if (dims.appearance < 75) advice.push({ icon: '✨', text: '外形管理对第一印象影响很大，建议注重穿搭风格、发型管理，适当健身。' });
    if (dims.education < 75) advice.push({ icon: '📚', text: '学历是长期竞争力体现，可考虑在职读研、考取行业证书等方式提升。' });
    if (dims.asset < 65) advice.push({ icon: '🏠', text: '资产是家庭实力的体现，建议合理规划投资理财，逐步增加可租住资产。' });
    if (dims.job < 75) advice.push({ icon: '💼', text: '岗位稳定性影响相亲评价，可考虑向更有社会认可度的方向发展。' });
    advice.push({ icon: '🎯', text: '明确自身定位和择偶标准，选择与自身条件匹配的渠道和对象。' });
    advice.push({ icon: '💡', text: '相亲时注重展示真实自我，真诚比套路更能打动人心。' });
    return advice;
}
