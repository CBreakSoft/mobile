const app = getApp();

const  bmgjlist= [
      {
        icon: '/image/icon/ffwdcx.png',
        text: '服务网点查询',
        //desc: '描述信息',
        path: '/pages/component/webview/webview',
      },
      {
        icon: '/image/icon/fdjsq.png',
        text: '房贷试算器',
        path: '/pages/component/webview/webview',
      },
    ];

const  gjywlist= [
      {
        icon: '/image/icon/gjjtq.png',
        text: '我要提取',
        //desc: '描述信息',
       // path: '../../ywbl/gjjtq/gjjtq',
       path :'/C13010CS/ywbl/gjjtq/gjjtq',
      }
    ];
const  dkywlist= [
      // {
      //   icon: '/image/icon/dkyw.png',
      //   text: '我要贷款',
      //   //desc: '描述信息',
      // },
      {
        icon: '/image/icon/tqhb.png',
        text: '我要还款',
        path: '/pages/component/webview/webview',
      },
      {
        icon: '/image/icon/qxydcsq.png',
        text: '冲还贷签约',
        path: '/pages/component/webview/webview',
      },
    ];
const  wdywlist= [
  {
    icon: '/image/icon/wdyw.png',
    text: '我的业务',
    //desc: '描述信息',
     path: '/pages/component/webview/webview',
  }
];


let basicComponentList = [
  
  {
    type: '便民服务',
    list: bmgjlist,
  },
  {
    type: '归集业务',
    list: gjywlist,
  },
  {
    type: '贷款业务',
    list: dkywlist,
  },
  {
    type: '我的业务',
    list: wdywlist,
  }, 
];


Page({
  data: {
    basicComponentList,
    tabbar:{},     //放在data中
  },
  onLoad() {
    app.editTabBar(); //放在onLoad中
  },

});