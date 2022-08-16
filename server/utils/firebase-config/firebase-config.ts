import * as admin from 'firebase-admin';

import serviceAccount from './serviceAccount.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export default admin;
