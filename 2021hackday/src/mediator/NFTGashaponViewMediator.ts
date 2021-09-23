class NFTGashaponViewMediator extends puremvc.Mediator {
	public static NAME: string = "NFTGashaponViewMediator";
	
	private parentView: egret.DisplayObjectContainer;
	private nFTGashaponView: NFTGashaponView;

	public constructor(parentView: egret.DisplayObjectContainer) {
		super(NFTGashaponViewMediator.NAME, null);
		this.parentView = parentView;
		this.initView();
	}

	public initView() {
		this.nFTGashaponView = new NFTGashaponView();
		this.parentView.addChild(this.nFTGashaponView);
		this.nFTGashaponView.initView();
	}

	public listNotificationInterests(): Array<any> {
		return ['START','FRIST'];
	}

	public handleNotification(notification: puremvc.INotification): void {
		let name = notification.getName();
		switch (name) {
			case 'START':
				console.log('command: ' + notification.getBody());
				this.facade.sendNotification(FristCommand.NAME,FristCommand.NAME);
				break;
			case 'FRIST':
				console.log('command: ' + notification.getBody());
				break;
		}
	}
}
