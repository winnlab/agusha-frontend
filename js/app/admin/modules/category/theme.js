import 'can/'
import Edit from 'edit'

import 'js/app/admin/components/upload/'

export default Edit.extend({
    defaults: {
        viewpath: '../js/app/admin/modules/category/views/',
        viewName: 'setTheme.stache',

        moduleName: 'theme',

        form: '.themeForm',
        
        setRoute: false
    }
}, {});