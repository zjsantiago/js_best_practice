Node.prototype.insertAfter = function(newNode, refNode) {
	//newNode不存在抛出异常
	try {
		//refNode不存在就为firstChild
		if(typeof refNode === "undefined") refNode = this.firstChild;
		//refNode为lastChild就append到最后
		if(refNode == this.lastChild) {
			this.appendChild(newNode);
		} else {
			this.insertBefore(newNode, refNode.nextSibling);
		}
	}catch(e){
		console.log("newNode不能少");
	}
}