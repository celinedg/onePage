
    
 

(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 152,
	height: 152,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bouton_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9D7F51").s().p("AgfAAQAAgaARgWIAuAwIguAxQgRgXAAgag");
	this.shape.setTransform(25.4,30.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9D7F51").s().p("AgfAAIAvgvQAQAWAAAZQAAAbgQAVg");
	this.shape_1.setTransform(34.8,30.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9D7F51").s().p("AgvAQIAvgvIAwAvQgVARgbAAQgZAAgWgRg");
	this.shape_2.setTransform(30.1,34.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9D7F51").s().p("AgwgPQAXgQAZAAQAbAAAVAQIgwAwg");
	this.shape_3.setTransform(30.2,25.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9D7F51").s().p("AgfAAQAAgaARgWIAuAwIguAwQgRgVAAgbg");
	this.shape_4.setTransform(53.1,57.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9D7F51").s().p("AgfAAIAvgwQAQAXAAAZQAAAbgQAVg");
	this.shape_5.setTransform(62.5,57.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9D7F51").s().p("AgwAQIAxgvIAvAvQgVAQgbAAQgZAAgXgQg");
	this.shape_6.setTransform(57.8,62.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9D7F51").s().p("AgwgOQAVgRAbgBQAbABAVARIgwAug");
	this.shape_7.setTransform(57.9,53.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9D7F51").s().p("AgfAAQAAgaAQgWIAvAwIgvAwQgQgVAAgbg");
	this.shape_8.setTransform(25.3,57.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9D7F51").s().p("AgfAAIAvgwQAQAXAAAZQAAAbgQAVg");
	this.shape_9.setTransform(34.8,57.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9D7F51").s().p("AgvAQIAvgvIAwAvQgVAQgbAAQgaAAgVgQg");
	this.shape_10.setTransform(30.1,62.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9D7F51").s().p("AgvgPQAVgQAaAAQAbAAAVAQIgwAvg");
	this.shape_11.setTransform(30.1,53.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9D7F51").s().p("AgfAAQAAgaARgWIAuAwIguAxQgRgXAAgag");
	this.shape_12.setTransform(53.1,30.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9D7F51").s().p("AgfAAIAvgvQAQAWAAAZQAAAbgQAVg");
	this.shape_13.setTransform(62.5,30.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9D7F51").s().p("AgvAQIAvgvIAwAvQgVARgbAAQgZAAgWgRg");
	this.shape_14.setTransform(57.9,34.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9D7F51").s().p("AgwgPQAXgQAZAAQAbAAAVAQIgwAwg");
	this.shape_15.setTransform(57.9,25.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").p("AAAm3QC2AACACBQCCCBAAC1QAAC2iCCBQiACBi2AAQi1AAiBiBQiBiBAAi2QAAi1CBiBQCBiBC1AAg");
	this.shape_16.setTransform(44,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,90,90);


(lib.easysvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// maskFil2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_24 = new cjs.Graphics().p("AhaBaQglglAAg1QAAg0AlgmQAmglA0AAQA1AAAlAlQAmAmAAA0QAAA1gmAlQglAmg1AAQg0AAgmgmg");
	var mask_graphics_25 = new cjs.Graphics().p("AhsBtQgtguAAg/QAAg/AtgtQAugtA+AAQA/AAAuAtQAtAtAAA/QAAA/gtAuQguAtg/AAQg+AAgugtg");
	var mask_graphics_26 = new cjs.Graphics().p("Ah+B+Qg1g0AAhKQAAhJA1g2QA1g0BJAAQBKAAA1A0QA1A2AABJQAABKg1A0Qg1A2hKAAQhJAAg1g2g");
	var mask_graphics_27 = new cjs.Graphics().p("AiRCRQg8g8AAhVQAAhUA8g9QA9g8BUAAQBVAAA8A8QA9A9AABUQAABVg9A8Qg8A9hVAAQhUAAg9g9g");
	var mask_graphics_28 = new cjs.Graphics().p("AijCjQhEhEAAhfQAAheBEhFQBEhEBfAAQBgAABDBEQBFBFAABeQAABfhFBEQhDBFhgAAQhfAAhEhFg");
	var mask_graphics_29 = new cjs.Graphics().p("Ai1C1QhLhLgBhqQABhpBLhMQBMhLBpAAQBqAABLBLQBMBMABBpQgBBqhMBLQhLBMhqAAQhpAAhMhMg");
	var mask_graphics_30 = new cjs.Graphics().p("AjHDHQhThSAAh1QAAh0BThTQBThTB0AAQB1AABSBTQBUBTAAB0QAAB1hUBSQhSBUh1AAQh0AAhThUg");
	var mask_graphics_31 = new cjs.Graphics().p("AjZDaQhbhbAAh/QAAh/BbhbQBbhaB+AAQCAAABZBaQBcBbAAB/QAAB/hcBbQhZBbiAAAQh+AAhbhbg");
	var mask_graphics_32 = new cjs.Graphics().p("AjsDsQhihiAAiKQAAiJBihjQBjhiCJAAQCKAABiBiQBjBjAACJQAACKhjBiQhiBjiKAAQiJAAhjhjg");
	var mask_graphics_33 = new cjs.Graphics().p("Aj+D+QhqhpAAiVQAAiUBqhqQBqhqCUAAQCVAABpBqQBrBqAACUQAACVhrBpQhpBriVAAQiUAAhqhrg");
	var mask_graphics_34 = new cjs.Graphics().p("AkQERQhyhxAAigQAAieByhzQBxhwCfAAQCfAABxBwQBzBzgBCfQABCehzByQhxBxifABQifgBhxhxg");
	var mask_graphics_35 = new cjs.Graphics().p("AkjEjQh4h5AAiqQAAipB4h6QB6h4CpAAQCqAAB5B4QB5B6AACqQAACph5B5Qh5B5iqAAQipAAh6h5g");
	var mask_graphics_36 = new cjs.Graphics().p("Ak1E1QiAiAAAi1QAAi0CAiBQCBiAC0AAQC1AACACAQCBCBAAC1QAAC0iBCAQiACBi1AAQi0AAiBiBg");
	var mask_graphics_37 = new cjs.Graphics().p("AlIFHQiHiIAAi/QAAi/CHiJQCJiHC/AAQDAAACHCHQCJCJAADAQAAC+iJCIQiHCJjAAAQi/AAiJiJg");
	var mask_graphics_38 = new cjs.Graphics().p("AlaFZQiPiOAAjLQAAjJCPiRQCRiODJAAQDKAACPCOQCRCRAADJQAADLiRCOQiPCRjKAAQjJAAiRiRg");
	var mask_graphics_39 = new cjs.Graphics().p("AlsFrQiXiWAAjVQAAjUCXiYQCYiWDUgBQDVABCWCWQCYCYAADVQAADUiYCWQiWCYjVAAQjUAAiYiYg");
	var mask_graphics_40 = new cjs.Graphics().p("Al/F+QieieAAjgQAAjfCeifQCgieDfAAQDfAACeCeQChCfAADgQAADfihCeQieCfjfAAQjfAAigifg");
	var mask_graphics_41 = new cjs.Graphics().p("AmRGQQilimAAjqQAAjpClioQCnilDqAAQDqAAClClQCoCoAADqQAADpioCmQilCnjqAAQjqAAining");
	var mask_graphics_42 = new cjs.Graphics().p("AmjGiQititAAj1QAAj0CtivQCvitD0AAQD1AACtCtQCvCvAAD1QAAD0ivCtQitCvj1AAQj0AAivivg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_graphics_24,x:25.3,y:31.6}).wait(1).to({graphics:mask_graphics_25,x:25.3,y:31.2}).wait(1).to({graphics:mask_graphics_26,x:25.3,y:30.8}).wait(1).to({graphics:mask_graphics_27,x:25.3,y:30.4}).wait(1).to({graphics:mask_graphics_28,x:25.3,y:30}).wait(1).to({graphics:mask_graphics_29,x:25.3,y:29.6}).wait(1).to({graphics:mask_graphics_30,x:25.3,y:29.2}).wait(1).to({graphics:mask_graphics_31,x:25.3,y:28.8}).wait(1).to({graphics:mask_graphics_32,x:25.3,y:28.3}).wait(1).to({graphics:mask_graphics_33,x:25.3,y:27.9}).wait(1).to({graphics:mask_graphics_34,x:25.3,y:27.5}).wait(1).to({graphics:mask_graphics_35,x:25.3,y:27.1}).wait(1).to({graphics:mask_graphics_36,x:25.3,y:26.7}).wait(1).to({graphics:mask_graphics_37,x:25.3,y:26.3}).wait(1).to({graphics:mask_graphics_38,x:25.3,y:25.9}).wait(1).to({graphics:mask_graphics_39,x:25.4,y:25.5}).wait(1).to({graphics:mask_graphics_40,x:25.4,y:25}).wait(1).to({graphics:mask_graphics_41,x:25.4,y:24.6}).wait(1).to({graphics:mask_graphics_42,x:25.4,y:24.2}).wait(18));

	// fil2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9D7F51").s().p("ABTDFIkWkWQgZgYAAghQAAgiAZgYQAYgYAhAAQAhAAAZAYIEWEWQAXAYAAAiQAAAigXAXQgZAYghAAQgiAAgXgYg");
	this.shape.setTransform(44.3,44.5);
	this.shape._off = true;

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(24).to({_off:false},0).wait(36));

	// maskFil1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AhdBeQgngnAAg3QAAg2AngnQAognA1AAQA3AAAnAnQAnAnAAA2QAAA3gnAnQgnAng3AAQg1AAgogng");
	var mask_1_graphics_1 = new cjs.Graphics().p("AhtBuQgtguAAhAQAAg/AtguQAugtA/AAQBAAAAuAtQAtAuAAA/QAABAgtAuQguAthAAAQg/AAgugtg");
	var mask_1_graphics_2 = new cjs.Graphics().p("Ah9B9Qg0gzAAhKQAAhJA0g0QA1g0BIAAQBKAAAzA0QA1A1AABIQAABJg1A0QgzA1hKAAQhIAAg1g1g");
	var mask_1_graphics_3 = new cjs.Graphics().p("AiNCOQg7g7AAhTQAAhSA7g7QA8g7BRAAQBTAAA7A7QA7A7AABSQAABTg7A7Qg7A7hTAAQhRAAg8g7g");
	var mask_1_graphics_4 = new cjs.Graphics().p("AidCeQhChCAAhcQAAhbBChCQBDhCBaAAQBcAABCBCQBCBCgBBbQABBchCBCQhCBChcAAQhaAAhDhCg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AitCuQhIhIAAhmQAAhlBIhIQBJhIBkAAQBmAABIBIQBIBIAABlQAABmhIBIQhIBIhmAAQhkAAhJhIg");
	var mask_1_graphics_6 = new cjs.Graphics().p("Ai9C+QhOhPgBhvQABhuBOhPQBQhOBtgBQBvABBPBOQBPBPgBBuQABBvhPBPQhPBOhvABQhtgBhQhOg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AjNDOQhWhWABh4QgBh3BWhWQBWhWB3ABQB4gBBWBWQBWBWAAB3QAAB4hWBWQhWBWh4gBQh3ABhWhWg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AjdDeQhchcAAiCQAAiABchdQBdhcCAAAQCCAABcBcQBcBdAACAQAACChcBcQhcBciCAAQiAAAhdhcg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AjtDuQhjhjAAiLQAAiKBjhjQBkhjCJAAQCLAABjBjQBjBjAACKQAACLhjBjQhjBjiLAAQiJAAhkhjg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Aj9D+QhphpAAiVQAAiUBphpQBqhpCTAAQCUAABqBpQBpBpAACUQAACVhpBpQhqBpiUAAQiTAAhqhpg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AkNEOQhwhwAAieQAAidBwhwQBxhwCcAAQCeAABwBwQBwBwAACdQAACehwBwQhwBwieAAQicAAhxhwg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AkdEeQh3h2AAioQAAimB3h3QB4h3ClAAQCnAAB3B3QB3B3AACmQAACoh3B2Qh3B3inAAQilAAh4h3g");
	var mask_1_graphics_13 = new cjs.Graphics().p("AktEuQh9h9AAixQAAiwB9h9QB/h9CuAAQCxAAB9B9QB9B9AACwQAACxh9B9Qh9B9ixAAQiuAAh/h9g");
	var mask_1_graphics_14 = new cjs.Graphics().p("Ak9E+QiEiEAAi6QAAi5CEiEQCFiEC4AAQC6AACECEQCECEAAC5QAAC6iECEQiECEi6AAQi4AAiFiEg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AlNFOQiKiKgBjEQABjDCKiKQCMiKDBgBQDDABCLCKQCLCLgBDCQABDEiLCKQiLCKjDAAQjBAAiMiKg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AldFfQiRiSAAjNQAAjMCRiRQCTiRDLAAQDMAACRCRQCRCRAADNQAADMiRCSQiRCQjMAAQjLAAiTiQg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AltFuQiYiYAAjWQAAjVCYiYQCaiYDUAAQDVAACYCYQCYCYAADWQAADWiYCXQiYCYjVAAQjUAAiaiYg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Al9F+QieieAAjgQAAjfCeieQCgifDeAAQDeAACfCfQCeCeABDgQgBDfieCeQifCfjeAAQjeAAigifg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:25.7,y:61.2}).wait(1).to({graphics:mask_1_graphics_1,x:25.7,y:61.2}).wait(1).to({graphics:mask_1_graphics_2,x:25.8,y:61.2}).wait(1).to({graphics:mask_1_graphics_3,x:25.7,y:61.2}).wait(1).to({graphics:mask_1_graphics_4,x:25.8,y:61.2}).wait(1).to({graphics:mask_1_graphics_5,x:25.8,y:61.2}).wait(1).to({graphics:mask_1_graphics_6,x:25.8,y:61.2}).wait(1).to({graphics:mask_1_graphics_7,x:25.8,y:61.2}).wait(1).to({graphics:mask_1_graphics_8,x:25.8,y:61.2}).wait(1).to({graphics:mask_1_graphics_9,x:25.8,y:61.2}).wait(1).to({graphics:mask_1_graphics_10,x:25.8,y:61.2}).wait(1).to({graphics:mask_1_graphics_11,x:25.8,y:61.2}).wait(1).to({graphics:mask_1_graphics_12,x:25.8,y:61.2}).wait(1).to({graphics:mask_1_graphics_13,x:25.8,y:61.2}).wait(1).to({graphics:mask_1_graphics_14,x:25.8,y:61.2}).wait(1).to({graphics:mask_1_graphics_15,x:25.8,y:61.3}).wait(1).to({graphics:mask_1_graphics_16,x:25.8,y:61.2}).wait(1).to({graphics:mask_1_graphics_17,x:25.8,y:61.3}).wait(1).to({graphics:mask_1_graphics_18,x:25.8,y:61.3}).wait(42));

	// fil1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9D7F51").s().p("AjEDFQgYgYAAghQAAgiAYgYIEXkXQAYgXAhAAQAhAAAZAYQAXAYAAAiQAAAhgXAYIkXEWQgYAYgiAAQghAAgYgYg");
	this.shape_1.setTransform(44.3,44.5);

	this.shape_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(60));

	// bouton
	this.instance = new lib.bouton_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(44.5,44.5,1,1,0,0,0,44,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,90,90);


(lib.boutonBouton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.bouton = new lib.bouton_1();
	this.bouton.parent = this;
	this.bouton.setTransform(75.2,75,1.705,1.705,0,0,0,44.1,44);
	new cjs.ButtonHelper(this.bouton, 0, 1, 1);

	this.instance = new lib.easysvg();
	this.instance.parent = this;
	this.instance.setTransform(51,97.4,1.705,1.705,0,0,0,30.4,57.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AugOhIAA9BIdBAAIAAdBg");
	this.shape.setTransform(69,81);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bouton}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape},{t:this.instance}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,152,152);


// stage content:
(lib.bouton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// easy
	this.instance = new lib.boutonBouton();
	this.instance.parent = this;
	this.instance.setTransform(76,76,1,1,0,0,0,75,75);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.boutonBouton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(76,76,152,152);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
        
