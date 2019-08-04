// form validation regular expressions
interface AppRegExpressionsList {
	email: RegExp,
	mobile: RegExp,
	dateOfBirthRgx: RegExp,
	monthAndYear :RegExp,
	panCard: RegExp,
	gst: RegExp,
	aadhar:RegExp
	ISO_8601_REGEXP : RegExp;
	BOOTSTRAP_DATE_PICKER_REGEXP : RegExp;
	BOOTSTRAP_MONTH_PICKER_REGEXP: RegExp;
	BOOTSTRAP_DATE_PICKER_REGEXP_STRITCT : RegExp; 
	BOOTSTRAP_MONTH_PICKER_REGEXP_STRITCT : RegExp;
	adharCard: RegExp,
	nameValidator: RegExp,
	companyNameValidator: RegExp,
	landline: RegExp,
	alLandline:RegExp,
	fourDigits: RegExp,
	accountNum: RegExp,
	aplhaNumeric: RegExp,
	aplhaNumericWithSpace: RegExp,
	decimalValidator: RegExp,
	decimalFactorial: RegExp,
	accountHolderName: RegExp,
	validCompanyName : RegExp,
	currencyRestrictFormat: any,
	ifscValidator: RegExp,
	sixDigits: RegExp,
	cgpaValidator:RegExp,
	pincode:RegExp
	alphabetonly:RegExp,
	acceptNumeric:RegExp,
	altMobile: RegExp,
	IELTS: RegExp,
	rtgsValidator: RegExp,
	subVentionAmount: RegExp;
}

// form validation regular expressions
export const AppRegExpressionsConfig: AppRegExpressionsList = {
	IELTS: /^([0-9])(?:\.[05]0?)?$/,	
	mobile: /^[1-9][0-9]{9}$/,
	altMobile: /^[1-9][0-9]{9}$/,
	email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	dateOfBirthRgx: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
	monthAndYear: /^(1[0-2]|0[1-9]|\d)\/(20\d{2}|19\d{2}|0(?!0)\d|[1-9]\d)$/,
	panCard: /(^([a-zA-Z]{5})([0-9]{4})([a-zA-Z]{1})$)/,
	//gst: /(^([0-9]{2})([a-zA-Z]{5})([0-9]{4})([a-zA-Z]{1})([0-9]{1})([zZ]{1})([0-9a-zA-Z]{1})$)/,
	gst: /((^[0-9a-zA-Z]+)$)/,
	aadhar: /^\d{4}\d{4}\d{4}$/,
	ISO_8601_REGEXP : /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,
	BOOTSTRAP_DATE_PICKER_REGEXP : /^(\d{2})(?:\/(\d{2})(?:\/(\d{4}))?)/,
	BOOTSTRAP_MONTH_PICKER_REGEXP : /^(\d{2})(?:\/(\d{4}))/,
	BOOTSTRAP_DATE_PICKER_REGEXP_STRITCT : /^(\d{2})(\/(\d{2})(\/(\d{4})))$/,
	BOOTSTRAP_MONTH_PICKER_REGEXP_STRITCT : /^(\d{2})(\/(\d{4}))$/,
	adharCard: /^[0-9]{12}$/,
	nameValidator: /^[a-zA-Z]+[a-zA-Z\s]*$/,
	companyNameValidator : /^[a-zA-Z0-9]+[a-zA-Z0-9\s]*$/,
	landline: /^[0-9]{11}$/,
	alLandline: /^[0-9]{10,11}$/,
	fourDigits: /^[0-9]{4}$/,
	sixDigits: /^[0-9]{6}$/,	
	accountNum:/^[0-9A-Za-z-]+$/,
	aplhaNumeric:/^[0-9A-Za-z-]+$/,
	rtgsValidator:/^[0-9A-Za-z]+$/,
	aplhaNumericWithSpace:/^[0-9A-Za-z\s]+$/,
	decimalValidator: /^[0-9]\d*(\.\d+)?$/,
	//decimalFactorial: /^([0-9]{0,3})(\.*\d{0,2})?$/,
	decimalFactorial: /^([0-9]{0,3})(?:(\.\d{1,20}))?$/,
	accountHolderName : /^[a-zA-Z@&()-]+[a-zA-Z\s@&()-.]*$/,
	validCompanyName : /^[a-zA-Z0-9@&()-]+[a-zA-Z0-9\s@&()-.]*$/,
	currencyRestrictFormat: /[*|#?!^\":<>[\]{}`\\()';@&$a-zA-Z]/,
	//IFSC code validation- 4char+zero+6digits pattern
	ifscValidator: /^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/,
	cgpaValidator:/^([1-9]\d{0,2})(([\.]\d{1,2})?)(\/)([1-9]\d{0,2})$/,
	alphabetonly:/^[a-zA-Z\s]*$/,
	acceptNumeric:/^[0-9]+$/,
	pincode:/^[0-9]{6}$/,
	subVentionAmount: /^([0-9]{0,10})(?:([\.])([0-9]{0,2}))?$/,
}
