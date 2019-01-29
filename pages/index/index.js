const app = getApp();
const jkhtbh = []
const preventTurn = () => {
  my.alert({title:'提示',content:'敬请期待...'})
}
const preventTurn1 = (path) => {
if(path =='../dkxx/dkxx'){
  if(jkhtbh.length>1){
    my.showActionSheet({
      title: '借款合同编号',
      items: jkhtbh,
      cancelButtonText: '取消',
      success: (res) => {
        if(res.index!=-1){
           app.setJkhtbh(jkhtbh[res.index])
           my.navigateTo({ url: path })  
        }
      },
    });
   }else{my.navigateTo({ url: path })} 
 }else{my.navigateTo({ url: path })}
}
const basicContainers1 = [
  {
    name: '缴存信息',
    thumb: '/image/icon/09.png',
    path: '../jczqxx/jczqxx',
  },
  {
    name: '贷款信息',
    thumb: '/image/icon/01.png',
    path: '../dkxx/dkxx',
  },
];
const basicContainers = [
   {
    name: '我要提取',
    thumb: '/image/icon/02.png',
    path: false,
  },
   {
    name: '我要贷款',
    thumb: '/image/icon/03.png',
    path: false,
  },
   {
    name: '我要还款',
    thumb: '/image/icon/04.png',
    path: false,
  },
  {
    name: '冲还贷签约',
    thumb: '/image/icon/05.png',
    path: false,
  },
];
let basicComponentList = [
  {
    type: '信息查询',
    list: basicContainers1,
  },
  {
    type: '业务办理',
    list: basicContainers,
  },
 
];

let grzhye1;
Page({
   data: {
    grzhye:0,
    grzh:'',
    grzhzt:'',
    flag:true,
    basicComponentList,
     array:{
       grzhye:[],
       grzhzt:[],
       grzh:[]
     },
     indexgrzh : 0
  },
   preventTurn(event){
     const path = event.currentTarget.dataset.index
     path?preventTurn1(path): preventTurn()
   },
   gjjxxcx(){
    my.navigateTo({ url: '../zhxx/zhxx' });
   },
  tapName(event) {
    if(this.data.flag){
      this.setData({grzhye:"*****"});
    }else{
      this.setData({grzhye:app.fmoney(grzhye1)});
    }
    this.setData({
      flag:!this.data.flag
    })
  },
  onLoad() { 
    my.httpRequest({
      url: 'https://api.sjgjj.cn/app-web/personal/public/gjjdkjbxxcx.service',
      method: 'POST',
      headers: {
            "Content-Type": "application/json",
            "citycode":"C22040"
          },
      data: {
        appid: "20170517000101",
        citybm:"C22040CS",
        zjbzxbm:"C22040CS",
        sign:"SYWDJSKI8UYH7D7FKIUJNE45IJHYRKJ0",
         xingming:"胡建文",
       	 zjhm:"220402197604300811"
       // xingming:app.data.xingming,
        //zjhm:app.data.zjhm
      },
      dataType: 'json',
      contentType : 'application/json;charset=UTF-8', //contentType很重要    
      success: (res) => {
        console.log(res);
        grzhye1 = res.data.data[0].gjjxx[0].grzhye       
        this.setData({ 
          grzhye: app.fmoney(grzhye1),
          grzh:res.data.data[0].gjjxx[0].grzh,
          grzhzt:res.data.data[0].gjjxx[0].grzhzt
        }) ;
        app.setGrzh(res.data.data[0].gjjxx[0].grzh);
        app.setJkhtbh(res.data.data[0].dkxx[0].jkhtbh);
        for(var i=0;i<res.data.data[0].dkxx.length;i++){
          jkhtbh[i]=res.data.data[0].dkxx[i].jkhtbh
        }
       console.log(res.data.data[0].gjjxx.length);
        for(var i=0;i<res.data.data[0].gjjxx.length;i++){
          this.$spliceData({"array.grzh": [0, 0,res.data.data[0].gjjxx[i].grzh]});
          this.$spliceData({"array.grzhzt": [0, 0,res.data.data[0].gjjxx[i].grzhzt]});
          this.$spliceData({"array.grzhye": [0, 0,res.data.data[0].gjjxx[i].grzhye]});
        }
      }
    });
  },
  load: (that)=>{    
    my.httpRequest({
      url: 'https://api.sjgjj.cn/app-web/personal/public/gjjdkjbxxcx.service',
      method: 'POST',
      headers: {
            "Content-Type": "application/json",
            "citycode":"C22040"
          },
      data: {
        appid: "20170517000101",
        citybm:"C22040CS",
        zjbzxbm:"C22040CS",
        sign:"SYWDJSKI8UYH7D7FKIUJNE45IJHYRKJ0",
         xingming:"胡建文",
       	 zjhm:"220402197604300811"
        //xingming:app.data.xingming,
        //zjhm:app.data.zjhm
      },
      dataType: 'json',
      contentType : 'application/json;charset=UTF-8', //contentType很重要    
      success: (res) => {
        console.log(res);
        grzhye1 = res.data.data[0].gjjxx[0].grzhye       
        that.setData({ 
          grzhye: app.fmoney(grzhye1),
          grzh:res.data.data[0].gjjxx[0].grzh,
          grzhzt:res.data.data[0].gjjxx[0].grzhzt
        });  
        app.setGrzh(res.data.data[0].gjjxx[0].grzh)
        app.setJkhtbh(res.data.data[0].dkxx[0].jkhtbh)
      }
    });
  },
  onPullDownRefresh(){
    //刷新
      this.load(this);
      my.stopPullDownRefresh();
    },
  bindPickerChange(e){
    console.log("选择下标：",e.detail.value);
    let i =e.detail.value;
    console.log("array中数据",this.data.array);
    this.setData({
         // grzhye:app.fmoney(this.data.array.grzhye[i] ),
          grzh:this.data.array.grzh[i] ,
          grzhzt:this.data.array.grzhzt[i] ,
    });
     grzhye1 =app.fmoney(this.data.array.grzhye[i] );
     app.setGrzh(this.data.array.grzh[i])
     //app.setJkhtbh(res.data.data[0].dkxx[0].jkhtbh)
  },
    
})
