// ========== 省市数据 ==========
const PROVINCE_CITIES = {
    zhixiashi: ['北京', '上海', '天津', '重庆'],
    hebei: ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '保定', '张家口', '承德', '沧州', '廊坊', '衡水'],
    shanxi: ['太原', '大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁'],
    neimenggu: ['呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布'],
    liaoning: ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛'],
    jilin: ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城'],
    heilongjiang: ['哈尔滨', '齐齐哈尔', '鸡西', '鹤岗', '双鸭山', '大庆', '伊春', '佳木斯', '七台河', '牡丹江', '黑河', '绥化'],
    jiangsu: ['南京', '无锡', '徐州', '常州', '苏州', '南通', '连云港', '淮安', '盐城', '扬州', '镇江', '泰州', '宿迁'],
    zhejiang: ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
    anhui: ['合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '滁州', '阜阳', '宿州', '六安', '亳州', '池州', '宣城'],
    fujian: ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
    jiangxi: ['南昌', '景德镇', '萍乡', '九江', '新余', '鹰潭', '赣州', '吉安', '宜春', '抚州', '上饶'],
    shandong: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '临沂', '德州', '聊城', '滨州', '菏泽'],
    henan: ['郑州', '开封', '洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '信阳', '周口', '驻马店'],
    hubei: ['武汉', '黄石', '十堰', '宜昌', '襄阳', '鄂州', '荆门', '孝感', '荆州', '黄冈', '咸宁', '随州'],
    hunan: ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底'],
    guangdong: ['广州', '韶关', '深圳', '珠海', '汕头', '佛山', '江门', '湛江', '茂名', '肇庆', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山', '潮州', '揭阳', '云浮'],
    guangxi: ['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '百色', '贺州', '河池', '来宾', '崇左'],
    hainan: ['海口', '三亚', '三沙', '儋州'],
    sichuan: ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充', '眉山', '宜宾', '广安', '达州', '雅安', '巴中', '资阳'],
    guizhou: ['贵阳', '六盘水', '遵义', '安顺', '毕节', '铜仁'],
    yunnan: ['昆明', '曲靖', '玉溪', '保山', '昭通', '丽江', '普洱', '临沧'],
    xizang: ['拉萨', '日喀则', '昌都', '林芝', '山南', '那曲', '阿里'],
    shaanxi: ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛'],
    gansu: ['兰州', '嘉峪关', '金昌', '白银', '天水', '武威', '张掖', '平凉', '酒泉', '庆阳', '定西', '陇南'],
    qinghai: ['西宁', '海东', '海北', '黄南', '海南州', '果洛', '玉树', '海西'],
    ningxia: ['银川', '石嘴山', '吴忠', '固原', '中卫'],
    xinjiang: ['乌鲁木齐', '克拉玛依', '吐鲁番', '哈密', '昌吉', '博尔塔拉', '巴音郭楞', '阿克苏', '克孜勒苏', '喀什', '和田', '伊犁', '塔城', '阿勒泰'],
    taiwan: ['台北', '高雄', '台中', '台南', '新北', '桃园', '新竹', '嘉义'],
    xianggang: ['香港'],
    aomen: ['澳门']
};

const CITY_NAME_TO_KEY = {
    '北京': 'beijing', '上海': 'shanghai', '天津': 'tianjin', '重庆': 'chongqing',
    '广州': 'guangzhou', '深圳': 'shenzhen', '成都': 'chengdu', '杭州': 'hangzhou',
    '武汉': 'wuhan', '南京': 'nanjing', '苏州': 'suzhou', '西安': 'xian',
    '郑州': 'zhengzhou', '长沙': 'changsha', '东莞': 'dongguan', '佛山': 'foshan',
    '宁波': 'ningbo', '青岛': 'qingdao', '大连': 'dalian', '济南': 'jinan',
    '合肥': 'hefei', '福州': 'fuzhou', '厦门': 'xiamen', '昆明': 'kunming',
    '南宁': 'nanning', '贵阳': 'guiyang', '兰州': 'lanzhou', '哈尔滨': 'haerbin',
    '长春': 'changchun', '沈阳': 'shenyang', '南昌': 'nanchang', '呼和浩特': 'huhehaote',
    '西宁': 'xining', '银川': 'yinchuan', '乌鲁木齐': 'wulumuqi', '拉萨': 'lasa',
    '海口': 'haikou', '三亚': 'sanya', '香港': 'hongkong', '澳门': 'macau',
    '台北': 'taibei', '高雄': 'gaoxiong', '台中': 'taichung', '台南': 'tainan',
    '新北': 'xinbei', '桃园': 'taoyuan', '新竹': 'hsinchu', '嘉义': 'jiayi',
    '石家庄': 'shijiazhuang', '唐山': 'tangshan', '秦皇岛': 'qinhuangdao', '邯郸': 'handan',
    '邢台': 'xingtai', '保定': 'baoding', '张家口': 'zhangjiakou', '承德': 'chengde',
    '沧州': 'cangzhou', '廊坊': 'langfang', '衡水': 'hengshui',
    '太原': 'taiyuan', '大同': 'datong', '阳泉': 'yangquan', '长治': 'changzhi',
    '晋城': 'jincheng', '朔州': 'shuozhou', '晋中': 'jinzhong', '运城': 'yuncheng',
    '忻州': 'xinzhou', '临汾': 'linfen', '吕梁': 'lvliang',
    '包头': 'baotou', '乌海': 'wuhai', '赤峰': 'chifeng', '通辽': 'tongliao',
    '鄂尔多斯': 'eerduosi', '呼伦贝尔': 'hulunbeier', '巴彦淖尔': 'bayannaoer', '乌兰察布': 'wulanchabu',
    '鞍山': 'anshan', '抚顺': 'fushun', '本溪': 'benxi', '丹东': 'dandong',
    '锦州': 'jinzhou', '营口': 'yingkou', '阜新': 'fuxin', '辽阳': 'liaoyang',
    '盘锦': 'panjin', '铁岭': 'tieling', '朝阳': 'chaoyang', '葫芦岛': 'huludao',
    '吉林': 'jilin', '四平': 'siping', '辽源': 'liaoyuan', '通化': 'tonghua',
    '白山': 'baishan', '松原': 'songyuan', '白城': 'baicheng',
    '齐齐哈尔': 'qiqihaer', '鸡西': 'jixi', '鹤岗': 'hegang', '双鸭山': 'shuangyashan',
    '大庆': 'daqing', '伊春': 'yichun', '佳木斯': 'jiamusi', '七台河': 'qitaihe',
    '牡丹江': 'mudanjiang', '黑河': 'heihe', '绥化': 'suihua',
    '无锡': 'wuxi', '徐州': 'xuzhou', '常州': 'changzhou', '南通': 'nantong',
    '连云港': 'lianyungang', '淮安': 'huaian', '盐城': 'yancheng', '扬州': 'yangzhou',
    '镇江': 'zhenjiang', '泰州': 'taizhou_js', '宿迁': 'suqian',
    '温州': 'wenzhou', '嘉兴': 'jiaxing', '湖州': 'huzhou', '绍兴': 'shaoxing',
    '金华': 'jinhua', '衢州': 'quzhou', '舟山': 'zhoushan', '台州': 'taizhou_zj', '丽水': 'lishui',
    '芜湖': 'wuhu', '蚌埠': 'bangbu', '淮南': 'huainan', '马鞍山': 'maanshan',
    '淮北': 'huaibei', '铜陵': 'tongling', '安庆': 'anqing', '黄山': 'huangshan',
    '滁州': 'chuzhou', '阜阳': 'fuyang', '宿州': 'suzhou_ah', '六安': 'luan',
    '亳州': 'bozhou', '池州': 'chizhou', '宣城': 'xuancheng',
    '莆田': 'putian', '三明': 'sanming', '泉州': 'quanzhou', '漳州': 'zhangzhou',
    '南平': 'nanping', '龙岩': 'longyan', '宁德': 'ningde',
    '景德镇': 'jingdezhen', '萍乡': 'pingxiang', '九江': 'jiujiang', '新余': 'xinyu',
    '鹰潭': 'yingtan', '赣州': 'ganzhou', '吉安': 'ji_an', '宜春': 'yichun_jx',
    '抚州': 'fuzhou_jx', '上饶': 'shangrao',
    '淄博': 'zibo', '枣庄': 'zaozhuang', '东营': 'dongying', '烟台': 'yantai',
    '潍坊': 'weifang', '济宁': 'jining', '泰安': 'taian', '威海': 'weihai',
    '日照': 'rizhao', '临沂': 'linyi', '德州': 'dezhou', '聊城': 'liaocheng',
    '滨州': 'binzhou', '菏泽': 'heze',
    '开封': 'kaifeng', '洛阳': 'luoyang', '平顶山': 'pingdingshan', '安阳': 'anyang',
    '鹤壁': 'hebi', '新乡': 'xinxiang', '焦作': 'jiaozuo', '濮阳': 'puyang',
    '许昌': 'xuchang', '漯河': 'luohe', '三门峡': 'sanmenxia', '南阳': 'nanyang',
    '商丘': 'shangqiu', '信阳': 'xinyang', '周口': 'zhoukou', '驻马店': 'zhumadian',
    '黄石': 'huangshi', '十堰': 'shiyan', '宜昌': 'yichang', '襄阳': 'xiangyang',
    '鄂州': 'ezhou', '荆门': 'jingmen', '孝感': 'xiaogan', '荆州': 'jingzhou',
    '黄冈': 'huanggang', '咸宁': 'xianning', '随州': 'suizhou',
    '株洲': 'zhuzhou', '湘潭': 'xiangtan', '衡阳': 'hengyang', '邵阳': 'shaoyang',
    '岳阳': 'yueyang', '常德': 'changde', '张家界': 'zhangjiajie', '益阳': 'yiyang',
    '郴州': 'chengzhou', '永州': 'yongzhou', '怀化': 'huaihua', '娄底': 'loudi',
    '韶关': 'shaoguan', '珠海': 'zhuhai', '汕头': 'shantou', '江门': 'jiangmen',
    '湛江': 'zhanjiang', '茂名': 'maoming', '肇庆': 'zhaoqing', '惠州': 'huizhou',
    '梅州': 'meizhou', '汕尾': 'shanwei', '河源': 'heyuan', '阳江': 'yangjiang',
    '清远': 'qingyuan', '中山': 'zhongshan', '潮州': 'chaozhou', '揭阳': 'jieyang',
    '云浮': 'yunfu',
    '柳州': 'liuzhou', '桂林': 'guilin', '梧州': 'wuzhou', '北海': 'beihai',
    '防城港': 'fangchenggang', '钦州': 'qinzhou', '贵港': 'guigang', '玉林': 'yulin',
    '百色': 'baise', '贺州': 'hezhou', '河池': 'hechi', '来宾': 'laibin', '崇左': 'chongzuo',
    '儋州': 'danzhou',
    '自贡': 'zigong', '攀枝花': 'panzhihua', '泸州': 'luzhou', '德阳': 'deyang',
    '绵阳': 'mianyang', '广元': 'guangyuan', '遂宁': 'suining', '内江': 'neijiang',
    '乐山': 'leshan', '南充': 'nanchong', '眉山': 'meishan', '宜宾': 'yibin',
    '广安': 'guang_an', '达州': 'dazhou', '雅安': 'ya_an', '巴中': 'bazhong', '资阳': 'ziyang',
    '六盘水': 'liupanshui', '遵义': 'zunyi', '安顺': 'anshun', '毕节': 'bijie', '铜仁': 'tongren',
    '曲靖': 'qujing', '玉溪': 'yuxi', '保山': 'baoshan', '昭通': 'zhaotong',
    '丽江': 'lijiang', '普洱': 'puer', '临沧': 'lincang',
    '日喀则': 'rikaze', '昌都': 'changdu', '林芝': 'linzhi', '山南': 'shannan',
    '那曲': 'naqu', '阿里': 'ali',
    '铜川': 'tongchuan', '宝鸡': 'baoji', '咸阳': 'xianyang', '渭南': 'weinan',
    '延安': 'yan_an', '汉中': 'hanzhong', '榆林': 'yulin_sx', '安康': 'ankang', '商洛': 'shangluo',
    '嘉峪关': 'jiayuguan', '金昌': 'jinchang', '白银': 'baiyin', '天水': 'tianshui',
    '武威': 'wuwei', '张掖': 'zhangye', '平凉': 'pingliang', '酒泉': 'jiuquan',
    '庆阳': 'qingyang', '定西': 'dingxi', '陇南': 'longnan',
    '海东': 'haidong', '海北': 'haibei', '黄南': 'huangnan', '海南州': 'hainan_qh',
    '果洛': 'guoluo', '玉树': 'yushu', '海西': 'haixi',
    '石嘴山': 'shizuishan', '吴忠': 'wuzhong', '固原': 'guyuan', '中卫': 'zhongwei',
    '克拉玛依': 'kelamayi', '吐鲁番': 'turpan', '哈密': 'hami', '昌吉': 'changji',
    '博尔塔拉': 'bole', '巴音郭楞': 'bayinguoleng', '阿克苏': 'akesu',
    '克孜勒苏': 'kashi', '喀什': 'kashgar', '和田': 'hetian', '伊犁': 'yili',
    '塔城': 'tacheng', '阿勒泰': 'aletai'
};

// ========== 省市联动 ==========
function updateCities() {
    const province = document.getElementById('province').value;
    const citySelect = document.getElementById('city');
    citySelect.innerHTML = '<option value="">请选择城市</option>';
    if (!province || !PROVINCE_CITIES[province]) return;
    PROVINCE_CITIES[province].forEach(city => {
        const option = document.createElement('option');
        option.value = CITY_NAME_TO_KEY[city] || city;
        option.textContent = city;
        citySelect.appendChild(option);
    });
}

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('appearance');
    const sliderValue = document.getElementById('appearanceValue');
    slider.addEventListener('input', function() { sliderValue.textContent = this.value + '分'; });
    
    document.getElementById('assessForm').addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmit();
    });

    const now = new Date();
    const maxYear = now.getFullYear() - 18;
    const minYear = now.getFullYear() - 55;
    document.getElementById('birthday').setAttribute('min', minYear + '-01');
    document.getElementById('birthday').setAttribute('max', maxYear + '-12');
    document.getElementById('income').setAttribute('max', '1000');
});

