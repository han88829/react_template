import { observable, action, useStrict } from 'mobx';
import RouteData from './RouteData';

useStrict(true);

class store {
    @observable routeKey = [];
    @observable parent = [{ name: "首页", path: "/app" }];
    @observable selectedKeys = "1";
    @observable openKeys = ["user1"];
    @observable loading = false;
    @action addKey = (data, parentData, props) => {
        let path = window.location.hash.replace('#', '');
        if (!data) {
            if (path !== parentData.path) {
                props.history.push(parentData.path);
            };
            this.parent = [parentData];
            this.selectedKeys = parentData.key;
        } else {
            if (path !== data.path) {
                props.history.push(data.path);
            };
            this.parent = [parentData, data];
            this.selectedKeys = data.key;
        }
        this.openKeys[0] = parentData.key;
    };
    @action onTitleClick = (data) => {
        let key = data.key;
        if (this.openKeys[0] == key) {
            this.openKeys[0] = '';
            return
        }
        this.openKeys[0] = key;
    }
}

const menuName = new store();

export default menuName;