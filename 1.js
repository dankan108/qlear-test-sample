var oCell =document.getElementsByClassName('cell');
var oRow = document.getElementsByClassName('row');
var numSize = oRow.length;
var map=[];//存储网格方


function checkDivClassName(oDiv){
	var arr =[0,1,2,3];//[0,1,2,3]代表都能通行 0 表示上 1右2下3左
	if(hasClass(oDiv,'top')){
		removeByValue(arr,'0')
	}
	if(hasClass(oDiv,'right')){
		removeByValue(arr,'1')
	}
	if(hasClass(oDiv,'bottom')){
		removeByValue(arr,'2')
	}
	if(hasClass(oDiv,'left')){
		removeByValue(arr,'3')
	}
	return arr;
}
console.log(checkDivClassName(oCell[1]));
for(var i=0;i<numSize;i++){
	map[i]=[];
	for(var j=0;j<numSize;j++){
		map[i].push(checkDivClassName(oCell[i*numSize+j]));
	}	
}
console.log(map[0][1]);
init();
function init(){
	addClass(oCell[0],'rat');
	var x=0,
		y=0;
	document.onkeydown = function(event){
		if(event.keyCode==38){
			// 上
			console.log(map[x][y],x,y);
			if(map[x][y].indexOf(0)!=-1){
				x=x-1>=0?x-1:0;
				console.log(map[x][y],x,y);
				renderBox(oCell[x*numSize+y]);
			}
		}
		if(event.keyCode==39){
			// 右
			console.log(map[x][y],x,y);
			if(map[x][y].indexOf(1)!=-1){
				y=y+1<numSize?y+1:numSize-1;
				renderBox(oCell[x*numSize+y]);
			}
		}
		if(event.keyCode==40){
			// 下
			console.log(map[x][y],x,y);
			if(map[x][y].indexOf(2)!=-1){
				x=x+1<numSize?x+1:numSize-1;
				console.log(map[x][y],x,y);
				renderBox(oCell[x*numSize+y]);
			}
		}
		if(event.keyCode==37){
			// 左
			console.log(map[x][y],x,y);
			if(map[x][y].indexOf(3)!=-1){
				y=y-1>=0?y-1:0;
				renderBox(oCell[x*numSize+y]);
			}
		}
	}
}
function renderBox(currCell){
	for(var i=0;i<oCell.length;i++){
		removeClass(oCell[i],'rat');
	}
	addClass(currCell,'rat');
}







function hasClass(obj, cls){
  var obj_class = obj.className,//获取 class 内容.
  obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
  x = 0;
  for(x in obj_class_lst) {
    if(obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
      return true;
    }
  }
  return false;
}
function addClass(obj, cls){
  var obj_class = obj.className,//获取 class 内容.
  blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
  added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
  obj.className = added;//替换原来的 class.
}
  
function removeClass(obj, cls){
  var obj_class = ' '+obj.className+' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
  obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
  removed = obj_class.replace(' '+cls+' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
  removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
  obj.className = removed;//替换原来的 class.
}

function removeByValue(arr, val) {
  for(var i=0; i<arr.length; i++) {
    if(arr[i] == val) {
      arr.splice(i, 1);
      break;
    }
  }
  return arr;
}




