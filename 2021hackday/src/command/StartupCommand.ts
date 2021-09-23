// TypeScript file
class StartupCommand extends puremvc.SimpleCommand
{
    public static NAME: string = "StartupCommand";

    public execute(notification: puremvc.INotification): void
	{
        // console.log(notification.getBody());
        const proxy = this.facade.retrieveProxy(DataProxy.NAME) as DataProxy;
        proxy.setInfo(notification.getBody());
        this.sendNotification("START",notification.getBody());
    }
}