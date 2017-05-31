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
	fps: 24,
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



(lib.reste = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5).p("AgGhkIANAAQAbAAASATQASASAAAaIAABKQAAAbgSASQgSASgbAAIgNAAQgaAAgTgSQgSgSAAgbIAAhKQAAgZASgTQATgTAaAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGBkQgaABgTgTQgSgSAAgbIAAhJQAAgaASgSQATgUAaABIANAAQAbAAASASQASASAAAbIAABJQAAAbgSASQgSATgbgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-11.1,16.2,22.2);


(lib.fermetureGauche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhGitIAHgCICFFdIgHACg");
	this.shape.setTransform(-2.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9D7F51").s().p("AgigEIA4gWIANAfIg4AWg");
	this.shape_1.setTransform(-3.6,-10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9D7F51").s().p("AgigEIA4gWIANAeIg4AXg");
	this.shape_2.setTransform(-0.4,-1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9D7F51").s().p("AgigDIA4gXIANAfIg4AWg");
	this.shape_3.setTransform(2.8,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9D7F51").s().p("AgigEIA4gWIANAfIg4AWg");
	this.shape_4.setTransform(6.1,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-17.7,19.3,35.4);


(lib.fermetureDroite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhECrICDlYIAGACIiDFZg");
	this.shape.setTransform(1.8,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9D7F51").s().p("AgiAFIANgfIA4AWIgNAfg");
	this.shape_1.setTransform(4.5,-14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9D7F51").s().p("AgiAFIAMgfIA5AXIgNAeg");
	this.shape_2.setTransform(1.3,-6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9D7F51").s().p("AgiAEIANgeIA4AWIgNAfg");
	this.shape_3.setTransform(-2,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9D7F51").s().p("AgiAFIANgfIA4AXIgNAeg");
	this.shape_4.setTransform(-5.2,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-17.5,17.5,35.1);


(lib.dessus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3).p("AAAgqIABAAQAFAAAEADQADAEAAAFIAAA9QAAAFgDAEQgEADgFAAIgBAAQgFAAgEgDQgDgEAAgFIAAg9QABgFADgEQADgDAFAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAArQgFAAgDgEQgEgDAAgFIAAg9QABgFADgEQADgDAFAAIABAAQAFAAAEADQADAEAAAFIAAA9QAAAFgDADQgEAEgFAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-5.3,4.7,10.7);


(lib.corps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCEFIAAoJIAFAAIAAIJg");
	this.shape.setTransform(-3.7,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCD6IAAnzIAFAAIAAHzg");
	this.shape_1.setTransform(7,18.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9D7F51").s().p("AgeARIAAghIA8AAIAAAhg");
	this.shape_2.setTransform(-0.9,19.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9D7F51").s().p("AgeARIAAghIA9AAIAAAhg");
	this.shape_3.setTransform(4.2,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9D7F51").s().p("AgeARIAAghIA8AAIAAAhg");
	this.shape_4.setTransform(-0.9,28.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9D7F51").s().p("AgdARIAAghIA7AAIAAAhg");
	this.shape_5.setTransform(4.1,32.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9D7F51").s().p("AgdARIAAghIA7AAIAAAhg");
	this.shape_6.setTransform(4.1,-3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9D7F51").s().p("AgeARIAAghIA8AAIAAAhg");
	this.shape_7.setTransform(-0.9,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9D7F51").s().p("AgeARIAAghIA9AAIAAAhg");
	this.shape_8.setTransform(4.2,5.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9D7F51").s().p("AgeARIAAghIA8AAIAAAhg");
	this.shape_9.setTransform(-0.9,10.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9D7F51").s().p("AgdARIAAghIA7AAIAAAhg");
	this.shape_10.setTransform(4.1,14.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9D7F51").s().p("AgeARIAAghIA8AAIAAAhg");
	this.shape_11.setTransform(-0.9,37.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9D7F51").s().p("AgdARIAAghIA7AAIAAAhg");
	this.shape_12.setTransform(4.1,41.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").p("AAAm3QC2AACBCBQCBCBAAC1QAAC2iBCBQiBCBi2AAQi1AAiBiBQiBiBAAi2QAAi1CBiBQCBiBC1AAg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ak1E3QiCiBABi2QgBi1CCiAQCAiCC1ABQC2gBCBCCQCACAAAC1QAAC2iACBQiBCAi2AAQi1AAiAiAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-45,90,90);


(lib.cloud3svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud3.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3).p("AAAgqIABAAQAFAAAEADQADAEAAAFIAAA9QAAAFgDAEQgEADgFAAIgBAAQgFAAgEgDQgDgEAAgFIAAg9QABgFADgEQADgDAFAAg");
	this.shape.setTransform(46.2,44.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAArQgFAAgDgEQgEgDAAgFIAAg9QABgFADgEQADgDAFAAIABAAQAFAAAEADQADAEAAAFIAAA9QAAAFgDADQgEAEgFAAg");
	this.shape_1.setTransform(46.2,44.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5).p("AhYBgIgIgIQgMgMAAgTQAAgSAMgNIB6h6QANgMASAAQATAAAMAMIAIAIQANANAAASQAAATgNAMIh6B6QgMANgTAAQgSAAgNgNg");
	this.shape_2.setTransform(40.1,54.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhYBgIgIgIQgMgMAAgTQAAgSAMgNIB6h6QANgMASAAQATAAAMAMIAIAIQANANAAASQAAATgNAMIh6B6QgMANgTAAQgSAAgNgNg");
	this.shape_3.setTransform(40.1,54.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.5).p("AgGhkIANAAQAbAAASATQASASAAAaIAABKQAAAbgSASQgSASgbAAIgNAAQgaAAgTgSQgSgSAAgbIAAhKQAAgZASgTQATgTAaAAg");
	this.shape_4.setTransform(45.7,45.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGBkQgaABgTgTQgSgSAAgbIAAhJQAAgaASgSQATgUAaABIANAAQAbAAASASQASASAAAbIAABJQAAAbgSASQgSATgbgBg");
	this.shape_5.setTransform(45.7,45.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhGitIAHgCICFFdIgHACg");
	this.shape_6.setTransform(34.1,21.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9D7F51").s().p("AgigEIA4gWIANAfIg4AWg");
	this.shape_7.setTransform(33,11.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9D7F51").s().p("AgigEIA4gWIANAeIg4AXg");
	this.shape_8.setTransform(36.2,19.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9D7F51").s().p("AgigDIA4gXIANAfIg4AWg");
	this.shape_9.setTransform(39.4,28);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9D7F51").s().p("AgigEIA4gWIANAfIg4AWg");
	this.shape_10.setTransform(42.7,36.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhECrICDlYIAGACIiDFZg");
	this.shape_11.setTransform(58.1,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9D7F51").s().p("AgiAFIANgfIA4AWIgNAfg");
	this.shape_12.setTransform(60.8,8.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9D7F51").s().p("AgiAFIAMgfIA5AXIgNAeg");
	this.shape_13.setTransform(57.6,16.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9D7F51").s().p("AgiAEIANgeIA4AWIgNAfg");
	this.shape_14.setTransform(54.3,25.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9D7F51").s().p("AgiAFIANgfIA4AXIgNAeg");
	this.shape_15.setTransform(51.1,33.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgCEFIAAoJIAFAAIAAIJg");
	this.shape_16.setTransform(40.8,62.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgCD6IAAnzIAFAAIAAHzg");
	this.shape_17.setTransform(51.5,63.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9D7F51").s().p("AgeARIAAghIA8AAIAAAhg");
	this.shape_18.setTransform(43.6,63.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9D7F51").s().p("AgeARIAAghIA9AAIAAAhg");
	this.shape_19.setTransform(48.7,68.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9D7F51").s().p("AgeARIAAghIA8AAIAAAhg");
	this.shape_20.setTransform(43.6,72.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9D7F51").s().p("AgdARIAAghIA7AAIAAAhg");
	this.shape_21.setTransform(48.6,77.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9D7F51").s().p("AgdARIAAghIA7AAIAAAhg");
	this.shape_22.setTransform(48.6,41);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9D7F51").s().p("AgeARIAAghIA8AAIAAAhg");
	this.shape_23.setTransform(43.6,45.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9D7F51").s().p("AgeARIAAghIA9AAIAAAhg");
	this.shape_24.setTransform(48.7,50.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9D7F51").s().p("AgeARIAAghIA8AAIAAAhg");
	this.shape_25.setTransform(43.6,54.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9D7F51").s().p("AgdARIAAghIA7AAIAAAhg");
	this.shape_26.setTransform(48.6,59.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9D7F51").s().p("AgeARIAAghIA8AAIAAAhg");
	this.shape_27.setTransform(43.6,81.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9D7F51").s().p("AgdARIAAghIA7AAIAAAhg");
	this.shape_28.setTransform(48.6,86.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").p("AAAm3QC2AACBCBQCBCBAAC1QAAC2iBCBQiBCBi2AAQi1AAiBiBQiBiBAAi2QAAi1CBiBQCBiBC1AAg");
	this.shape_29.setTransform(44.5,44.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ak1E3QiCiBABi2QgBi1CCiAQCAiCC1ABQC2gBCBCCQCACAAAC1QAAC2iACBQiBCAi2AAQi1AAiAiAg");
	this.shape_30.setTransform(44.5,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,90,90);


(lib.actif = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5).p("AhYBgIgIgIQgMgMAAgTQAAgSAMgNIB6h6QANgMASAAQATAAAMAMIAIAIQANANAAASQAAATgNAMIh6B6QgMANgTAAQgSAAgNgNg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhYBgIgIgIQgMgMAAgTQAAgSAMgNIB6h6QANgMASAAQATAAAMAMIAIAIQANANAAASQAAATgNAMIh6B6QgMANgTAAQgSAAgNgNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-11.9,24,24);


(lib.Symbole1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.fermetureDroite("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-4.9,17.3,1,1,0,0,0,-4.9,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-17.5,17.5,35.1);


(lib.bitonioActif = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.actif("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-12,24,24);


(lib.fermetureEclair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dessus
	this.instance = new lib.dessus("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.7,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-34.8},19).wait(20).to({startPosition:0},0).to({y:0.2},20).wait(21));

	// bitonioActif
	this.instance_1 = new lib.bitonioActif("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.7,3.6,1,1,0,0,0,6,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:6.1,rotation:-121,x:1.8,y:-31.5},19).wait(20).to({startPosition:0},0).to({regX:6,rotation:0,x:1.7,y:3.6},20).wait(21));

	// reste
	this.instance_2 = new lib.reste("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-33.7},19).wait(20).to({startPosition:0},0).to({y:1.3},20).wait(21));

	// fermetureGauche
	this.instance_3 = new lib.fermetureGauche("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-3.5,-5.8,1,1,0,0,0,4.3,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:21,x:-3.6},19).wait(20).to({startPosition:0},0).to({rotation:0,x:-3.5},20).wait(21));

	// fermetureDroite
	this.movieClip_1 = new lib.Symbole1();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(7,-4.9,1,1,0,0,0,-4.8,17.1);

	this.instance_4 = new lib.fermetureDroite("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(7.1,-6.1,1,1,-21,0,0,-4.7,17.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).to({_off:true,regX:-4.7,regY:17.3,rotation:-21,x:7.1,y:-6.1,mode:"synched",startPosition:0},19).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},19).wait(20).to({startPosition:0},0).to({regX:-4.9,rotation:0,x:6.9,y:-4.7},20).wait(21));

	// corps
	this.instance_5 = new lib.corps("synched",0);
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-45,90,90);


(lib.BoutonEclairOk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud3svg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(74.8,75.2,1.705,1.705,0,0,0,44.5,44.6);

	this.instance_1 = new lib.fermetureEclair();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.8,75,1.705,1.705);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArtLuIAA3bIXbAAIAAXbg");
	this.shape.setTransform(74.8,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-1,152,152);


// stage content:
(lib.eclair2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sequence
	this.instance = new lib.BoutonEclairOk();
	this.instance.parent = this;
	this.instance.setTransform(76,75.5,1,1,0,0,0,75,75);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.BoutonEclairOk(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(75.8,75.5,152,152);

})(libEclair = libEclair||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libEclair, images, createjs, ss;