export default class ControllerUser {
    constructor(userModel,userView) {
        this.userModel = userModel;
        this.userView = userView;
    }

    async registerMe(base) {
        await this.userModel.register();
        if (this.userModel.status === 'Done')
            base.$router.push({ name: 'Login page' });
    }

    async loginMe(base) {
        await this.userModel.login();
        if (this.userModel.status === 'Login') 
            base.$router.push({ name: 'Profile page' });
    }

    async updateMe() {
        await this.userModel.select();
        this.userView.selectData();
    }

    async updatePasswordMe() {
        await this.userModel.update();
        this.userView.updateStatus();
    }
}