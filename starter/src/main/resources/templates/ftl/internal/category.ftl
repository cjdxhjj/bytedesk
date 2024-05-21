
<!DOCTYPE html>
<html lang="en-gb" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>${category.name!''} - 文章分类 - ${knowledgebase.headline!'帮助中心'} - ${knowledgebase.name!'萝卜丝'}</title>

    <#include "../../../common/template/header.ftl"/>

</head>

<body>

    <#include "../../../common/template/toplink.ftl"/>

    <div class="uk-section section-sub-nav uk-padding-remove">
        <div class="uk-container">
            <div uk-grid>
                <div class="uk-width-2-3@m">
                    <ul class="uk-breadcrumb uk-visible@m">
                        <li><a href="/">首页</a></li>
                        <li><span href="" id="supportCategoryName">${category.name!''}</span></li>
                    </ul>
                </div>
                <div class="uk-width-1-3@m">
                    <div class="uk-margin">
                        <form class="uk-search uk-search-default">
                            <a href="javascript:void(0)" class="uk-search-icon-flip" uk-search-icon onclick="searchContent()"></a>
                            <input id="supportAdminUid" name="uid" type="text" style="display:none"/>
                            <input id="supportSearch" class="uk-search-input" type="search" 
                                autocomplete="off" placeholder="搜索" onkeyup="onKeyUp(arguments[0] || window.event)">
                        </form>
                    </div>
                </div>
            </div>
            <div class="border-top"></div>
        </div>
    </div>

    <div class="uk-section uk-section-small uk-padding-remove-bottom section-content">
        <div class="uk-container">
            <div class="uk-grid-medium" uk-grid>

                <!-- 右侧详情 -->
                <div class="uk-width-3-4@m uk-flex-last@m">
                    <h1 id="supportCategoryName2">${category.name!''}</h1>
                    <!-- <p class="uk-text-lead uk-margin-medium-bottom">Managing your account, creating new users, security and exporting data</p> -->
                    <ul id="supportCategoryArticle" class="uk-list list-category link-icon-right">
                        <!-- <li>
                            <h3><a href="article">Manage payment settings and invoices</span></a></h3>
                        </li> -->
                        <#list articles as article>
                            <li>
                                <h3><a href="article_${article.aid}.html" target="_blank">${article.title!''}</a></h3>
                            </li>
                        </#list>
                    </ul>
                    <!-- 翻页 -->
                    <ul class="uk-pagination uk-margin-medium-top" uk-margin>
                        <li><a href="#"><span class="uk-margin-small-right" uk-pagination-previous></span> 上一篇</a></li>
                        <li class="uk-margin-auto-left"><a href="#">下一篇 <span class="uk-margin-small-left" uk-pagination-next></span></a></li>
                    </ul>
                </div>

                <!-- 左侧列表 -->
                <div class="uk-width-1-4@m text-dark sidebar">
                    <h3>类别</h3>
                    <ul id="supportCategory" class="uk-list uk-list-large uk-margin-medium-bottom">
                        <!-- <li><a href="#">Getting Started</a></li> -->
                        <!-- <li><a class="uk-text-bold" href="#">Account Management</a> <span uk-icon="icon: chevron-right"></span></li> -->
                    </ul>
                    <h3>相关文章</h3>
                    <ul class="uk-list uk-list-large">
                        <li>暂无</li>
                        <!-- <li><a href="article">Setting up attributes</a></li> -->
                        <!-- <li><a href="article">Shipping Options Page</a></li> -->
                    </ul>
                </div>

            </div>
        </div>
    </div>

    <#include "../../../common/template/footer.ftl"/>

    <#include "../../../common/template/offcanvas.ftl"/>

</body>

</html>
