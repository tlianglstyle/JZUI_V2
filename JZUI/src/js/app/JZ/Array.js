exports.Load =function(){
	//------------------------------一维数组-----------------------------------
	Array.prototype.indexOf = function(val) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] == val) return i;
		}
		return -1;
	};
	Array.prototype.mergeArray = function(newArr) {
		var arr = this.concat();
		for(var i=0;i<newArr.length;i++){
			arr.indexOf(newArr[i]) === -1 ? arr.push(newArr[i]) : 0;
		}
		return arr;
	};
	Array.prototype.removeByIndex = function(dx) 
	{ 
	    if(isNaN(dx)||dx>this.length){return false;} 
	    this.splice(dx,1); 
		return this;
	}
	Array.prototype.removeByValue = function(val) {
		var index = this.indexOf(val);
		if (index > -1) {
			this.splice(index, 1);
		}
		return this;
	}; 
	//删除普通数组中的多个值
	//传入一个包含多个值的数组
	Array.prototype.removeByValues = function(delArr) {
		for (var a in delArr){
			this.removeByValue(delArr[a]);
		}
		return this;
	};
	//判断数组是否包含另一个数组的所有元素
	Array.prototype.isContains = function(newArr) {
		var a = this;
	    if(!(a instanceof Array) || !(newArr instanceof Array)) return false;
	    if(a.length < newArr.length) return false;
		    var aStr = a;
		    for(var i = 0, len = newArr.length; i < len; i++){
		       if(aStr.indexOf(newArr[i]) == -1) return false;
		    }
		return true;
	}
	//------------------------------对象数组-----------------------------------
	Array.prototype.removeByKey = function(key,value) {
		var newArr = [];
		for(var i=0;i<this.length;i++){
			if(this[i][key]!=value){
				newArr.push(this[i]);
			}
		} 
		return newArr;
	};
	//获得对象数组的某个键的集合
	Array.prototype.getKeys = function(key) {
	    return this.map(function(item) {
	        return item[key];
	    });
	};
	//获得对象数组中指定键集的集合
	//传入一个包含多个键的数组 
	//orderByKeys:按照keyArr排序
	//callback:对象操作
	Array.prototype.getByKeys = function(keyName,keyArr,orderByKeys,callback) {
		if(orderByKeys !=undefined){
			var newArr = [];
			for(var i=0;i<keyArr.length;i++){
				for(var j=0;j<this.length;j++){
					if(this[j][keyName]==keyArr[i] && this[j]['ArrayPush']==undefined){
						if(callback!=undefined){
							newArr.push(callback(this[j],newArr));	
						}else{
							newArr.push(this[j]);	
						}
						this[j]['ArrayPush']=1;
					}
				}
			}
			return newArr;
		}else{
			var newArr = [];
			for(var i=0;i<this.length;i++){
				if(keyArr.indexOf(this[i][keyName])>=0){ 
					newArr.push(this[i]);
				}
			}
			return newArr;
		}
	};
	//获得对象数组中指定键的
	//传入一个值 
	Array.prototype.getByKey = function(key,value) {
		 var values = new Array();
		 values[0] = value;
		 var newArr = this.getByKeys(key,values);
		 if(newArr.length != 0) return newArr[0];
		 return null;
	};
	
	//删除对象数组中的多个值
	//传入一个包含多个键的数组
	Array.prototype.removeByKeys = function(key,delArr) {
		var newArr = this;
		for (var a in delArr){
			newArr = newArr.removeByKey(key,delArr[a]);
		}
		return newArr;
	};
	
	String.prototype.urlRandom = function() {
		return this+(this.indexOf('?')>0?'&':'?')+'randomUrl='+Math.random();
	};
	
	//console.log(new Date().Format("yyyy-MM-dd"));
	//console.log(new Date().Format("yyyy-MM-dd HH:mm:ss"));
	//	
	//	//Date对象
	//	new Date().FormatDate() 						//"2017-02-23 17:25:03"
	//	new Date().FormatDate('yyyy-MM-dd') 			//"2017-02-23"
	//	new Date().FormatDate('yyyy-MM-dd HH:mm:ss')//"2017-02-23 17:25:03"
	//	new Date('2001-01-01').FormatDate() 			//"2001-01-01 08:00:00"
	//	//String对象
	//	'2001-01-01'.FormatDate()  					//"2001-01-01 00:00:00"
	//	//Number对象
	//	new Date(1486978331000).FormatDate()			//"2017-02-13 17:32:11"
	//	(1486978331000).FormatDate() 				//"2017-02-13 17:32:11"
	Date.prototype.Format = function (fmt) {
	    var o = {
	        "M+": this.getMonth() + 1, //月份
	        "d+": this.getDate(), //日
	        "H+": this.getHours(), //小时
	        "m+": this.getMinutes(), //分
	        "s+": this.getSeconds(), //秒
	        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
	        "S": this.getMilliseconds() //毫秒
	    };
	    if(fmt == undefined) fmt = 'yyyy-MM-dd HH:mm:ss';
	    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	    for (var k in o)
	    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    return fmt;
	}
	Date.prototype.FormatDate = function (fmt) {
		return this.Format(fmt);
	}
	String.prototype.FormatDate = function (fmt) {
		var date,_this = this;
		try{
			if(_this.toString().indexOf('-')>0) _this = _this.replace(/-/g,'/');//兼容safari
			if(/^14[\W\w]/.test(_this)){//判断是否为时间戳字符串
				_this = parseInt(_this);
			}
			date = new Date(_this);
		}catch(e){
			date = new Date();
		} 
		return date.Format(fmt);
	}
	Number.prototype.FormatDate = function (fmt) {
		var date,_this = this;
		try{
			date = new Date(_this);
		}catch(e){
			date = new Date();
		}
		return date.Format(fmt);
	}
} 