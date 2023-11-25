/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx1795d235e535412b',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '43ccd681d9900eb5a6bcbe50ad74e6ed',

  PROVINCE: '上海',
  CITY: '上海',

 {{date.DATA}} 
城市：{{city.DATA}} 
天气：{{weather.DATA}} 
最低气温: {{min_temperature.DATA}} 
最高气温: {{max_temperature.DATA}} 
 
今天是77爱小胖的{{love_day.DATA}}天❤❤❤
{{birthday1.DATA}}
{{birthday2.DATA}}
 
双十一快到了~我想要买辆车：你的购物车(*^▽^*)
 
{{note_en.DATA}} 
{{note_ch.DATA}}
  USERS: [
    {
      // 想要发送的人的名字
      name: '77宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'od9Q16e92Fsz0V7SUSQm5m-SNNP8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'JxBfnjeXlZT8ttjQi2kWWM8AgzsIuDp2A5VYA-FBtB4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-26',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '77宝贝', year: '1998', date: '09-26',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相恋纪念日', year: '2022', date: '01-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 77爱小胖的日子
        { keyword: 'love_day', date: '2022-01-22' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'JxBfnjeXlZT8ttjQi2kWWM8AgzsIuDp2A5VYA-FBtB4',

  CALLBACK_USERS: [
    {
      name: '小胖子',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'od9Q16e92Fsz0V7SUSQm5m-SNNP8',
    }
  ],

}

module.exports = USER_CONFIG

