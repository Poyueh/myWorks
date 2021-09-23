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
var NFTGashaponViewMediator = (function (_super) {
    __extends(NFTGashaponViewMediator, _super);
    function NFTGashaponViewMediator(parentView) {
        var _this = _super.call(this, NFTGashaponViewMediator.NAME, null) || this;
        _this.parentView = parentView;
        _this.initView();
        return _this;
    }
    NFTGashaponViewMediator.prototype.initView = function () {
        this.nFTGashaponView = new NFTGashaponView();
        this.parentView.addChild(this.nFTGashaponView);
        this.nFTGashaponView.initView();
    };
    NFTGashaponViewMediator.prototype.listNotificationInterests = function () {
        return ['START', 'FRIST'];
    };
    NFTGashaponViewMediator.prototype.handleNotification = function (notification) {
        var name = notification.getName();
        switch (name) {
            case 'START':
                console.log('command: ' + notification.getBody());
                this.facade.sendNotification(FristCommand.NAME, FristCommand.NAME);
                break;
            case 'FRIST':
                console.log('command: ' + notification.getBody());
                break;
        }
    };
    NFTGashaponViewMediator.NAME = "NFTGashaponViewMediator";
    return NFTGashaponViewMediator;
}(puremvc.Mediator));
__reflect(NFTGashaponViewMediator.prototype, "NFTGashaponViewMediator");
//# sourceMappingURL=NFTGashaponViewMediator.js.map