// TypeScript file
class FristCommand extends puremvc.SimpleCommand
{
    public static NAME: string = "FristCommand";

    public execute(notification: puremvc.INotification): void
	{
        // console.log(notification.getBody());
        const proxy = this.facade.retrieveProxy(DataProxy.NAME) as DataProxy;
        proxy.setInfo(notification.getBody());
        this.sendNotification("FRIST",notification.getBody());
    }
}