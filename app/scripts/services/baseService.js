import $ from "jquery";

class BaseService {
    sendRequest(ajaxOptions) {
        return $.ajax(ajaxOptions);
    }
}

export default new BaseService();