const charList = [
    { char: '天', pinyin: 'tiān', phrase: '天空、今天' },
    { char: '地', pinyin: 'dì', phrase: '土地、地方' },
    { char: '人', pinyin: 'rén', phrase: '人民、家人' },
    { char: '你', pinyin: 'nǐ', phrase: '你好、你们' },
    { char: '我', pinyin: 'wǒ', phrase: '我们、自我' },
    { char: '他', pinyin: 'tā', phrase: '他们、其他' },
    { char: '一', pinyin: 'yī', phrase: '一个、第一' },
    { char: '二', pinyin: 'èr', phrase: '第二、二楼' },
    { char: '三', pinyin: 'sān', phrase: '三月、再三' },
    { char: '四', pinyin: 'sì', phrase: '四周、四季' },
    { char: '五', pinyin: 'wǔ', phrase: '五官、星期五' },
    { char: '上', pinyin: 'shàng', phrase: '上面、上学' },
    { char: '下', pinyin: 'xià', phrase: '下面、下班' },
    { char: '口', pinyin: 'kǒu', phrase: '口水、出口' },
    { char: '耳', pinyin: 'ěr', phrase: '耳朵、耳机' },
    { char: '目', pinyin: 'mù', phrase: '目光、目录' },
    { char: '手', pinyin: 'shǒu', phrase: '手机、歌手' },
    { char: '足', pinyin: 'zú', phrase: '足球、满足' },
    { char: '站', pinyin: 'zhàn', phrase: '站立、车站' },
    { char: '坐', pinyin: 'zuò', phrase: '坐下、乘坐' },
    { char: '日', pinyin: 'rì', phrase: '日光、日子' },
    { char: '月', pinyin: 'yuè', phrase: '月亮、月份' },
    { char: '水', pinyin: 'shuǐ', phrase: '水果、喝水' },
    { char: '火', pinyin: 'huǒ', phrase: '火车、发火' },
    { char: '山', pinyin: 'shān', phrase: '高山、山顶' },
    { char: '石', pinyin: 'shí', phrase: '石头、石油' },
    { char: '田', pinyin: 'tián', phrase: '田地、种田' },
    { char: '禾', pinyin: 'hé', phrase: '禾苗' },
    { char: '对', pinyin: 'duì', phrase: '对面、不对' },
    { char: '云', pinyin: 'yún', phrase: '白云、云朵' },
    { char: '雨', pinyin: 'yǔ', phrase: '下雨、雨水' },
    { char: '风', pinyin: 'fēng', phrase: '大风、风筝' },
    { char: '花', pinyin: 'huā', phrase: '花朵、开花' },
    { char: '鸟', pinyin: 'niǎo', phrase: '小鸟、鸟类' },
    { char: '虫', pinyin: 'chóng', phrase: '虫子、昆虫' },
    { char: '六', pinyin: 'liù', phrase: '六个、六月' },
    { char: '七', pinyin: 'qī', phrase: '七个、七天' },
    { char: '八', pinyin: 'bā', phrase: '八个、八角' },
    { char: '九', pinyin: 'jiǔ', phrase: '九个、九月' },
    { char: '十', pinyin: 'shí', phrase: '十分、第十' },
    { char: '爸', pinyin: 'bà', phrase: '爸爸、老爸' },
    { char: '妈', pinyin: 'mā', phrase: '妈妈、爸妈' },
    { char: '马', pinyin: 'mǎ', phrase: '马上、木马' },
    { char: '土', pinyin: 'tǔ', phrase: '泥土、土地' },
    { char: '不', pinyin: 'bù', phrase: '不要、不能' },
    { char: '画', pinyin: 'huà', phrase: '画画、图画' },
    { char: '打', pinyin: 'dǎ', phrase: '打球、打水' },
    { char: '棋', pinyin: 'qí', phrase: '下棋、棋子' },
    { char: '鸡', pinyin: 'jī', phrase: '小鸡、公鸡' },
    { char: '字', pinyin: 'zì', phrase: '写字、汉字' },
    { char: '词', pinyin: 'cí', phrase: '词语、诗词' },
    { char: '语', pinyin: 'yǔ', phrase: '语文、语言' },
    { char: '句', pinyin: 'jù', phrase: '句子、造句' },
    { char: '子', pinyin: 'zǐ', phrase: '孩子、子女' },
    { char: '桌', pinyin: 'zhuō', phrase: '桌子、书桌' },
    { char: '纸', pinyin: 'zhǐ', phrase: '白纸、纸巾' },
    { char: '文', pinyin: 'wén', phrase: '文化、中文' },
    { char: '数', pinyin: 'shù', phrase: '数学、数字' },
    { char: '学', pinyin: 'xué', phrase: '学习、学生' },
    { char: '音', pinyin: 'yīn', phrase: '声音、音乐' },
    { char: '乐', pinyin: 'yuè', phrase: '音乐、乐器' },
    { char: '妹', pinyin: 'mèi', phrase: '妹妹、姐妹' },
    { char: '奶', pinyin: 'nǎi', phrase: '牛奶、奶奶' },
    { char: '小', pinyin: 'xiǎo', phrase: '大小、小孩' },
    { char: '桥', pinyin: 'qiáo', phrase: '小桥、大桥' },
    { char: '台', pinyin: 'tái', phrase: '台湾、台风' },
    { char: '雪', pinyin: 'xuě', phrase: '下雪、白雪' },
    { char: '儿', pinyin: 'ér', phrase: '儿子、儿童' },
    { char: '白', pinyin: 'bái', phrase: '白色、白纸' },
    { char: '草', pinyin: 'cǎo', phrase: '小草、草地' },
    { char: '家', pinyin: 'jiā', phrase: '家人、回家' },
    { char: '是', pinyin: 'shì', phrase: '是的、不是' },
    { char: '车', pinyin: 'chē', phrase: '汽车、开车' },
    { char: '路', pinyin: 'lù', phrase: '马路、路上' },
    { char: '灯', pinyin: 'dēng', phrase: '灯光、红灯' },
    { char: '走', pinyin: 'zǒu', phrase: '走路、走开' },
    { char: '秋', pinyin: 'qiū', phrase: '秋天、中秋' },
    { char: '气', pinyin: 'qì', phrase: '生气、天气' },
    { char: '了', pinyin: 'le', phrase: '好了、走了' },
    { char: '树', pinyin: 'shù', phrase: '大树、树木' },
    { char: '叶', pinyin: 'yè', phrase: '叶子、树叶' },
    { char: '片', pinyin: 'piàn', phrase: '一片、照片' },
    { char: '大', pinyin: 'dà', phrase: '大人、大家' },
    { char: '飞', pinyin: 'fēi', phrase: '飞机、飞行' },
    { char: '会', pinyin: 'huì', phrase: '开会、学会' },
    { char: '个', pinyin: 'gè', phrase: '一个、个人' },
    { char: '的', pinyin: 'de', phrase: '好的、是的' },
    { char: '船', pinyin: 'chuán', phrase: '小船、坐船' },
    { char: '两', pinyin: 'liǎng', phrase: '两个、两人' },
    { char: '头', pinyin: 'tóu', phrase: '头发、石头' },
    { char: '在', pinyin: 'zài', phrase: '现在、正在' },
    { char: '里', pinyin: 'lǐ', phrase: '里面、这里' },
    { char: '看', pinyin: 'kàn', phrase: '看见、看书' },
    { char: '见', pinyin: 'jiàn', phrase: '看见、见面' },
    { char: '闪', pinyin: 'shǎn', phrase: '闪光、闪开' },
    { char: '星', pinyin: 'xīng', phrase: '星星、星空' },
    { char: '江', pinyin: 'jiāng', phrase: '江水、长江' },
    { char: '南', pinyin: 'nán', phrase: '南方、江南' },
    { char: '可', pinyin: 'kě', phrase: '可以、可能' },
    { char: '采', pinyin: 'cǎi', phrase: '采花、采用' },
    { char: '莲', pinyin: 'lián', phrase: '莲花、采莲' },
    { char: '鱼', pinyin: 'yú', phrase: '小鱼、金鱼' },
    { char: '东', pinyin: 'dōng', phrase: '东方、东西' },
    { char: '西', pinyin: 'xī', phrase: '西方、东西' },
    { char: '北', pinyin: 'běi', phrase: '北方、东北' },
    { char: '尖', pinyin: 'jiān', phrase: '笔尖、尖叫' },
    {char: '说', pinyin: 'shuō', phrase: '说话、说明' },
    { char: '春', pinyin: 'chūn', phrase: '春天、春节' },
    { char: '青', pinyin: 'qīng', phrase: '青草、青年' },
    { char: '蛙', pinyin: 'wā', phrase: '青蛙' },
    { char: '夏', pinyin: 'xià', phrase: '夏天、夏季' },
    { char: '弯', pinyin: 'wān', phrase: '弯月、弯腰' },
    { char: '皮', pinyin: 'pí', phrase: '皮球、果皮' },
    { char: '就', pinyin: 'jiù', phrase: '就是、就要' },
    { char: '男', pinyin: 'nán', phrase: '男人、男生' },
    { char: '女', pinyin: 'nǚ', phrase: '女人、女生' },
    { char: '开', pinyin: 'kāi', phrase: '开门、开车' },
    { char: '关', pinyin: 'guān', phrase: '关门、关心' },
    { char: '正', pinyin: 'zhèng', phrase: '正在、立正' },
    { char: '反', pinyin: 'fǎn', phrase: '反对、正反' },
    { char: '远', pinyin: 'yuǎn', phrase: '远方、很远' },
    { char: '有', pinyin: 'yǒu', phrase: '没有、拥有' },
    { char: '色', pinyin: 'sè', phrase: '红色、颜色' },
    { char: '近', pinyin: 'jìn', phrase: '近处、走近' },
    { char: '听', pinyin: 'tīng', phrase: '听见、听说' },
    { char: '无', pinyin: 'wú', phrase: '有无、无声' },
    { char: '声', pinyin: 'shēng', phrase: '声音、叫声' },
    { char: '去', pinyin: 'qù', phrase: '来去、出去' },
    { char: '还', pinyin: 'hái', phrase: '还有、还是' },
    { char: '来', pinyin: 'lái', phrase: '来到、回来' },
    { char: '多', pinyin: 'duō', phrase: '多少、很多' },
    { char: '少', pinyin: 'shǎo', phrase: '多少、很少' },
    { char: '黄', pinyin: 'huáng', phrase: '黄色、金黄' },
    { char: '牛', pinyin: 'niú', phrase: '小牛、牛羊' },
    { char: '只', pinyin: 'zhī', phrase: '一只、只有' },
    { char: '猫', pinyin: 'māo', phrase: '小猫、花猫' },
    { char: '边', pinyin: 'biān', phrase: '一边、河边' },
    { char: '鸭', pinyin: 'yā', phrase: '小鸭、鸭子' },
    { char: '苹', pinyin: 'píng', phrase: '苹果' },
    { char: '果', pinyin: 'guǒ', phrase: '水果、苹果' },
    { char: '杏', pinyin: 'xìng', phrase: '杏子、银杏' },
    { char: '桃', pinyin: 'táo', phrase: '桃子、桃花' },
    { char: '书', pinyin: 'shū', phrase: '书本、看书' },
    {"char": "包", "pinyin": "bāo", "phrase": "书包、包裹"},
    {"char": "尺", "pinyin": "chǐ", "phrase": "尺子、直尺"},
    {"char": "作", "pinyin": "zuò", "phrase": "作业、工作"},
    {"char": "业", "pinyin": "yè", "phrase": "学业、事业"},
    {"char": "本", "pinyin": "běn", "phrase": "书本、本子"},
    {"char": "笔", "pinyin": "bǐ", "phrase": "铅笔、毛笔"},
    {"char": "刀", "pinyin": "dāo", "phrase": "小刀、剪刀"},
    {"char": "课", "pinyin": "kè", "phrase": "上课、课本"},
    {"char": "早", "pinyin": "zǎo", "phrase": "早上、早安"},
    {"char": "校", "pinyin": "xiào", "phrase": "学校、校园"},
    {"char": "明", "pinyin": "míng", "phrase": "明天、明亮"},
    {"char": "力", "pinyin": "lì", "phrase": "力气、力量"},
    {"char": "尘", "pinyin": "chén", "phrase": "灰尘、尘土"},
    {"char": "从", "pinyin": "cóng", "phrase": "从前、自从"},
    {"char": "众", "pinyin": "zhòng", "phrase": "众人、群众"},
    {"char": "双", "pinyin": "shuāng", "phrase": "双手、双方"},
    {"char": "木", "pinyin": "mù", "phrase": "木头、树木"},
    {"char": "林", "pinyin": "lín", "phrase": "树林、森林"},
    {"char": "森", "pinyin": "sēn", "phrase": "森林、阴森"},
    {"char": "条", "pinyin": "tiáo", "phrase": "条件、纸条"},
    {"char": "心", "pinyin": "xīn", "phrase": "心脏、心情"},
    {"char": "升", "pinyin": "shēng", "phrase": "上升、升高"},
    {"char": "国", "pinyin": "guó", "phrase": "国家、国旗"},
    {"char": "旗", "pinyin": "qí", "phrase": "国旗、旗帜"},
    {"char": "中", "pinyin": "zhōng", "phrase": "中间、中国"},
    {"char": "红", "pinyin": "hóng", "phrase": "红色、红旗"},
    {"char": "歌", "pinyin": "gē", "phrase": "唱歌、歌曲"},
    {"char": "起", "pinyin": "qǐ", "phrase": "起来、起床"},
    {"char": "么", "pinyin": "me", "phrase": "什么、怎么"},
    {"char": "美", "pinyin": "měi", "phrase": "美丽、美好"},
    {"char": "丽", "pinyin": "lì", "phrase": "美丽、秀丽"},
    {"char": "立", "pinyin": "lì", "phrase": "站立、立正"},
    {"char": "午", "pinyin": "wǔ", "phrase": "中午、午后"},
    {"char": "晚", "pinyin": "wǎn", "phrase": "晚上、夜晚"},
    {"char": "昨", "pinyin": "zuó", "phrase": "昨天、昨日"},
    {"char": "今", "pinyin": "jīn", "phrase": "今天、今年"},
    {"char": "年", "pinyin": "nián", "phrase": "新年、年代"},
    {"char": "影", "pinyin": "yǐng", "phrase": "影子、电影"},
    {"char": "前", "pinyin": "qián", "phrase": "前面、前进"},
    {"char": "后", "pinyin": "hòu", "phrase": "后面、后来"},
    {"char": "黑", "pinyin": "hēi", "phrase": "黑色、黑夜"},
    {"char": "狗", "pinyin": "gǒu", "phrase": "小狗、狼狗"},
    {"char": "左", "pinyin": "zuǒ", "phrase": "左边、左手"},
    {"char": "右", "pinyin": "yòu", "phrase": "右边、右手"},
    {"char": "它", "pinyin": "tā", "phrase": "它们、其它"},
    {"char": "好", "pinyin": "hǎo", "phrase": "好处、友好"},
    {"char": "朋", "pinyin": "péng", "phrase": "朋友、亲朋"},
    {"char": "友", "pinyin": "yǒu", "phrase": "朋友、友谊"},
    {"char": "比", "pinyin": "bǐ", "phrase": "比较、对比"},
    {"char": "尾", "pinyin": "wěi", "phrase": "尾巴、末尾"},
    {"char": "巴", "pinyin": "bā", "phrase": "尾巴、巴士"},
    {"char": "谁", "pinyin": "shuí", "phrase": "谁的、是谁"},
    {"char": "长", "pinyin": "cháng", "phrase": "长短、长久"},
    {"char": "短", "pinyin": "duǎn", "phrase": "长短、短暂"},
    {"char": "把", "pinyin": "bǎ", "phrase": "把手、把握"},
    {"char": "伞", "pinyin": "sǎn", "phrase": "雨伞、阳伞"},
    {"char": "兔", "pinyin": "tù", "phrase": "兔子、白兔"},
    {"char": "最", "pinyin": "zuì", "phrase": "最好、最近"},
    {"char": "公", "pinyin": "gōng", "phrase": "公平、公共"},
    {"char": "写", "pinyin": "xiě", "phrase": "写字、写作"},
    {"char": "诗", "pinyin": "shī", "phrase": "诗歌、诗人"},
    {"char": "点", "pinyin": "diǎn", "phrase": "点心、点头"},
    {"char": "要", "pinyin": "yào", "phrase": "要求、需要"},
    {"char": "过", "pinyin": "guò", "phrase": "过去、经过"},
    {"char": "给", "pinyin": "gěi", "phrase": "给予、送给"},
    {"char": "当", "pinyin": "dāng", "phrase": "当然、应当"},
    {"char": "串", "pinyin": "chuàn", "phrase": "串门、一串"},
    {"char": "门", "pinyin": "mén", "phrase": "门口、大门"},
    {"char": "以", "pinyin": "yǐ", "phrase": "以后、可以"},
    {"char": "成", "pinyin": "chéng", "phrase": "成功、成长"},
    {"char": "彩", "pinyin": "cǎi", "phrase": "彩色、精彩"},
    {"char": "半", "pinyin": "bàn", "phrase": "一半、半天"}

];