// ========== 表单验证 ==========
function validateForm(formData) {
    const errors = [];
    if (!formData.name) errors.push('请输入姓名');
    if (!formData.gender) errors.push('请选择性别');
    if (!formData.birthday) { errors.push('请选择出生年月'); }
    else {
        const age = new Date().getFullYear() - new Date(formData.birthday).getFullYear();
        if (age < 18) errors.push('年龄需满18周岁');
        else if (age > 55) errors.push('年龄不能超过55岁');
    }
    if (!formData.province) errors.push('请选择所在省份');
    if (!formData.city) errors.push('请选择所在城市');
    if (!formData.hukou) errors.push('请选择户籍类型');
    if (!formData.job) errors.push('请选择工作岗位');
    const income = parseFloat(formData.income);
    if (isNaN(income) || income < 0) errors.push('请输入有效的年收入');
    else if (income > 1000) errors.push('年收入不能超过1000万元');
    const appearance = parseInt(formData.appearance);
    if (isNaN(appearance) || appearance < 1 || appearance > 10) errors.push('外形评分需在1-10之间');
    if (!formData.education) errors.push('请选择学历');
    if (!formData.family) errors.push('请选择家庭情况');
    return errors;
}

// ========== 表单提交 ==========
function handleFormSubmit() {
    const province = document.getElementById('province').value;
    const city = document.getElementById('city').value;
    const cityText = document.getElementById('city').options[document.getElementById('city').selectedIndex]?.text || '';
    
    const formData = {
        name: document.getElementById('name').value.trim(),
        gender: document.querySelector('input[name="gender"]:checked')?.value,
        birthday: document.getElementById('birthday').value,
        province, city, cityName: cityText,
        hukou: document.getElementById('hukou').value,
        job: document.getElementById('job').value,
        income: document.getElementById('income').value,
        appearance: document.getElementById('appearance').value,
        education: document.getElementById('education').value,
        family: document.getElementById('family').value,
        assets: document.getElementById('assets').value
    };
    
    const errors = validateForm(formData);
    if (errors.length > 0) { alert('请完善以下信息：\n' + errors.join('\n')); return; }
    
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.querySelector('.btn-text').style.display = 'none';
    submitBtn.querySelector('.btn-loading').style.display = 'inline';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        const result = calculateScore(formData);
        displayReport(result, formData);
        submitBtn.querySelector('.btn-text').style.display = 'inline';
        submitBtn.querySelector('.btn-loading').style.display = 'none';
        submitBtn.disabled = false;
        document.getElementById('reportSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 800);
}

// ========== 显示报告 ==========
function displayReport(result, formData) {
    const cityName = formData.cityName || formData.city;
    const genderLabel = formData.gender === 'male' ? '男性' : '女性';
    document.getElementById('reportCity').textContent = cityName + ' · ' + genderLabel;
    document.getElementById('reportTime').textContent = '测评时间：' + new Date().toLocaleString('zh-CN');
    animateScore(result.totalScore, result.percentile, cityName, genderLabel);
    drawRadarChart(result.dimensions);
    renderDimensionBars(result.dimensions);
    document.getElementById('analysisContent').innerHTML = generateAnalysis(result, formData, cityName);
    
    const dimensionDetails = generateDimensionDetails(result, formData);
    document.getElementById('dimensionDetailList').innerHTML = dimensionDetails.map(item => `
        <div class="dimension-detail-item">
            <div class="dimension-detail-header">
                <span class="dimension-detail-name">${item.name}</span>
                <span class="dimension-detail-score">${item.score}分</span>
            </div>
            <div class="dimension-detail-comment">${item.comment}</div>
        </div>
    `).join('');
    
    document.getElementById('adviceList').innerHTML = generateAdvice(result, formData).map(item => `
        <div class="advice-item"><span class="advice-icon">${item.icon}</span><span>${item.text}</span></div>
    `).join('');
    
    document.getElementById('reportSection').style.display = 'block';
    document.getElementById('formCard').style.display = 'none';
}

// ========== 评分动画 ==========
function animateScore(targetScore, percentile, cityName, genderLabel) {
    let current = 0;
    const step = targetScore / 75;
    const scoreNumber = document.getElementById('scoreNumber');
    const percentileNumber = document.getElementById('percentileNumber');
    document.getElementById('percentileCity').textContent = cityName;
    document.getElementById('genderLabel').textContent = genderLabel;
    function update() {
        current += step;
        if (current >= targetScore) { scoreNumber.textContent = targetScore; percentileNumber.textContent = percentile + '%'; return; }
        scoreNumber.textContent = Math.round(current);
        requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// ========== 雷达图 ==========
function drawRadarChart(dimensions) {
    const canvas = document.getElementById('radarChart');
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 360 * dpr; canvas.height = 360 * dpr;
    canvas.style.width = '360px'; canvas.style.height = '360px';
    ctx.scale(dpr, dpr);
    const cx = 180, cy = 180, r = 130;
    const labels = ['年龄', '收入', '资产', '外形', '学历', '家庭', '岗位', '户籍'];
    const keys = ['age', 'income', 'asset', 'appearance', 'education', 'family', 'job', 'hukou'];
    const vals = keys.map(k => dimensions[k]);
    const n = 8, step = (Math.PI * 2) / n;
    ctx.clearRect(0, 0, 360, 360);
    for (let l = 1; l <= 5; l++) {
        const rad = (r / 5) * l;
        ctx.beginPath();
        for (let i = 0; i <= n; i++) { const a = i * step - Math.PI / 2; ctx.lineTo(cx + rad * Math.cos(a), cy + rad * Math.sin(a)); }
        ctx.closePath(); ctx.strokeStyle = l === 5 ? '#C8B8D8' : '#E0D6E8'; ctx.lineWidth = 1; ctx.stroke();
    }
    for (let i = 0; i < n; i++) { const a = i * step - Math.PI / 2; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a)); ctx.strokeStyle = '#D0C8E0'; ctx.lineWidth = 1; ctx.stroke(); }
    ctx.beginPath();
    for (let i = 0; i <= n; i++) { const idx = i % n; const a = idx * step - Math.PI / 2; const v = vals[idx] / 100; ctx.lineTo(cx + r * v * Math.cos(a), cy + r * v * Math.sin(a)); }
    ctx.closePath();
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    g.addColorStop(0, 'rgba(255, 107, 157, 0.6)'); g.addColorStop(1, 'rgba(124, 92, 252, 0.4)');
    ctx.fillStyle = g; ctx.fill();
    ctx.strokeStyle = 'rgba(255, 107, 157, 0.95)'; ctx.lineWidth = 3; ctx.stroke();
    for (let i = 0; i < n; i++) { const a = i * step - Math.PI / 2; const v = vals[i] / 100; ctx.beginPath(); ctx.arc(cx + r * v * Math.cos(a), cy + r * v * Math.sin(a), 5, 0, Math.PI * 2); ctx.fillStyle = '#FF6B9D'; ctx.fill(); ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke(); }
    ctx.font = '13px -apple-system, PingFang SC, Microsoft YaHei, sans-serif';
    ctx.fillStyle = '#3D3D4A'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    for (let i = 0; i < n; i++) { const a = i * step - Math.PI / 2; const lr = r + 28; let x = cx + lr * Math.cos(a), y = cy + lr * Math.sin(a); if (a === -Math.PI / 2) y -= 4; if (a === Math.PI / 2) y += 4; if (Math.abs(a) < 0.1) x += 8; if (Math.abs(a - Math.PI) < 0.1 || Math.abs(a + Math.PI) < 0.1) x -= 8; ctx.fillText(labels[i], x, y); }
}

// ========== 条形图 ==========
function renderDimensionBars(dimensions) {
    const container = document.getElementById('dimensionList');
    const labels = { age: '年龄', income: '收入', asset: '资产', appearance: '外形', education: '学历', family: '家庭', job: '岗位', hukou: '户籍' };
    const colors = { age: '#FF6B9D', income: '#7C5CFC', asset: '#FFD93D', appearance: '#FF8FB4', education: '#5CB8FF', family: '#FF9F43', job: '#2ED573', hukou: '#A55EEA' };
    container.innerHTML = Object.entries(dimensions).map(([k, s]) => `
        <div class="dimension-item"><span class="dimension-name">${labels[k]}</span>
        <div class="dimension-bar-wrapper"><div class="dimension-bar" style="background:${colors[k]};" data-width="${s}%"></div></div>
        <span class="dimension-score">${s}</span></div>
    `).join('');
    setTimeout(() => container.querySelectorAll('.dimension-bar').forEach(b => b.style.width = b.dataset.width), 100);
}

// ========== 重置 ==========
function resetForm() {
    document.getElementById('formCard').style.display = 'block';
    document.getElementById('reportSection').style.display = 'none';
    document.getElementById('assessForm').reset();
    document.getElementById('appearanceValue').textContent = '5分';
    document.getElementById('appearance').value = 5;
    document.getElementById('city').innerHTML = '<option value="">请先选择省份</option>';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== 导出PDF（canvas转img方案）==========
function exportPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    const reportCard = document.querySelector('.report-card');
    const actionsDiv = document.querySelector('.report-actions');
    const radarCanvas = document.getElementById('radarChart');
    let radarImg = null, originalParent = null;
    if (radarCanvas) {
        radarImg = document.createElement('img');
        radarImg.src = radarCanvas.toDataURL('image/png');
        radarImg.width = radarCanvas.offsetWidth;
        radarImg.height = radarCanvas.offsetHeight;
        radarImg.style.cssText = 'display:block;width:100%;height:auto;';
        originalParent = radarCanvas.parentNode;
        originalParent.replaceChild(radarImg, radarCanvas);
    }
    actionsDiv.style.display = 'none';
    const origBg = reportCard.style.background, origShadow = reportCard.style.boxShadow;
    reportCard.style.background = '#FFFFFF'; reportCard.style.boxShadow = 'none';
    
    html2canvas(reportCard, { scale: 3, useCORS: true, backgroundColor: '#FFFFFF', logging: false, allowTaint: false, imageTimeout: 15000 }).then(canvas => {
        actionsDiv.style.display = ''; reportCard.style.background = origBg; reportCard.style.boxShadow = origShadow;
        if (radarImg && originalParent) originalParent.replaceChild(radarCanvas, radarImg);
        const imgData = canvas.toDataURL('image/png');
        const imgW = 190, imgH = (canvas.height * imgW) / canvas.width;
        let pos = 10, rem = imgH, first = true;
        while (rem > 0) {
            if (!first) doc.addPage();
            const slH = Math.min(rem, 277);
            const sY = (imgH - rem) * (canvas.height / imgH);
            const sH = slH * (canvas.height / imgH);
            const tc = document.createElement('canvas'); tc.width = canvas.width; tc.height = Math.ceil(sH);
            tc.getContext('2d').drawImage(canvas, 0, sY, canvas.width, sH, 0, 0, canvas.width, sH);
            doc.addImage(tc.toDataURL('image/png'), 'PNG', 10, pos, imgW, slH);
            rem -= slH; pos = 10; first = false;
        }
        doc.save('相亲竞争力测评报告_' + new Date().toLocaleDateString('zh-CN') + '.pdf');
    }).catch(err => {
        actionsDiv.style.display = ''; reportCard.style.background = origBg; reportCard.style.boxShadow = origShadow;
        if (radarImg && originalParent) originalParent.replaceChild(radarCanvas, radarImg);
        alert('PDF导出失败，请重试');
    });
}

// ========== 分享图片 ==========
function generateShareImage() {
    const canvas = document.getElementById('shareCanvas');
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 750 * dpr; canvas.height = 1334 * dpr;
    canvas.style.width = '750px'; canvas.style.height = '1334px';
    ctx.scale(dpr, dpr);
    const bg = ctx.createLinearGradient(0, 0, 750, 1334);
    bg.addColorStop(0, '#FFF5F8'); bg.addColorStop(0.5, '#FDF6F9'); bg.addColorStop(1, '#F5F0FF');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, 750, 1334);
    ctx.fillStyle = '#FF6B9D'; ctx.beginPath(); ctx.arc(375, -50, 200, 0, Math.PI * 2); ctx.fill();
    ctx.font = 'bold 36px -apple-system, PingFang SC, Microsoft YaHei, sans-serif';
    ctx.fillStyle = '#2D2D3A'; ctx.textAlign = 'center'; ctx.fillText('我的相亲竞争力测评', 375, 100);
    ctx.font = '20px -apple-system, PingFang SC, Microsoft YaHei, sans-serif';
    ctx.fillStyle = '#9B9BB0'; ctx.fillText(document.getElementById('reportCity').textContent, 375, 140);
    const score = document.getElementById('scoreNumber').textContent;
    const percentile = document.getElementById('percentileNumber').textContent;
    ctx.beginPath(); ctx.arc(375, 280, 100, 0, Math.PI * 2);
    const cg = ctx.createLinearGradient(275, 180, 475, 380);
    cg.addColorStop(0, '#FF6B9D'); cg.addColorStop(1, '#7C5CFC');
    ctx.fillStyle = cg; ctx.fill();
    ctx.font = 'bold 64px -apple-system, PingFang SC, Microsoft YaHei, sans-serif';
    ctx.fillStyle = '#fff'; ctx.fillText(score, 375, 290);
    ctx.font = '18px -apple-system, PingFang SC, Microsoft YaHei, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.fillText('综合竞争力', 375, 320);
    ctx.font = 'bold 48px -apple-system, PingFang SC, Microsoft YaHei, sans-serif';
    ctx.fillStyle = '#FF6B9D'; ctx.fillText(percentile, 375, 430);
    ctx.font = '18px -apple-system, PingFang SC, Microsoft YaHei, sans-serif';
    ctx.fillStyle = '#6B6B80'; ctx.fillText('超过本地相亲人群', 375, 465);
    const dL = ['年龄', '收入', '资产', '外形', '学历', '家庭', '岗位', '户籍'];
    const dK = ['age', 'income', 'asset', 'appearance', 'education', 'family', 'job', 'hukou'];
    const dC = ['#FF6B9D', '#7C5CFC', '#FFD93D', '#FF8FB4', '#5CB8FF', '#FF9F43', '#2ED573', '#A55EEA'];
    dK.forEach((k, i) => {
        const y = 540 + i * 42;
        const bars = document.querySelectorAll('.dimension-item');
        const idx = ['age', 'income', 'asset', 'appearance', 'education', 'family', 'job', 'hukou'].indexOf(k);
        const ds = (idx >= 0 && bars[idx]) ? bars[idx].querySelector('.dimension-score').textContent : '0';
        ctx.font = '16px -apple-system, PingFang SC, Microsoft YaHei, sans-serif';
        ctx.fillStyle = '#6B6B80'; ctx.textAlign = 'left'; ctx.fillText(dL[i], 80, y + 10);
        ctx.textAlign = 'right'; ctx.fillText(ds, 670, y + 10);
        ctx.fillStyle = '#F0EAF4'; ctx.beginPath(); ctx.roundRect(160, y - 2, 480, 24, 12); ctx.fill();
        ctx.fillStyle = dC[i]; ctx.beginPath(); ctx.roundRect(160, y - 2, (ds / 100) * 480, 24, 12); ctx.fill();
    });
    ctx.textAlign = 'center';
    ctx.font = '16px -apple-system, PingFang SC, Microsoft YaHei, sans-serif';
    ctx.fillStyle = '#9B9BB0'; ctx.fillText('扫码测试你的相亲竞争力 →', 375, 1180);
    ctx.font = '14px -apple-system, PingFang SC, Microsoft YaHei, sans-serif';
    ctx.fillStyle = '#C0C0D0'; ctx.fillText('数据匿名处理，仅供娱乐参考', 375, 1220);
    document.getElementById('shareImagePreview').style.display = 'flex';
}

function closePreview() { document.getElementById('shareImagePreview').style.display = 'none'; }
function downloadShareImage() {
    const c = document.getElementById('shareCanvas');
    const a = document.createElement('a'); a.download = '相亲竞争力测评_' + new Date().toLocaleDateString('zh-CN') + '.png';
    a.href = c.toDataURL('image/png'); a.click();
}
