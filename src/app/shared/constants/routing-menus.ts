export class RoutingMenus {

    public SEPARATOR:string = "/"

    public HOME:string = this.SEPARATOR + "home";
    public ADMIN:string = this.SEPARATOR + "admin";
    public CONTACT:string = this.SEPARATOR + "contact";

    public MEALCONFIG:string = this.ADMIN + this.SEPARATOR + "mealConfig";
    public LOCATIONCONFIG:string = this.ADMIN + this.SEPARATOR + "locationConfig";
    public MENUCONFIG:string = this.ADMIN + this.SEPARATOR + "menuConfig";

    public ORDERHISTORY:string = this.ADMIN + this.SEPARATOR + "orderHistory";
    public TODAYORDER:string = this.ADMIN + this.SEPARATOR + "todayOrder";
    public PAYMENTHISTORY:string = this.ADMIN + this.SEPARATOR + "paymentHistory";
}