const charList = [
    { char: '的', pinyin: 'de', phrase: '好的、是的' },
    { char: '一', pinyin: 'yī', phrase: '一个、一旦' },
    { char: '是', pinyin: 'shì', phrase: '不是、是非' },
    { char: '不', pinyin: 'bù', phrase: '不要、不同' },
    { char: '了', pinyin: 'le', phrase: '好了、走了' },
    { char: '人', pinyin: 'rén', phrase: '人们、好人' },
    { char: '我', pinyin: 'wǒ', phrase: '我们、自我' },
    { char: '在', pinyin: 'zài', phrase: '现在、正在' },
    { char: '有', pinyin: 'yǒu', phrase: '没有、拥有' },
    { char: '他', pinyin: 'tā', phrase: '他们、他人' }
];

let currentIndex = 0;
let writer = null;
let isAnimating = false;

window.onload = () => {
    renderCurrentChar();
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
}

function startLearning() {
    if (isAnimating) return;
    
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
        showOutline: true
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
    currentIndex++;
    if (currentIndex >= charList.length) {
        currentIndex = 0;
    }
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
