const ARABIC_DOTLESS_DICT = {
	"ا": "ا",
	"أ": "ا",
	"إ": "ا",
	"آ": "ا",
	"ٱ": "ا",
	"ء": "",
	"ب": "ٮ",
	"پ": "ٮ",
	"ت": "ٮ",
	"ث": "ٮ",
	"ج": "ح",
	"چ": "ح",
	"خ": "ح",
	"ح": "ح",
	"د": "د",
	"ذ": "د",
	"ر": "ر",
	"ز": "ر",
	"ژ": "ر",
	"س": "س",
	"ش": "س",
	"ص": "ص",
	"ض": "ص",
	"ط": "ط",
	"ظ": "ط",
	"ع": "ع",
	"غ": "ع",
	"ف": "ڡ",
	"ڤ": "ڡ",
	"ق": "ٯ",
	"ك": "ک",
	"گ": "ک",
	"ل": "ل",
	"م": "م",
	"ن": "ں",
	"ه": "ه",
	"و": "و",
	"ؤ": "و",
	"ة": "ه",
	"ى": "ى",
	"ي": "ى",
	"ئ": "ى"
};
const TASHKEEL = [
	"\u0600",
	"\u0601",
	"\u0602",
	"\u0603",
	"\u0604",
	"\u0605",
	"\u0610",
	"\u0611",
	"\u0612",
	"\u0613",
	"\u0614",
	"\u0615",
	"\u0616",
	"\u0617",
	"\u0618",
	"\u0619",
	"\u061A",
	"\u064B",
	"\u064C",
	"\u064D",
	"\u064E",
	"\u064F",
	"\u0650",
	"\u0651",
	"\u0652",
	"\u0653",
	"\u0654",
	"\u0655",
	"\u0656",
	"\u0657",
	"\u0658",
	"\u0659",
	"\u065A",
	"\u065B",
	"\u065C",
	"\u065D",
	"\u065E",
	"\u065F",
	"\u0670",
	"\u0674",
	"\u06D6",
	"\u06D7",
	"\u06D8",
	"\u06D9",
	"\u06DA",
	"\u06DB",
	"\u06DC",
	"\u06DF",
	"\u06E0",
	"\u06E1",
	"\u06E2",
	"\u06E3",
	"\u06E4",
	"\u06E5",
	"\u06E6",
	"\u06E7",
	"\u06E8",
	"\u06EA",
	"\u06EB",
	"\u06EC",
	"\u06ED"
]

/**
 * Remove all tashkeel from text.
 *
 * e.g.
 *   Input: "الخَيْلُ وَاللّيْلُ وَالبَيْداءُ تَعرِفُني"
 *   Output: "الخيل والليل والبيداء تعرفني"
 */
function removeTashkeel(text) {
	return text
		.replace(new RegExp("[" + TASHKEEL.join() + "]", "g"), "")
		.replace(/ٱ/g, "ا");
}

/**
 * Remove all dots & tashkeel from text.
 *
 * e.g.
 *   Input: "الخَيْلُ وَاللّيْلُ وَالبَيْداءُ تَعرِفُني"
 *   Output: "الحىل واللىل والٮىدا ٮعرڡٮى"
 */
function toOldArabic(sentence) {
	sentence = removeTashkeel(sentence);
	let newSentence = "";
	for (let letter = 0; letter < sentence.length; letter++) {
		// if letter is not Arabic letter => append to newSentence
		if (!ARABIC_DOTLESS_DICT.hasOwnProperty(sentence[letter])) {
			newSentence += sentence[letter];
		} else {
			// letter is Arabic letter => replace it with its corresponding dotless letter
			newSentence += ARABIC_DOTLESS_DICT[sentence[letter]];
			// Handle 'ن' Issue
			if (sentence[letter] == "ن") {
				const nextLetter = letter + 1;
				// if 'ن' is not last character replace it with 'ب' corresponding dotless letter => 'ٮ'
				if (nextLetter < sentence.length) {
					let temp = newSentence.substring(0, newSentence.length - 1);
					if (
						ARABIC_DOTLESS_DICT.hasOwnProperty(sentence[nextLetter]) ||
						sentence[nextLetter] == "ـ"
					) {
						temp += ARABIC_DOTLESS_DICT["ب"];
						newSentence = temp;
					}
				}
			}
		}
	}
	return newSentence;
}

/**
 * Remove all tatweel from text.
 *
 * e.g.
 *   Input: "رائـــــــع"
 *   Output: "رائع"
 */
function removeTatweel(text) {
	return text.replace(/ـ/g, "");
}

module.exports = {
	removeTatweel,
	removeTashkeel,
	toOldArabic,
};
