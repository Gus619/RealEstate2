(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36bb6248"],{1576:function(e,t,i){},"19a8":function(e,t,i){"use strict";i("b42d")},"213d":function(e,t,i){},"41d0":function(e,t,i){"use strict";i("213d")},ad1f:function(e,t,i){"use strict";i("1576")},b42d:function(e,t,i){},f507:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"summary-wrapper",on:{mouseenter:e.handleMouseEnter,mouseleave:e.handleMouseLeave}},[i("div",{staticClass:"summary-title"},[i("span",[e._v(e._s(e.$t("summary")))]),e.enableRedesignLayout?e._e():i("zm-button",{directives:[{name:"show",rawName:"v-show",value:e.mouseHover,expression:"mouseHover"}],ref:"copyBtn",staticClass:"copy-btn",attrs:{ghost:"",disabled:e.disableCopyBtn,icon:"zm-icon-copy","aria-label":"Copy Summary"},on:{click:function(t){return t.stopPropagation(),e.handleCopyToClipboard(t)}}}),e.canSummaryEdit?i("zm-button",{directives:[{name:"show",rawName:"v-show",value:e.mouseHover,expression:"mouseHover"}],staticClass:"edit-btn",attrs:{ghost:"",icon:"zm-icon-edit","aria-label":"Edit Summary"},on:{click:e.handleEditSummary}}):e._e()],1),[e.enableRedesignLayout?i("summary-content",{attrs:{content:e.summary}}):i("text-multiline-ellipsis",{attrs:{content:e.summary,"font-size":14,"line-height":20,"max-lines":3,"view-all-text":e.viewAllText,"view-less-text":e.viewLessText}})],e.canSummaryEdit?i("summary-edit",{attrs:{"show-summary-edit":e.showEditDialog,overallSummary:e.summary},on:{"update:showSummaryEdit":function(t){e.showEditDialog=t},"update:show-summary-edit":function(t){e.showEditDialog=t},close:function(t){e.showEditDialog=!1}}}):e._e()],2)},a=[],n=i("de79"),o=(i("2d6d"),i("ef1f"),i("ef14"),i("cfce"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"out-wrapper",style:e.cssVars},[i("div",{ref:"hidden",staticClass:"rec-hide"},[e._v(e._s(e.content))]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.showOriginal,expression:"showOriginal"}],ref:"original",staticClass:"original"},[i("div",[e._v(e._s(e.content))])]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.showNested,expression:"showNested"}],staticClass:"wrapper"},[i("div",{staticClass:"text",class:{"show-all":e.isShowAll}},[i("zm-button",{staticClass:"btn",attrs:{ghost:"",tabindex:"0","aria-label":e.ariaText},on:{click:e.handleClick}},[e._v(" "+e._s(e.btnText)+" ")]),e._v(e._s(e.content)+" ")],1)])])}),r=[],l=(i("e94e"),i("e782")),u={name:"TextMultilineEllipsis",data:function(){return{showOriginal:!1,showNested:!1,isShowAll:!1}},props:{content:{type:String,default:""},fontSize:{type:Number,default:14},lineHeight:{type:Number,default:20},maxLines:{type:Number,default:3},viewAllText:{type:String,default:"View All"},viewLessText:{type:String,default:"View Less"}},computed:{cssVars:function(){return{"--fontSize":this.fontSize+"px","--lineHeight":this.lineHeight+"px","--maxTextHeight":this.lineHeight*this.maxLines+"px","--textBeforeHeight":"calc(100% - ".concat(this.lineHeight,"px)"),"--btnHeight":this.lineHeight-2+"px"}},btnText:function(){return this.isShowAll?this.viewLessText:this.viewAllText},ariaText:function(){return this.isShowAll?"View Less Summary":"View All Summary"}},mounted:function(){Object(l["a"])(this.$el.children[0],this.handleShow),this.handleShow()},beforeDestroy:function(){Object(l["b"])(this.$el.children[0],this.handleShow)},methods:{handleShow:function(){var e=this;this.$nextTick((function(){var t=e.$refs.hidden.offsetHeight;t>=e.lineHeight*(e.maxLines+1)?(e.showOriginal=!1,e.showNested=!0):(e.showOriginal=!0,e.showNested=!1)}))},handleClick:function(){this.isShowAll=!this.isShowAll}}},m=u,c=(i("19a8"),i("2be6")),h=Object(c["a"])(m,o,r,!1,null,"7c5c9aba",null),d=h.exports,v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"summary-content-wrapper",on:{mouseenter:e.handleMouseEnter,mouseleave:e.handleMouseLeave}},[i("div",{staticClass:"summary-content-outer"},[i("div",{ref:"summaryContent",staticClass:"content-base",class:{"now-expanded":e.isExpand}},[e._v(e._s(e.content))]),e.isExpand?i("div",{staticClass:"expanded"},[e._v(e._s(e.content))]):e._e()]),i("div",{ref:"btnGroupWrapper",staticClass:"btn-group-wrapper"},[i("div",{staticClass:"liner-fill"}),i("div",{staticClass:"btn-group"},[e.showViewSwitch||e.isExpand?i("zm-button",{attrs:{size:"mini",ghost:"","aria-label":e.expandText},on:{click:e.viewSwitch}},[e._v(" "+e._s(e.expandText)+" ")]):e._e(),i("zm-button",{ref:"summaryCopyBtn",attrs:{size:"mini",ghost:"","aria-label":" Copy Summary",disabled:e.disableCopyBtn},on:{click:e.copySummary}},[e._v(" "+e._s(" Copy Summary")+" ")])],1)])])},p=[],w=i("3e2c"),f=i("8b55"),y={name:"SummaryContent",data:function(){return{disableCopyBtn:!1,showViewSwitch:!1,isExpand:!1}},props:{content:{type:String,default:""}},computed:{expandText:function(){return this.isExpand?this.$t("view_less"):this.$t("view_all")}},mounted:function(){Object(l["a"])(this.$refs.summaryContent,this.handleShowViewSwitch),this.handleShowViewSwitch()},beforeDestroy:function(){Object(l["b"])(this.$refs.summaryContent,this.handleShowViewSwitch)},watch:{content:function(){this.handleShowViewSwitch()}},methods:{viewSwitch:function(){this.isExpand=!this.isExpand},copySummary:function(){var e=Object(f["g"])(this.content||"");if(e){this.disableCopyBtn=!0;var t=this.$t("copy_with_pass");this.$message.success(t),this.restoreInThreeSeconds()}else{var i=f["h"]?"Command + C":"Ctrl + C",s="Error!"+this.$t("dialog_message_copy_notice",[i]);this.$message.error(s)}},restoreInThreeSeconds:function(){var e=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){var t;e.disableCopyBtn=!1;var i=null===(t=e.$refs.summaryCopyBtn)||void 0===t?void 0:t.$el;i&&i.focus()}),3e3)},handleShowViewSwitch:function(){var e=this;this.$nextTick((function(){var t=e.$refs.summaryContent;if(t){var i,s,a=null===(i=e.$refs.summaryContent)||void 0===i?void 0:i.clientHeight,n=null===(s=e.$refs.summaryContent)||void 0===s?void 0:s.scrollHeight;a<n?e.showViewSwitch=!0:(e.showViewSwitch=!1,e.isExpand=!1)}}))},handleMouseEnter:function(){var e=this.$refs.btnGroupWrapper;Object(w["a"])(e,"show-btn")},handleMouseLeave:function(){var e=this.$refs.btnGroupWrapper;Object(w["c"])(e,"show-btn")}}},b=y,S=(i("41d0"),Object(c["a"])(b,v,p,!1,null,"1f46a464",null)),g=S.exports,x=i("9ce4"),C=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("zm-dialog",{attrs:{visible:e.showDialog,"aria-label":"Edit Summary","aria-labelledby":"editSummaryTitle","aria-describedby":"editSummaryTitle",title:e.$t("edit_summary")},on:{"update:visible":function(t){e.showDialog=t},open:e.dialogOpen}},[[i("zm-input",{staticClass:"summary-edit-input",attrs:{type:"textarea",autosize:{minRows:13,maxRows:13},label:"summary"},model:{value:e.newOverallSummary,callback:function(t){e.newOverallSummary=t},expression:"newOverallSummary"}}),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("zm-button",{attrs:{type:"primary",loading:e.saveLoading,disabled:e.isSaveDisabled},on:{click:e.handleSave}},[e._v(" "+e._s(e.$t("save"))+" ")]),i("zm-button",{attrs:{disabled:e.saveLoading},on:{click:function(t){e.showDialog=!1}}},[e._v(" "+e._s(e.$t("cancel"))+" ")])],1)]],2)},_=[],E=(i("b55a"),i("365c")),$={name:"SummaryEdit",props:{showSummaryEdit:Boolean,overallSummary:{type:String,default:""}},data:function(){return{saveLoading:!1,newOverallSummary:this.overallSummary}},computed:Object(n["a"])(Object(n["a"])({},Object(x["e"])(["recordMeetId","fileStartTime"])),{},{showDialog:{get:function(){return this.showSummaryEdit},set:function(e){this.$emit("update:showSummaryEdit",e)}},isSaveDisabled:function(){var e;return!(null!==(e=this.newOverallSummary)&&void 0!==e&&e.trim())}}),methods:Object(n["a"])(Object(n["a"])({},Object(x["d"])({updateOverallSummary:"UPDATE_OVERALL_SUMMARY"})),{},{dialogOpen:function(){this.newOverallSummary=this.overallSummary},handleSave:function(){var e,t=this;this.saveLoading=!0;var i=null===(e=this.newOverallSummary)||void 0===e?void 0:e.trim();Object(E["y"])({overallSummary:i,meetingId:this.recordMeetId,fileStartTime:this.fileStartTime}).then((function(e){t.updateOverallSummary(i),t.$message({message:t.$t("summary_updated"),type:"success",duration:5e3})})).catch((function(e){var i=e.message?e.message:t.$t("summary_updated_error");t.$message({type:"error",message:i,duration:2e3})})).finally((function(){t.saveLoading=!1,t.showDialog=!1}))}})},O=$,T=Object(c["a"])(O,C,_,!1,null,"4a4e307f",null),j=T.exports,L={name:"HeadSummary",components:{TextMultilineEllipsis:d,summaryContent:g,SummaryEdit:j},data:function(){return{disableCopyBtn:!1,isDialogEdit:!1,showEditDialog:!1,mouseHover:!1}},computed:Object(n["a"])(Object(n["a"])({},Object(x["e"])(["smartChapters","hasPermissionEdit","hasOverallSummary","overallSummary","enableRedesignLayout"])),{},{summary:function(){if(this.hasOverallSummary)return this.overallSummary||this.$t("no_summary");var e=this.smartChapters?this.smartChapters.filter((function(e){return e.chapter})):[];return e.map((function(e){return e.chapter})).join("\n")||this.$t("no_summary")},viewAllText:function(){return this.$t("view_all")},viewLessText:function(){return this.$t("view_less")},canSummaryEdit:function(){return this.hasPermissionEdit&&this.hasOverallSummary}}),methods:{handleCopyToClipboard:function(){var e=Object(f["g"])(this.summary||"");if(e){this.disableCopyBtn=!0;var t=this.$t("copy_with_pass");this.$message.success(t),this.restoreInThreeSeconds()}else{var i=f["h"]?"Command + C":"Ctrl + C",s="Error!"+this.$t("dialog_message_copy_notice",[i]);this.$message.error(s)}},restoreInThreeSeconds:function(){var e=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){var t;e.disableCopyBtn=!1;var i=null===(t=e.$refs.copyBtn)||void 0===t?void 0:t.$el;i&&i.focus()}),3e3)},handleEditSummary:function(){this.isDialogEdit=!0,this.showEditDialog=!0},handleMouseEnter:function(){this.mouseHover=!0},handleMouseLeave:function(){this.mouseHover=!1}}},H=L,z=(i("ad1f"),Object(c["a"])(H,s,a,!1,null,"4ed5f012",null));t["a"]=z.exports}}]);