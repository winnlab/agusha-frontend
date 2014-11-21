import 'can/'
import List from 'list'

import CertificateModel from 'js/app/admin/modules/certificates/certificateModel'
import Certificate from 'js/app/admin/modules/certificates/certificate'

export default List.extend(
    {
        defaults: {
            viewpath: '/js/app/admin/modules/certificates/views/',
            viewName: 'index.stache',

            moduleName: 'certificates',
            Model: CertificateModel,

            Edit: Certificate,

            add: '.addCertificate',
            edit: '.editCertificate',
            remove: '.removeCertificate',

            formWrap: '.certificateForm',

            parentData: '.certificates'
        }
    }, {}
);