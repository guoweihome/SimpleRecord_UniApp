let registerUrl = "/user/register"
let loginUrl = "/user/login";
let getOpenIdUrl = "/wx/openId/"
let wxLoginUrl ="/wx/login";
let getSpendCategoryUrl = '/v1/spendCategory/recordTypeId/';
let recordInsertUrl = "/v1/record"
let spendTotalUrl = "v1/record/spendTotalInMonth/";
let topThreeSpendTotalUrl = "v1/record/topThreeSpendCategoryTotal/"
let recordListByMonthUrl = "v1/record/listByMonth";
let updateRecordUrl = "v1/record/"
let delRecordUrl = "v1/record/"
let latestSixMonthListUrl = "v1/record/latestSixMonthList"
let spendCategoryTotalUrl = "v1/record/spendCategoryTotal/"

const install = (Vue, vm) => {
	let login = (params = {}) => vm.$u.post(loginUrl, params);
	
	let register = (params = {}) => vm.$u.post(registerUrl, params);
	
	let getOpenId = (code) => vm.$u.get(getOpenIdUrl + code);
	
	let wxLogin = (params = {}) => vm.$u.post(wxLoginUrl, params);
	
	let getSpendCategory = (recordTypeId) => vm.$u.get(getSpendCategoryUrl + recordTypeId);
	
	let recordInsert = (params = {}) => vm.$u.post(recordInsertUrl, params);
	
	let getSpendTotal = (date) => vm.$u.get(spendTotalUrl + date);
	
	let getTopThreeSpendTotal = (date) => vm.$u.get(topThreeSpendTotalUrl + date);
	
	let getRecordListByMonth = (params = {}) => vm.$u.post(recordListByMonthUrl, params);
	
	let updateRecord = (id, params = {}) => vm.$u.put(updateRecordUrl + id, params);
	
	let delRecord = (id) => vm.$u.delete(delRecordUrl + id);
	
	let getLatestSixMonthList = (params = {}) => vm.$u.post(latestSixMonthListUrl, params);
	
	let getSpendCategoryTotal = (year, recordType) => vm.$u.get(spendCategoryTotalUrl + year + '/' + recordType);
	
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = {login, getOpenId, wxLogin, getSpendCategory, recordInsert, getSpendTotal, getTopThreeSpendTotal, getRecordListByMonth, 
				updateRecord, delRecord, getLatestSixMonthList, getSpendCategoryTotal};
}

export default {
	install
}