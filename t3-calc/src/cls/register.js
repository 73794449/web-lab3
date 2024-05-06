import ControllerUser from './controller/ControllerUser.js'
import UserModel from './model/UserModel.js';
import UserView from './view/UserView.js';

let userModel = new UserModel();
let userView = new UserView(userModel);

let controller = new ControllerUser(userModel, userView);



function API_REGISTER()
{
    controller.registerMe()
}