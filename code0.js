gdjs.GameCode = {};
gdjs.GameCode.GDCookieObjects1= [];
gdjs.GameCode.GDCookieObjects2= [];
gdjs.GameCode.GDBlackDecoratedButtonObjects1= [];
gdjs.GameCode.GDBlackDecoratedButtonObjects2= [];
gdjs.GameCode.GDBlackSquareDecoratedButtonObjects1= [];
gdjs.GameCode.GDBlackSquareDecoratedButtonObjects2= [];
gdjs.GameCode.GDBlueButtonWithShadowObjects1= [];
gdjs.GameCode.GDBlueButtonWithShadowObjects2= [];
gdjs.GameCode.GDBrownButtonWithShadowObjects1= [];
gdjs.GameCode.GDBrownButtonWithShadowObjects2= [];
gdjs.GameCode.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.GameCode.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.GameCode.GDBlueButtonObjects1= [];
gdjs.GameCode.GDBlueButtonObjects2= [];
gdjs.GameCode.GDGreenButtonWithShadowObjects1= [];
gdjs.GameCode.GDGreenButtonWithShadowObjects2= [];
gdjs.GameCode.GDGreenButtonWithStoneFrameObjects1= [];
gdjs.GameCode.GDGreenButtonWithStoneFrameObjects2= [];
gdjs.GameCode.GDGreenButtonObjects1= [];
gdjs.GameCode.GDGreenButtonObjects2= [];
gdjs.GameCode.GDMedievalButtonBeigeObjects1= [];
gdjs.GameCode.GDMedievalButtonBeigeObjects2= [];
gdjs.GameCode.GDGreyButtonWithShadowObjects1= [];
gdjs.GameCode.GDGreyButtonWithShadowObjects2= [];
gdjs.GameCode.GDOnScreenControlsButtonObjects1= [];
gdjs.GameCode.GDOnScreenControlsButtonObjects2= [];
gdjs.GameCode.GDMedievalButtonBrownObjects1= [];
gdjs.GameCode.GDMedievalButtonBrownObjects2= [];
gdjs.GameCode.GDOrangeButtonWithStoneFrameObjects1= [];
gdjs.GameCode.GDOrangeButtonWithStoneFrameObjects2= [];
gdjs.GameCode.GDPurpleButtonWithShadowObjects1= [];
gdjs.GameCode.GDPurpleButtonWithShadowObjects2= [];
gdjs.GameCode.GDOrangeBubbleButtonObjects1= [];
gdjs.GameCode.GDOrangeBubbleButtonObjects2= [];
gdjs.GameCode.GDGreyButtonObjects1= [];
gdjs.GameCode.GDGreyButtonObjects2= [];
gdjs.GameCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.GameCode.GDPurpleButtonWithStoneFrameObjects2= [];
gdjs.GameCode.GDRedButtonWithShadowObjects1= [];
gdjs.GameCode.GDRedButtonWithShadowObjects2= [];
gdjs.GameCode.GDRedButtonWithGoldFrameObjects1= [];
gdjs.GameCode.GDRedButtonWithGoldFrameObjects2= [];
gdjs.GameCode.GDRedButtonWithStoneFrameObjects1= [];
gdjs.GameCode.GDRedButtonWithStoneFrameObjects2= [];
gdjs.GameCode.GDRedButtonWithMetalFrameObjects1= [];
gdjs.GameCode.GDRedButtonWithMetalFrameObjects2= [];
gdjs.GameCode.GDRedButtonObjects1= [];
gdjs.GameCode.GDRedButtonObjects2= [];
gdjs.GameCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.GameCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.GameCode.GDTransparentButtonWithWhiteYellowBorderObjects1= [];
gdjs.GameCode.GDTransparentButtonWithWhiteYellowBorderObjects2= [];
gdjs.GameCode.GDWhiteSleekButtonObjects1= [];
gdjs.GameCode.GDWhiteSleekButtonObjects2= [];
gdjs.GameCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.GameCode.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.GameCode.GDYellowJellyButtonObjects1= [];
gdjs.GameCode.GDYellowJellyButtonObjects2= [];
gdjs.GameCode.GDchezcaikObjects1= [];
gdjs.GameCode.GDchezcaikObjects2= [];
gdjs.GameCode.GDfactorylineObjects1= [];
gdjs.GameCode.GDfactorylineObjects2= [];
gdjs.GameCode.GDMoneyBillsObjects1= [];
gdjs.GameCode.GDMoneyBillsObjects2= [];
gdjs.GameCode.GDNewTextObjects1= [];
gdjs.GameCode.GDNewTextObjects2= [];
gdjs.GameCode.GDbackgroundObjects1= [];
gdjs.GameCode.GDbackgroundObjects2= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDchezcaikObjects1Objects = Hashtable.newFrom({"chezcaik": gdjs.GameCode.GDchezcaikObjects1});
gdjs.GameCode.asyncCallback10348948 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("chezcaik"), gdjs.GameCode.GDchezcaikObjects2);

