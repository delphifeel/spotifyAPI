import BaseService from "scripts/services/baseService";
import apiUrls from "scripts/utils/apiUrls";
import {DEFAULT_LIMIT, DEFAULT_MARKET, DEFAULT_TYPE} from "scripts/constants/searchConsts";

class SearchService {
    search(q, pageNumber) {
        const offset = DEFAULT_LIMIT * (pageNumber - 1);

        return BaseService.sendRequest(
            apiUrls.search(q, DEFAULT_TYPE, DEFAULT_MARKET, DEFAULT_LIMIT, offset)
        );
    }
}

export default new SearchService();