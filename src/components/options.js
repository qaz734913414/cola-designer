const cptOptions = {
    'element':{
        'cpt-button-option': {
            text: '按钮1', url: '', bgColor: '#409eff', textColor: '#fff',
            radius: 6,
        },
        'cpt-text-option': {
            text: '普通文本',
            url: '',
            textColor: '#4BB344',
            textSize: 30,
            fontWeight: 'bold',
            textLineHeight: 50,
            textFamily: '微软雅黑',
            textAlign: 'center',
            fontStyle:'normal',
            textDecoration:'none'
        },
        'cpt-input-option': {
            label: '姓名',
            placeholderValue: '请输入姓名',
            value: '',
            type: 'text',
            inputWidth: '150px',
            textAlign: 'center'
        },
        'cpt-image-option':{
            url:'https://cbu01.alicdn.com/img/ibank/O1CN016bJ3Hc26L0C9E6Nmw_!!3307277644-0-cib.220x220.jpg',
            fit:'fill',preview:false
        },
        'cpt-carousel-option':{
            trigger:'hover',
            imgUrls:[
                require('@/assets/readme/test.png'),
                require('@/assets/readme/options.png')
            ],
            fit:'cover'
        }
    },
    'echarts':{
        'cpt-chart-column-option':{
            chartTitle:'标题一',titleLeft:'center', titleTop:10, titleTextColor:'#fff',
            xLabelColor:'#0a7eea',xLineColor:'#fff',yLabelColor:'#0bd124',yLineColor:'#fff',
            yGridLineShow:false,yTickShow:true,
            barBgShow:false,barBorderRadius:5,barColor:'#0775eb',
            barWidth:24,
            xData:"Mon,Tue,Wed,Thu,Fri,Sat,Sun",
            yData:"120,200,150,80,70,110,130"
        }
    }
}
export default cptOptions
