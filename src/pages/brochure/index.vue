<template>
    <div class="main">
        <div class="booklist-wrap">
            <div class="booklist">
                <a href="javascript:;" class="item">
                    <div class="post-img">
                        <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a6b660acfa094609b378afd783a04523~tplv-k3u1fbpfcp-zoom-1.image" alt="">
                    </div>
                    <div class="info">
                        <div class="title">
                            <span class="presale">预售</span>
                            <span class="title-in">Vue 商城项目开发实战</span>
                        </div>
                        <div class="desc">
                            企业级大型电商系统，前后端分离商城实践，向全栈进发！
                        </div>
                        <div class="author">
                            <div class="author-info">
                                <a href="javascript:;">
                                   <div class="imgBox">
                                       <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a6b660acfa094609b378afd783a04523~tplv-k3u1fbpfcp-zoom-1.image" alt="">
                                   </div>
                                    <span class="nickname">我是十三</span>
                                    <span class="lv">lv3</span>
                                </a>
                            </div>
                            <div class="author-desc">
                                高级开发工程师
                            </div>
                        </div>
                        <div class="other">
                            <div class="price">
                                ￥49
                            </div>
                            <div class="message">
                                <div class="message-class">40小节</div>
                                <i class="point">·</i>
                                <div class="message-hot">567人已购买</div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="timeLimit">
                        <span class="gift"></span>
                        <span>限时优惠价<i>24.50</i>元</span>
                    
                        <span>倒计时<em>0</em>天<em>02:28:30:02</em></span>
                    </div> -->
                </a>
            </div>
            <!-- 右侧展示卡片 -->
            <div class="sticky-section">
                <div class="announcement">
                    <div class="imgBox">
                        <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a6b660acfa094609b378afd783a04523~tplv-k3u1fbpfcp-zoom-1.image" alt="">
                    </div>
                    <span class="announcement-content">
                        小册下线分销提醒公告
                    </span>
                </div>       
                <div class="section">
                    <div class="slogin">
                        <div class="title">掘金小册是什么?</div>
                        <div class="desc">一个小篇幅、高浓度、成体系、有收益的技术学习平台</div>
                    </div>
                    <!-- <div class="wechat-qr">
                        <div class="title">关注公众号 领取优惠码</div>
                        <div class="imgBox">
                            <img src="" alt="">
                        </div>
                    </div> -->
                </div>      
            </div>
        </div>

    </div>
</template>
<script>
export default {
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.main{
    width: 100%;
    .booklist-wrap{
        width: 960px;
        margin: 50px auto;
        .booklist{
            box-sizing: border-box;
            padding: 25px;
            width: 700px;
            background-color: #fff;
           box-shadow: 0 1px 3px 0 rgba(4,5,13,.23);
            a{
                text-decoration: none;
                color: #333;

             }
            .item{
                width: 100%;
                display: flex;
                .post-img{
                    width: 100px;
                    height: 140px;
                    box-shadow: 2px 5px 10px rgba(0,0,0,.3);
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }  
                .info{
                    margin-left: 22px;
                    height: 140px;
                    .title{
                        .presale{
                            display: inline-block;
                            height: 20px;
                            line-height: 20px;
                            background-color: #ed7b11;
                            font-size: 12px;
                            padding: 0 6px;
                            margin-top: -3px;
                            color: #fff;
                            border-radius: 2px;
                            margin-right: 8px;
                            vertical-align: middle;
                        }
                        .title-in{
                            font-size: 20px;
                            font-weight: 400;
                        }
                    }
                    .desc{
                        margin-top: 5px;
                        line-height: 20px;
                        height: 20px;
                        font-size: 14px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        color: #71777c;
                    }
                    .author{
                        height: 26px;
                        margin: 6px 0;
                        line-height: 26px;
                        .author-info{
                            display: inline-block;
                            .imgBox{
                            display: inline-block;
                            width: 26px;
                            height: 26px;
                            border-radius: 50%;
                            overflow: hidden;
                            margin-right: 10px;
                            vertical-align: middle;
                            img{
                                width: 100%;
                                height: 100%;
                             
                            }
                        }
                        span{
                            font-size: 12px;
                        }
                        .lv{
                            width: 23px;
                            height: 14px;
                            background-color: #007fff;
                            color: #fff;
                        }
                        .nickname{
                            font-size: 15px;
                            color: #000;
                            margin-right: 5px;
                        }
                        }                    
                        .author-desc{
                            display: inline-block;
                            color: #71777c;
                            margin: 0 10px;
                            font-size: 14px;
                        }
                      
                    }
                    .other{
                        display: flex;
                        justify-items: center;
                        align-items: center;
                        .price{
                            color: #ed7b11;
                            font-size: 18px;
                            margin-right: 15px;

                        }
                        .message{
                            display: flex;
                            color: #71777c;
                            .point{
                                margin: 0 3px;
                            }
                        }
                    }
                }             
            }
        }
        .sticky-section{
            width: 240px;
            position: fixed;
            top: 50px;
            left: 50%;
            transform: translateX(250px);
            
            .announcement{
                font-size: 12px;
                box-shadow: 0 1px 3px 0 rgba(4,5,13,.23);
                display: flex;
                padding: 15px 16px;
                box-sizing: border-box;
                width: 100%;
                height: 62px;
                align-items: center;
                background-color: #fff;
                .imgBox{
                    width: 30px;
                    height: 32px;
                    vertical-align: middle;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .announcement-content{
                    font-size: 14px;
                    margin-left: 10px;
                }
            }
            .section{
                width: 240px;
                margin-top: 10px;
                background-color: #fff;
                box-shadow: 0 1px 3px 0 rgba(4,5,13,.23);
                .slogin{
                    box-sizing: border-box;
                    width: 100%;
                    padding: 15px 16px;
                    font-size: 15px;
                    .title{
                        color: #000;
                    }
                    .desc{
                        color: #646464;
                        font-size: 14px;
                        margin-top: 8px;
                    }
                }
            }
           
        }
    }
}
</style>