let currentIndex = 0;
let writer = null;
let isAnimating = false;

function updateProgressDisplay() {
    const totalChars = charList.length;
    const currentNum = currentIndex + 1;
    document.getElementById('progress-display').innerText = `第 ${currentNum} 字 / 共 ${totalChars} 字`;
}

window.onload = () => {
    if (!('speechSynthesis' in window)) {
        document.getElementById('phrase-display').innerText = '提示：请使用Chrome浏览器获得最佳语音体验';
    }
    const savedProgress = localStorage.getItem('literacyCurrentIndex');
    if (savedProgress !== null) {
        currentIndex = parseInt(savedProgress);
    }
    renderCurrentChar();
    updateProgressDisplay();
};

function renderCurrentChar() {
    const data = charList[currentIndex];
    document.getElementById('pinyin-display').innerText = data.pinyin;
    document.getElementById('static-char').innerText = data.char;
    document.getElementById('static-char').style.display = 'block';
    document.getElementById('phrase-display').innerText = '';
    const strokeDiv = document.getElementById('stroke-animation');
    strokeDiv.innerHTML = '';
    strokeDiv.style.display = 'none';
    window.speechSynthesis.cancel();
    updateProgressDisplay();
}

function startLearning() {
    // 强制中断逻辑
    if (writer && isAnimating) {
        writer.cancelAnimation();
        document.getElementById('static-char').style.display = 'block';
        const strokeDiv = document.getElementById('stroke-animation');
        strokeDiv.style.display = 'none';
        strokeDiv.innerHTML = '';
        isAnimating = false;
        writer = null;
    }

    const data = charList[currentIndex];
    const phraseDisplay = document.getElementById('phrase-display');
    phraseDisplay.innerText = "词组：" + data.phrase;
    speak(`${data.char}。 ${data.phrase}。`);

    document.getElementById('static-char').style.display = 'none';
    const strokeDiv = document.getElementById('stroke-animation');
    strokeDiv.style.display = 'block';
    strokeDiv.innerHTML = '';

    const containerSize = document.getElementById('character-container').clientWidth;
    writer = HanziWriter.create('stroke-animation', data.char, {
        width: containerSize,
        height: containerSize,
        padding: 5,
        strokeColor: '#000000',
        showOutline: true,
        strokeAnimationSpeed: 3
    });

    isAnimating = true;
    writer.animateCharacter({
        onComplete: function() {
            isAnimating = false;
        }
    });
}

function startReading() {
    const data = charList[currentIndex];
    speak(`请跟我读：${data.char}`);
    setTimeout(() => {
        const praises = ["读得真好！", "太棒了！", "非常标准！", "继续加油！"];
        const randomPraise = praises[Math.floor(Math.random() * praises.length)];
        speak(randomPraise);
    }, 2500);
}

function nextChar() {
    // 强制中断逻辑
    if (writer && isAnimating) {
        writer.cancelAnimation();
        document.getElementById('static-char').style.display = 'block';
        const strokeDiv = document.getElementById('stroke-animation');
        strokeDiv.style.display = 'none';
        strokeDiv.innerHTML = '';
        isAnimating = false;
        writer = null;
    }

    currentIndex++;
    if (currentIndex >= charList.length) {
        currentIndex = 0;
    }
    localStorage.setItem('literacyCurrentIndex', currentIndex);
    renderCurrentChar();
}

function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("您的浏览器不支持语音朗读功能");
    }
}
