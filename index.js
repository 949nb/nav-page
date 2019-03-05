var keys = {
    0: {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
    1: {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
    2: {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
    'length': 3
}
var hush = {
    'q':'qq.com',
    'w':'weibo.com',
    'e':'ele.me',
    'r':'renren.com',
    't':'tianya.com',
    'y':'yy.com',
    'u':'uc.com',
    'i':'imac.com',
    'o':'opera.com',
    'p':'undefined',
    'a':'acfun.tv',
    's':'sohu.com',
    'z':'zhihu.com'
}

//生成键盘。
var index = 0;
while(index < keys.length){
    div1 = document.createElement('div'); //创建div
    keyboard.appendChild(div1);  
    var row = keys[index];
    index2 = 0;
    while(index2 < row.length){
        kbd1 = document.createElement('kbd');
        div1.appendChild(kbd1);
        kbd1.textContent = row[index2];
        button1 = document.createElement('button');
        kbd1.appendChild(button1);
        button1.textContent = "编辑";
        button1.id = row[index2]
        button1.onclick = function(x){
            key = (x['target']['id'])
            x = prompt('给我一个网址 XDD');
            hush[key] = x; //hush变更
        }
        index2++;
    }
    index++
}

document.onkeypress = function(jianting){
    console.log(jianting['key'])
    var a = jianting['key']
    wangzhi = hush[a]
    //location.href = "http://"+wangzhi;
    window.open('http://'+wangzhi,'_blank')
}