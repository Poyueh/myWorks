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
// TypeScript file
var FristCommand = (function (_super) {
    __extends(FristCommand, _super);
    function FristCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FristCommand.prototype.execute = function (notification) {
        // console.log(notification.getBody());
        var proxy = this.facade.retrieveProxy(DataProxy.NAME);
        proxy.setInfo(notification.getBody());
        this.sendNotification("FRIST", notification.getBody());
    };
    FristCommand.NAME = "FristCommand";
    return FristCommand;
}(puremvc.SimpleCommand));
__reflect(FristCommand.prototype, "FristCommand");
//# sourceMappingURL=FristCommand.js.map