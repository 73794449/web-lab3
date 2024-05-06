export default class ControllerUser {
    constructor(userModel,userView) {
        this.userModel = userModel;
        this.userView = userView;
    }

    registerMe(base) {
        this.userModel.register();
        if (this.userModel.status === 'Done')
            base.$router.push({ name: 'Login page' });
        else
            this.userView.registerStatus();
    }

    loginMe(base) {
        this.userModel.login();
        if (this.userModel.status === 'Login') 
            base.$router.push({ name: 'Profile page' });
        else
            this.userView.loginStatus();
    }

    updateMe() {
        this.userModel.select();
        this.userView.selectData();
    }

    updatePasswordMe() {
        this.userModel.update();
        this.userView.updateStatus();
    }
}