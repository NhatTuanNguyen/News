var Model = require(__path_schemas + 'settings');
var convertToSlugHelper = require(__path_helpers + 'converToSlug');
const fileHelper = require(__path_helpers + 'file');
const folderUpload = 'public/uploads/article/';

module.exports = {
    listItemsFrontend: (params = null,options = null) => {
        let find ={};
        let select = 'name created.user_name created.time category.name thumb';
        let sort = {};
        let limit = 3;

        if (options.task == 'itemsSpecial') {
            find = {status: 'active',special:'active'};
            select = 'name created.time thumb slug category.name';
            sort = {ordering: 'asc'}
        } else if (options.task == 'itemsNew') {
            find = {status: 'active'};
            select = 'name slug created.user_name created.time category.name thumb content';
            sort = {'created.time': 'desc'};
            limit = 8;
        } else if (options.task == 'itemsInCategory') {
            find = {status: 'active','category.id':params.id};
            select = 'name slug created.user_name created.time category.name thumb content';
            sort = {'created.time': 'desc'};
            limit = 5;
        } else if (options.task == 'itemsRandom') {
            return Model.aggregate([
                {$match:{status: 'active'}},
                {$project:{_id: 1,name:1,created:1,thumb:1,category:1,slug:1}},
                {$sample:{size: 5}},
            ]);
        } 

        return Model.find(find).select(select).limit(limit).sort(sort);
    },

    getItem: () => {
        return Model.find({})
    },

    saveItems: (item, options = 'add') => {

        if (options == 'add') {
            item.created = {
                user_id: 0,
                user_name: 'admin',
                time: Date.now(),
            };
            return new Model(item).save();

        } else if (options == 'edit') {
            return Model.updateOne({ _id: item.id }, {
                logo: item.logo,
                media: item.media,
                copyright: item.copyright,
                info: item.info,
                map: item.map,
                email: item.email,
                modified: {
                    user_id: 0,
                    user_name: 'admin',
                    time: Date.now(),
                }
            });
        }
    },
}