<template>
  <div class="app-container home">
    <el-row :gutter="20">
      <el-col :sm="24" :lg="24">

      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :sm="24" :lg="12" style="padding-left: 20px">
        <h2>元AI智能问答系统<span>v{{ version }}</span></h2>
        <p>
          全面智能交互，实现高效沟通：元AI智能问答系统是一个全新的对话系统，可以在微信小程序、安卓应用程序和网页上使用，为用户提供高效便捷的智能交互服务。基于OpenAI，NewBing和文心一言等大模型开发，元AI实现了更准确的语义理解和全面的知识储备。用户与元AI之间的沟通更加自然顺畅，解决问题更加高效准确。
        </p>
        <p>
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-cloudy"
            plain
          >
            <a href="https://gitee.com/e0cia" target="_blank" style="text-decoration: none">
              源码链接
            </a>

          </el-button
          >
          <el-button
            size="mini"
            icon="el-icon-s-home"
            plain
          >
            <a href="https://ext.dcloud.net.cn/plugin?id=11009" target="_blank" style="text-decoration: none">
              源码链接
            </a>
          </el-button>
        </p>
        <blockquote class="text-warning" style="font-size: 14px">
          <div>
            <el-link
              href="https://space.bilibili.com/342298458/channel/series"
              type="primary"
              target="_blank"
            >1.详细视频教程（点击即可进入）
            </el-link></br>
            <el-link
              href="https://yaiwiki.likesrt.com/archives/no1.html"
              type="primary"
              target="_blank"
            >2.文档教程（点击即可进入）
            </el-link>
          </div>
          <h4 style="margin-top: 20px">
            <el-link
              type="warn"
              target="_blank"
            >注意 :</br> 建议加入交流群,因为搭建过程中有很多的注意事项会在交流群（qq群:575451625）发布。,如果搜不到就扫描下面的二维码
            </el-link>
          </h4>
        </blockquote>
        <div style="margin-top: 20px;color: #000000"></div>

        <el-card class="box-card">
          <h3><b>您认真查看使用注意事项:</b></h3>
          <p>
          <p>1. 本程序是开源软件，使用者有权利任意下载、安装、复制和发布本程序。但本程序不对用户行为负任何法律责任和承担任何责任。</p>
          <p>2. 本程序采用MIT许可证，在遵守以下条件的情况下，其他人可以在他们的商业产品中使用你的代码：</p>
          （1）在软件和文档中，必须保留原版权声明和许可声明；</BR>
          （2）在修改的代码中，也必须包含原版权和许可声明；</BR>
          （3）如果出现在软件和文档中，必须包含原版权和许可声明。</BR>
          <p>3. 使用者必须明确知悉MIT许可证下的软件是"按原样"提供的，没有任何形式的明示或暗示的保证，包括但不限于适销性、适用性和不侵权。</p>
          <p>4. 因此，如果该软件出现任何损害，包括但不限于商业利润损失、资产损失等，都由使用者承担。</p>
          <p> 5. 最后，该软件的授权人不承担任何形式的责任。</p>
          使用本程序代表同意并遵守上述免责声明，并承担因使用本程序而产生的所有风险和后果，如不同意本声明，请勿使用本程序。
          </p>
        </el-card>
      </el-col>
    </el-row>
    <el-divider/>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <span>联系信息</span>
          </div>
          <div class="body">
            <p>
              <i class="el-icon-user-solid"></i> QQ群：
              <a href="https://qm.qq.com/cgi-bin/qm/qr?k=r9wUrNxH5gX-EdMMdN4cVOt8MyQV2MnL&jump_from=webapi&authKey=UHRma7Iwg1U6UtlS9tWVEfhcU0WaNJuwRW3H1NHNDQjIkIvCpjC/RdNwFaMjxF3W" target="_blank">
              575451625</a>
           <div>
            <el-image src="https://yuan-ai.oss-cn-beijing.aliyuncs.com/qqgroup.jpg"></el-image>
          </div>
            </p>
          </div>
          <div class="body">
            <p>
              <i class="el-icon-user-solid"></i> WX群：
            <div>
              <el-image src="https://yuan-ai.oss-cn-beijing.aliyuncs.com/wxgroup.png"></el-image>
            </div>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <span>更新日志</span>
          </div>
          <el-collapse accordion>

            <el-collapse-item title="v4.0.0(大更新)">
              <ol>
                <li>角色选择</li>
                <li>优化UI和角色预设</li>
                <li>增加stream流式传输</li>
                <li>集成模型包括gpt3.5（初版大更新gpt4、绘画模型、文心一言等暂时没有加、下个版本就会加入）</li>
                <li>历史对话记录</li>
                <li>我的问询记录</li>
                <li>支持三方接口</li>
                <li>增加会员中心</li>
                <li>展示剩余次数</li>
                <li>增加次数和时间两种计费模式,后台可行性选择</li>
                <li>增加充值（目前仅支持充值卡重置）功能</li>
                <li>分享增加次数功能</li>
                <li>是否计费对话、是否计费询问、公告显示等均可自定义开关</li>
                <li>后台自行添加模型分类、模型名称、设定语等等</li>
                <li>所有后台配置页面化</li>
                <li>用户管理</li>
                <li>在线用户</li>
                <li>登录日志</li>
                <li>后台批量生成激活码</li>
                <li>激活码一键导出</li>
                <li>后台key统一管理</li>
                <li>key自动轮询</li>
                <li>使用的为微信官方违禁词，可自行添加违禁词</li>

              </ol>
            </el-collapse-item>

            <el-collapse-item title="v3.0.0">
              <ol>
                <li>问答类型,一问一答模式</li>
                <li>对话模式,和机器人消息对话</li>
                <li>对对话内容做了敏感词检测</li>
              </ol>
            </el-collapse-item>

            <el-collapse-item title="v1.0.1">
              <ol>
                <li>教程视频:B站视频教程-小白可搭建</li>
              </ol>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <span>捐赠支持</span>
          </div>
          <div class="body">
            <img
              src="https://yuan-ai.oss-cn-beijing.aliyuncs.com/juanzeng.jpg"
              alt="捐赠（稍后添加）"
              width="100%"
            />
            <span style="display: inline-block; height: 30px; line-height: 30px"
            >你可以请作者喝杯咖啡表示鼓励</span
            >
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import md5 from 'js-md5';
import axios from 'axios'
export default {
  name: 'Index',
  data() {
    return {
      // 版本号
      version: '4.0.0',
    }
  },
  created() {

  },
  methods: {
    goTarget(e){
      window.location.href=e;
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }

  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }

  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
}
</style>

