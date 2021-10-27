// url: https://staging.api.woka.io/swagger/api+error+code.json
// const errorCode = {
//     success: {
//       code: 0,
//       message: 'Success',
//     },
//     invalid_min: {
//       code: 100,
//       message: 'Input is very small',
//     },
//     invalid_max: {
//       code: 101,
//       message: 'Input is very big',
//     },
//     invalid_length: {
//       code: 102,
//       message: 'Invalid length',
//     },
//     invalid_range: {
//       code: 103,
//       message: 'Invalid range',
//     },
//     invalid_contains: {
//       code: 104,
//       message: 'Need include special contain string',
//     }
//   };

// url: https://staging.api.woka.io/swagger/api+error+code.json
const errorCode = {
  success: {
    code: 0,
    message: 'Success',
  },
  invalid_min: {
    code: 100,
    message: 'Input is very small',
  },
  invalid_max: {
    code: 101,
    message: 'Input is very big',
  },
  invalid_length: {
    code: 102,
    message: 'Invalid length',
  },
  invalid_range: {
    code: 103,
    message: 'Invalid range',
  },
  invalid_contains: {
    code: 104,
    message: 'Need include special contain string',
  },
  invalid_regex: {
    code: 105,
    message: 'Input data not match',
  },
  invalid_credit_card: {
    code: 106,
    message: 'Credit card is invalid',
  },
  invalid_must_match: {
    code: 107,
    message: 'Input data not match',
  },
  invalid_nested: {
    code: 108,
    message: 'Input data must nested',
  },
  invalid_card: {
    code: 109,
    message: 'Input data must be a card',
  },
  invalid_unic: {
    code: 110,
    message: 'Input data must be unicode character',
  },
  invalid_non_control_character: {
    code: 111,
    message: 'Input data notn control charcater',
  },
  invalid_required: {
    code: 112,
    message: 'Input data required',
  },
  invalid_required_nested: {
    code: 113,
    message: 'Input data required_nested',
  },
  internal_server_error: {
    code: 500,
    message: 'Internal Server Error',
  },
  existing_email: {
    code: 501,
    message: 'Email is existing in system',
  },
  can_not_generate_id: {
    code: 502,
    message: 'Can not generate auto ID',
  },
  can_not_mapping_id: {
    code: 503,
    message: 'Can not create mapping with woka ID',
  },
  error_when_insert_db: {
    code: 503,
    message: 'Error when insert to DB',
  },
  can_not_generate_token: {
    code: 504,
    message: 'Can not generate access token',
  },
  need_phone_number: {
    code: 505,
    message: 'Need a phone number',
  },
  not_existing_account: {
    code: 506,
    message: 'Not existing account',
  },
  can_not_get_account: {
    code: 507,
    message: 'Can not get account',
  },
  can_not_decrypt_password: {
    code: 508,
    message: 'Can not decrypt password',
  },
  can_not_encrypt_password: {
    code: 509,
    message: 'Can not encrypt password',
  },
  can_not_get_template: {
    code: 510,
    message: 'Can not get template',
  },
  can_not_create_account: {
    code: 510,
    message: 'Can not create user',
  },
  invalid_expired_token: {
    code: 511,
    message: 'Token is expired',
  },
  invalid_totp_token: {
    code: 512,
    message: 'OTP Token is not matching',
  },
  invalid_json_data: {
    code: 513,
    message: 'Invalid JSON data',
  },
  not_existing_data: {
    code: 514,
    message: 'Not existing data',
  },
  need_country_code: {
    code: 515,
    message: 'Need a country code',
  },
  invalid_oauth_verifier: {
    code: 600,
    message: 'Invalid verifier token',
  },
  invalid_access_token: {
    code: 601,
    message: 'Invalid access token',
  },
  invalid_fullname: {
    code: 602,
    message: 'Invalid fullname',
  },
  invalid_phone_number: {
    code: 603,
    message: 'Invalid phone number',
  },
  internal_google_app_info: {
    code: 9990,
    message: 'Internal github app information',
  },
  internal_facebook_app_info: {
    code: 9991,
    message: 'Internal facebook app information',
  },
  internal_linkedin_app_info: {
    code: 9992,
    message: 'Internal linkedin app information',
  },
  internal_zalo_app_info: {
    code: 9993,
    message: 'Internal zalo app information',
  },
  internal_github_app_info: {
    code: 9994,
    message: 'Internal github app information',
  },
  internal_twitter_app_info: {
    code: 9995,
    message: 'Internal twitter app information',
  },
  invalid_language_code: {
    code: 9996,
    message: 'Invalid language code',
  },
  invalid_text: {
    code: 9997,
    message: 'Invalid text data',
  },
  avatar_is_small: {
    code: 9998,
    message: 'Image is small',
  },
  upload_avatar_error: {
    code: 9999,
    message: 'Can not upload avatar, error or invalid file type',
  },
  internal_error: {
    code: 10000,
    message: 'Something went wrong',
  },
  invalid_password: {
    code: 10001,
    message: 'Invalid password',
  },
  invalid_app_id: {
    code: 10002,
    message: 'Invalid app_id',
  },
  invalid_user_id: {
    code: 10003,
    message: 'Invalid user_id',
  },
  login_not_success: {
    code: 10004,
    message: 'Login is not success',
  },
  invalid_login_token: {
    code: 10005,
    message: 'Invalid login_token',
  },
  invalid_cross_token: {
    code: 10006,
    message: 'Invalid cross_token',
  },
  can_not_get_user_info: {
    code: 10007,
    message: 'Can not get user info',
  },
  can_not_get_user_social_login: {
    code: 11000,
    message: 'Can not get user info social login',
  },
  can_not_get_user_edit: {
    code: 11001,
    message: 'Can not get user info edit',
  },
  can_not_get_user_get: {
    code: 11002,
    message: 'Can not get user gett',
  },
  can_not_get_user_list_favourite: {
    code: 11003,
    message: 'Can not get list favourite',
  },
  can_not_get_change_favourite: {
    code: 11004,
    message: 'Can not get list favourite',
  },
  can_not_get_check_favourite: {
    code: 11005,
    message: 'Can not get check favourite',
  },
  can_not_add_like_button: {
    code: 11006,
    message: 'Can not add like button',
  },
  can_not_add_review_fado: {
    code: 11093,
    message: 'Can not add review fado',
  },
  can_not_get_all_review_fado: {
    code: 11007,
    message: 'Can not get  review fado',
  },
  can_not_get_add_like_button: {
    code: 11008,
    message: 'Can not get add like button',
  },
  can_not_change_password: {
    code: 11009,
    message: 'Can not change password',
  },
  can_not_reset_password: {
    code: 11010,
    message: 'Can not reset password',
  },
  get_full_user_info_empty_fadovn: {
    code: 11011,
    message: 'get full user info empty fadovn',
  },
  get_user_info_socical_login_empty_fadovn: {
    code: 11012,
    message: ' get user info social login empty fadovn',
  },
  get_user_info_edit_empty_fadovn: {
    code: 11013,
    message: ' get user info edit empty fadovn',
  },
  get_user_info_get_empty_fadovn: {
    code: 11014,
    message: ' get user info get empty fadovn',
  },
  get_list_favourite_empty_fadovn: {
    code: 11015,
    message: ' get list favourite empty fadovn',
  },
  get_change_favourite_empty_fadovn: {
    code: 11016,
    message: ' get change favourite empty fadovn',
  },
  get_check_favourite_empty_fadovn: {
    code: 11017,
    message: ' get check favourite empty fadovn',
  },
  get_add_like_button_empty_fadovn: {
    code: 11018,
    message: ' get add like button empty fadovn',
  },
  get_add_review_fado_empty_fadovn: {
    code: 11019,
    message: ' get reiview fado empty fadovn',
  },
  get_all_review_fado_empty_fadovn: {
    code: 11020,
    message: ' get all review fado empty fadovn',
  },
  get_change_password_empty_fadovn: {
    code: 11021,
    message: ' get change password empty fadovn',
  },
  get_reset_password_empty_fadovn: {
    code: 11022,
    message: ' get reset password empty fadovn',
  },
  can_not_get_full_user_info_fadovn: {
    code: 11023,
    message: 'can not get full user info empty fadovn',
  },
  can_not_get_user_info_socical_login_fadovn: {
    code: 11024,
    message: 'Can not get user info fadovn',
  },
  can_not_get_user_info_edit_fadovn: {
    code: 11025,
    message: 'Can not get user info edit fadovn',
  },
  can_not_get_user_info_get_fadovn: {
    code: 11026,
    message: 'Can not get user info get fadovn',
  },
  can_not_get_list_favourite_fadovn: {
    code: 11027,
    message: 'Can not get list favourite fadovn',
  },
  can_not_get_change_favourite_fadovn: {
    code: 11028,
    message: 'Can not get change favourite fadovn',
  },
  can_not_get_check_favourite_fadovn: {
    code: 11029,
    message: 'Can not get check favourite fadovn',
  },
  can_not_get_add_review_fado_fadovn: {
    code: 11030,
    message: 'Can not get reiview fado fadovn',
  },
  can_not_get_add_like_button_fadovn: {
    code: 11031,
    message: 'Can not get add like button fadovn',
  },
  can_not_get_all_review_fado_fadovn: {
    code: 11032,
    message: 'Can not get all reiview fado fadovn',
  },
  can_not_get_change_password_fadovn: {
    code: 11033,
    message: 'Can not get change password fadovn',
  },
  can_not_get_reset_password_fadovn: {
    code: 11095,
    message: 'Can not get reset password fadovn',
  },
  can_not_get_request_password_fadovn: {
    code: 11034,
    message: 'Can not get request password fadovn',
  },
  data_get_full_user_info_empty_fadovn: {
    code: 11035,
    message: 'full user info empty fadovn',
  },
  data_get_user_info_socical_login_empty_fadovn: {
    code: 11036,
    message: 'data get user info social login empty fadovn',
  },
  data_get_user_info_edit_empty_fadovn: {
    code: 11037,
    message: 'data get user info edit empty fadovn',
  },
  data_get_user_info_get_empty_fadovn: {
    code: 11038,
    message: 'data get user info get empty fadovn',
  },
  data_get_list_favourite_empty_fadovn: {
    code: 11039,
    message: 'data get list favourite empty fadovn',
  },
  data_get_change_favourite_empty_fadovn: {
    code: 11040,
    message: 'data get change favourite empty fadovn',
  },
  data_get_check_favourite_empty_fadovn: {
    code: 11041,
    message: 'data get check favourite empty fadovn',
  },
  data_get_add_review_fado_empty_fadovn: {
    code: 11042,
    message: 'data get reiview fado empty fadovn',
  },
  data_get_add_like_button_empty_fadovn: {
    code: 11043,
    message: 'data get reiview fado empty fadovn',
  },
  data_get_all_review_fado_empty_fadovn: {
    code: 11044,
    message: 'data get all review fado empty fadovn',
  },
  data_get_change_password_empty_fadovn: {
    code: 11045,
    message: 'data get change password empty fadovn',
  },
  data_get_reset_password_empty_fadovn: {
    code: 11096,
    message: 'data get reset password empty fadovn',
  },
  can_not_get_list_info_multi: {
    code: 11047,
    message: 'Can not get list favourite',
  },
  can_not_get_list_info_multi_v2: {
    code: 11048,
    message: 'Can not get list favourite',
  },
  can_not_get_list_info: {
    code: 11049,
    message: 'Can not get list favourite',
  },
  get_list_info_multi_empty_fadovn: {
    code: 11050,
    message: 'Can not get list favourite',
  },
  get_list_info_multi_v2_empty_fadovn: {
    code: 11051,
    message: 'Can not get list favourite',
  },
  get_list_info_empty_fadovn: {
    code: 11052,
    message: 'Can not get list favourite',
  },
  can_not_get_list_info_multi_fadovn: {
    code: 11053,
    message: 'Can not get list favourite',
  },
  can_not_get_list_info_multi_v2_fadovn: {
    code: 11054,
    message: 'Can not get list favourite',
  },
  can_not_get_list_info_fadovn: {
    code: 11055,
    message: 'Can not get list favourite',
  },
  data_get_list_info_multi_empty_fadovn: {
    code: 11056,
    message: 'Can not get list favourite',
  },
  data_get_list_info_multi_v2_empty_fadovn: {
    code: 11057,
    message: 'Can not get list favourite',
  },

  data_get_list_info_empty_fadovn: {
    code: 11058,
    message: 'Can not get list favourite',
  },
  invalid_field_id: {
    code: 11063,
    message: 'field id invalid',
  },
  invalid_field_fullname: {
    code: 11097,
    message: 'field fullname empty',
  },
  invalid_field_rating_star: {
    code: 11064,
    message: 'field rating star invalid',
  },
  invalid_field_title: {
    code: 11065,
    message: 'field title empty',
  },
  invalid_field_content: {
    code: 11066,
    message: 'field content empty',
  },
  invalid_field: {
    code: 11067,
    message: 'field empty',
  },
  invalid_field_tag_id_list: {
    code: 11068,
    message: 'field tag id list empty',
  },
  invalid_field_source: {
    code: 11069,
    message: 'field source empty',
  },
  invalid_field_country_code: {
    code: 11070,
    message: 'field country code empty',
  },
  invalid_field_merchant_id: {
    code: 11071,
    message: 'field merchant id empty',
  },
  invalid_field_old_password: {
    code: 11072,
    message: 'field old password empty',
  },
  invalid_field_new_password: {
    code: 11073,
    message: 'field new password empty',
  },
  invalid_field_birthday: {
    code: 11074,
    message: 'field birthday empty',
  },
  invalid_field_gender: {
    code: 11075,
    message: 'field gender invalid',
  },
  invalid_field_address: {
    code: 11076,
    message: 'field address empty',
  },
  invalid_field_order_by: {
    code: 11077,
    message: 'field order by empty',
  },
  invalid_field_host_name: {
    code: 11078,
    message: 'field host name empty',
  },
  invalid_field_password: {
    code: 11079,
    message: 'field password empty',
  },
  invalid_field_re_password: {
    code: 11080,
    message: 'field re_password empty',
  },
  invalid_field_user_id: {
    code: 11081,
    message: 'field user id  invalid',
  },
  invalid_field_certificate_code: {
    code: 11082,
    message: 'field certificate code empty',
  },
  invalid_field_limit_product: {
    code: 11083,
    message: 'field limit product invalid',
  },
  invalid_field_limit_brand: {
    code: 11084,
    message: 'field limit brand invalid',
  },
  invalid_field_type_fado_global: {
    code: 11085,
    message: 'field type fado_global empty',
  },
  invalid_field_store_code: {
    code: 11086,
    message: 'field type store_code empty',
  },
  invalid_field_city_id: {
    code: 11087,
    message: 'field city id invalid',
  },
  invalid_field_district_id: {
    code: 11088,
    message: 'field district id invalid',
  },
  invalid_field_ward_id: {
    code: 11089,
    message: 'field ward id invalid',
  },
  invalid_field_token: {
    code: 11090,
    message: 'field token empty',
  },
  invalid_field_email: {
    code: 11091,
    message: 'field email invalid',
  },
  invalid_change_favourite_item: {
    code: 11098,
    message: 'invalid change favourite item',
  },
  can_not_get_data_search_product: {
    code: 11099,
    message: 'can not get data search product',
  },
  can_not_get_data_search_product_vn: {
    code: 11100,
    message: 'can not get data search product fadovn',
  },
  can_not_get_category_by_id: {
    code: 11101,
    message: 'can not get category by id',
  },
  can_not_get_category_by_id_fadovn: {
    code: 11102,
    message: 'can not get category by id fadovn',
  },
  can_not_get_category_by_slug: {
    code: 11103,
    message: 'can not get category by slug',
  },
  can_not_get_category_by_fadovn: {
    code: 11104,
    message: 'can not get category by slug fadovn',
  },
  invalid_field_phone: {
    code: 11092,
    message: 'field phone invalid',
  },
  can_not_get_default_address_book: {
    code: 12001,
    message: 'Can not get default address book',
  },
  get_default_address_book_empty_fadovn: {
    code: 12002,
    message: 'Get default address book is empty fadovn',
  },
  can_not_get_default_address_book_fadovn: {
    code: 12003,
    message: 'Can not get default address book fadovn',
  },
  data_get_default_address_book_empty_fadovn: {
    code: 12004,
    message: 'Data get default address book is empty fadovn',
  },
  can_not_get_list_address_book: {
    code: 12005,
    message: 'Can not get list address book',
  },
  get_list_address_book_empty_fadovn: {
    code: 12006,
    message: 'Get list address book is empty fadovn',
  },
  can_not_get_list_address_book_fadovn: {
    code: 12007,
    message: 'Can not get list address book fadovn',
  },
  data_get_list_address_book_empty_fadovn: {
    code: 12008,
    message: 'Data get list address book is empty fadovn',
  },
  can_not_del_address_book: {
    code: 12009,
    message: 'Can not delete address book',
  },
  del_address_book_empty_fadovn: {
    code: 12010,
    message: 'Delete address book is empty fadovn',
  },
  can_not_del_address_book_fadovn: {
    code: 12011,
    message: 'Can not delete address book fadovn',
  },
  data_del_address_book_empty_fadovn: {
    code: 12012,
    message: 'Data delete address book is empty fadovn',
  },
  can_not_get_detail_address_book: {
    code: 12013,
    message: 'Can not get detailed address book',
  },
  get_detail_address_book_empty_fadovn: {
    code: 12014,
    message: 'Get detailed address book is empty fadovn',
  },
  can_not_get_detail_address_book_fadovn: {
    code: 12015,
    message: 'Can not get detailed address book fadovn',
  },
  data_get_detail_address_book_empty_fadovn: {
    code: 12016,
    message: 'Data get detailed address book is empty fadovn',
  },
  can_not_set_default_address_book: {
    code: 12017,
    message: 'Can not set default address book',
  },
  set_default_address_book_empty_fadovn: {
    code: 12018,
    message: 'Set default address book is empty fadovn',
  },
  can_not_set_default_address_book_fadovn: {
    code: 12019,
    message: 'Can not set default address book fadovn',
  },
  data_set_default_address_book_empty_fadovn: {
    code: 12020,
    message: 'Data set default address book is empty fadovn',
  },
  can_not_add_address_book: {
    code: 12021,
    message: 'Can not add address book',
  },
  add_address_book_empty_fadovn: {
    code: 12022,
    message: 'Add address book is empty fadovn',
  },
  can_not_add_address_book_fadovn: {
    code: 12023,
    message: 'Can not add address book fadovn',
  },
  data_add_address_book_empty_fadovn: {
    code: 12024,
    message: 'Data add address book is empty fadovn',
  },
  can_not_edit_address_book: {
    code: 12025,
    message: 'Can not edit address book',
  },
  edit_address_book_empty_fadovn: {
    code: 12026,
    message: 'Edit address book is empty fadovn',
  },
  can_not_edit_address_book_fadovn: {
    code: 12027,
    message: 'Can not edit address book fadovn',
  },
  data_edit_address_book_empty_fadovn: {
    code: 12028,
    message: 'Data edit address book is empty fadovn',
  },
  can_not_get_list_link_affiliate: {
    code: 12029,
    message: 'Can not get list link affiliate',
  },
  get_list_link_affiliate_empty_fadovn: {
    code: 12030,
    message: 'Get list link affiliate is empty fadovn',
  },
  can_not_get_list_link_affiliate_fadovn: {
    code: 12031,
    message: 'Can not get list link affiliate fadovn',
  },
  data_get_list_link_affiliate_empty_fadovn: {
    code: 12032,
    message: 'Data get list link affiliate is empty fadovn',
  },
  can_not_add_info_payment_affiliate: {
    code: 12033,
    message: 'Can not add info payment affiliate',
  },
  add_info_payment_affiliate_empty_fadovn: {
    code: 12034,
    message: 'Add info payment affiliate is empty fadovn',
  },
  can_not_add_info_payment_affiliate_fadovn: {
    code: 12035,
    message: 'Can not add info payment affiliate fadovn',
  },
  data_add_info_payment_affiliate_empty_fadovn: {
    code: 12036,
    message: 'Data add info payment affiliate is empty fadovn',
  },
  can_not_edit_info_payment_affiliate: {
    code: 12037,
    message: 'Can not edit info payment affiliate',
  },
  edit_info_payment_affiliate_empty_fadovn: {
    code: 12038,
    message: 'Edit info payment affiliate is empty fadovn',
  },
  can_not_edit_info_payment_affiliate_fadovn: {
    code: 12039,
    message: 'Can not edit info payment affiliate fadovn',
  },
  data_edit_info_payment_affiliate_empty_fadovn: {
    code: 12040,
    message: 'Data edit info payment affiliate is empty fadovn',
  },
  can_not_post_user_affiliate_create_link: {
    code: 12041,
    message: 'Can not create link affiliate',
  },
  post_user_affiliate_create_link_empty_fadovn: {
    code: 12042,
    message: 'Create link affiliate is empty fadovn',
  },
  can_not_post_user_affiliate_create_link_fadovn: {
    code: 12043,
    message: 'Can not create link affiliate fadovn',
  },
  data_post_user_affiliate_create_link_empty_fadovn: {
    code: 12044,
    message: 'Data create link affiliate is empty fadovn',
  },
  can_not_get_user_affiliate_cross_check_list: {
    code: 12045,
    message: 'Can not get affiliate cross check list',
  },
  get_user_affiliate_cross_check_list_empty_fadovn: {
    code: 12046,
    message: 'Get affiliate cross check list is empty fadovn',
  },
  can_not_pget_user_affiliate_cross_check_list_fadovn: {
    code: 12047,
    message: 'Can not get affiliate cross check list fadovn',
  },
  data_get_user_affiliate_cross_check_list_empty_fadovn: {
    code: 12048,
    message: 'Data get affiliate cross check list is empty fadovn',
  },
  can_not_set_info_user_affiliate_payment: {
    code: 12049,
    message: 'Can not set info user affiliate payment',
  },
  set_info_user_affiliate_payment_empty_fadovn: {
    code: 12050,
    message: 'Set info user affiliate payment is empty fadovn',
  },
  can_not_set_info_user_affiliate_payment_fadovn: {
    code: 12051,
    message: 'Can not set info user affiliate payment fadovn',
  },
  data_set_info_user_affiliate_payment_empty_fadovn: {
    code: 12052,
    message: 'Data set info user affiliate payment is empty fadovn',
  },
  can_not_delete_info_user_affiliate_payment: {
    code: 12053,
    message: 'Can not delete info user affiliate payment',
  },
  delete_info_user_affiliate_payment_empty_fadovn: {
    code: 12054,
    message: 'Delete info user affiliate payment is empty fadovn',
  },
  can_not_delete_info_user_affiliate_payment_fadovn: {
    code: 12055,
    message: 'Can not delete info user affiliate payment fadovn',
  },
  data_delete_info_user_affiliate_payment_empty_fadovn: {
    code: 12056,
    message: 'Data delete info user affiliate payment is empty fadovn',
  },
  can_not_get_list_affiliate: {
    code: 12057,
    message: 'Can not get list affiliate',
  },
  get_list_affiliate_empty_fadovn: {
    code: 12058,
    message: 'get list affiliate is empty fadovn',
  },
  can_not_get_list_affiliate_fadovn: {
    code: 12059,
    message: 'Can not get list affiliate fadovn',
  },
  data_get_list_affiliate_empty_fadovn: {
    code: 12060,
    message: 'Data get list affiliate is empty fadovn',
  },
  can_not_register_user_affiliate: {
    code: 12061,
    message: 'Can not register user affiliate',
  },
  register_user_affiliate_empty_fadovn: {
    code: 12062,
    message: 'Register user affiliate is empty fadovn',
  },
  can_not_register_user_affiliate_fadovn: {
    code: 12063,
    message: 'Can not register user affiliate fadovn',
  },
  data_register_user_affiliate_empty_fadovn: {
    code: 12064,
    message: 'Data register user affiliate is empty fadovn',
  },
  can_not_get_user_list_bank_affiliate: {
    code: 12065,
    message: 'Can not get user list bank affiliate',
  },
  get_user_list_bank_affiliate_empty_fadovn: {
    code: 12066,
    message: 'Get user list bank affiliate is empty fadovn',
  },
  can_not_get_user_list_bank_affiliate_fadovn: {
    code: 12067,
    message: 'Can not get user list bank affiliate fadovn',
  },
  data_get_user_list_bank_affiliate_empty_fadovn: {
    code: 12068,
    message: 'Data get user list bank affiliate is empty fadovn',
  },
  can_not_list_discount_code: {
    code: 12069,
    message: 'Can not list discount code',
  },
  list_discount_code_empty_fadovn: {
    code: 12070,
    message: 'list discount code is empty fadovn',
  },
  can_not_list_discount_code_fadovn: {
    code: 12071,
    message: 'Can not list discount code fadovn',
  },
  data_list_discount_code_empty_fadovn: {
    code: 12072,
    message: 'Data list discount code is empty fadovn',
  },
  can_not_get_discount_code_by_token: {
    code: 12073,
    message: 'Can not get discount code by token',
  },
  get_discount_code_by_token_empty_fadovn: {
    code: 12074,
    message: 'Get discount code by token is empty fadovn',
  },
  can_not_get_discount_code_by_token_fadovn: {
    code: 12075,
    message: 'Can not get discount code by token fadovn',
  },
  data_get_discount_code_by_token_empty_fadovn: {
    code: 12076,
    message: 'Data get discount code by token is empty fadovn',
  },
  can_not_get_discount_code_from_asin: {
    code: 12077,
    message: 'Can not get discount code from asin',
  },
  get_discount_code_from_asin_empty_fadovn: {
    code: 12078,
    message: 'Get discount code from asin is empty fadovn',
  },
  can_not_get_discount_code_from_asin_fadovn: {
    code: 12079,
    message: 'Can not get discount code from asin fadovn',
  },
  data_get_discount_code_from_asin_empty_fadovn: {
    code: 12080,
    message: 'Data get discount code from asin is empty fadovn',
  },
  can_not_add_quotation_now: {
    code: 12081,
    message: 'Can not add quotation now',
  },
  get_add_quotation_now_empty_fadovn: {
    code: 12082,
    message: 'Get add quotation now is empty fadovn',
  },
  can_not_add_quotation_now_fadovn: {
    code: 12083,
    message: 'Can not add quotation now fadovn',
  },
  data_add_quotation_now_empty_fadovn: {
    code: 12084,
    message: 'Data add quotation now is empty fadovn',
  },
  can_not_get_quotation_list: {
    code: 12085,
    message: 'Can not get quotation list',
  },
  get_quotation_list_empty_fadovn: {
    code: 12086,
    message: 'Get quotation list is empty fadovn',
  },
  can_not_get_quotation_list_fadovn: {
    code: 12087,
    message: 'Can not get quotation list fadovn',
  },
  data_get_quotation_list_empty_fadovn: {
    code: 12088,
    message: 'Data get quotation list is empty fadovn',
  },
  can_not_add_quotation_to_list: {
    code: 12089,
    message: 'Can not add quotation to list',
  },
  add_quotation_to_list_empty_fadovn: {
    code: 12090,
    message: 'Add quotation to list is empty fadovn',
  },
  can_not_add_quotation_to_list_fadovn: {
    code: 12091,
    message: 'Can not add quotation to list fadovn',
  },
  data_add_quotation_to_list_empty_fadovn: {
    code: 12092,
    message: 'Data add quotation to list is empty fadovn',
  },
  can_not_delete_quotation: {
    code: 12093,
    message: 'Can not delete quotation',
  },
  delete_quotation_empty_fadovn: {
    code: 12094,
    message: 'Delete quotation is empty fadovn',
  },
  can_not_delete_quotation_fadovn: {
    code: 12095,
    message: 'Can not delete quotation to list fadovn',
  },
  data_delete_quotation_empty_fadovn: {
    code: 12096,
    message: 'Data delete quotation to list is empty fadovn',
  },
  can_not_update_quotation_quantity_list: {
    code: 12097,
    message: 'Can not update quotation quantity list',
  },
  update_quotation_quantity_list_empty_fadovn: {
    code: 12098,
    message: 'Update quotation quantity list is empty fadovn',
  },
  can_not_update_quotation_quantity_list_fadovn: {
    code: 12099,
    message: 'Can not update quotation quantity list fadovn',
  },
  data_update_quotation_quantity_list_empty_fadovn: {
    code: 12100,
    message: 'Data update quotation quantity list is empty fadovn',
  },
  can_not_create_quotation_to_email: {
    code: 12101,
    message: 'Can not create quotation to email',
  },
  create_quotation_to_email_empty_fadovn: {
    code: 12102,
    message: 'Create quotation to email is empty fadovn',
  },
  can_not_create_quotation_to_email_fadovn: {
    code: 12103,
    message: 'Can not create quotation to email fadovn',
  },
  data_create_quotation_to_email_empty_fadovn: {
    code: 12104,
    message: 'Data create quotation to email is empty fadovn',
  },
  invalid_name: {
    code: 12105,
    message: 'Invalid name',
  },
  invalid_company: {
    code: 12107,
    message: 'Invalid company',
  },
  invalid_phone: {
    code: 12108,
    message: 'Invalid phone',
  },
  invalid_address: {
    code: 12109,
    message: 'Invalid address',
  },
  invalid_ward_id: {
    code: 12112,
    message: 'Invalid ward id',
  },
  invalid_address_location: {
    code: 12113,
    message: 'Invalid address location type',
  },
  invalid_is_default: {
    code: 12114,
    message: 'Invalid default',
  },
  invalid_is_time_in_work: {
    code: 12115,
    message: 'Invalid is_time_in_work',
  },
  invalid_vat_code: {
    code: 12116,
    message: 'Invalid VAT_code',
  },
  invalid_company_address: {
    code: 12117,
    message: 'Invalid company_address',
  },
  invalid_address_id: {
    code: 12119,
    message: 'Invalid address_id',
  },
  invalid_url: {
    code: 12120,
    message: 'Invalid url',
  },
  invalid_begin_date: {
    code: 12121,
    message: 'Invalid begin_date',
  },
  invalid_end_date: {
    code: 12122,
    message: 'Invalid end_date',
  },
  invalid_type_date: {
    code: 12123,
    message: 'Invalid type_date',
  },
  invalid_page: {
    code: 12125,
    message: 'Invalid page',
  },
  invalid_limit: {
    code: 12126,
    message: 'Invalid limit',
  },
  invalid_payment_id: {
    code: 12127,
    message: 'Invalid payment_id',
  },
  invalid_bank_account: {
    code: 12129,
    message: 'Invalid bank_account',
  },
  invalid_bank_account_number: {
    code: 12130,
    message: 'Invalid bank_account_number',
  },
  invalid_bank_branch: {
    code: 12131,
    message: 'Invalid bank_branch',
  },
  invalid_fado_coin: {
    code: 12132,
    message: 'Invalid fado_coin',
  },
  invalid_product_id: {
    code: 12133,
    message: 'Invalid product_id',
  },
  invalid_product_name: {
    code: 12134,
    message: 'Invalid product_name',
  },
  invalid_str_lang: {
    code: 12135,
    message: 'Invalid str_lang',
  },
  invalid_is_used: {
    code: 12136,
    message: 'Invalid is_used',
  },
  invalid_quantity_item: {
    code: 12137,
    message: 'Invalid item in quotation',
  },
  can_not_get_list_hub: {
    code: 13000,
    message: 'Can not get list hub',
  },
  success_list_hub_empty_fadovn: {
    code: 13001,
    message: 'Success list hub is empty fadovn',
  },
  can_not_get_list_hub_fadovn: {
    code: 13002,
    message: 'Can not get list hub fadovn',
  },
  data_list_hub_empty_fadovn: {
    code: 13003,
    message: 'Data list hub is empty fadovn',
  },
  can_not_get_order_steps: {
    code: 13004,
    message: 'Can not get order steps',
  },
  success_order_steps_empty_fadovn: {
    code: 13005,
    message: 'Success order steps is empty fadovn',
  },
  can_not_get_order_steps_fadovn: {
    code: 13006,
    message: 'Can not get order steps fadovn',
  },
  data_order_steps_empty_fadovn: {
    code: 13007,
    message: 'Data order steps is empty fadovn',
  },
  can_not_checkout_banking_complete: {
    code: 13008,
    message: 'Can not checkout banking complete',
  },
  success_checkout_banking_complete_empty_fadovn: {
    code: 13009,
    message: 'Success checkout banking complete is empty fadovn',
  },
  can_not_checkout_banking_complete_fadovn: {
    code: 13010,
    message: 'Can not checkout banking complete steps fadovn',
  },
  data_checkout_banking_complete_empty_fadovn: {
    code: 13011,
    message: 'Data checkout banking complete is empty fadovn',
  },
  can_not_get_invoice: {
    code: 13012,
    message: 'Can not get invoice',
  },
  success_invoice_empty_fadovn: {
    code: 13013,
    message: 'Success invoice is empty fadovn',
  },
  can_not_get_invoice_fadovn: {
    code: 13014,
    message: 'Can not get invoice fadovn',
  },
  data_invoice_empty_fadovn: {
    code: 13015,
    message: 'Data invoice is empty fadovn',
  },
  can_not_view_order: {
    code: 13016,
    message: 'Can not view order',
  },
  success_view_order_empty_fadovn: {
    code: 13017,
    message: 'Success view order is empty fadovn',
  },
  can_not_view_order_fadovn: {
    code: 13018,
    message: 'Can not view order fadovn',
  },
  data_view_order_empty_fadovn: {
    code: 13019,
    message: 'Data view order is empty fadovn',
  },
  can_not_get_order_detail: {
    code: 13020,
    message: 'Can not get order detail',
  },
  success_order_detail_empty_fadovn: {
    code: 13021,
    message: 'Success order detail is empty fadovn',
  },
  can_not_get_order_detail_fadovn: {
    code: 13022,
    message: 'Can not get order detail fadovn',
  },
  data_order_detail_empty_fadovn: {
    code: 13023,
    message: 'Data order detail is empty fadovn',
  },
  can_not_cancel_order: {
    code: 130024,
    message: 'Can not cancel order',
  },
  success_cancel_order_empty_fadovn: {
    code: 13025,
    message: 'Success cancel order is empty fadovn',
  },
  can_not_cancel_order_fadovn: {
    code: 13026,
    message: 'Can not cancel order fadovn',
  },
  data_cancel_order_empty_fadovn: {
    code: 130027,
    message: 'Data cancel order is empty fadovn',
  },
  can_not_check_transaction_payment: {
    code: 13028,
    message: 'Can not check transaction payment',
  },
  success_check_transaction_payment_empty_fadovn: {
    code: 13029,
    message: 'Success check transaction payment is empty fadovn',
  },
  can_not_check_transaction_payment_fadovn: {
    code: 13030,
    message: 'Can not check transaction payment fadovn',
  },
  data_check_transaction_payment_empty_fadovn: {
    code: 13031,
    message: 'Data check transaction payment is empty fadovn',
  },
  can_not_get_installment_fee: {
    code: 13032,
    message: 'Can not get installment fee',
  },
  success_get_installment_fee_empty_fadovn: {
    code: 13033,
    message: 'Success get installment fee is empty fadovn',
  },
  can_not_get_installment_fee_fadovn: {
    code: 13034,
    message: 'Can not get installment fee fadovn',
  },
  data_get_installment_fee_empty_fadovn: {
    code: 13035,
    message: 'Data get installment fee is empty fadovn',
  },
  can_not_continue_payment: {
    code: 13036,
    message: 'Can not get continue payment',
  },
  success_continue_payment_empty_fadovn: {
    code: 13037,
    message: 'Success continue payment is empty fadovn',
  },
  can_not_continue_payment_fadovn: {
    code: 13038,
    message: 'Can not continue payment fadovn',
  },
  data_continue_payment_empty_fadovn: {
    code: 13039,
    message: 'Data continue payment is empty fadovn',
  },
  can_not_change_payment_method: {
    code: 13040,
    message: 'Can not change payment method',
  },
  success_change_payment_method_empty_fadovn: {
    code: 13041,
    message: 'Success change payment method is empty fadovn',
  },
  can_not_change_payment_method_fadovn: {
    code: 13042,
    message: 'Can not change payment method fadovn',
  },
  data_change_payment_method_empty_fadovn: {
    code: 13043,
    message: 'Data change payment_method is empty fadovn',
  },
  can_not_get_info_payment_method: {
    code: 13044,
    message: 'Can not get info payment method',
  },
  success_get_info_payment_method_empty_fadovn: {
    code: 13045,
    message: 'Success get info payment method is empty fadovn',
  },
  can_not_get_info_payment_method_fadovn: {
    code: 13046,
    message: 'Can not get info payment method fadovn',
  },
  data_get_info_payment_method_empty_fadovn: {
    code: 13047,
    message: 'Data get info payment method is empty fadovn',
  },
  can_not_get_list_payment_method: {
    code: 13048,
    message: 'Can not get list payment method',
  },
  success_get_list_payment_method_empty_fadovn: {
    code: 13049,
    message: 'Success get list payment method is empty fadovn',
  },
  can_not_get_list_payment_method_fadovn: {
    code: 13050,
    message: 'Can not get list payment method fadovn',
  },
  data_get_list_payment_method_empty_fadovn: {
    code: 13051,
    message: 'Data get list payment method is empty fadovn',
  },
  can_not_get_payment_method_detail: {
    code: 13052,
    message: 'Can not get payment method detail',
  },
  success_payment_method_detail_empty_fadovn: {
    code: 13053,
    message: 'Success payment method detail is empty fadovn',
  },
  can_not_get_payment_method_detail_fadovn: {
    code: 13054,
    message: 'Can not get payment method detail fadovn',
  },
  data_payment_method_detail_empty_fadovn: {
    code: 13055,
    message: 'Data payment method detail is empty fadovn',
  },
  can_not_get_payment_method_list: {
    code: 13056,
    message: 'Can not get payment method list',
  },
  success_payment_method_list_empty_fadovn: {
    code: 13057,
    message: 'Success payment method list is empty fadovn',
  },
  can_not_get_payment_method_list_fadovn: {
    code: 13058,
    message: 'Can not get payment method list fadovn',
  },
  data_payment_method_list_empty_fadovn: {
    code: 13059,
    message: 'Data payment method list is empty fadovn',
  },
  can_not_checkout: {
    code: 13060,
    message: 'Can not checkout',
  },
  success_checkout_empty_fadovn: {
    code: 13061,
    message: 'Success checkout is empty fadovn',
  },
  can_not_checkout_fadovn: {
    code: 13062,
    message: 'Can not checkout fadovn',
  },
  data_checkout_empty_fadovn: {
    code: 13063,
    message: 'Data checkout is empty fadovn',
  },
  can_not_get_list_order: {
    code: 13064,
    message: 'Can not get list order',
  },
  success_list_order_empty_fadovn: {
    code: 13065,
    message: 'Success list order is empty fadovn',
  },
  can_not_get_list_order_fadovn: {
    code: 13066,
    message: 'Can not get list order detail fadovn',
  },
  data_list_order_empty_fadovn: {
    code: 13067,
    message: 'Data list order is empty fadovn',
  },
  can_not_search_order: {
    code: 13068,
    message: 'Can not search order',
  },
  success_search_order_empty_fadovn: {
    code: 13069,
    message: 'Success search order is empty fadovn',
  },
  can_not_search_order_fadovn: {
    code: 13070,
    message: 'Can not search order detail fadovn',
  },
  data_search_order_empty_fadovn: {
    code: 13071,
    message: 'Data search order is empty fadovn',
  },
  can_not_get_deal_list: {
    code: 13072,
    message: 'Can not get deal list',
  },
  can_not_get_total_deal_deal_list_fadovn: {
    code: 13073,
    message: 'Can not get total deal of deal list fadovn',
  },
  deal_list_empty_fadovn: {
    code: 13074,
    message: 'Deal list is empty fadovn',
  },
  can_not_get_deal_detail: {
    code: 13075,
    message: 'Can not get deal detail',
  },
  can_not_get_deal_list_deal_detail_fadovn: {
    code: 13076,
    message: 'Can not get deal list of deal list of detail fadovn',
  },
  deal_list_deal_detail_empty_fadovn: {
    code: 13077,
    message: 'Deal list of deal detail is empty fadovn',
  },
  can_not_get_comment: {
    code: 13078,
    message: 'Can not get comment',
  },
  can_not_get_review_summary_comment_fadovn: {
    code: 13079,
    message: 'Can not get review summary of comment fadovn',
  },
  review_summary_comment_empty_fadovn: {
    code: 13080,
    message: 'Review summary of comment is empty fadovn',
  },
  can_not_get_review_data_comment_fadovn: {
    code: 13081,
    message: 'Can not get review data of comment fadovn',
  },
  review_data_comment_empty_fadovn: {
    code: 13082,
    message: 'Review data of comment is empty fadovn',
  },
  can_not_get_top_product: {
    code: 13083,
    message: 'Can not get top product',
  },
  invalid_country: {
    code: 13084,
    message: 'Country code is invalid',
  },
  invalid_order_id: {
    code: 13085,
    message: 'order_id is invalid',
  },
  invalid_cancel_reason: {
    code: 13086,
    message: 'cancel_reason is invalid',
  },
  invalid_order_item_id: {
    code: 13087,
    message: 'order_item_id is invalid',
  },
  invalid_payment_method_id: {
    code: 13088,
    message: 'payment_method_id is invalid',
  },
  invalid_payment_group_id: {
    code: 13089,
    message: 'payment_group_id is invalid',
  },
  invalid_trans_id: {
    code: 13090,
    message: 'trans_id is invalid',
  },
  invalid_session: {
    code: 13091,
    message: 'session is invalid',
  },
  invalid_order_no: {
    code: 13092,
    message: 'order_no is invalid',
  },
  invalid_error_code: {
    code: 13093,
    message: 'error_code is invalid',
  },
  invalid_error_msg: {
    code: 13094,
    message: 'error_msg is invalid',
  },
  invalid_checksum: {
    code: 13095,
    message: 'checksum is invalid',
  },
  invalid_total_amount: {
    code: 13096,
    message: 'total_amount is invalid',
  },
  invalid_payment_fee: {
    code: 13097,
    message: 'payment_fee is invalid',
  },
  invalid_payment_gateway: {
    code: 13098,
    message: 'payment_gateway is invalid',
  },
  invalid_merchant_code: {
    code: 13099,
    message: 'merchant_code is invalid',
  },
  invalid_amount: {
    code: 13100,
    message: 'amount is invalid',
  },
  invalid_total_order: {
    code: 13101,
    message: 'total_order is invalid',
  },
  invalid_payment_status: {
    code: 13102,
    message: 'payment_status is invalid',
  },
  invalid_buyer_city_id: {
    code: 13103,
    message: 'buyer_city_id is invalid',
  },
  invalid_buyer_district_id: {
    code: 13104,
    message: 'buyer_district_id is invalid',
  },
  invalid_buyer_ward_id: {
    code: 13105,
    message: 'buyer_ward_id is invalid',
  },
  invalid_enable_receiver_info: {
    code: 13106,
    message: 'enable_receiver_info is invalid',
  },
  invalid_receiver_city_id: {
    code: 13107,
    message: 'receiver_city_id is invalid',
  },
  invalid_receiver_district_id: {
    code: 13108,
    message: 'receiver_district_id is invalid',
  },
  invalid_receiver_ward_id: {
    code: 13109,
    message: 'receiver_ward_id is invalid',
  },
  invalid_percent_payment: {
    code: 13110,
    message: 'percent_payment is invalid',
  },
  invalid_hash_id: {
    code: 13111,
    message: 'hash_id is invalid',
  },
  invalid_deal_id: {
    code: 13111,
    message: 'deal_id is invalid',
  },
  can_not_get_price_history: {
    code: 13112,
    message: 'Can not get price history',
  },
  success_get_price_history_empty_fadovn: {
    code: 13113,
    message: 'Success get price history is empty fadovn',
  },
  can_not_get_price_history_fadovn: {
    code: 13114,
    message: 'Can not get price history detail fadovn',
  },
  data_get_price_history_empty_fadovn: {
    code: 13115,
    message: 'Data get price history is empty fadovn',
  },
  invalid_item_id_selected: {
    code: 13116,
    message: 'item_id_selected is invalid',
  },
  invalid_buyer_fullname: {
    code: 13117,
    message: 'Invalid buyer_fullname',
  },
  invalid_buyer_phone: {
    code: 13118,
    message: 'Invalid buyer_phone',
  },
  invalid_buyer_address: {
    code: 13119,
    message: 'Invalid buyer_address',
  },

  can_not_get_home_page_landing: {
    code: 14000,
    message: 'Can not get home page landing',
  },
  success_get_home_page_landing_is_empty_fadovn: {
    code: 14001,
    message: 'Success get home page landing is empty fadovn',
  },
  can_not_get_home_page_landing_fadovn: {
    code: 14002,
    message: 'Can not get home page landing fadovn',
  },
  data_get_home_page_landing_is_empty_fadovn: {
    code: 14003,
    message: 'Data get home page landing is empty fadovn',
  },
  can_not_get_detail_landing_v2: {
    code: 14004,
    message: 'Can not get detail landing v2',
  },
  success_get_detail_landing_v2_is_empty_fadovn: {
    code: 14005,
    message: 'Success get detail landing v2 is empty fadovn',
  },
  can_not_get_detail_landing_v2_fadovn: {
    code: 14006,
    message: 'Can not get detail landing v2 fadovn',
  },
  data_get_detail_landing_v2_is_empty_fadovn: {
    code: 14007,
    message: 'Data get detail landing v2 is empty fadovn',
  },
  can_not_get_list_insted_template: {
    code: 14008,
    message: 'Can not get list insted template',
  },
  success_get_list_insted_template_is_empty_fadovn: {
    code: 14009,
    message: 'Success get list insted template is empty fadovn',
  },
  can_not_get_list_insted_template_fadovn: {
    code: 14010,
    message: 'Can not get list insted template fadovn',
  },
  data_get_list_insted_template_is_empty_fadovn: {
    code: 14011,
    message: 'Data get list insted template is empty fadovn',
  },
  can_not_get_list_block_template: {
    code: 14012,
    message: 'Can not get list block template',
  },
  success_get_list_block_template_is_empty_fadovn: {
    code: 14013,
    message: 'Success get list block template is empty fadovn',
  },
  can_not_get_list_block_template_fadovn: {
    code: 14014,
    message: 'Can not get list block template fadovn',
  },
  data_get_list_block_template_is_empty_fadovn: {
    code: 14015,
    message: 'Data get list block template is empty fadovn',
  },
  can_not_get_home_page_items: {
    code: 14016,
    message: 'Can not get home page items',
  },
  success_get_home_page_items_is_empty_fadovn: {
    code: 14017,
    message: 'Success get home page items is empty fadovn',
  },
  can_not_get_home_page_items_fadovn: {
    code: 14018,
    message: 'Can not get home page items fadovn',
  },
  data_get_home_page_items_is_empty_fadovn: {
    code: 14019,
    message: 'Data get home page items is empty fadovn',
  },
  can_not_search_product: {
    code: 14020,
    message: 'Can not search product',
  },
  success_search_product_is_empty_fadovn: {
    code: 14021,
    message: 'Success search product is empty fadovn',
  },
  can_not_search_product_fadovn: {
    code: 14022,
    message: 'Can not search product fadovn',
  },
  data_search_product_is_empty_fadovn: {
    code: 14023,
    message: 'Data search product is empty fadovn',
  },
  can_not_get_instead_item_detail: {
    code: 14024,
    message: 'Can not get instead item detail',
  },
  success_get_instead_item_detail_is_empty_fadovn: {
    code: 14025,
    message: 'Success get instead item detail is empty fadovn',
  },
  can_not_get_instead_item_detail_fadovn: {
    code: 14026,
    message: 'Can not get instead item detail fadovn',
  },
  data_get_instead_item_detail_is_empty_fadovn: {
    code: 14027,
    message: 'Data get instead item detail is empty fadovn',
  },
  can_not_create_tracking_price: {
    code: 14028,
    message: 'Can not create_tracking_price',
  },
  success_create_tracking_price_is_empty_fadovn: {
    code: 14029,
    message: 'Success create_tracking_price is empty fadovn',
  },
  can_not_create_tracking_price_fadovn: {
    code: 14030,
    message: 'Can not create_tracking_price fadovn',
  },
  data_create_tracking_price_is_empty_fadovn: {
    code: 14031,
    message: 'Data create_tracking_price is empty fadovn',
  },
  can_not_validate_tracking_price: {
    code: 14032,
    message: 'Can not validate tracking price',
  },
  success_validate_tracking_price_is_empty_fadovn: {
    code: 14033,
    message: 'Success validate tracking price is empty fadovn',
  },
  can_not_validate_tracking_price_fadovn: {
    code: 14034,
    message: 'Can not validate tracking price fadovn',
  },
  data_validate_tracking_price_is_empty_fadovn: {
    code: 14035,
    message: 'Data validate tracking price is empty fadovn',
  },
  can_not_detail_tracking_price: {
    code: 14036,
    message: 'Can not detail tracking price',
  },
  success_detail_tracking_price_empty_fadovn: {
    code: 14037,
    message: 'Success detail tracking price is empty fadovn',
  },
  can_not_detail_tracking_price_fadovn: {
    code: 14038,
    message: 'Can not detail tracking price fadovn',
  },
  data_detail_tracking_price_empty_fadovn: {
    code: 14039,
    message: 'Data detail tracking price is empty fadovn',
  },
  can_not_update_tracking_price: {
    code: 14040,
    message: 'Can not update tracking price',
  },
  success_update_tracking_price_empty_fadovn: {
    code: 14041,
    message: 'Success update tracking price is empty fadovn',
  },
  can_not_update_tracking_price_fadovn: {
    code: 14042,
    message: 'Can not update tracking price fadovn',
  },
  data_update_tracking_price_empty_fadovn: {
    code: 14043,
    message: 'Data update tracking price is empty fadovn',
  },
  can_not_remove_tracking_price: {
    code: 14044,
    message: 'Can not remove tracking price',
  },
  success_remove_tracking_price_empty_fadovn: {
    code: 14045,
    message: 'Success remove tracking price is empty fadovn',
  },
  can_not_remove_tracking_price_fadovn: {
    code: 14046,
    message: 'Can not remove tracking price fadovn',
  },
  data_remove_tracking_price_empty_fadovn: {
    code: 14047,
    message: 'Data remove tracking price is empty fadovn',
  },
  can_not_list_tracking_price: {
    code: 14048,
    message: 'Can not list tracking price',
  },
  success_list_tracking_price_empty_fadovn: {
    code: 14049,
    message: 'Success list tracking price is empty fadovn',
  },
  can_not_list_tracking_price_fadovn: {
    code: 14050,
    message: 'Can not list tracking price fadovn',
  },
  data_list_tracking_price_empty_fadovn: {
    code: 14051,
    message: 'Data list tracking price is empty fadovn',
  },
  can_not_update_price: {
    code: 14052,
    message: 'Can not update price',
  },
  success_update_price_empty_fadovn: {
    code: 14053,
    message: 'Success update price is empty fadovn',
  },
  can_not_update_price_fadovn: {
    code: 14054,
    message: 'Can not update price fadovn',
  },
  data_update_price_empty_fadovn: {
    code: 14055,
    message: 'Data update price is empty fadovn',
  },
  can_not_add_wallet_request: {
    code: 14056,
    message: 'Can not add wallet request',
  },
  success_add_wallet_request_empty_fadovn: {
    code: 14057,
    message: 'Success add wallet request is empty fadovn',
  },
  can_not_add_wallet_request_fadovn: {
    code: 14058,
    message: 'Can not add wallet request fadovn',
  },
  data_add_wallet_request_empty_fadovn: {
    code: 14059,
    message: 'Data add wallet request is empty fadovn',
  },
  can_not_toggle_auto_wallet_payment: {
    code: 14060,
    message: 'Can not toggle auto wallet payment',
  },
  success_toggle_auto_wallet_payment_empty_fadovn: {
    code: 14061,
    message: 'Success toggle auto wallet payment is empty fadovn',
  },
  can_not_toggle_auto_wallet_payment_fadovn: {
    code: 14062,
    message: 'Can not toggle auto wallet payment fadovn',
  },
  data_toggle_auto_wallet_payment_empty_fadovn: {
    code: 14063,
    message: 'Data toggle auto wallet payment is empty fadovn',
  },
  can_not_redeem_gift_card: {
    code: 14064,
    message: 'Can not redeem gift card',
  },
  success_redeem_gift_card_empty_fadovn: {
    code: 14065,
    message: 'Success redeem gift card is empty fadovn',
  },
  can_not_redeem_gift_card_fadovn: {
    code: 14066,
    message: 'Can not redeem gift card fadovn',
  },
  data_redeem_gift_card_empty_fadovn: {
    code: 14067,
    message: 'Data redeem gift card is empty fadovn',
  },
  can_not_get_list_wallet_request: {
    code: 14068,
    message: 'Can not get list wallet request',
  },
  success_get_list_wallet_request_empty_fadovn: {
    code: 14069,
    message: 'Success get list wallet request is empty fadovn',
  },
  can_not_get_list_wallet_request_fadovn: {
    code: 14070,
    message: 'Can not get list wallet request fadovn',
  },
  data_get_list_wallet_request_empty_fadovn: {
    code: 14071,
    message: 'Data get list wallet request is empty fadovn',
  },
  can_not_cancel_wallet_request: {
    code: 14072,
    message: 'Can not cancel wallet request',
  },
  success_cancel_wallet_request_empty_fadovn: {
    code: 14073,
    message: 'Success cancel wallet request is empty fadovn',
  },
  can_not_cancel_wallet_request_fadovn: {
    code: 14074,
    message: 'Can not cancel wallet request fadovn',
  },
  data_cancel_wallet_request_empty_fadovn: {
    code: 14075,
    message: 'Data cancel wallet request is empty fadovn',
  },
  can_not_get_list_wallet_interest: {
    code: 14076,
    message: 'Can not get list wallet interest',
  },
  success_get_list_wallet_interest_empty_fadovn: {
    code: 14077,
    message: 'Success get list wallet interest is empty fadovn',
  },
  can_not_get_list_wallet_interest_fadovn: {
    code: 14078,
    message: 'Can not get list wallet interest fadovn',
  },
  data_get_list_wallet_interest_empty_fadovn: {
    code: 14079,
    message: 'Data get list wallet interest is empty fadovn',
  },
  can_not_get_cart: {
    code: 14080,
    message: 'Can not get cart',
  },
  success_get_cart_empty_fadovn: {
    code: 14081,
    message: 'Success get cart is empty fadovn',
  },
  can_not_get_cart_fadovn: {
    code: 14082,
    message: 'Can not get cart fadovn',
  },
  data_get_cart_empty_fadovn: {
    code: 14083,
    message: 'Data get cart is empty fadovn',
  },
  can_not_remove_cart: {
    code: 14084,
    message: 'Can not remove cart',
  },
  success_remove_cart_empty_fadovn: {
    code: 14085,
    message: 'Success remove cart is empty fadovn',
  },
  can_not_remove_cart_fadovn: {
    code: 14086,
    message: 'Can not remove cart fadovn',
  },
  data_remove_cart_empty_fadovn: {
    code: 14087,
    message: 'Data remove cart is empty fadovn',
  },
  can_not_update_cart: {
    code: 14084,
    message: 'Can not update cart',
  },
  success_update_cart_empty_fadovn: {
    code: 14085,
    message: 'Success update cart is empty fadovn',
  },
  can_not_update_cart_fadovn: {
    code: 14086,
    message: 'Can not update cart fadovn',
  },
  data_update_cart_empty_fadovn: {
    code: 14087,
    message: 'Data update cart is empty fadovn',
  },
  can_not_add_cart: {
    code: 14088,
    message: 'Can not add cart',
  },
  success_add_cart_empty_fadovn: {
    code: 14089,
    message: 'Success add cart is empty fadovn',
  },
  can_not_add_cart_fadovn: {
    code: 14090,
    message: 'Can not add cart fadovn',
  },
  data_add_cart_empty_fadovn: {
    code: 14091,
    message: 'Data add cart is empty fadovn',
  },
  can_not_add_quotation_item_cart: {
    code: 14092,
    message: 'Can not add quotation item',
  },
  success_add_quotation_item_empty_fadovn_cart: {
    code: 14093,
    message: 'Success add quotation item is empty fadovn',
  },
  can_not_add_quotation_item_fadovn_cart: {
    code: 14094,
    message: 'Can not add quotation item fadovn',
  },
  data_add_quotation_item_empty_fadovn_cart: {
    code: 14095,
    message: 'Data add quotation item is empty fadovn',
  },
  can_not_get_list_info_multi_v2: {
    code: 15000,
    message: 'Can not get list info multi v2',
  },
  success_get_list_info_multi_v2_empty_fadovn: {
    code: 15001,
    message: 'Success get list info multi v2 is empty fadovn',
  },
  can_not_get_list_info_multi_v2_fadovn: {
    code: 15002,
    message: 'Can not get list info multi v2 fadovn',
  },
  data_get_list_info_multi_v2_empty_fadovn: {
    code: 15003,
    message: 'Data get list info multi v2 is empty fadovn',
  },
  can_not_get_all_main_cate: {
    code: 15004,
    message: 'Can not get all main cate',
  },
  success_get_all_main_cate_empty_fadovn: {
    code: 15005,
    message: 'Success get all main cate is empty fadovn',
  },
  can_not_get_all_main_cate_fadovn: {
    code: 15006,
    message: 'Can not get all main cate fadovn',
  },
  data_get_all_main_cate_empty_fadovn: {
    code: 15007,
    message: 'Data get all main cate is empty fadovn',
  },
  can_not_get_menu: {
    code: 15008,
    message: 'Can not get menu',
  },
  success_get_menu_empty_fadovn: {
    code: 15009,
    message: 'Success get menu is empty fadovn',
  },
  can_not_get_menu_fadovn: {
    code: 15010,
    message: 'Can not get menu fadovn',
  },
  data_get_menu_empty_fadovn: {
    code: 15011,
    message: 'Data get menu is empty fadovn',
  },
  can_not_list_info: {
    code: 15012,
    message: 'Can not list info',
  },
  success_list_info_empty_fadovn: {
    code: 15013,
    message: 'Success list info is empty fadovn',
  },
  can_not_list_info_fadovn: {
    code: 15014,
    message: 'Can not list info fadovn',
  },
  data_list_info_empty_fadovn: {
    code: 15015,
    message: 'Data list info is empty fadovn',
  },
  can_not_get_translate_to_vn: {
    code: 15016,
    message: 'Can not get translate to vn',
  },
  success_get_translate_to_vn_empty_fadovn: {
    code: 15017,
    message: 'Success get translate to vn is empty fadovn',
  },
  can_not_get_translate_to_vn_fadovn: {
    code: 15018,
    message: 'Can not get translate to vn fadovn',
  },
  data_get_translate_to_vn_empty_fadovn: {
    code: 15019,
    message: 'Data get translate to vn is empty fadovn',
  },
  can_not_get_menu_multi: {
    code: 15020,
    message: 'Can not get menu multi',
  },
  success_get_menu_multi_empty_fadovn: {
    code: 15021,
    message: 'Success get menu multi is empty fadovn',
  },
  can_not_get_menu_multi_fadovn: {
    code: 15022,
    message: 'Can not get menu multi fadovn',
  },
  data_get_menu_multi_empty_fadovn: {
    code: 15023,
    message: 'Data get menu multi is empty fadovn',
  },
  can_not_get_list_keyword_cate: {
    code: 15024,
    message: 'Can not get list keyword cate',
  },
  success_get_list_keyword_cate_empty_fadovn: {
    code: 15025,
    message: 'Success get list keyword cate is empty fadovn',
  },
  can_not_get_list_keyword_cate_fadovn: {
    code: 15026,
    message: 'Can not get list keyword cate fadovn',
  },
  data_get_list_keyword_cate_empty_fadovn: {
    code: 15027,
    message: 'Data get list keyword cate is empty fadovn',
  },
  can_not_get_top_keyword: {
    code: 15028,
    message: 'Can not get top keyword',
  },
  success_get_top_keyword_empty_fadovn: {
    code: 15029,
    message: 'Success get top keyword is empty fadovn',
  },
  can_not_get_top_keyword_fadovn: {
    code: 15030,
    message: 'Can not get top keyword fadovn',
  },
  data_get_top_keyword_empty_fadovn: {
    code: 15031,
    message: 'Data get top keyword is empty fadovn',
  },
  can_not_get_special_keyword: {
    code: 15032,
    message: 'Can not get special keyword',
  },
  success_get_special_keyword_empty_fadovn: {
    code: 15033,
    message: 'Success get special keyword is empty fadovn',
  },
  can_not_get_special_keyword_fadovn: {
    code: 15034,
    message: 'Can not get special keyword fadovn',
  },
  data_get_special_keyword_empty_fadovn: {
    code: 15035,
    message: 'Data get special keyword is empty fadovn',
  },
  can_not_check_keyword: {
    code: 15036,
    message: 'Can not check keyword',
  },
  success_check_keyword_empty_fadovn: {
    code: 15037,
    message: 'Sucess check keyword is empty fadovn',
  },
  can_not_check_keyword_fadovn: {
    code: 15038,
    message: 'Can not check keyword fadovn',
  },
  data_check_keyword_empty_fadovn: {
    code: 15039,
    message: 'Data check keyword is empty fadovn',
  },
  can_not_get_list_keyword: {
    code: 15040,
    message: 'Can not get list keyword',
  },
  success_get_list_keyword_empty_fadovn: {
    code: 15041,
    message: 'Success get list keyword is empty fadovn',
  },
  can_not_get_list_keyword_fadovn: {
    code: 15042,
    message: 'Can not get list keyword fadovn',
  },
  data_get_list_keyword_empty_fadovn: {
    code: 15043,
    message: 'Data get list keyword is empty fadovn',
  },
  can_not_get_city_list: {
    code: 15044,
    message: 'Can not get city list',
  },
  success_get_city_list_empty_fadovn: {
    code: 15045,
    message: 'Success get city list is empty fadovn',
  },
  can_not_get_city_list_fadovn: {
    code: 15046,
    message: 'Can not get city list fadovn',
  },
  data_get_city_list_empty_fadovn: {
    code: 15047,
    message: 'Data get city list is empty fadovn',
  },
  can_not_get_popup_banner: {
    code: 15048,
    message: 'Can not get popup banner',
  },
  success_get_popup_banner_empty_fadovn: {
    code: 15049,
    message: 'Success get popup banner is empty fadovn',
  },
  can_not_get_popup_banner_fadovn: {
    code: 15050,
    message: 'Can not get popup banner fadovn',
  },
  data_get_popup_banner_empty_fadovn: {
    code: 15051,
    message: 'Data get popup banner is empty fadovn',
  },
  can_not_get_all_banner: {
    code: 15052,
    message: 'Can not get all banner',
  },
  success_get_all_banner_empty_fadovn: {
    code: 15053,
    message: 'Success get all banner is empty fadovn',
  },
  can_not_get_all_banner_fadovn: {
    code: 15054,
    message: 'Can not get all banner fadovn',
  },
  data_get_all_banner_empty_fadovn: {
    code: 15055,
    message: 'Data get all banner is empty fadovn',
  },
  can_not_get_district_list: {
    code: 15056,
    message: 'Can not get district list',
  },
  success_get_district_list_empty_fadovn: {
    code: 15057,
    message: 'Success get district list is empty fadovn',
  },
  can_not_get_district_list_fadovn: {
    code: 15058,
    message: 'Can not get district list fadovn',
  },
  data_get_district_list_empty_fadovn: {
    code: 15059,
    message: 'Data get district list is empty fadovn',
  },
  can_not_get_ward_list: {
    code: 15060,
    message: 'Can not get ward list',
  },
  success_get_ward_list_empty_fadovn: {
    code: 15061,
    message: 'Success get ward list is empty fadovn',
  },
  can_not_get_ward_list_fadovn: {
    code: 15062,
    message: 'Can not get ward list fadovn',
  },
  data_get_ward_list_empty_fadovn: {
    code: 15063,
    message: 'Data get ward list is empty fadovn',
  },
  can_not_get_feedback: {
    code: 15064,
    message: 'Can not get feedback',
  },
  success_get_feedback_empty_fadovn: {
    code: 15065,
    message: 'Success get feedback is empty fadovn',
  },
  can_not_get_feedback_fadovn: {
    code: 15066,
    message: 'Can not get feedback fadovn',
  },
  data_get_feedback_empty_fadovn: {
    code: 15067,
    message: 'Data get feedback is empty fadovn',
  },
  invalid_key_data_get_extra_info: {
    code: 15068,
    message: 'Invalid data',
  },
  can_not_add_product_compare: {
    code: 15072,
    message: 'Can not add product compare',
  },
  success_add_product_compare_empty_fadovn: {
    code: 15073,
    message: 'Success add product compare is empty fadovn',
  },
  can_not_add_product_compare_fadovn: {
    code: 15074,
    message: 'Can not add product compare fadovn',
  },
  data_add_product_compare_empty_fadovn: {
    code: 15075,
    message: 'Data add product compare is empty fadovn',
  },
  can_not_remove_product_compare: {
    code: 15076,
    message: 'Can not remove product compare',
  },
  success_remove_product_compare_empty_fadovn: {
    code: 15077,
    message: 'Success remove product compare is empty fadovn',
  },
  can_not_remove_product_compare_fadovn: {
    code: 15078,
    message: 'Can not remove product compare fadovn',
  },
  data_remove_product_compare_empty_fadovn: {
    code: 15079,
    message: 'Data remove product compare is empty fadovn',
  },
  can_not_get_product_compare: {
    code: 15080,
    message: 'Can not get product compare',
  },
  success_get_product_compare_empty_fadovn: {
    code: 15081,
    message: 'Success get product compare is empty fadovn',
  },
  can_not_get_product_compare_fadovn: {
    code: 15082,
    message: 'Can not get product compare fadovn',
  },
  data_get_product_compare_empty_fadovn: {
    code: 15083,
    message: 'Data get product compare is empty fadovn',
  },
  can_not_search_store: {
    code: 15084,
    message: 'Can not search store middleware',
  },
  success_search_store_empty_fadovn: {
    code: 15085,
    message: 'Success search store middleware fadovn is empty',
  },
  can_not_search_store_fadovn: {
    code: 15086,
    message: 'Can not search store middleware fadovn',
  },
  data_search_store_empty_fadovn: {
    code: 15087,
    message: 'Data search store middleware fadovn is empty',
  },
  can_not_get_product_detail: {
    code: 15088,
    message: 'Can not get product detail',
  },
  success_get_product_detail_empty_fadovn: {
    code: 15089,
    message: 'Success get product detail is empty fadovn',
  },
  can_not_get_product_detail_fadovn: {
    code: 15090,
    message: 'Can not get product detail fadovn',
  },
  data_get_product_detail_empty_fadovn: {
    code: 15091,
    message: 'Data get product detail is empty fadovn',
  },
  can_not_get_extra_info: {
    code: 15092,
    message: 'Can not get extra info',
  },
  success_get_extra_info_empty_fadovn: {
    code: 15093,
    message: 'Success get extra info is empty fadovn',
  },
  can_not_get_extra_info_fadovn: {
    code: 15094,
    message: 'Can not get extra info fadovn',
  },
  data_get_extra_info_empty_fadovn: {
    code: 15095,
    message: 'Data get extra info is empty fadovn',
  },
  can_not_get_merchant_list: {
    code: 15096,
    message: 'Can not get merchant list',
  },
  success_get_merchant_list_empty_fadovn: {
    code: 15097,
    message: 'Success get merchant list is empty fadovn',
  },
  can_not_get_merchant_list_fadovn: {
    code: 15098,
    message: 'Can not get merchant list fadovn',
  },
  data_get_merchant_list_empty_fadovn: {
    code: 15099,
    message: 'Data get merchant list is empty fadovn',
  },
  can_not_search_amazon: {
    code: 15100,
    message: 'Can not search amazon',
  },
  success_search_amazon_empty_fadovn: {
    code: 15101,
    message: 'Success search amazon middleware fadovn is empty',
  },
  can_not_search_amazon_fadovn: {
    code: 15102,
    message: 'Can not search amazon middleware fadovn',
  },
  data_search_amazon_empty_fadovn: {
    code: 15103,
    message: 'Data search amazon middleware fadovn is empty',
  },
  invalid_totp_code: {
    code: 14096,
    message: 'Invalid totp code',
  },
  invalid_country_code: {
    code: 14097,
    message: 'Invalid country_code',
  },
  invalid_merchant_id: {
    code: 14098,
    message: 'Invalid merchant_id',
  },
  invalid_cart_type: {
    code: 14099,
    message: 'Invalid cart_type',
  },
  invalid_sources: {
    code: 14100,
    message: 'Invalid sources',
  },
  invalid_quantity: {
    code: 14101,
    message: 'Invalid quantity',
  },
  invalid_shipping_provider_id: {
    code: 14102,
    message: 'Invalid shipping_provider_id',
  },
  invalid_is_override: {
    code: 14103,
    message: 'Invalid is_override',
  },
  invalid_quotation_id: {
    code: 14104,
    message: 'Invalid quotation_id',
  },
  invalid_email: {
    code: 14105,
    message: 'Invalid email',
  },
  invalid_publisher: {
    code: 14106,
    message: 'Invalid publisher',
  },
  invalid_enable_update_data: {
    code: 14106,
    message: 'Invalid enable_update_data',
  },
  invalid_item_id: {
    code: 14107,
    message: 'Invalid item_id',
  },
  invalid_landing_id: {
    code: 14108,
    message: 'Invalid landing_id',
  },
  invalid_id: {
    code: 14109,
    message: 'Invalid id',
  },
  invalid_slug: {
    code: 14110,
    message: 'Invalid slug',
  },
  invalid_device: {
    code: 14111,
    message: 'Invalid device',
  },
  invalid_block_type: {
    code: 14112,
    message: 'Invalid block_type',
  },
  invalid_type_store: {
    code: 14114,
    message: 'Invalid type_store',
  },
  invalid_keywords: {
    code: 14115,
    message: 'Invalid keywords',
  },
  invalid_wallet_request_type: {
    code: 14116,
    message: 'Invalid wallet_request_type',
  },
  invalid_wallet_request_amount: {
    code: 14117,
    message: 'Invalid wallet_request_amount',
  },
  invalid_bank_code: {
    code: 14118,
    message: 'Invalid bank_code',
  },
  invalid_request_id: {
    code: 14119,
    message: 'Invalid request_id',
  },
  invalid_request_type: {
    code: 14122,
    message: 'Invalid request_type',
  },
  invalid_status: {
    code: 14123,
    message: 'Invalid status',
  },
  invalid_gift_code: {
    code: 14124,
    message: 'Invalid gift_code',
  },
  invalid_price_type: {
    code: 14126,
    message: 'Invalid price_type',
  },
  invalid_price_from: {
    code: 14127,
    message: 'Invalid price_from',
  },
  invalid_price_to: {
    code: 14128,
    message: 'Invalid price_to',
  },
  invalid_is_cif: {
    code: 14129,
    message: 'Invalid is_cif',
  },
  invalid_data_encrypted: {
    code: 14130,
    message: 'Invalid data_encrypted',
  },
  invalid_tracking_price_id: {
    code: 14131,
    message: 'Invalid tracking_price_id',
  },
  invalid_created_date: {
    code: 14132,
    message: 'Invalid create_date',
  },
  invalid_data_add_cart_empty: {
    code: 14134,
    message: 'Invalid data_add_cart_empty',
  },
  invalid_key_data_add_cart: {
    code: 14135,
    message: 'Invalid key_data_add_cart',
  },
  invalid_wallet_request_id: {
    code: 14137,
    message: 'Invalid wallet_request_id',
  },
  invalid_keyword: {
    code: 15104,
    message: 'Invalid keyword',
  },
  invalid_node: {
    code: 15105,
    message: 'Invalid node',
  },
  invalid_keyword_search: {
    code: 15106,
    message: 'Invalid keyword_search',
  },
  invalid_keyword_product_name: {
    code: 15107,
    message: 'Invalid keyword_product_name',
  },
  invalid_keyword_cate_name: {
    code: 15108,
    message: 'Invalid keyword_cate_name',
  },
  invalid_source: {
    code: 15109,
    message: 'Invalid source',
  },
  invalid_condition_code: {
    code: 15110,
    message: 'Invalid condition_code',
  },
  invalid_rh: {
    code: 15111,
    message: 'Invalid rh',
  },
  invalid_me: {
    code: 15112,
    message: 'Invalid me',
  },
  invalid_merchant_slug: {
    code: 15113,
    message: 'Invalid merchant_slug',
  },
  invalid_category_id: {
    code: 15114,
    message: 'Invalid category_id',
  },
  invalid_city_id: {
    code: 15115,
    message: 'Invalid city_id',
  },
  invalid_district_id: {
    code: 15116,
    message: 'Invalid district_id',
  },
  invalid_undefined: {
    code: 15117,
    message: 'Invalid undefined',
  },
  invalid_token: {
    code: 15118,
    message: 'Invalid token',
  },
  invalid_asin: {
    code: 15119,
    message: 'Invalid asin',
  },
  invalid_is_store: {
    code: 15120,
    message: 'Invalid is_store',
  },
  fail: {
    code: 15121,
    message: 'fail',
  },
  exception: {
    code: 15122,
    message: 'exception',
  },
  invalid_option: {
    code: 15123,
    message: 'invalid option',
  },
  invalid_paramaer: {
    code: 15124,
    message: 'invalid paramaer',
  },
  out_of_range: {
    code: 15125,
    message: 'out of range',
  },
  not_found: {
    code: 15126,
    message: 'not found',
  },
  already_exists: {
    code: 15127,
    message: 'already exists',
  },
  invalid_config: {
    code: 15128,
    message: 'invalid config',
  },
  wrong_auth: {
    code: 15129,
    message: 'wrong auth',
  },
  model_internal_server_error: {
    code: 15130,
    message: 'model internal server error',
  },
  model_no_connection: {
    code: 15131,
    message: 'model no connection',
  },
  connector_internal_server_error: {
    code: 15132,
    message: 'connector internal server error',
  },
  connector_no_connection: {
    code: 15133,
    message: 'connector no connection',
  },
  cache_internal_server_error: {
    code: 15134,
    message: 'cache internal server error',
  },
  cache_no_connection: {
    code: 15135,
    message: 'cache no connection',
  },
  thrift_internal_server_error: {
    code: 15136,
    message: 'thrift internal server error',
  },
  thrift_no_connection: {
    code: 15137,
    message: 'thrift no connection',
  },
  thrift_wrong_auth: {
    code: 15138,
    message: 'thrift wrong auth',
  },
  thrift_bad_request: {
    code: 15139,
    message: 'thrift bad request',
  },
  invalid_website_code: {
    code: 15140,
    message: 'invalid website_code',
  },
  invalid_original_category_original_id: {
    code: 15141,
    message: 'invalid original_category_original_id',
  },
  invalid_product_sku: {
    code: 15142,
    message: 'invalid product_sku',
  },
  invalid_original_merchant_original_id: {
    code: 15143,
    message: 'invalid original_merchant_original_id',
  },
  data_get_extra_info_empty: {
    code: 15121,
    message: 'Data get extra info is empty',
  },
};



  
//   var res1= Object.values(errorCode)

// var final =[];
// for(let i =0 ;i<res1.length;i++){
//     var obj ={};
//     var  f = res1[i].code.toString();
//     obj[f] = res1[i].message;
//     final.push(obj);
// }
// var myJsonString = JSON.stringify(final);
// console.log(myJsonString);
  
var res1= Object.values(errorCode)

var obj ={};
for(let i =0 ;i<res1.length;i++){
  obj[res1[i].code] = res1[i].message;
}
var myJsonString = JSON.stringify(obj);
console.log(myJsonString);
    // const map1 = res1.map((item)=>(
    //   // console.log(item.code);
    //   final.push({item.code})
    // ));
    // var item ={
    //    code: 103,
    //   message: 'Invalid range',
    // }
    // console.log(Object.values(item));
  
  