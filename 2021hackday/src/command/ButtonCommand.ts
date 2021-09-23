// TypeScript file
class ButtonCommand extends puremvc.SimpleCommand
{
    public static NAME: string = "ButtonCommand";

    public execute(notification: puremvc.INotification): void
	{
        const proxy = this.facade.retrieveProxy(DataProxy.NAME) as DataProxy;
        proxy.setInfo(notification.getBody());
        this.sendNotification("TAP",notification.getBody());
    }
}