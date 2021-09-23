class NFTGashaponView extends eui.Component
{
	public bgImg: eui.Image;
	public leftOnImg: eui.Image;
	public leftOffImg: eui.Image;
	public rightOnImg: eui.Image;
	public rightOffImg: eui.Image;
	public leftUIGP: eui.Group;
	public rightUIGP: eui.Group;

	public gashaponGP: eui.Group; // 龍骨加進這

	private nftImg: eui.Image;

	public constructor()
	{
		super();
	}

	public initView(): void
	{
		this.skinName = "resource/eui_skins/NFTGashaponViewSkin.exml";// 設定 exml skin
		this.leftUIGP.addEventListener(egret.TouchEvent.TOUCH_TAP, this.leftUIEnabled, this);
		this.rightUIGP.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rightUIEnabled, this);
		this.createDB();
	}

	private createDB(): void
	{
		var dragonbonesData = RES.getRes("Game_ske_json");
		var textureData1 = RES.getRes("Game_tex_json");
		var texture1 = RES.getRes("Game_tex_png");

		let egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
		egretFactory.parseDragonBonesData(dragonbonesData);
		egretFactory.parseTextureAtlasData(textureData1, texture1);

		let display = egretFactory.buildArmatureDisplay("Armature");
		this.gashaponGP.addChild(display);

		this.nftImg = new eui.Image;
		this.nftImg.source = "Award_01_png";
		var slot = display.armature.getSlot("Award");
		slot.display = this.nftImg;
		slot.invalidUpdate();
		this.nftImg.anchorOffsetX = this.nftImg.width / 2;
		this.nftImg.anchorOffsetY = this.nftImg.height / 2;

		display.animation.gotoAndPlayByFrame("Win", 1, 0);
	}

	private leftUIEnabled() 
	{
		if (this.leftOnImg.visible)
		{
			this.leftOnImg.visible = false;
			this.leftOffImg.visible = true;
		} else
		{
			this.leftOnImg.visible = true;
			this.leftOffImg.visible = false;
		}
	}

	private rightUIEnabled() 
	{
		if (this.rightOnImg.visible)
		{
			this.rightOnImg.visible = false;
			this.rightOffImg.visible = true;
		} else
		{
			this.rightOnImg.visible = true;
			this.rightOffImg.visible = false;
		}
	}

}