// 正则表

// 国内电话号码
export const CHINA_MOBILE = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
// 身份证号
export const IDENTITY = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
// 自然数
export const COMMON_NUMBER = /^\d+(\.\d+)?$/;
// 邮箱
export const EMAIL = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
