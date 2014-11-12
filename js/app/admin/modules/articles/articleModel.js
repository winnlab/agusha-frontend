import baseModel from 'baseModel'
import can from 'can/'
import _ from 'lodash'

var lastId = can.compute(),
    docsCount = 2,
    resource = baseModel.chooseResource('/article');

export default can.Model.extend(
	{
	    id: '_id',
	    parseModel: baseModel.parseModel,
	    parseModels: function (response) {
            var data = response.data || {};
            lastId(data.nextAnchorId);
            console.log(data.documents)
            return data.documents || [];
        },
        findAll: function (params) {
            _.extend(params, {
                queryOptions: {
                    lastId: lastId(),
                    docsCount: docsCount,
                    sort: {
                        position: -1
                    }
                }
            });

            return $.ajax({
                url: resource,
                method: 'GET',
                data: params
            });
        },
        findOne: resource + '/{id}',
        create: resource,
        update: resource,
        destroy: resource
        makeFindAll: function (findAllData) {
            return function (params, success, error) {

            };
        }
	}, {
		uploaded: baseModel.simpleUploaded,
		removeUploaded: baseModel.simpleRemoveUploaded
	}
);