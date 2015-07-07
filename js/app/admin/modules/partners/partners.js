import 'can/'
import List from 'list'

import PartnerModel from 'js/app/admin/modules/partners/partnerModel'
import Partner from 'js/app/admin/modules/partners/partner'

export default List.extend(
    {
        defaults: {
            viewpath: '/js/app/admin/modules/partners/views/',
            viewName: 'index.stache',

            moduleName: 'partners',
            Model: PartnerModel,

            Edit: Partner,

            add: '.addPartner',
            edit: '.editPartner',
            remove: '.removePartner',

            formWrap: '.partnerForm',

            parentData: '.partners'
        }
    },
    {
        
    }
);