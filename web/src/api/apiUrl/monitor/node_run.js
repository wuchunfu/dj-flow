import {GET, POST, reUrl} from '../../axiosconfig/axiosconfig'

export default {
    list: function(params) {
        return GET(reUrl + '/process/sub_run/', params)
    },
    retrieve: function(id, params) {
        return GET(reUrl + '/process/sub_run/' + JSON.stringify(id) + '/', params)
    },
    control: function(params) {
        return POST(reUrl + '/node/node_run/control/', params)
    },
    node_snapshot: function(params) {
        return GET(reUrl + '/node_snapshot/', params)
    },
    node_snapshot_id: function(id, params) {
        return GET(reUrl + '/node_snapshot/' + JSON.stringify(id) + '/', params)
    }
}
