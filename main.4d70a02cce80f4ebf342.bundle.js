(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1705:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(119),_clientLogger=__webpack_require__(81),_configFilename=__webpack_require__(474);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},2813:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(525).configure)([__webpack_require__(2814),__webpack_require__(2815)],module,!1)}).call(this,__webpack_require__(188)(module))},2814:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=2814},2815:function(module,exports,__webpack_require__){var map={"./stories/HeroButton.stories.tsx":2816,"./stories/Tag.stories.tsx":2817};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=2815},2816:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BaseStory",(function(){return BaseStory})),__webpack_require__.d(__webpack_exports__,"BasicStory",(function(){return BasicStory})),__webpack_require__.d(__webpack_exports__,"HeroStory",(function(){return HeroStory}));var _Users_nathandunlap_repos_GDS_apps_goodsrnweb_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(231),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(49);__webpack_exports__.default={title:"ButtonBase Components",component:_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_2__.ButtonBase,subcomponents:{HeroButton:_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_2__.HeroButton,BasicButton:_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_2__.BasicButton},argTypes:{label:{defaultValue:"button label",type:"string",description:"the string inside the button"},buttonType:{defaultValue:_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_2__.ButtonType.Brand,description:"Button type is ...",control:{type:"select",options:[_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_2__.ButtonType.Brand,_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_2__.ButtonType.UserAccent,_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_2__.ButtonType.Primary,_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_2__.ButtonType.Secondary,_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_2__.ButtonType.Tertiary]}},buttonSize:{defaultValue:_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_2__.ButtonSize.Default,description:"Defines the button size. Default is used for .... Action is used for",control:{type:"select",options:[_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_2__.ButtonSize.Default,_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_2__.ButtonSize.Action]}},overlayMode:{defaultValue:_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_2__.OverlayMode.Solid,description:"Defines the way the component presents itself over content",control:{type:"select",options:[_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_2__.OverlayMode.Solid,_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_2__.OverlayMode.SemiTransparent,_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_2__.OverlayMode.Acrylic]}}}};var BaseStory=function ButtonBaseStory(args){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_2__.ButtonBase,args)}.bind({});BaseStory.storyName="ButtonBase",BaseStory.args={label:"ButtonBase"};var BasicStory=function BasicButtonStory(args){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_2__.BasicButton,args)}.bind({});BasicStory.storyName="BasicButton",BasicStory.args={label:"BasicButton"};var HeroStory=function HeroButtonStory(args){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_2__.HeroButton,args)}.bind({});HeroStory.storyName="HeroButton",HeroStory.args={label:"HeroButton"},BaseStory.parameters=Object(_Users_nathandunlap_repos_GDS_apps_goodsrnweb_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <ButtonBase {...args} />"}},BaseStory.parameters),BasicStory.parameters=Object(_Users_nathandunlap_repos_GDS_apps_goodsrnweb_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <BasicButton {...args} />"}},BasicStory.parameters),HeroStory.parameters=Object(_Users_nathandunlap_repos_GDS_apps_goodsrnweb_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <HeroButton {...args} />"}},HeroStory.parameters)},2817:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"TagStory",(function(){return TagStory}));var _Users_nathandunlap_repos_GDS_apps_goodsrnweb_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(231),_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(49),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_storybook_preview__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(474);__webpack_exports__.default={title:"Tag",component:_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_1__.Tag,argTypes:{icon:{defaultValue:_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_1__.SVGIcons.XboxDynamicLighting,type:"string"},label:{defaultValue:"LABEL",type:"string",description:"the string inside the button"},add:{defaultValue:!1,control:{type:"boolean"}},selected:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}};var TagStory=function _TagStory(args,_ref){var locale=_ref.globals.locale;return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_1__.Tag,Object.assign({},args,{label:Object(_storybook_preview__WEBPACK_IMPORTED_MODULE_3__.getCaptionForLocale)(locale)}))}.bind({});TagStory.storyName="Tag",TagStory.parameters=Object(_Users_nathandunlap_repos_GDS_apps_goodsrnweb_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args, { globals: { locale } }) => <Tag {...args} label={getCaptionForLocale(locale)} />"}},TagStory.parameters)},474:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"getCaptionForLocale",(function(){return getCaptionForLocale})),__webpack_require__.d(__webpack_exports__,"globalTypes",(function(){return globalTypes})),__webpack_require__.d(__webpack_exports__,"decorators",(function(){return decorators})),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var _gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(49),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(138),__webpack_require__(0)),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),react_native__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),getCaptionForLocale=function getCaptionForLocale(locale){switch(locale){case"es":return"Hola!";case"de":return"Donaudampfschifffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft!";case"fr":return"Bonjour!";case"kr":return"안녕하세요!";case"zh":return"你好!";default:return"Hello!"}},globalTypes={locale:{name:"Language",description:"Internationalization locale",defaultValue:"en",toolbar:{items:[{value:"en",title:"English"},{value:"de",title:"German"},{value:"fr",title:"Français"},{value:"es",title:"Español"},{value:"zh",title:"中文"},{value:"kr",title:"한국어"}]}},theme:{name:"Theme",description:"Global theme for components",defaultValue:"light",toolbar:{items:["Dark","Light","HCBlack","HCWhite"]}}},darkTheme={theme:_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_0__.Theme.Dark,userColors:_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_0__.UserColors.Magenta.accent},lightTheme={theme:_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_0__.Theme.Light,userColors:_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_0__.UserColors.Magenta.accent},hcBlackTheme={theme:_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_0__.Theme.HCBlack,userColors:_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_0__.UserColors.Magenta.accent},hcWhiteTheme={theme:_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_0__.Theme.HCWhite,userColors:_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_0__.UserColors.Magenta.accent},getGDSTheme=function getGDSTheme(theme){switch(theme){default:case"Dark":return darkTheme;case"Light":return lightTheme;case"HCBlack":return hcBlackTheme;case"HCWhite":return hcWhiteTheme}},decorators=[function withGDSContextProvider(Story,context){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_gaming_gaming_design_system_react_native__WEBPACK_IMPORTED_MODULE_0__.GDSContext.Provider,{value:getGDSTheme(context.globals.theme)},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_3__.a,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Story,context)))}],parameters={backgrounds:{default:"transparent",values:[{name:"transparent",value:"transparent"},{name:"dark",value:"#1b1c1eff"},{name:"light",value:"#dfe4e8ff"},{name:"hcblack",value:"#000000"},{name:"hcwhite",value:"#ffffff"}]}}},711:function(module,exports,__webpack_require__){__webpack_require__(712),__webpack_require__(855),__webpack_require__(856),__webpack_require__(1051),__webpack_require__(1658),__webpack_require__(1689),__webpack_require__(1701),__webpack_require__(1703),__webpack_require__(1705),module.exports=__webpack_require__(2813)},774:function(module,exports){},856:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(525)}},[[711,1,2]]]);
//# sourceMappingURL=main.4d70a02cce80f4ebf342.bundle.js.map