export const ARABIC_DOTLESS_DICT: { [key: string]: string } = {
	ا: 'ا',
	أ: 'ا',
	إ: 'ا',
	آ: 'ا',
	ٱ: 'ا',
	ء: '',
	ب: 'ٮ',
	پ: 'ٮ',
	ت: 'ٮ',
	ث: 'ٮ',
	ج: 'ح',
	چ: 'ح',
	خ: 'ح',
	ح: 'ح',
	د: 'د',
	ذ: 'د',
	ر: 'ر',
	ز: 'ر',
	ژ: 'ر',
	س: 'س',
	ش: 'س',
	ص: 'ص',
	ض: 'ص',
	ط: 'ط',
	ظ: 'ط',
	ع: 'ع',
	غ: 'ع',
	ف: 'ڡ',
	ڤ: 'ڡ',
	ق: 'ٯ',
	ك: 'ک',
	گ: 'ک',
	ل: 'ل',
	م: 'م',
	ن: 'ں',
	ه: 'ه',
	و: 'و',
	ؤ: 'و',
	ة: 'ه',
	ى: 'ى',
	ي: 'ى',
	ئ: 'ى',
};

export const STANDARD_LETTERS: string[] = [
	'ا',
	'أ',
	'آ',
	'إ',
	'ب',
	'ت',
	'ث',
	'ح',
	'ج',
	'خ',
	'د',
	'ذ',
	'ر',
	'ز',
	'س',
	'ش',
	'ص',
	'ض',
	'ط',
	'ظ',
	'ع',
	'غ',
	'ف',
	'ق',
	'ك',
	'ل',
	'م',
	'ن',
	'ه',
	'و',
	'ؤ',
	'ي',
	'ى',
	'ئ',
];

export const PRONOUNCED_LETTERS: { [key: string]: string } = {
	ا: 'ألف',
	إ: 'ألف_مكسورة',
	أ: 'ألف ',
	آ: 'ألف_مد',
	ء: 'همزة', // Not in STANDARD_LETTERS[]
	ب: 'باء',
	ت: 'تاء',
	ث: 'ثاء',
	ج: 'جيم',
	ح: 'حاء',
	خ: 'خاء',
	د: 'دال',
	ذ: 'ذال',
	ر: 'راء',
	ز: 'زاي',
	س: 'سين',
	ش: 'شين',
	ص: 'صاد',
	ض: 'ضاد',
	ط: 'طاء',
	ظ: 'ظاء',
	ع: 'عين',
	غ: 'غين',
	ف: 'فاء',
	ق: 'قاف',
	ك: 'كاف',
	ل: 'لام',
	م: 'ميم',
	ن: 'نون',
	ه: 'هاء',
	و: 'واو',
	ؤ: 'همزة_متوسطة_مضمومة',
	ى: 'ألف_لينة',
	ي: 'ياء',
	ئ: 'همزة_متوسطة_مكسورة',
	ة: 'تاء_مربوطة', // Not in STANDARD_LETTERS[]
};

export const LETTERS_TASHFEER_REPLACEMENT_DICT: { [key: string]: string[] } = {
	ا: ['|', '1', '!', 'ן', 'ן', 'ו', 'ⴶ'],
	ب: ['ٮ', 'ٻ', 'پ', 'ڀ', 'ٹ', 'ޞ', 'ސ', 'ݐ', 'ݒ', 'ݕ'],
	ت: ['ٮ', 'ٹ', 'ٺ', 'ټ', 'ٽ', 'ٿ', 'ސ', 'ڌ', 'ݓ'],
	ث: ['ٮ', 'ٹ', 'ٽ', 'ٿ', 'ޝ', 'ސ'],
	ح: ['ح', '7'],
	ج: ['ڃ', 'ڄ', 'چ', 'ڇ', 'ݘ'],
	خ: ['ح', 'ځ', 'ݗ'],
	د: ['ڈ', 'ډ', 'ڊ', 'ڍ', 'ݙ', 'ݚ', 'ב', 'כ'],
	ذ: ['ڈ', 'ڏ', 'ۮ', 'נ'],
	ر: ['ړ', 'ڕ', 'ږ', 'ݛ'],
	ز: ['ڑ', 'ڙ', 'ر', 'ژ', 'ږ', 'ۯ', 'ݫ', 'ݬ'],
	س: ['ނ', 'ښ', 'ݜ', 'ݭ'],
	ش: ['ښ', 'ݜ', 'ݭ', 'שׂ'],
	ص: ['صـު'],
	ض: ['ص', 'ض'],
	ط: ['ط'],
	ظ: ['ط', 'ظ'],
	ع: ['ݟ', 'ݝ'],
	غ: ['ڠ', 'ݝ', 'ݞ', 'ݟ', 'ع'],
	ف: ['ڡ', 'ڤ', 'ڦ', 'ڨ', 'ݠ', 'ݡ', 'ڡْ'],
	ق: ['ٯ', 'ڨ'],
	ك: ['ڬ', 'ڭ', 'ک', 'ڪ', 'ګ', 'گ', 'ڱ', 'ڳ', 'ݤ'],
	ل: ['ڵ', 'ݪ'],
	م: ['ݥ', 'ݦ', 'ޘ', 'ތ', 'ס', 'ם'],
	ن: ['ں', 'ڻ', 'ڼ', 'ڽ', 'ݔ', 'ݖ', 'ݧ', 'ݨ', 'ݩ'],
	ه: ['ۀ', 'ہ', 'ۂ', 'ۃ', 'ۿ'],
	و: ['ۅ', 'ۆ', 'ۇ', 'ۈ', 'ۏ', 'ۉ', 'ۋ'],
	ي: ['ۍ', 'ێ', 'ې', 'ے', 'ی۪'],
};

export const ALONE_LETTERS = ['د', 'ذ', 'ر', 'ز', 'و', 'ا', 'أ', 'إ', 'ء', 'ؤ', 'آ'];

export const ALEF: string[] = ['أ', 'إ', 'آ'];
export const YAA: string[] = ['ى', 'ئ'];
export const WAW: string[] = ['ؤ'];

/**
 * Array of common Arabic prefixes. These prefixes are used in the removeArabicPrefix function
 * to identify and remove them from the beginning of Arabic words.
 */
export const ARABIC_PREFIXES = ['أ', 'ا', 'إ', 'ال', 'ي', 'ت', 'ن', 'ب'];

/**
 * Array of common Arabic suffixes. These suffixes might be used in other functions
 * to identify and manipulate them at the end of Arabic words.
 */
export const ARABIC_SUFFIXES = ['ة', 'ه', 'ي', 'ى', 'ية', 'ين', 'ون', 'هم'];
