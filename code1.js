gdjs.Title_32ScreenCode = {};
gdjs.Title_32ScreenCode.GDtitleObjects1= [];
gdjs.Title_32ScreenCode.GDtitleObjects2= [];
gdjs.Title_32ScreenCode.GDTransparentButtonWithWhiteYellowBorderObjects1= [];
gdjs.Title_32ScreenCode.GDTransparentButtonWithWhiteYellowBorderObjects2= [];
gdjs.Title_32ScreenCode.GDbackgroundObjects1= [];
gdjs.Title_32ScreenCode.GDbackgroundObjects2= [];


gdjs.Title_32ScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteYellowBorder"), gdjs.Title_32ScreenCode.GDTransparentButtonWithWhiteYellowBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length;i<l;++i) {
    if ( gdjs.Title_32ScreenCode.GDTransparentButtonWithWhiteYellowBorderObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Title_32ScreenCode.GDTransparentButtonWithWhiteYellowBorderObjects1[k] = gdjs.Title_32ScreenCode.GDTransparentButtonWithWhiteYellowBorderObjects1[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Title_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32ScreenCode.GDtitleObjects1.length = 0;
gdjs.Title_32ScreenCode.GDtitleObjects2.length = 0;
gdjs.Title_32ScreenCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.Title_32ScreenCode.GDbackgroundObjects1.length = 0;
gdjs.Title_32ScreenCode.GDbackgroundObjects2.length = 0;

gdjs.Title_32ScreenCode.eventsList0(runtimeScene);

return;

}

gdjs['Title_32ScreenCode'] = gdjs.Title_32ScreenCode;
