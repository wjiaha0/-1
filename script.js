const charList = [
    // ... （你的字库数据完全保持不变，此处已省略） ...
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
    { char: '是', pinyin: 'shì', phrase: '是的、不是' }

];

let currentIndex = 0;
let writer = null;
let isAnimating = false;

// +++ 新增：更新进度显示的函数 +++
function updateProgressDisplay() {
    const totalChars = charList.length;
    const currentNum = currentIndex + 1; // 索引从0开始，显示从1开始
    document.getElementById('progress-display').innerText = `第 ${currentNum} 字 / 共 ${totalChars} 字`;
}

window.onload = () => {
    // 1. 检测语音支持（原有代码）
    if (!('speechSynthesis' in window)) {
        document.getElementById('phrase-display').innerText = 
            '提示：请使用Chrome浏览器获得最佳语音体验';
    }
    
    // 2. 尝试从本地存储读取学习进度（原有代码）
    const savedProgress = localStorage.getItem('literacyCurrentIndex');
    if (savedProgress !== null) {
        currentIndex = parseInt(savedProgress);
    }
    // 3. 渲染当前汉字（原有代码）
    renderCurrentChar();
    // +++ 新增：初始化进度显示 +++
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
    // +++ 新增：每次渲染新字后都更新进度显示 +++
    updateProgressDisplay();
}

function startLearning() {
    // *** 修改：如果正在动画，先取消它，以实现中断功能 ***
    if (writer && isAnimating) {
        writer.cancelAnimation();
        isAnimating = false;
    }
    // 原 `if (isAnimating) return;` 已被上面逻辑替代
    
    const data = charList[currentIndex];
    const staticChar = document.getElementById('static-char');
    const strokeDiv = document.getElementById('stroke-animation');
    const phraseDisplay = document.getElementById('phrase-display');

    phraseDisplay.innerText = "词组：" + data.phrase;
    speak(`${data.char}。 ${data.phrase}。`);

    staticChar.style.display = 'none';
    strokeDiv.style.display = 'block';
    strokeDiv.innerHTML = '';

    const containerSize = document.getElementById('character-container').clientWidth;

    writer = HanziWriter.create('stroke-animation', data.char, {
        width: containerSize,
        height: containerSize,
        padding: 5,
        strokeColor: '#000000',
        showOutline: true,
        // +++ 新增：加快笔顺播放速度参数 +++
        strokeAnimationSpeed: 2.5 // 值越大越快，1是默认速度，建议范围1.5-2.5
    });

    isAnimating = true;
    writer.animateCharacter({
        onComplete: function() {
            isAnimating = false;
        }
    });
}

function startReading() {
    // ... （保持不变，此处已省略） ...
    const data = charList[currentIndex];
    
    speak(`请跟我读：${data.char}`);

    setTimeout(() => {
        const praises = ["读得真好！", "太棒了！", "非常标准！", "继续加油！"];
        const randomPraise = praises[Math.floor(Math.random() * praises.length)];
        speak(randomPraise);
    }, 2500);
}

function nextChar() {
    // +++ 新增：切换前，中断当前可能正在进行的动画 +++
    if (writer && isAnimating) {
        writer.cancelAnimation();
        isAnimating = false;
    }
    
    // *** 修改：修正原有逻辑，确保索引正确递增并循环 ***
    currentIndex++;
    if (currentIndex >= charList.length) {
        currentIndex = 0;
    }
    
    localStorage.setItem('literacyCurrentIndex', currentIndex);
    renderCurrentChar(); // 此函数内部已包含更新进度显示
}

function speak(text) {
    // ... （保持不变，此处已省略） ...
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
