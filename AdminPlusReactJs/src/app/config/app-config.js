

//const serviceApi='http://127.0.0.1:8080/LMS-Rest'; //LOCAL
const serviceApi='https://lms-stg.sportradar.ag/LMS-Rest'; //STG
//const serviceApi='https://lms.sportradar.ag/LMS-Rest'; //PROD

/** AUTH API CALLS */
export const AUTHORIZE = serviceApi+'/auth/login';
export const LOAD_LICENSES=serviceApi+'/api/v1/licenses/list';
export const LOAD_LICENSES_COSTS_BY_LOCATION=serviceApi+'/api/v1/lms/licenses/costs?criteria=locations';
export const LOAD_LICENSES_COSTS_BY_BUNITS=serviceApi+'/api/v1/lms/licenses/costs?criteria=bunits';
export const LOAD_LICENSES_COUNT_BY_LOCATION=serviceApi+'/api/v1/lms/licenses/count?criteria=locations';
export const LOAD_LICENSES_COUNT_BY_BUNITS=serviceApi+'/api/v1/lms/licenses/count?criteria=bunits';


export const LOAD_USERS=serviceApi+'/api/v1/users/list';

export const LICENSE_DETAILS=serviceApi+'/api/v1/licenses/';