{for(var i = 0, len = gdjs.GameCode.GDchezcaikObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDchezcaikObjects2[i].getBehavior("Tween").addObjectPositionTween2("banana2", 1318, 12345, "linear", 20, true);
}
}}
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.GameCode.GDchezcaikObjects1) asyncObjectsList.addObject("chezcaik", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.GameCode.asyncCallback10348948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMoneyBillsObjects1Objects = Hashtable.newFrom({"MoneyBills": gdjs.GameCode.GDMoneyBillsObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDchezcaikObjects1Objects = Hashtable.newFrom({"chezcaik": gdjs.GameCode.GDchezcaikObjects1});
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteYellowBorder"), gdjs.GameCode.GDTransparentButtonWithWhiteYellowBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDTransparentButtonWithWhiteYellowBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTransparentButtonWithWhiteYellowBorderObjects1[k] = gdjs.GameCode.GDTransparentButtonWithWhiteYellowBorderObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = k;
if (isConditionTrue_0) {
gdjs.GameCode.GDchezcaikObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDchezcaikObjects1Objects, 327, 499, "");
}{for(var i = 0, len = gdjs.GameCode.GDchezcaikObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDchezcaikObjects1[i].setZOrder(-(1));
}
}{for(var i = 0, len = gdjs.GameCode.GDchezcaikObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDchezcaikObjects1[i].setAngle(180);
}
}{for(var i = 0, len = gdjs.GameCode.GDchezcaikObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDchezcaikObjects1[i].getBehavior("Tween").addObjectPositionTween2("banana", 1318, 499, "linear", 5, false);
}
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MoneyBills"), gdjs.GameCode.GDMoneyBillsObjects1);
gdjs.copyArray(runtimeScene.getObjects("chezcaik"), gdjs.GameCode.GDchezcaikObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMoneyBillsObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDchezcaikObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.GameCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewTextObjects1[i].returnVariable(gdjs.GameCode.GDNewTextObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.GameCode.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDNewTextObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDNewTextObjects1[i].getVariableNumber(gdjs.GameCode.GDNewTextObjects1[i].getVariables().getFromIndex(0)) > -(2) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDNewTextObjects1[k] = gdjs.GameCode.GDNewTextObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDNewTextObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDNewTextObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewTextObjects1[i].getBehavior("Text").setText("$" + gdjs.evtTools.common.toString(gdjs.GameCode.GDNewTextObjects1[i].getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDCookieObjects1.length = 0;
gdjs.GameCode.GDCookieObjects2.length = 0;
gdjs.GameCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.GameCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.GameCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.GameCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.GameCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.GameCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.GameCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.GameCode.GDBrownButtonWithShadowObjects2.length = 0;
gdjs.GameCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.GameCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.GameCode.GDBlueButtonObjects1.length = 0;
gdjs.GameCode.GDBlueButtonObjects2.length = 0;
gdjs.GameCode.GDGreenButtonWithShadowObjects1.length = 0;
gdjs.GameCode.GDGreenButtonWithShadowObjects2.length = 0;
gdjs.GameCode.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.GameCode.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs.GameCode.GDGreenButtonObjects1.length = 0;
gdjs.GameCode.GDGreenButtonObjects2.length = 0;
gdjs.GameCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.GameCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.GameCode.GDGreyButtonWithShadowObjects1.length = 0;
gdjs.GameCode.GDGreyButtonWithShadowObjects2.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.GameCode.GDMedievalButtonBrownObjects1.length = 0;
gdjs.GameCode.GDMedievalButtonBrownObjects2.length = 0;
gdjs.GameCode.GDOrangeButtonWithStoneFrameObjects1.length = 0;
gdjs.GameCode.GDOrangeButtonWithStoneFrameObjects2.length = 0;
gdjs.GameCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.GameCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.GameCode.GDOrangeBubbleButtonObjects1.length = 0;
gdjs.GameCode.GDOrangeBubbleButtonObjects2.length = 0;
gdjs.GameCode.GDGreyButtonObjects1.length = 0;
gdjs.GameCode.GDGreyButtonObjects2.length = 0;
gdjs.GameCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.GameCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.GameCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.GameCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.GameCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.GameCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.GameCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.GameCode.GDRedButtonWithStoneFrameObjects2.length = 0;
gdjs.GameCode.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs.GameCode.GDRedButtonWithMetalFrameObjects2.length = 0;
gdjs.GameCode.GDRedButtonObjects1.length = 0;
gdjs.GameCode.GDRedButtonObjects2.length = 0;
gdjs.GameCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.GameCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.GameCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.GameCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.GameCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.GameCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.GameCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.GameCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.GameCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.GameCode.GDYellowJellyButtonObjects2.length = 0;
gdjs.GameCode.GDchezcaikObjects1.length = 0;
gdjs.GameCode.GDchezcaikObjects2.length = 0;
gdjs.GameCode.GDfactorylineObjects1.length = 0;
gdjs.GameCode.GDfactorylineObjects2.length = 0;
gdjs.GameCode.GDMoneyBillsObjects1.length = 0;
gdjs.GameCode.GDMoneyBillsObjects2.length = 0;
gdjs.GameCode.GDNewTextObjects1.length = 0;
gdjs.GameCode.GDNewTextObjects2.length = 0;
gdjs.GameCode.GDbackgroundObjects1.length = 0;
gdjs.GameCode.GDbackgroundObjects2.length = 0;

gdjs.GameCode.eventsList1(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
