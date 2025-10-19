// meta={"simUrl":"https://trg-microbit.userpxt.io/beta---simulator","cdnUrl":"https://cdn.makecode.com","version":"v0.0.1","target":"microbit","targetVersion":"8.1.2"}
// boardDefinition={"visual":"microbit","gpioPinBlocks":[["P0"],["P1"],["P2"],["P3"],["P4","P5","P6","P7"],["P8","P9","P10","P11","P12"],["P16"]],"gpioPinMap":{"P0":"P0","P1":"P1","P2":"P2","P3":"P3","P4":"P4","P5":"P5","P6":"P6","P7":"P7","P8":"P8","P9":"P9","P10":"P10","P11":"P11","P12":"P12","P13":"P13","P14":"P14","P15":"P15","P16":"P16","P19":"P19","P20":"P20"},"spiPins":{"MOSI":"P15","MISO":"P14","SCK":"P13"},"i2cPins":{"SDA":"P20","SCL":"P19"},"analogInPins":["P0","P1","P2","P3","P10"],"groundPins":["GND"],"threeVoltPins":["+3v3"],"attachPowerOnRight":true,"onboardComponents":["accelerometer","buttonpair","ledmatrix","speaker","bluetooth","thermometer","compass","builtinspeaker","microphone","logotouch","flashlog","v2"],"pinStyles":{"P0":"croc","P1":"croc","P2":"croc","GND":"croc","+3v3":"croc"},"marginWhenBreadboarding":[0,0,80,0]}
// total=3146 new=31.85% cached=0.00% other=68.15%
(function (ectx) {
'use strict';
const runtime = ectx.runtime;
const oops = ectx.oops;
const doNothing = ectx.doNothing;
const pxsim = ectx.pxsim;
const globals = ectx.globals;
const maybeYield = ectx.maybeYield;
const setupDebugger = ectx.setupDebugger;
const isBreakFrame = ectx.isBreakFrame;
const breakpoint = ectx.breakpoint;
const trace = ectx.trace;
const checkStack = ectx.checkStack;
const leave = ectx.leave;
const checkResumeConsumed = ectx.checkResumeConsumed;
const setupResume = ectx.setupResume;
const setupLambda = ectx.setupLambda;
const checkSubtype = ectx.checkSubtype;
const failedCast = ectx.failedCast;
const buildResume = ectx.buildResume;
const mkVTable = ectx.mkVTable;
const bind = ectx.bind;
const leaveAccessor = ectx.leaveAccessor;
const __this = runtime;
const pxtrt = pxsim.pxtrt;
let yieldSteps = 1;
ectx.setupYield(function() { yieldSteps = 100; })
pxsim.setTitle("pxt-car-location");
pxsim.setConfigData({}, {});
pxtrt.mapKeyNames = [
 ""
];
__this.setupPerfCounters([]);
const pxsim_Array__getAt = pxsim.Array_.getAt;
const pxsim_Array__length = pxsim.Array_.length;
const pxsim_Array__mk = pxsim.Array_.mk;
const pxsim_Array__push = pxsim.Array_.push;
const pxsim_Boolean__bang = pxsim.Boolean_.bang;
const pxsim_String__concat = pxsim.String_.concat;
const pxsim_String__stringConv = pxsim.String_.stringConv;
const pxsim_numops_toBool = pxsim.numops.toBool;
const pxsim_numops_toBoolDecr = pxsim.numops.toBoolDecr;
const pxsim_pxtcore_mkAction = pxsim.pxtcore.mkAction;
const pxsim_pxtcore_mkClassInstance = pxsim.pxtcore.mkClassInstance;
const pxsim_pxtrt_ldlocRef = pxsim.pxtrt.ldlocRef;
const pxsim_pxtrt_mapGetByString = pxsim.pxtrt.mapGetByString;
const pxsim_pxtrt_stclo = pxsim.pxtrt.stclo;
const pxsim_pxtrt_stlocRef = pxsim.pxtrt.stlocRef;
const pxsim_Boolean_ = pxsim.Boolean_;
const pxsim_pxtcore = pxsim.pxtcore;
const pxsim_String_ = pxsim.String_;
const pxsim_ImageMethods = pxsim.ImageMethods;
const pxsim_Array_ = pxsim.Array_;
const pxsim_pxtrt = pxsim.pxtrt;
const pxsim_numops = pxsim.numops;


function _main___P3290(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    globals._intervals___3129 = (undefined);
    globals._pollEventQueue___3213 = (undefined);
    r0 = pxsim_pxtrt.mkMap();
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "x", 0);
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "y", 0);
    globals.currentLocation___3286 = (s.tmp_0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
_main___P3290.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"main.ts","functionName":"<main>","argumentNames":[]}
_main___P3290.continuations = [  ]

function _main___P3290_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: _main___P3290, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





const breakpoints = setupDebugger(1, ["currentLocation___3286"])

return _main___P3290
})
