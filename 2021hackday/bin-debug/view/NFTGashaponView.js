var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NFTGashaponView = (function (_super) {
    __extends(NFTGashaponView, _super);
    function NFTGashaponView() {
        return _super.call(this) || this;
    }
    NFTGashaponView.prototype.initView = function () {
        this.skinName = "resource/eui_skins/NFTGashaponViewSkin.exml"; // 設定 exml skin
        this.leftUIGP.addEventListener(egret.TouchEvent.TOUCH_TAP, this.leftUIEnabled, this);
        this.rightUIGP.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rightUIEnabled, this);
        this.createDB();
    };
    NFTGashaponView.prototype.createDB = function () {
        var dragonbonesData = RES.getRes("Game_ske_json");
        var textureData1 = RES.getRes("Game_tex_json");
        var texture1 = RES.getRes("Game_tex_png");
        var egretFactory = dragonBones.EgretFactory.factory;
        egretFactory.parseDragonBonesData(dragonbonesData);
        egretFactory.parseTextureAtlasData(textureData1, texture1);
        var display = egretFactory.buildArmatureDisplay("Armature");
        this.gashaponGP.addChild(display);
        this.nftImg = new eui.Image;
        this.nftImg.source = "Award_01_png";
        var slot = display.armature.getSlot("Award");
        slot.display = this.nftImg;
        slot.invalidUpdate();
        this.nftImg.anchorOffsetX = this.nftImg.width / 2;
        this.nftImg.anchorOffsetY = this.nftImg.height / 2;
        display.animation.gotoAndPlayByFrame("Win", 1, 0);
    };
    NFTGashaponView.prototype.leftUIEnabled = function () {
        if (this.leftOnImg.visible) {
            this.leftOnImg.visible = false;
            this.leftOffImg.visible = true;
        }
        else {
            this.leftOnImg.visible = true;
            this.leftOffImg.visible = false;
        }
    };
    NFTGashaponView.prototype.rightUIEnabled = function () {
        if (this.rightOnImg.visible) {
            this.rightOnImg.visible = false;
            this.rightOffImg.visible = true;
        }
        else {
            this.rightOnImg.visible = true;
            this.rightOffImg.visible = false;
        }
    };
    return NFTGashaponView;
}(eui.Component));
__reflect(NFTGashaponView.prototype, "NFTGashaponView");
//# sourceMappingURL=NFTGashaponView.js.map